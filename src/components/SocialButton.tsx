import { FC, PropsWithChildren } from "react";

type Props = {
  href: string;
};

const SocialButton: FC<PropsWithChildren<Props>> = ({ href, children }) => {
  return (
    <button className="bg-white p-3 rounded-xl mix-blend-plus-lighter h-14 hover:scale-105 transition ease-in-out duration-200 delay-0 text-xl font-bold">
      <a className="no-underline" href={href} target="_blank">
        {children}
      </a>
    </button>
  );
};

export default SocialButton;
