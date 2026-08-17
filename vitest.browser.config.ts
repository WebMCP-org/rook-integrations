import { createHash } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import { playwright } from "@vitest/browser-playwright";
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";
import {
  GOOGLE_WORKSPACE_TEST_BOUNDARY,
  GOOGLE_WORKSPACE_TEST_AUTHORIZATION,
  type GoogleWorkspaceBoundaryProof,
  GOOGLE_WORKSPACE_TEST_FILE_ID,
  GOOGLE_WORKSPACE_TEST_FILE_SIZE,
  googleWorkspaceBoundaryProofSchema,
  googleWorkspaceDriveUploadReceiptSchema,
} from "./test/google-workspace-fixture.ts";

const fileBytes = Buffer.allocUnsafe(GOOGLE_WORKSPACE_TEST_FILE_SIZE);
for (let index = 0; index < fileBytes.length; index += 1) fileBytes[index] = index % 251;

const proof: GoogleWorkspaceBoundaryProof = { calls: [], requests: [], upload: null };

async function readBody(request: IncomingMessage): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of request) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

function json(response: ServerResponse, value: unknown): void {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(value));
}

function googleWorkspaceBoundary(): Plugin {
  return {
    name: "google-workspace-test-boundary",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? "/", "http://localhost");
        if (!url.pathname.startsWith(GOOGLE_WORKSPACE_TEST_BOUNDARY)) return next();
        const providerPath = url.pathname.slice(GOOGLE_WORKSPACE_TEST_BOUNDARY.length);

        if (providerPath === "/reset") {
          proof.calls = [];
          proof.requests = [];
          proof.upload = null;
          return json(response, { reset: true });
        }
        if (providerPath === "/proof") {
          return json(response, googleWorkspaceBoundaryProofSchema.parse(proof));
        }

        if (request.headers.authorization !== GOOGLE_WORKSPACE_TEST_AUTHORIZATION) {
          response.writeHead(401).end("unauthorized");
          return;
        }

        if (providerPath === "/drive/v3/files/unauthorized") {
          proof.calls.push("unauthorized");
          response.writeHead(401).end("expired token");
          return;
        }

        if (providerPath === "/upload/drive/v3/files" && request.method === "POST") {
          const body = await readBody(request);
          const contentType = request.headers["content-type"] ?? "";
          const boundary = /boundary=([^;]+)/u.exec(contentType)?.[1];
          if (!boundary) throw new Error("Drive upload carried no multipart boundary");
          const separator = Buffer.from("\r\n\r\n");
          const metadataEnd = body.indexOf(Buffer.from(`\r\n--${boundary}`));
          const metadataStart = body.indexOf(separator) + separator.length;
          const metadata: unknown = JSON.parse(
            body.subarray(metadataStart, metadataEnd).toString(),
          );
          if (
            typeof metadata !== "object" ||
            metadata === null ||
            !("name" in metadata) ||
            typeof metadata.name !== "string"
          ) {
            throw new Error("Drive upload carried invalid metadata");
          }
          const fileHeader = body.indexOf(Buffer.from("Content-Type: application/octet-stream"));
          const fileStart = body.indexOf(separator, fileHeader) + separator.length;
          const fileEnd = body.indexOf(Buffer.from(`\r\n--${boundary}--`), fileStart);
          const file = body.subarray(fileStart, fileEnd);
          proof.calls.push("upload");
          proof.upload = {
            ...(typeof request.headers.authorization === "string"
              ? { authorization: request.headers.authorization }
              : {}),
            name: metadata.name,
            sha256: createHash("sha256").update(file).digest("hex"),
            size: file.byteLength,
          };
          return json(
            response,
            googleWorkspaceDriveUploadReceiptSchema.parse({
              id: GOOGLE_WORKSPACE_TEST_FILE_ID,
              mimeType: "application/octet-stream",
              name: metadata.name,
              sha256Checksum: proof.upload.sha256,
              size: String(file.byteLength),
            }),
          );
        }

        if (
          providerPath === `/drive/v3/files/${GOOGLE_WORKSPACE_TEST_FILE_ID}` &&
          url.searchParams.has("alt")
        ) {
          proof.calls.push("download");
          response.writeHead(200, { "content-type": "application/octet-stream" });
          response.end(fileBytes);
          return;
        }

        if (
          providerPath === `/drive/v3/files/${GOOGLE_WORKSPACE_TEST_FILE_ID}` &&
          request.method === "DELETE"
        ) {
          proof.calls.push("delete");
          response.writeHead(204).end();
          return;
        }

        if (providerPath.startsWith("/api/")) {
          const body = request.headers["content-type"]?.includes("application/json")
            ? JSON.parse((await readBody(request)).toString())
            : undefined;
          proof.requests.push({
            ...(body === undefined ? {} : { body }),
            method: request.method ?? "GET",
            path: providerPath.slice(4),
            query: url.searchParams.toString(),
          });
          return json(response, { ok: true });
        }

        response.writeHead(404).end();
      });
    },
  };
}

export default defineConfig({
  plugins: [googleWorkspaceBoundary()],
  optimizeDeps: { include: ["zod"] },
  test: {
    include: ["test/**/*.browser.test.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
