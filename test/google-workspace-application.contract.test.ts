import { expect, expectTypeOf, test } from "vitest";
import {
  GOOGLE_WORKSPACE_APPLICATION_FACE,
  GOOGLE_WORKSPACE_APPLICATION_CARD,
  GOOGLE_WORKSPACE_APPLICATION_ID,
  GOOGLE_WORKSPACE_AUTH_REQUIREMENTS,
  GOOGLE_WORKSPACE_MEMBER_INDEX,
  GOOGLE_WORKSPACE_REQUESTS,
  type GoogleWorkspaceNamespace,
} from "@rook/google-workspace";

test("exports one ready Google application whose requests and members agree", () => {
  expect(GOOGLE_WORKSPACE_APPLICATION_CARD).toEqual({
    availability: "ready; native files",
    id: "google-workspace",
    name: "Google Workspace",
    summary:
      "Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, and People with native Drive transfers.",
  });
  expect(GOOGLE_WORKSPACE_APPLICATION_ID).toBe(GOOGLE_WORKSPACE_APPLICATION_CARD.id);
  expectTypeOf<
    ApplicationsNamespace[typeof GOOGLE_WORKSPACE_APPLICATION_ID]
  >().toEqualTypeOf<GoogleWorkspaceNamespace>();
  expect(GOOGLE_WORKSPACE_AUTH_REQUIREMENTS.binding).toBe("google-workspace");
  expect(GOOGLE_WORKSPACE_AUTH_REQUIREMENTS.origins).toEqual(["https://www.googleapis.com/"]);
  expect(GOOGLE_WORKSPACE_AUTH_REQUIREMENTS.scopes).toContain(
    "https://www.googleapis.com/auth/drive",
  );
  expect(GOOGLE_WORKSPACE_APPLICATION_FACE).toEqual({
    card: GOOGLE_WORKSPACE_APPLICATION_CARD,
    members: GOOGLE_WORKSPACE_MEMBER_INDEX,
    relatedSkills: GOOGLE_WORKSPACE_AUTH_REQUIREMENTS.skillNames,
  });
  expect(GOOGLE_WORKSPACE_APPLICATION_FACE.members).toContainEqual(
    expect.objectContaining({
      callPrefix: 'ctx.applications["google-workspace"].drive().files.list',
      output: "unknown",
      path: "drive.files.list",
    }),
  );

  expect(Object.keys(GOOGLE_WORKSPACE_REQUESTS)).toEqual([
    "drive",
    "gmail",
    "calendar",
    "docs",
    "sheets",
    "slides",
    "chat",
    "people",
  ]);
  expect(GOOGLE_WORKSPACE_MEMBER_INDEX).toContainEqual(
    expect.objectContaining({
      effect: "read",
      path: "drive.files.list",
      signature: expect.stringContaining("files.list"),
    }),
  );
  expect(GOOGLE_WORKSPACE_MEMBER_INDEX).toContainEqual(
    expect.objectContaining({ effect: "write", path: "drive.files.upload" }),
  );
  expect(GOOGLE_WORKSPACE_REQUESTS.drive.resources.resources.files.methods.list).toBeDefined();
});
