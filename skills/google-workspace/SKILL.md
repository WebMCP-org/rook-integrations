---
name: google-workspace
description: Use the built-in typed Google Workspace client for Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, and People. Use for semantic Workspace operations and native Drive file transfer; do not request a Google Workspace MCP connection.
---

# Google Workspace

Use `ctx.applications["google-workspace"]` as the only Google Workspace API surface. Its resources,
method names, parameters, and response shapes are generated from Google's
Discovery documents.

## Authenticate

Normal calls reuse Chrome Identity's short-lived cached grant. If a call says
authentication is required, request the grant once and retry explicitly:

```js
await ctx.applications["google-workspace"].authorize();
```

Do not ask for a Google MCP connection. A provider rejection is final for that
call; never repeat a mutation through browser automation automatically.

## Choose the service

The service factories are synchronous:

- `ctx.applications["google-workspace"].drive()`
- `ctx.applications["google-workspace"].gmail()`
- `ctx.applications["google-workspace"].calendar()`
- `ctx.applications["google-workspace"].docs()`
- `ctx.applications["google-workspace"].sheets()`
- `ctx.applications["google-workspace"].slides()`
- `ctx.applications["google-workspace"].chat()`
- `ctx.applications["google-workspace"].people()`

Methods use the official resource tree. Put JSON request bodies in
`requestBody`; path and query parameters stay beside it.

```js
const recent = await ctx.applications["google-workspace"].drive().files.list({
  fields: "nextPageToken,files(id,name,mimeType,modifiedTime,webViewLink)",
  orderBy: "modifiedTime desc",
  pageSize: 25,
  q: "trashed = false",
});

const events = await ctx.applications["google-workspace"].calendar().events.list({
  calendarId: "primary",
  maxResults: 50,
  singleEvents: true,
  timeMin: new Date().toISOString(),
});

await ctx.applications["google-workspace"].docs().documents.batchUpdate({
  documentId: "document-id",
  requestBody: {
    requests: [{ insertText: { endOfSegmentLocation: {}, text: "Status update\n" } }],
  },
});
```

Follow each API's `nextPageToken` until absent when the task requires complete
results. Use `fields`, page size, and narrow queries to keep intermediate
objects compact.

## Move Drive bytes natively

Discovery owns ordinary Drive methods. Two browser-only helpers handle the
gap its JSON schema cannot express: a native `File` upload and a streamed,
atomic workspace download.

```js
const file = await ctx.workspace.openFile({ path: "/reports/status.pdf" });
const uploaded = await ctx.applications["google-workspace"].drive().files.upload({
  file,
  fields: "id,name,mimeType,size,sha256Checksum,webViewLink",
  requestBody: { name: file.name, parents: ["folder-id"] },
});
if (!uploaded.id) throw new Error("Drive returned no file ID");

const local = await ctx.applications["google-workspace"].drive().files.downloadToWorkspace({
  fileId: uploaded.id,
  path: `/downloads/${uploaded.name ?? file.name}`,
  sha256: uploaded.sha256Checksum,
});
return { local, uploadedId: uploaded.id, webViewLink: uploaded.webViewLink };
```

Do not turn Drive files into base64, byte arrays, or MCP arguments. For a
Google-native document, use Drive's export method; it returns a native `Blob`
that can be streamed to `ctx.workspace.writeStream`.

## Send Gmail without constructing MIME

For ordinary email and replies, use the browser-native helper. Its `text` is
sent exactly as supplied; MIME line endings and base64 stay inside the provider
client. Attach workspace files as native `File` values.

```js
const attachment = await ctx.workspace.openFile({ path: "/reports/status.pdf" });
await ctx.applications["google-workspace"].gmail().users.messages.sendEmail({
  from: "employee@example.com",
  to: "manager@example.com",
  subject: "Status update",
  text: "First paragraph.\n\nSecond paragraph.",
  attachments: [attachment],
});
```

For a reply, also pass the original message's `threadId`, `Message-ID` as
`inReplyTo`, and complete `References` chain. Do not hand-build `requestBody.raw`
or retry a failed send through browser automation.

## Verify mutations

Read the affected resource back through a separate typed method. Preserve IDs,
URLs, revision identifiers, and compact status fields before a later step can
fail. Use browser automation only for visible semantics the selected Google
API genuinely lacks.
