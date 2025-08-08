import { FC } from "react";
import Icon, { iconKey } from "./Icon";
interface ButtonProp {
  leftIcon?: iconKey;
  label: string;
  className?: string;
}

const Button: FC<ButtonProp> = ({ leftIcon, label, className }) => {
  return (
    <button
      type="button"
      className={`text-sm font-medium leading-tight ${className}`}
    >
      <span>
        {leftIcon && <Icon name={leftIcon} className="inline-flex" />}
      </span>
      <span>{label}</span>
    </button>
  );
};

export default Button;
