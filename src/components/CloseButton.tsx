import { FC } from "react";
import Close from "../assets/close.svg";

type Props = {
  close: () => void;
  className?: string;
};

const CloseButton: FC<Props> = ({ close, className }) => (
  <button
    onClick={close}
    className={`hover:bg-gray-100/10 rounded-full p-2 transition ${className}`}
  >
    <img src={Close} />
  </button>
);

export default CloseButton;
