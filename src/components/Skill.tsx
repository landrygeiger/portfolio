import { FC } from "react";

type Props = {
  name: string;
};

/**
 * A chip displaying a skill.
 * @param param0
 * @returns
 */
const Skill: FC<Props> = ({ name }) => {
  return (
    <div className="py-1 px-2 bg-white text-gray-800 text-xs rounded-md min-h">
      {name}
    </div>
  );
};

export default Skill;
