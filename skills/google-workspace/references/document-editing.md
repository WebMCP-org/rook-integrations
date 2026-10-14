# Native Google document editing

Use the existing Docs, Sheets and Slides services to edit their native objects.
Read the actual source, apply the smallest requested mutation, then separately
verify the changed content and relevant preserved structures. These execute
examples return compact documentEdit data for Rook's result presentation;
provider authentication remains with the installed client.

## Edit Google Docs in place

Read the document with `includeTabsContent: true`. Walk `tabs` and `childTabs`,
resolve the requested tab by its `tabProperties.tabId`, and read its structural
content. Body text, tables, headers, footers, footnotes, inline objects, links,
and suggestions are distinct structures; a plain-text export loses that map.
Use the native structure to choose the smallest edit and verify preserved
evidence, tables, links, and neighboring paragraphs afterward.

For an exact sentence unique within the selected tab, use `replaceAllText`
with `tabsCriteria`. For one occurrence among repeated sentences, use its
native indexes instead: retain the target run's `textStyle`, delete just that
occurrence, insert at its start, then restore that style and link over the new
text. Inserted text can inherit neighboring formatting and lose the original
link; text equality alone does not verify preservation. Sequence index-sensitive edits from the end of
the document toward the start. Google indexes count UTF-16 code units, which
matches JavaScript string length. Keep the paragraph's final newline intact.

This execute body replaces one exact sentence contained in a single native
text run in a tab's ordinary body paragraphs, restores that run's native style
and link, and independently checks text and style coverage. Change the
identifiers and text to the task's actual values. For tables or another segment, resolve that
structure first rather than flattening it into the body.

```ts
// execute body
const documentId = "document-id";
const tabId = "tab-id";
const oldText = "The launch is on Monday.";
const newText = "The launch is on Tuesday.";
if (!oldText || !newText || /[\r\n]/u.test(oldText + newText))
  throw new Error("Resolve structural changes separately from a single-paragraph sentence edit.");
const docs = applications["google-workspace"].docs();
const before = await docs.documents.get({ documentId, includeTabsContent: true });
const tabs = [...(before.tabs ?? [])];
for (let index = 0; index < tabs.length; index++) tabs.push(...(tabs[index]?.childTabs ?? []));
const tab = tabs.find((item) => item.tabProperties?.tabId === tabId);
if (!tab?.documentTab?.body?.content || !before.revisionId)
  throw new Error("Read the target tab and its current revision before editing.");
const original = tab.documentTab.body.content
  .flatMap(
    (item) => item.paragraph?.elements?.map((element) => element.textRun?.content ?? "") ?? [],
  )
  .join("");
const matches = tab.documentTab.body.content.flatMap(
  (item) =>
    item.paragraph?.elements?.flatMap((element) => {
      const text = element.textRun?.content ?? "";
      const offset = text.indexOf(oldText);
      return oldText && offset >= 0 && element.startIndex !== undefined
        ? [{ index: element.startIndex + offset, textStyle: element.textRun?.textStyle ?? {} }]
        : [];
    }) ?? [],
);
const match = matches[0];
if (!match || matches.length !== 1 || original.split(oldText).length !== 2)
  throw new Error(
    "Resolve one exact native range before editing; the sentence may span text runs.",
  );
await docs.documents.batchUpdate({
  documentId,
  requestBody: {
    writeControl: { requiredRevisionId: before.revisionId },
    requests: [
      {
        deleteContentRange: {
          range: { tabId, startIndex: match.index, endIndex: match.index + oldText.length },
        },
      },
      { insertText: { location: { tabId, index: match.index }, text: newText } },
      {
        updateTextStyle: {
          range: { tabId, startIndex: match.index, endIndex: match.index + newText.length },
          textStyle: match.textStyle,
          // Restore the whole source style, including unset inherited properties and link.
          // The exact range is only the replacement, never a whole-document reset.
          fields: "*",
        },
      },
    ],
  },
});
let verificationError = "";
const after = await docs.documents.get({ documentId, includeTabsContent: true }).catch((error) => {
  verificationError = String(error);
  return undefined;
});
const afterTabs = [...(after?.tabs ?? [])];
for (let index = 0; index < afterTabs.length; index++)
  afterTabs.push(...(afterTabs[index]?.childTabs ?? []));
const edited = afterTabs.find((item) => item.tabProperties?.tabId === tabId);
const current = edited?.documentTab?.body?.content
  ?.flatMap(
    (item) => item.paragraph?.elements?.map((element) => element.textRun?.content ?? "") ?? [],
  )
  .join("");
/** @param {unknown} value @returns {unknown} */
function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, item]) => [key, canonical(item)]),
    );
  return value;
}
const expectedStyle = JSON.stringify(canonical(match.textStyle));
const spans =
  edited?.documentTab?.body?.content?.flatMap(
    (item) =>
      item.paragraph?.elements?.flatMap((element) => {
        if (!element.textRun || element.startIndex === undefined) return [];
        const start = Math.max(match.index, element.startIndex);
        const end = Math.min(
          match.index + newText.length,
          element.startIndex + (element.textRun.content?.length ?? 0),
        );
        return end > start ? [{ start, end, style: element.textRun.textStyle ?? {} }] : [];
      }) ?? [],
  ) ?? [];
let covered = match.index;
let stylesPreserved = true;
for (const span of spans) {
  if (span.start !== covered || JSON.stringify(canonical(span.style)) !== expectedStyle)
    stylesPreserved = false;
  covered = span.end;
}
const verified =
  current === original.replace(oldText, () => newText) &&
  stylesPreserved &&
  covered === match.index + newText.length;
return {
  documentEdit: {
    title: after?.title ?? before.title ?? "Document",
    url: `https://docs.google.com/document/d/${documentId}/edit?tab=${encodeURIComponent(tabId)}`,
    changes: [
      {
        location: `Tab ${tabId}`,
        description:
          verificationError ||
          (verified
            ? "Replace the launch sentence; checked its text, formatting and link"
            : "Sentence write applied; text or formatting read-back needs checking"),
        status: verified ? "verified" : "applied",
      },
    ],
  },
};
```

A revision conflict means read again and re-resolve the edit against the
current document. Keep the successful mutation separate from a failed
verification read: report applied and unchecked if that read fails, retaining
the document ID and change location for recovery.

For a sentence spanning different style runs, preserve an explicit mapping of
those runs and links to the replacement before choosing the mutation. This
example resolves a uniform run only. Read-back must cover the full new range;
matching the visible sentence while losing its link is an unverified edit.

For formatting, use `updateTextStyle` or `updateParagraphStyle` with an exact
`range` containing `tabId`, `startIndex`, and `endIndex`. Set `fields` to the
requested properties, for example `bold` or `namedStyleType`. Formatting is a
style update over the existing content. Consolidating evidence requires an
explicit mapping of each source section into the resulting structure; retain
the detailed evidence and citations while changing its organization.

For images, `insertInlineImage` accepts a Google-fetchable `uri` and a native
`location` with `tabId` and `index`. Read back the inserted inline object and
check its dimensions and visible placement. Use the source editor for media
that cannot be supplied through this API; see the media route in the Slides
reference.

Sources: [tab-aware edits](https://developers.google.com/workspace/docs/api/how-tos/tabs),
[requests](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request),
[revision controls](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate).

## Edit Google Sheets in place

Resolve the spreadsheet and sheet with `spreadsheets.get` and read native
`sheetId`, title, grid properties, named ranges, charts, and protected ranges as
needed. The numeric `gid` in an editor URL is the sheet ID; zero is a valid ID.
Tab position is a separate property and changes when tabs are reordered.

Read just the cells involved in the operation, including formulas and cell
metadata when preservation depends on them. Quote and escape the sheet title
in A1 notation: a title containing an apostrophe doubles that apostrophe.
Use `values.update` or `values.batchUpdate` for requested cell values. Choose
`RAW` for literal data or `USER_ENTERED` for Google-parsed formulas and input.
An empty string clears a cell; `null` skips it. Keep untouched cells out of the
write. For formatting, update existing cells through `repeatCell` or
`updateCells` with a mask of only the requested style fields.

This execute body makes one range bold and verifies that its formulas/values
survive. Change the identifiers and range to the
actual target. A GridRange uses zero-based, end-exclusive indexes.

```ts
// execute body
const spreadsheetId = "spreadsheet-id";
const sheetId = 0;
const sheets = applications["google-workspace"].sheets();
const metadata = await sheets.spreadsheets.get({
  spreadsheetId,
  fields: "properties(title),sheets(properties)",
});
const target = metadata.sheets?.find((sheet) => sheet.properties?.sheetId === sheetId);
if (!target?.properties?.title) throw new Error("Resolve the target sheet first.");
const title = target.properties.title;
const a1 = `'${title.replaceAll("'", "''")}'!B13:H13`;
const before = await sheets.spreadsheets.get({
  spreadsheetId,
  ranges: [a1],
  includeGridData: true,
});
await sheets.spreadsheets.batchUpdate({
  spreadsheetId,
  requestBody: {
    requests: [
      {
        repeatCell: {
          range: {
            sheetId,
            startRowIndex: 12,
            endRowIndex: 13,
            startColumnIndex: 1,
            endColumnIndex: 8,
          },
          cell: { userEnteredFormat: { textFormat: { bold: true } } },
          fields: "userEnteredFormat.textFormat.bold",
        },
      },
    ],
  },
});
let verificationError = "";
const after = await sheets.spreadsheets
  .get({ spreadsheetId, ranges: [a1], includeGridData: true })
  .catch((error) => {
    verificationError = String(error);
    return undefined;
  });
const oldCells = before.sheets?.[0]?.data?.[0]?.rowData?.[0]?.values ?? [];
const newCells = after?.sheets?.[0]?.data?.[0]?.rowData?.[0]?.values ?? [];
// Check the requested format and preserve authored data independently of
// recalculated effective values. Full structural comparison belongs to the
// task when it involves charts, dropdowns, validation or protected ranges.
const verified =
  newCells.length === 7 &&
  newCells.every(
    (cell, index) =>
      cell.userEnteredFormat?.textFormat?.bold === true &&
      JSON.stringify(cell.userEnteredValue) === JSON.stringify(oldCells[index]?.userEnteredValue),
  );
return {
  documentEdit: {
    title: metadata.properties?.title ?? "Spreadsheet",
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${sheetId}&range=B13:H13`,
    changes: [
      {
        location: a1,
        description: verificationError || "Make header text bold",
        status: verified ? "verified" : "applied",
      },
    ],
  },
};
```

Manage tabs with `addSheet`, `updateSheetProperties`, `duplicateSheet`, or
`deleteSheet`. Use the resolved `sheetId`, then read metadata again to verify
the expected tab set, order, and titles. Deleting a requested tab removes that
tab's contents; inspect dependent formulas and preserve the other tabs.
For example, this body deletes a specific tab and checks the remaining IDs:

```ts
// execute body
const spreadsheetId = "spreadsheet-id";
const sheetId = 123;
const sheets = applications["google-workspace"].sheets();
const before = await sheets.spreadsheets.get({
  spreadsheetId,
  fields: "properties(title),sheets(properties(sheetId,title))",
});
const target = before.sheets?.find((sheet) => sheet.properties?.sheetId === sheetId);
if (!target) throw new Error("The requested sheet is absent; inspect current tabs.");
await sheets.spreadsheets.batchUpdate({
  spreadsheetId,
  requestBody: {
    requests: [{ deleteSheet: { sheetId } }],
  },
});
let verificationError = "";
const after = await sheets.spreadsheets
  .get({ spreadsheetId, fields: "sheets(properties(sheetId,title))" })
  .catch((error) => {
    verificationError = String(error);
    return undefined;
  });
const expected = (before.sheets ?? [])
  .filter((sheet) => sheet.properties?.sheetId !== sheetId)
  .map((sheet) => sheet.properties);
const actual = (after?.sheets ?? []).map((sheet) => sheet.properties);
const verified = after !== undefined && JSON.stringify(actual) === JSON.stringify(expected);
return {
  documentEdit: {
    title: before.properties?.title ?? "Spreadsheet",
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`,
    changes: [
      {
        location: target.properties?.title ?? `Sheet ${sheetId}`,
        description: verificationError || "Delete the requested tab",
        status: verified ? "verified" : "applied",
      },
    ],
  },
};
```

Selecting a tab for API work means addressing its ID; the UI does not need to
be selected. An Open file link can select the intended editor tab using `gid`
and the cells using `range`. For API features unavailable in the generated
client, use the visible editor and verify the same preserved properties.
For an in-cell image a Google-fetchable URL can be used in an `IMAGE` formula
with `USER_ENTERED`; this changes that cell's formula. An over-grid image is a
different operation and may require the editor's picker-free upload route.

Sources: [field masks and updates](https://developers.google.com/workspace/sheets/api/guides/batchupdate),
[tab operations](https://developers.google.com/workspace/sheets/api/samples/sheet),
[value input](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update).

## Edit Google Slides in place

Read `presentations.get`, then resolve the requested slide's `objectId` and
the element's `objectId`. Slide number is a position, not a stable identifier.
Read shape text, its runs and paragraph styles, tables, notes, element size,
transforms and media before changing the affected object.

### Plan the slide before positioning objects

Use an existing theme/layout and its placeholders when they fit the task.
For a custom layout, read the actual `pageSize` and work in one coordinate
system. Record each object's role, stable ID and intended rectangle before
writing. Build repeated cards from `x(i) = margin + i * (cardWidth + gap)`;
assign the same card index to its background, number, heading and body text.
Use distinct IDs. Give each text object its own rectangle inside the card.
This avoids moving backgrounds while all labels stay at the first origin.

Use a common margin, gutter, title baseline and footer band across the deck.
Reserve room for badges and source notes. Check each intended rectangle is
inside the slide and its own card. Check independent columns for overlap;
a card background can intentionally contain its text. Align common edges and
distribute repeated items consistently. These are authoring defaults, not
fixed dimensions required by Google or Microsoft.

### Position and text fit are separate checks

Google's transform acts on the untransformed `size`. Read both. Use PT for
planned geometry; convert EMU dimensions with 12,700 EMU per point. Include
all matrix entries when setting an `ABSOLUTE` transform, since omitted entries
become zero. Compose parent and child matrices for grouped elements. The
example below handles only ordinary, ungrouped, axis-aligned text boxes.
Read back effective bounds; Google can normalize `size` and `transform` while
preserving their visual result. [Google positioning guide](https://developers.google.com/workspace/slides/api/guides/transform).

Set the box before styling its text. Keep font size independent of transform
scale. Budget height for line spacing, paragraph spacing, indentation and text
insets. Resize the box or reduce/split the copy before shrinking text below a
readable size. Give a two-digit label enough horizontal room to remain on one
line. Preview long region names beside badges instead of letting them collide.

Google's API permits writing only `NONE` or `AUTOFIT_TYPE_UNSPECIFIED` to
`autofitType`; `TEXT_AUTOFIT` and `SHAPE_AUTOFIT` are read values. A text-affecting
request can reset autofit to `NONE`. Inspect the rendered result after content
and style changes rather than assuming a font or box update prevents overflow.
[Google shape/autofit reference](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/shapes).

Give each slide a meaningful title and a clear reading order. Prefer layouts
with useful placeholders. Use consistent alignment, readable contrast and
white space. Microsoft's accessibility guidance recommends sans-serif text
of at least 18pt; use a readable presentation scale for body copy and inspect
small citations separately. [Microsoft accessibility guidance](https://support.microsoft.com/en-us/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities),
[alignment and distribution](https://support.microsoft.com/en-us/office/graphics-visuals/align-or-arrange-objects).

### Fit the image content, not its empty border

Inspect the source asset before insertion. Determine whether a black region
belongs to the bitmap, an outline or a shape behind it. A rounded background
does not clip a rectangular image placed over it. Keep the source aspect ratio.
Choose **fit** to show the full image, or **fill/crop** to cover a frame while
preserving the important subject. Fit can leave space; fill crops outer edges.
[Microsoft image fit/fill](https://support.microsoft.com/en-us/office/graphics-visuals/crop-a-picture-to-fit-in-a-shape).

Google image `cropProperties` is read-only. For a supported replacement use
`replaceImage` with `CENTER_CROP` or `CENTER_INSIDE`, addressed to the exact
image ID; replacement can remove existing image effects, so inspect them.
A shape replacement produces a rectangular image, not the shape's rounded
mask. Use the editor's crop/crop-to-shape controls for unsupported masks and
focal-point adjustments. Recheck the crop and subject after the final resize.
[Google image properties](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations.pages/other),
[Google image replacement](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/request#replaceimagerequest).

### Inspect every finished slide

Check native geometry and content, then inspect a thumbnail or the actual
slide at a useful zoom. Review every slide in a contact sheet, then enlarge
slides with dense text, grouped cards, badges or crops. Look for duplicated
origins, overlap, clipped text, unwanted digit wrapping, off-slide objects,
low contrast, letterboxing and covered labels. Fix defects on their existing
object IDs and repeat the affected checks. A successful API batch or returned
object ID does not establish a legible layout. Report native geometry checks
and visual checks separately through `document_work`.

For formatting, use `updateTextStyle` or `updateParagraphStyle` on the existing
element, with `fields` restricted to the requested properties. `ALL` targets
all text in that element; `FIXED_RANGE` targets UTF-16 start/end indexes. Table
text also needs its `cellLocation`.

```ts
// execute body
const presentationId = "presentation-id";
const slideId = "slide-id";
const objectId = "title-shape-id";
const slides = applications["google-workspace"].slides();
const before = await slides.presentations.pages.get({ presentationId, pageObjectId: slideId });
const shape = before.pageElements?.find((element) => element.objectId === objectId);
if (!shape?.shape?.text) throw new Error("Resolve the target text element first.");
const oldText = shape.shape.text.textElements
  ?.map((element) => element.textRun?.content ?? "")
  .join("");
await slides.presentations.batchUpdate({
  presentationId,
  requestBody: {
    requests: [
      {
        updateTextStyle: {
          objectId,
          textRange: { type: "ALL" },
          style: { bold: true },
          fields: "bold",
        },
      },
    ],
  },
});
let verificationError = "";
const after = await slides.presentations.pages
  .get({ presentationId, pageObjectId: slideId })
  .catch((error) => {
    verificationError = String(error);
    return undefined;
  });
const edited = after?.pageElements?.find((element) => element.objectId === objectId);
const runs = edited?.shape?.text?.textElements?.filter((element) => element.textRun) ?? [];
const verified =
  runs.length > 0 &&
  runs.every((element) => element.textRun?.style?.bold === true) &&
  runs.map((element) => element.textRun?.content ?? "").join("") === oldText &&
  JSON.stringify(edited?.transform) === JSON.stringify(shape.transform) &&
  JSON.stringify(edited?.size) === JSON.stringify(shape.size);
return {
  documentEdit: {
    title: "Presentation",
    url: `https://docs.google.com/presentation/d/${presentationId}/edit#slide=id.${slideId}`,
    changes: [
      {
        location: `Slide ${slideId}, element ${objectId}`,
        description: verificationError || "Make title text bold",
        status: verified ? "verified" : "applied",
      },
    ],
  },
};
```

For a sentence edit, `replaceAllText` with `pageObjectIds` targets a slide, not
one shape. When multiple shapes contain the sentence, use `deleteText` with
an exact `FIXED_RANGE`, followed by `insertText` on the existing `objectId`.
Keep unrelated runs, notes, images and layout intact. Restore the affected
run's style when the replacement needs it. Use presentation
`writeControl.requiredRevisionId` from a fresh `presentations.get` when the
edit depends on indexes or an observed revision; re-read on a revision conflict.

## Insert media without a desktop picker

Use `createImage` with a stable new `objectId`, Google-fetchable URL,
`elementProperties.pageObjectId`, size and transform. Google fetches the image
from that URL; a browser-local Blob URL is not a remote media source. Read
the slide again to verify the inserted object, then use its thumbnail or
visible slide to check placement and cropping.

```ts
// execute body
const presentationId = "presentation-id";
const slideId = "slide-id";
const objectId = `rook_image_${crypto.randomUUID().replaceAll("-", "_")}`;
const slides = applications["google-workspace"].slides();
await slides.presentations.batchUpdate({
  presentationId,
  requestBody: {
    requests: [
      {
        createImage: {
          objectId,
          url: "https://example.com/photo.png",
          elementProperties: {
            pageObjectId: slideId,
            size: { width: { magnitude: 200, unit: "PT" }, height: { magnitude: 120, unit: "PT" } },
            transform: {
              scaleX: 1,
              scaleY: 1,
              shearX: 0,
              shearY: 0,
              translateX: 40,
              translateY: 60,
              unit: "PT",
            },
          },
        },
      },
    ],
  },
});
let verificationError = "";
const after = await slides.presentations.pages
  .get({ presentationId, pageObjectId: slideId })
  .catch((error) => {
    verificationError = String(error);
    return undefined;
  });
const inserted = after?.pageElements?.find((element) => element.objectId === objectId);
return {
  documentEdit: {
    title: "Presentation",
    url: `https://docs.google.com/presentation/d/${presentationId}/edit#slide=id.${slideId}`,
    changes: [
      {
        location: `Slide ${slideId}`,
        description:
          verificationError || "Insert the supplied image; placement needs visual checking",
        status: !after || inserted?.image ? "applied" : "failed",
      },
    ],
  },
};
```

For workspace media that has no suitable remote URL, choose the editor's file
input and `/skills/browser-files/lib/files.js` `uploadToPage` helper. Drive
upload alone does not make a file URL fetchable by Google image insertion.
Keep media sharing consistent with the task's intended audience. Desktop
menus and OS file dialogs are not required when an HTML file input is
available. API insertion only covers supported media: `createVideo` supports
YouTube and Drive sources, while other editor features may require UI work.

Sources: [text styling](https://developers.google.com/workspace/slides/api/guides/styling),
[images](https://developers.google.com/workspace/slides/api/guides/add-image),
[request reference](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/request).

### Place four existing card text boxes without stacking them

This example lays out four top-level text boxes inside an assigned row. Replace
the constants with resolved native IDs and fit the copy separately. It preserves
text and reports `applied` until visual text-fit checks are complete.

```ts
// execute body
const presentationId = "presentation-id";
const slideId = "slide-id";
const ids = ["card_text_1", "card_text_2", "card_text_3", "card_text_4"];
const slides = applications["google-workspace"].slides();
const before = await slides.presentations.get({ presentationId });
const points = (dimension?: { magnitude?: number; unit?: string }) => {
  if (dimension?.magnitude === undefined || !Number.isFinite(dimension.magnitude))
    throw new Error("Read a finite native dimension first.");
  if (dimension.unit === "PT") return dimension.magnitude;
  if (dimension.unit === "EMU") return dimension.magnitude / 12700;
  throw new Error("Resolve the native dimension unit.");
};
if (!before.revisionId) throw new Error("Read a revision before laying out observed objects.");
const width = points(before.pageSize?.width),
  height = points(before.pageSize?.height);
const margin = 36,
  gap = 12,
  inset = 12,
  top = 160,
  cardHeight = 140;
const cardWidth = (width - 2 * margin - (ids.length - 1) * gap) / ids.length;
if (
  new Set(ids).size !== ids.length ||
  cardWidth <= 2 * inset ||
  top + cardHeight > height - margin
)
  throw new Error("Resolve distinct IDs and a row that fits the actual slide.");
const page = before.slides?.find((item) => item.objectId === slideId);
const targets = ids.map((id, index) => {
  const element = page?.pageElements?.find((item) => item.objectId === id);
  const transform = element?.transform;
  if (
    !element?.shape?.text ||
    (transform?.shearX ?? 0) !== 0 ||
    (transform?.shearY ?? 0) !== 0 ||
    (transform?.scaleX ?? 1) <= 0 ||
    (transform?.scaleY ?? 1) <= 0
  )
    throw new Error("Resolve an ungrouped, axis-aligned text box before this layout.");
  const baseWidth = points(element.size?.width),
    baseHeight = points(element.size?.height);
  if (baseWidth <= 0 || baseHeight <= 0) throw new Error("Read positive element dimensions.");
  return {
    id,
    text: element.shape.text,
    x: margin + index * (cardWidth + gap) + inset,
    y: top + inset,
    width: cardWidth - 2 * inset,
    height: cardHeight - 2 * inset,
    baseWidth,
    baseHeight,
  };
});
await slides.presentations.batchUpdate({
  presentationId,
  requestBody: {
    writeControl: { requiredRevisionId: before.revisionId },
    requests: targets.map((target) => ({
      updatePageElementTransform: {
        objectId: target.id,
        applyMode: "ABSOLUTE",
        transform: {
          scaleX: target.width / target.baseWidth,
          scaleY: target.height / target.baseHeight,
          shearX: 0,
          shearY: 0,
          translateX: target.x,
          translateY: target.y,
          unit: "PT",
        },
      },
    })),
  },
});
let checkError = "";
const after = await slides.presentations.pages
  .get({ presentationId, pageObjectId: slideId })
  .catch((error) => {
    checkError = String(error);
    return undefined;
  });
const close = (a: number, b: number) => Math.abs(a - b) < 0.1;
let geometryMatches = false;
try {
  geometryMatches =
    !!after &&
    targets.every((target) => {
      const item = after.pageElements?.find((element) => element.objectId === target.id);
      const t = item?.transform;
      if (!item || !t || (t.shearX ?? 0) !== 0 || (t.shearY ?? 0) !== 0) return false;
      const x = points({ magnitude: t.translateX ?? 0, unit: t.unit });
      const y = points({ magnitude: t.translateY ?? 0, unit: t.unit });
      return (
        close(x, target.x) &&
        close(y, target.y) &&
        close(points(item.size?.width) * (t.scaleX ?? 1), target.width) &&
        close(points(item.size?.height) * (t.scaleY ?? 1), target.height) &&
        JSON.stringify(item.shape?.text) === JSON.stringify(target.text)
      );
    });
} catch (error) {
  checkError = String(error);
}
return {
  documentEdit: {
    title: "Presentation card layout",
    url: `https://docs.google.com/presentation/d/${presentationId}/edit#slide=id.${slideId}`,
    changes: [
      {
        location: `Slide ${slideId}, four card text boxes`,
        description:
          checkError ||
          (geometryMatches
            ? "Native bounds match all four distinct slots; visual text-fit checks remain."
            : "Layout applied; native bounds need correction before visual verification."),
        status: "applied",
      },
    ],
  },
};
```

## Draft and restructure Docs without losing source material

Draft, expand, summarize, proofread and change tone in the model, then apply the
result to the requested native sections. Record the source facts and required
sections before a rewrite. A summary is a new reading view; it does not replace
the full report unless the user asks for that change. Keep evidence and links
outside the target range intact. Use short, plain technical English and retain
accurate technical names.

Choose one hierarchy: a `HEADING_1` document title with `HEADING_2` sections and
`HEADING_3` subsections, or the document's existing Title/section convention.
Do not make every nested heading `HEADING_1`. Use `updateParagraphStyle` with
`namedStyleType`, and `createParagraphBullets` for native lists. Set only the
requested fields. Resolve indexes from the current tab's paragraphs; do not
search a plain export that has lost table and tab boundaries.

For a new file, use `documents.create`, then read its native tab before writing.
For a supplied template, use Drive's native full-file copy and adapt the copy.
Retain all requested source sections, tables and tabs. For a notes-to-table task,
map each source item to its destination row/cell before deleting any source text.
Insert the native table, read its actual paragraph indexes, then fill cells from
highest index to lowest. Read again before styling the populated cells. Existing
merged cells, suggestions and protected controls need their own structural checks.

This example appends and fills one native table in the selected tab. It does not
remove source paragraphs. Later read/write failures keep the creation applied;
inspect the file before repeating the operation.

```ts
// execute body
const documentId = "document-id",
  tabId = "tab-id";
const matrix = [
  ["Action", "Owner"],
  ["Run pilot", "Ateka"],
  ["Review results", "Omar"],
];
const docs = applications["google-workspace"].docs();
const before = await docs.documents.get({ documentId, includeTabsContent: true });
type Tab = NonNullable<typeof before.tabs>[number];
const flatten = (items: Tab[] = []): Tab[] =>
  items.flatMap((tab) => [tab, ...flatten(tab.childTabs)]);
const source = flatten(before.tabs).find((tab) => tab.tabProperties?.tabId === tabId)?.documentTab;
if (!source?.body?.content || !before.revisionId)
  throw new Error("Resolve the native tab and revision.");
const paragraphs = (content: typeof source.body.content) =>
  content
    ?.flatMap(
      (item) => item.paragraph?.elements?.map((element) => element.textRun?.content ?? "") ?? [],
    )
    .join("") ?? "";
const sourceText = paragraphs(source.body.content);
const oldTables = source.body.content.filter((item) => item.table);
let applied = false,
  verified = false,
  phase = "Insert table",
  detail = "";
let tableStart: number | undefined;
try {
  await docs.documents.batchUpdate({
    documentId,
    requestBody: {
      writeControl: { requiredRevisionId: before.revisionId },
      requests: [
        {
          insertTable: {
            rows: matrix.length,
            columns: matrix[0].length,
            endOfSegmentLocation: { tabId },
          },
        },
      ],
    },
  });
  applied = true;
  phase = "Resolve inserted table";
  const created = await docs.documents.get({ documentId, includeTabsContent: true });
  const content = flatten(created.tabs).find((tab) => tab.tabProperties?.tabId === tabId)
    ?.documentTab?.body?.content;
  const added =
    content?.filter(
      (item) => item.table && !oldTables.some((old) => old.startIndex === item.startIndex),
    ) ?? [];
  if (added.length !== 1 || !created.revisionId)
    throw new Error("Inspect the new table before another write.");
  const table = added[0];
  tableStart = table.startIndex;
  const cells =
    table.table?.tableRows?.flatMap(
      (row, r) =>
        row.tableCells?.map((cell, c) => ({
          index: cell.content?.find((item) => item.paragraph)?.startIndex,
          text: matrix[r]?.[c],
        })) ?? [],
    ) ?? [];
  if (
    cells.length !== matrix.length * matrix[0].length ||
    cells.some((cell) => cell.index === undefined || cell.text === undefined)
  )
    throw new Error("Resolve every destination cell paragraph.");
  phase = "Fill table";
  await docs.documents.batchUpdate({
    documentId,
    requestBody: {
      writeControl: { requiredRevisionId: created.revisionId },
      requests: cells
        .sort((a, b) => b.index! - a.index!)
        .map((cell) => ({
          insertText: { location: { tabId, index: cell.index! }, text: cell.text! },
        })),
    },
  });
  phase = "Verify table and source";
  const after = await docs.documents.get({ documentId, includeTabsContent: true });
  const actual = flatten(after.tabs).find((tab) => tab.tabProperties?.tabId === tabId)?.documentTab
    ?.body?.content;
  const finalTable = actual?.find((item) => item.startIndex === tableStart)?.table;
  const values = finalTable?.tableRows?.map(
    (row) => row.tableCells?.map((cell) => paragraphs(cell.content).replace(/\n$/u, "")) ?? [],
  );
  verified =
    JSON.stringify(values) === JSON.stringify(matrix) &&
    paragraphs(actual).startsWith(sourceText) &&
    oldTables.every(
      (old) =>
        JSON.stringify(actual?.find((item) => item.startIndex === old.startIndex)) ===
        JSON.stringify(old),
    );
} catch (error) {
  detail = `${phase}: ${String(error)}`;
}
return {
  documentEdit: {
    title: before.title ?? "Document",
    url: `https://docs.google.com/document/d/${documentId}/edit?tab=${encodeURIComponent(tabId)}`,
    changes: [
      {
        location: `Tab ${tabId}, table ${tableStart ?? "at document end"}`,
        description:
          detail ||
          "Append and fill the table; checked its cells and existing source paragraphs/tables",
        status: verified ? "verified" : applied ? "applied" : "failed",
      },
    ],
  },
};
```

Sources: [Docs tables](https://developers.google.com/workspace/docs/api/how-tos/tables),
[paragraph styles](https://developers.google.com/workspace/docs/api/how-tos/format-text).

## Sheets formulas, controls, charts and cleanup

The generated Sheets client exposes these native request families. Build on that
client; do not add another formula engine or a generic spreadsheet wrapper.

- Write formulas with `values.update`/`values.batchUpdate` and `USER_ENTERED`, or
  `updateCells.userEnteredValue.formulaValue`. Use `RAW` for literal data.
- Read the locale and time zone. Test `XLOOKUP`, `INDEX`/`MATCH`, `SUMIFS`, `FILTER`,
  `QUERY` and array formulas on representative rows. Match lookup dimensions,
  reserve empty spill ranges and test missing matches, blanks and zero weights.
- Read `effectiveValue` and `effectiveValue.errorValue`, not just a plausible
  displayed number. Error types include `REF`, `VALUE`, `DIVIDE_BY_ZERO`, `NUM`
  and `N_A`. Out-of-range `INDEX` can report `NUM`, not `REF`. Correct the cause;
  use `IFNA`/`IFERROR` only when its fallback matches the user's intended meaning.
- Use `SPARKLINE` for an in-cell chart. It can have no scalar effective value;
  verify its authored formula and inspect the rendered bars separately.
- Apply date/currency/percent formats after native table creation, then verify
  actual formats. Table column types can keep their own default formats; use
  exact editor controls when the API does not apply the requested table format.
  Check header contrast and width after adding native table controls; their
  icons and dropdown arrows take space. Keep authored formulas intact.
- Use `setDataValidation` with `BOOLEAN` for native checkboxes, and list rules
  for ordinary dropdowns. Native table `DROPDOWN` columns render chip dropdowns.
  Their rule has `condition` only. Option colors and existing chip display
  details require the editor when the API does not expose them.
  For colors, select one cell in the target dropdown column through the name
  box, open its dropdown arrow, and choose the native **Edit** control. In
  **Data validation rules**, confirm **Apply to column/range** is the intended
  table column. Keep the option values, order and multi-select setting intact.
  Use each option's **Color** control, choose the requested palette/custom color,
  and click **Done**. Rook performs this routine setup itself. Read values/table
  rules back and inspect each chip color; API metadata alone cannot verify
  option colors. Never rebuild a copied table just to change those colors.
- Use boolean or gradient conditional-format rules for status highlights and
  heatmaps. Check the rule ranges, formula-relative anchors and effective colors.
- Use `textToColumns` with `delimiterType` and a one-column source range,
  `trimWhitespace`, `deleteDuplicates` and `sortRange` on the exact requested
  rectangle. Preserve neighboring rows, validation, notes and formula references.
- Use native filters/filter views and slicers for supported interactive views.
  Build ordinary Gantt, calendar or status-board layouts from dates, formulas
  and validation. Native Timeline remains account-dependent and uses editor
  controls; a layout is not a native drag-and-drop Kanban application.

This readonly example checks an explicit formula-result range. Replace its
expected values with values derived from the actual source facts. An error,
missing result or wrong result fails the audit even when the formula was accepted.

```ts
// execute body
const spreadsheetId = "spreadsheet-id",
  sheetTitle = "Audit";
const expected = [20, 30, 40, 140 / 6, 35, 1 / 3, 60];
const sheets = applications["google-workspace"].sheets();
const a1 = `'${sheetTitle.replaceAll("'", "''")}'!B2:B8`;
const observed = await sheets.spreadsheets.get({
  spreadsheetId,
  ranges: [a1],
  includeGridData: true,
});
const sheet = observed.sheets?.find((item) => item.properties?.title === sheetTitle);
if (!sheet || sheet.properties?.sheetId === undefined)
  throw new Error("Resolve the actual formula-audit tab ID.");
const cells = sheet.data?.[0]?.rowData?.map((row) => row.values?.[0]) ?? [];
const errors = cells.flatMap((cell, index) =>
  cell?.effectiveValue?.errorValue
    ? [
        {
          row: index + 2,
          error: cell.effectiveValue.errorValue.type,
          message: cell.effectiveValue.errorValue.message,
        },
      ]
    : [],
);
const verified =
  cells.length === expected.length &&
  cells.every(
    (cell, index) =>
      !cell?.effectiveValue?.errorValue &&
      cell?.effectiveValue?.numberValue !== undefined &&
      Math.abs(cell.effectiveValue.numberValue - expected[index]) < 1e-9,
  );
return {
  errors,
  documentEdit: {
    title: observed.properties?.title ?? "Spreadsheet",
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${sheet.properties?.sheetId ?? 0}&range=B2:B8`,
    changes: [
      {
        location: a1,
        description: verified
          ? "Read every formula result and checked it against expected source values"
          : "Formula audit failed: inspect native errors, missing results or wrong values",
        status: verified ? "verified" : "failed",
      },
    ],
  },
};
```

For charts, use `addChart` and retain returned chart IDs. `updateChartSpec`
replaces the full spec; merge the intended edit with the existing supported
spec first, and check any editor-only settings separately. Pie uses `pieChart`;
column, bar, line, area and combo use `basicChart`. **BAR series target
`BOTTOM_AXIS`**, while ordinary vertical chart series target `LEFT_AXIS` or
`RIGHT_AXIS`. Combo charts require deliberate per-series types and axes.
Domains and series must align, with one row or column per source range. Set
`headerCount` explicitly. Separate chart content changes from placement changes.

The next example creates one linked column chart, reads its returned ID back,
and preserves existing chart IDs. Change the domain/series ranges and location
for the actual workbook. Visual readability is still a separate check.

```ts
// execute body
const spreadsheetId = "spreadsheet-id",
  sourceSheetId = 0,
  dashboardSheetId = 1;
const sheets = applications["google-workspace"].sheets();
const before = await sheets.spreadsheets.get({
  spreadsheetId,
  fields: "properties(title),sheets(properties,charts)",
});
if (
  !before.sheets?.some((sheet) => sheet.properties?.sheetId === sourceSheetId) ||
  !before.sheets.some((sheet) => sheet.properties?.sheetId === dashboardSheetId)
)
  throw new Error("Resolve source and dashboard tabs.");
const oldIds = before.sheets.flatMap((sheet) => sheet.charts?.map((chart) => chart.chartId) ?? []);
const result = await sheets.spreadsheets.batchUpdate({
  spreadsheetId,
  requestBody: {
    requests: [
      {
        addChart: {
          chart: {
            spec: {
              title: "Amounts by item",
              basicChart: {
                chartType: "COLUMN",
                headerCount: 1,
                legendPosition: "NO_LEGEND",
                domains: [
                  {
                    domain: {
                      sourceRange: {
                        sources: [
                          {
                            sheetId: sourceSheetId,
                            startRowIndex: 0,
                            endRowIndex: 4,
                            startColumnIndex: 0,
                            endColumnIndex: 1,
                          },
                        ],
                      },
                    },
                  },
                ],
                series: [
                  {
                    series: {
                      sourceRange: {
                        sources: [
                          {
                            sheetId: sourceSheetId,
                            startRowIndex: 0,
                            endRowIndex: 4,
                            startColumnIndex: 2,
                            endColumnIndex: 3,
                          },
                        ],
                      },
                    },
                    targetAxis: "LEFT_AXIS",
                  },
                ],
              },
            },
            position: {
              overlayPosition: {
                anchorCell: { sheetId: dashboardSheetId, rowIndex: 3, columnIndex: 0 },
                widthPixels: 480,
                heightPixels: 300,
              },
            },
          },
        },
      },
    ],
  },
});
const id = result.replies?.[0]?.addChart?.chart?.chartId;
let status = "applied",
  detail = "Chart created; visual layout needs checking";
try {
  const after = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets(properties,charts)",
  });
  const all = after.sheets?.flatMap((sheet) => sheet.charts ?? []) ?? [];
  const chart = after.sheets
    ?.find((sheet) => sheet.properties?.sheetId === dashboardSheetId)
    ?.charts?.find((chart) => chart.chartId === id);
  if (
    id === undefined ||
    chart?.spec?.basicChart?.chartType !== "COLUMN" ||
    !oldIds.every((old) => all.some((chart) => chart.chartId === old))
  )
    detail = "Chart write applied; native ID/type or preserved-chart check needs attention";
} catch (error) {
  detail = `Chart created; read-back failed: ${String(error)}`;
}
return {
  chartId: id,
  documentEdit: {
    title: before.properties?.title ?? "Spreadsheet",
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${dashboardSheetId}`,
    changes: [
      {
        location: `Dashboard chart ${id ?? "returned ID unavailable"}`,
        description: detail,
        status,
      },
    ],
  },
};
```

To create table chip dropdowns, first read the actual headers and values. Keep
existing native tables and their colors; update their range when needed. Create
a new table only for the requested table workflow. This example sets a finite
status list on column E and a checkbox column G in a known seven-column range.
The API has no per-option color property.

```ts
// execute body
const spreadsheetId = "spreadsheet-id",
  sheetId = 0;
const sheets = applications["google-workspace"].sheets();
const before = await sheets.spreadsheets.get({
  spreadsheetId,
  ranges: ["Data!A1:G4"],
  includeGridData: true,
});
const target = before.sheets?.find((sheet) => sheet.properties?.sheetId === sheetId);
const headers = target?.data?.[0]?.rowData?.[0]?.values?.map(
  (cell) => cell.formattedValue ?? cell.userEnteredValue?.stringValue,
);
const names = ["Item", "Group", "Amount", "Weight", "Status", "Date", "Done"];
if (JSON.stringify(headers) !== JSON.stringify(names) || target?.tables?.length)
  throw new Error("Resolve the headers and existing tables before creating one.");
const table = await sheets.spreadsheets.batchUpdate({
  spreadsheetId,
  requestBody: {
    requests: [
      {
        addTable: {
          table: {
            name: "RookCoverageData",
            range: {
              sheetId,
              startRowIndex: 0,
              endRowIndex: 4,
              startColumnIndex: 0,
              endColumnIndex: 7,
            },
            columnProperties: names.map((name, index) => ({
              columnIndex: index,
              columnName: name,
              columnType: (
                ["TEXT", "TEXT", "DOUBLE", "DOUBLE", "DROPDOWN", "DATE", "BOOLEAN"] as const
              )[index],
              ...(index === 4
                ? {
                    dataValidationRule: {
                      condition: {
                        type: "ONE_OF_LIST",
                        values: [
                          { userEnteredValue: "Planned" },
                          { userEnteredValue: "Completed" },
                        ],
                      },
                    },
                  }
                : {}),
            })),
          },
        },
      },
    ],
  },
});
const created = table.replies?.[0]?.addTable?.table;
return {
  tableId: created?.tableId,
  documentEdit: {
    title: before.properties?.title ?? "Spreadsheet",
    url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${sheetId}`,
    changes: [
      {
        location: "Data!A1:G4",
        description:
          "Create the requested table with native dropdown/checkbox columns; independently check table metadata, values, colors and rendered chips next",
        status: "applied",
      },
    ],
  },
};
```

Sources: [functions](https://support.google.com/docs/table/25273?hl=en),
[tables and dropdowns](https://developers.google.com/workspace/sheets/api/guides/tables),
[chart specs](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/charts),
[requests](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request).

## Slides narrative, concise copy and speaker notes

Plan the audience, purpose, source facts and slide sequence before authoring.
Map each source point to a slide and a speaker-note paragraph. Keep slide copy
short; put detail in notes. Do not invent statistics or claim measured benefits
from a fictional example. Adapt tone and technical depth to the actual audience.
Create/edit the native slides and text boxes; inspect every rendered slide for
text fit, hierarchy and source preservation using the layout rules above.

Each slide's `slideProperties.notesPage.notesProperties.speakerNotesObjectId`
identifies its native speaker-note text shape. It is not the slide ID or notes
page ID. Replace the whole notes body only when requested; use exact text ranges
for a partial edit. To clear notes, delete their text without an empty insert. Only that shape's text is editable; notes-page layout and notes masters
are read-only. Resolve the ID from a fresh presentation read, then use native
`deleteText`/`insertText` on that ID. This leaves the visible slide alone.

This example changes one slide's notes, reads the notes back independently and
checks the visible page elements are unchanged. Keep the final native newline
separate from the authored text when comparing results.

```ts
// execute body
const presentationId = "presentation-id",
  slideId = "slide-id";
const notes =
  "Explain the three sensors, one-minute updates, and one-week pilot.\nUse only the supplied source facts.";
const slides = applications["google-workspace"].slides();
const before = await slides.presentations.get({ presentationId });
const source = before.slides?.find((slide) => slide.objectId === slideId);
const notesId = source?.slideProperties?.notesPage?.notesProperties?.speakerNotesObjectId;
if (!source || !notesId || !before.revisionId)
  throw new Error("Resolve the native slide, notes shape and revision.");
await slides.presentations.batchUpdate({
  presentationId,
  requestBody: {
    writeControl: { requiredRevisionId: before.revisionId },
    requests: [
      ...(source.slideProperties?.notesPage?.pageElements?.find(
        (element) => element.objectId === notesId,
      )?.shape?.text
        ? [{ deleteText: { objectId: notesId, textRange: { type: "ALL" as const } } }]
        : []),
      { insertText: { objectId: notesId, text: notes } },
    ],
  },
});
let status = "applied",
  detail = "Notes written; independent read pending";
try {
  const after = await slides.presentations.get({ presentationId });
  const page = after.slides?.find((slide) => slide.objectId === slideId);
  const shape = page?.slideProperties?.notesPage?.pageElements?.find(
    (element) => element.objectId === notesId,
  );
  const actual = shape?.shape?.text?.textElements
    ?.map((element) => element.textRun?.content ?? "")
    .join("");
  if (
    actual?.replace(/\n$/u, "") === notes &&
    JSON.stringify(page?.pageElements) === JSON.stringify(source.pageElements)
  ) {
    status = "verified";
    detail = "Read the speaker notes back and confirmed visible slide elements were preserved";
  } else detail = "Notes applied; native text or visible-slide preservation check needs attention";
} catch (error) {
  detail = `Notes written; read-back failed: ${String(error)}`;
}
return {
  documentEdit: {
    title: before.title ?? "Presentation",
    url: `https://docs.google.com/presentation/d/${presentationId}/edit#slide=id.${slideId}`,
    changes: [
      {
        location: `Slide ${slideId}, speaker notes`,
        description: detail,
        status,
      },
    ],
  },
};
```

If the note shape has no text yet, insert text directly without deleting an
empty/absent shape. Google can create the notes text shape using its returned
speakerNotesObjectId. Keep creation, text verification and rendered-layout
checks as separate facts.

Source: [native speaker notes](https://developers.google.com/workspace/slides/api/guides/notes).
