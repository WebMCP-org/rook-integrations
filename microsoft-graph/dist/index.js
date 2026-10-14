import { Client, Client as Client$1, FileUpload, GraphError, LargeFileUploadTask, OneDriveLargeFileUploadTask, ResponseType } from "@microsoft/microsoft-graph-client";
//#region src/index.ts
const MICROSOFT_GRAPH_APPLICATION_CARD = {
	id: "microsoft-graph",
	name: "Microsoft Graph",
	availability: "requires a host-supplied Microsoft Graph OAuth grant",
	summary: "OneDrive files and Outlook mail through Microsoft's official JavaScript SDK."
};
const MICROSOFT_GRAPH_AUTH_REQUIREMENTS = {
	binding: MICROSOFT_GRAPH_APPLICATION_CARD.id,
	origins: ["https://graph.microsoft.com/"],
	scopes: [
		"Files.ReadWrite",
		"Mail.ReadWrite",
		"Mail.Send"
	],
	skillNames: ["microsoft-graph"]
};
/** Install the official client. The host supplies and owns its authentication provider. */
function installMicrosoftGraph(target, authProvider) {
	const client = Client$1.initWithMiddleware({ authProvider });
	const namespace = { client: () => client };
	target[MICROSOFT_GRAPH_APPLICATION_CARD.id] = namespace;
	return namespace;
}
const MICROSOFT_GRAPH_APPLICATION_FACE = {
	card: MICROSOFT_GRAPH_APPLICATION_CARD,
	members: [{
		callPrefix: "applications[\"microsoft-graph\"]",
		effect: "read",
		inputNames: [],
		output: "Client",
		path: "client",
		signature: "client(): import('@microsoft/microsoft-graph-client').Client",
		summary: "Return the official Microsoft Graph client using the host's grant."
	}],
	relatedSkills: MICROSOFT_GRAPH_AUTH_REQUIREMENTS.skillNames
};
//#endregion
export { Client, FileUpload, GraphError, LargeFileUploadTask, MICROSOFT_GRAPH_APPLICATION_CARD, MICROSOFT_GRAPH_APPLICATION_FACE, MICROSOFT_GRAPH_AUTH_REQUIREMENTS, OneDriveLargeFileUploadTask, ResponseType, installMicrosoftGraph };
