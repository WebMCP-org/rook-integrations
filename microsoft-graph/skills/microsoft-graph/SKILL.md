---
name: microsoft-graph
description: Use Microsoft's official Graph JavaScript SDK for OneDrive files and Outlook mail with a host-provided OAuth grant. Use Office.js for native edits in an open Office document.
---

# Microsoft Graph

Use the official client at `applications["microsoft-graph"].client()` after the
host installs this package and supplies its Microsoft OAuth grant. The provider
package has no sign-in flow or token store. An Office browser session is not a
Graph OAuth token. A missing binding needs host integration; opening Script Lab
does not provide it.

The package reexports Microsoft's `Client`, `ResponseType`, upload helpers and
v1.0 model types. Use native SDK methods and Graph resource paths directly.
Client methods are typed. The SDK accepts string paths and returns `any` from
requests; a model annotation does not validate a path or response at runtime.
Read the relevant API reference and inspect returned IDs and properties.

## Read OneDrive metadata before bytes

Request the fields the task needs. Follow `@odata.nextLink` without rebuilding
its query. Use stable drive and item IDs for later operations. A OneDrive item
is cloud file metadata; Graph does not provide the whole Word or PowerPoint
editor model. Use the `microsoft365` skill and Office.js for native text, styles,
links, shapes and images in an open Office document.

```ts
import type { DriveItem } from "@rook/microsoft-graph";
// Host supplies the installed client; this is an SDK example.
declare const graph: import("@rook/microsoft-graph").Client;
const items: DriveItem[] = [];
let next: string | undefined = "/me/drive/root/children";
while (next) {
  const request = graph.api(next);
  const response: { value?: DriveItem[]; "@odata.nextLink"?: string } = await (
    items.length === 0
      ? request.select("id,name,size,webUrl,eTag,file,folder,parentReference").top(50)
      : request
  ).get();
  items.push(...(response.value ?? []));
  next = response["@odata.nextLink"];
}
```

Resolve identity before renaming, moving or deleting. Preserve the item and
content for a metadata task. Use its `eTag` with `If-Match` when a write must
reject concurrent changes. Read back independently. Do not repeat an insertion
whose write succeeded merely because its check failed.

```ts
import type { DriveItem } from "@rook/microsoft-graph";
declare const graph: import("@rook/microsoft-graph").Client;
declare const itemId: string;
const before: DriveItem = await graph
  .api(`/me/drive/items/${encodeURIComponent(itemId)}`)
  .select("id,name,eTag,webUrl")
  .get();
if (!before.id || !before.eTag) throw new Error("The source item has no ID or revision");
const update: Pick<DriveItem, "name"> = { name: "Planning report.docx" };
await graph
  .api(`/me/drive/items/${encodeURIComponent(before.id)}`)
  .header("If-Match", before.eTag)
  .patch(update);
const after: DriveItem = await graph
  .api(`/me/drive/items/${encodeURIComponent(before.id)}`)
  .select("id,name,eTag,webUrl")
  .get();
if (after.id !== before.id || after.name !== update.name)
  throw new Error("Rename read-back failed");
```

## Transfer bytes only when needed

Use metadata and Office.js when they cover the task. Do not download a large
Office file to change a heading in its editor. If bytes are required, stream a
download into the existing workspace writer rather than returning bytes to
the model. Use the SDK response type and the existing workspace stream sink.
Temporary download and upload URLs are preauthorized credentials: use them for
their stated operation and expiry, and keep them out of user-visible reports.

For a simple upload, pass a native `File` to the SDK. For a large file, use
`OneDriveLargeFileUploadTask` or `LargeFileUploadTask` with `FileUpload`. These
SDK helpers slice the file and own upload progress, retries and sessions. Pass
the actual file, item identity and intended conflict behavior. A completed
upload is a file replacement, not a native document edit. Reopen the uploaded
file and verify formatting, links, images and content when they matter.

```ts
import { OneDriveLargeFileUploadTask } from "@rook/microsoft-graph";
declare const graph: import("@rook/microsoft-graph").Client;
declare const file: File;
const task = await OneDriveLargeFileUploadTask.create(graph, file, {
  fileName: file.name,
  conflictBehavior: "fail",
});
const result = await task.upload();
```

## Outlook mail

Use native message IDs. Select needed fields and follow pagination. Draft a
message through `/me/messages`; sending uses `/me/messages/{id}/send` or
`/me/sendMail`. A returned draft is not a sent message. Keep the requested
recipients and attachments exact. Use the official `Message` and attachment
models for authored payloads. Check the result independently before reporting
delivery. Use the SDK upload-session helper for large attachments.

```ts
import type { Message } from "@rook/microsoft-graph";
declare const graph: import("@rook/microsoft-graph").Client;
const draft: Message = {
  subject: "Project update",
  body: { contentType: "text", content: "The report is ready for review." },
};
const created: Message = await graph.api("/me/messages").post(draft);
if (!created.id || created.isDraft !== true) throw new Error("Draft creation was not confirmed");
```

Graph permissions and API coverage vary by account and tenant. Use the host's
granted delegated permissions. Excel cloud workbook APIs do not replace Word
and PowerPoint editor APIs. Keep Office.js, cloud file operations and mail
operations distinct when choosing the source and checking the result.

Sources: [official JavaScript SDK](https://github.com/microsoftgraph/msgraph-sdk-javascript),
[Graph model types](https://github.com/microsoftgraph/msgraph-typescript-typings),
[authentication providers](https://learn.microsoft.com/en-us/graph/sdks/choose-authentication-providers),
[large file upload](https://learn.microsoft.com/en-us/graph/sdks/large-file-upload),
[Drive item update](https://learn.microsoft.com/en-us/graph/api/driveitem-update?view=graph-rest-1.0),
[message creation](https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0).
