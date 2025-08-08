import type { SVGProps } from "react";
const SvgCheckboxbase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={15} height={15} x={0.5} y={0.5} fill="#7F56D9" rx={7.5} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M11.333 5.5 6.75 10.083 4.667 8"
    />
    <rect width={15} height={15} x={0.5} y={0.5} stroke="#7F56D9" rx={7.5} />
  </svg>
);
export default SvgCheckboxbase;
