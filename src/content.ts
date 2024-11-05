export type Experience =
  | {
      kind: "job";
      company: string;
      position: string;
      timePeriod: string;
      skills: string[];
      imgSrc: string;
    }
  | {
      kind: "project";
      title: string;
      subtitle?: string;
      skills: string[];
      imgSrc: string;
    };

export const isJob = (
  experience: Experience
): experience is Extract<Experience, { kind: "job" }> =>
  experience.kind === "job";
