import { FC } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import EveryoneIsJohn from "../assets/everyone-is-john.png";
import BlackjackOptimal from "../assets/blackjack-optimal.png";
import Chaptr from "../assets/chaptr.png";

const projects = [
  {
    title: "Everyone is John",
    position: "HackMidwest 2024 Contestant",
    imgSrc: EveryoneIsJohn,
  },
  {
    title: "Blackjack Optimal",
    position: "CornHacks 2024 3rd Place Finalist",
    imgSrc: BlackjackOptimal,
  },
  {
    title: "Access Genie",
    position: "CornHacks 2023 Business Track Champion",
    imgSrc: "",
  },
  {
    title: "Chaptr",
    imgSrc: Chaptr,
  },
  {
    title: "BottomHat",
    imgSrc: "",
  },
];

const Projects: FC = () => {
  return (
    <div>
      <h1 className="font-lemon text-white text-3xl lg:text-4xl">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((experience) => (
          <ExperienceItem
            key={experience.title + experience.position}
            company={experience.title}
            position={experience.position}
            imgSrc={experience.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
