import { FC } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import PrivyAI from "../assets/privy-ai-screenshot.png";

const experiences = [
  {
    company: "Layer",
    position: "Software Engineering Intern",
    imgSrc:
      "https://framerusercontent.com/images/YgKuMbfGEe8wEtKnYPdvnYefG2w.png?scale-down-to=1024",
    timePeriod: "May. 2024 - Aug. 2024",
    skills: ["Angular", "Typescript", "Firebase", "Three.js", "Agile"],
  },
  {
    company: "Hudl",
    position: "Software Engineering Intern",
    imgSrc:
      "https://www.sinclairhille.com/sites/default/files/styles/banner-copy/public/hudl_landscape_foreground_website.jpg?itok=QqqSXpdZ",
    timePeriod: "May. 2023 - Aug. 2023",
    skills: ["C#", ".NET", "AWS", "Terraform", "SQL", "Agile"],
  },
  {
    company: "Kiewit",
    position: "Platform Operations Intern",
    imgSrc: "https://www.kiewit.com/wp-content/uploads/2021/02/KHQ-10.jpg",
    timePeriod: "May. 2022 - Aug. 2022",
    skills: ["Python", "Azure", "Ansible", "SQL"],
  },
  {
    company: "Privy AI",
    position: "Software Engineer/Project Manager",
    imgSrc: PrivyAI,
    timePeriod: "Aug. 2024 - Current",
    skills: ["React", "Typescript", "AWS", "LLMs", "Whisper"],
  },
  {
    company: "Cattle Kettle",
    position: "Software Engineer",
    imgSrc: "",
    timePeriod: "Aug. 2023 - May. 2024",
    skills: ["React", "Typescript", "Firebase", "fp-ts", "Hardware"],
  },
  {
    company: "UNL School of Computing",
    position: "SWE IV Teaching Assistant",
    imgSrc:
      "https://miro.medium.com/v2/resize:fit:1400/1*tkBROuzOQU6wJLZY7EN9LA.jpeg",
    timePeriod: "Jan. 2024 - May. 2024",
    skills: ["System Design", "Testing", "Accessibility", "APIs"],
  },
];

const Experience: FC = () => {
  return (
    <div>
      <h1 className="font-lemon text-white text-3xl lg:text-4xl">Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.company + experience.position}
            company={experience.company}
            position={experience.position}
            imgSrc={experience.imgSrc}
            timePeriod={experience.timePeriod}
            skills={experience.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
