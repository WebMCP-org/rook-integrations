import type { CuratedApplicationFace } from "./application-face";
import { createMimeMessage, Mailbox, type MailboxAddrObject } from "mimetext/browser";
import {
  GOOGLE_WORKSPACE_APPLICATION_ID,
  type GmailEmailAddress,
  type GmailSendEmailInput,
  type GoogleWorkspaceNamespace,
} from "./google-workspace.generated";
import { GOOGLE_WORKSPACE_MEMBER_INDEX } from "./google-workspace.members.generated";
import { GOOGLE_WORKSPACE_REQUESTS } from "./google-workspace.requests.generated";

export type {
  ApplicationCard,
  ApplicationMember,
  CuratedApplicationFace,
} from "./application-face";
export type {
  DriveDownloadInput,
  DriveUploadInput,
  GmailEmailAddress,
  GmailSendEmailInput,
  GoogleCalendar,
  GoogleChat,
  GoogleDocs,
  GoogleDrive,
  GoogleGmail,
  GooglePeople,
  GoogleSheets,
  GoogleSlides,
  GoogleWorkspaceNamespace,
} from "./google-workspace.generated";
export { GOOGLE_WORKSPACE_APPLICATION_ID };
export {
  GOOGLE_WORKSPACE_MEMBER_INDEX,
  type GoogleWorkspaceMember,
} from "./google-workspace.members.generated";
export { GOOGLE_WORKSPACE_REQUESTS } from "./google-workspace.requests.generated";

const RESPONSE_ERROR_LIMIT_BYTES = 64 * 1024;

export const GOOGLE_WORKSPACE_APPLICATION_CARD = {
  availability: "ready; native files",
  id: GOOGLE_WORKSPACE_APPLICATION_ID,
  name: "Google Workspace",
  summary:
    "Drive, Gmail, Calendar, Docs, Sheets, Slides, Chat, and People with native Drive transfers.",
} as const;

export const GOOGLE_WORKSPACE_AUTH_REQUIREMENTS = {
  binding: GOOGLE_WORKSPACE_APPLICATION_CARD.id,
  origins: ["https://www.googleapis.com/"],
  scopes: [
    "https://mail.google.com/",
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/chat.messages",
    "https://www.googleapis.com/auth/chat.spaces",
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/contacts.readonly",
    "https://www.googleapis.com/auth/directory.readonly",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
  skillNames: [GOOGLE_WORKSPACE_APPLICATION_CARD.id],
} as const;

export const GOOGLE_WORKSPACE_APPLICATION_FACE = {
  card: GOOGLE_WORKSPACE_APPLICATION_CARD,
  members: GOOGLE_WORKSPACE_MEMBER_INDEX,
  relatedSkills: GOOGLE_WORKSPACE_AUTH_REQUIREMENTS.skillNames,
} as const satisfies CuratedApplicationFace;

export type GoogleWorkspaceAuthorization =
  | { ok: true; token: string }
  | { ok: false; error: { kind: "authentication_required" } };

export type GoogleWorkspaceTransport = {
  __invalidateToken(token: string): Promise<void>;
  __token(interactive: boolean): Promise<GoogleWorkspaceAuthorization>;
};

export type GoogleWorkspaceFiles = {
  writeStream(input: {
    expectedSha256?: string;
    path: string;
    stream: ReadableStream<Uint8Array>;
  }): Promise<{ path: string; sha256: string; size: number }>;
};

type GoogleParameterDescription = {
  readonly location: "path" | "query";
  readonly repeated: boolean;
  readonly required: boolean;
};

type GoogleMethodDescription = {
  readonly httpMethod: "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";
  readonly parameters: Readonly<Record<string, GoogleParameterDescription>>;
  readonly path: string;
  readonly request: boolean;
  readonly uploadPath?: string;
};

type GoogleResourceDescription = {
  readonly methods: Readonly<Record<string, GoogleMethodDescription>>;
  readonly resources: Readonly<Record<string, GoogleResourceDescription>>;
};

type GoogleServiceDescription = {
  readonly baseUrl: string;
  readonly resources: GoogleResourceDescription;
};

type GoogleWorkspaceServices = Readonly<Record<string, GoogleServiceDescription>>;

export function installGoogleWorkspace(
  target: Record<string, unknown>,
  transport: GoogleWorkspaceTransport,
  workspace: GoogleWorkspaceFiles,
  services: GoogleWorkspaceServices = GOOGLE_WORKSPACE_REQUESTS,
): GoogleWorkspaceNamespace {
  const NativeBlob = Blob;
  const NativeFile = File;
  const NativeHeaders = Headers;
  const NativeReadableStream = ReadableStream;
  const NativeTextDecoder = TextDecoder;
  const NativeTextEncoder = TextEncoder;
  const NativeURL = URL;
  const nativeBtoa = btoa;
  const nativeFetch = fetch;
  const nativeJsonParse = JSON.parse;
  const nativeJsonStringify = JSON.stringify;
  let token: Promise<string> | undefined;

  const accessToken = (interactive: boolean) => {
    if (!token) {
      token = transport
        .__token(interactive)
        .then((authorization) => {
          if (!authorization.ok) {
            throw new Error(
              `Google Workspace authentication is required; call await ctx.applications["${GOOGLE_WORKSPACE_APPLICATION_ID}"].authorize()`,
            );
          }
          return authorization.token;
        })
        .catch((error) => {
          token = undefined;
          throw error;
        });
    }
    return token;
  };

  const readBoundedError = async (response: Response) => {
    if (!response.body) return response.statusText;
    const decoder = new NativeTextDecoder();
    const reader = response.body.getReader();
    let text = "";
    let bytes = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const remaining = RESPONSE_ERROR_LIMIT_BYTES - bytes;
        if (remaining <= 0) break;
        const chunk = value.byteLength > remaining ? value.subarray(0, remaining) : value;
        bytes += chunk.byteLength;
        text += decoder.decode(chunk, { stream: bytes < RESPONSE_ERROR_LIMIT_BYTES });
        if (bytes === RESPONSE_ERROR_LIMIT_BYTES) break;
      }
      text += decoder.decode();
    } finally {
      await reader.cancel().catch(() => undefined);
    }
    return text || response.statusText || `Google Workspace request failed (${response.status})`;
  };

  const authenticatedFetch = async (url: string, init: RequestInit) => {
    const authorization = await accessToken(false);
    const headers = new NativeHeaders(init.headers);
    headers.set("authorization", `Bearer ${authorization}`);
    const response = await nativeFetch(url, { ...init, headers });
    if (response.status === 401) {
      token = undefined;
      await transport.__invalidateToken(authorization);
    }
    if (!response.ok) throw new Error(await readBoundedError(response));
    return response;
  };

  const requestUrl = (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown>,
    path = method.path,
  ) => {
    const used = new Set<string>();
    const renderedPath = path.replace(/\{(\+?)([^}]+)\}/gu, (_match, reserved, name) => {
      const value = input[name];
      if (value === undefined || value === null || value === "") {
        throw new Error(`Google Workspace request requires ${name}`);
      }
      used.add(name);
      const stringValue = String(value);
      return reserved
        ? stringValue.split("/").map(encodeURIComponent).join("/")
        : encodeURIComponent(stringValue);
    });
    const url = new NativeURL(renderedPath, service.baseUrl);
    for (const [name, parameter] of Object.entries(method.parameters)) {
      if (used.has(name)) continue;
      const value = input[name];
      if (parameter.required && (value === undefined || value === null || value === "")) {
        throw new Error(`Google Workspace request requires ${name}`);
      }
      if (value === undefined || value === null) continue;
      used.add(name);
      if (parameter.location !== "query") continue;
      if (parameter.repeated && Array.isArray(value)) {
        for (const item of value) url.searchParams.append(name, String(item));
      } else {
        url.searchParams.append(name, String(value));
      }
    }
    for (const name of Object.keys(input)) {
      if (name !== "requestBody" && !used.has(name)) {
        throw new Error(`Google Workspace request does not accept ${name}`);
      }
    }
    return url.href;
  };

  const send = async (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown>,
  ) => {
    const body =
      method.request && input.requestBody !== undefined
        ? nativeJsonStringify(input.requestBody)
        : undefined;
    return authenticatedFetch(requestUrl(service, method, input), {
      body,
      headers: body === undefined ? undefined : { "content-type": "application/json" },
      method: method.httpMethod,
    });
  };

  const invoke = async (
    service: GoogleServiceDescription,
    method: GoogleMethodDescription,
    input: Record<string, unknown> = {},
  ) => {
    const response = await send(service, method, input);
    if (response.status === 204 || response.headers.get("content-length") === "0") return undefined;
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("json")) return nativeJsonParse(await response.text());
    return response.blob();
  };

  const buildResource = (
    service: GoogleServiceDescription,
    resource: GoogleResourceDescription,
  ): Record<string, unknown> => {
    const client: Record<string, unknown> = {};
    for (const [name, method] of Object.entries(resource.methods)) {
      client[name] = (input?: Record<string, unknown>) => invoke(service, method, input);
    }
    for (const [name, child] of Object.entries(resource.resources)) {
      client[name] = buildResource(service, child);
    }
    return client;
  };

  const namespace: Record<string, unknown> = {
    authorize: async () => {
      await accessToken(true);
      return { authorized: true };
    },
  };
  for (const [name, service] of Object.entries(services)) {
    if (name !== "drive" && name !== "gmail") {
      namespace[name] = () => buildResource(service, service.resources);
    }
  }

  const gmailService = services.gmail;
  const gmail = buildResource(gmailService, gmailService.resources);
  const gmailUsers = gmail.users;
  const gmailMessages =
    gmailUsers && typeof gmailUsers === "object"
      ? (gmailUsers as Record<string, unknown>).messages
      : undefined;
  if (!gmailMessages || typeof gmailMessages !== "object") {
    throw new Error("Gmail messages resource is missing");
  }
  namespace.gmail = () => gmail;
  const sendGmailMessage = gmailService.resources.resources.users.resources.messages.methods.send;
  const textEncoder = new NativeTextEncoder();
  const mailbox = (address: GmailEmailAddress): MailboxAddrObject =>
    typeof address === "string"
      ? { addr: address }
      : { addr: address.email, ...(address.name ? { name: address.name } : {}) };
  const mailboxes = (addresses: GmailEmailAddress | GmailEmailAddress[]) =>
    (Array.isArray(addresses) ? addresses : [addresses]).map(mailbox);
  const base64 = (bytes: Uint8Array) => {
    const chunks: string[] = [];
    for (let offset = 0; offset < bytes.byteLength; offset += 0x8000) {
      chunks.push(String.fromCharCode(...bytes.subarray(offset, offset + 0x8000)));
    }
    return nativeBtoa(chunks.join(""));
  };
  const foldedBase64 = (bytes: Uint8Array) =>
    base64(bytes)
      .match(/.{1,76}/gu)
      ?.join("\r\n") ?? "";
  Object.assign(gmailMessages, {
    async sendEmail(input: GmailSendEmailInput) {
      const message = createMimeMessage();
      message.setSender(mailbox(input.from));
      message.setRecipients(mailboxes(input.to));
      if (input.cc) message.setCc(mailboxes(input.cc));
      if (input.bcc) message.setBcc(mailboxes(input.bcc));
      if (input.replyTo) message.setHeader("Reply-To", new Mailbox(mailbox(input.replyTo)));
      message.setSubject(input.subject);
      if (input.inReplyTo) message.setHeader("In-Reply-To", input.inReplyTo);
      if (input.references?.length) message.setHeader("References", input.references.join(" "));
      message.addMessage({
        contentType: "text/plain",
        data: foldedBase64(textEncoder.encode(input.text)),
        encoding: "base64",
      });
      for (const attachment of input.attachments ?? []) {
        if (!(attachment instanceof NativeFile)) {
          throw new Error("gmail.users.messages.sendEmail attachments require native Files");
        }
        message.addAttachment({
          contentType: attachment.type || "application/octet-stream",
          data: foldedBase64(new Uint8Array(await attachment.arrayBuffer())),
          filename: attachment.name,
        });
      }
      return invoke(gmailService, sendGmailMessage, {
        userId: input.userId ?? "me",
        requestBody: {
          raw: message.asEncoded(),
          ...(input.threadId ? { threadId: input.threadId } : {}),
        },
      });
    },
  });

  const driveService = services.drive;
  const drive = buildResource(driveService, driveService.resources);
  const driveFiles = drive.files;
  if (!driveFiles || typeof driveFiles !== "object") {
    throw new Error("Google Drive files resource is missing");
  }
  namespace.drive = () => drive;
  const createFile = driveService.resources.resources.files.methods.create;
  const getFile = driveService.resources.resources.files.methods.get;
  Object.assign(driveFiles, {
    async upload(input: Record<string, unknown>) {
      const { file, ...requestInput } = input;
      if (!(file instanceof NativeFile)) {
        throw new Error("drive.files.upload requires a native File");
      }
      const boundary = `rook-${crypto.randomUUID()}`;
      const requestBody = requestInput.requestBody ?? { name: file.name };
      requestInput.fields ??= "id,name,mimeType,size,sha256Checksum";
      const body = new NativeBlob([
        `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`,
        nativeJsonStringify(requestBody),
        `\r\n--${boundary}\r\nContent-Type: ${file.type || "application/octet-stream"}\r\n\r\n`,
        file,
        `\r\n--${boundary}--\r\n`,
      ]);
      const url = new NativeURL(
        requestUrl(driveService, createFile, requestInput, createFile.uploadPath),
      );
      url.searchParams.set("uploadType", "multipart");
      const response = await authenticatedFetch(url.href, {
        body,
        headers: { "content-type": `multipart/related; boundary=${boundary}` },
        method: createFile.httpMethod,
      });
      return nativeJsonParse(await response.text());
    },
    async downloadToWorkspace(input: Record<string, unknown>) {
      const { path, sha256, ...requestInput } = input;
      const response = await send(driveService, getFile, { ...requestInput, alt: "media" });
      if (!(response.body instanceof NativeReadableStream)) {
        throw new Error("Google Drive download returned an invalid response body");
      }
      return workspace.writeStream({
        path: String(path),
        stream: response.body,
        ...(typeof sha256 === "string" ? { expectedSha256: sha256 } : {}),
      });
    },
  });

  Object.assign(target, namespace);
  return target as GoogleWorkspaceNamespace;
}
