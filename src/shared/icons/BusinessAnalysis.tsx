import { SVGAttributes } from "react";

function BusinessAnalysis({
  className,
  ...props
}: SVGAttributes<SVGSVGElement>) {
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
        d="M11.0012 26.0006L19.4012 17.6006L25.4012 23.6006L32.6012 16.4006M6.8 40.4002C4.14903 40.4002 2 38.2511 2 35.6002V6.80018C2 4.14922 4.14903 2.00018 6.8 2.00018H35.6C38.251 2.00018 40.4 4.14922 40.4 6.80018V35.6002C40.4 38.2511 38.251 40.4002 35.6 40.4002H6.8Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BusinessAnalysis;
