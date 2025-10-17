import { SVGAttributes } from "react";

function Compass({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor">
      <path
        d="M7.16699 43.2L21.8958 17.4247M27.156 17.4247L40.8327 43.2M8.72555 29.5233C12.5815 35.3287 18.2311 38.9918 24.5264 38.9918C30.8217 38.9918 36.4712 35.3287 40.3272 29.5233M24.5259 7.43019C21.6207 7.43019 19.2656 9.78529 19.2656 12.6905C19.2656 15.5956 21.6207 17.9507 24.5259 17.9507C27.4311 17.9507 29.7862 15.5956 29.7862 12.6905C29.7862 9.78529 27.4311 7.43019 24.5259 7.43019ZM24.5259 7.43019V4.80005"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Compass;
