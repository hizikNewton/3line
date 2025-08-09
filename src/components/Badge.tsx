import { FC } from "react";
import Icon, { iconKey } from "./Icon";

interface Props {
  value: string;
  icon?: iconKey;
  className?: string;
  type?: "default" | "warn" | "success";
}

const Badge: FC<Props> = ({ value, icon, className, type }) => {
  let color: string;

  switch (type) {
    case "warn":
      color = "orange";
      break;
    case "success":
      color = "green";
      break;
    default:
      color = "gray";
  }

  return (
    <div
      className={`min-w-9 min-h-6 px-2.5 py-0.5 bg-${color}-100 rounded-2xl justify-center items-center inline-flex ${className}`}
    >
      {icon && <Icon name={icon} />}
      <span className={`text-xs  ml-0.5`}>{value}</span>
    </div>
  );
};

export default Badge;
