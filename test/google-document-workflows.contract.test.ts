import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import { describe, expect, it } from "vitest";
import { installGoogleWorkspace, GOOGLE_WORKSPACE_REQUESTS } from "@rook/google-workspace";
import { z } from "zod";

// Only Google's external HTTP boundary is substituted. The installed client
// and complete shipped execute examples are real. Google, not this fixture,
// supplies the calculation proof recorded in the live coverage results.
const receipt = z.object({
  documentEdit: z.object({
    changes: z.array(z.object({ status: z.string(), description: z.string() })),
  }),
});
const batch = z.object({
  requests: z.array(z.record(z.string(), z.json())),
  writeControl: z.object({ requiredRevisionId: z.string() }).optional(),
});
const insert = z.object({
  objectId: z.string().optional(),
  text: z.string(),
  location: z.object({ tabId: z.string(), index: z.number() }).optional(),
});
const blocks = { table: 6, audit: 7, chart: 8, dropdown: 9, notes: 10 } as const;
function example(kind: keyof typeof blocks) {
  const md = readFileSync(
    new URL("../skills/google-workspace/references/document-editing.md", import.meta.url),
    "utf8",
  );
  const block = [...md.matchAll(/^```ts\n([\s\S]*?)^```/gmu)][blocks[kind]]?.[1];
  if (!block) throw Error("Missing shipped workflow");
  // SAFETY: repository-authored examples only; provider response text is data.
  const fn = runInNewContext(
    ts.transpileModule(`(async function(applications){${block}})`, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
    }).outputText,
    { console, JSON, URL, crypto },
  ) as (
    applications: Record<string, ReturnType<typeof installGoogleWorkspace>>,
  ) => Promise<unknown>;
  return async (google: ReturnType<typeof installGoogleWorkspace>) =>
    receipt.parse(await fn({ "google-workspace": google }));
}

async function boundary(
  kind: keyof typeof blocks,
  options: {
    failRead?: number;
    wrongCell?: boolean;
    wrongNumber?: boolean;
    nativeError?: boolean;
    notesEmpty?: boolean;
  } = {},
) {
  const requests: z.infer<typeof batch>[] = [];
  let reads = 0,
    revision = 1,
    created = false;
  const oldTable = {
    startIndex: 30,
    endIndex: 45,
    table: {
      rows: 1,
      columns: 1,
      tableRows: [
        {
          tableCells: [
            {
              content: [
                {
                  startIndex: 33,
                  paragraph: { elements: [{ textRun: { content: "Preserve existing table\n" } }] },
                },
              ],
            },
          ],
        },
      ],
    },
  };
  const prefix = {
    startIndex: 1,
    endIndex: 23,
    paragraph: {
      elements: [
        {
          textRun: {
            content: "Evidence café Δ 🍰.\n",
            textStyle: { link: { url: "https://example.org/evidence" } },
          },
        },
      ],
    },
  };
  const cells = [103, 105, 108, 110, 113, 115].map((index) => ({ index, text: "" }));
  const visible = [
    {
      objectId: "title",
      shape: { text: { textElements: [{ textRun: { content: "Keep title\n" } }] } },
    },
    { objectId: "photo", image: { sourceUrl: "https://example.org/photo.png" } },
  ];
  let notes = options.notesEmpty ? "" : "Keep old notes.\n";
  const charts: { chartId: number; spec: object }[] = [
    { chartId: 99, spec: { title: "Existing", basicChart: { chartType: "LINE" } } },
  ];
  const sourceCells = [
    {
      userEnteredValue: { stringValue: "Keep data" },
      dataValidation: { condition: { type: "BOOLEAN" } },
      note: "Keep evidence",
    },
  ];
  const snapshot = JSON.stringify({ oldTable, prefix, visible, sourceCells });
  const doc = () => {
    const added = {
      startIndex: 100,
      table: {
        rows: 3,
        columns: 2,
        tableRows: [0, 1, 2].map((row) => ({
          tableCells: cells.slice(row * 2, row * 2 + 2).map((c, i) => ({
            content: [
              {
                startIndex: c.index,
                paragraph: {
                  elements: [
                    {
                      textRun: {
                        content:
                          (options.wrongCell && row === 0 && i === 0 ? "Wrong" : c.text) + "\n",
                      },
                    },
                  ],
                },
              },
            ],
          })),
        })),
      },
    };
    const documentTab = { body: { content: [prefix, oldTable, ...(created ? [added] : [])] } };
    return {
      documentId: "document-id",
      title: "Coverage",
      revisionId: "r" + revision,
      tabs: [
        {
          tabProperties: { tabId: "parent" },
          childTabs: [{ tabProperties: { tabId: "tab-id" }, documentTab }],
        },
      ],
    };
  };
  const sheet = () => ({
    properties: { title: "Coverage" },
    sheets:
      kind === "audit"
        ? [
            {
              properties: { sheetId: 2, title: "Audit" },
              data: [
                {
                  startRow: 1,
                  startColumn: 1,
                  rowData: [20, 30, 40, 140 / 6, 35, 1 / 3, 60].map((numberValue, index) => ({
                    values: [
                      {
                        userEnteredValue: { formulaValue: "=source" },
                        effectiveValue:
                          options.nativeError && index === 1
                            ? { errorValue: { type: "REF", message: "Invalid reference" } }
                            : {
                                numberValue: options.wrongNumber && index === 0 ? 21 : numberValue,
                              },
                      },
                    ],
                  })),
                },
              ],
            },
          ]
        : [
            {
              properties: { sheetId: 0, title: "Data" },
              data: [
                {
                  rowData: [
                    {
                      values: ["Item", "Group", "Amount", "Weight", "Status", "Date", "Done"].map(
                        (stringValue) => ({
                          formattedValue: stringValue,
                          userEnteredValue: { stringValue },
                        }),
                      ),
                    },
                  ],
                },
              ],
              cells: sourceCells,
            },
            { properties: { sheetId: 1, title: "Dashboard" }, charts },
          ],
  });
  const deck = () => ({
    presentationId: "presentation-id",
    title: "Coverage",
    revisionId: "r" + revision,
    slides: [
      {
        objectId: "slide-id",
        pageElements: visible,
        slideProperties: {
          notesPage: {
            notesProperties: { speakerNotesObjectId: "notes-id" },
            pageElements: [
              {
                objectId: "notes-id",
                shape: notes ? { text: { textElements: [{ textRun: { content: notes } }] } } : {},
              },
            ],
          },
        },
      },
    ],
  });
  const server = createServer(async (request, response) => {
    try {
      response.setHeader("content-type", "application/json");
      if (request.method === "GET") {
        reads++;
        if (reads === options.failRead) {
          response
            .writeHead(503)
            .end(JSON.stringify({ error: { message: "Native read unavailable" } }));
          return;
        }
        response.end(
          JSON.stringify(kind === "table" ? doc() : kind === "notes" ? deck() : sheet()),
        );
        return;
      }
      const chunks: Buffer[] = [];
      for await (const chunk of request) chunks.push(Buffer.from(chunk));
      const input = batch.parse(JSON.parse(Buffer.concat(chunks).toString()));
      requests.push(input);
      if (kind === "table" || kind === "notes")
        expect(input.writeControl?.requiredRevisionId).toBe("r" + revision);
      const replies: object[] = [];
      for (const update of input.requests) {
        if (update.insertTable) {
          expect(update.insertTable).toEqual({
            rows: 3,
            columns: 2,
            endOfSegmentLocation: { tabId: "tab-id" },
          });
          created = true;
        }
        if (update.insertText) {
          const text = insert.parse(update.insertText);
          if (kind === "table") {
            expect(text.location?.tabId).toBe("tab-id");
            const target = cells.find((c) => c.index === text.location?.index);
            if (!target) throw Error("Wrong native cell paragraph index");
            target.text = text.text;
            for (const item of cells) if (item.index > target.index) item.index += text.text.length;
          } else {
            expect(text.objectId).toBe("notes-id");
            notes = text.text + "\n";
          }
        }
        if (update.deleteText) {
          expect(update.deleteText).toEqual({ objectId: "notes-id", textRange: { type: "ALL" } });
          notes = "";
        }
        if (update.addChart) {
          const body = z
            .object({
              chart: z.looseObject({
                spec: z.looseObject({
                  basicChart: z.looseObject({ chartType: z.literal("COLUMN") }),
                }),
                position: z.looseObject({
                  overlayPosition: z.looseObject({
                    anchorCell: z.looseObject({ sheetId: z.literal(1) }),
                  }),
                }),
              }),
            })
            .parse(update.addChart);
          const added = { ...body.chart, chartId: 100 };
          charts.push(added);
          replies.push({ addChart: { chart: added } });
        }
        if (update.addTable) {
          const body = z
            .object({
              table: z.looseObject({
                range: z.object({
                  sheetId: z.literal(0),
                  startRowIndex: z.literal(0),
                  endRowIndex: z.literal(4),
                  startColumnIndex: z.literal(0),
                  endColumnIndex: z.literal(7),
                }),
                columnProperties: z.array(z.looseObject({ columnType: z.string() })),
              }),
            })
            .parse(update.addTable);
          const status = body.table.columnProperties[4];
          expect(status).toMatchObject({
            columnType: "DROPDOWN",
            dataValidationRule: { condition: { type: "ONE_OF_LIST" } },
          });
          expect(
            Object.keys(z.record(z.string(), z.json()).parse(status.dataValidationRule)),
          ).toEqual(["condition"]);
          expect(body.table.columnProperties[6]?.columnType).toBe("BOOLEAN");
          replies.push({ addTable: { table: { ...body.table, tableId: "new-table" } } });
        }
      }
      revision++;
      response.end(JSON.stringify({ replies }));
    } catch (error) {
      response.writeHead(400).end(JSON.stringify({ error: { message: String(error) } }));
    }
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = z.object({ port: z.number() }).parse(server.address()).port;
  const services = Object.fromEntries(
    Object.entries(GOOGLE_WORKSPACE_REQUESTS).map(([key, service]) => [
      key,
      { ...service, baseUrl: `http://127.0.0.1:${port}/` },
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
        throw Error("Native editing does not transfer file bytes");
      },
    },
    services,
  );
  return {
    google,
    requests,
    cells,
    charts,
    notes: () => notes,
    reads: () => reads,
    preserved: () => JSON.stringify({ oldTable, prefix, visible, sourceCells }) === snapshot,
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  };
}

describe("shipped Google structure, formula, chart and notes workflows", () => {
  it("fills native table cells from descending live indexes and preserves old evidence/tables", async () => {
    const f = await boundary("table");
    try {
      const result = await example("table")(f.google);
      expect(result.documentEdit.changes[0]?.status).toBe("verified");
      expect(f.cells.map((c) => c.text)).toEqual([
        "Action",
        "Owner",
        "Run pilot",
        "Ateka",
        "Review results",
        "Omar",
      ]);
      expect(f.requests).toHaveLength(2);
      expect(f.preserved()).toBe(true);
    } finally {
      await f.close();
    }
  });
  it.each([{ failRead: 2 }, { failRead: 3 }, { wrongCell: true }])(
    "keeps table creation applied when a later check fails: %j",
    async (options) => {
      const f = await boundary("table", options);
      try {
        const result = await example("table")(f.google);
        expect(result.documentEdit.changes[0]?.status).toBe("applied");
        expect(f.requests.filter((r) => r.requests.some((q) => q.insertTable))).toHaveLength(1);
        expect(f.preserved()).toBe(true);
      } finally {
        await f.close();
      }
    },
  );
  it.each([{}, { wrongNumber: true }, { nativeError: true }])(
    "checks actual formula values and native errors: %j",
    async (options) => {
      const f = await boundary("audit", options);
      try {
        const result = await example("audit")(f.google);
        expect(result.documentEdit.changes[0]?.status).toBe(
          options.wrongNumber || options.nativeError ? "failed" : "verified",
        );
        expect(f.requests).toHaveLength(0);
      } finally {
        await f.close();
      }
    },
  );
  it.each([{}, { failRead: 2 }])(
    "retains a returned chart ID without repeating creation: %j",
    async (options) => {
      const f = await boundary("chart", options);
      try {
        const result = await example("chart")(f.google);
        expect(result.documentEdit.changes[0]?.status).toBe("applied");
        expect(f.requests).toHaveLength(1);
        expect(f.charts.map((c) => c.chartId)).toEqual([99, 100]);
        expect(f.preserved()).toBe(true);
      } finally {
        await f.close();
      }
    },
  );
  it("uses native chip/checkbox table columns without invented color/display fields", async () => {
    const f = await boundary("dropdown");
    try {
      const result = await example("dropdown")(f.google);
      expect(result.documentEdit.changes[0]?.status).toBe("applied");
      expect(f.requests).toHaveLength(1);
      expect(f.preserved()).toBe(true);
    } finally {
      await f.close();
    }
  });
  it.each([{}, { failRead: 2 }, { notesEmpty: true }])(
    "writes only speaker-note text and preserves visible slide elements: %j",
    async (options) => {
      const f = await boundary("notes", options);
      try {
        const result = await example("notes")(f.google);
        expect(result.documentEdit.changes[0]?.status).toBe(
          options.failRead ? "applied" : "verified",
        );
        expect(f.notes()).toContain("Explain the three sensors");
        expect(f.requests).toHaveLength(1);
        expect(f.preserved()).toBe(true);
        if (options.notesEmpty)
          expect(f.requests[0]?.requests.some((q) => q.deleteText)).toBe(false);
      } finally {
        await f.close();
      }
    },
  );
});
