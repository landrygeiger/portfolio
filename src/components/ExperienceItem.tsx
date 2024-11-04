import { FC } from "react";
import "./ExperienceItem.css";

type Props = {
  company: string;
  position?: string;
  imgSrc: string;
  timePeriod?: string;
};

const ExperienceItem: FC<Props> = ({
  company,
  position,
  imgSrc,
  timePeriod,
}) => {
  return (
    <div className="rounded-lg rounded-b-lg bg-white h-48 col-span-1 transition hover:scale-103 overflow-hidden relative flex flex-col justify-end">
      <div className="relative z-20 px-3 py-2 bg-gray-800 rounded-b-lg">
        <h2 className="font-lemon text-white text-lg z-20 relative">
          {company}
        </h2>
        {position && (
          <p className="z-20 relative" style={{ color: "rgb(255, 228, 94)" }}>
            {position}
          </p>
        )}
        <p className="text-gray-300 text-sm">{timePeriod}</p>
      </div>
      <img src={imgSrc} className="bg-img absolute z-10" />
    </div>
  );
};

export default ExperienceItem;
