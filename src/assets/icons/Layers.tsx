
import type { SVGProps } from "react";
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 17 10 5 10-5M2 12l10 5 10-5M12 2 2 7l10 5 10-5-10-5Z"
    />
  </svg>
);
export default SvgLayers;
