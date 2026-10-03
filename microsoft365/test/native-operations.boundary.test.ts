import { afterEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { createMicrosoft365Operations } from "../src/index";
import {
  documentUrl,
  oldSentence,
  newSentence,
  prefix,
  suffix,
  wordFont,
  powerpointFont,
  wordHost,
  excelHost,
  excelRangeHost,
  powerpointHost,
} from "./office-host-fixture";

const receiptSchema = z.object({
  data: z.looseObject({}),
  change: z.object({
    status: z.enum(["verified", "applied", "failed"]),
    description: z.string(),
    location: z.string(),
  }),
});
async function invoke(name: string, args: object) {
  const operations = await createMicrosoft365Operations();
  const operation = operations?.find((operation) => operation.name === name);
  if (!operation) throw Error(`Operation ${name} missing`);
  return receiptSchema.parse(await operation.invoke({ documentUrl, ...args }));
}
afterEach(() => vi.unstubAllGlobals());

describe("Word operations at the native Office boundary", () => {
  it.each([
    {
      name: "two different hyperlinks",
      links: [
        { start: 0, end: 10, url: "https://example.org/first" },
        { start: 10, end: oldSentence.length, url: "https://example.org/second" },
      ],
    },
    {
      name: "one partially linked sentence",
      links: [{ start: 4, end: 10, url: "https://example.org/partial" }],
    },
  ])("refuses replacement of $name before any mutation", async ({ links }) => {
    const host = wordHost({ targetLinks: links }),
      before = host.snapshot();
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("failed");
    expect(result.change.description).toContain("partial or multiple hyperlinks");
    expect(host.state.units).toEqual(before.units);
    expect(host.state.writes).toBe(0);
    expect(host.state.replacements).toBe(0);
  });

  it("restores native formatting and the full target hyperlink at a UTF-16 offset", async () => {
    const host = wordHost({
        targetLinks: [{ start: 0, end: oldSentence.length, url: "https://example.org/evidence" }],
      }),
      before = host.snapshot();
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("verified");
    expect(host.text()).toBe(prefix + newSentence + suffix);
    expect(host.state.units.slice(0, prefix.length)).toEqual(before.units.slice(0, prefix.length));
    expect(host.state.units.slice(prefix.length + newSentence.length)).toEqual(
      before.units.slice(prefix.length + oldSentence.length),
    );
    expect(
      host.state.units
        .slice(prefix.length, prefix.length + newSentence.length)
        .every(
          (unit) =>
            unit.link === "https://example.org/evidence" &&
            JSON.stringify(unit.font) === JSON.stringify(wordFont),
        ),
    ).toBe(true);
    expect(host.state.replacements).toBe(1);
    expect(host.state.writes).toBe(1);
  });

  it("does not turn a lost-link read-back into verified text preservation", async () => {
    const host = wordHost({
      loseLinkOnReadback: true,
      targetLinks: [{ start: 0, end: oldSentence.length, url: "https://example.org/evidence" }],
    });
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: newSentence,
    });
    expect(host.text()).toBe(prefix + newSentence + suffix);
    expect(result.change.status).toBe("applied");
    expect(result.change.description).toContain("did not match");
    expect(host.state.replacements).toBe(1);
  });

  it("keeps a successful write applied when the separate native read fails", async () => {
    const host = wordHost({ failReadAfterWrite: true });
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: newSentence,
    });
    expect(host.text()).toBe(prefix + newSentence + suffix);
    expect(result.change.status).toBe("applied");
    expect(result.change.description).toContain("Independent native read unavailable");
    expect(host.state.replacements).toBe(1);
  });

  it("rejects a native Mixed underline sentinel without changing text", async () => {
    const host = wordHost({ targetFont: { ...wordFont, underline: "Mixed" } }),
      before = host.snapshot();
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("failed");
    expect(host.state.units).toEqual(before.units);
    expect(host.state.writes).toBe(0);
  });

  it("checks WordApi 1.3 before hyperlink-preserving replacement", async () => {
    const host = wordHost({ requirements: { WordApi: "1.1" } });
    await expect(
      invoke("rook_m365_word_replace_text", { text: oldSentence, replacement: newSentence }),
    ).rejects.toThrow("WordApi 1.3");
    expect(host.state.writes).toBe(0);
  });

  it("preserves multiple existing links during a narrow font-only change", async () => {
    const host = wordHost({
        targetLinks: [
          { start: 0, end: 10, url: "https://example.org/first" },
          { start: 10, end: oldSentence.length, url: "https://example.org/second" },
        ],
      }),
      before = host.snapshot();
    const result = await invoke("rook_m365_word_format_text", {
      text: oldSentence,
      font: { bold: false },
    });
    expect(result.change.status).toBe("verified");
    expect(host.text()).toBe(prefix + oldSentence + suffix);
    expect(host.state.units.map((unit) => unit.link)).toEqual(
      before.units.map((unit) => unit.link),
    );
    expect(
      host.state.units
        .slice(prefix.length, prefix.length + oldSentence.length)
        .every((unit) => unit.font.bold === false),
    ).toBe(true);
  });

  it("does not mistake an existing same-size picture for a wrongly sized appended image", async () => {
    const host = wordHost({
      existingPictures: [{ width: 48, height: 48 }],
      ignorePictureSize: true,
    });
    const result = await invoke("rook_m365_word_insert_image", {
      base64: "fixture",
      position: "End",
      width: 48,
      height: 48,
    });
    expect(host.state.pictures).toEqual([
      { width: 48, height: 48 },
      { width: 72, height: 72 },
    ]);
    expect(result.change.status).toBe("applied");
    expect(result.change.description).toContain("did not match");
  });
});

describe("Excel native worksheet selection", () => {
  it("independently confirms activation while preserving existing sheets", async () => {
    const host = excelHost(),
      before = host.snapshot();
    const result = await invoke("rook_m365_excel_update_sheet", {
      worksheetId: "target",
      activate: true,
    });
    expect(host.state.activeId).toBe("target");
    expect(host.state.activeReads).toBeGreaterThan(0);
    expect(host.state.sheets).toEqual(before);
    expect(result.change.status).toBe("verified");
  });
  it("leaves activation applied/unverified when the native active sheet does not change", async () => {
    const host = excelHost({ ignoreActivation: true });
    const result = await invoke("rook_m365_excel_update_sheet", {
      worksheetId: "target",
      activate: true,
    });
    expect(host.state.activeId).toBe("original");
    expect(host.state.activations).toBe(1);
    expect(result.change.status).toBe("applied");
  });
});

describe("PowerPoint native ranges, layout and partial outcomes", () => {
  it("positions an image without accessing unsupported text frames", async () => {
    const host = powerpointHost({ imageOnly: true }),
      before = host.snapshot();
    const result = await invoke("rook_m365_powerpoint_layout_shape", {
      slideId: "slide",
      shapeId: "target",
      geometry: { left: 70, width: 400 },
    });
    expect(result.change.status).toBe("verified");
    expect(host.state.shapes[0]).toMatchObject({
      left: 70,
      width: 400,
      top: before[0]!.top,
      height: before[0]!.height,
    });
    expect(host.state.shapes[1]).toEqual(before[1]);
    expect(host.state.textFrameReads).toBe(0);
  });
  it("refuses a stale native substring before changing another user's text", async () => {
    const host = powerpointHost({ staleText: true });
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("failed");
    expect(result.change.description).toContain("shape text changed");
    expect(host.text()).toBe("Collaborator edit: " + prefix + oldSentence + suffix);
    expect(host.state.textWrites).toBe(0);
  });
  it("retains applied text and native IDs if a later font restoration fails", async () => {
    const host = powerpointHost({ failFontRestore: true });
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: newSentence,
    });
    expect(host.text()).toBe(prefix + newSentence + suffix);
    expect(result.change.status).toBe("applied");
    expect(result.data).toMatchObject({ slideId: "slide", shapeId: "target", textApplied: true });
    expect(result.change.description).toContain("earlier mutation completed");
    expect(host.state.textWrites).toBe(1);
    expect(host.state.fontRestoreAttempts).toBe(1);
  });
  it("restores target underline/font and preserves other text and geometry", async () => {
    const host = powerpointHost(),
      before = host.snapshot();
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("verified");
    expect(host.text()).toBe(prefix + newSentence + suffix);
    expect(
      host.state.shapes[0]!.units.slice(prefix.length, prefix.length + newSentence.length).every(
        (unit) => JSON.stringify(unit.font) === JSON.stringify(powerpointFont),
      ),
    ).toBe(true);
    expect(host.state.shapes[0]!.units.slice(0, prefix.length)).toEqual(
      before[0]!.units.slice(0, prefix.length),
    );
    expect(host.state.shapes[0]!.units.slice(prefix.length + newSentence.length)).toEqual(
      before[0]!.units.slice(prefix.length + oldSentence.length),
    );
    expect(host.state.shapes[1]).toEqual(before[1]);
    expect(host.state.shapes[0]).toMatchObject({
      left: before[0]!.left,
      top: before[0]!.top,
      width: before[0]!.width,
      height: before[0]!.height,
    });
    expect(host.state.textWrites).toBe(1);
  });
  it("refuses linked shapes before replacing text", async () => {
    const host = powerpointHost({ linked: true }),
      before = host.snapshot();
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: newSentence,
    });
    expect(result.change.status).toBe("failed");
    expect(host.state.shapes).toEqual(before);
    expect(host.state.textWrites).toBe(0);
  });
  it("requires the supported hyperlink-inspection set before replacement", async () => {
    const host = powerpointHost({ requirements: { PowerPointApi: "1.4" } });
    await expect(
      invoke("rook_m365_powerpoint_replace_text", {
        slideId: "slide",
        shapeId: "target",
        text: oldSentence,
        replacement: newSentence,
      }),
    ).rejects.toThrow("PowerPointApi 1.10");
    expect(host.state.writes).toBe(0);
  });
  it("does not verify inserted text when requested font properties were not applied", async () => {
    const host = powerpointHost({ ignoreNewFont: true });
    const result = await invoke("rook_m365_powerpoint_add_text", {
      slideId: "slide",
      text: "New owned text",
      left: 10,
      top: 20,
      width: 250,
      height: 40,
      font: { bold: true, size: 20 },
    });
    expect(
      host.state.shapes.find((shape) => shape.id === "added-text")?.units[0]?.font,
    ).toMatchObject({ bold: false, size: 12 });
    expect(result.change.status).toBe("applied");
  });
  it("independently detects incorrect geometry on the newly inserted image", async () => {
    const host = powerpointHost({ wrongImageGeometry: true });
    const result = await invoke("rook_m365_powerpoint_insert_image", {
      slideId: "slide",
      base64: "fixture",
      left: 10,
      top: 20,
      width: 48,
      height: 48,
    });
    expect(host.state.shapes.at(-1)).toMatchObject({
      id: "inserted-image",
      type: "Image",
      width: 99,
    });
    expect(result.change.status).toBe("applied");
    expect(result.change.description).toContain("did not match");
  });
});

describe("Excel native readable table layout", () => {
  it("fits rows after final font, wrapping and column fit, then reads mixed dimensions independently", async () => {
    const host = excelRangeHost(),
      before = host.snapshot();
    const result = await invoke("rook_m365_excel_format_range", {
      worksheetId: "target",
      address: "A1:D3",
      font: { size: 14 },
      wrapText: true,
      autofitColumns: true,
      autofitRows: true,
    });
    expect(host.state.events).toEqual(["font", "wrapText", "autofitColumns", "autofitRows"]);
    expect(host.state.columns).toEqual([72, 84, 108, 280]);
    expect(host.state.rows).toEqual([24, 42, 30]);
    expect(result.data.layout).toMatchObject({
      width: 544,
      height: 96,
      columnWidth: null,
      rowHeight: null,
      wrapText: true,
    });
    expect(result.change.status).toBe("verified");
    expect(result.change.description).toContain("visual layout are separate");
    expect(host.state.runs).toBeGreaterThan(2);
    expect(host.state.values).toEqual(before.values);
    expect(host.state.formulas).toEqual(before.formulas);
    expect(host.state.validation).toEqual(before.validation);
    expect(host.state.unrelated).toEqual(before.unrelated);
  });

  it("applies a prose column width and wrap before fitting rows", async () => {
    const host = excelRangeHost();
    const result = await invoke("rook_m365_excel_format_range", {
      worksheetId: "target",
      address: "A1:D3",
      columnWidth: 280,
      wrapText: true,
      autofitRows: true,
    });
    expect(host.state.events).toEqual(["wrapText", "columnWidth", "autofitRows"]);
    expect(host.state.rows).toEqual([24, 42, 30]);
    expect(result.change.status).toBe("verified");
  });

  it.each([
    { columnWidth: 100, autofitColumns: true },
    { rowHeight: 24, autofitRows: true },
  ])("rejects conflicting sizing options before writing: %j", async (sizing) => {
    const host = excelRangeHost();
    await expect(
      invoke("rook_m365_excel_format_range", {
        worksheetId: "target",
        address: "A1:D3",
        ...sizing,
      }),
    ).rejects.toThrow("Choose AutoFit or a fixed dimension");
    expect(host.state.writes).toBe(0);
  });

  it("checks the native AutoFit API requirement before writing", async () => {
    const host = excelRangeHost({ requirements: { ExcelApi: "1.1" } });
    await expect(
      invoke("rook_m365_excel_format_range", {
        worksheetId: "target",
        address: "A1:D3",
        autofitRows: true,
      }),
    ).rejects.toThrow("ExcelApi 1.2");
    expect(host.state.writes).toBe(0);
  });

  it("retains a completed column fit when a later row fit fails", async () => {
    const host = excelRangeHost({ failAutofitRows: true });
    const result = await invoke("rook_m365_excel_format_range", {
      worksheetId: "target",
      address: "A1:D3",
      autofitColumns: true,
      autofitRows: true,
    });
    expect(result.change.status).toBe("applied");
    expect(result.data.columnsAutoFitApplied).toBe(true);
    expect(result.data.rowsAutoFitApplied).toBeUndefined();
    expect(result.change.description).toContain("earlier mutation completed");
    expect(host.state.columns).toEqual([72, 84, 108, 280]);
    expect(host.state.rows).toEqual([18, 18, 18]);
  });

  it.each([{ failReadAfterWrite: true }, { driftDimensionsOnReadback: true }])(
    "does not verify failed or changed independent dimensions: %j",
    async (options) => {
      const host = excelRangeHost(options);
      const result = await invoke("rook_m365_excel_format_range", {
        worksheetId: "target",
        address: "A1:D3",
        autofitColumns: true,
      });
      expect(result.change.status).toBe("applied");
      expect(result.data.columnsAutoFitApplied).toBe(true);
      expect(host.state.events.filter((event) => event === "autofitColumns")).toHaveLength(1);
    },
  );
});

it("does not verify redistributed column and row sizes with the same aggregate bounds", async () => {
  excelRangeHost({ redistributeOnReadback: true });
  const result = await invoke("rook_m365_excel_format_range", {
    worksheetId: "target",
    address: "A1:D3",
    wrapText: true,
    autofitColumns: true,
    autofitRows: true,
  });
  expect(result.data.layout).toMatchObject({
    width: 544,
    height: 96,
    columnWidths: [72, 84, 108, 280],
    rowHeights: [24, 42, 30],
  });
  expect(result.change.status).toBe("applied");
});

it("verifies Office's subpixel point rounding for fixed dimensions", async () => {
  const host = excelRangeHost({ quantizeDimensions: true });
  const result = await invoke("rook_m365_excel_format_range", {
    worksheetId: "target",
    address: "A1:D3",
    columnWidth: 280,
    rowHeight: 25,
  });
  expect(host.state.columns).toEqual([279.75, 279.75, 279.75, 279.75]);
  expect(host.state.rows).toEqual([24.75, 24.75, 24.75]);
  expect(result.change.status).toBe("verified");
});

const literalDollarText = "Literal tokens: $& $$ $` $'.";
describe("native Office literal text and image selection", () => {
  it("verifies a literal dollar-token Word replacement", async () => {
    const host = wordHost();
    const result = await invoke("rook_m365_word_replace_text", {
      text: oldSentence,
      replacement: literalDollarText,
    });
    expect(host.text()).toBe(prefix + literalDollarText + suffix);
    expect(result.change.status).toBe("verified");
  });
  it.each(["Before", "After"])(
    "verifies literal dollar-token insertion %s a Word anchor",
    async (position) => {
      const host = wordHost();
      const result = await invoke("rook_m365_word_insert_text", {
        anchor: oldSentence,
        text: literalDollarText,
        position,
      });
      expect(host.text()).toBe(
        prefix +
          (position === "Before"
            ? literalDollarText + oldSentence
            : oldSentence + literalDollarText) +
          suffix,
      );
      expect(result.change.status).toBe("verified");
    },
  );
  it("verifies a literal dollar-token PowerPoint replacement", async () => {
    const host = powerpointHost();
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: literalDollarText,
    });
    expect(host.text()).toBe(prefix + literalDollarText + suffix);
    expect(result.change.status).toBe("verified");
  });
  it("does not insert an image when the requested slide selection was ignored", async () => {
    const host = powerpointHost({ ignoreSelection: true }),
      before = host.snapshot();
    const result = await invoke("rook_m365_powerpoint_insert_image", {
      slideId: "slide",
      base64: "fixture",
      left: 10,
      top: 20,
      width: 48,
      height: 48,
    });
    expect(host.state.imageWrites).toBe(0);
    expect(host.state.shapes).toEqual(before);
    expect(result.change.status).toBe("failed");
    expect(result.change.description).toContain("selection");
  });
  it("rejects mixed PowerPoint underline properties before replacement", async () => {
    const host = powerpointHost({ mixedUnderline: true }),
      before = host.snapshot();
    const result = await invoke("rook_m365_powerpoint_replace_text", {
      slideId: "slide",
      shapeId: "target",
      text: oldSentence,
      replacement: newSentence,
    });
    expect(host.state.shapes).toEqual(before);
    expect(host.state.textWrites).toBe(0);
    expect(result.change.status).toBe("failed");
  });
});
