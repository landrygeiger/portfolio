import { FC, ReactNode } from "react";
import "./SocialButton.css";

type Props = {
  icon: ReactNode;
  href: string;
  tooltip: string;
};

const HeaderItem: FC<Props> = ({ icon, href, tooltip }) => {
  return (
    <div className="has-tooltip relative">
      <a
        href={href}
        className="fill-white no-underline text-xl hover:scale-105 transition flex align-middle"
        target="_blank"
      >
        {icon}
      </a>
      <span className="tooltip px-2 py-1 bg-white rounded-lg transition text-gray-600 text-sm">
        {tooltip}
      </span>
    </div>
  );
};

export default HeaderItem;
