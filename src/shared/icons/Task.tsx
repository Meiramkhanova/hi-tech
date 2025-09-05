import { SVGAttributes } from "react";

function Task({ className, ...props }: SVGAttributes<SVGSVGElement>) {
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
        d="M16.1145 40.1147H6.51446C3.86349 40.1147 1.71446 37.9657 1.71448 35.3147L1.71466 6.51482C1.71468 3.86386 3.86371 1.71484 6.51466 1.71484H28.1152C30.7662 1.71484 32.9152 3.86388 32.9152 6.51484V16.1148M23.3149 33.4969L33.4972 23.3146L40.2854 30.1028L30.1031 40.2851H23.3149V33.4969Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Task;
