import { SVGAttributes } from "react";

function Switcase({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="34"
      viewBox="0 0 42 34"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M13.875 9.26485V4.71784C13.875 3.46222 14.9383 2.44434 16.25 2.44434H24.5625C25.8742 2.44434 26.9375 3.46222 26.9375 4.71784V9.26485M6.75 31.9999H35.25C37.8734 31.9999 40 29.9641 40 27.4529V13.8119C40 11.3006 37.8734 9.26485 35.25 9.26485H6.75C4.12665 9.26485 2 11.3006 2 13.8119V27.4529C2 29.9641 4.12665 31.9999 6.75 31.9999Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Switcase;
