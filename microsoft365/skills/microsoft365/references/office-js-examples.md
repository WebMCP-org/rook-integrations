# Office.js examples through Playwright

These are complete `execute` bodies. Supply the editor's `tabId` to `execute`.
Its existing `page` binding is the requested editor page. Replace example
worksheet names, text and IDs with values discovered from the actual document.
The callback passed to `evaluate` runs in the initialized add-in frame.

## Read the bound host and document

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame)
  throw new Error("Open the installed Script Lab Code pane, then inspect page.frames() again.");
await officeFrame.waitForFunction(
  () => typeof Office !== "undefined" && Boolean(Office.context?.document),
  undefined,
  { timeout: 15_000 },
);
return await officeFrame.evaluate(async () => {
  const ready = await Office.onReady();
  return {
    host: ready.host,
    platform: ready.platform,
    documentUrl: Office.context.document.url,
    excel: typeof Excel !== "undefined",
    word: typeof Word !== "undefined",
    powerpoint: typeof PowerPoint !== "undefined",
  };
});
```

Confirm the returned host and file identity before choosing an edit. The URL
match above identifies likely frames; initialization and document checks are
still required. Inspect frame URLs rather than assuming a fixed frame number.

## Format an existing Excel table and finish its layout

This example changes formatting, not values, formulas or validation. It fits
short columns, gives the notes column a bounded reading width, then fits rows.
A merged title needs its own explicit height and visual check.

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame) throw new Error("Open Script Lab's Code pane first.");
return await officeFrame.evaluate(async () => {
  await Office.onReady();
  if (!Office.context.requirements.isSetSupported("ExcelApi", "1.2"))
    throw new Error("ExcelApi 1.2 is required for this layout example.");
  const documentUrl = Office.context.document.url;
  const before = await Excel.run(async (context) => {
    const range = context.workbook.worksheets.getItem("Planner").getRange("A1:D6");
    range.load("values,formulas");
    await context.sync();
    return { values: range.values, formulas: range.formulas };
  });
  let applied = false;
  try {
    if (Office.context.document.url !== documentUrl) throw new Error("The open document changed.");
    await Excel.run(async (context) => {
      const sheet = context.workbook.worksheets.getItem("Planner");
      const range = sheet.getRange("A1:D6");
      const header = sheet.getRange("A1:D1");
      header.format.font.bold = true;
      header.format.font.color = "#FFFFFF";
      header.format.fill.color = "#165A7D";
      range.format.verticalAlignment = "Center";
      sheet.getRange("D1:D6").format.columnWidth = 280;
      sheet.getRange("D1:D6").format.wrapText = true;
      await context.sync();
      sheet.getRange("A1:C6").format.autofitColumns();
      await context.sync();
      range.format.autofitRows();
      await context.sync();
    });
    applied = true;
    const after = await Excel.run(async (context) => {
      const range = context.workbook.worksheets.getItem("Planner").getRange("A1:D6");
      range.load("values,formulas");
      await context.sync();
      return { values: range.values, formulas: range.formulas };
    });
    return {
      documentUrl,
      location: "Planner!A1:D6",
      applied,
      contentPreserved: JSON.stringify(before) === JSON.stringify(after),
      before,
      after,
      visualCheck: "Inspect headers, merged cells and the last line of each wrapped note.",
    };
  } catch (error) {
    return {
      documentUrl,
      applied,
      error: String(error),
      action: "Inspect the current source before retrying.",
    };
  }
});
```

## Format one Word text range while preserving its link and body

Use an actual unique text anchor. Read HTML or native table/comment objects when
those structures matter; body text alone does not establish their preservation.

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame) throw new Error("Open Script Lab's Code pane first.");
return await officeFrame.evaluate(async () => {
  await Office.onReady();
  const documentUrl = Office.context.document.url;
  const anchor = "Evidence Alpha";
  const before = await Word.run(async (context) => {
    const matches = context.document.body.search(anchor, { matchCase: true });
    matches.load("items");
    context.document.body.load("text");
    await context.sync();
    if (matches.items.length !== 1) throw new Error("Resolve exactly one native text range.");
    const range = matches.items[0]!;
    range.load("text,hyperlink");
    await context.sync();
    return { body: context.document.body.text, text: range.text, hyperlink: range.hyperlink };
  });
  let applied = false;
  try {
    if (Office.context.document.url !== documentUrl) throw new Error("The open document changed.");
    await Word.run(async (context) => {
      const matches = context.document.body.search(anchor, { matchCase: true });
      matches.load("items");
      await context.sync();
      if (matches.items.length !== 1) throw new Error("The text range changed.");
      const range = matches.items[0]!;
      range.font.bold = true;
      range.font.size = 14;
      await context.sync();
    });
    applied = true;
    const after = await Word.run(async (context) => {
      const matches = context.document.body.search(anchor, { matchCase: true });
      matches.load("items");
      context.document.body.load("text");
      await context.sync();
      if (matches.items.length !== 1) throw new Error("The changed range could not be resolved.");
      const range = matches.items[0]!;
      range.load("text,hyperlink");
      range.font.load("bold,size");
      await context.sync();
      return {
        body: context.document.body.text,
        text: range.text,
        hyperlink: range.hyperlink,
        bold: range.font.bold,
        size: range.font.size,
      };
    });
    return {
      documentUrl,
      applied,
      location: anchor,
      before,
      after,
      verified:
        before.body === after.body &&
        before.text === after.text &&
        before.hyperlink === after.hyperlink &&
        after.bold === true &&
        after.size === 14,
    };
  } catch (error) {
    return {
      documentUrl,
      applied,
      error: String(error),
      action: "Inspect the source before retrying.",
    };
  }
});
```

For replacement, resolve one range, inspect its font and hyperlink coverage,
then use `range.insertText(replacement, Word.InsertLocation.replace)`. Restore
only the properties and relationships the requested edit should preserve.
Mixed styles or partial links need smaller ranges or an explicit mapping.
Use replacement callbacks when computing expected text containing dollar signs.

## Read slide and shape IDs

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame) throw new Error("Open Script Lab's Code pane first.");
return await officeFrame.evaluate(async () => {
  await Office.onReady();
  return await PowerPoint.run(async (context) => {
    const slides = context.presentation.slides;
    slides.load("items/id");
    await context.sync();
    for (const slide of slides.items)
      slide.shapes.load("items/id,items/name,items/left,items/top,items/width,items/height");
    await context.sync();
    return {
      documentUrl: Office.context.document.url,
      slides: slides.items.map((slide) => ({
        id: slide.id,
        shapes: slide.shapes.items.map((shape) => ({
          id: shape.id,
          name: shape.name,
          left: shape.left,
          top: shape.top,
          width: shape.width,
          height: shape.height,
        })),
      })),
    };
  });
});
```

## Format and position an existing PowerPoint shape

Pass actual IDs discovered from the previous native read. Position and text fit
need separate checks; these coordinates are examples in points.

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame) throw new Error("Open Script Lab's Code pane first.");
return await officeFrame.evaluate(
  async ({ slideId, shapeId }) => {
    await Office.onReady();
    if (!Office.context.requirements.isSetSupported("PowerPointApi", "1.4"))
      throw new Error("PowerPointApi 1.4 is required.");
    const documentUrl = Office.context.document.url;
    let applied = false;
    try {
      await PowerPoint.run(async (context) => {
        const shape = context.presentation.slides.getItem(slideId).shapes.getItem(shapeId);
        shape.left = 36;
        shape.top = 80;
        shape.width = 300;
        shape.height = 90;
        shape.textFrame.textRange.font.bold = true;
        shape.textFrame.textRange.font.size = 24;
        await context.sync();
      });
      applied = true;
      const after = await PowerPoint.run(async (context) => {
        const shape = context.presentation.slides.getItem(slideId).shapes.getItem(shapeId);
        shape.load("left,top,width,height");
        shape.textFrame.textRange.load("text");
        const font = shape.textFrame.textRange.font;
        font.load("bold,size");
        await context.sync();
        return {
          text: shape.textFrame.textRange.text,
          left: shape.left,
          top: shape.top,
          width: shape.width,
          height: shape.height,
          bold: font.bold,
          size: font.size,
        };
      });
      return {
        documentUrl,
        applied,
        location: { slideId, shapeId },
        after,
        verified:
          after.left === 36 &&
          after.top === 80 &&
          after.width === 300 &&
          after.height === 90 &&
          after.bold === true &&
          after.size === 24,
        visualCheck: "Inspect text fit, spacing and preserved neighboring objects.",
      };
    } catch (error) {
      return {
        documentUrl,
        applied,
        error: String(error),
        action: "Do not repeat a successful edit without a fresh source read.",
      };
    }
  },
  { slideId: "actual-slide-id", shapeId: "actual-shape-id" },
);
```

## Insert image bytes into Excel without a desktop picker

Image coercion and native picture APIs vary by host. This Excel example requires
ExcelApi 1.9. Pass actual bytes as base64 and confirm the worksheet first.

```ts
// execute body with tabId
const officeFrame = page.frames().find((frame) => /script-lab|scriptlab/iu.test(frame.url()));
if (!officeFrame) throw new Error("Open Script Lab's Code pane first.");
return await officeFrame.evaluate(
  async ({ worksheetId, base64 }) => {
    await Office.onReady();
    if (!Office.context.requirements.isSetSupported("ExcelApi", "1.9"))
      throw new Error("ExcelApi 1.9 is required for images.");
    let shapeId: string | undefined;
    try {
      await Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getItem(worksheetId);
        const picture = sheet.shapes.addImage(base64);
        picture.left = 36;
        picture.top = 120;
        picture.width = 240;
        picture.height = 120;
        picture.load("id");
        await context.sync();
        shapeId = picture.id;
      });
      const after = await Excel.run(async (context) => {
        const picture = context.workbook.worksheets.getItem(worksheetId).shapes.getItem(shapeId!);
        picture.load("id,left,top,width,height");
        await context.sync();
        return {
          id: picture.id,
          left: picture.left,
          top: picture.top,
          width: picture.width,
          height: picture.height,
        };
      });
      return {
        documentUrl: Office.context.document.url,
        shapeId,
        applied: true,
        after,
        visualCheck: "Confirm the picture, crop and surrounding cells in the editor.",
      };
    } catch (error) {
      return {
        documentUrl: Office.context.document.url,
        shapeId,
        applied: shapeId !== undefined,
        error: String(error),
        action: "Inspect existing shapes before any retry.",
      };
    }
  },
  { worksheetId: "actual-worksheet-id", base64: "actual-image-base64" },
);
```

Use the same direct SDK pattern for native tables, worksheet and slide changes,
Word images, PowerPoint notes and supported picture/crop properties. Read the
Microsoft reference for exact inputs rather than introducing a wrapper API.
