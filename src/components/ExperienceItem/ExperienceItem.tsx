import { FC } from "react";
import "./ExperienceItem.css";

type Props = {
  company: string;
  position?: string;
  imgSrc: string;
  timePeriod?: string;
  skills?: string[];
};

const ExperienceItem: FC<Props> = ({
  company,
  position,
  imgSrc,
  timePeriod,
  skills,
}) => {
  return (
    <div className="rounded-lg rounded-b-lg bg-white h-72 col-span-1  overflow-hidden relative flex flex-col justify-end has-description cursor-pointer">
      <div className="relative z-20 px-3 pt-2 pb-3 bg-gray-800 rounded-b-lg description">
        <h2 className="font-lemon text-white text-lg z-20 relative">
          {company}
        </h2>
        {position && (
          <p className="z-20 relative" style={{ color: "rgb(255, 228, 94)" }}>
            {position}
          </p>
        )}
        <p className="text-gray-300 text-sm">{timePeriod}</p>
        {skills && (
          <div className="flex flex-wrap gap-1 mt-3">
            {skills.map((skill) => (
              <div className="py-1 px-2 bg-white text-gray-800 text-xs rounded-md min-h">
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <img src={imgSrc} className="bg-img absolute z-10" />
    </div>
  );
};

export default ExperienceItem;
