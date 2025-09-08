import { SVGAttributes } from "react";

function Transport({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="48"
      viewBox="0 0 38 48"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M6.99995 40.7999L3.39995 45.5999M35.637 45.5593L31.9323 40.8396M11.8009 33.7443V33.5999M26.2009 33.7443V33.5999M4.59995 27.5999H34.6M19 9.5999V26.3999M13 2.3999H25M8.12936 40.7999H29.8705C33.1453 40.7999 35.8 38.1452 35.8 34.8705V15.5293C35.8 12.2546 33.1453 9.5999 29.8705 9.5999H8.12936C4.85464 9.5999 2.19995 12.2546 2.19995 15.5293V34.8705C2.19995 38.1452 4.85464 40.7999 8.12936 40.7999Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Transport;
