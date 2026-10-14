import ts from "typescript";
import { createServer, type IncomingMessage } from "node:http";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";
import {
  installGoogleWorkspace,
  GOOGLE_WORKSPACE_REQUESTS,
  type GoogleDocs,
} from "@rook/google-workspace";
import { z } from "zod";

const docsTextStyleSchema = z.object({
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  fontSize: z.object({ magnitude: z.number(), unit: z.literal("PT") }).optional(),
  link: z.object({ url: z.string() }).optional(),
});
const requestSchema = z.looseObject({
  requests: z.array(
    z.looseObject({
      deleteContentRange: z
        .object({
          range: z.object({
            tabId: z.literal("tab-id"),
            startIndex: z.number(),
            endIndex: z.number(),
          }),
        })
        .optional(),
      insertText: z
        .object({ location: z.object({ tabId: z.string(), index: z.number() }), text: z.string() })
        .optional(),
      repeatCell: z
        .object({
          fields: z.literal("userEnteredFormat.textFormat.bold"),
          range: z.object({ sheetId: z.literal(0) }),
          cell: z.object({
            userEnteredFormat: z.object({ textFormat: z.object({ bold: z.boolean() }) }),
          }),
        })
        .optional(),
      deleteSheet: z.object({ sheetId: z.number() }).optional(),
      updateTextStyle: z
        .union([
          z.object({
            objectId: z.literal("title-shape-id"),
            fields: z.literal("bold"),
            style: z.object({ bold: z.boolean() }),
          }),
          z.object({
            range: z.object({
              tabId: z.literal("tab-id"),
              startIndex: z.number(),
              endIndex: z.number(),
            }),
            fields: z.literal("*"),
            textStyle: docsTextStyleSchema,
          }),
        ])
        .optional(),
      createImage: z
        .object({
          objectId: z.string(),
          url: z.string(),
          elementProperties: z.object({ pageObjectId: z.literal("slide-id") }),
        })
        .optional(),
    }),
  ),
  writeControl: z.object({ requiredRevisionId: z.literal("revision-1") }).optional(),
});
const receiptSchema = z.object({
  documentEdit: z.object({
    changes: z.array(z.object({ status: z.string(), description: z.string() })),
  }),
});

async function body(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  for await (const chunk of request) chunks.push(Buffer.from(chunk));
  return requestSchema.parse(JSON.parse(Buffer.concat(chunks).toString("utf8")));
}

type DocumentEditReceipt = z.infer<typeof receiptSchema>;

function example(name: string, index = 0, replacement?: string) {
  const markdown = readFileSync(
    new URL("../skills/google-workspace/references/document-editing.md", import.meta.url),
    "utf8",
  );
  const indices: Record<string, number[]> = {
    "google-docs": [0],
    "google-sheets": [1, 2],
    "google-slides": [3, 4, 5],
  };
  const blockIndex = indices[name]?.[index];
  const block = [...markdown.matchAll(/^```ts\n([\s\S]*?)^```/gmu)][blockIndex ?? -1]?.[1];
  if (!block) throw new Error("The shipped example is missing");
  // SAFETY: execute the repository-authored, preflight-checked example, not provider content.
  const source =
    replacement === undefined
      ? block
      : block.replace(
          'const newText = "The launch is on Tuesday.";',
          () => `const newText = ${JSON.stringify(replacement)};`,
        );
  const runnable = ts.transpileModule(`(async function(applications) { ${source} })`, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
  }).outputText;
  const run = runInNewContext(runnable, {
    console,
    crypto,
    URL,
    JSON,
  }) as (
    applications: Record<string, ReturnType<typeof installGoogleWorkspace>>,
  ) => Promise<DocumentEditReceipt>;
  return async (applications: Record<string, ReturnType<typeof installGoogleWorkspace>>) =>
    receiptSchema.parse(await run(applications));
}

async function fixture(
  failVerification = false,
  documentCase: "plain" | "linked" | "plain-after-link" | "missing-link-readback" = "plain",
) {
  const prefix = documentCase === "plain" ? "" : "Keep café — Δ — 🍰. ";
  const target = "The launch is on Monday.";
  const sentence = `${prefix}${target}\nDetailed evidence and citations survive.\n`;
  const linkedStyle: GoogleDocs.TextStyle = {
    bold: true,
    italic: true,
    fontSize: { magnitude: 18, unit: "PT" },
    link: { url: "https://example.org/launch" },
  };
  const docUnits: { unit: string; style: GoogleDocs.TextStyle }[] = sentence
    .split("")
    .map((unit, index) => ({
      unit,
      style: structuredClone(
        (
          documentCase === "plain-after-link"
            ? index < prefix.length
            : documentCase !== "plain" &&
              index >= prefix.length &&
              index < prefix.length + target.length
        )
          ? linkedStyle
          : {},
      ),
    }));
  function documentContent() {
    const paragraphs: {
      startIndex: number;
      paragraph: {
        elements: {
          startIndex: number;
          textRun: { content: string; textStyle: GoogleDocs.TextStyle };
        }[];
      };
    }[] = [];
    let elements: (typeof paragraphs)[number]["paragraph"]["elements"] = [];
    let paragraphStart = 1;
    for (let index = 0; index < docUnits.length; index++) {
      const current = docUnits[index]!;
      const previous = elements.at(-1);
      if (previous && JSON.stringify(previous.textRun.textStyle) === JSON.stringify(current.style))
        previous.textRun.content += current.unit;
      else
        elements.push({
          startIndex: index + 1,
          textRun: { content: current.unit, textStyle: current.style },
        });
      if (current.unit === "\n" || index === docUnits.length - 1) {
        paragraphs.push({ startIndex: paragraphStart, paragraph: { elements } });
        elements = [];
        paragraphStart = index + 2;
      }
    }
    return paragraphs;
  }
  const docs = {
    documentId: "document-id",
    title: "Research",
    revisionId: "revision-1",
    tabs: [
      {
        tabProperties: { tabId: "parent" },
        childTabs: [
          {
            tabProperties: { tabId: "tab-id" },
            documentTab: {
              body: {
                content: documentContent(),
              },
              headers: { h1: { content: "The launch is on Monday." } },
            },
          },
        ],
      },
      { tabProperties: { tabId: "unrelated" }, documentTab: { body: { content: "untouched" } } },
    ],
  };
  const cells = Array.from({ length: 7 }, (_, index) => ({
    userEnteredValue: { formulaValue: `=A${index + 1}` },
    userEnteredFormat: {
      textFormat: { bold: false, italic: true },
      numberFormat: { type: "NUMBER" },
    },
    dataValidation: {
      condition: { type: "ONE_OF_LIST", values: [{ userEnteredValue: "Planned" }] },
    },
    note: "Preserved evidence",
  }));
  const sheet = {
    properties: { sheetId: 0, title: "Planner's tab" },
    data: [{ rowData: [{ values: cells }] }],
    charts: [{ chartId: 5 }],
  };
  const spreadsheet = {
    properties: { title: "Planner" },
    sheets: [
      sheet,
      { properties: { sheetId: 123, title: "Remove me" } },
      { properties: { sheetId: 456, title: "Evidence" }, charts: [{ chartId: 9 }] },
    ],
  };
  const title = {
    objectId: "title-shape-id",
    ["shape"]: {
      text: {
        textElements: [
          { textRun: { content: "Research title\n", style: { bold: false, italic: true } } },
        ],
      },
    },
    transform: { scaleX: 1, scaleY: 1, translateX: 20, translateY: 40, unit: "PT" },
    size: { width: { magnitude: 300, unit: "PT" } },
  };
  const slide = {
    objectId: "slide-id",
    pageElements: [title],
    slideProperties: { notesPage: { objectId: "notes" } },
  };
  const untouched = JSON.stringify({
    header: docs.tabs[0]?.childTabs?.[0]?.documentTab.headers,
    otherTab: docs.tabs[1],
    otherSheet: spreadsheet.sheets[2],
    notes: slide.slideProperties,
  });
  const mutations: ReturnType<typeof requestSchema.parse>[] = [];
  const reads: string[] = [];
  const server = createServer(async (request, response) => {
    try {
      expect(request.headers.authorization).toBe("Bearer fixture-token");
      const url = new URL(request.url ?? "/", "http://fixture.test");
      response.setHeader("content-type", "application/json");
      if (request.method === "GET") {
        reads.push(url.href);
        if (failVerification && mutations.length > 0) {
          response.writeHead(503);
          response.end(JSON.stringify({ error: { message: "Verification unavailable" } }));
          return;
        }
        const resource = url.pathname.includes("documents")
          ? docs
          : url.pathname.includes("spreadsheets")
            ? spreadsheet
            : slide;
        response.end(JSON.stringify(resource));
        return;
      }
      const input = await body(request);
      mutations.push(input);
      for (const update of input.requests) {
        if (update.deleteContentRange) {
          if (!input.writeControl)
            throw new Error("Index-based document edits require the observed revision");
          const range = update.deleteContentRange.range;
          docUnits.splice(range.startIndex - 1, range.endIndex - range.startIndex);
        }
        if (update.insertText) {
          const index = update.insertText.location.index - 1;
          const inherited = structuredClone(docUnits[Math.max(0, index - 1)]?.style ?? {});
          // Google inserts inherit neighboring text style; links are not retained.
          delete inherited.link;
          docUnits.splice(
            index,
            0,
            ...update.insertText.text
              .split("")
              .map((unit) => ({ unit, style: structuredClone(inherited) })),
          );
        }
        if (update.repeatCell) {
          for (const cell of cells)
            cell.userEnteredFormat.textFormat.bold =
              update.repeatCell.cell.userEnteredFormat.textFormat.bold;
        }
        if (update.deleteSheet)
          spreadsheet.sheets = spreadsheet.sheets.filter(
            (item) => item.properties.sheetId !== update.deleteSheet?.sheetId,
          );
        if (update.updateTextStyle) {
          const styleUpdate = update.updateTextStyle;
          if ("objectId" in styleUpdate) {
            title["shape"].text.textElements[0]!.textRun.style.bold = styleUpdate.style.bold;
          } else {
            for (
              let index = styleUpdate.range.startIndex - 1;
              index < styleUpdate.range.endIndex - 1;
              index++
            ) {
              const unit = docUnits[index];
              if (!unit) throw new Error("Style range exceeds the document");
              unit.style = structuredClone(styleUpdate.textStyle);
              if (documentCase === "missing-link-readback") delete unit.style.link;
            }
          }
        }
        if (update.createImage) {
          // The HTTP fixture models Google's native image object, not the client implementation.
          Object.assign(slide, {
            pageElements: [
              ...slide.pageElements,
              {
                objectId: update.createImage.objectId,
                image: { sourceUrl: update.createImage.url },
              },
            ],
          });
        }
      }
      const documentBody = docs.tabs[0]?.childTabs?.[0]?.documentTab.body;
      if (documentBody) documentBody.content = documentContent();
      response.end(JSON.stringify({}));
    } catch (error) {
      response.writeHead(500);
      response.end(JSON.stringify({ error: { message: String(error) } }));
    }
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = z.object({ port: z.number() }).parse(server.address());
  const baseUrl = `http://127.0.0.1:${address.port}/`;
  const services = Object.fromEntries(
    Object.entries(GOOGLE_WORKSPACE_REQUESTS).map(([key, service]) => [
      key,
      { ...service, baseUrl },
    ]),
  );
  const google = installGoogleWorkspace(
    {},
    {
      __token: async () => ({ ok: true, token: "fixture-token" }),
      __invalidateToken: async () => {},
    },
    {
      writeStream: async () => {
        throw new Error("Document edits do not transfer files");
      },
    },
    services,
  );
  return {
    google,
    docs,
    docUnits,
    cells,
    spreadsheet,
    slide,
    mutations,
    reads,
    preserved: () =>
      JSON.stringify({
        header: docs.tabs[0]?.childTabs?.[0]?.documentTab.headers,
        otherTab: docs.tabs[1],
        otherSheet: spreadsheet.sheets.find((item) => item.properties.sheetId === 456),
        notes: slide.slideProperties,
      }),
    untouched,
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  };
}

describe("shipped native document edit examples over real HTTP", () => {
  it.each([
    ["google-docs", 0],
    ["google-sheets", 0],
    ["google-sheets", 1],
    ["google-slides", 0],
  ] as const)(
    "%s example %i verifies a narrow edit and preserves unrelated structures",
    async (name, index) => {
      const f = await fixture();
      const originalCells = structuredClone(f.cells);
      try {
        const receipt = receiptSchema.parse(
          await example(name, index)({ "google-workspace": f.google }),
        );
        expect(receipt.documentEdit.changes[0]?.status).toBe("verified");
        expect(f.mutations).toHaveLength(1);
        expect(f.reads.length).toBeGreaterThanOrEqual(2);
        expect(f.preserved()).toBe(f.untouched);
        expect(
          f.cells.map((cell) => ({
            ...cell,
            userEnteredFormat: {
              ...cell.userEnteredFormat,
              textFormat: { ...cell.userEnteredFormat.textFormat, bold: false },
            },
          })),
        ).toEqual(originalCells);
      } finally {
        await f.close();
      }
    },
  );

  it.each(["linked", "plain-after-link"] as const)(
    "preserves the target's native %s style after replacement at a Unicode offset",
    async (documentCase) => {
      const f = await fixture(false, documentCase);
      const before = structuredClone(f.docUnits);
      try {
        const result = await example("google-docs")({ "google-workspace": f.google });
        expect(result.documentEdit.changes[0]?.status).toBe("verified");
        const original = before.map((item) => item.unit).join("");
        const start = original.indexOf("The launch is on Monday.");
        const end = start + "The launch is on Monday.".length;
        const newEnd = start + "The launch is on Tuesday.".length;
        expect(f.docUnits.map((item) => item.unit).join("")).toBe(
          original.replace("The launch is on Monday.", "The launch is on Tuesday."),
        );
        expect(f.docUnits.slice(0, start)).toEqual(before.slice(0, start));
        expect(f.docUnits.slice(newEnd)).toEqual(before.slice(end));
        expect(
          f.docUnits
            .slice(start, newEnd)
            .every((item) => JSON.stringify(item.style) === JSON.stringify(before[start]!.style)),
        ).toBe(true);
        expect(f.mutations).toHaveLength(1);
      } finally {
        await f.close();
      }
    },
  );

  it("leaves a text-matching edit unverified when its target hyperlink is missing", async () => {
    const f = await fixture(false, "missing-link-readback");
    try {
      const result = await example("google-docs")({ "google-workspace": f.google });
      expect(f.docUnits.map((item) => item.unit).join("")).toContain("The launch is on Tuesday.");
      expect(result.documentEdit.changes[0]?.status).toBe("applied");
      expect(result.documentEdit.changes[0]?.description).toContain("needs checking");
      expect(f.mutations).toHaveLength(1);
    } finally {
      await f.close();
    }
  });

  it("inserts an image without file replacement and leaves visual verification pending", async () => {
    const f = await fixture();
    try {
      const result = receiptSchema.parse(
        await example("google-slides", 1)({ "google-workspace": f.google }),
      );
      expect(result.documentEdit.changes[0]?.status).toBe("applied");
      expect(f.slide.pageElements).toHaveLength(2);
      expect(f.preserved()).toBe(f.untouched);
      expect(f.mutations).toHaveLength(1);
    } finally {
      await f.close();
    }
  });

  it.each([
    ["google-docs", 0],
    ["google-sheets", 0],
    ["google-sheets", 1],
    ["google-slides", 0],
    ["google-slides", 1],
  ] as const)(
    "%s example %i reports applied when read-back fails and does not repeat the write",
    async (name, index) => {
      const f = await fixture(true);
      try {
        const result = receiptSchema.parse(
          await example(name, index)({ "google-workspace": f.google }),
        );
        expect(result.documentEdit.changes[0]?.status).toBe("applied");
        expect(result.documentEdit.changes[0]?.description).toContain("Verification unavailable");
        expect(f.mutations).toHaveLength(1);
        expect(f.preserved()).toBe(f.untouched);
      } finally {
        await f.close();
      }
    },
  );
});

async function layoutFixture(caseName: "normalized" | "drifted" | "read-fails" | "grouped") {
  const boxes = [1, 2, 3, 4].map((index) => ({
    objectId: `card_text_${index}`,
    size: {
      width: { magnitude: 2540000, unit: "EMU" },
      height: { magnitude: 1270000, unit: "EMU" },
    },
    transform: {
      scaleX: 1,
      scaleY: 1,
      shearX: 0,
      shearY: 0,
      translateX: 0,
      translateY: 0,
      unit: "PT",
    },
    shape: {
      text: { textElements: [{ textRun: { content: `Card ${index} evidence café Δ 🍰\n` } }] },
    },
  }));
  const other = {
    objectId: "untouched-photo",
    image: { sourceUrl: "https://example.com/source.png" },
  };
  const page = {
    objectId: "slide-id",
    pageElements: [...boxes, other],
    slideProperties: { notesPage: { objectId: "notes" } },
  };
  const original = structuredClone(page);
  const requests: z.infer<typeof layoutWireSchema>[] = [];
  let afterRead = false;
  const server = createServer(async (request, response) => {
    response.setHeader("content-type", "application/json");
    if (request.method === "GET") {
      if (request.url?.includes("/pages/")) {
        afterRead = true;
        if (caseName === "read-fails") {
          response.writeHead(503);
          response.end(JSON.stringify({ error: { message: "Read failed" } }));
          return;
        }
        response.end(JSON.stringify(page));
        return;
      }
      const readPage =
        caseName === "grouped"
          ? {
              ...page,
              pageElements: [{ objectId: "group", elementGroup: { children: boxes } }, other],
            }
          : page;
      response.end(
        JSON.stringify({
          pageSize: {
            width: { magnitude: 9144000, unit: "EMU" },
            height: { magnitude: 5143500, unit: "EMU" },
          },
          revisionId: "layout-revision",
          slides: [readPage],
        }),
      );
      return;
    }
    try {
      let text = "";
      for await (const chunk of request) text += String(chunk);
      const body = layoutWireSchema.parse(JSON.parse(text));
      requests.push(body);
      for (const { updatePageElementTransform: update } of body.requests) {
        const box = boxes.find((item) => item.objectId === update.objectId);
        if (!box) throw new Error("Unknown element");
        // Model Google's documented normalization: base size halves, scale doubles.
        box.size.width.magnitude /= 2;
        box.size.height.magnitude /= 2;
        box.transform = {
          ...update.transform,
          scaleX: update.transform.scaleX * 2,
          scaleY: update.transform.scaleY * 2,
        };
        if (caseName === "drifted") box.transform.translateX = 0;
      }
      response.end("{}");
    } catch (error) {
      response.writeHead(400);
      response.end(JSON.stringify({ error: { message: String(error) } }));
    }
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = z.object({ port: z.number() }).parse(server.address()).port;
  const services = Object.fromEntries(
    Object.entries(GOOGLE_WORKSPACE_REQUESTS).map(([key, value]) => [
      key,
      { ...value, baseUrl: `http://127.0.0.1:${port}/` },
    ]),
  );
  const google = installGoogleWorkspace(
    {},
    { __token: async () => ({ ok: true, token: "fixture" }), __invalidateToken: async () => {} },
    {
      writeStream: async () => {
        throw new Error("No file transfer");
      },
    },
    services,
  );
  return {
    google,
    page,
    original,
    requests,
    afterRead: () => afterRead,
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  };
}
const layoutWireSchema = z.strictObject({
  writeControl: z.object({ requiredRevisionId: z.literal("layout-revision") }),
  requests: z
    .array(
      z.strictObject({
        updatePageElementTransform: z.strictObject({
          objectId: z.string(),
          applyMode: z.literal("ABSOLUTE"),
          transform: z.strictObject({
            scaleX: z.number(),
            scaleY: z.number(),
            shearX: z.literal(0),
            shearY: z.literal(0),
            translateX: z.number(),
            translateY: z.number(),
            unit: z.literal("PT"),
          }),
        }),
      }),
    )
    .length(4),
});

describe("native card layout example over the Google HTTP boundary", () => {
  it("assigns four distinct slots and accepts normalized geometry while preserving text and notes", async () => {
    const f = await layoutFixture("normalized");
    try {
      const result = await example("google-slides", 2)({ "google-workspace": f.google });
      expect(f.requests).toHaveLength(1);
      expect(f.afterRead()).toBe(true);
      const updates = f.requests[0]!.requests.map((item) => item.updatePageElementTransform);
      expect(updates.map((item) => item.transform.translateX)).toEqual([48, 213, 378, 543]);
      expect(new Set(updates.map((item) => item.objectId)).size).toBe(4);
      expect(result.documentEdit.changes[0]).toMatchObject({
        status: "applied",
        description: expect.stringContaining("Native bounds match"),
      });
      expect(
        f.page.pageElements.slice(0, 4).map((item) => ("shape" in item ? item.shape : undefined)),
      ).toEqual(
        f.original.pageElements
          .slice(0, 4)
          .map((item) => ("shape" in item ? item.shape : undefined)),
      );
      expect(f.page.pageElements[4]).toEqual(f.original.pageElements[4]);
      expect(f.page.slideProperties).toEqual(f.original.slideProperties);
    } finally {
      await f.close();
    }
  });
  it.each(["drifted", "read-fails"] as const)(
    "keeps successful writes applied when %s prevents geometry verification",
    async (name) => {
      const f = await layoutFixture(name);
      try {
        const result = await example("google-slides", 2)({ "google-workspace": f.google });
        expect(result.documentEdit.changes[0]?.status).toBe("applied");
        expect(result.documentEdit.changes[0]?.description).not.toContain("Native bounds match");
        expect(f.requests).toHaveLength(1);
      } finally {
        await f.close();
      }
    },
  );
  it("resolves grouped coordinate spaces before issuing a top-level layout mutation", async () => {
    const f = await layoutFixture("grouped");
    try {
      await expect(example("google-slides", 2)({ "google-workspace": f.google })).rejects.toThrow(
        "ungrouped",
      );
      expect(f.requests).toHaveLength(0);
    } finally {
      await f.close();
    }
  });
});

it("verifies literal dollar-token text in the shipped Google Docs example", async () => {
  const f = await fixture(false, "linked"),
    before = structuredClone(f.docUnits);
  const replacement = "Literal tokens: $& $$ $` $'.";
  try {
    const result = await example("google-docs", 0, replacement)({ "google-workspace": f.google });
    const original = before.map((item) => item.unit).join("");
    const start = original.indexOf("The launch is on Monday.");
    expect(f.docUnits.map((item) => item.unit).join("")).toBe(
      original.slice(0, start) +
        replacement +
        original.slice(start + "The launch is on Monday.".length),
    );
    expect(result.documentEdit.changes[0]?.status).toBe("verified");
    expect(f.mutations).toHaveLength(1);
    expect(f.preserved()).toBe(f.untouched);
  } finally {
    await f.close();
  }
});
