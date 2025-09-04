import { SVGAttributes } from "react";

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {}

function Icon({ className, ...props }: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      className={className}
      fill="white">
      <path
        d="M11.0012 26.0006L19.4012 17.6006L25.4012 23.6006L32.6012 16.4006M6.8 40.4002C4.14903 40.4002 2 38.2512 2 35.6002V6.80024C2 4.14928 4.14903 2.00024 6.8 2.00024H35.6C38.251 2.00024 40.4 4.14928 40.4 6.80024V35.6002C40.4 38.2512 38.251 40.4002 35.6 40.4002H6.8Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;
