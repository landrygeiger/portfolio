export type Experience =
  | {
      kind: "job";
      company: string;
      title: string;
      timePeriod: string;
      skills: string[];
    }
  | {
      kind: "project";
      title: string;
      subtitle: string;
      skills: string[];
    };
