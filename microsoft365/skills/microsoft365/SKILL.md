---
name: microsoft365
description: Edit Excel, Word and PowerPoint using Office.js in an initialized add-in frame through Rook's existing execute and Playwright page. Use for precise text, cells, styles, layout, tables and images. Open the installed Script Lab Code pane when no initialized Office frame is available.
---

# Microsoft 365 with Office.js

Write code against the Office.js SDK already loaded in the document's add-in
frame. Use `execute` with the editor's `tabId`, then use the supplied Playwright
`page` to find the frame and call `frame.evaluate`. There are no Office operation
tools or a separate Microsoft execution binding. Rook's execute preflight
includes the official Office.js type declarations.

## Find the initialized Office context

1. Use the requested document's editor tab. Inspect its URL and title.
2. Inspect `page.frames()` and their URLs. Probe likely Script Lab frames for
   `Office`, the expected application SDK, and `Office.context.document`.
3. If the frame is absent, open the installed Script Lab add-in and its Code
   pane using the editor UI. Opening its ribbon alone does not start the pane.
4. Wait for the Office context to initialize, then read the host and document
   URL inside the frame. Confirm that they match the requested file.
5. Keep the initialized pane open while code uses its SDK. Reacquire the frame
   after navigation or pane replacement.

Use [the checked examples](references/office-js-examples.md). Office globals
belong inside the `frame.evaluate` callback. Pass explicit serializable input
as its argument; the callback cannot capture Rook variables outside its realm.
Return plain checked data. Finish `context.sync()` before reading loaded proxy
properties. Use a fresh SDK context for independent read-back.

The Office session supplies the current identity and document access. This
package does not acquire credentials, register MCP tools, load another copy of
Office.js, or provide an HTTP transport. Loading Office.js on an ordinary page
does not initialize a document context. Graph is a separate cloud API.

## Read, edit and verify

Keep the existing file as the source. Read its native structure and resolve
actual worksheet, slide, shape or range IDs before editing. Use SDK operations
for the requested changes to text, cells, formatting, layout and objects.
Preserve evidence, links, formulas, validation, comments and unrelated content.
A formatting task changes formatting properties; it does not reconstruct the
file from extracted text.

Read the affected content and relevant surrounding structures before writing.
Check host requirement sets for the SDK members you use. After writing, read
back independently. If a write succeeds and read-back fails, report the known
write and failed check without repeating a successful creation or insertion.
Native read-back, visible layout and cloud save are separate checks.

Resolve exact Word text scopes. Mixed fonts or hyperlinks need smaller ranges
or an explicit preservation mapping. Text alone cannot establish preservation
of comments, fields, tracked changes or tables. Use the appropriate SDK objects
and inspect the editor when those features matter.

For PowerPoint, use actual shape and slide IDs and the presentation's dimensions.
Work in points. Synchronize creation before reading new objects. Media insertion
through the common selected-data API requires confirmation of the selected slide.
Native picture APIs and supported shape APIs can avoid selected-data coercion.
Use the SDK members and requirement sets supported by the current host.

## Formatting, layout and media

Read [the detailed editing guidance](references/editing-guidance.md) before a
layout or design task. It covers column and row sizing, merged headings, wrapped
notes, slide geometry, text fit, image crop, source assets and visual checks.
Use exact editor controls for a feature the host SDK does not support.

Return the document identity, affected locations, checked values and any
partial outcome. A completed script is not proof of a correctly rendered or
saved document.
