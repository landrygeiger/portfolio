import { FC } from "react";
import { Experience } from "../content";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

type Props = {
  sectionTitle: string;
  experiences: Experience[];
};

const ExperienceList: FC<Props> = ({ sectionTitle, experiences }) => (
  <div>
    <h1 className="font-lemon text-white text-4xl lg:text-5xl">
      {sectionTitle}
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
      {experiences.map((experience, i) => (
        <ExperienceItem key={i} experience={experience} />
      ))}
    </div>
  </div>
);

export default ExperienceList;
