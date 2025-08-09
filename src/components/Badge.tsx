import { FC } from "react";
import Icon, { iconKey } from "./Icon";

interface Props {
  value: string;
  icon?: iconKey;
  className?: string;
  type?: "default" | "warn" | "success";
}

const Badge: FC<Props> = ({ value, icon, className, type }) => {
  let bg: string;

  switch (type) {
    case "warn":
      bg = "bg-orange-100";
      break;
    case "success":
      bg = "bg-green-100";
      break;
    default:
      bg = "bg-gray-100";
  }

  return (
    <div
      className={`min-w-9 min-h-6 px-2.5 py-0.5 ${bg} rounded-2xl justify-center items-center inline-flex ${className}`}
    >
      {icon && <Icon name={icon} />}
      <span className={`text-xs  ml-0.5`}>{value}</span>
    </div>
  );
};

export default Badge;
