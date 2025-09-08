import { SVGAttributes } from "react";

function Analysis({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M30.6 30.6V18.6M21 30.6V11.4M11.4 30.6V25.8M6.59998 40.2C3.94902 40.2 1.79999 38.051 1.79999 35.4V6.60005C1.79999 3.94908 3.94902 1.80005 6.59999 1.80005H35.4C38.0509 1.80005 40.2 3.94908 40.2 6.60005V35.4C40.2 38.051 38.0509 40.2 35.4 40.2H6.59998Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Analysis;
