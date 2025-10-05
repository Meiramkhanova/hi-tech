import { SVGAttributes } from "react";

function Career({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      className={className}
      {...props}>
      <path
        d="M18.4289 11.9998C18.4289 15.0226 16.3184 17.1707 13.7151 17.1707C11.1117 17.1707 9.00125 15.0226 9.00125 11.9998C9.00125 8.97696 11.1117 7.1707 13.7151 7.1707C16.3184 7.1707 18.4289 8.97696 18.4289 11.9998Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M26 29.3702C26 32.4794 22.3636 34.9999 14 34.9999C5.63636 34.9999 2 32.4794 2 29.3702C2 26.261 7.37258 23.7405 14 23.7405C20.6274 23.7405 26 26.261 26 29.3702Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M29 2L30.6999 5.66032L34.7063 6.1459L31.7505 8.89368L32.5267 12.8541L29 10.892L25.4733 12.8541L26.2495 8.89368L23.2937 6.1459L27.3001 5.66032L29 2Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Career;
