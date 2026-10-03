import { z } from "zod";
//#region src/index.d.ts
export type Microsoft365Json = z.infer<ReturnType<typeof z.json>>;
export interface Microsoft365Operation {
  name: string;
  description: string;
  inputSchema: z.core.JSONSchema.BaseSchema;
  readOnly: boolean;
  invoke(input: unknown): Promise<Microsoft365Json>;
}
export interface Microsoft365Document {
  host: "Excel" | "Word" | "PowerPoint";
  url: string;
  platform: string;
}
/** Binds native operations only inside a real, initialized Office add-in context. */
export declare function createMicrosoft365Operations(): Promise<Microsoft365Operation[] | undefined>;
//#endregion