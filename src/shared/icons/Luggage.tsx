import { SVGAttributes } from "react";

function Luggage({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M16.875 15.2658V10.7188C16.875 9.46319 17.9383 8.44531 19.25 8.44531H27.5625C28.8742 8.44531 29.9375 9.4632 29.9375 10.7188V15.2658M9.75 38.0009H38.25C40.8734 38.0009 43 35.9651 43 33.4539V19.8128C43 17.3016 40.8734 15.2658 38.25 15.2658H9.75C7.12665 15.2658 5 17.3016 5 19.8128V33.4539C5 35.9651 7.12665 38.0009 9.75 38.0009Z"
        stroke="#32BEAA"
        // fill="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Luggage;
