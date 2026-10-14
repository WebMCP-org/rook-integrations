# Office editing guidance

## Excel readable table layout

Finish a table formatting task by sizing it for its final content and font.
Color and alignment alone do not establish readability. Read the table/header,
notes column, total row and any merged title separately. Keep formulas,
validation and authored values intact; change native formatting properties.

Use native `RangeFormat.columnWidth`, `rowHeight`, `wrapText`,
`autofitColumns()` and `autofitRows()`. Fixed dimensions use **points**, not Excel's
character-count column-width dialog units. AutoFit requires ExcelApi 1.2.
Use separate calls for columns that need different widths. Choose a fixed
width or AutoFit on an axis; make the choice explicitly for that axis.

1. Apply the final font and formatting, then size columns from the headers and
   body cells. AutoFit short item/quantity/status columns when appropriate.
   Give prose/evidence columns enough width and wrap them at a useful reading
   width rather than stretching the table to one extremely wide line.
2. Call `range.format.autofitRows()` **after** the column widths and wrapping are final.
   Synchronize font/wrap/fixed dimensions, then AutoFit
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
supported API sets. Use the supported TextFrame and picture members directly. Inspect the SDK
reference and host requirement sets; use editor controls for missing options. Adjust the box or copy before
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
