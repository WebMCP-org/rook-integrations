import { Client, type AuthenticationProvider } from "@microsoft/microsoft-graph-client";
export {
  Client,
  GraphError,
  ResponseType,
  LargeFileUploadTask,
  OneDriveLargeFileUploadTask,
  FileUpload,
} from "@microsoft/microsoft-graph-client";
export type { AuthenticationProvider } from "@microsoft/microsoft-graph-client";
export type * from "@microsoft/microsoft-graph-types";

export const MICROSOFT_GRAPH_APPLICATION_CARD = {
  id: "microsoft-graph",
  name: "Microsoft Graph",
  availability: "requires a host-supplied Microsoft Graph OAuth grant",
  summary: "OneDrive files and Outlook mail through Microsoft's official JavaScript SDK.",
} as const;

export const MICROSOFT_GRAPH_AUTH_REQUIREMENTS = {
  binding: MICROSOFT_GRAPH_APPLICATION_CARD.id,
  origins: ["https://graph.microsoft.com/"],
  scopes: ["Files.ReadWrite", "Mail.ReadWrite", "Mail.Send"],
  skillNames: ["microsoft-graph"],
} as const;

export type MicrosoftGraphNamespace = { client(): Client };

/** Install the official client. The host supplies and owns its authentication provider. */
export function installMicrosoftGraph(
  target: Record<string, unknown>,
  authProvider: AuthenticationProvider,
): MicrosoftGraphNamespace {
  const client = Client.initWithMiddleware({ authProvider });
  const namespace: MicrosoftGraphNamespace = { client: () => client };
  target[MICROSOFT_GRAPH_APPLICATION_CARD.id] = namespace;
  return namespace;
}

export const MICROSOFT_GRAPH_APPLICATION_FACE = {
  card: MICROSOFT_GRAPH_APPLICATION_CARD,
  members: [
    {
      callPrefix: 'applications["microsoft-graph"]',
      effect: "read",
      inputNames: [],
      output: "Client",
      path: "client",
      signature: "client(): import('@microsoft/microsoft-graph-client').Client",
      summary: "Return the official Microsoft Graph client using the host's grant.",
    },
  ],
  relatedSkills: MICROSOFT_GRAPH_AUTH_REQUIREMENTS.skillNames,
} as const;
