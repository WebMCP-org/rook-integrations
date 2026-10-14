import { describe, expect, it } from "vitest";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = fileURLToPath(new URL("../", import.meta.url));
const require = createRequire(import.meta.url);
const officeTypes = require.resolve("@types/office-js/index.d.ts");
const markdown = readFileSync(
  new URL("../skills/microsoft365/references/office-js-examples.md", import.meta.url),
  "utf8",
);
const examples = [...markdown.matchAll(/^```ts\n([\s\S]*?)^```/gmu)].map((match) => match[1]!);

function check(source: string) {
  const file = root + "test/checked-example.ts";
  const content =
    'declare const page: import("@playwright/test").Page;\nasync function execute() {\n' +
    source +
    "\n}\n";
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
    .getPreEmitDiagnostics(ts.createProgram([file, officeTypes], options, host))
    .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"));
}

describe("checked Office.js skill examples", () => {
  it("ships six complete examples using the real Office and Playwright declarations", () => {
    expect(examples).toHaveLength(6);
    for (const example of examples) expect(check(example)).toEqual([]);
  });
  it("rejects a nonexistent Office member and a wrong font value", () => {
    expect(
      check(
        "return await page.mainFrame().evaluate(() => Excel.run(async context => { context.workbook.noSuchWorksheet(); }));",
      ),
    ).not.toEqual([]);
    expect(
      check(
        'return await page.mainFrame().evaluate(() => Excel.run(async context => { context.workbook.worksheets.getActiveWorksheet().getRange("A1").format.font.size = "large"; }));',
      ),
    ).not.toEqual([]);
  });
  it("packages only a skill and keeps no operation runtime", () => {
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
      files: string[];
      main?: string;
      exports?: object;
      dependencies?: object;
    };
    expect(pkg.files).toEqual(["skills"]);
    expect(pkg.main).toBeUndefined();
    expect(pkg.exports).toBeUndefined();
    expect(pkg.dependencies).toBeUndefined();
    expect(markdown).not.toContain("rook_m365_");
  });
});
