import { FC, PropsWithChildren } from "react";
import { match } from "ts-pattern";

type Props = {
  element: "h1" | "h2" | "h3";
};

const Heading: FC<PropsWithChildren<Props>> = ({ element, children }) => {
  const baseStyle = "font-lemon text-red-300 drop-shadow-red";
  return match(element)
    .with("h1", () => <h1 className={`${baseStyle} text-7xl`}>{children}</h1>)
    .with("h2", () => <h2 className={`${baseStyle} text-4xl`}>{children}</h2>)
    .with("h3", () => <h3 className={`${baseStyle} text-2xl`}>{children}</h3>)
    .exhaustive();
};

export default Heading;
