import type { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#download_svg__a)">
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M6.667 14.167 10 17.5m0 0 3.333-3.333M10 17.5V10m7.4 5.075A4.167 4.167 0 0 0 15 7.5h-1.05A6.666 6.666 0 1 0 2.5 13.575"
      />
    </g>
    <defs>
      <clipPath id="download_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownload;
