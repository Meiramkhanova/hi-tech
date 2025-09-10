import { SVGAttributes } from "react";

function Up({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M1.79883 1.79999V40.2H40.1988M11.3988 25.8002L19.7988 17.4002L25.7988 23.4002L38.9988 10.2002M30.0183 8.99999H40.2006V19.1823"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Up;
