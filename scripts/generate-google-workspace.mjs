import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = join(root, "src/google-workspace.generated.ts");
const services = [
  ["drive", "drive-v3.json"],
  ["gmail", "gmail-v1.json"],
  ["calendar", "calendar-v3.json"],
  ["docs", "docs-v1.json"],
  ["sheets", "sheets-v4.json"],
  ["slides", "slides-v1.json"],
  ["chat", "chat-v1.json"],
  ["people", "people-v1.json"],
];

const documents = await Promise.all(
  services.map(async ([name, file]) => [
    name,
    JSON.parse(await readFile(join(root, "discovery", file), "utf8")),
  ]),
);

const generated = `${header()}${documents.map(([name, document]) => types(name, document)).join("\n")}
${workspaceType(documents)}
${runtimeCatalog(documents)}
`;

if (process.argv.includes("--check")) {
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current !== generated) {
    console.error(
      "Google Workspace generated client is stale; run vp run generate in packages/integrations.",
    );
    process.exitCode = 1;
  }
} else {
  await writeFile(outputPath, generated);
}

function header() {
  return `// Generated from the checked-in Google Discovery documents. Do not edit.\n// Regenerate with: vp run generate\n\n`;
}

function types(serviceName, document) {
  const namespace = `Google${pascal(serviceName)}`;
  const lines = [`export namespace ${namespace} {`];
  for (const [schemaName, schema] of Object.entries(document.schemas ?? {}).sort(byKey)) {
    comment(lines, schema.description, "  ");
    lines.push(`  export type ${pascal(schemaName)} = ${schemaType(schema, namespace, "  ")};`, "");
  }

  const methodTypes = [];
  const client = resourceType(
    document,
    document,
    namespace,
    [],
    methodTypes,
    serviceName === "drive",
  );
  lines.push(...methodTypes, `  export type Client = ${client};`, "}", "");
  return lines.join("\n");
}

function resourceType(document, resource, namespace, path, methodTypes, addDriveFileHelpers) {
  const members = [];
  for (const [methodName, method] of Object.entries(resource.methods ?? {}).sort(byKey)) {
    const typeName = `${path.map(pascal).join("")}${pascal(methodName)}Params`;
    methodTypes.push(methodParams(document, namespace, typeName, method));
    comment(members, method.description, "    ");
    const response = method.response?.$ref
      ? `${namespace}.${pascal(method.response.$ref)}`
      : "void";
    const result = method.supportsMediaDownload ? `${response} | Blob` : response;
    members.push(
      `    ${property(methodName)}(params${hasRequiredInput(method) ? "" : "?"}: ${typeName}): Promise<${result}>;`,
    );
  }
  for (const [resourceName, child] of Object.entries(resource.resources ?? {}).sort(byKey)) {
    members.push(
      `    ${property(resourceName)}: ${resourceType(document, child, namespace, [...path, resourceName], methodTypes, addDriveFileHelpers)};`,
    );
  }
  if (addDriveFileHelpers && path.join(".") === "files") {
    members.push(
      "    /** Upload a native browser File without base64 or a model-visible byte body. */",
      "    upload(input: DriveUploadInput): Promise<GoogleDrive.File>;",
      "    /** Stream Drive bytes directly into an atomically published workspace path. */",
      "    downloadToWorkspace(input: DriveDownloadInput): Promise<{ path: string; sha256: string; size: number }>;",
    );
  }
  return members.length === 0 ? "Record<string, never>" : `{\n${members.join("\n")}\n  }`;
}

function methodParams(document, namespace, typeName, method) {
  const lines = [];
  for (const [name, parameter] of methodParameters(document, method)) {
    comment(lines, parameter.description, "    ");
    const optional = parameter.required ? "" : "?";
    const type = parameter.repeated
      ? `Array<${discoveryType(parameter, namespace, "    ")}>`
      : discoveryType(parameter, namespace, "    ");
    lines.push(`    ${property(name)}${optional}: ${type};`);
  }
  if (method.request?.$ref) {
    lines.push(
      `    requestBody${method.request.required ? "" : "?"}: ${namespace}.${pascal(method.request.$ref)};`,
    );
  }
  return `  export type ${typeName} = ${lines.length === 0 ? "Record<string, never>" : `{\n${lines.join("\n")}\n  }`};`;
}

function schemaType(schema, namespace, indent) {
  if (schema.$ref) return `${namespace}.${pascal(schema.$ref)}`;
  if (schema.enum) return schema.enum.map((value) => JSON.stringify(value)).join(" | ");
  if (schema.type === "array")
    return `Array<${discoveryType(schema.items ?? {}, namespace, indent)}>`;
  if (schema.type === "object" || schema.properties || schema.additionalProperties) {
    const required = new Set(schema.required ?? []);
    const properties = Object.entries(schema.properties ?? {})
      .sort(byKey)
      .map(([name, value]) => {
        const description = jsdoc(value.description, `${indent}  `);
        return `${description}${indent}  ${property(name)}${required.has(name) ? "" : "?"}: ${discoveryType(value, namespace, `${indent}  `)};`;
      });
    const object =
      properties.length === 0 ? "Record<string, never>" : `{\n${properties.join("\n")}\n${indent}}`;
    if (!schema.additionalProperties) return object;
    const values = discoveryType(schema.additionalProperties, namespace, indent);
    return properties.length === 0
      ? `Record<string, ${values}>`
      : `${object} & Record<string, ${values}>`;
  }
  return primitiveType(schema.type);
}

function discoveryType(schema, namespace, indent) {
  const value = schemaType(schema, namespace, indent);
  return schema.type === "string" && schema.format === "byte" ? "string" : value;
}

function primitiveType(type) {
  switch (type) {
    case "boolean":
      return "boolean";
    case "integer":
    case "number":
      return "number";
    case "string":
      return "string";
    case "any":
    case undefined:
      return "unknown";
    default:
      return "unknown";
  }
}

function workspaceType(documents) {
  const drive = documents.find(([name]) => name === "drive")?.[1];
  const create = drive?.resources?.files?.methods?.create;
  if (!create) throw new Error("Drive files.create is missing from its Discovery document");
  const uploadParameters = methodParameters(drive, create)
    .map(([name, parameter]) => {
      const optional = parameter.required ? "" : "?";
      const type = parameter.repeated
        ? `Array<${discoveryType(parameter, "GoogleDrive", "  ")}>`
        : discoveryType(parameter, "GoogleDrive", "  ");
      return `  ${property(name)}${optional}: ${type};`;
    })
    .join("\n");
  const factories = documents
    .map(([name]) => `  ${property(name)}(): Google${pascal(name)}.Client;`)
    .join("\n");
  return `export type DriveUploadInput = {
  file: File;
  requestBody?: GoogleDrive.File;
${uploadParameters}
};

export type DriveDownloadInput = {
  acknowledgeAbuse?: boolean;
  fileId: string;
  path: string;
  sha256?: string;
};

export type GoogleWorkspaceNamespace = {
  /** Request the employee's Google Workspace grant from Chrome Identity. */
  authorize(): Promise<{ authorized: true }>;
${factories}
};`;
}

function runtimeCatalog(documents) {
  const catalog = Object.fromEntries(
    documents.map(([name, document]) => [
      name,
      {
        baseUrl: document.baseUrl,
        resources: runtimeResource(document, document),
      },
    ]),
  );
  return `export const GOOGLE_WORKSPACE_SERVICES = ${JSON.stringify(catalog, null, 2)} as const;`;
}

function runtimeResource(document, resource) {
  const methods = Object.fromEntries(
    Object.entries(resource.methods ?? {})
      .sort(byKey)
      .map(([name, method]) => [
        name,
        {
          httpMethod: method.httpMethod,
          parameters: Object.fromEntries(
            methodParameters(document, method).map(([parameterName, parameter]) => [
              parameterName,
              {
                location: parameter.location,
                repeated: Boolean(parameter.repeated),
                required: Boolean(parameter.required),
              },
            ]),
          ),
          path: method.path,
          request: Boolean(method.request),
          ...(method.mediaUpload?.protocols?.simple?.path
            ? { uploadPath: method.mediaUpload.protocols.simple.path }
            : {}),
        },
      ]),
  );
  const resources = Object.fromEntries(
    Object.entries(resource.resources ?? {})
      .sort(byKey)
      .map(([name, child]) => [name, runtimeResource(document, child)]),
  );
  return { methods, resources };
}

function hasRequiredInput(method) {
  return (
    Boolean(method.request?.required) ||
    Object.values(method.parameters ?? {}).some((p) => p.required)
  );
}

function methodParameters(document, method) {
  const unsafeCommon = new Set([
    "access_token",
    "callback",
    "key",
    "oauth_token",
    "uploadType",
    "upload_protocol",
  ]);
  return Object.entries({
    ...Object.fromEntries(
      Object.entries(document.parameters ?? {}).filter(([name]) => !unsafeCommon.has(name)),
    ),
    ...(method.parameters ?? {}),
  }).sort(byKey);
}

function comment(lines, value, indent) {
  if (value) lines.push(jsdoc(value, indent).trimEnd());
}

function jsdoc(value, indent) {
  if (!value) return "";
  const clean = String(value).replaceAll("*/", "* /").replace(/\s+/gu, " ").trim();
  return `${indent}/** ${clean} */\n`;
}

function property(name) {
  return /^[A-Za-z_$][\w$]*$/u.test(name) ? name : JSON.stringify(name);
}

function pascal(value) {
  const result = String(value)
    .replace(/[^A-Za-z0-9_$]+(.)?/gu, (_match, next = "") => next.toUpperCase())
    .replace(/^./u, (first) => first.toUpperCase());
  return /^\d/u.test(result) ? `_${result}` : result;
}

function byKey([left], [right]) {
  return left.localeCompare(right);
}
