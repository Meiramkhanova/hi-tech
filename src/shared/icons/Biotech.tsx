import { SVGAttributes } from "react";

function Biotech({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="42"
      viewBox="0 0 34 42"
      className={className}
      {...props}>
      <path
        d="M26 7.5C26 7.5 26 21.231 26 31.5047C26 36.4753 21.9706 40.5 17 40.5V40.5C12.0294 40.5 8 36.4706 8 31.5V7.5"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M29 7.5H5C3.34315 7.5 2 6.15685 2 4.5C2 2.84315 3.34315 1.5 5 1.5H26H29C30.6569 1.5 32 2.84315 32 4.5C32 6.15685 30.6569 7.5 29 7.5Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Biotech;
