import { SVGAttributes } from "react";

function DoneIcon({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M24.5 2H8.75C5.02208 2 2 5.02206 2 8.74996V31.25C2 34.9779 5.02208 38 8.75 38H31.25C34.9779 38 38 34.9779 38 31.25V18.8749M35.75 7.62497L20 23.3749L15.5 18.8749"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DoneIcon;
