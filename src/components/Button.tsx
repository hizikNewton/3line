import { FC } from "react";
import Icon, { iconKey } from "./Icon";
interface ButtonProp {
  leftIcon?: iconKey;
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProp> = ({ leftIcon, label, className }) => {
  return (
    <button
      type="button"
      className={`flex text-sm font-medium content-center ${className} hover:cursor-pointer`}
    >
      {leftIcon && (
        <Icon name={leftIcon} className="inline-flex mr-2 self-center" />
      )}
      <span>{label}</span>
    </button>
  );
};

export default Button;
