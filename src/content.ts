import BlackjackOptimal from "./assets/blackjack-optimal.png";
import Chaptr from "./assets/chaptr.png";
import EveryoneIsJohn from "./assets/everyone-is-john.png";
import PrivyAI from "./assets/privy-ai-screenshot.png";

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

export const JOBS: Experience[] = [
  {
    kind: "job",
    company: "Layer",
    position: "Software Engineering Intern",
    imgSrc:
      "https://framerusercontent.com/images/YgKuMbfGEe8wEtKnYPdvnYefG2w.png?scale-down-to=1024",
    timePeriod: "May. 2024 - Aug. 2024",
    skills: ["Angular", "Typescript", "Firebase", "ThreeJS", "Agile"],
  },
  {
    kind: "job",
    company: "Hudl",
    position: "Software Engineering Intern",
    imgSrc:
      "https://www.sinclairhille.com/sites/default/files/styles/banner-copy/public/hudl_landscape_foreground_website.jpg?itok=QqqSXpdZ",
    timePeriod: "May. 2023 - Aug. 2023",
    skills: ["C#", ".NET", "AWS", "Terraform", "SQL", "Agile"],
  },
  {
    kind: "job",
    company: "Kiewit",
    position: "Platform Operations Intern",
    imgSrc: "https://www.kiewit.com/wp-content/uploads/2021/02/KHQ-10.jpg",
    timePeriod: "May. 2022 - Aug. 2022",
    skills: ["Python", "Azure", "Ansible", "SQL"],
  },
  {
    kind: "job",
    company: "Privy AI",
    position: "Software Engineer/Project Manager",
    imgSrc: PrivyAI,
    timePeriod: "Aug. 2024 - Current",
    skills: ["React", "Typescript", "AWS", "Whisper", "Gen. AI"],
  },
  {
    kind: "job",
    company: "Cattle Kettle",
    position: "Software Engineer",
    imgSrc: "",
    timePeriod: "Aug. 2023 - May. 2024",
    skills: ["React", "Typescript", "Firebase", "fp-ts", "Hardware"],
  },
  {
    kind: "job",
    company: "UNL School of Computing",
    position: "SWE IV Teaching Assistant",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*tkBROuzOQU6wJLZY7EN9LA.jpeg",
    timePeriod: "Jan. 2024 - May. 2024",
    skills: ["System Design", "Testing", "Accessibility", "REST APIs"],
  },
];

export const PROJECTS: Experience[] = [
  {
    kind: "project",
    title: "Everyone is John",
    subtitle: "HackMidwest 2024 Contestant",
    imgSrc: EveryoneIsJohn,
    skills: ["ZoomSDK", "Gen. AI", "React", "Typescript", "WebSocket"],
  },
  {
    kind: "project",
    title: "Blackjack Optimal",
    subtitle: "CornHacks 2024 3rd Place Finalist",
    imgSrc: BlackjackOptimal,
    skills: ["Computer Vision", "Tensorflow", "React", "Typescript"],
  },
  {
    kind: "project",
    title: "Access Genie",
    subtitle: "CornHacks 2023 Business Track Champ",
    imgSrc: "",
    skills: ["React", "Typescript", "Firebase", "Material"],
  },
  {
    kind: "project",
    title: "Chaptr",
    imgSrc: Chaptr,
    skills: ["React", "Typescript", "Firebase", "fp-ts"],
  },
  {
    kind: "project",
    title: "BottomHat",
    imgSrc: "",
    skills: ["WebSocket", "React", "Typescript", "MongoDb", "JWT"],
  },
];
