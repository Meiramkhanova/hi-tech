import { SVGAttributes } from "react";

function Star({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M18.7818 3.34424C19.5437 1.28524 22.4559 1.28524 23.2178 3.34423L27.01 13.5925C27.2495 14.2399 27.7599 14.7502 28.4073 14.9898L38.6556 18.782C40.7146 19.5439 40.7146 22.4561 38.6556 23.218L28.4073 27.0102C27.7599 27.2497 27.2495 27.7601 27.01 28.4075L23.2178 38.6557C22.4559 40.7147 19.5437 40.7147 18.7818 38.6557L14.9896 28.4075C14.7501 27.7601 14.2397 27.2497 13.5923 27.0102L3.34405 23.218C1.28506 22.4561 1.28505 19.5439 3.34405 18.782L13.5923 14.9898C14.2397 14.7502 14.7501 14.2399 14.9896 13.5925L18.7818 3.34424Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Star;
