import { FC } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import EveryoneIsJohn from "../assets/everyone-is-john.png";
import BlackjackOptimal from "../assets/blackjack-optimal.png";
import Chaptr from "../assets/chaptr.png";
import { Experience } from "../content";

const projects: Experience[] = [
  {
    kind: "project",
    title: "Everyone is John",
    subtitle: "HackMidwest 2024 Contestant",
    imgSrc: EveryoneIsJohn,
    skills: [
      "Zoom Video SDK",
      "Generative AI",
      "React",
      "Typescript",
      "WebSocket",
    ],
  },
  {
    kind: "project",
    title: "Blackjack Optimal",
    subtitle: "CornHacks 2024 3rd Place Finalist",
    imgSrc: BlackjackOptimal,
    skills: [
      "Computer Vision",
      "Tensorflow",
      "React",
      "Typescript",
      "WebSocket",
    ],
  },
  {
    kind: "project",
    title: "Access Genie",
    subtitle: "CornHacks 2023 Business Track Champion",
    imgSrc: "",
    skills: ["React", "Typescript", "Firebase", "Cloud Functions"],
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
    skills: ["React", "Typescript", "WebSocket", "MongoDb", "WebSocket"],
  },
];

const Projects: FC = () => {
  return (
    <div>
      <h1 className="font-lemon text-white text-3xl lg:text-4xl">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {projects.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
