import { FC } from "react";

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({ className }) => {
  return (
    <div className={`divider my-4 border-t border-gray-300 ${className}`}></div>
  );
};

export default Divider;
