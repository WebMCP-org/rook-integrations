import {
  GOOGLE_WORKSPACE_SERVICES,
  type GoogleWorkspaceNamespace,
} from "./google-workspace.generated";

export * from "./google-workspace.generated";

type GoogleWorkspaceHost = {
  __invalidateToken(token: string): Promise<void>;
  __token(
    interactive: boolean,
  ): Promise<
    { ok: true; token: string } | { ok: false; error: { kind: "authentication_required" } }
  >;
};

type GoogleWorkspaceFiles = {
  writeStream(input: {
    expectedSha256?: string;
    path: string;
    stream: ReadableStream<Uint8Array>;
  }): Promise<{ path: string; sha256: string; size: number }>;
};

type GoogleParameterDescription = {
  readonly location: string;
  readonly repeated: boolean;
  readonly required: boolean;
};

type GoogleMethodDescription = {
  readonly httpMethod: string;
  readonly parameters: Readonly<Record<string, GoogleParameterDescription>>;
  readonly path: string;
  readonly request: boolean;
  readonly uploadPath?: string;
};

type GoogleResourceDescription = {
  readonly methods: Readonly<Record<string, GoogleMethodDescription>>;
  readonly resources: Readonly<Record<string, GoogleResourceDescription>>;
};

type GoogleServiceDescription = {
  readonly baseUrl: string;
  readonly resources: GoogleResourceDescription;
};

type GoogleWorkspaceServices = Readonly<Record<string, GoogleServiceDescription>>;

export function installGoogleWorkspace(
  target: Record<string, unknown>,
  transport: GoogleWorkspaceHost,
  workspace: GoogleWorkspaceFiles,
  services: GoogleWorkspaceServices = GOOGLE_WORKSPACE_SERVICES,
): GoogleWorkspaceNamespace {
  const NativeBlob = Blob;
  const NativeFile = File;
  const NativeHeaders = Headers;
  const NativeReadableStream = ReadableStream;
  const NativeTextDecoder = TextDecoder;
  const NativeURL = URL;
  const nativeFetch = fetch;
  const nativeJsonParse = JSON.parse;
  const nativeJsonStringify = JSON.stringify;
  const responseErrorLimit = 64 * 1024;
  let token: Promise<string> | undefined;

  const accessToken = (interactive: boolean) => {
    if (!token) {
      token = transport
        .__token(interactive)
        .then((authorization) => {
          if (!authorization.ok) {
            throw new Error(
              "Google Workspace authentication is required; call await ctx.google.authorize()",
            );
          }
          return authorization.token;
        })
        .catch((error) => {
          token = undefined;
          throw error;
        });
    }
    return token;
  };

  const readBoundedError = async (response: Response) => {
    if (!response.body) return response.statusText;
    const decoder = new NativeTextDecoder();
    const reader = response.body.getReader();
    let text = "";
    let bytes = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const remaining = responseErrorLimit - bytes;
        if (remaining <= 0) break;
        const chunk = value.byteLength > remaining ? value.subarray(0, remaining) : value;
        bytes += chunk.byteLength;
        text += decoder.decode(chunk, { stream: bytes < responseErrorLimit });
        if (bytes === responseErrorLimit) break;
      }
      text += decoder.decode();
    } finally {
      await reader.cancel().catch(() => undefined);
    }
    return text || response.statusText || `Google Workspace request failed (${response.status})`;
  };

  const authenticatedFetch = async (url: string, init: RequestInit = {}) => {
    const authorization = await accessToken(false);
    const headers = new NativeHeaders(init.headers);
    headers.set("authorization", `Bearer ${authorization}`);
    const response = await nativeFetch(url, { ...init, headers });
    if (response.status === 401) {
      token = undefined;
      await transport.__invalidateToken(authorization);
    }
    if (!response.ok) throw new Error(await readBoundedError(response));
    return response;
  };

  const requestUrl = (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown>,
    path = method.path,
  ) => {
    const used = new Set<string>();
    const renderedPath = path.replace(/\{(\+?)([^}]+)\}/gu, (_match, reserved, name) => {
      const value = input[name];
      if (value === undefined || value === null || value === "") {
        throw new Error(`Google Workspace request requires ${name}`);
      }
      used.add(name);
      const stringValue = String(value);
      return reserved
        ? stringValue.split("/").map(encodeURIComponent).join("/")
        : encodeURIComponent(stringValue);
    });
    const url = new NativeURL(renderedPath, service.baseUrl);
    for (const [name, parameter] of Object.entries(method.parameters)) {
      if (used.has(name)) continue;
      const value = input[name];
      if (parameter.required && (value === undefined || value === null || value === "")) {
        throw new Error(`Google Workspace request requires ${name}`);
      }
      if (value === undefined || value === null) continue;
      used.add(name);
      if (parameter.location !== "query") continue;
      if (parameter.repeated && Array.isArray(value)) {
        for (const item of value) url.searchParams.append(name, String(item));
      } else {
        url.searchParams.append(name, String(value));
      }
    }
    for (const name of Object.keys(input)) {
      if (name !== "requestBody" && !used.has(name)) {
        throw new Error(`Google Workspace request does not accept ${name}`);
      }
    }
    return url.href;
  };

  const send = async (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown>,
    options: { body?: BodyInit; path?: string } = {},
  ) => {
    const body =
      options.body ??
      (method.request && input.requestBody !== undefined
        ? nativeJsonStringify(input.requestBody)
        : undefined);
    return await authenticatedFetch(requestUrl(service, method, input, options.path), {
      method: method.httpMethod,
      ...(body === undefined ? {} : { body }),
      ...(options.body === undefined && body !== undefined
        ? { headers: { "content-type": "application/json" } }
        : {}),
    });
  };

  const invoke = async (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown> = {},
  ) => {
    const response = await send(service, method, input);
    if (response.status === 204 || response.headers.get("content-length") === "0") return undefined;
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("json")) return nativeJsonParse(await response.text());
    return await response.blob();
  };

  const buildResource = (
    service: GoogleServiceDescription,
    resource: GoogleResourceDescription,
  ): Record<string, unknown> => {
    const client: Record<string, unknown> = {};
    for (const [name, method] of Object.entries(resource.methods)) {
      client[name] = (input?: Record<string, unknown>) => invoke(service, method, input);
    }
    for (const [name, child] of Object.entries(resource.resources)) {
      client[name] = buildResource(service, child);
    }
    return client;
  };

  const namespace: Record<string, unknown> = {
    authorize: async () => {
      await accessToken(true);
      return { authorized: true };
    },
  };
  for (const [name, service] of Object.entries(services)) {
    if (name !== "drive") namespace[name] = () => buildResource(service, service.resources);
  }

  const driveService = services.drive;
  const drive = buildResource(driveService, driveService.resources);
  const driveFiles = buildResource(driveService, driveService.resources.resources.files);
  drive.files = driveFiles;
  namespace.drive = () => drive;
  const createFile = driveService.resources.resources.files.methods.create;
  const getFile = driveService.resources.resources.files.methods.get;
  driveFiles.upload = async (input: Record<string, unknown>) => {
    const { file, ...requestInput } = input;
    if (!(file instanceof NativeFile)) {
      throw new Error("drive.files.upload requires a native File");
    }
    const boundary = `rook-${crypto.randomUUID()}`;
    const requestBody = requestInput.requestBody ?? { name: file.name };
    const body = new NativeBlob([
      `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
      nativeJsonStringify(requestBody),
      `\r\n--${boundary}\r\nContent-Type: ${file.type || "application/octet-stream"}\r\n\r\n`,
      file,
      `\r\n--${boundary}--\r\n`,
    ]);
    const response = await authenticatedFetch(
      requestUrl(
        driveService,
        createFile,
        {
          ...requestInput,
          fields: requestInput.fields ?? "id,name,mimeType,size,sha256Checksum",
        },
        createFile.uploadPath,
      ),
      {
        body,
        headers: { "content-type": `multipart/related; boundary=${boundary}` },
        method: createFile.httpMethod,
      },
    );
    return nativeJsonParse(await response.text());
  };
  driveFiles.downloadToWorkspace = async (input: Record<string, unknown>) => {
    const { path, sha256, ...requestInput } = input;
    const response = await send(driveService, getFile, { ...requestInput, alt: "media" });
    if (!(response.body instanceof NativeReadableStream)) {
      throw new Error("Google Drive download returned an invalid response body");
    }
    return await workspace.writeStream({
      path: String(path),
      stream: response.body,
      ...(typeof sha256 === "string" ? { expectedSha256: sha256 } : {}),
    });
  };

  Object.assign(target, namespace);
  return target as GoogleWorkspaceNamespace;
}
