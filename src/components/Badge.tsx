import { FC } from "react";

const Badge: FC = () => {
  return (
    <div className="w-9 h-6 px-2.5 py-0.5 bg-gray-100 rounded-2xl justify-center items-center inline-flex">
      <div className="text-center text-slate-700 text-sm font-medium leading-tight">
        10
      </div>
    </div>
  );
};

export default Badge;
