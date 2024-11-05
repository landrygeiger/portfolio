import { FC } from "react";
import "./ExperienceItem.css";
import { Experience, isJob } from "../../content";

type Props = {
  experience: Experience;
};

const ExperienceItem: FC<Props> = ({ experience }) => {
  const heading = isJob(experience) ? experience.company : experience.title;
  const subtitle = isJob(experience)
    ? experience.position
    : experience.subtitle;
  const timePeriod = isJob(experience) ? experience.timePeriod : null;

  return (
    <div className="rounded-lg rounded-b-lg bg-white h-72 col-span-1  overflow-hidden relative flex flex-col justify-end has-description cursor-pointer">
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
        <div className="flex flex-wrap gap-1 mt-3">
          {experience.skills.map((skill) => (
            <div className="py-1 px-2 bg-white text-gray-800 text-xs rounded-md min-h">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <img src={experience.imgSrc} className="bg-img absolute z-10" />
    </div>
  );
};

export default ExperienceItem;
