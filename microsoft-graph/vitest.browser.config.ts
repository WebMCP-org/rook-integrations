import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import type { Plugin } from "vite";

const proof: { method: string; path: string; query: string; body: string; auth: string }[] = [];
const boundary: Plugin = {
  name: "external-graph-http-boundary",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const url = new URL(req.url ?? "/", "http://localhost");
      if (!url.pathname.startsWith("/__graph/")) return next();
      const path = url.pathname.slice("/__graph".length);
      const json = (value: object) => {
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(value));
      };
      if (path === "/proof") return json({ requests: proof });
      if (path === "/reset") {
        proof.length = 0;
        return json({ ok: true });
      }
      const chunks: Buffer[] = [];
      for await (const chunk of req) chunks.push(Buffer.from(chunk));
      proof.push({
        method: req.method ?? "GET",
        path,
        query: url.search,
        body: Buffer.concat(chunks).toString(),
        auth: req.headers.authorization ?? "",
      });
      if (
        req.headers.authorization !== "Bearer graph-boundary-token" ||
        path.endsWith("/unauthorized")
      ) {
        res.statusCode = 401;
        return json({ error: { code: "InvalidAuthenticationToken", message: "Grant required" } });
      }
      if (path === "/v1.0/me/drive/root/children")
        return json({ value: [{ id: "file-1", name: "Evidence.docx", eTag: "revision-1" }] });
      if (path === "/v1.0/me/drive/items/file-1" && req.method === "PATCH")
        return json({ id: "file-1", name: "Report.docx", eTag: "revision-2" });
      if (path.endsWith("/content") && req.method === "PUT")
        return json({ id: "upload-1", name: "sentinel.bin", size: Buffer.concat(chunks).length });
      if (path === "/v1.0/me/messages" && req.method === "POST")
        return json({ id: "draft-1", isDraft: true });
      res.statusCode = 404;
      return json({ error: { code: "itemNotFound", message: "No boundary scenario" } });
    });
  },
};
export default defineConfig({
  plugins: [boundary],
  test: {
    include: ["test/*.browser.test.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
