import { FC, PropsWithChildren } from "react";

type Props = {
  style?: string;
};

const Text: FC<PropsWithChildren<Props>> = ({ style, children }) => {
  return <p className={`text-gray-700 ${style}`}>{children}</p>;
};

export default Text;
