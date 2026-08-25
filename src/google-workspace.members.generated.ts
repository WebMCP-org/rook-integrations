// Generated from the checked-in Google Discovery documents. Do not edit.
// Regenerate with: vp run generate

import type { ApplicationMember } from "./application-face";

export type GoogleWorkspaceMember = ApplicationMember;

export const GOOGLE_WORKSPACE_MEMBER_INDEX = [
  {
    "effect": "authorization",
    "inputNames": [],
    "path": "authorize",
    "signature": "ctx.applications[\"google-workspace\"].authorize(): Promise<{ authorized: true }>",
    "summary": "Request the employee's Google Workspace grant from Chrome Identity.",
    "callPrefix": "ctx.applications[\"google-workspace\"].authorize",
    "output": "{ authorized: true }"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "ruleId",
      "userIp"
    ],
    "path": "calendar.acl.delete",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.delete(input: object): Promise<unknown>",
    "summary": "Deletes an access control rule.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "ruleId",
      "userIp"
    ],
    "path": "calendar.acl.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.get(input: object): Promise<unknown>",
    "summary": "Returns an access control rule.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.acl.insert",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.insert(input: object): Promise<unknown>",
    "summary": "Creates an access control rule.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.insert",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "showDeleted",
      "syncToken",
      "userIp"
    ],
    "path": "calendar.acl.list",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.list(input: object): Promise<unknown>",
    "summary": "Returns the rules in the access control list for the calendar.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "ruleId",
      "sendNotifications",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.acl.patch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.patch(input: object): Promise<unknown>",
    "summary": "Updates an access control rule. This method supports patch semantics.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "ruleId",
      "sendNotifications",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.acl.update",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.update(input: object): Promise<unknown>",
    "summary": "Updates an access control rule.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "showDeleted",
      "syncToken",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.acl.watch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().acl.watch(input: object): Promise<unknown>",
    "summary": "Watch for changes to ACL resources.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().acl.watch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.calendarList.delete",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.delete(input: object): Promise<unknown>",
    "summary": "Removes a calendar from the user's calendar list.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.calendarList.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.get(input: object): Promise<unknown>",
    "summary": "Returns a calendar from the user's calendar list.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "colorRgbFormat",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendarList.insert",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.insert(input?: object): Promise<unknown>",
    "summary": "Inserts an existing calendar into the user's calendar list.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.insert",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "fields",
      "maxResults",
      "minAccessRole",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "showDeleted",
      "showHidden",
      "showOwnOrganizationOnly",
      "syncToken",
      "userIp"
    ],
    "path": "calendar.calendarList.list",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.list(input?: object): Promise<unknown>",
    "summary": "Returns the calendars on the user's calendar list.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "colorRgbFormat",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendarList.patch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.patch(input: object): Promise<unknown>",
    "summary": "Updates an existing calendar on the user's calendar list. This method supports patch semantics.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "colorRgbFormat",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendarList.update",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.update(input: object): Promise<unknown>",
    "summary": "Updates an existing calendar on the user's calendar list.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "fields",
      "maxResults",
      "minAccessRole",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "showDeleted",
      "showHidden",
      "showOwnOrganizationOnly",
      "syncToken",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendarList.watch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendarList.watch(input?: object): Promise<unknown>",
    "summary": "Watch for changes to CalendarList resources.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendarList.watch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.calendars.clear",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.clear(input: object): Promise<unknown>",
    "summary": "Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.clear",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.calendars.delete",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.delete(input: object): Promise<unknown>",
    "summary": "Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.calendars.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.get(input: object): Promise<unknown>",
    "summary": "Returns metadata for a calendar.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendars.insert",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.insert(input?: object): Promise<unknown>",
    "summary": "Creates a secondary calendar. The authenticated user for the request is made the data owner of the new calendar. Note: We recommend to authenticate as the intended data owner of the calendar. You can use domain-wide delegation of authority to allow applications to act on behalf of a specific user. Don't use a service account for authentication. If you use a service account for authentication, the service account is the data owner, which can lead to unexpected behavior. For example, if a service account is the data owner, data ownership cannot be transferred.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.insert",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendars.patch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.patch(input: object): Promise<unknown>",
    "summary": "Updates metadata for a calendar. This method supports patch semantics.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "newDataOwner",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess",
      "userIp"
    ],
    "path": "calendar.calendars.transferOwnership",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.transferOwnership(input: object): Promise<unknown>",
    "summary": "Transfers a secondary calendar between users within a Google Workspace organization. Requires user authentication with Manage Calendars administrator privilege, and one of the following authorization scopes: - https://www.googleapis.com/auth/calendar - https://www.googleapis.com/auth/calendar.calendars In the request, set useAdminAccess to true. The secondary calendar must be active to be transferred. Transferring disabled or deleted calendars isn't supported.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.transferOwnership",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.calendars.update",
    "signature": "ctx.applications[\"google-workspace\"].calendar().calendars.update(input: object): Promise<unknown>",
    "summary": "Updates metadata for a calendar.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().calendars.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.channels.stop",
    "signature": "ctx.applications[\"google-workspace\"].calendar().channels.stop(input?: object): Promise<unknown>",
    "summary": "Stop watching resources through this channel",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().channels.stop",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp"
    ],
    "path": "calendar.colors.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().colors.get(input?: object): Promise<unknown>",
    "summary": "Returns the color definitions for calendars and events.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().colors.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "eventId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "userIp"
    ],
    "path": "calendar.events.delete",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.delete(input: object): Promise<unknown>",
    "summary": "Deletes an event.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "eventId",
      "fields",
      "maxAttendees",
      "prettyPrint",
      "quotaUser",
      "timeZone",
      "userIp"
    ],
    "path": "calendar.events.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.get(input: object): Promise<unknown>",
    "summary": "Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "conferenceDataVersion",
      "eventLabelVersion",
      "fields",
      "prettyPrint",
      "quotaUser",
      "supportsAttachments",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.events.import",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.import(input: object): Promise<unknown>",
    "summary": "Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported. Deprecated behavior: If a non-default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.import",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "conferenceDataVersion",
      "eventLabelVersion",
      "fields",
      "maxAttendees",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "supportsAttachments",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.events.insert",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.insert(input: object): Promise<unknown>",
    "summary": "Creates an event.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.insert",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "eventId",
      "fields",
      "maxAttendees",
      "maxResults",
      "originalStart",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "showDeleted",
      "timeMax",
      "timeMin",
      "timeZone",
      "userIp"
    ],
    "path": "calendar.events.instances",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.instances(input: object): Promise<unknown>",
    "summary": "Returns instances of the specified recurring event.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.instances",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "eventTypes",
      "fields",
      "iCalUID",
      "maxAttendees",
      "maxResults",
      "orderBy",
      "pageToken",
      "prettyPrint",
      "privateExtendedProperty",
      "q",
      "quotaUser",
      "sharedExtendedProperty",
      "showDeleted",
      "showHiddenInvitations",
      "singleEvents",
      "syncToken",
      "timeMax",
      "timeMin",
      "timeZone",
      "updatedMin",
      "userIp"
    ],
    "path": "calendar.events.list",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.list(input: object): Promise<unknown>",
    "summary": "Returns events on the specified calendar.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "destination",
      "eventId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "userIp"
    ],
    "path": "calendar.events.move",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.move(input: object): Promise<unknown>",
    "summary": "Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday, focusTime, fromGmail, outOfOffice and workingLocation events cannot be moved.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.move",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "conferenceDataVersion",
      "eventId",
      "eventLabelVersion",
      "fields",
      "maxAttendees",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "supportsAttachments",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.events.patch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.patch(input: object): Promise<unknown>",
    "summary": "Updates an event. This method supports patch semantics.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "calendarId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "text",
      "userIp"
    ],
    "path": "calendar.events.quickAdd",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.quickAdd(input: object): Promise<unknown>",
    "summary": "Creates an event based on a simple text string.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.quickAdd",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "conferenceDataVersion",
      "eventId",
      "eventLabelVersion",
      "fields",
      "maxAttendees",
      "prettyPrint",
      "quotaUser",
      "sendNotifications",
      "sendUpdates",
      "supportsAttachments",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.events.update",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.update(input: object): Promise<unknown>",
    "summary": "Updates an event.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "alwaysIncludeEmail",
      "calendarId",
      "eventTypes",
      "fields",
      "iCalUID",
      "maxAttendees",
      "maxResults",
      "orderBy",
      "pageToken",
      "prettyPrint",
      "privateExtendedProperty",
      "q",
      "quotaUser",
      "sharedExtendedProperty",
      "showDeleted",
      "showHiddenInvitations",
      "singleEvents",
      "syncToken",
      "timeMax",
      "timeMin",
      "timeZone",
      "updatedMin",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.events.watch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().events.watch(input: object): Promise<unknown>",
    "summary": "Watch for changes to Events resources.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().events.watch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.freebusy.query",
    "signature": "ctx.applications[\"google-workspace\"].calendar().freebusy.query(input?: object): Promise<unknown>",
    "summary": "Returns free/busy information for a set of calendars.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().freebusy.query",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "setting",
      "userIp"
    ],
    "path": "calendar.settings.get",
    "signature": "ctx.applications[\"google-workspace\"].calendar().settings.get(input: object): Promise<unknown>",
    "summary": "Returns a single user setting.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().settings.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "alt",
      "fields",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "syncToken",
      "userIp"
    ],
    "path": "calendar.settings.list",
    "signature": "ctx.applications[\"google-workspace\"].calendar().settings.list(input?: object): Promise<unknown>",
    "summary": "Returns all user settings for the authenticated user.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().settings.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "alt",
      "fields",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "syncToken",
      "userIp",
      "requestBody"
    ],
    "path": "calendar.settings.watch",
    "signature": "ctx.applications[\"google-workspace\"].calendar().settings.watch(input?: object): Promise<unknown>",
    "summary": "Watch for changes to Settings resources.",
    "callPrefix": "ctx.applications[\"google-workspace\"].calendar().settings.watch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.customEmojis.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().customEmojis.create(input?: object): Promise<unknown>",
    "summary": "Creates a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().customEmojis.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.customEmojis.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().customEmojis.delete(input: object): Promise<unknown>",
    "summary": "Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization. See [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149). Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().customEmojis.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.customEmojis.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().customEmojis.get(input: object): Promise<unknown>",
    "summary": "Returns details about a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().customEmojis.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.customEmojis.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().customEmojis.list(input?: object): Promise<unknown>",
    "summary": "Lists custom emojis visible to the authenticated user. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().customEmojis.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName"
    ],
    "path": "chat.media.download",
    "signature": "ctx.applications[\"google-workspace\"].chat().media.download(input: object): Promise<unknown>",
    "summary": "Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().media.download",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "parent",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.media.upload",
    "signature": "ctx.applications[\"google-workspace\"].chat().media.upload(input: object): Promise<unknown>",
    "summary": "Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments). Requires user [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().media.upload",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.spaces.completeImport",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.completeImport(input: object): Promise<unknown>",
    "summary": "Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and domain-wide delegation with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.import` For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import).",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.completeImport",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestId",
      "requestBody"
    ],
    "path": "chat.spaces.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.create(input?: object): Promise<unknown>",
    "summary": "Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces.create` - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When authenticating as an app, the `space.customer` field must be set in the request. When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set `space.permission_settings.manage_apps` to `managers_allowed`. Space membership upon creation depends on whether the space is created in `Import mode`: * **Import mode:** No members are created. * **All other modes:** The calling user is added as a member. This is: * The app itself when using app authentication. * The human user when using user authentication. If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess"
    ],
    "path": "chat.spaces.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.delete(input: object): Promise<unknown>",
    "summary": "Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](https://developers.google.com/workspace/chat/delete-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.delete` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.delete` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.delete`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.findDirectMessage",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.findDirectMessage(input?: object): Promise<unknown>",
    "summary": "Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app. With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.findDirectMessage",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "spaceView",
      "users"
    ],
    "path": "chat.spaces.findGroupChats",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.findGroupChats(input?: object): Promise<unknown>",
    "summary": "Returns all spaces with `spaceType == GROUP_CHAT`, whose human memberships contain exactly the calling user, and the users specified in `FindGroupChatsRequest.users`. Only members that have joined the conversation are supported. For an example, see [Find group chats](https://developers.google.com/workspace/chat/find-group-chats). If the calling user blocks, or is blocked by, some users, and no spaces with the entire specified set of users are found, this method returns spaces that don't include the blocked or blocking users. The specified set of users must contain only human (non-app) memberships. A request that contains non-human users doesn't return any spaces. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.findGroupChats",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess"
    ],
    "path": "chat.spaces.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.get(input: object): Promise<unknown>",
    "summary": "Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/chat/get-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.spaces` with [administrator approval](https://support.google.com/a?p=chat-app-auth) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - `space.access_settings` is only populated when using the `chat.app.spaces` scope. - `space.predefind_permission_settings` and `space.permission_settings` are only populated when using the `chat.app.spaces` scope, and only for spaces the app created.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.list(input?: object): Promise<unknown>",
    "summary": "Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` To list all named spaces by Google Workspace organization, use the [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) method using Workspace administrator privileges instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "parent",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess",
      "requestBody"
    ],
    "path": "chat.spaces.members.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.members.create(input: object): Promise<unknown>",
    "summary": "Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to add the calling app to the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Inviting users external to the Workspace organization that owns the space. - Adding a Google Group to a space. - Adding a Chat app to a space. For example usage, see: - [Invite or add a user to a space](https://developers.google.com/workspace/chat/create-members#create-user-membership). - [Invite or add a Google Group to a space](https://developers.google.com/workspace/chat/create-members#create-group-membership). - [Add the Chat app to a space](https://developers.google.com/workspace/chat/create-members#create-membership-calling-api).",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.members.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess"
    ],
    "path": "chat.spaces.members.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.members.delete(input: object): Promise<unknown>",
    "summary": "Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to remove the calling app from the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Removing a Google Group from a space. - Removing a Chat app from a space. To delete memberships for space managers, the requester must be a space manager. If you're using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) the Chat app must be the space creator.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.members.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "useAdminAccess"
    ],
    "path": "chat.spaces.members.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.members.get(input: object): Promise<unknown>",
    "summary": "Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](https://developers.google.com/workspace/chat/get-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.members.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser",
      "showGroups",
      "showInvited",
      "useAdminAccess"
    ],
    "path": "chat.spaces.members.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.members.list(input: object): Promise<unknown>",
    "summary": "Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google.com/workspace/chat/list-members). Listing memberships with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists memberships in spaces that the authenticated user has access to. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.members.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "useAdminAccess",
      "requestBody"
    ],
    "path": "chat.spaces.members.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.members.patch(input: object): Promise<unknown>",
    "summary": "Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspace/chat/update-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.members.patch",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.messages.attachments.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.attachments.get(input: object): Promise<unknown>",
    "summary": "Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments). Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.bot`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.attachments.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "createMessageNotificationOptions.notificationType",
      "fields",
      "messageId",
      "messageReplyOption",
      "parent",
      "prettyPrint",
      "quotaUser",
      "requestId",
      "threadKey",
      "requestBody"
    ],
    "path": "chat.spaces.messages.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.create(input: object): Promise<unknown>",
    "summary": "Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) Chat attributes the message sender differently depending on the type of authentication that you use in your request. The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text (`text`), cards (`cardsV2`), and accessory widgets (`accessoryWidgets`). ![Message sent with app authentication](https://developers.google.com/workspace/chat/images/message-app-auth.svg) The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text (`text`). ![Message sent with user authentication](https://developers.google.com/workspace/chat/images/message-user-auth.svg) The maximum message size, including the message contents, is 32,000 bytes. For [webhook](https://developers.google.com/workspace/chat/quickstart/webhooks) requests, the response doesn't contain the full message. The response only populates the `name` and `thread.name` fields in addition to the information that was in the request.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "force",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.messages.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.delete(input: object): Promise<unknown>",
    "summary": "Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only delete messages created by the calling Chat app.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "markupSyntax",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.messages.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.get(input: object): Promise<unknown>",
    "summary": "Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot`: When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and [slash commands](https://developers.google.com/workspace/chat/slash-commands) that invoke the Chat app. - `https://www.googleapis.com/auth/chat.app.messages.readonly` with [administrator approval](https://support.google.com/a?p=chat-app-auth). When using this authentication scope, this method returns details about a public message in a space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` Note: Might return a message from a blocked member or space.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "markupSyntax",
      "orderBy",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser",
      "showDeleted"
    ],
    "path": "chat.spaces.messages.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.list(input: object): Promise<unknown>",
    "summary": "Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`. For an example, see [List messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/list). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the authorization scope: - `https://www.googleapis.com/auth/chat.app.messages.readonly`. When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "allowMissing",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.spaces.messages.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.patch(input: object): Promise<unknown>",
    "summary": "Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "parent",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.spaces.messages.reactions.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.create(input: object): Promise<unknown>",
    "summary": "Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.create` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.messages.reactions.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.delete(input: object): Promise<unknown>",
    "summary": "Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.messages.reactions.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.list(input: object): Promise<unknown>",
    "summary": "Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.reactions.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "parent",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.spaces.messages.search",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.search(input: object): Promise<unknown>",
    "summary": "Searches for messages in Google Chat that the calling user has access to. Returns a list of messages matching the search criteria. To search across all spaces the user has access to, set `parent` to `spaces/-`. Using any other value for `parent` results in an `INVALID_ARGUMENT` error. The returned messages have their `name` field populated with the full resource name, which includes the specific `space` in which the message resides. This API doesn't return all message types. The types of messages listed below aren't included in the response. Use ListMessages to list all messages. - Private Messages that are visible to the authenticated user. - Messages posted by Chat apps in spaces or group chats. - Messages in a Chat app DM. - Messages from blocked users. - Messages in spaces that the caller has muted. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.search",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "allowMissing",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.spaces.messages.update",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.messages.update(input: object): Promise<unknown>",
    "summary": "Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.messages.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "useAdminAccess",
      "requestBody"
    ],
    "path": "chat.spaces.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.patch(input: object): Promise<unknown>",
    "summary": "Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces). If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - To update either `space.predefined_permission_settings` or `space.permission_settings`, the app must be the space creator. - Updating the `space.access_settings.audience` is not supported for app authentication.",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.patch",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "orderBy",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "query",
      "quotaUser",
      "useAdminAccess"
    ],
    "path": "chat.spaces.search",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.search(input?: object): Promise<unknown>",
    "summary": "Returns a list of spaces in a Google Workspace organization. For an example, see [Search for and manage spaces](https://developers.google.com/workspace/chat/search-manage-admin). When `use_admin_access` is set to `false`, the results are limited to spaces where the calling user is a joined member. To search with administrator privileges, set `use_admin_access` to `true`. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - [User authentication with administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) and one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.search",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.spaces.setup",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.setup(input?: object): Promise<unknown>",
    "summary": "Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space with initial members](https://developers.google.com/workspace/chat/set-up-spaces). To specify the human members to add, add memberships with the appropriate `membership.member.name`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. To specify the Google groups to add, add memberships with the appropriate `membership.group_member.name`. To add or invite a Google group, use `groups/{group}`, where `{group}` is the `id` for the group from the Cloud Identity Groups API. For example, you can use [Cloud Identity Groups lookup API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) to retrieve the ID `123456789` for group email `group@example.com`, then you can add the group to the space by setting the `membership.group_member.name` to `groups/123456789`. Group email is not supported, and Google groups can only be added as members in named spaces. For a named space or group chat, if the caller blocks, or is blocked by some members, or doesn't have permission to add some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [Invite or add a user or app to a space](https://developers.google.com/workspace/chat/create-members). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.setup",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.spaceEvents.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.spaceEvents.get(input: object): Promise<unknown>",
    "summary": "Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload. Note: The `permissionSettings` field is not returned in the Space object of the Space event data for this request. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - `https://www.googleapis.com/auth/chat.app.spaces.readonly` - `https://www.googleapis.com/auth/chat.app.messages.readonly` - `https://www.googleapis.com/auth/chat.app.memberships` - `https://www.googleapis.com/auth/chat.app.memberships.readonly` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To get an event, the authenticated caller must be a member of the space. For an example, see [Get details about an event from a Google Chat space](https://developers.google.com/workspace/chat/get-space-event).",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.spaceEvents.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.spaces.spaceEvents.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().spaces.spaceEvents.list(input: object): Promise<unknown>",
    "summary": "Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - `https://www.googleapis.com/auth/chat.app.spaces.readonly` - `https://www.googleapis.com/auth/chat.app.messages.readonly` - `https://www.googleapis.com/auth/chat.app.memberships` - `https://www.googleapis.com/auth/chat.app.memberships.readonly` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To list events, the authenticated caller must be a member of the space. For an example, see [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events).",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().spaces.spaceEvents.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.availability.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.availability.get(input: object): Promise<unknown>",
    "summary": "Returns availability information for a human user in Google Chat. For example, this can be used to check if a user is online or away, or to retrieve their custom status message. This method only retrieves the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability.readonly` - `https://www.googleapis.com/auth/chat.users.availability`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.availability.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.availability.markAsActive",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsActive(input: object): Promise<unknown>",
    "summary": "Marks user as `ACTIVE` in Google Chat. Sets the user's availability state to `ACTIVE`. The `ACTIVE` state lasts until the specified expiration, at which point the user's state becomes `AWAY`. Note that if the user is actively using Chat, the `ACTIVE` state duration may extend beyond the provided expiration. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsActive",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.availability.markAsAway",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsAway(input: object): Promise<unknown>",
    "summary": "Marks user as `AWAY` in Google Chat. Sets the user's state to away and is not affected by the user's activity. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsAway",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.availability.markAsDoNotDisturb",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsDoNotDisturb(input: object): Promise<unknown>",
    "summary": "Marks user as `DO_NOT_DISTURB` in Google Chat. Sets a user's availability state to `DO_NOT_DISTURB` until a specified expiration time. When in `DO_NOT_DISTURB`, users typically won't receive notifications. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.availability.markAsDoNotDisturb",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.users.availability.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.availability.patch(input: object): Promise<unknown>",
    "summary": "Updates availability information for a human user. Only the `custom_status` field can be updated through this method. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.availability.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "parent",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.sections.create",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.create(input: object): Promise<unknown>",
    "summary": "Creates a section in Google Chat. Sections help users group conversations and customize the list of spaces displayed in Chat navigation panel. Only sections of type `CUSTOM_SECTION` can be created. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.sections.delete",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.delete(input: object): Promise<unknown>",
    "summary": "Deletes a section of type `CUSTOM_SECTION`. If the section contains items, such as spaces, the items are moved to Google Chat's default sections and are not deleted. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "filter",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.sections.items.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.items.list(input: object): Promise<unknown>",
    "summary": "Lists items in a section. Only spaces can be section items. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` - `https://www.googleapis.com/auth/chat.users.sections.readonly`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.items.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.sections.items.move",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.items.move(input: object): Promise<unknown>",
    "summary": "Moves an item from one section to another. For example, if a section contains spaces, this method can be used to move a space to a different section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.items.move",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "parent",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.sections.list",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.list(input: object): Promise<unknown>",
    "summary": "Lists sections available to the Chat user. Sections help users group their conversations and customize the list of spaces displayed in Chat navigation panel. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` - `https://www.googleapis.com/auth/chat.users.sections.readonly`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.users.sections.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.patch(input: object): Promise<unknown>",
    "summary": "Updates a section. Only sections of type `CUSTOM_SECTION` can be updated. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "chat.users.sections.position",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.sections.position(input: object): Promise<unknown>",
    "summary": "Changes the sort order of a section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.sections.position",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.spaces.getSpaceReadState",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.spaces.getSpaceReadState(input: object): Promise<unknown>",
    "summary": "Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see [Get details about a user's space read state](https://developers.google.com/workspace/chat/get-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.spaces.getSpaceReadState",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.spaces.spaceNotificationSetting.get",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.spaces.spaceNotificationSetting.get(input: object): Promise<unknown>",
    "summary": "Gets the space notification setting. For an example, see [Get the caller's space notification setting](https://developers.google.com/workspace/chat/get-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.spaces.spaceNotificationSetting.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.users.spaces.spaceNotificationSetting.patch",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.spaces.spaceNotificationSetting.patch(input: object): Promise<unknown>",
    "summary": "Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://developers.google.com/workspace/chat/update-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.spaces.spaceNotificationSetting.patch",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "chat.users.spaces.threads.getThreadReadState",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.spaces.threads.getThreadReadState(input: object): Promise<unknown>",
    "summary": "Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see [Get details about a user's thread read state](https://developers.google.com/workspace/chat/get-thread-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.spaces.threads.getThreadReadState",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser",
      "updateMask",
      "requestBody"
    ],
    "path": "chat.users.spaces.updateSpaceReadState",
    "signature": "ctx.applications[\"google-workspace\"].chat().users.spaces.updateSpaceReadState(input: object): Promise<unknown>",
    "summary": "Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a user's space read state](https://developers.google.com/workspace/chat/update-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate`",
    "callPrefix": "ctx.applications[\"google-workspace\"].chat().users.spaces.updateSpaceReadState",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "documentId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "docs.documents.batchUpdate",
    "signature": "ctx.applications[\"google-workspace\"].docs().documents.batchUpdate(input: object): Promise<unknown>",
    "summary": "Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.",
    "callPrefix": "ctx.applications[\"google-workspace\"].docs().documents.batchUpdate",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "docs.documents.create",
    "signature": "ctx.applications[\"google-workspace\"].docs().documents.create(input?: object): Promise<unknown>",
    "summary": "Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.",
    "callPrefix": "ctx.applications[\"google-workspace\"].docs().documents.create",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "documentId",
      "fields",
      "includeTabsContent",
      "prettyPrint",
      "quotaUser",
      "suggestionsViewMode"
    ],
    "path": "docs.documents.get",
    "signature": "ctx.applications[\"google-workspace\"].docs().documents.get(input: object): Promise<unknown>",
    "summary": "Gets the latest version of the specified document.",
    "callPrefix": "ctx.applications[\"google-workspace\"].docs().documents.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.about.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().about.get(input?: object): Promise<unknown>",
    "summary": "Gets information about the user, the user's Drive, and system capabilities. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().about.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "proposalId",
      "quotaUser"
    ],
    "path": "drive.accessproposals.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().accessproposals.get(input: object): Promise<unknown>",
    "summary": "Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().accessproposals.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.accessproposals.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().accessproposals.list(input: object): Promise<unknown>",
    "summary": "List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().accessproposals.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "proposalId",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.accessproposals.resolve",
    "signature": "ctx.applications[\"google-workspace\"].drive().accessproposals.resolve(input: object): Promise<unknown>",
    "summary": "Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().accessproposals.resolve",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.approve",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.approve(input: object): Promise<unknown>",
    "summary": "Approves an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `APPROVED`. If this is the last required reviewer response, this also completes the approval and sets the approval Status to `APPROVED`.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.approve",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.cancel",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.cancel(input: object): Promise<unknown>",
    "summary": "Cancels an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Updates the approval Status to `CANCELLED`. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS`.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.cancel",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.comment",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.comment(input: object): Promise<unknown>",
    "summary": "Comments on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This sends a notification to both the initiator and the reviewers. Additionally, a message is also added to the approval activity log.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.comment",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.decline",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.decline(input: object): Promise<unknown>",
    "summary": "Declines an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `DECLINED`. This also completes the approval and sets the approval Status to `DECLINED`.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.decline",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.approvals.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.get(input: object): Promise<unknown>",
    "summary": "Gets an approval by ID. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.approvals.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.list(input: object): Promise<unknown>",
    "summary": "Lists the approvals on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "approvalId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.reassign",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.reassign(input: object): Promise<unknown>",
    "summary": "Reassigns the reviewers on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Adds or replaces reviewers in the ReviewerResponse of the approval. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS` and the Response for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves. Removing a reviewer isn't allowed.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.reassign",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.approvals.start",
    "signature": "ctx.applications[\"google-workspace\"].drive().approvals.start(input: object): Promise<unknown>",
    "summary": "Starts an approval on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().approvals.start",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "appId",
      "fields",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.apps.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().apps.get(input: object): Promise<unknown>",
    "summary": "Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().apps.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "appFilterExtensions",
      "appFilterMimeTypes",
      "fields",
      "languageCode",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.apps.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().apps.list(input?: object): Promise<unknown>",
    "summary": "Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().apps.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ],
    "path": "drive.changes.getStartPageToken",
    "signature": "ctx.applications[\"google-workspace\"].drive().changes.getStartPageToken(input?: object): Promise<unknown>",
    "summary": "Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().changes.getStartPageToken",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "includeCorpusRemovals",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeRemoved",
      "includeTeamDriveItems",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "restrictToMyDrive",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ],
    "path": "drive.changes.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().changes.list(input: object): Promise<unknown>",
    "summary": "Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().changes.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "includeCorpusRemovals",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeRemoved",
      "includeTeamDriveItems",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "restrictToMyDrive",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId",
      "requestBody"
    ],
    "path": "drive.changes.watch",
    "signature": "ctx.applications[\"google-workspace\"].drive().changes.watch(input: object): Promise<unknown>",
    "summary": "Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().changes.watch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.channels.stop",
    "signature": "ctx.applications[\"google-workspace\"].drive().channels.stop(input?: object): Promise<unknown>",
    "summary": "Stops watching resources through this channel. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().channels.stop",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.comments.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().comments.create(input: object): Promise<unknown>",
    "summary": "Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().comments.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.comments.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().comments.delete(input: object): Promise<unknown>",
    "summary": "Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().comments.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "includeDeleted",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.comments.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().comments.get(input: object): Promise<unknown>",
    "summary": "Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().comments.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "includeDeleted",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "startModifiedTime"
    ],
    "path": "drive.comments.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().comments.list(input: object): Promise<unknown>",
    "summary": "Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().comments.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.comments.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().comments.update(input: object): Promise<unknown>",
    "summary": "Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().comments.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestId",
      "requestBody"
    ],
    "path": "drive.drives.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.create(input: object): Promise<unknown>",
    "summary": "Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "allowItemDeletion",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "useDomainAdminAccess"
    ],
    "path": "drive.drives.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.delete(input: object): Promise<unknown>",
    "summary": "Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "useDomainAdminAccess"
    ],
    "path": "drive.drives.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.get(input: object): Promise<unknown>",
    "summary": "Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.drives.hide",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.hide(input: object): Promise<unknown>",
    "summary": "Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.hide",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "useDomainAdminAccess"
    ],
    "path": "drive.drives.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.list(input?: object): Promise<unknown>",
    "summary": "Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.drives.unhide",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.unhide(input: object): Promise<unknown>",
    "summary": "Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.unhide",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "fields",
      "prettyPrint",
      "quotaUser",
      "useDomainAdminAccess",
      "requestBody"
    ],
    "path": "drive.drives.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().drives.update(input: object): Promise<unknown>",
    "summary": "Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().drives.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "enforceSingleParent",
      "fields",
      "fileId",
      "ignoreDefaultVisibility",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "requestBody"
    ],
    "path": "drive.files.copy",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.copy(input: object): Promise<unknown>",
    "summary": "Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.copy",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "enforceSingleParent",
      "fields",
      "ignoreDefaultVisibility",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useContentAsIndexableText",
      "requestBody"
    ],
    "path": "drive.files.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.create(input?: object): Promise<unknown>",
    "summary": "Creates a file. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `\"name\": \"cat.jpg\"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "enforceSingleParent",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives"
    ],
    "path": "drive.files.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.delete(input: object): Promise<unknown>",
    "summary": "Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.delete",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "mimeType",
      "prettyPrint",
      "quotaUser",
      "revisionId"
    ],
    "path": "drive.files.download",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.download(input: object): Promise<unknown>",
    "summary": "Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.download",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "acknowledgeAbuse",
      "fileId",
      "path",
      "sha256"
    ],
    "path": "drive.files.downloadToWorkspace",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.downloadToWorkspace(input: DriveDownloadInput): Promise<{ path: string; sha256: string; size: number }>",
    "summary": "Stream Drive bytes directly into an atomically published workspace path.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.downloadToWorkspace",
    "output": "{ path: string; sha256: string; size: number }"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "driveId",
      "enforceSingleParent",
      "fields",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.files.emptyTrash",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.emptyTrash(input?: object): Promise<unknown>",
    "summary": "Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.emptyTrash",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "mimeType",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.files.export",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.export(input: object): Promise<unknown>",
    "summary": "Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.export",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "parent",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.files.generateCseToken",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.generateCseToken(input?: object): Promise<unknown>",
    "summary": "Generates a CSE token which can be used to create or update CSE files.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.generateCseToken",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "count",
      "fields",
      "prettyPrint",
      "quotaUser",
      "space",
      "type"
    ],
    "path": "drive.files.generateIds",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.generateIds(input?: object): Promise<unknown>",
    "summary": "Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.generateIds",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "acknowledgeAbuse",
      "alt",
      "fields",
      "fileId",
      "includeLabels",
      "includePermissionsForView",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives"
    ],
    "path": "drive.files.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.get(input: object): Promise<unknown>",
    "summary": "Gets a file's metadata or content by ID. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "corpora",
      "corpus",
      "driveId",
      "fields",
      "includeItemsFromAllDrives",
      "includeLabels",
      "includePermissionsForView",
      "includeTeamDriveItems",
      "orderBy",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "spaces",
      "supportsAllDrives",
      "supportsTeamDrives",
      "teamDriveId"
    ],
    "path": "drive.files.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.list(input?: object): Promise<unknown>",
    "summary": "Lists the user's files. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.files.listLabels",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.listLabels(input: object): Promise<unknown>",
    "summary": "Lists the labels on a file. For more information, see [List labels on a file](https://developers.google.com/workspace/drive/api/guides/list-labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.listLabels",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.files.modifyLabels",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.modifyLabels(input: object): Promise<unknown>",
    "summary": "Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.modifyLabels",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "addParents",
      "alt",
      "enforceSingleParent",
      "fields",
      "fileId",
      "includeLabels",
      "includePermissionsForView",
      "keepRevisionForever",
      "ocrLanguage",
      "prettyPrint",
      "quotaUser",
      "removeParents",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useContentAsIndexableText",
      "requestBody"
    ],
    "path": "drive.files.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.update(input: object): Promise<unknown>",
    "summary": "Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "file",
      "requestBody"
    ],
    "path": "drive.files.upload",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.upload(input: DriveUploadInput): Promise<GoogleDrive.File>",
    "summary": "Upload a native browser File without base64 or a model-visible byte body.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.upload",
    "output": "GoogleDrive.File"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "acknowledgeAbuse",
      "alt",
      "fields",
      "fileId",
      "includeLabels",
      "includePermissionsForView",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "requestBody"
    ],
    "path": "drive.files.watch",
    "signature": "ctx.applications[\"google-workspace\"].drive().files.watch(input: object): Promise<unknown>",
    "summary": "Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().files.watch",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "name",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.operations.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().operations.get(input: object): Promise<unknown>",
    "summary": "Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().operations.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "emailMessage",
      "enforceExpansiveAccess",
      "enforceSingleParent",
      "fields",
      "fileId",
      "moveToNewOwnersRoot",
      "prettyPrint",
      "quotaUser",
      "sendNotificationEmail",
      "supportsAllDrives",
      "supportsTeamDrives",
      "transferOwnership",
      "useDomainAdminAccess",
      "requestBody"
    ],
    "path": "drive.permissions.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().permissions.create(input: object): Promise<unknown>",
    "summary": "Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().permissions.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "enforceExpansiveAccess",
      "fields",
      "fileId",
      "permissionId",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ],
    "path": "drive.permissions.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().permissions.delete(input: object): Promise<unknown>",
    "summary": "Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().permissions.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "permissionId",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ],
    "path": "drive.permissions.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().permissions.get(input: object): Promise<unknown>",
    "summary": "Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().permissions.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "includePermissionsForView",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "supportsAllDrives",
      "supportsTeamDrives",
      "useDomainAdminAccess"
    ],
    "path": "drive.permissions.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().permissions.list(input: object): Promise<unknown>",
    "summary": "Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().permissions.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "enforceExpansiveAccess",
      "fields",
      "fileId",
      "permissionId",
      "prettyPrint",
      "quotaUser",
      "removeExpiration",
      "supportsAllDrives",
      "supportsTeamDrives",
      "transferOwnership",
      "useDomainAdminAccess",
      "requestBody"
    ],
    "path": "drive.permissions.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().permissions.update(input: object): Promise<unknown>",
    "summary": "Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().permissions.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "drive.replies.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().replies.create(input: object): Promise<unknown>",
    "summary": "Creates a reply to a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().replies.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "replyId"
    ],
    "path": "drive.replies.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().replies.delete(input: object): Promise<unknown>",
    "summary": "Deletes a reply. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().replies.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "includeDeleted",
      "prettyPrint",
      "quotaUser",
      "replyId"
    ],
    "path": "drive.replies.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().replies.get(input: object): Promise<unknown>",
    "summary": "Gets a reply by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().replies.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "includeDeleted",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.replies.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().replies.list(input: object): Promise<unknown>",
    "summary": "Lists a comment's replies. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().replies.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "commentId",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "replyId",
      "requestBody"
    ],
    "path": "drive.replies.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().replies.update(input: object): Promise<unknown>",
    "summary": "Updates a reply with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().replies.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "revisionId"
    ],
    "path": "drive.revisions.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().revisions.delete(input: object): Promise<unknown>",
    "summary": "Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().revisions.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "acknowledgeAbuse",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "revisionId"
    ],
    "path": "drive.revisions.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().revisions.get(input: object): Promise<unknown>",
    "summary": "Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().revisions.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "drive.revisions.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().revisions.list(input: object): Promise<unknown>",
    "summary": "Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions). **Important:** The list of revisions returned by this method might be incomplete for files with a large revision history, including frequently edited Google Docs, Sheets, and Slides. Older revisions might be omitted from the response, meaning the first revision returned may not be the oldest existing revision. The revision history visible in the Workspace editor user interface might be more complete than the list returned by the API.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().revisions.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "fileId",
      "prettyPrint",
      "quotaUser",
      "revisionId",
      "requestBody"
    ],
    "path": "drive.revisions.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().revisions.update(input: object): Promise<unknown>",
    "summary": "Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().revisions.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestId",
      "requestBody"
    ],
    "path": "drive.teamdrives.create",
    "signature": "ctx.applications[\"google-workspace\"].drive().teamdrives.create(input: object): Promise<unknown>",
    "summary": "Deprecated: Use `drives.create` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().teamdrives.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "teamDriveId"
    ],
    "path": "drive.teamdrives.delete",
    "signature": "ctx.applications[\"google-workspace\"].drive().teamdrives.delete(input: object): Promise<unknown>",
    "summary": "Deprecated: Use `drives.delete` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().teamdrives.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "teamDriveId",
      "useDomainAdminAccess"
    ],
    "path": "drive.teamdrives.get",
    "signature": "ctx.applications[\"google-workspace\"].drive().teamdrives.get(input: object): Promise<unknown>",
    "summary": "Deprecated: Use `drives.get` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().teamdrives.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "useDomainAdminAccess"
    ],
    "path": "drive.teamdrives.list",
    "signature": "ctx.applications[\"google-workspace\"].drive().teamdrives.list(input?: object): Promise<unknown>",
    "summary": "Deprecated: Use `drives.list` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().teamdrives.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "teamDriveId",
      "useDomainAdminAccess",
      "requestBody"
    ],
    "path": "drive.teamdrives.update",
    "signature": "ctx.applications[\"google-workspace\"].drive().teamdrives.update(input: object): Promise<unknown>",
    "summary": "Deprecated: Use `drives.update` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].drive().teamdrives.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.drafts.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.create(input: object): Promise<unknown>",
    "summary": "Creates a draft with the `DRAFT` label. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.drafts.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.delete(input: object): Promise<unknown>",
    "summary": "Immediately and permanently deletes the specified draft. Does not simply trash it. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "format",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.drafts.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.get(input: object): Promise<unknown>",
    "summary": "Gets the specified draft. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "includeSpamTrash",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.drafts.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.list(input: object): Promise<unknown>",
    "summary": "Lists the drafts in the user's mailbox. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.drafts.send",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.send(input: object): Promise<unknown>",
    "summary": "Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.send",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.drafts.update",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.drafts.update(input: object): Promise<unknown>",
    "summary": "Replaces a draft's content. For more information, see [Create and send draft emails](https://developers.google.com/workspace/gmail/api/guides/drafts).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.drafts.update",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.getProfile",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.getProfile(input: object): Promise<unknown>",
    "summary": "Gets the current user's Gmail profile.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.getProfile",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "historyTypes",
      "labelId",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "startHistoryId",
      "userId"
    ],
    "path": "gmail.users.history.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.history.list(input: object): Promise<unknown>",
    "summary": "Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`). For more information, see [Synchronize clients with Gmail](https://developers.google.com/workspace/gmail/api/guides/sync).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.history.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.labels.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.create(input: object): Promise<unknown>",
    "summary": "Creates a label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.labels.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.delete(input: object): Promise<unknown>",
    "summary": "Immediately and permanently deletes the specified label and removes it from any messages and threads that it's applied to. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.labels.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.get(input: object): Promise<unknown>",
    "summary": "Gets the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.labels.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.list(input: object): Promise<unknown>",
    "summary": "Lists all labels in the user's mailbox. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.labels.patch",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.patch(input: object): Promise<unknown>",
    "summary": "Patch the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.labels.update",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.labels.update(input: object): Promise<unknown>",
    "summary": "Updates the specified label. For more information, see [Manage labels](https://developers.google.com/workspace/gmail/api/guides/labels).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.labels.update",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "messageId",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.attachments.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.attachments.get(input: object): Promise<unknown>",
    "summary": "Gets the specified message attachment.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.attachments.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.batchDelete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.batchDelete(input: object): Promise<unknown>",
    "summary": "Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.batchDelete",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.batchModify",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.batchModify(input: object): Promise<unknown>",
    "summary": "Modifies the labels and the Classification Label values on the specified messages. For administrators modifying messages for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.modify.restricted` scope.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.batchModify",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.delete(input: object): Promise<unknown>",
    "summary": "Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "format",
      "id",
      "metadataHeaders",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.get(input: object): Promise<unknown>",
    "summary": "Gets the specified message.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "deleted",
      "fields",
      "internalDateSource",
      "neverMarkSpam",
      "prettyPrint",
      "processForCalendar",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.import",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.import(input: object): Promise<unknown>",
    "summary": "Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note that the maximum size of the message is 150 MB.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.import",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "deleted",
      "fields",
      "internalDateSource",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.insert",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.insert(input: object): Promise<unknown>",
    "summary": "Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message. For more information, see [Create and send email messages](https://developers.google.com/workspace/gmail/api/guides/sending).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.insert",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "includeSpamTrash",
      "labelIds",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.list(input: object): Promise<unknown>",
    "summary": "Lists the messages in the user's mailbox. For more information, see [List Gmail messages](https://developers.google.com/workspace/gmail/api/guides/list-messages).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.modify",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.modify(input: object): Promise<unknown>",
    "summary": "Modifies the labels and the Classification Label values on the specified message. For administrators modifying message for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.modify.restricted` scope.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.modify",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.messages.send",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.send(input: object): Promise<unknown>",
    "summary": "Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers. For more information, see [Create and send email messages](https://developers.google.com/workspace/gmail/api/guides/sending).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.send",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "attachments",
      "bcc",
      "cc",
      "from",
      "inReplyTo",
      "references",
      "replyTo",
      "subject",
      "text",
      "threadId",
      "to",
      "userId"
    ],
    "path": "gmail.users.messages.sendEmail",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.sendEmail(input: GmailSendEmailInput): Promise<GoogleGmail.Message>",
    "summary": "Compose and send a plain-text email with optional native File attachments.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.sendEmail",
    "output": "GoogleGmail.Message"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.trash",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.trash(input: object): Promise<unknown>",
    "summary": "Moves the specified message to the trash.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.trash",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.messages.untrash",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.messages.untrash(input: object): Promise<unknown>",
    "summary": "Removes the specified message from the trash.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.messages.untrash",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.identities.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.create(input: object): Promise<unknown>",
    "summary": "Creates and configures a client-side encryption identity that's authorized to send mail from the user account. Google publishes the S/MIME certificate to a shared domain-wide directory so that people within a Google Workspace organization can encrypt and send mail to the identity. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "cseEmailAddress",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.cse.identities.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.delete(input: object): Promise<unknown>",
    "summary": "Deletes a client-side encryption identity. The authenticated user can no longer use the identity to send encrypted messages. You cannot restore the identity after you delete it. Instead, use the CreateCseIdentity method to create another identity with the same configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "cseEmailAddress",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.cse.identities.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.get(input: object): Promise<unknown>",
    "summary": "Retrieves a client-side encryption identity configuration. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.cse.identities.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.list(input: object): Promise<unknown>",
    "summary": "Lists the client-side encrypted identities for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "emailAddress",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.identities.patch",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.patch(input: object): Promise<unknown>",
    "summary": "Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887). For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.identities.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "chainValidation",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.keypairs.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.create(input: object): Promise<unknown>",
    "summary": "Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "keyPairId",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.keypairs.disable",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.disable(input: object): Promise<unknown>",
    "summary": "Turns off a client-side encryption key pair. The authenticated user can no longer use the key pair to decrypt incoming CSE message texts or sign outgoing CSE mail. To regain access, use the EnableCseKeyPair to turn on the key pair. After 30 days, you can permanently delete the key pair by using the ObliterateCseKeyPair method. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.disable",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "keyPairId",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.keypairs.enable",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.enable(input: object): Promise<unknown>",
    "summary": "Turns on a client-side encryption key pair that was turned off. The key pair becomes active again for any associated client-side encryption identities. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.enable",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "keyPairId",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.cse.keypairs.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.get(input: object): Promise<unknown>",
    "summary": "Retrieves an existing client-side encryption key pair. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.cse.keypairs.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.list(input: object): Promise<unknown>",
    "summary": "Lists client-side encryption key pairs for an authenticated user. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "keyPairId",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.cse.keypairs.obliterate",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.obliterate(input: object): Promise<unknown>",
    "summary": "Deletes a client-side encryption key pair permanently and immediately. You can only permanently delete key pairs that have been turned off for more than 30 days. To turn off a key pair, use the DisableCseKeyPair method. Gmail can't restore or decrypt any messages that were encrypted by an obliterated key. Authenticated users and Google Workspace administrators lose access to reading the encrypted messages. For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope. For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.cse.keypairs.obliterate",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.delegates.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.create(input: object): Promise<unknown>",
    "summary": "Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). Gmail imposes limitations on the number of delegates and delegators each user in a Google Workspace organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. A delegate user must be referred to by their primary email address, and not an email alias. When a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "delegateEmail",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.delegates.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.delete(input: object): Promise<unknown>",
    "summary": "Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). A delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "delegateEmail",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.delegates.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.get(input: object): Promise<unknown>",
    "summary": "Gets the specified delegate. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). A delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.delegates.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.list(input: object): Promise<unknown>",
    "summary": "Lists the delegates for the specified account. For more information, see [Manage delegates](https://developers.google.com/workspace/gmail/api/guides/delegate_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.delegates.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.filters.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.create(input: object): Promise<unknown>",
    "summary": "Creates a filter. Note: you can only create a maximum of 1,000 filters. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.filters.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.delete(input: object): Promise<unknown>",
    "summary": "Immediately and permanently deletes the specified filter. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.filters.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.get(input: object): Promise<unknown>",
    "summary": "Gets a filter. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.filters.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.list(input: object): Promise<unknown>",
    "summary": "Lists the message filters of a Gmail user. For more information, see [Manage Gmail filters](https://developers.google.com/workspace/gmail/api/guides/filter_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.filters.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.forwardingAddresses.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.create(input: object): Promise<unknown>",
    "summary": "Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "forwardingEmail",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.forwardingAddresses.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.delete(input: object): Promise<unknown>",
    "summary": "Deletes the specified forwarding address and revokes any verification that may have been required. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "forwardingEmail",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.forwardingAddresses.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.get(input: object): Promise<unknown>",
    "summary": "Gets the specified forwarding address. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.forwardingAddresses.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.list(input: object): Promise<unknown>",
    "summary": "Lists the forwarding addresses for the specified account. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.forwardingAddresses.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.getAutoForwarding",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.getAutoForwarding(input: object): Promise<unknown>",
    "summary": "Gets the auto-forwarding setting for the specified account. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.getAutoForwarding",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.getImap",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.getImap(input: object): Promise<unknown>",
    "summary": "Gets IMAP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.getImap",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.getLanguage",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.getLanguage(input: object): Promise<unknown>",
    "summary": "Gets language settings. For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.getLanguage",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.getPop",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.getPop(input: object): Promise<unknown>",
    "summary": "Gets POP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.getPop",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.getVacation",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.getVacation(input: object): Promise<unknown>",
    "summary": "Gets vacation responder settings. For more information, see [Manage vacation settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/vacation_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.getVacation",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.sendAs.create",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.create(input: object): Promise<unknown>",
    "summary": "Creates a custom \"from\" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.delete(input: object): Promise<unknown>",
    "summary": "Deletes the specified send-as alias. Revokes any verification that may have been required for using it. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.get(input: object): Promise<unknown>",
    "summary": "Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.list(input: object): Promise<unknown>",
    "summary": "Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom \"from\" aliases. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.sendAs.patch",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.patch(input: object): Promise<unknown>",
    "summary": "Patch the specified send-as alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.patch",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.smimeInfo.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.delete(input: object): Promise<unknown>",
    "summary": "Deletes the specified S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.smimeInfo.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.get(input: object): Promise<unknown>",
    "summary": "Gets the specified S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.sendAs.smimeInfo.insert",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.insert(input: object): Promise<unknown>",
    "summary": "Insert (upload) the given S/MIME config for the specified send-as alias. Note that `pkcs12` format is required for the key. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.insert",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.smimeInfo.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.list(input: object): Promise<unknown>",
    "summary": "Lists S/MIME configs for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.smimeInfo.setDefault",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.setDefault(input: object): Promise<unknown>",
    "summary": "Sets the default S/MIME config for the specified send-as alias. For more information, see [Manage S/MIME certificates with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/smime_certs).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.smimeInfo.setDefault",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.sendAs.update",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.update(input: object): Promise<unknown>",
    "summary": "Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sendAsEmail",
      "userId"
    ],
    "path": "gmail.users.settings.sendAs.verify",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.verify(input: object): Promise<unknown>",
    "summary": "Sends a verification email to the specified send-as alias address. The verification status must be `pending`. For more information, see [Manage aliases and signatures with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.sendAs.verify",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.updateAutoForwarding",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateAutoForwarding(input: object): Promise<unknown>",
    "summary": "Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. For more information, see [Manage email forwarding](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings). This method is only available to service account clients that have been delegated domain-wide authority.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateAutoForwarding",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.updateImap",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateImap(input: object): Promise<unknown>",
    "summary": "Updates IMAP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateImap",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.updateLanguage",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateLanguage(input: object): Promise<unknown>",
    "summary": "Updates language settings. For more information, see [Manage language settings](https://developers.google.com/workspace/gmail/api/guides/language-settings). If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateLanguage",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.updatePop",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.updatePop(input: object): Promise<unknown>",
    "summary": "Updates POP settings. For more information, see [Configure POP and IMAP settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.updatePop",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.settings.updateVacation",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateVacation(input: object): Promise<unknown>",
    "summary": "Updates vacation responder settings. For more information, see [Manage vacation settings with the Gmail API](https://developers.google.com/workspace/gmail/api/guides/vacation_settings).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.settings.updateVacation",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.stop",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.stop(input: object): Promise<unknown>",
    "summary": "Turn off push notification delivery for the given user mailbox. For more information, see [Configure push notifications in Gmail API](https://developers.google.com/workspace/gmail/api/guides/push).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.stop",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.threads.delete",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.delete(input: object): Promise<unknown>",
    "summary": "Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "format",
      "id",
      "metadataHeaders",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.threads.get",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.get(input: object): Promise<unknown>",
    "summary": "Gets the specified thread. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "includeSpamTrash",
      "labelIds",
      "maxResults",
      "pageToken",
      "prettyPrint",
      "q",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.threads.list",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.list(input: object): Promise<unknown>",
    "summary": "Lists the threads in the user's mailbox. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.threads.modify",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.modify(input: object): Promise<unknown>",
    "summary": "Modifies the labels applied to the thread. This applies to all messages in the thread. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.modify",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.threads.trash",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.trash(input: object): Promise<unknown>",
    "summary": "Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.trash",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "id",
      "prettyPrint",
      "quotaUser",
      "userId"
    ],
    "path": "gmail.users.threads.untrash",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.threads.untrash(input: object): Promise<unknown>",
    "summary": "Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash. For more information, see [Manage threads](https://developers.google.com/workspace/gmail/api/guides/threads).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.threads.untrash",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "userId",
      "requestBody"
    ],
    "path": "gmail.users.watch",
    "signature": "ctx.applications[\"google-workspace\"].gmail().users.watch(input: object): Promise<unknown>",
    "summary": "Set up or update a push notification watch on the given user mailbox. For more information, see [Configure push notifications in Gmail API](https://developers.google.com/workspace/gmail/api/guides/push).",
    "callPrefix": "ctx.applications[\"google-workspace\"].gmail().users.watch",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "groupFields",
      "maxMembers",
      "prettyPrint",
      "quotaUser",
      "resourceNames"
    ],
    "path": "people.contactGroups.batchGet",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.batchGet(input?: object): Promise<unknown>",
    "summary": "Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.batchGet",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "people.contactGroups.create",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.create(input?: object): Promise<unknown>",
    "summary": "Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.create",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "deleteContacts",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName"
    ],
    "path": "people.contactGroups.delete",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.delete(input: object): Promise<unknown>",
    "summary": "Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.delete",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "groupFields",
      "maxMembers",
      "prettyPrint",
      "quotaUser",
      "resourceName"
    ],
    "path": "people.contactGroups.get",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.get(input: object): Promise<unknown>",
    "summary": "Get a specific contact group owned by the authenticated user by specifying a contact group resource name.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "groupFields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "syncToken"
    ],
    "path": "people.contactGroups.list",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.list(input?: object): Promise<unknown>",
    "summary": "List all contact groups owned by the authenticated user. Members of the contact groups are not populated.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "requestBody"
    ],
    "path": "people.contactGroups.members.modify",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.members.modify(input: object): Promise<unknown>",
    "summary": "Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.members.modify",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "requestBody"
    ],
    "path": "people.contactGroups.update",
    "signature": "ctx.applications[\"google-workspace\"].people().contactGroups.update(input: object): Promise<unknown>",
    "summary": "Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().contactGroups.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "requestBody"
    ],
    "path": "people.otherContacts.copyOtherContactToMyContactsGroup",
    "signature": "ctx.applications[\"google-workspace\"].people().otherContacts.copyOtherContactToMyContactsGroup(input: object): Promise<unknown>",
    "summary": "Copies an \"Other contact\" to a new contact in the user's \"myContacts\" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().otherContacts.copyOtherContactToMyContactsGroup",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "readMask",
      "requestSyncToken",
      "sources",
      "syncToken"
    ],
    "path": "people.otherContacts.list",
    "signature": "ctx.applications[\"google-workspace\"].people().otherContacts.list(input?: object): Promise<unknown>",
    "summary": "List all \"Other contacts\", that is contacts that are not in a contact group. \"Other contacts\" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason \"EXPIRED_SYNC_TOKEN\". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().otherContacts.list",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "prettyPrint",
      "query",
      "quotaUser",
      "readMask"
    ],
    "path": "people.otherContacts.search",
    "signature": "ctx.applications[\"google-workspace\"].people().otherContacts.search(input?: object): Promise<unknown>",
    "summary": "Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().otherContacts.search",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "people.people.batchCreateContacts",
    "signature": "ctx.applications[\"google-workspace\"].people().people.batchCreateContacts(input?: object): Promise<unknown>",
    "summary": "Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.batchCreateContacts",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "people.people.batchDeleteContacts",
    "signature": "ctx.applications[\"google-workspace\"].people().people.batchDeleteContacts(input?: object): Promise<unknown>",
    "summary": "Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.batchDeleteContacts",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "people.people.batchUpdateContacts",
    "signature": "ctx.applications[\"google-workspace\"].people().people.batchUpdateContacts(input?: object): Promise<unknown>",
    "summary": "Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.batchUpdateContacts",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "pageToken",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "requestMask.includeField",
      "requestSyncToken",
      "resourceName",
      "sortOrder",
      "sources",
      "syncToken"
    ],
    "path": "people.people.connections.list",
    "signature": "ctx.applications[\"google-workspace\"].people().people.connections.list(input: object): Promise<unknown>",
    "summary": "Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason \"EXPIRED_SYNC_TOKEN\". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.connections.list",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "sources",
      "requestBody"
    ],
    "path": "people.people.createContact",
    "signature": "ctx.applications[\"google-workspace\"].people().people.createContact(input?: object): Promise<unknown>",
    "summary": "Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.createContact",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName"
    ],
    "path": "people.people.deleteContact",
    "signature": "ctx.applications[\"google-workspace\"].people().people.deleteContact(input: object): Promise<unknown>",
    "summary": "Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.deleteContact",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "sources"
    ],
    "path": "people.people.deleteContactPhoto",
    "signature": "ctx.applications[\"google-workspace\"].people().people.deleteContactPhoto(input: object): Promise<unknown>",
    "summary": "Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.deleteContactPhoto",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "requestMask.includeField",
      "resourceName",
      "sources"
    ],
    "path": "people.people.get",
    "signature": "ctx.applications[\"google-workspace\"].people().people.get(input: object): Promise<unknown>",
    "summary": "Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "requestMask.includeField",
      "resourceNames",
      "sources"
    ],
    "path": "people.people.getBatchGet",
    "signature": "ctx.applications[\"google-workspace\"].people().people.getBatchGet(input?: object): Promise<unknown>",
    "summary": "Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.getBatchGet",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "mergeSources",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "quotaUser",
      "readMask",
      "requestSyncToken",
      "sources",
      "syncToken"
    ],
    "path": "people.people.listDirectoryPeople",
    "signature": "ctx.applications[\"google-workspace\"].people().people.listDirectoryPeople(input?: object): Promise<unknown>",
    "summary": "Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.listDirectoryPeople",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageSize",
      "prettyPrint",
      "query",
      "quotaUser",
      "readMask",
      "sources"
    ],
    "path": "people.people.searchContacts",
    "signature": "ctx.applications[\"google-workspace\"].people().people.searchContacts(input?: object): Promise<unknown>",
    "summary": "Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.searchContacts",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "mergeSources",
      "pageSize",
      "pageToken",
      "prettyPrint",
      "query",
      "quotaUser",
      "readMask",
      "sources"
    ],
    "path": "people.people.searchDirectoryPeople",
    "signature": "ctx.applications[\"google-workspace\"].people().people.searchDirectoryPeople(input?: object): Promise<unknown>",
    "summary": "Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.searchDirectoryPeople",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "personFields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "sources",
      "updatePersonFields",
      "requestBody"
    ],
    "path": "people.people.updateContact",
    "signature": "ctx.applications[\"google-workspace\"].people().people.updateContact(input: object): Promise<unknown>",
    "summary": "Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `\"failedPrecondition\"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. If making sequential updates to the same person, the etag from the `updateContact` response should be used to avoid failures. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.updateContact",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "resourceName",
      "requestBody"
    ],
    "path": "people.people.updateContactPhoto",
    "signature": "ctx.applications[\"google-workspace\"].people().people.updateContactPhoto(input: object): Promise<unknown>",
    "summary": "Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.",
    "callPrefix": "ctx.applications[\"google-workspace\"].people().people.updateContactPhoto",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.batchUpdate",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.batchUpdate(input: object): Promise<unknown>",
    "summary": "Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.batchUpdate",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.create",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.create(input?: object): Promise<unknown>",
    "summary": "Creates a spreadsheet, returning the newly created spreadsheet.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.create",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "metadataId",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId"
    ],
    "path": "sheets.spreadsheets.developerMetadata.get",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.developerMetadata.get(input: object): Promise<unknown>",
    "summary": "Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.developerMetadata.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.developerMetadata.search",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.developerMetadata.search(input: object): Promise<unknown>",
    "summary": "Returns all developer metadata matching the specified DataFilter. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.developerMetadata.search",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "excludeTablesInBandedRanges",
      "fields",
      "includeGridData",
      "prettyPrint",
      "quotaUser",
      "ranges",
      "spreadsheetId"
    ],
    "path": "sheets.spreadsheets.get",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.get(input: object): Promise<unknown>",
    "summary": "Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.getByDataFilter",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.getByDataFilter(input: object): Promise<unknown>",
    "summary": "Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data in one of two ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP. * Set the includeGridData parameter to `true`. If a field mask is set, the `includeGridData` parameter is ignored. For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.getByDataFilter",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "sheetId",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.sheets.copyTo",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.sheets.copyTo(input: object): Promise<unknown>",
    "summary": "Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.sheets.copyTo",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "includeValuesInResponse",
      "insertDataOption",
      "prettyPrint",
      "quotaUser",
      "range",
      "responseDateTimeRenderOption",
      "responseValueRenderOption",
      "spreadsheetId",
      "valueInputOption",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.append",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.append(input: object): Promise<unknown>",
    "summary": "Appends values to a spreadsheet. The input range is used to search for existing data and find a \"table\" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.append",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.batchClear",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchClear(input: object): Promise<unknown>",
    "summary": "Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchClear",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.batchClearByDataFilter",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchClearByDataFilter(input: object): Promise<unknown>",
    "summary": "Clears one or more ranges of values from a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc.) are kept.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchClearByDataFilter",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "dateTimeRenderOption",
      "fields",
      "majorDimension",
      "prettyPrint",
      "quotaUser",
      "ranges",
      "spreadsheetId",
      "valueRenderOption"
    ],
    "path": "sheets.spreadsheets.values.batchGet",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchGet(input: object): Promise<unknown>",
    "summary": "Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchGet",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.batchGetByDataFilter",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchGetByDataFilter(input: object): Promise<unknown>",
    "summary": "Returns one or more ranges of values that match the specified data filters. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchGetByDataFilter",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.batchUpdate",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchUpdate(input: object): Promise<unknown>",
    "summary": "Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchUpdate",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.batchUpdateByDataFilter",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchUpdateByDataFilter(input: object): Promise<unknown>",
    "summary": "Sets values in one or more ranges of a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.batchUpdateByDataFilter",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "range",
      "spreadsheetId",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.clear",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.clear(input: object): Promise<unknown>",
    "summary": "Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.clear",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "dateTimeRenderOption",
      "fields",
      "majorDimension",
      "prettyPrint",
      "quotaUser",
      "range",
      "spreadsheetId",
      "valueRenderOption"
    ],
    "path": "sheets.spreadsheets.values.get",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.get(input: object): Promise<unknown>",
    "summary": "Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.get",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "includeValuesInResponse",
      "prettyPrint",
      "quotaUser",
      "range",
      "responseDateTimeRenderOption",
      "responseValueRenderOption",
      "spreadsheetId",
      "valueInputOption",
      "requestBody"
    ],
    "path": "sheets.spreadsheets.values.update",
    "signature": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.update(input: object): Promise<unknown>",
    "summary": "Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.",
    "callPrefix": "ctx.applications[\"google-workspace\"].sheets().spreadsheets.values.update",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "presentationId",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "slides.presentations.batchUpdate",
    "signature": "ctx.applications[\"google-workspace\"].slides().presentations.batchUpdate(input: object): Promise<unknown>",
    "summary": "Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.",
    "callPrefix": "ctx.applications[\"google-workspace\"].slides().presentations.batchUpdate",
    "output": "unknown"
  },
  {
    "effect": "write",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "prettyPrint",
      "quotaUser",
      "requestBody"
    ],
    "path": "slides.presentations.create",
    "signature": "ctx.applications[\"google-workspace\"].slides().presentations.create(input?: object): Promise<unknown>",
    "summary": "Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.",
    "callPrefix": "ctx.applications[\"google-workspace\"].slides().presentations.create",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "presentationId",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "slides.presentations.get",
    "signature": "ctx.applications[\"google-workspace\"].slides().presentations.get(input: object): Promise<unknown>",
    "summary": "Gets the latest version of the specified presentation.",
    "callPrefix": "ctx.applications[\"google-workspace\"].slides().presentations.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageObjectId",
      "presentationId",
      "prettyPrint",
      "quotaUser"
    ],
    "path": "slides.presentations.pages.get",
    "signature": "ctx.applications[\"google-workspace\"].slides().presentations.pages.get(input: object): Promise<unknown>",
    "summary": "Gets the latest version of the specified page in the presentation.",
    "callPrefix": "ctx.applications[\"google-workspace\"].slides().presentations.pages.get",
    "output": "unknown"
  },
  {
    "effect": "read",
    "inputNames": [
      "$.xgafv",
      "alt",
      "fields",
      "pageObjectId",
      "presentationId",
      "prettyPrint",
      "quotaUser",
      "thumbnailProperties.mimeType",
      "thumbnailProperties.thumbnailSize"
    ],
    "path": "slides.presentations.pages.getThumbnail",
    "signature": "ctx.applications[\"google-workspace\"].slides().presentations.pages.getThumbnail(input: object): Promise<unknown>",
    "summary": "Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](https://developers.google.com/workspace/slides/limits) for quota purposes.",
    "callPrefix": "ctx.applications[\"google-workspace\"].slides().presentations.pages.getThumbnail",
    "output": "unknown"
  }
] as const satisfies readonly GoogleWorkspaceMember[];
