---
name: microsoft365
description: Edit Excel, Word and PowerPoint online through native Office operations exposed by Rook in a document-bound Office add-in. Use for cells, worksheet tabs, exact text, formatting, layout, tables and images while preserving the existing file. Open the installed document-bound add-in yourself when native tools are absent.
---

# Microsoft 365 native editing

Keep the existing workbook, document or presentation as the source. Rook binds
this provider's native operations to page tools in an initialized Office.js
add-in context. They use the current editor's Microsoft identity and document
grant; there is no second sign-in or Graph credential store.

## Connect the source editor

Read `/mcp/index.json` and the live page-server signatures. Office tools use
`rook_m365_` names and frame servers such as `tab:17:frame:8`. Match that tab to
the requested file, then call its document-info tool to obtain the bound native
file URL. Pass that returned URL as `documentUrl` for a native operation. A
changed identity rejects the operation before writing.

Connection setup is part of your editing task. When Office tools are absent,
use your browser controls to open the installed document-bound add-in in the
requested file:

1. Claim the existing editor tab and inspect its current ribbon and panes.
2. Open **Home > Add-ins > My Add-ins > Script Lab** when its ribbon is absent.
   Inspect the resulting UI; available ribbon labels vary by host and width.
3. Open **Script Lab > Code** when its Code task pane is closed. An installed
   add-in's ribbon alone is not an initialized document-bound pane. Opening the
   pane supplies the context; Rook registers the native operations automatically.
4. Refresh `/mcp/index.json` and inspect the live frame-server signatures.
   Confirm the document-info result belongs to the requested file before editing.
5. Keep the pane open through the native edit and independent read-back.

Perform this setup using browser controls, then continue with native operations.
Handle a missing tool listing as routine connection setup. If discovery remains empty, inspect the
pane for loading, sign-in, requirement-set or organization-policy errors and
report the actual problem. Resolve routine UI setup yourself; an installation
or new consent requirement follows the applicable authorization flow. Use the
source editor's exact controls when its native connection is unavailable for
the authorized edit. An ordinary web page loading Office.js does not create an
Office context.
Use the editor's exact controls for native features the connected host does
not support. The provider does not implement Graph, and Graph's workbook
platform excludes consumer OneDrive; the Office route handles that storage.

## Read, edit and verify

Read the actual native structure before choosing the smallest edit. Use
worksheet/slide/shape IDs discovered by the connected tools. Word text scopes
must resolve one exact occurrence; use smaller native ranges for mixed styles
or partial/multiple hyperlinks. Preserve evidence, citations, formulas,
validation, links and unrelated objects. Use native properties for styling,
formatting, layout and worksheet organization rather than reconstruct a file.

Excel operations read/write values or formulas, format existing ranges, manage
worksheet tabs and insert images. A style edit verifies authored formulas;
tab deletion verifies remaining IDs. Native media requires ExcelApi 1.9.

Word operations read body text/HTML, replace or format exact ranges, insert
text, format paragraphs, and insert tables or images. Link-preserving range
operations require WordApi 1.3. Replacement preserves one uniform font/link
scope; resolve finer ranges for mixed hyperlinks. Plain text alone cannot
prove comment, table or tracked-change preservation, so inspect the relevant
structures and visible result for those tasks.

PowerPoint operations read slide/shape IDs, edit/format text, adjust geometry,
add/remove shapes/slides, select a slide and insert images. Most text/style
operations need PowerPointApi 1.4; native selection needs 1.5. Text replacement
uses 1.10 to inspect hyperlink coverage and rejects linked shapes that need an
explicit preservation mapping. Compute substring lengths from UTF-16 source
text, check its freshness, and reread newly created objects in a new context.
Image coercion needs ImageCoercion 1.1 and confirmed slide selection.

## Excel readable table layout

Finish a table formatting task by sizing it for its final content and font.
Color and alignment alone do not establish readability. Read the table/header,
notes column, total row and any merged title separately. Keep formulas,
validation and authored values intact; change native formatting properties.

The range-format tool exposes `columnWidth`, `rowHeight`, `wrapText`,
`autofitColumns` and `autofitRows`. Fixed dimensions use **points**, not Excel's
character-count column-width dialog units. AutoFit requires ExcelApi 1.2.
Use separate calls for columns that need different widths. Choose a fixed
width or AutoFit on an axis; the tool rejects conflicting choices on that axis.

1. Apply the final font and formatting, then size columns from the headers and
   body cells. AutoFit short item/quantity/status columns when appropriate.
   Give prose/evidence columns enough width and wrap them at a useful reading
   width rather than stretching the table to one extremely wide line.
2. Run `autofitRows: true` **after** the column widths and wrapping are final.
   The native tool synchronizes font/wrap/fixed dimensions, then AutoFits
   columns, then rows. A later width/font change needs another row fit.
3. Handle merged title/header rows separately. Excel may not fit merged cells
   correctly; set a suitable explicit height and inspect the text. Do not
   unmerge an existing title merely to make AutoFit work. Preserve intentional
   line breaks and keep short headers/status values from breaking mid-word.
4. Read native dimensions and content back, then inspect the editor at a
   readable zoom. Check the entire heading, last line of every wrapped note,
   totals, Unicode and status cells. Widen or increase height where clipped.
   A mixed-size range can legitimately return null for its uniform rowHeight
   or columnWidth; inspect the relevant individual row/column when needed.

A read-back verifies requested native properties and host-computed dimensions,
not visual fit. Keep visual verification separate, and fix clipping before
reporting a formatting task complete. AutoFit can change a whole row/column's
size even when the fitting range covers only part of it; inspect nearby content.
Keep Script Lab open for native checks, then close its pane when editing is
finished so the user can see the workbook clearly.

Sources: [Microsoft RangeFormat and AutoFit](https://learn.microsoft.com/en-us/javascript/api/excel/excel.rangeformat?view=excel-js-preview),
[wrapped text and row-height limitations](https://support.microsoft.com/en-us/excel/wrap-text-in-a-cell-in-excel).

## PowerPoint layout and media quality

Read the actual slide size and existing shape IDs before positioning. Work in
points. Reuse the deck's theme, layouts and placeholders when suitable; for a
custom layout, map each background, heading, number and body to its own rectangle.
Use one margin/gutter system and explicit per-card positions. Align shared
edges and distribute repeated items. Reserve a footer band and enough room
for badges and two-digit labels. Keep foreground text inside its own card.

Text fit depends on margins, paragraph spacing and font metrics as well as
shape size. The Office.js TextFrame has margins and auto-size settings in its
supported API sets. This provider's current operations expose text/font and
geometry, not all TextFrame or crop controls. Inspect the live signatures;
use exact editor controls for missing options. Adjust the box or copy before
shrinking text. Microsoft recommends body text of at least 18pt, sans-serif
fonts, clear reading order and a meaningful title on each slide.

Use Picture Crop **Fit** to show the whole image or **Fill** to cover a frame
while preserving its subject and aspect ratio. A rounded shape behind a photo
is not an image mask. Inspect source assets for baked-in black padding; resizing
an object alone cannot remove it. Use crop-to-shape or exact crop controls for
rounded masks and focal-point adjustments when the host supports them.

Read native geometry back, then inspect every slide through the editor or a
contact sheet. Enlarge dense, grouped and image-heavy slides. Check overlap,
clipping, repeated origins, wrapped labels, image padding, badge collisions,
contrast and preserved source content. Fix the existing IDs and repeat the
checks. Keep native-bound checks separate from visual verification.

Sources: [Microsoft alignment/distribution](https://support.microsoft.com/en-us/office/graphics-visuals/align-or-arrange-objects),
[PowerPoint accessibility](https://support.microsoft.com/en-us/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities),
[image fit/fill](https://support.microsoft.com/en-us/office/graphics-visuals/crop-a-picture-to-fit-in-a-shape),
[Office.js TextFrame](https://learn.microsoft.com/en-us/javascript/api/powerpoint/powerpoint.textframe?view=powerpoint-js-preview).

A mutation returns `change` with the native location, checks and `verified`,
`applied` or `failed`. A failed later step retains confirmed earlier work as
applied; inspect current state before continuing. A false or failed read-back
leaves the change applied. Avoid repeating successful creation or mutations.
Native read-back, visible layout and cloud AutoSave are separate facts.

Map each returned change into Rook's documentEdit result, using the original
online editor tab's URL and title for the file link. The native Office URL is
the operation's identity, while the source editor tab is the user-facing link.
Locations without a documented deep link remain text. Complete authorized work
and report actual verification rather than inventing an approval step.

## Keep document progress visible

Follow Rook's document-work skill and its `document_work` reporting contract.
Report the native edit stages and verification checks from this provider.
