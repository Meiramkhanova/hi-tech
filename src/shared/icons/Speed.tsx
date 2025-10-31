import { SVGAttributes } from "react";

function Speed({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="42"
      viewBox="0 0 31 42"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M11.4556 25.6778L10.0333 39.9L28.5222 19.9889L18.5667 14.3L19.9889 1.5L1.5 21.4111L11.4556 25.6778Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Speed;
