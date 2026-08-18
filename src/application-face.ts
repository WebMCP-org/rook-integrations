export type ApplicationCard = {
  readonly availability: string;
  readonly id: string;
  readonly name: string;
  readonly summary: string;
};

export type ApplicationMember = {
  readonly callPrefix: string;
  readonly effect: "authorization" | "read" | "write";
  readonly inputNames: readonly string[];
  readonly output: string;
  readonly path: string;
  readonly signature: string;
  readonly summary: string;
};

export type CuratedApplicationFace = {
  readonly card: ApplicationCard;
  readonly members: readonly ApplicationMember[];
  readonly relatedSkills: readonly string[];
};
