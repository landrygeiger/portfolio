import BlackjackOptimal from "./assets/blackjack-optimal.png";
import Chaptr from "./assets/chaptr.png";
import EveryoneIsJohn from "./assets/everyone-is-john.png";
import PrivyAI from "./assets/privy-ai-screenshot.png";
import CattleKettle from "./assets/cattle-kettle.png";

export type Experience =
  | {
      kind: "job";
      company: string;
      position: string;
      timePeriod: string;
      skills: string[];
      imgSrc: string;
      contributions: string[];
      overview: string;
    }
  | {
      kind: "project";
      title: string;
      subtitle?: string;
      skills: string[];
      imgSrc: string;
      contributions: string[];
      overview: string;
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
    contributions: [
      "Shipped a highly-demanded model thumbnail feature that utilized serverless 3D model rendering, cloud object storage, and thoughtful UI design to support a system containing +11,000,000 viewable objects. Leveraged functional programming concepts to achieve end-to-end type safety and reduce runtime failures.",
      "Spearheaded a migration to “strict” Typescript compilation that improved runtime fidelity and decreased typing errors by 20% in 2 months. Researched tooling and enacted a strategy using Betterer to incrementally adopt strict compilation across the codebase.",
      "Devised discriminated union type model to accurately represent core objects in Layer’s domain. Followed functional practices to ensure that the value set of the model consisted solely of achievable states.",
    ],
    overview:
      "At Layer, I worked within an agile team of 4 software engineers to develop Layer's flagship product: a multi-platform application that marries building data with 3D models or blueprints.",
  },
  {
    kind: "job",
    company: "Hudl",
    position: "Software Engineering Intern",
    imgSrc:
      // "https://www.sinclairhille.com/sites/default/files/styles/banner-copy/public/hudl_landscape_foreground_website.jpg?itok=QqqSXpdZ",
      "https://media.glassdoor.com/l/4f/d6/f6/3d/hudl-hq.jpg?signature=4e3020ad4e40bf3c7f42d6e7b2cc7ca1cec2a0dde6486e9b67485f2cb906d2e5",
    timePeriod: "May. 2023 - Aug. 2023",
    skills: ["C#", ".NET", "AWS", "Terraform", "SQL", "Agile"],
    contributions: [
      "Contributed to a $765,000 cost-saving initiative by increasing cost efficiency of AWS S3 tagging jobs through batch write utilization instead of individual object modifications.",
      "Transitioned a CLI video diagnostics tool to a cloud AWS Lambda format to increase speed by over 100% through process parallelization, enhance output consistency using uniform execution environments, and improve accessibility to non-engineers via a web app interface.",
      "Leveraged AWS CloudWatch metrics to design and deploy a composite alarm system, analyzing error rates, user engagement with on-demand video content, and request latency for systems averaging 100,000+ daily requests.",
    ],
    overview:
      "During my time at Hudl, I had the privilege to work within an agile team of 9 that develops and maintains Hudl's video encoding pipeline. Through this experience, I worked directly with code responsible for encoding, storing, and serving petabytes worth of video.",
  },
  {
    kind: "job",
    company: "Kiewit",
    position: "Platform Operations Intern",
    imgSrc: "https://www.kiewit.com/wp-content/uploads/2021/02/KHQ-10.jpg",
    timePeriod: "May. 2022 - Aug. 2022",
    skills: ["Python", "Azure", "Ansible", "SQL"],
    contributions: [
      "Developed a Python algorithm to identify irrelevant software across 1,000+ servers. Expanded algorithm to detect workstations consistently running out of date software.",
      "Designed and implemented an Ansible error-management system to catch critical errors that were originally missed during playbook execution.",
    ],
    overview:
      "Working on Kiewit's Platform Operations team, I gained first hand experience writing infrastructure as code, exploring techniques to manage and orchestrate over 1,000 business-critical server instances, and apply data science skills to gleam valuable cost-saving insights over server data.",
  },
  {
    kind: "job",
    company: "Privy AI",
    position: "Software Engineer/Product Manager",
    imgSrc: PrivyAI,
    timePeriod: "Aug. 2024 - Current",
    skills: ["React", "Typescript", "AWS", "Whisper", "Gen. AI"],
    contributions: [
      "Developed a web application to record patient-provider interactions, produce a transcript, and use AI to generate a session summary and appropriate billing codes.",
      "Led agile ceremonies to groom backlog, point + prioritize stories, and reflect on the previous iteration. Triaged customer interviews into actionable user stories.",
      "Oversaw 3 student engineers by leading code review, establishing development standards, and empowering team members to take ownership in areas of interest.",
    ],
    overview:
      "Privy AI is a student-led, med-tech start up saving time for physical therapists by leveraging generative AI to automate the note taking process. As one of two team leads overseeing 3 student engineers, I spearheaded project management and development efforts to iterate on customer feedback, meet stakeholder deadlines, and deliver a valuable product to physical therapists.",
  },
  {
    kind: "job",
    company: "UNL School of Computing",
    position: "SWE IV Teaching Assistant",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*tkBROuzOQU6wJLZY7EN9LA.jpeg",
    timePeriod: "Jan. 2024 - May. 2024",
    skills: ["System Design", "Testing", "Accessibility", "REST APIs"],
    contributions: [
      "Led office hours to assist students with their software projects. Guided students through trouble shooting, debugging, and engineering best practices.",
      "Created a new lab assignment that introduces students to front end testing by leading them through a sample project using React Testing Library.",
      "Graded student assignments and provided constructive feedback to encourage and help them grow as software engineers.",
    ],
    overview:
      'At the Jeffrey S. Raikes School, I served as a teaching assistant for Software Engineering IV. Through this "mini-capstone" class, students embark on a semester long project where they conduct user interviews and complete two development iterations to deliver a software product based on customer specifications. In this way, students gain valuable experience with agile development and long-term collaboration on a software project.',
  },
  {
    kind: "job",
    company: "Cattle Kettle",
    position: "Software Engineer",
    imgSrc: CattleKettle,
    timePeriod: "Aug. 2023 - May. 2024",
    skills: ["React", "Typescript", "Firebase", "fp-ts", "Hardware"],
    contributions: [
      "Developed a full-stack web application for a water tank monitoring device that saves ranchers up to $50,000 in gas annually.",
      "Applied Agile processes to develop iteratively on a team of 5 alongside stakeholder feedback. Managed backlog, story pointing, and developer sprint planning.",
    ],
    overview:
      "Cattle Kettle is a Lincoln-based, ag-tech startup working to save ranchers time and money by providing remote water tank and herd monitoring. As an engineer on a team of 5, I collaborated to develop the Cattle Kettle platform: a web app that interfaces with custom hardware to visualize live water tank data and provide insights to ranchers.",
  },
];

export const PROJECTS: Experience[] = [
  {
    kind: "project",
    title: "Everyone is John",
    subtitle: "HackMidwest 2024 Contestant",
    imgSrc: EveryoneIsJohn,
    skills: ["ZoomSDK", "Gen. AI", "React", "Typescript", "WebSocket"],
    contributions: [],
    overview: "",
  },
  {
    kind: "project",
    title: "Blackjack Optimal",
    subtitle: "CornHacks 2024 3rd Place Finalist",
    imgSrc: BlackjackOptimal,
    skills: ["Computer Vision", "Tensorflow", "React", "Typescript"],
    contributions: [
      "Built a web app with 4 other developers that takes video feed from the user and detects the current state of a Blackjack game by using a custom-trained computer vision model.",
      "Implemented algorithm to suggest the most statistically optimal move for each player to make based on blackjack-specific game theory.",
    ],
    overview: "",
  },
  {
    kind: "project",
    title: "Access Genie",
    subtitle: "CornHacks 2023 Business Track Champ",
    imgSrc: "",
    skills: ["React", "Typescript", "Firebase", "Material"],
    contributions: [],
    overview: "",
  },
  {
    kind: "project",
    title: "Chaptr",
    imgSrc: Chaptr,
    skills: ["React", "Typescript", "Firebase", "fp-ts"],
    contributions: [],
    overview: "",
  },
  {
    kind: "project",
    title: "BottomHat",
    imgSrc: "",
    skills: ["WebSocket", "React", "Typescript", "MongoDb", "JWT"],
    contributions: [],
    overview: "",
  },
];
