import { SVGAttributes } from "react";

function Science({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M25 0V8.69722C25 8.89465 25.0584 9.08766 25.1679 9.25192L37.9635 28.4453C38.4066 29.1099 37.9302 30 37.1315 30H2.86852C2.06982 30 1.59343 29.1099 2.03647 28.4453L14.832 9.25193C14.9416 9.08766 15 8.89465 15 8.69722V0"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Science;
