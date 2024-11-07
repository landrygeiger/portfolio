import { FC, useCallback } from "react";
import { Experience, isJob } from "../../content";
import "./ExperienceItem.css";
import Skill from "../Skill";

type Props = {
  experience: Experience;
  openModal: () => void;
};

const ExperienceItem: FC<Props> = ({ experience, openModal }) => {
  const heading = isJob(experience) ? experience.company : experience.title;
  const subtitle = isJob(experience)
    ? experience.position
    : experience.subtitle;
  const timePeriod = isJob(experience) ? experience.timePeriod : null;

  const handleClick = useCallback(() => openModal(), []);

  return (
    <div
      className="rounded-lg rounded-b-lg bg-white h-72 col-span-1  overflow-hidden relative flex flex-col justify-end has-description cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative z-20 px-3 pt-2 pb-3 bg-gray-800 rounded-b-lg description">
        <h2 className="font-lemon text-white text-lg z-20 relative">
          {heading}
        </h2>
        {subtitle && (
          <p className="z-20 relative" style={{ color: "rgb(255, 228, 94)" }}>
            {subtitle}
          </p>
        )}
        {timePeriod && <p className="text-gray-300 text-sm">{timePeriod}</p>}
        {/** gap-y-32 will essentially not show any skills that overflow */}
        <div className="flex flex-wrap gap-x-1 mt-3 flex-basis flex-grow align-bottom gap-y-32">
          {experience.skills.map((skill) => (
            <Skill name={skill} />
          ))}
        </div>
      </div>
      <img src={experience.imgSrc} className="bg-img absolute z-10" />
    </div>
  );
};

export default ExperienceItem;
