// Generated from the checked-in Google Discovery documents. Do not edit.
// Regenerate with: vp run generate

export const GOOGLE_WORKSPACE_REQUESTS = {
  "drive": {
    "baseUrl": "https://www.googleapis.com/drive/v3/",
    "resources": {
      "methods": {},
      "resources": {
        "about": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "about",
              "request": false
            }
          },
          "resources": {}
        },
        "accessproposals": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "proposalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/accessproposals/{proposalId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/accessproposals",
              "request": false
            },
            "resolve": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "proposalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/accessproposals/{proposalId}:resolve",
              "request": true
            }
          },
          "resources": {}
        },
        "approvals": {
          "methods": {
            "approve": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}:approve",
              "request": true
            },
            "cancel": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}:cancel",
              "request": true
            },
            "comment": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}:comment",
              "request": true
            },
            "decline": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}:decline",
              "request": true
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals",
              "request": false
            },
            "reassign": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "approvalId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals/{approvalId}:reassign",
              "request": true
            },
            "start": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/approvals:start",
              "request": true
            }
          },
          "resources": {}
        },
        "apps": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "appId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "apps/{appId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "appFilterExtensions": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "appFilterMimeTypes": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "languageCode": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "apps",
              "request": false
            }
          },
          "resources": {}
        },
        "changes": {
          "methods": {
            "getStartPageToken": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "changes/startPageToken",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeCorpusRemovals": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeItemsFromAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeRemoved": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeTeamDriveItems": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "restrictToMyDrive": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spaces": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "changes",
              "request": false
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeCorpusRemovals": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeItemsFromAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeRemoved": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeTeamDriveItems": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "restrictToMyDrive": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spaces": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "changes/watch",
              "request": true
            }
          },
          "resources": {}
        },
        "channels": {
          "methods": {
            "stop": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "channels/stop",
              "request": true
            }
          },
          "resources": {}
        },
        "comments": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments/{commentId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments/{commentId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "startModifiedTime": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments/{commentId}",
              "request": true
            }
          },
          "resources": {}
        },
        "drives": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestId": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "drives",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "allowItemDeletion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives/{driveId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives/{driveId}",
              "request": false
            },
            "hide": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives/{driveId}/hide",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "q": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives",
              "request": false
            },
            "unhide": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives/{driveId}/unhide",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "drives/{driveId}",
              "request": true
            }
          },
          "resources": {}
        },
        "files": {
          "methods": {
            "copy": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "ignoreDefaultVisibility": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "keepRevisionForever": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ocrLanguage": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/copy",
              "request": true
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ignoreDefaultVisibility": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "keepRevisionForever": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ocrLanguage": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useContentAsIndexableText": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files",
              "request": true,
              "uploadPath": "/upload/drive/v3/files"
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}",
              "request": false
            },
            "download": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "mimeType": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "revisionId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/download",
              "request": false
            },
            "emptyTrash": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/trash",
              "request": false
            },
            "export": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "mimeType": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/export",
              "request": false
            },
            "generateCseToken": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "parent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/generateCseToken",
              "request": false
            },
            "generateIds": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "count": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "space": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "type": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/generateIds",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "acknowledgeAbuse": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "corpora": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "corpus": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "driveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeItemsFromAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeTeamDriveItems": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "orderBy": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "q": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spaces": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files",
              "request": false
            },
            "listLabels": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/listLabels",
              "request": false
            },
            "modifyLabels": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/modifyLabels",
              "request": true
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "addParents": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "keepRevisionForever": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ocrLanguage": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "removeParents": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useContentAsIndexableText": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}",
              "request": true,
              "uploadPath": "/upload/drive/v3/files/{fileId}"
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "acknowledgeAbuse": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeLabels": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/watch",
              "request": true
            }
          },
          "resources": {}
        },
        "operations": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "operations/{name}",
              "request": false
            }
          },
          "resources": {}
        },
        "permissions": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "emailMessage": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceExpansiveAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceSingleParent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "moveToNewOwnersRoot": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotificationEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "transferOwnership": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/permissions",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceExpansiveAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "permissionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/permissions/{permissionId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "permissionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/permissions/{permissionId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includePermissionsForView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/permissions",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "enforceExpansiveAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "permissionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "removeExpiration": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAllDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsTeamDrives": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "transferOwnership": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/permissions/{permissionId}",
              "request": true
            }
          },
          "resources": {}
        },
        "replies": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments/{commentId}/replies",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "replyId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "replyId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "includeDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/comments/{commentId}/replies",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "commentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "replyId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/comments/{commentId}/replies/{replyId}",
              "request": true
            }
          },
          "resources": {}
        },
        "revisions": {
          "methods": {
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "revisionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/revisions/{revisionId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "acknowledgeAbuse": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "revisionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/revisions/{revisionId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "files/{fileId}/revisions",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fileId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "revisionId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "files/{fileId}/revisions/{revisionId}",
              "request": true
            }
          },
          "resources": {}
        },
        "teamdrives": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestId": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "teamdrives",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "teamdrives/{teamDriveId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "teamdrives/{teamDriveId}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "q": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "teamdrives",
              "request": false
            },
            "update": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "teamDriveId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "useDomainAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "teamdrives/{teamDriveId}",
              "request": true
            }
          },
          "resources": {}
        }
      }
    }
  },
  "gmail": {
    "baseUrl": "https://gmail.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "users": {
          "methods": {
            "getProfile": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "gmail/v1/users/{userId}/profile",
              "request": false
            },
            "stop": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "gmail/v1/users/{userId}/stop",
              "request": false
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "gmail/v1/users/{userId}/watch",
              "request": true
            }
          },
          "resources": {
            "drafts": {
              "methods": {
                "create": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/drafts"
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts/{id}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "format": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts/{id}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "includeSpamTrash": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "maxResults": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "q": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts",
                  "request": false
                },
                "send": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts/send",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/drafts/send"
                },
                "update": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/drafts/{id}",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/drafts/{id}"
                }
              },
              "resources": {}
            },
            "history": {
              "methods": {
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "historyTypes": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "labelId": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "maxResults": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "startHistoryId": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/history",
                  "request": false
                }
              },
              "resources": {}
            },
            "labels": {
              "methods": {
                "create": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels",
                  "request": true
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels/{id}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels/{id}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels",
                  "request": false
                },
                "patch": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels/{id}",
                  "request": true
                },
                "update": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/labels/{id}",
                  "request": true
                }
              },
              "resources": {}
            },
            "messages": {
              "methods": {
                "batchDelete": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/batchDelete",
                  "request": true
                },
                "batchModify": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/batchModify",
                  "request": true
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/{id}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "format": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "metadataHeaders": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/{id}",
                  "request": false
                },
                "import": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "deleted": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "internalDateSource": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "neverMarkSpam": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "processForCalendar": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/import",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/messages/import"
                },
                "insert": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "deleted": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "internalDateSource": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/messages"
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "includeSpamTrash": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "labelIds": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "maxResults": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "q": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages",
                  "request": false
                },
                "modify": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/{id}/modify",
                  "request": true
                },
                "send": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/send",
                  "request": true,
                  "uploadPath": "/upload/gmail/v1/users/{userId}/messages/send"
                },
                "trash": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/{id}/trash",
                  "request": false
                },
                "untrash": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/messages/{id}/untrash",
                  "request": false
                }
              },
              "resources": {
                "attachments": {
                  "methods": {
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "id": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "messageId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}",
                      "request": false
                    }
                  },
                  "resources": {}
                }
              }
            },
            "settings": {
              "methods": {
                "getAutoForwarding": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/autoForwarding",
                  "request": false
                },
                "getImap": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/imap",
                  "request": false
                },
                "getLanguage": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/language",
                  "request": false
                },
                "getPop": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/pop",
                  "request": false
                },
                "getVacation": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/vacation",
                  "request": false
                },
                "updateAutoForwarding": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/autoForwarding",
                  "request": true
                },
                "updateImap": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/imap",
                  "request": true
                },
                "updateLanguage": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/language",
                  "request": true
                },
                "updatePop": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/pop",
                  "request": true
                },
                "updateVacation": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/settings/vacation",
                  "request": true
                }
              },
              "resources": {
                "cse": {
                  "methods": {},
                  "resources": {
                    "identities": {
                      "methods": {
                        "create": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/identities",
                          "request": true
                        },
                        "delete": {
                          "httpMethod": "DELETE",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "cseEmailAddress": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}",
                          "request": false
                        },
                        "get": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "cseEmailAddress": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}",
                          "request": false
                        },
                        "list": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "pageSize": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "pageToken": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/identities",
                          "request": false
                        },
                        "patch": {
                          "httpMethod": "PATCH",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "emailAddress": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}",
                          "request": true
                        }
                      },
                      "resources": {}
                    },
                    "keypairs": {
                      "methods": {
                        "create": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "chainValidation": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs",
                          "request": true
                        },
                        "disable": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "keyPairId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable",
                          "request": true
                        },
                        "enable": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "keyPairId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable",
                          "request": true
                        },
                        "get": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "keyPairId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}",
                          "request": false
                        },
                        "list": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "pageSize": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "pageToken": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs",
                          "request": false
                        },
                        "obliterate": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "keyPairId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate",
                          "request": true
                        }
                      },
                      "resources": {}
                    }
                  }
                },
                "delegates": {
                  "methods": {
                    "create": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/delegates",
                      "request": true
                    },
                    "delete": {
                      "httpMethod": "DELETE",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "delegateEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/delegates/{delegateEmail}",
                      "request": false
                    },
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "delegateEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/delegates/{delegateEmail}",
                      "request": false
                    },
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/delegates",
                      "request": false
                    }
                  },
                  "resources": {}
                },
                "filters": {
                  "methods": {
                    "create": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/filters",
                      "request": true
                    },
                    "delete": {
                      "httpMethod": "DELETE",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "id": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/filters/{id}",
                      "request": false
                    },
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "id": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/filters/{id}",
                      "request": false
                    },
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/filters",
                      "request": false
                    }
                  },
                  "resources": {}
                },
                "forwardingAddresses": {
                  "methods": {
                    "create": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/forwardingAddresses",
                      "request": true
                    },
                    "delete": {
                      "httpMethod": "DELETE",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "forwardingEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}",
                      "request": false
                    },
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "forwardingEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}",
                      "request": false
                    },
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/forwardingAddresses",
                      "request": false
                    }
                  },
                  "resources": {}
                },
                "sendAs": {
                  "methods": {
                    "create": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs",
                      "request": true
                    },
                    "delete": {
                      "httpMethod": "DELETE",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "sendAsEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
                      "request": false
                    },
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "sendAsEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
                      "request": false
                    },
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs",
                      "request": false
                    },
                    "patch": {
                      "httpMethod": "PATCH",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "sendAsEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
                      "request": true
                    },
                    "update": {
                      "httpMethod": "PUT",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "sendAsEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
                      "request": true
                    },
                    "verify": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "sendAsEmail": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "userId": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        }
                      },
                      "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify",
                      "request": false
                    }
                  },
                  "resources": {
                    "smimeInfo": {
                      "methods": {
                        "delete": {
                          "httpMethod": "DELETE",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "id": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "sendAsEmail": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}",
                          "request": false
                        },
                        "get": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "id": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "sendAsEmail": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}",
                          "request": false
                        },
                        "insert": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "sendAsEmail": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo",
                          "request": true
                        },
                        "list": {
                          "httpMethod": "GET",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "sendAsEmail": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo",
                          "request": false
                        },
                        "setDefault": {
                          "httpMethod": "POST",
                          "parameters": {
                            "$.xgafv": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "alt": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "fields": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "id": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "prettyPrint": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "quotaUser": {
                              "location": "query",
                              "repeated": false,
                              "required": false
                            },
                            "sendAsEmail": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            },
                            "userId": {
                              "location": "path",
                              "repeated": false,
                              "required": true
                            }
                          },
                          "path": "gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault",
                          "request": false
                        }
                      },
                      "resources": {}
                    }
                  }
                }
              }
            },
            "threads": {
              "methods": {
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads/{id}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "format": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "metadataHeaders": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads/{id}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "includeSpamTrash": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "labelIds": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "maxResults": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "q": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads",
                  "request": false
                },
                "modify": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads/{id}/modify",
                  "request": true
                },
                "trash": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads/{id}/trash",
                  "request": false
                },
                "untrash": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "id": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "userId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "gmail/v1/users/{userId}/threads/{id}/untrash",
                  "request": false
                }
              },
              "resources": {}
            }
          }
        }
      }
    }
  },
  "calendar": {
    "baseUrl": "https://www.googleapis.com/calendar/v3/",
    "resources": {
      "methods": {},
      "resources": {
        "acl": {
          "methods": {
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ruleId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl/{ruleId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ruleId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl/{ruleId}",
              "request": false
            },
            "insert": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl",
              "request": true
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl",
              "request": false
            },
            "patch": {
              "httpMethod": "PATCH",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ruleId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl/{ruleId}",
              "request": true
            },
            "update": {
              "httpMethod": "PUT",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ruleId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl/{ruleId}",
              "request": true
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/acl/watch",
              "request": true
            }
          },
          "resources": {}
        },
        "calendarList": {
          "methods": {
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList/{calendarId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList/{calendarId}",
              "request": false
            },
            "insert": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "colorRgbFormat": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList",
              "request": true
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "minAccessRole": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showHidden": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showOwnOrganizationOnly": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList",
              "request": false
            },
            "patch": {
              "httpMethod": "PATCH",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "colorRgbFormat": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList/{calendarId}",
              "request": true
            },
            "update": {
              "httpMethod": "PUT",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "colorRgbFormat": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList/{calendarId}",
              "request": true
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "minAccessRole": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showHidden": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showOwnOrganizationOnly": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/calendarList/watch",
              "request": true
            }
          },
          "resources": {}
        },
        "calendars": {
          "methods": {
            "clear": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/clear",
              "request": false
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}",
              "request": false
            },
            "insert": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars",
              "request": true
            },
            "patch": {
              "httpMethod": "PATCH",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}",
              "request": true
            },
            "transferOwnership": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "newDataOwner": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/transferOwnership",
              "request": false
            },
            "update": {
              "httpMethod": "PUT",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}",
              "request": true
            }
          },
          "resources": {}
        },
        "channels": {
          "methods": {
            "stop": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "channels/stop",
              "request": true
            }
          },
          "resources": {}
        },
        "colors": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "colors",
              "request": false
            }
          },
          "resources": {}
        },
        "events": {
          "methods": {
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeZone": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}",
              "request": false
            },
            "import": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "conferenceDataVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "eventLabelVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAttachments": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/import",
              "request": true
            },
            "insert": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "conferenceDataVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "eventLabelVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAttachments": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events",
              "request": true
            },
            "instances": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "originalStart": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMax": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMin": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeZone": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}/instances",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventTypes": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "iCalUID": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "orderBy": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "privateExtendedProperty": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "q": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sharedExtendedProperty": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showHiddenInvitations": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "singleEvents": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMax": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMin": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeZone": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "updatedMin": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events",
              "request": false
            },
            "move": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "destination": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}/move",
              "request": false
            },
            "patch": {
              "httpMethod": "PATCH",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "conferenceDataVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventLabelVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAttachments": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}",
              "request": true
            },
            "quickAdd": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "text": {
                  "location": "query",
                  "repeated": false,
                  "required": true
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/quickAdd",
              "request": false
            },
            "update": {
              "httpMethod": "PUT",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "conferenceDataVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "eventId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventLabelVersion": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendNotifications": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sendUpdates": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "supportsAttachments": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/{eventId}",
              "request": true
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alwaysIncludeEmail": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "calendarId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "eventTypes": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "iCalUID": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxAttendees": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "orderBy": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "privateExtendedProperty": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "q": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sharedExtendedProperty": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "showDeleted": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "showHiddenInvitations": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "singleEvents": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMax": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeMin": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "timeZone": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "updatedMin": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "calendars/{calendarId}/events/watch",
              "request": true
            }
          },
          "resources": {}
        },
        "freebusy": {
          "methods": {
            "query": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "freeBusy",
              "request": true
            }
          },
          "resources": {}
        },
        "settings": {
          "methods": {
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "setting": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/settings/{setting}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/settings",
              "request": false
            },
            "watch": {
              "httpMethod": "POST",
              "parameters": {
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxResults": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "userIp": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "users/me/settings/watch",
              "request": true
            }
          },
          "resources": {}
        }
      }
    }
  },
  "docs": {
    "baseUrl": "https://docs.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "documents": {
          "methods": {
            "batchUpdate": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "documentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/documents/{documentId}:batchUpdate",
              "request": true
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/documents",
              "request": true
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "documentId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeTabsContent": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "suggestionsViewMode": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/documents/{documentId}",
              "request": false
            }
          },
          "resources": {}
        }
      }
    }
  },
  "sheets": {
    "baseUrl": "https://sheets.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "spreadsheets": {
          "methods": {
            "batchUpdate": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spreadsheetId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v4/spreadsheets/{spreadsheetId}:batchUpdate",
              "request": true
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v4/spreadsheets",
              "request": true
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "excludeTablesInBandedRanges": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "includeGridData": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "ranges": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "spreadsheetId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v4/spreadsheets/{spreadsheetId}",
              "request": false
            },
            "getByDataFilter": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spreadsheetId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v4/spreadsheets/{spreadsheetId}:getByDataFilter",
              "request": true
            }
          },
          "resources": {
            "developerMetadata": {
              "methods": {
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "metadataId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}",
                  "request": false
                },
                "search": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/developerMetadata:search",
                  "request": true
                }
              },
              "resources": {}
            },
            "sheets": {
              "methods": {
                "copyTo": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "sheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo",
                  "request": true
                }
              },
              "resources": {}
            },
            "values": {
              "methods": {
                "append": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "includeValuesInResponse": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "insertDataOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "range": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "responseDateTimeRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "responseValueRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "valueInputOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values/{range}:append",
                  "request": true
                },
                "batchClear": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchClear",
                  "request": true
                },
                "batchClearByDataFilter": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter",
                  "request": true
                },
                "batchGet": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "dateTimeRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "majorDimension": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "ranges": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "valueRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchGet",
                  "request": false
                },
                "batchGetByDataFilter": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter",
                  "request": true
                },
                "batchUpdate": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchUpdate",
                  "request": true
                },
                "batchUpdateByDataFilter": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter",
                  "request": true
                },
                "clear": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "range": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values/{range}:clear",
                  "request": true
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "dateTimeRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "majorDimension": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "range": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "valueRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values/{range}",
                  "request": false
                },
                "update": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "includeValuesInResponse": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "range": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "responseDateTimeRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "responseValueRenderOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "spreadsheetId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "valueInputOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v4/spreadsheets/{spreadsheetId}/values/{range}",
                  "request": true
                }
              },
              "resources": {}
            }
          }
        }
      }
    }
  },
  "slides": {
    "baseUrl": "https://slides.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "presentations": {
          "methods": {
            "batchUpdate": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "presentationId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/presentations/{presentationId}:batchUpdate",
              "request": true
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/presentations",
              "request": true
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "presentationId": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/presentations/{+presentationId}",
              "request": false
            }
          },
          "resources": {
            "pages": {
              "methods": {
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageObjectId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "presentationId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/presentations/{presentationId}/pages/{pageObjectId}",
                  "request": false
                },
                "getThumbnail": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageObjectId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "presentationId": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "thumbnailProperties.mimeType": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "thumbnailProperties.thumbnailSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail",
                  "request": false
                }
              },
              "resources": {}
            }
          }
        }
      }
    }
  },
  "chat": {
    "baseUrl": "https://chat.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "customEmojis": {
          "methods": {
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/customEmojis",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "filter": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/customEmojis",
              "request": false
            }
          },
          "resources": {}
        },
        "media": {
          "methods": {
            "download": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/media/{+resourceName}",
              "request": false
            },
            "upload": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "parent": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+parent}/attachments:upload",
              "request": true,
              "uploadPath": "/upload/v1/{+parent}/attachments:upload"
            }
          },
          "resources": {}
        },
        "spaces": {
          "methods": {
            "completeImport": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}:completeImport",
              "request": true
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestId": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/spaces",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}",
              "request": false
            },
            "findDirectMessage": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/spaces:findDirectMessage",
              "request": false
            },
            "findGroupChats": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "spaceView": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "users": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/spaces:findGroupChats",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "filter": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/spaces",
              "request": false
            },
            "patch": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "name": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "updateMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+name}",
              "request": true
            },
            "search": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "orderBy": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "query": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "useAdminAccess": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/spaces:search",
              "request": false
            },
            "setup": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/spaces:setup",
              "request": true
            }
          },
          "resources": {
            "members": {
              "methods": {
                "create": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "useAdminAccess": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/members",
                  "request": true
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "useAdminAccess": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "useAdminAccess": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "filter": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "showGroups": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "showInvited": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "useAdminAccess": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/members",
                  "request": false
                },
                "patch": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "useAdminAccess": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                }
              },
              "resources": {}
            },
            "messages": {
              "methods": {
                "create": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "createMessageNotificationOptions.notificationType": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "messageId": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "messageReplyOption": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "requestId": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "threadKey": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/messages",
                  "request": true
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "force": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "markupSyntax": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "filter": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "markupSyntax": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "orderBy": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "showDeleted": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/messages",
                  "request": false
                },
                "patch": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "allowMissing": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                },
                "search": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/messages:search",
                  "request": true
                },
                "update": {
                  "httpMethod": "PUT",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "allowMissing": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                }
              },
              "resources": {
                "attachments": {
                  "methods": {
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}",
                      "request": false
                    }
                  },
                  "resources": {}
                },
                "reactions": {
                  "methods": {
                    "create": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "parent": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+parent}/reactions",
                      "request": true
                    },
                    "delete": {
                      "httpMethod": "DELETE",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}",
                      "request": false
                    },
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "filter": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "pageSize": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "pageToken": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "parent": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+parent}/reactions",
                      "request": false
                    }
                  },
                  "resources": {}
                }
              }
            },
            "spaceEvents": {
              "methods": {
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "filter": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/spaceEvents",
                  "request": false
                }
              },
              "resources": {}
            }
          }
        },
        "users": {
          "methods": {},
          "resources": {
            "availability": {
              "methods": {
                "get": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "markAsActive": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}:markAsActive",
                  "request": true
                },
                "markAsAway": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}:markAsAway",
                  "request": true
                },
                "markAsDoNotDisturb": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}:markAsDoNotDisturb",
                  "request": true
                },
                "patch": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                }
              },
              "resources": {}
            },
            "sections": {
              "methods": {
                "create": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/sections",
                  "request": true
                },
                "delete": {
                  "httpMethod": "DELETE",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "parent": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+parent}/sections",
                  "request": false
                },
                "patch": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                },
                "position": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}:position",
                  "request": true
                }
              },
              "resources": {
                "items": {
                  "methods": {
                    "list": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "filter": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "pageSize": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "pageToken": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "parent": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+parent}/items",
                      "request": false
                    },
                    "move": {
                      "httpMethod": "POST",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}:move",
                      "request": true
                    }
                  },
                  "resources": {}
                }
              }
            },
            "spaces": {
              "methods": {
                "getSpaceReadState": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": false
                },
                "updateSpaceReadState": {
                  "httpMethod": "PATCH",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "name": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "updateMask": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+name}",
                  "request": true
                }
              },
              "resources": {
                "spaceNotificationSetting": {
                  "methods": {
                    "get": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}",
                      "request": false
                    },
                    "patch": {
                      "httpMethod": "PATCH",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "updateMask": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}",
                      "request": true
                    }
                  },
                  "resources": {}
                },
                "threads": {
                  "methods": {
                    "getThreadReadState": {
                      "httpMethod": "GET",
                      "parameters": {
                        "$.xgafv": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "alt": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "fields": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "name": {
                          "location": "path",
                          "repeated": false,
                          "required": true
                        },
                        "prettyPrint": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        },
                        "quotaUser": {
                          "location": "query",
                          "repeated": false,
                          "required": false
                        }
                      },
                      "path": "v1/{+name}",
                      "request": false
                    }
                  },
                  "resources": {}
                }
              }
            }
          }
        }
      }
    }
  },
  "people": {
    "baseUrl": "https://people.googleapis.com/",
    "resources": {
      "methods": {},
      "resources": {
        "contactGroups": {
          "methods": {
            "batchGet": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "groupFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxMembers": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceNames": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/contactGroups:batchGet",
              "request": false
            },
            "create": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/contactGroups",
              "request": true
            },
            "delete": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "deleteContacts": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "groupFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "maxMembers": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}",
              "request": false
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "groupFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/contactGroups",
              "request": false
            },
            "update": {
              "httpMethod": "PUT",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}",
              "request": true
            }
          },
          "resources": {
            "members": {
              "methods": {
                "modify": {
                  "httpMethod": "POST",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "resourceName": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    }
                  },
                  "path": "v1/{+resourceName}/members:modify",
                  "request": true
                }
              },
              "resources": {}
            }
          }
        },
        "otherContacts": {
          "methods": {
            "copyOtherContactToMyContactsGroup": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}:copyOtherContactToMyContactsGroup",
              "request": true
            },
            "list": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "readMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestSyncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/otherContacts",
              "request": false
            },
            "search": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "query": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "readMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/otherContacts:search",
              "request": false
            }
          },
          "resources": {}
        },
        "people": {
          "methods": {
            "batchCreateContacts": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/people:batchCreateContacts",
              "request": true
            },
            "batchDeleteContacts": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/people:batchDeleteContacts",
              "request": true
            },
            "batchUpdateContacts": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/people:batchUpdateContacts",
              "request": true
            },
            "createContact": {
              "httpMethod": "POST",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "personFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/people:createContact",
              "request": true
            },
            "deleteContact": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}:deleteContact",
              "request": false
            },
            "deleteContactPhoto": {
              "httpMethod": "DELETE",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "personFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/{+resourceName}:deleteContactPhoto",
              "request": false
            },
            "get": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "personFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestMask.includeField": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/{+resourceName}",
              "request": false
            },
            "getBatchGet": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "personFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestMask.includeField": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceNames": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/people:batchGet",
              "request": false
            },
            "listDirectoryPeople": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "mergeSources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "readMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "requestSyncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "syncToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/people:listDirectoryPeople",
              "request": false
            },
            "searchContacts": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "query": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "readMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/people:searchContacts",
              "request": false
            },
            "searchDirectoryPeople": {
              "httpMethod": "GET",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "mergeSources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "pageSize": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "pageToken": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "query": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "readMask": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                }
              },
              "path": "v1/people:searchDirectoryPeople",
              "request": false
            },
            "updateContact": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "personFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                },
                "sources": {
                  "location": "query",
                  "repeated": true,
                  "required": false
                },
                "updatePersonFields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                }
              },
              "path": "v1/{+resourceName}:updateContact",
              "request": true
            },
            "updateContactPhoto": {
              "httpMethod": "PATCH",
              "parameters": {
                "$.xgafv": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "alt": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "fields": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "prettyPrint": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "quotaUser": {
                  "location": "query",
                  "repeated": false,
                  "required": false
                },
                "resourceName": {
                  "location": "path",
                  "repeated": false,
                  "required": true
                }
              },
              "path": "v1/{+resourceName}:updateContactPhoto",
              "request": true
            }
          },
          "resources": {
            "connections": {
              "methods": {
                "list": {
                  "httpMethod": "GET",
                  "parameters": {
                    "$.xgafv": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "alt": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "fields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageSize": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "pageToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "personFields": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "prettyPrint": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "quotaUser": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "requestMask.includeField": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "requestSyncToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "resourceName": {
                      "location": "path",
                      "repeated": false,
                      "required": true
                    },
                    "sortOrder": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    },
                    "sources": {
                      "location": "query",
                      "repeated": true,
                      "required": false
                    },
                    "syncToken": {
                      "location": "query",
                      "repeated": false,
                      "required": false
                    }
                  },
                  "path": "v1/{+resourceName}/connections",
                  "request": false
                }
              },
              "resources": {}
            }
          }
        }
      }
    }
  }
} as const;
