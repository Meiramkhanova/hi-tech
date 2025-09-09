import { SVGAttributes } from "react";

function Web({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="38"
      height="42"
      viewBox="0 0 38 42"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M19.0007 40.2L35.6284 30.6V11.4L19.0007 1.79999L2.37305 11.4V30.6L19.0007 40.2ZM19.0007 40.2V22.2M19.0007 22.2L3.40073 12.6M19.0007 22.2L34.6007 12.6"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Web;
