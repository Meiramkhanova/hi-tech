import { SVGAttributes } from "react";

function Earth({ className, ...props }: SVGAttributes<SVGSVGElement>) {
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
        d="M33.5 31.9062L26.9231 24.1538H22.7692L20 21.3846L25.5385 13.0769H35.2308M10.3077 6.15385L14.4474 10.2935C15.296 11.1421 15.5572 12.4148 15.1115 13.529L13.8313 16.7296C13.3757 17.8685 12.2725 18.6154 11.0458 18.6154H3.38462M38 20C38 29.9411 29.9411 38 20 38C10.0589 38 2 29.9411 2 20C2 10.0589 10.0589 2 20 2C29.9411 2 38 10.0589 38 20Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Earth;
