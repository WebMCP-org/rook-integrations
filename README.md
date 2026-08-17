# Rook integrations

Browser-native typed provider integrations for
[Rook](https://github.com/WebMCP-org/rook). Each integration owns its client,
authoritative API inputs, model skill, and real-browser verification. Rook owns
authentication, sandbox lifecycle, workspace storage, and capability routing.

The first package is `@rook/google-workspace`. It covers Drive, Gmail,
Calendar, Docs, Sheets, Slides, Chat, and People from pinned Google Discovery
documents, plus native Drive upload and streamed workspace download helpers.

## Use from Rook

```ts
import { installGoogleWorkspace } from "@rook/google-workspace";
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
