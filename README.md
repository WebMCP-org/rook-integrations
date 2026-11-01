# Rook integrations

Browser-native typed provider integrations for
[Rook](https://github.com/WebMCP-org/rook). Each integration owns its client,
authoritative API inputs, model skill, and real-browser verification. Rook owns
authentication, sandbox lifecycle, workspace storage, and capability routing.

The first package is `@rook/google-workspace`. It covers Drive, Gmail,
Calendar, Docs, Sheets, Slides, Chat, and People from pinned Google Discovery
documents, plus native Drive upload and streamed workspace download helpers.
Normal Gmail sends use a structured plain-text helper with native attachments,
so models never construct raw MIME or base64.

## Use from Rook

```ts
import {
  GOOGLE_WORKSPACE_APPLICATION_CARD,
  GOOGLE_WORKSPACE_MEMBER_INDEX,
  installGoogleWorkspace,
} from "@rook/google-workspace";
```

Rook pins this repository by commit, so a provider change and its browser proof
land independently from the extension. The package is also ready for npm once
the `@rook` trusted publisher is configured.

## Extend Rook internally

Use this repository as the concrete package boundary: keep the provider client,
skill, official schema inputs, and browser test together. The host-facing
installer receives only the capabilities it needs. Do not create another auth
owner, sandbox, workspace, RPC protocol, or provider-neutral request wrapper.

## Verify

```bash
vp install
vp run check
```

The test runs the production client in real headless Chromium against a local
HTTP boundary and proves native `File`, `Blob`, `ReadableStream`, 2.1 MB Drive
transfer, hashing, cancellation, and atomic workspace publication behavior.

## Develop with Rook locally

Build after each package change, then temporarily link this checkout into the
sibling Rook extension package:

```bash
vp run build
vp exec -- pnpm --dir ../think-browser-host/packages/extension link ../../../rook-integrations
```

Remove the local link when verification is complete; `pnpm unlink` reinstalls
the immutable commit already saved by Rook:

```bash
vp exec -- pnpm --dir ../think-browser-host/packages/extension unlink @rook/google-workspace
```

Never land the link as integration state. The final Rook change pins the
reviewed `rook-integrations` commit in its package manifest and lockfile.

## Microsoft 365

`@rook/microsoft365` ships an Office.js skill and checked examples. It has no
runtime client or operation tools. Rook uses its existing tab-bound `execute`
context to find an initialized Script Lab frame and call the SDK through
Playwright `frame.evaluate`. The document's Office session supplies access.

The skill covers precise Excel, Word and PowerPoint edits, source preservation,
independent read-back, readable tables, slide layout and images. Office.js types
help check code; they do not guarantee that a host supports every API. Check
requirement sets and inspect the rendered result.

Publish this package with a `microsoft365-v0.1.0` release tag. Google Workspace
keeps its own `v<version>` release tag. Merge this provider PR first. Then update
Rook to the reviewed commit or published package before merging its Office PR.

To test both repositories before publication, install dependencies in each
checkout, then run this command from Rook:

```bash
vp exec -- pnpm --dir packages/extension link ../../../rook-integrations/microsoft365
```

Build Rook and load its unpacked extension. Open an Office document and Script
Lab's Code pane. Ask Rook to edit a small range or text passage. Check both the
edit and the content that must be preserved. The final Rook manifest and lockfile
must use an immutable dependency, with the temporary link removed:

```bash
vp exec -- pnpm --dir packages/extension unlink @rook/microsoft365
```

## Microsoft Graph

`@rook/microsoft-graph` exposes Microsoft's official JavaScript `Client`, upload
helpers and v1.0 model types. Its installer receives the SDK's standard
`AuthenticationProvider` from the host and returns the client at
`applications["microsoft-graph"].client()`. It owns no login flow, token store or
HTTP transport. The skill covers OneDrive metadata and bytes and Outlook mail.

This package is a provider foundation. Rook still needs a Microsoft OAuth grant,
application binding and preflight declarations before it can use the package.
A signed-in Office tab does not supply a Graph OAuth token. Office.js remains
the path for edits inside an open Excel, Word or PowerPoint document.

The SDK types check client methods. Microsoft's model types check authored
payloads. The SDK's string paths and `get()` response do not provide endpoint
or runtime response validation; inspect responses before treating them as
verified document state. Publish with a `microsoft-graph-v0.1.0` release tag.
