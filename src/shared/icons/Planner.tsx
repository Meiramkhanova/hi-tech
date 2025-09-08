import { SVGAttributes } from "react";

function Planner({ className, ...props }: SVGAttributes<SVGSVGElement>) {
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
        d="M21 40.1998C31.6039 40.1998 40.2 31.6037 40.2 20.9998C40.2 10.3959 31.6039 1.7998 21 1.7998C10.3962 1.7998 1.80005 10.3959 1.80005 20.9998C1.80005 31.6037 10.3962 40.1998 21 40.1998Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M27.9952 14.0059L26.2982 25.303L15.0011 27L16.6982 15.703L27.9952 14.0059Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Planner;
