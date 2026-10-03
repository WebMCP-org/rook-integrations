import { z } from "zod";

export type Microsoft365Json = z.infer<ReturnType<typeof z.json>>;
export interface Microsoft365Operation {
  name: string;
  description: string;
  inputSchema: z.core.JSONSchema.BaseSchema;
  readOnly: boolean;
  invoke(input: unknown): Promise<Microsoft365Json>;
}
export interface Microsoft365Document {
  host: "Excel" | "Word" | "PowerPoint";
  url: string;
  platform: string;
}
const empty = z.strictObject({});
const file = z.strictObject({ documentUrl: z.string().min(1) });
const font = z.strictObject({
  name: z.string().optional(),
  size: z.number().positive().optional(),
  bold: z.boolean().optional(),
  italic: z.boolean().optional(),
  color: z.string().optional(),
});
const excelRange = file.extend({ worksheetId: z.string().min(1), address: z.string().min(1) });
const wordText = file.extend({ text: z.string().min(1) });
const pptShape = file.extend({ slideId: z.string().min(1), shapeId: z.string().min(1) });
const geometry = z.strictObject({
  left: z.number().optional(),
  top: z.number().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});
const scalar = z.union([z.string(), z.number().finite(), z.boolean(), z.null()]);
const powerpointFontFields = "name,size,bold,italic,color,underline";
const powerpointReplacementFontFields =
  powerpointFontFields +
  ",allCaps,doubleStrikethrough,smallCaps,strikethrough,subscript,superscript";
const wordFontFields =
  "bold,italic,name,size,color,underline,strikeThrough,doubleStrikeThrough,highlightColor,subscript,superscript";

function json(value: object): Microsoft365Json {
  return z.json().parse(JSON.parse(JSON.stringify(value)));
}
// Office Online exposes loaded scalar properties even when ShapeFont.toJSON()
// is empty. Read the properties on the same loaded proxy for verification.
function readPowerPointFont(font: PowerPoint.ShapeFont): PowerPoint.Interfaces.ShapeFontData {
  return {
    name: font.name,
    size: font.size,
    bold: font.bold,
    italic: font.italic,
    color: font.color,
    underline: font.underline,
  };
}
function readPowerPointReplacementFont(
  font: PowerPoint.ShapeFont,
): PowerPoint.Interfaces.ShapeFontData {
  return {
    ...readPowerPointFont(font),
    allCaps: font.allCaps,
    doubleStrikethrough: font.doubleStrikethrough,
    smallCaps: font.smallCaps,
    strikethrough: font.strikethrough,
    subscript: font.subscript,
    superscript: font.superscript,
  };
}
function setPowerPointFont(
  target: PowerPoint.ShapeFont,
  input: PowerPoint.Interfaces.ShapeFontData,
) {
  if (input.name !== undefined && input.name !== null) target.name = input.name;
  if (input.size !== undefined && input.size !== null) target.size = input.size;
  if (input.bold !== undefined && input.bold !== null) target.bold = input.bold;
  if (input.italic !== undefined && input.italic !== null) target.italic = input.italic;
  if (input.color !== undefined && input.color !== null) target.color = input.color;
  if (input.underline !== undefined && input.underline !== null) target.underline = input.underline;
  if (input.allCaps !== undefined && input.allCaps !== null) target.allCaps = input.allCaps;
  if (input.doubleStrikethrough !== undefined && input.doubleStrikethrough !== null)
    target.doubleStrikethrough = input.doubleStrikethrough;
  if (input.smallCaps !== undefined && input.smallCaps !== null) target.smallCaps = input.smallCaps;
  if (input.strikethrough !== undefined && input.strikethrough !== null)
    target.strikethrough = input.strikethrough;
  if (input.subscript !== undefined && input.subscript !== null) target.subscript = input.subscript;
  if (input.superscript !== undefined && input.superscript !== null)
    target.superscript = input.superscript;
}
function same(left: object, right: object) {
  return JSON.stringify(left) === JSON.stringify(right);
}
function need(set: string, version: string) {
  if (!Office.context.requirements.isSetSupported(set, version))
    throw new Error(`${set} ${version} is required for this operation.`);
}
function operation<S extends z.ZodObject>(
  name: string,
  description: string,
  schema: S,
  readOnly: boolean,
  invoke: (input: z.output<S>) => Promise<object>,
): Microsoft365Operation {
  return {
    name,
    description,
    inputSchema: z.toJSONSchema(schema),
    readOnly,
    async invoke(input: unknown) {
      return json(await invoke(schema.parse(input)));
    },
  };
}

/** Binds native operations only inside a real, initialized Office add-in context. */
export async function createMicrosoft365Operations(): Promise<Microsoft365Operation[] | undefined> {
  if (typeof Office === "undefined" || typeof Office.onReady !== "function") return undefined;
  const ready = await Office.onReady();
  if (
    ready.host !== Office.HostType.Excel &&
    ready.host !== Office.HostType.Word &&
    ready.host !== Office.HostType.PowerPoint
  )
    return undefined;
  const host = ready.host;
  async function document(): Promise<Microsoft365Document> {
    let url = Office.context.document.url;
    if (!url)
      url = await new Promise<string>((resolve, reject) =>
        Office.context.document.getFilePropertiesAsync((result) =>
          result.status === Office.AsyncResultStatus.Succeeded
            ? resolve(result.value.url)
            : reject(new Error(result.error.message)),
        ),
      );
    if (!url) throw new Error("The Office host did not provide the bound file identity.");
    return {
      host:
        host === Office.HostType.Excel
          ? "Excel"
          : host === Office.HostType.Word
            ? "Word"
            : "PowerPoint",
      url,
      platform: String(ready.platform),
    };
  }
  async function bind(input: { documentUrl: string }) {
    const current = await document();
    if (current.url !== input.documentUrl)
      throw new Error(
        "The Office context now belongs to another file. Read its identity again before editing.",
      );
    return current;
  }
  async function mutation(
    input: { documentUrl: string },
    location: string,
    description: string,
    write: (completed: (data: object) => void) => Promise<object>,
    verify: () => Promise<boolean>,
  ) {
    const current = await bind(input);
    let data: object = {},
      applied = false;
    const completed = (stage: object) => {
      applied = true;
      data = { ...data, ...stage };
    };
    try {
      const result = await write(completed);
      data = { ...data, ...result };
      applied = true;
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      return {
        document: current,
        data,
        change: {
          location,
          status: applied ? "applied" : "failed",
          description: `${description}: ${detail}. ${applied ? "An earlier mutation completed; inspect its native result before continuing." : "The native call failed; inspect possible partial effects before retrying."}`,
        },
      };
    }
    let verified = false,
      verificationError = "";
    try {
      verified = await verify();
    } catch (error) {
      verificationError = error instanceof Error ? error.message : String(error);
    }
    return {
      document: current,
      data,
      change: {
        location,
        description: verified
          ? `${description}; independent native read confirmed the requested checks. Cloud save and visual layout are separate.`
          : `${description} applied; ${verificationError || "independent read-back did not match every requested check"}. Inspect the result before continuing.`,
        status: verified ? "verified" : "applied",
      },
    };
  }
  const operations = [
    operation(
      "rook_m365_document_info",
      "Read the native Office host, bound file URL and platform before choosing an edit. Available only in an initialized Office add-in.",
      empty,
      true,
      async () => ({ document: await document() }),
    ),
  ];

  if (host === Office.HostType.Excel) {
    need("ExcelApi", "1.1");
    function loadLayout(range: Excel.Range) {
      range.load("width,height,rowCount,columnCount");
      range.format.load("horizontalAlignment,verticalAlignment,wrapText,rowHeight,columnWidth");
      range.format.fill.load("color");
    }
    function layout(range: Excel.Range) {
      return {
        width: range.width,
        height: range.height,
        horizontalAlignment: range.format.horizontalAlignment,
        verticalAlignment: range.format.verticalAlignment,
        wrapText: range.format.wrapText,
        rowHeight: range.format.rowHeight,
        columnWidth: range.format.columnWidth,
        fillColor: range.format.fill.color,
      };
    }
    async function fittedDimensions(
      context: Excel.RequestContext,
      range: Excel.Range,
      input: { autofitColumns?: boolean; autofitRows?: boolean },
    ) {
      const columns = input.autofitColumns
        ? Array.from({ length: range.columnCount }, (_, index) => range.getColumn(index))
        : [];
      const rows = input.autofitRows
        ? Array.from({ length: range.rowCount }, (_, index) => range.getRow(index))
        : [];
      for (const column of columns) column.format.load("columnWidth");
      for (const row of rows) row.format.load("rowHeight");
      await context.sync();
      return {
        columnWidths: columns.map((column) => column.format.columnWidth),
        rowHeights: rows.map((row) => row.format.rowHeight),
      };
    }
    const readRange = (input: { worksheetId: string; address: string }) =>
      Excel.run(async (context) => {
        const range = context.workbook.worksheets
          .getItem(input.worksheetId)
          .getRange(input.address);
        range.load("address,values,formulas,numberFormat");
        range.format.font.load("name,size,bold,italic,color");
        const supportsLayout = Office.context.requirements.isSetSupported("ExcelApi", "1.2");
        if (supportsLayout) loadLayout(range);
        await context.sync();
        return {
          ...(supportsLayout ? { layout: layout(range) } : {}),
          address: range.address,
          values: range.values,
          formulas: range.formulas,
          numberFormat: range.numberFormat,
          font: range.format.font.toJSON(),
        };
      });
    const sheets = () =>
      Excel.run(async (context) => {
        const collection = context.workbook.worksheets;
        collection.load("items/id,items/name,items/position,items/visibility");
        await context.sync();
        return collection.items.map((sheet) => ({
          id: sheet.id,
          name: sheet.name,
          position: sheet.position,
          visibility: sheet.visibility,
        }));
      });
    operations.push(
      operation(
        "rook_m365_excel_sheets",
        "Read native worksheet IDs, names and order; use these IDs for ranges, activation and requested tab changes.",
        empty,
        true,
        async () => ({ document: await document(), sheets: await sheets() }),
      ),
      operation(
        "rook_m365_excel_read_range",
        "Read authored values/formulas, calculated values, number formats, font and supported native layout dimensions from the exact worksheet range.",
        excelRange,
        true,
        async (input) => ({ document: await bind(input), range: await readRange(input) }),
      ),
      operation(
        "rook_m365_excel_update_range",
        "Update only supplied values or formulas in an existing native range, then read the range independently. Null value entries are left to Office's native cell-update semantics.",
        excelRange.extend({
          values: z.array(z.array(scalar)).optional(),
          formulas: z.array(z.array(z.string())).optional(),
        }),
        false,
        async (input) => {
          if (!input.values && !input.formulas)
            throw new Error("Supply values or formulas to update.");
          const before = await readRange(input);
          return mutation(
            input,
            before.address,
            "Update the requested cells",
            () =>
              Excel.run(async (context) => {
                const range = context.workbook.worksheets
                  .getItem(input.worksheetId)
                  .getRange(input.address);
                if (input.values) range.values = input.values;
                if (input.formulas) range.formulas = input.formulas;
                await context.sync();
                return {};
              }),
            async () => {
              const after = await readRange(input);
              return (
                (!input.formulas || same(after.formulas, input.formulas)) &&
                (!input.values ||
                  input.values.every((row, r) =>
                    row.every((value, c) => value === null || after.values[r]?.[c] === value),
                  )) &&
                same(after.font, before.font) &&
                same(after.numberFormat, before.numberFormat)
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_excel_format_range",
        "Format existing range without replacing values/formulas. Set column widths or autofitColumns, then autofitRows after final font/wrapping/width changes. Dimensions are points; AutoFit and fixed sizing on the same axis are alternatives. Native read-back does not prove visual text fit.",
        excelRange
          .extend({
            font: font.optional(),
            horizontalAlignment: z
              .enum(["Left", "Center", "Right", "General", "Justify"])
              .optional(),
            verticalAlignment: z.enum(["Top", "Center", "Bottom", "Justify"]).optional(),
            wrapText: z.boolean().optional(),
            rowHeight: z.number().positive().optional(),
            columnWidth: z.number().positive().optional(),
            autofitColumns: z.boolean().optional(),
            autofitRows: z.boolean().optional(),
            fillColor: z.string().optional(),
            numberFormat: z.array(z.array(z.string())).optional(),
          })
          .refine(
            (input) =>
              !(input.autofitColumns && input.columnWidth !== undefined) &&
              !(input.autofitRows && input.rowHeight !== undefined),
            "Choose AutoFit or a fixed dimension for each axis, not both.",
          ),
        false,
        async (input) => {
          need("ExcelApi", "1.2");
          const before = await readRange(input);
          let expectedLayout: ReturnType<typeof layout> | undefined;
          let expectedFitted: Awaited<ReturnType<typeof fittedDimensions>> | undefined;
          return mutation(
            input,
            before.address,
            "Format the requested cells",
            (completed) =>
              Excel.run(async (context) => {
                const range = context.workbook.worksheets
                  .getItem(input.worksheetId)
                  .getRange(input.address);
                if (input.font) range.format.font.set(input.font);
                if (input.horizontalAlignment)
                  range.format.horizontalAlignment = input.horizontalAlignment;
                if (input.verticalAlignment)
                  range.format.verticalAlignment = input.verticalAlignment;
                if (input.wrapText !== undefined) range.format.wrapText = input.wrapText;
                if (input.rowHeight !== undefined) range.format.rowHeight = input.rowHeight;
                if (input.columnWidth !== undefined) range.format.columnWidth = input.columnWidth;
                if (input.fillColor) range.format.fill.color = input.fillColor;
                if (input.numberFormat) range.numberFormat = input.numberFormat;
                const hasFormat = [
                  input.font,
                  input.horizontalAlignment,
                  input.verticalAlignment,
                  input.wrapText,
                  input.rowHeight,
                  input.columnWidth,
                  input.fillColor,
                  input.numberFormat,
                ].some((value) => value !== undefined);
                if (hasFormat) {
                  await context.sync();
                  completed({ formatApplied: true });
                }
                if (input.autofitColumns) {
                  range.format.autofitColumns();
                  await context.sync();
                  completed({ columnsAutoFitApplied: true });
                }
                if (input.autofitRows) {
                  range.format.autofitRows();
                  await context.sync();
                  completed({ rowsAutoFitApplied: true });
                }
                loadLayout(range);
                await context.sync();
                expectedLayout = layout(range);
                expectedFitted = await fittedDimensions(context, range, input);
                return { layout: { ...expectedLayout, ...expectedFitted } };
              }),
            async () => {
              const after = await readRange(input);
              const actual = after.layout;
              if (!actual || !expectedLayout || !expectedFitted) return false;
              const actualFitted = await Excel.run(async (context) => {
                const range = context.workbook.worksheets
                  .getItem(input.worksheetId)
                  .getRange(input.address);
                range.load("rowCount,columnCount");
                await context.sync();
                return fittedDimensions(context, range, input);
              });
              const dimensionMatches = (left: number | null, right: number | null) =>
                left === right || (left !== null && right !== null && Math.abs(left - right) < 0.1);
              const listMatches = (left: number[], right: number[]) =>
                left.length === right.length &&
                left.every((value, index) => dimensionMatches(value, right[index]));
              return (
                listMatches(actualFitted.columnWidths, expectedFitted.columnWidths) &&
                listMatches(actualFitted.rowHeights, expectedFitted.rowHeights) &&
                same(before.formulas, after.formulas) &&
                (!input.autofitColumns ||
                  (dimensionMatches(actual.width, expectedLayout.width) &&
                    dimensionMatches(actual.columnWidth, expectedLayout.columnWidth))) &&
                (!input.autofitRows ||
                  (dimensionMatches(actual.height, expectedLayout.height) &&
                    dimensionMatches(actual.rowHeight, expectedLayout.rowHeight))) &&
                Object.entries(input.font ?? {}).every(
                  ([key, value]) => Reflect.get(after.font, key) === value,
                ) &&
                (input.columnWidth === undefined ||
                  (actual.columnWidth !== null &&
                    Math.abs(actual.columnWidth - input.columnWidth) < 0.75)) &&
                (input.rowHeight === undefined ||
                  (actual.rowHeight !== null &&
                    Math.abs(actual.rowHeight - input.rowHeight) < 0.75)) &&
                ["horizontalAlignment", "verticalAlignment", "wrapText", "fillColor"].every(
                  (key) =>
                    Reflect.get(input, key) === undefined ||
                    Reflect.get(actual, key) === Reflect.get(input, key),
                ) &&
                (!input.numberFormat || same(after.numberFormat, input.numberFormat))
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_excel_add_sheet",
        "Add one native worksheet and verify it without recreating the workbook.",
        file.extend({ name: z.string().min(1) }),
        false,
        async (input) => {
          const before = await sheets();
          let id = "";
          return mutation(
            input,
            input.name,
            "Add a worksheet",
            () =>
              Excel.run(async (context) => {
                const sheet = context.workbook.worksheets.add(input.name);
                sheet.load("id");
                await context.sync();
                id = sheet.id;
                return { worksheetId: id };
              }),
            async () => {
              const after = await sheets();
              return (
                after.some((sheet) => sheet.id === id && sheet.name === input.name) &&
                before.every((sheet) => after.some((current) => same(current, sheet)))
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_excel_update_sheet",
        "Rename, reorder or select an existing worksheet by its native ID.",
        file.extend({
          worksheetId: z.string().min(1),
          name: z.string().optional(),
          position: z.number().int().nonnegative().optional(),
          activate: z.boolean().optional(),
        }),
        false,
        async (input) =>
          mutation(
            input,
            input.worksheetId,
            "Update the worksheet",
            () =>
              Excel.run(async (context) => {
                const sheet = context.workbook.worksheets.getItem(input.worksheetId);
                if (input.name) sheet.name = input.name;
                if (input.position !== undefined) sheet.position = input.position;
                if (input.activate) sheet.activate();
                await context.sync();
                return {};
              }),
            async () => {
              const after = await sheets();
              const target = after.find((sheet) => sheet.id === input.worksheetId);
              const active = input.activate
                ? await Excel.run(async (context) => {
                    const sheet = context.workbook.worksheets.getActiveWorksheet();
                    sheet.load("id");
                    await context.sync();
                    return sheet.id;
                  })
                : undefined;
              return (
                (!input.activate || active === input.worksheetId) &&
                !!target &&
                (!input.name || target.name === input.name) &&
                (input.position === undefined || target.position === input.position)
              );
            },
          ),
      ),
      operation(
        "rook_m365_excel_delete_sheet",
        "Delete exactly the requested native worksheet ID, then verify the remaining worksheet IDs and names. Inspect dependent formulas before requesting deletion.",
        file.extend({ worksheetId: z.string().min(1) }),
        false,
        async (input) => {
          const before = await sheets();
          if (!before.some((sheet) => sheet.id === input.worksheetId))
            throw new Error("The target worksheet is absent.");
          return mutation(
            input,
            input.worksheetId,
            "Delete the requested worksheet",
            () =>
              Excel.run(async (context) => {
                context.workbook.worksheets.getItem(input.worksheetId).delete();
                await context.sync();
                return {};
              }),
            async () => {
              const after = await sheets();
              return same(
                after.map((sheet) => ({ id: sheet.id, name: sheet.name })),
                before
                  .filter((sheet) => sheet.id !== input.worksheetId)
                  .map((sheet) => ({ id: sheet.id, name: sheet.name })),
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_excel_insert_image",
        "Insert supplied image bytes into the native worksheet without a desktop picker; requires ExcelApi 1.9. Verify layout visually.",
        file.extend({
          worksheetId: z.string().min(1),
          base64: z.string().min(1),
          left: z.number(),
          top: z.number(),
          width: z.number().positive(),
          height: z.number().positive(),
        }),
        false,
        async (input) => {
          need("ExcelApi", "1.9");
          let id = "";
          return mutation(
            input,
            input.worksheetId,
            "Insert the supplied image",
            () =>
              Excel.run(async (context) => {
                const shape = context.workbook.worksheets
                  .getItem(input.worksheetId)
                  .shapes.addImage(input.base64);
                shape.left = input.left;
                shape.top = input.top;
                shape.width = input.width;
                shape.height = input.height;
                shape.load("id");
                await context.sync();
                id = shape.id;
                return { shapeId: id };
              }),
            async () =>
              Excel.run(async (context) => {
                const shape = context.workbook.worksheets
                  .getItem(input.worksheetId)
                  .shapes.getItem(id);
                shape.load("left,top,width,height");
                await context.sync();
                return (
                  shape.left === input.left &&
                  shape.top === input.top &&
                  shape.width === input.width &&
                  shape.height === input.height
                );
              }),
          );
        },
      ),
    );
  }
  if (host === Office.HostType.Word) {
    need("WordApi", "1.1");
    async function resolve(context: Word.RequestContext, text: string) {
      const matches = context.document.body.search(text, {
        matchCase: true,
        matchWildcards: false,
      });
      matches.load("items/text");
      await context.sync();
      const range = matches.items[0];
      if (matches.items.length !== 1 || !range || range.text !== text)
        throw new Error("Resolve one exact body range; the text is absent or repeated.");
      return range;
    }
    async function links(context: Word.RequestContext, range: Word.Range) {
      const collection = range.getHyperlinkRanges();
      collection.load("items/text,items/hyperlink");
      await context.sync();
      return collection.items.map((item) => ({ text: item.text, url: item.hyperlink }));
    }
    const read = () =>
      Word.run(async (context) => {
        const body = context.document.body;
        body.load("text");
        const html = body.getHtml();
        await context.sync();
        return { text: body.text, html: html.value };
      });
    operations.push(
      operation(
        "rook_m365_word_read",
        "Read the native document body text and HTML, including table/link structure, before precise edits or organization.",
        empty,
        true,
        async () => ({ document: await document(), body: await read() }),
      ),
      operation(
        "rook_m365_word_replace_text",
        "Replace one exact sentence/range in place, restore its uniform native font and hyperlink, then independently verify body text and target formatting. Mixed styles need smaller scopes.",
        wordText.extend({ replacement: z.string() }),
        false,
        async (input) => {
          need("WordApi", "1.3");
          const before = await read();
          let originalFont: Word.Interfaces.FontData = {},
            link = "";
          return mutation(
            input,
            input.text,
            "Replace the requested text",
            () =>
              Word.run(async (context) => {
                const range = await resolve(context, input.text);
                range.load("hyperlink");
                range.font.load(wordFontFields);
                await context.sync();
                originalFont = range.font.toJSON();
                const hyperlinkRanges = await links(context, range);
                if (
                  hyperlinkRanges.length > 1 ||
                  (hyperlinkRanges.length === 1 && hyperlinkRanges[0]?.text !== range.text)
                )
                  throw new Error(
                    "Resolve a complete uniformly linked range or smaller unlinked ranges; this target spans partial or multiple hyperlinks.",
                  );
                link = hyperlinkRanges[0]?.url ?? "";
                if (
                  !originalFont.name ||
                  !originalFont.size ||
                  Object.values(originalFont).some((value) => value === null || value === "Mixed")
                )
                  throw new Error(
                    "The target has mixed font properties; resolve a smaller native range.",
                  );
                const changed = range.insertText(input.replacement, Word.InsertLocation.replace);
                if (input.replacement) {
                  changed.hyperlink = link;
                  changed.font.set(originalFont);
                }
                await context.sync();
                return {};
              }),
            async () => {
              const after = await read();
              if (after.text !== before.text.replace(input.text, () => input.replacement))
                return false;
              if (!input.replacement) return true;
              return Word.run(async (context) => {
                const range = await resolve(context, input.replacement);
                range.load("hyperlink");
                range.font.load(wordFontFields);
                await context.sync();
                const actualLinks = await links(context, range);
                return (
                  same(actualLinks, link ? [{ text: input.replacement, url: link }] : []) &&
                  same(range.font.toJSON(), originalFont)
                );
              });
            },
          );
        },
      ),
      operation(
        "rook_m365_word_format_text",
        "Format a resolved native range using only supplied font properties; preserve the document body and hyperlink.",
        wordText.extend({ font }),
        false,
        async (input) => {
          need("WordApi", "1.3");
          const before = await read();
          let hyperlinkSnapshot: { text: string; url: string }[] = [];
          return mutation(
            input,
            input.text,
            "Format the requested text",
            () =>
              Word.run(async (context) => {
                const range = await resolve(context, input.text);
                range.load("hyperlink");
                await context.sync();
                hyperlinkSnapshot = await links(context, range);
                range.font.set(input.font);
                await context.sync();
                return {};
              }),
            async () => {
              if ((await read()).text !== before.text) return false;
              return Word.run(async (context) => {
                const range = await resolve(context, input.text);
                range.load("hyperlink");
                range.font.load("name,size,bold,italic,color");
                await context.sync();
                const actual = range.font.toJSON();
                return (
                  same(await links(context, range), hyperlinkSnapshot) &&
                  Object.entries(input.font).every(
                    ([key, value]) => Reflect.get(actual, key) === value,
                  )
                );
              });
            },
          );
        },
      ),
      operation(
        "rook_m365_word_insert_text",
        "Insert supplied text before or after one exact native anchor, or append to the document; preserve existing body text.",
        file.extend({
          text: z.string(),
          anchor: z.string().min(1).optional(),
          position: z.enum(["Before", "After", "End"]),
        }),
        false,
        async (input) => {
          const before = await read();
          let expected = "";
          if (input.position !== "End" && !input.anchor)
            throw new Error("Resolve the insertion anchor first.");
          return mutation(
            input,
            input.anchor ?? "Document end",
            "Insert the requested text",
            () =>
              Word.run(async (context) => {
                if (input.position === "End") {
                  context.document.body.insertText(input.text, Word.InsertLocation.end);
                  expected = before.text + input.text;
                } else {
                  const range = await resolve(context, input.anchor!);
                  range.insertText(input.text, input.position);
                  expected = before.text.replace(input.anchor!, () =>
                    input.position === "Before"
                      ? input.text + input.anchor!
                      : input.anchor! + input.text,
                  );
                }
                await context.sync();
                return {};
              }),
            async () => (await read()).text === expected,
          );
        },
      ),
      operation(
        "rook_m365_word_format_paragraph",
        "Apply a requested native paragraph style or alignment to the paragraph containing one exact anchor; read the structure first for report organization.",
        wordText.extend({
          style: z.string().optional(),
          alignment: z.enum(["Left", "Centered", "Right", "Justified"]).optional(),
          spaceBefore: z.number().nonnegative().optional(),
          spaceAfter: z.number().nonnegative().optional(),
        }),
        false,
        async (input) => {
          const before = await read();
          return mutation(
            input,
            input.text,
            "Format the requested paragraph",
            () =>
              Word.run(async (context) => {
                const range = await resolve(context, input.text);
                const paragraph = range.paragraphs.getFirst();
                if (input.style) paragraph.style = input.style;
                if (input.alignment) paragraph.alignment = input.alignment;
                if (input.spaceBefore !== undefined) paragraph.spaceBefore = input.spaceBefore;
                if (input.spaceAfter !== undefined) paragraph.spaceAfter = input.spaceAfter;
                await context.sync();
                return {};
              }),
            async () => {
              if ((await read()).text !== before.text) return false;
              return Word.run(async (context) => {
                const range = await resolve(context, input.text);
                const paragraph = range.paragraphs.getFirst();
                paragraph.load("style,alignment,spaceBefore,spaceAfter");
                await context.sync();
                return (
                  (!input.style || paragraph.style === input.style) &&
                  (!input.alignment || paragraph.alignment === input.alignment) &&
                  (input.spaceBefore === undefined ||
                    paragraph.spaceBefore === input.spaceBefore) &&
                  (input.spaceAfter === undefined || paragraph.spaceAfter === input.spaceAfter)
                );
              });
            },
          );
        },
      ),
      operation(
        "rook_m365_word_insert_image",
        "Insert an inline image at a resolved anchor or document end without a desktop picker; encoding stays in the native media boundary.",
        file.extend({
          base64: z.string().min(1),
          anchor: z.string().optional(),
          position: z.enum(["Before", "After", "End"]),
          width: z.number().positive(),
          height: z.number().positive(),
        }),
        false,
        async (input) => {
          const before = await read();
          const pictures = () =>
            Word.run(async (context) => {
              const images = context.document.body.inlinePictures;
              images.load("items/width,items/height");
              await context.sync();
              return images.items.map((image) => ({
                width: image.width,
                height: image.height,
              }));
            });
          const originalPictures = await pictures();
          return mutation(
            input,
            input.anchor ?? "Document end",
            "Insert the supplied image",
            () =>
              Word.run(async (context) => {
                const range =
                  input.position === "End"
                    ? context.document.body.getRange(Word.RangeLocation.end)
                    : await resolve(context, input.anchor ?? "");
                const picture = range.insertInlinePictureFromBase64(
                  input.base64,
                  input.position === "End" ? Word.InsertLocation.end : input.position,
                );
                picture.width = input.width;
                picture.height = input.height;
                await context.sync();
                return {};
              }),
            async () => {
              const after = await read();
              const current = await pictures();
              if (after.text !== before.text || current.length !== originalPictures.length + 1)
                return false;
              const indices =
                input.position === "End"
                  ? [originalPictures.length]
                  : current
                      .map((_, index) => index)
                      .filter((index) =>
                        same(
                          current.filter((_, i) => i !== index),
                          originalPictures,
                        ),
                      );
              if (indices.length !== 1) return false;
              const inserted = current[indices[0]!];
              return (
                !!inserted && inserted.width === input.width && inserted.height === input.height
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_word_insert_table",
        "Append a native table without rebuilding existing paragraphs or evidence; requires WordApi 1.3.",
        file.extend({ values: z.array(z.array(z.string())).min(1) }),
        false,
        async (input) => {
          need("WordApi", "1.3");
          const columns = input.values[0]?.length ?? 0;
          if (!columns || input.values.some((row) => row.length !== columns))
            throw new Error("Provide a rectangular table.");
          const tables = () =>
            Word.run(async (context) => {
              const collection = context.document.body.tables;
              collection.load("items/values");
              await context.sync();
              return collection.items.map((table) => table.values);
            });
          const before = await tables();
          return mutation(
            input,
            "Document end",
            "Insert the requested table",
            () =>
              Word.run(async (context) => {
                context.document.body.insertTable(
                  input.values.length,
                  columns,
                  Word.InsertLocation.end,
                  input.values,
                );
                await context.sync();
                return { tableIndex: before.length };
              }),
            async () => {
              const after = await tables();
              return (
                after.length === before.length + 1 &&
                same(after.at(-1) ?? [], input.values) &&
                before.every((values, index) => same(values, after[index] ?? []))
              );
            },
          );
        },
      ),
    );
  }
  if (host === Office.HostType.PowerPoint) {
    need("PowerPointApi", "1.4");
    const slides = () =>
      PowerPoint.run(async (context) => {
        const collection = context.presentation.slides;
        collection.load("items/id");
        await context.sync();
        const result = [];
        for (const slide of collection.items) {
          slide.shapes.load("items/id,items/type,items/left,items/top,items/width,items/height");
        }
        await context.sync();
        for (const slide of collection.items)
          result.push({
            id: slide.id,
            shapes: slide.shapes.items.map((shape) => ({
              id: shape.id,
              type: shape.type,
              left: shape.left,
              top: shape.top,
              width: shape.width,
              height: shape.height,
            })),
          });
        return result;
      });
    const readGeometry = (input: { slideId: string; shapeId: string }) =>
      PowerPoint.run(async (context) => {
        const shape = context.presentation.slides
          .getItem(input.slideId)
          .shapes.getItem(input.shapeId);
        shape.load("left,top,width,height");
        await context.sync();
        return { left: shape.left, top: shape.top, width: shape.width, height: shape.height };
      });
    const readShape = (input: { slideId: string; shapeId: string }) =>
      PowerPoint.run(async (context) => {
        const shape = context.presentation.slides
          .getItem(input.slideId)
          .shapes.getItem(input.shapeId);
        shape.load("left,top,width,height");
        const text = shape.textFrame.textRange;
        const font = text.font;
        text.load("text");
        font.load(powerpointFontFields);
        await context.sync();
        return {
          text: text.text,
          font: readPowerPointFont(font),
          left: shape.left,
          top: shape.top,
          width: shape.width,
          height: shape.height,
        };
      });
    async function selectSlide(slideId: string) {
      await PowerPoint.run(async (context) => {
        context.presentation.setSelectedSlides([slideId]);
        await context.sync();
      });
    }
    async function isSlideSelected(slideId: string) {
      return PowerPoint.run(async (context) => {
        const selected = context.presentation.getSelectedSlides();
        selected.load("items/id");
        await context.sync();
        return selected.items.length === 1 && selected.items[0]?.id === slideId;
      });
    }
    operations.push(
      operation(
        "rook_m365_powerpoint_slides",
        "Read native slide/shape IDs and geometry; subsequent operations address these existing objects, not slide positions.",
        empty,
        true,
        async () => ({ document: await document(), slides: await slides() }),
      ),
      operation(
        "rook_m365_powerpoint_read_text",
        "Read one native text shape's text, font and geometry before a targeted edit.",
        pptShape,
        true,
        async (input) => ({ document: await bind(input), shape: await readShape(input) }),
      ),
      operation(
        "rook_m365_powerpoint_replace_text",
        "Replace one exact substring in one existing shape; preserve the rest of the text and shape geometry. Uniform text styling is restored and checked.",
        pptShape.extend({ text: z.string().min(1), replacement: z.string() }),
        false,
        async (input) => {
          need("PowerPointApi", "1.10");
          const before = await readShape(input);
          const start = before.text.indexOf(input.text);
          if (start < 0 || before.text.split(input.text).length !== 2)
            throw new Error("Resolve one exact substring in the existing shape.");
          let targetFont: PowerPoint.Interfaces.ShapeFontData = {};
          return mutation(
            input,
            `Slide ${input.slideId}, shape ${input.shapeId}`,
            "Replace the requested text",
            (completed) =>
              PowerPoint.run(async (context) => {
                const range = context.presentation.slides
                  .getItem(input.slideId)
                  .shapes.getItem(input.shapeId).textFrame.textRange;
                range.load("text");
                range.hyperlinks.load("items/address");
                await context.sync();
                if (range.hyperlinks.items.length)
                  throw new Error(
                    "Resolve a hyperlink-preserving edit mapping for this linked shape before replacing its text.",
                  );
                if (range.text !== before.text)
                  throw new Error(
                    "The shape text changed; resolve the substring again before editing.",
                  );
                const target = range.getSubstring(start, input.text.length);
                target.load("text");
                target.font.load(powerpointReplacementFontFields);
                await context.sync();
                if (target.text !== input.text)
                  throw new Error("The native substring changed; resolve it again before editing.");
                targetFont = readPowerPointReplacementFont(target.font);
                if (
                  !targetFont.name ||
                  !targetFont.size ||
                  Object.values(targetFont).some((value) => value === null)
                )
                  throw new Error("Resolve a smaller uniformly styled text range.");
                target.text = input.replacement;
                await context.sync();
                completed({ slideId: input.slideId, shapeId: input.shapeId, textApplied: true });
                return {};
              }).then(async () => {
                if (input.replacement)
                  await PowerPoint.run(async (context) => {
                    const target = context.presentation.slides
                      .getItem(input.slideId)
                      .shapes.getItem(input.shapeId)
                      .textFrame.textRange.getSubstring(start, input.replacement.length);
                    setPowerPointFont(target.font, targetFont);
                    await context.sync();
                  });
                return {};
              }),
            async () => {
              const after = await readShape(input);
              if (
                after.text !== before.text.replace(input.text, () => input.replacement) ||
                !["left", "top", "width", "height"].every(
                  (key) => Reflect.get(after, key) === Reflect.get(before, key),
                )
              )
                return false;
              if (!input.replacement) return true;
              return PowerPoint.run(async (context) => {
                const target = context.presentation.slides
                  .getItem(input.slideId)
                  .shapes.getItem(input.shapeId)
                  .textFrame.textRange.getSubstring(start, input.replacement.length);
                target.font.load(powerpointReplacementFontFields);
                await context.sync();
                return same(readPowerPointReplacementFont(target.font), targetFont);
              });
            },
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_format_text",
        "Format only requested font fields on an existing native shape's text; preserve text and geometry.",
        pptShape.extend({ font }),
        false,
        async (input) => {
          const before = await readShape(input);
          return mutation(
            input,
            `Slide ${input.slideId}, shape ${input.shapeId}`,
            "Format the requested text",
            () =>
              PowerPoint.run(async (context) => {
                setPowerPointFont(
                  context.presentation.slides.getItem(input.slideId).shapes.getItem(input.shapeId)
                    .textFrame.textRange.font,
                  input.font,
                );
                await context.sync();
                return {};
              }),
            async () => {
              const after = await readShape(input);
              return (
                after.text === before.text &&
                Object.entries(input.font).every(
                  ([key, value]) => Reflect.get(after.font, key) === value,
                ) &&
                ["left", "top", "width", "height"].every(
                  (key) => Reflect.get(after, key) === Reflect.get(before, key),
                )
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_layout_shape",
        "Change supplied position/size fields on one existing native shape, preserving the other objects and text.",
        pptShape.extend({ geometry }),
        false,
        async (input) => {
          await readGeometry(input);
          return mutation(
            input,
            `Slide ${input.slideId}, shape ${input.shapeId}`,
            "Adjust the requested layout",
            () =>
              PowerPoint.run(async (context) => {
                const shape = context.presentation.slides
                  .getItem(input.slideId)
                  .shapes.getItem(input.shapeId);
                if (input.geometry.left !== undefined) shape.left = input.geometry.left;
                if (input.geometry.top !== undefined) shape.top = input.geometry.top;
                if (input.geometry.width !== undefined) shape.width = input.geometry.width;
                if (input.geometry.height !== undefined) shape.height = input.geometry.height;
                await context.sync();
                return {};
              }),
            async () => {
              const after = await readGeometry(input);
              return Object.entries(input.geometry).every(
                ([key, value]) => Reflect.get(after, key) === value,
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_add_text",
        "Add a native text box to a resolved slide; finish creation then read the new object in a fresh context.",
        file.extend({
          slideId: z.string().min(1),
          text: z.string(),
          left: z.number(),
          top: z.number(),
          width: z.number().positive(),
          height: z.number().positive(),
          font: font.optional(),
        }),
        false,
        async (input) => {
          const before = await slides();
          return mutation(
            input,
            `Slide ${input.slideId}`,
            "Add the requested text box",
            () =>
              PowerPoint.run(async (context) => {
                const shape = context.presentation.slides
                  .getItem(input.slideId)
                  .shapes.addTextBox(input.text, {
                    left: input.left,
                    top: input.top,
                    width: input.width,
                    height: input.height,
                  });
                if (input.font) setPowerPointFont(shape.textFrame.textRange.font, input.font);
                await context.sync();
                return {};
              }),
            async () => {
              const old = new Set(
                before.find((slide) => slide.id === input.slideId)?.shapes.map((shape) => shape.id),
              );
              const after = await slides();
              const added =
                after
                  .find((slide) => slide.id === input.slideId)
                  ?.shapes.filter((shape) => !old.has(shape.id)) ?? [];
              if (added.length !== 1) return false;
              const shape = await readShape({ slideId: input.slideId, shapeId: added[0]!.id });
              return (
                shape.text === input.text &&
                Object.entries(input.font ?? {}).every(
                  ([key, value]) => Reflect.get(shape.font, key) === value,
                ) &&
                shape.left === input.left &&
                shape.top === input.top &&
                shape.width === input.width &&
                shape.height === input.height
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_delete_shape",
        "Remove only the requested native shape, then independently check all remaining shape IDs on that slide.",
        pptShape,
        false,
        async (input) => {
          const before = (await slides()).find((slide) => slide.id === input.slideId);
          if (!before?.shapes.some((shape) => shape.id === input.shapeId))
            throw new Error("The target shape is absent.");
          return mutation(
            input,
            `Slide ${input.slideId}, shape ${input.shapeId}`,
            "Delete the requested object",
            () =>
              PowerPoint.run(async (context) => {
                context.presentation.slides
                  .getItem(input.slideId)
                  .shapes.getItem(input.shapeId)
                  .delete();
                await context.sync();
                return {};
              }),
            async () =>
              same(
                (await slides()).find((slide) => slide.id === input.slideId)?.shapes ?? [],
                before.shapes.filter((shape) => shape.id !== input.shapeId),
              ),
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_add_slide",
        "Add one native slide, then resolve it from a fresh collection read; do not repeat creation after a later failure.",
        file,
        false,
        async (input) => {
          need("PowerPointApi", "1.3");
          const before = await slides();
          return mutation(
            input,
            "Presentation",
            "Add a slide",
            () =>
              PowerPoint.run(async (context) => {
                context.presentation.slides.add();
                await context.sync();
                return {};
              }),
            async () => {
              const after = await slides();
              return (
                after.length === before.length + 1 &&
                before.every((slide) => after.some((current) => same(current, slide)))
              );
            },
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_delete_slide",
        "Delete exactly the requested native slide ID, then verify remaining slides and shape inventories.",
        file.extend({ slideId: z.string().min(1) }),
        false,
        async (input) => {
          const before = await slides();
          if (!before.some((slide) => slide.id === input.slideId))
            throw new Error("The target slide is absent.");
          return mutation(
            input,
            `Slide ${input.slideId}`,
            "Delete the requested slide",
            () =>
              PowerPoint.run(async (context) => {
                context.presentation.slides.getItem(input.slideId).delete();
                await context.sync();
                return {};
              }),
            async () =>
              same(
                await slides(),
                before.filter((slide) => slide.id !== input.slideId),
              ),
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_select_slide",
        "Select and independently confirm one native slide before a selected-slide operation; requires PowerPointApi 1.5.",
        file.extend({ slideId: z.string().min(1) }),
        false,
        async (input) => {
          need("PowerPointApi", "1.5");
          return mutation(
            input,
            `Slide ${input.slideId}`,
            "Select the requested slide",
            async () => {
              await selectSlide(input.slideId);
              return {};
            },
            () => isSlideSelected(input.slideId),
          );
        },
      ),
      operation(
        "rook_m365_powerpoint_insert_image",
        "Select the resolved slide and insert an image via Office's native image coercion, then inspect new shape inventory. Requires PowerPointApi 1.5 and ImageCoercion 1.1; crop/layout needs visual checking.",
        file.extend({
          slideId: z.string().min(1),
          base64: z.string().min(1),
          left: z.number(),
          top: z.number(),
          width: z.number().positive(),
          height: z.number().positive(),
        }),
        false,
        async (input) => {
          need("PowerPointApi", "1.5");
          need("ImageCoercion", "1.1");
          const before = await slides();
          return mutation(
            input,
            `Slide ${input.slideId}`,
            "Insert the supplied image",
            async (completed) => {
              await selectSlide(input.slideId);
              if (!(await isSlideSelected(input.slideId)))
                throw new Error(
                  "The requested slide selection could not be confirmed. No image was inserted.",
                );
              completed({ selectedSlideId: input.slideId });
              await new Promise<void>((resolve, reject) =>
                Office.context.document.setSelectedDataAsync(
                  input.base64,
                  {
                    coercionType: Office.CoercionType.Image,
                    imageLeft: input.left,
                    imageTop: input.top,
                    imageWidth: input.width,
                    imageHeight: input.height,
                  },
                  (result) =>
                    result.status === Office.AsyncResultStatus.Succeeded
                      ? resolve()
                      : reject(new Error(result.error.message)),
                ),
              );
              return {};
            },
            async () => {
              const old = new Set(
                before.find((slide) => slide.id === input.slideId)?.shapes.map((shape) => shape.id),
              );
              const added =
                (await slides())
                  .find((slide) => slide.id === input.slideId)
                  ?.shapes.filter((shape) => !old.has(shape.id)) ?? [];
              return (
                added.length === 1 &&
                added[0]?.type === PowerPoint.ShapeType.image &&
                added[0].left === input.left &&
                added[0].top === input.top &&
                added[0].width === input.width &&
                added[0].height === input.height
              );
            },
          );
        },
      ),
    );
  }
  return operations;
}
