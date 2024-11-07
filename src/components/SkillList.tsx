import { FC } from "react";
import Skill from "./Skill";

type Props = {
  skills: string[];
  overflow: "hidden" | "visible";
};

const SkillList: FC<Props> = ({ skills, overflow }) => {
  // gap-y-32 will essentially not show any skills that overflow
  return (
    <div
      className={`flex flex-wrap gap-x-1 mt-3 flex-basis flex-grow align-bottom ${
        overflow === "hidden" ? "gap-y-32" : ""
      }`}
    >
      {skills.map((skill, i) => (
        <Skill name={skill} key={i} />
      ))}
    </div>
  );
};

export default SkillList;
