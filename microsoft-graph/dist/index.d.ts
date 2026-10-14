import { AuthenticationProvider, AuthenticationProvider as AuthenticationProvider$1, Client, Client as Client$1, FileUpload, GraphError, LargeFileUploadTask, OneDriveLargeFileUploadTask, ResponseType } from "@microsoft/microsoft-graph-client";
export type * from "@microsoft/microsoft-graph-types";
//#region src/index.d.ts
export declare const MICROSOFT_GRAPH_APPLICATION_CARD: {
  readonly id: "microsoft-graph";
  readonly name: "Microsoft Graph";
  readonly availability: "requires a host-supplied Microsoft Graph OAuth grant";
  readonly summary: "OneDrive files and Outlook mail through Microsoft's official JavaScript SDK.";
};
export declare const MICROSOFT_GRAPH_AUTH_REQUIREMENTS: {
  readonly binding: "microsoft-graph";
  readonly origins: readonly ["https://graph.microsoft.com/"];
  readonly scopes: readonly ["Files.ReadWrite", "Mail.ReadWrite", "Mail.Send"];
  readonly skillNames: readonly ["microsoft-graph"];
};
export type MicrosoftGraphNamespace = {
  client(): Client$1;
};
/** Install the official client. The host supplies and owns its authentication provider. */
export declare function installMicrosoftGraph(target: Record<string, unknown>, authProvider: AuthenticationProvider$1): MicrosoftGraphNamespace;
export declare const MICROSOFT_GRAPH_APPLICATION_FACE: {
  readonly card: {
    readonly id: "microsoft-graph";
    readonly name: "Microsoft Graph";
    readonly availability: "requires a host-supplied Microsoft Graph OAuth grant";
    readonly summary: "OneDrive files and Outlook mail through Microsoft's official JavaScript SDK.";
  };
  readonly members: readonly [{
    readonly callPrefix: "applications[\"microsoft-graph\"]";
    readonly effect: "read";
    readonly inputNames: readonly [];
    readonly output: "Client";
    readonly path: "client";
    readonly signature: "client(): import('@microsoft/microsoft-graph-client').Client";
    readonly summary: "Return the official Microsoft Graph client using the host's grant.";
  }];
  readonly relatedSkills: readonly ["microsoft-graph"];
};
//#endregion
export { type AuthenticationProvider, Client, FileUpload, GraphError, LargeFileUploadTask, OneDriveLargeFileUploadTask, ResponseType };