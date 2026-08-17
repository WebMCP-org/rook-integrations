import { afterEach, beforeEach, expect, test } from "vitest";
import {
  type GoogleWorkspaceFiles,
  type GoogleWorkspaceTransport,
  installGoogleWorkspace,
} from "@rook/google-workspace";
import {
  GOOGLE_WORKSPACE_TEST_BOUNDARY,
  GOOGLE_WORKSPACE_TEST_AUTHORIZATION,
  GOOGLE_WORKSPACE_TEST_FILE_BYTES,
  GOOGLE_WORKSPACE_TEST_FILE_ID,
  GOOGLE_WORKSPACE_TEST_FILE_SHA256,
  GOOGLE_WORKSPACE_TEST_TOKEN,
  googleWorkspaceBoundaryProofSchema,
  googleWorkspaceDriveUploadReceiptSchema,
} from "./google-workspace-fixture";

const browserFetch = fetch;

async function sha256(bytes: Uint8Array): Promise<string> {
  return [...new Uint8Array(await crypto.subtle.digest("SHA-256", Uint8Array.from(bytes)))]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

beforeEach(async () => {
  await fetch(`${GOOGLE_WORKSPACE_TEST_BOUNDARY}/reset`);
});

afterEach(() => {
  globalThis.fetch = browserFetch;
});

test("moves 2.1 MB through native File, Blob, and ReadableStream values", async () => {
  const downloaded = new Map<string, Uint8Array>();
  let sawNativeUploadBody = false;
  let sawNativeDownloadStream = false;
  const invalidated: string[] = [];
  globalThis.fetch = async (input, init) => {
    sawNativeUploadBody ||= init?.body instanceof Blob;
    const providerUrl = new URL(
      typeof input === "string" || input instanceof URL ? input : input.url,
      location.href,
    );
    if (providerUrl.origin !== "https://www.googleapis.com") {
      return browserFetch(input, init);
    }
    return browserFetch(
      `${GOOGLE_WORKSPACE_TEST_BOUNDARY}${providerUrl.pathname}${providerUrl.search}`,
      init,
    );
  };
  const google: GoogleWorkspaceTransport = {
    async __invalidateToken(token) {
      invalidated.push(token);
    },
    async __token() {
      return { ok: true, token: GOOGLE_WORKSPACE_TEST_TOKEN };
    },
  };
  const workspace: GoogleWorkspaceFiles = {
    async writeStream({ path, stream, expectedSha256 }) {
      sawNativeDownloadStream = stream instanceof ReadableStream;
      const reader = stream.getReader();
      const chunks: Uint8Array[] = [];
      let size = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        size += value.byteLength;
      }
      const bytes = new Uint8Array(size);
      let offset = 0;
      for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
      }
      const digest = await sha256(bytes);
      if (expectedSha256 && digest !== expectedSha256) {
        throw new Error(`SHA-256 mismatch: expected ${expectedSha256}, received ${digest}`);
      }
      downloaded.set(path, bytes);
      return { path, sha256: digest, size };
    },
  };

  const client = installGoogleWorkspace({}, google, workspace);
  expect(client).not.toHaveProperty("__token");
  expect(client).not.toHaveProperty("__invalidateToken");
  const drive = client.drive();
  const file = new File([GOOGLE_WORKSPACE_TEST_FILE_BYTES], "regression.bin", {
    type: "application/octet-stream",
  });
  const uploaded = googleWorkspaceDriveUploadReceiptSchema.parse(
    await drive.files.upload({ file }),
  );
  const receipt = await drive.files.downloadToWorkspace({
    fileId: uploaded.id,
    path: "/downloads/regression.bin",
    sha256: uploaded.sha256Checksum,
  });
  const removed = await drive.files.delete({ fileId: uploaded.id });
  await expect(drive.files.delete({ fileId: "unauthorized" })).rejects.toThrow("expired token");
  const proof = googleWorkspaceBoundaryProofSchema.parse(
    await fetch(`${GOOGLE_WORKSPACE_TEST_BOUNDARY}/proof`).then((response) => response.json()),
  );

  expect(file).toBeInstanceOf(File);
  expect(sawNativeUploadBody).toBe(true);
  expect(sawNativeDownloadStream).toBe(true);
  expect(uploaded).toEqual({
    id: GOOGLE_WORKSPACE_TEST_FILE_ID,
    mimeType: "application/octet-stream",
    name: "regression.bin",
    sha256Checksum: GOOGLE_WORKSPACE_TEST_FILE_SHA256,
    size: String(GOOGLE_WORKSPACE_TEST_FILE_BYTES.byteLength),
  });
  expect(receipt).toEqual({
    path: "/downloads/regression.bin",
    sha256: GOOGLE_WORKSPACE_TEST_FILE_SHA256,
    size: GOOGLE_WORKSPACE_TEST_FILE_BYTES.byteLength,
  });
  const downloadedBytes = downloaded.get(receipt.path);
  expect(downloadedBytes).toBeInstanceOf(Uint8Array);
  if (!downloadedBytes) throw new Error("Downloaded workspace bytes are missing");
  expect(await sha256(downloadedBytes)).toBe(GOOGLE_WORKSPACE_TEST_FILE_SHA256);
  expect(removed).toBeUndefined();
  expect(invalidated).toEqual([GOOGLE_WORKSPACE_TEST_TOKEN]);
  expect(proof).toEqual({
    calls: ["upload", "download", "delete", "unauthorized"],
    requests: [],
    upload: {
      authorization: GOOGLE_WORKSPACE_TEST_AUTHORIZATION,
      name: "regression.bin",
      sha256: GOOGLE_WORKSPACE_TEST_FILE_SHA256,
      size: GOOGLE_WORKSPACE_TEST_FILE_BYTES.byteLength,
    },
  });
});

test("builds every Workspace service request from Google's Discovery surface", async () => {
  const tokenRequests: boolean[] = [];
  globalThis.fetch = async (input, init) => {
    const providerUrl = new URL(
      typeof input === "string" || input instanceof URL ? input : input.url,
      location.href,
    );
    if (!providerUrl.hostname.endsWith("googleapis.com")) {
      return browserFetch(input, init);
    }
    return browserFetch(
      `${GOOGLE_WORKSPACE_TEST_BOUNDARY}/api${providerUrl.pathname}${providerUrl.search}`,
      init,
    );
  };
  const client = installGoogleWorkspace(
    {},
    {
      async __invalidateToken() {},
      async __token(interactive) {
        tokenRequests.push(interactive);
        return { ok: true, token: GOOGLE_WORKSPACE_TEST_TOKEN };
      },
    },
    {
      async writeStream() {
        throw new Error("ordinary API calls do not write workspace files");
      },
    },
  );

  await client.authorize();
  await Promise.all([
    client.drive().files.list({ pageSize: 5, q: "trashed = false" }),
    client.gmail().users.messages.list({ maxResults: 10, userId: "me" }),
    client.calendar().events.list({ calendarId: "person@example.com", maxResults: 3 }),
    client.docs().documents.batchUpdate({
      documentId: "doc-1",
      requestBody: { requests: [{ insertText: { endOfSegmentLocation: {}, text: "Hello" } }] },
    }),
    client.sheets().spreadsheets.values.get({ spreadsheetId: "sheet-1", range: "A1:B2" }),
    client.slides().presentations.get({ presentationId: "slides-1" }),
    client.chat().spaces.messages.create({
      parent: "spaces/AAA",
      requestBody: { text: "Status" },
    }),
    client.people().people.connections.list({
      personFields: "names,emailAddresses",
      resourceName: "people/me",
      sources: ["READ_SOURCE_TYPE_CONTACT", "READ_SOURCE_TYPE_PROFILE"],
    }),
  ]);
  const proof = googleWorkspaceBoundaryProofSchema.parse(
    await fetch(`${GOOGLE_WORKSPACE_TEST_BOUNDARY}/proof`).then((response) => response.json()),
  );

  expect(tokenRequests).toEqual([true]);
  expect(proof.requests).toHaveLength(8);
  expect(proof.requests).toEqual(
    expect.arrayContaining([
      { method: "GET", path: "/drive/v3/files", query: "pageSize=5&q=trashed+%3D+false" },
      { method: "GET", path: "/gmail/v1/users/me/messages", query: "maxResults=10" },
      {
        method: "GET",
        path: "/calendar/v3/calendars/person%40example.com/events",
        query: "maxResults=3",
      },
      {
        body: { requests: [{ insertText: { endOfSegmentLocation: {}, text: "Hello" } }] },
        method: "POST",
        path: "/v1/documents/doc-1:batchUpdate",
        query: "",
      },
      {
        method: "GET",
        path: "/v4/spreadsheets/sheet-1/values/A1%3AB2",
        query: "",
      },
      { method: "GET", path: "/v1/presentations/slides-1", query: "" },
      {
        body: { text: "Status" },
        method: "POST",
        path: "/v1/spaces/AAA/messages",
        query: "",
      },
      {
        method: "GET",
        path: "/v1/people/me/connections",
        query:
          "personFields=names%2CemailAddresses&sources=READ_SOURCE_TYPE_CONTACT&sources=READ_SOURCE_TYPE_PROFILE",
      },
    ]),
  );
});
