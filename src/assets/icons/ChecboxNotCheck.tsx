import type { SVGProps } from "react";
const SvgChecboxNotCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={15} height={15} x={0.5} y={0.5} fill="#fff" rx={7.5} />
    <rect width={15} height={15} x={0.5} y={0.5} stroke="#D0D5DD" rx={7.5} />
  </svg>
);
export default SvgChecboxNotCheck;
