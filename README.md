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

The independent `microsoft365/` package is `@rook/microsoft365`. It supplies
native Office.js operations for Excel, Word and PowerPoint in an initialized,
document-bound add-in. Rook registers those operations on its existing page
MCP transport. The current editor owns Microsoft authentication; opening an
installed Script Lab Code pane supplies the document context. This package
does not implement Graph or a separate login service.

Google native editing examples are combined in one provider reference;
Microsoft native editing and connection guidance is in one provider skill.
Their lifecycle matches their clients, rather than the host routing skill.

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

## Develop with Rook

Use Node.js 24.11 or newer. Rook pins both providers to the same immutable
GitHub commit. The Google package is at the repository root. The Microsoft
package is in `microsoft365`, selected with pnpm's `path:` parameter.
The packages contain their built files and skills. A Rook checkout can install
and build without a local checkout of this repository.

From the Rook checkout:

```bash
vp install --frozen-lockfile
vp run @rook/extension#build
```

Load `packages/extension/.output/chrome-mv3` through Chrome's **Load unpacked**
action. After a new build, reload Rook in `chrome://extensions` and refresh the
document tabs so their content scripts update.

To change a provider, build and check this repository, publish its branch, then
update both Rook dependency pins to that exact commit and regenerate its
lockfile. Do not commit local package links.

The extension bundles the providers; no separate provider server runs.
Microsoft native tools require an initialized document-bound Office add-in,
such as an installed Script Lab **Code** pane. The Microsoft skill directs
Rook to open the installed pane with browser controls when native tools are
absent. Manual pane opening can isolate connection tests. Rook's autonomous
pane-opening workflow still needs a complete live playthrough.

## Release order

Merge the provider PR first. A published GitHub release runs the provider
checks and publishes both packages: `@rook/google-workspace` and
`@rook/microsoft365`. Configure npm trusted publishing for each package with
this repository, the `release.yml` workflow and the `npm-publish` environment.
The new Microsoft package needs its own npm publisher configuration.

Before merging Rook, confirm that both package versions can be fetched from
npm. Update Rook's package versions and lockfile together, then check a fresh
install with the frozen lockfile and build the extension. Do not merge Rook
with a dependency version that has not been published.

An immutable GitHub commit pin can support PR review before an npm release.
The pinned commit must be available on GitHub and must include both packages'
built files. Do not use a moving branch name as the dependency pin.
