import { describe, expect, it } from "vitest";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { z } from "zod";

const file = fileURLToPath(new URL("./checked-skill.ts", import.meta.url));
const skill = readFileSync(new URL("../skills/microsoft-graph/SKILL.md", import.meta.url), "utf8");
const examples = [...skill.matchAll(/^```ts\n([\s\S]*?)^```/gmu)].map((match) => match[1]!);
function check(content: string) {
  const options: ts.CompilerOptions = {
    strict: true,
    noEmit: true,
    skipLibCheck: true,
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
  };
  const host = ts.createCompilerHost(options);
  const read = host.getSourceFile.bind(host);
  host.getSourceFile = (path, language, onError, create) =>
    path === file
      ? ts.createSourceFile(file, content, language, true)
      : read(path, language, onError, create);
  return ts
    .getPreEmitDiagnostics(ts.createProgram([file], options, host))
    .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"));
}
describe("official Graph SDK and model declarations", () => {
  it("includes its built exports and skill in the npm package", () => {
    const packed = z.array(z.object({ files: z.array(z.object({ path: z.string() })) })).parse(
      JSON.parse(
        execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts"], {
          cwd: fileURLToPath(new URL("../", import.meta.url)),
          encoding: "utf8",
        }),
      ),
    );
    const paths = packed[0]!.files.map((file) => file.path);
    for (const path of ["dist/index.js", "dist/index.d.ts", "skills/microsoft-graph/SKILL.md"])
      expect(paths).toContain(path);
  });
  it("checks every shipped SDK example against the built package", () => {
    expect(examples).toHaveLength(4);
    for (const example of examples) expect(check(example)).toEqual([]);
  });
  it("rejects invalid SDK methods and authored model values", () => {
    expect(
      check(
        'import { Client } from "@rook/microsoft-graph"; declare const client: Client; client.noSuchGraphMethod();',
      ),
    ).not.toEqual([]);
    expect(
      check(
        'import type { DriveItem } from "@rook/microsoft-graph"; const item: DriveItem = { size: "large" };',
      ),
    ).not.toEqual([]);
    expect(
      check(
        'import type { Message } from "@rook/microsoft-graph"; const mail: Message = { isDraft: "yes" };',
      ),
    ).not.toEqual([]);
  });
});
