import { FC } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import { JOBS } from "../content";

const Experiences: FC = () => {
  return (
    <div>
      <h1 className="font-lemon text-white text-3xl lg:text-4xl">Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {JOBS.map((experience, i) => (
          <ExperienceItem key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
