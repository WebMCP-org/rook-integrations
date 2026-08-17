import { execFileSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const requiredPackedFiles = [
  "dist/google-workspace.d.ts",
  "dist/google-workspace.js",
  "skills/google-workspace/SKILL.md",
  "src/google-workspace.generated.ts",
];

const checkedInDist = snapshot(dist);
run("vp", ["pack"], root);
const builtDist = snapshot(dist);
if (
  checkedInDist.size !== builtDist.size ||
  [...checkedInDist].some(([path, contents]) => {
    const built = builtDist.get(path);
    return !built || !contents.equals(built);
  })
) {
  throw new Error("dist is stale; run `vp run build` and include the generated artifact");
}

const temporaryDirectory = mkdtempSync(join(tmpdir(), "rook-google-workspace-package-"));
try {
  const [{ filename, files }] = JSON.parse(
    execFileSync(
      "npm",
      ["pack", "--json", "--ignore-scripts", "--pack-destination", temporaryDirectory],
      { cwd: root, encoding: "utf8" },
    ),
  );
  const packedPaths = files.map((file) => file.path);
  const missing = requiredPackedFiles.filter((path) => !packedPaths.includes(path));
  if (missing.length) throw new Error(`Packed package is missing: ${missing.join(", ")}`);
  if (packedPaths.some((path) => path.endsWith(".map"))) {
    throw new Error("Packed package unexpectedly contains source maps");
  }

  const consumer = join(temporaryDirectory, "consumer");
  mkdirSync(consumer);
  writeFileSync(
    join(consumer, "package.json"),
    `${JSON.stringify({ name: "rook-package-consumer", private: true, type: "module" }, null, 2)}\n`,
  );
  run(
    "npm",
    ["install", "--ignore-scripts", "--no-audit", "--no-fund", join(temporaryDirectory, filename)],
    consumer,
  );
  run(
    process.execPath,
    [
      "--input-type=module",
      "--eval",
      'const google = await import("@rook/google-workspace"); if (google.GOOGLE_WORKSPACE_APPLICATION_ID !== "google-workspace" || typeof google.installGoogleWorkspace !== "function") throw new Error("Invalid root exports");',
    ],
    consumer,
  );

  const consumerSource = join(consumer, "consumer.ts");
  writeFileSync(
    consumerSource,
    `import {
  GOOGLE_WORKSPACE_APPLICATION_ID,
  installGoogleWorkspace,
  type GoogleWorkspaceNamespace,
} from "@rook/google-workspace";

declare const applications: ApplicationsNamespace;
export const google: GoogleWorkspaceNamespace = applications[GOOGLE_WORKSPACE_APPLICATION_ID];
export const install: typeof installGoogleWorkspace = installGoogleWorkspace;
`,
  );
  run(
    process.execPath,
    [
      fileURLToPath(import.meta.resolve("typescript/lib/tsc.js")),
      "--strict",
      "--noEmit",
      "--module",
      "NodeNext",
      "--moduleResolution",
      "NodeNext",
      "--target",
      "ESNext",
      "--lib",
      "ESNext,DOM,DOM.Iterable,DOM.AsyncIterable",
      consumerSource,
    ],
    consumer,
  );
  console.log(`Packed package verified (${packedPaths.length} files).`);
} finally {
  rmSync(temporaryDirectory, { force: true, recursive: true });
}

function run(command, args, cwd) {
  execFileSync(command, args, { cwd, stdio: "inherit" });
}

function snapshot(directory) {
  if (!existsSync(directory)) return new Map();
  return new Map(
    readdirSync(directory, { recursive: true })
      .filter((path) => statSync(join(directory, path)).isFile())
      .map((path) => [path, readFileSync(join(directory, path))]),
  );
}
