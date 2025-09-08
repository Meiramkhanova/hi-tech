import { SVGAttributes } from "react";

function AI({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="44"
      viewBox="0 0 40 44"
      fill="white"
      className={className}
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 12L20 2L2 12V32L20 42L38 32V12ZM20 28.6667C23.8263 28.6667 26.9282 25.6819 26.9282 22C26.9282 18.3181 23.8263 15.3333 20 15.3333C16.1737 15.3333 13.0718 18.3181 13.0718 22C13.0718 25.6819 16.1737 28.6667 20 28.6667Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AI;
