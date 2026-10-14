import { afterEach, beforeEach, expect, test } from "vitest";
import {
  Client,
  GraphError,
  installMicrosoftGraph,
  type DriveItem,
  type Message,
} from "@rook/microsoft-graph";
import { z } from "zod";

const nativeFetch = fetch;
const proofSchema = z.object({
  requests: z.array(
    z.object({
      method: z.string(),
      path: z.string(),
      query: z.string(),
      body: z.string(),
      auth: z.string(),
    }),
  ),
});
beforeEach(async () => {
  await nativeFetch("/__graph/reset");
  // Rewrite only the external provider HTTP boundary. The official SDK,
  // authentication middleware, installer and native browser values are real.
  globalThis.fetch = (input, init) => {
    const url = new URL(
      typeof input === "string" || input instanceof URL ? input : input.url,
      location.href,
    );
    return url.origin === "https://graph.microsoft.com"
      ? nativeFetch(`/__graph${url.pathname}${url.search}`, init)
      : nativeFetch(input, init);
  };
});
afterEach(() => {
  globalThis.fetch = nativeFetch;
});

test("uses the official SDK for OneDrive metadata, native file bytes and Outlook drafts", async () => {
  let grants = 0;
  const target: Record<string, unknown> = {};
  const namespace = installMicrosoftGraph(target, {
    async getAccessToken() {
      grants++;
      return "graph-boundary-token";
    },
  });
  const graph = namespace.client();
  expect(graph).toBeInstanceOf(Client);
  expect(target["microsoft-graph"]).toBe(namespace);
  const listed: { value: DriveItem[] } = await graph
    .api("/me/drive/root/children")
    .select("id,name,eTag")
    .top(25)
    .get();
  expect(listed.value[0]?.name).toBe("Evidence.docx");
  const update: Pick<DriveItem, "name"> = { name: "Report.docx" };
  const renamed: DriveItem = await graph
    .api("/me/drive/items/file-1")
    .header("If-Match", "revision-1")
    .patch(update);
  expect(renamed).toMatchObject({ id: "file-1", name: "Report.docx", eTag: "revision-2" });
  const file = new File(["Evidence Alpha: café Δ"], "sentinel.bin", {
    type: "application/octet-stream",
  });
  const uploaded: DriveItem = await graph
    .api("/me/drive/root:/sentinel.bin:/content")
    .header("Content-Type", file.type)
    .put(file);
  expect(uploaded.size).toBe(file.size);
  const draft: Message = {
    subject: "Boundary proof",
    body: { contentType: "text", content: "Evidence Alpha" },
  };
  const created: Message = await graph.api("/me/messages").post(draft);
  expect(created).toMatchObject({ id: "draft-1", isDraft: true });
  const proof = proofSchema.parse(await (await nativeFetch("/__graph/proof")).json());
  expect(proof.requests).toHaveLength(4);
  expect(proof.requests.map((req) => req.method)).toEqual(["GET", "PATCH", "PUT", "POST"]);
  expect(proof.requests[0]?.query).toContain("select=id,name,eTag");
  expect(proof.requests[2]?.body).toBe(await file.text());
  expect(JSON.parse(proof.requests[3]!.body)).toEqual(draft);
  expect(proof.requests.every((req) => req.auth === "Bearer graph-boundary-token")).toBe(true);
  expect(grants).toBe(4);
});

test("reports a native Graph authentication error without adding a token owner", async () => {
  const graph = installMicrosoftGraph(
    {},
    {
      async getAccessToken() {
        return "graph-boundary-token";
      },
    },
  ).client();
  await expect(graph.api("/me/drive/items/unauthorized").get()).rejects.toBeInstanceOf(GraphError);
});
