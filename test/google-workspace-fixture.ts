import { z } from "zod";

export const GOOGLE_WORKSPACE_TEST_BOUNDARY = "/__google_workspace__";
export const GOOGLE_WORKSPACE_TEST_AUTHORIZATION = "Bearer browser-google-token";
export const GOOGLE_WORKSPACE_TEST_FILE_ID = "disposable-drive-file";
export const GOOGLE_WORKSPACE_TEST_FILE_SIZE = 2_100_000;
export const GOOGLE_WORKSPACE_TEST_FILE_SHA256 =
  "b80e3019363e2b6eacb38b27b2d7d0055e7a092eb205620e1b8cb592a02fc878";

export const googleWorkspaceDriveUploadReceiptSchema = z
  .object({
    id: z.string().min(1),
    mimeType: z.string().min(1),
    name: z.string().min(1),
    sha256Checksum: z.string().regex(/^[0-9a-f]{64}$/u),
    size: z.string().regex(/^\d+$/u),
  })
  .strict();
export type GoogleWorkspaceDriveUploadReceipt = z.infer<
  typeof googleWorkspaceDriveUploadReceiptSchema
>;

export const googleWorkspaceBoundaryProofSchema = z
  .object({
    calls: z.array(z.string()),
    requests: z.array(
      z
        .object({
          body: z.unknown().optional(),
          method: z.string(),
          path: z.string(),
          query: z.string(),
        })
        .strict(),
    ),
    upload: z
      .object({
        authorization: z.string().optional(),
        name: z.string(),
        sha256: z.string(),
        size: z.number(),
      })
      .strict()
      .nullable(),
  })
  .strict();
export type GoogleWorkspaceBoundaryProof = z.infer<typeof googleWorkspaceBoundaryProofSchema>;
