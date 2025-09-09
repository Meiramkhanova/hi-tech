import { SVGAttributes } from "react";

function Bank({ className, ...props }: SVGAttributes<SVGSVGElement>) {
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
        d="M4.9998 27V21.6627M15.6665 27V21.6627M26.3331 27V21.6627M36.9998 27V21.6627M1.7998 33.8H40.1998V40.2H1.7998V33.8ZM1.7998 14.6V10.3333L20.2108 1.79999L40.1998 10.3333V14.6H1.7998Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Bank;
