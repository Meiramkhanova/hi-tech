import { SVGAttributes } from "react";

function Goal({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="white"
      className={className}>
      <path
        d="M26.6469 1.80005L30.3074 11.6925L40.1998 15.353L30.3074 19.0135L26.6469 28.9059L22.9863 19.0135L13.0939 15.353L22.9863 11.6925L26.6469 1.80005Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M9.70569 24.3883L12.9033 29.0965L17.6116 32.2942L12.9033 35.4918L9.70569 40.2001L6.50803 35.4918L1.7998 32.2942L6.50803 29.0965L9.70569 24.3883Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Goal;
