import { SVGAttributes } from "react";

function PersonalLearn({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M17.9289 11.4998C17.9289 14.5226 15.8184 16.6707 13.2151 16.6707C10.6117 16.6707 8.50125 14.5226 8.50125 11.4998C8.50125 8.47696 10.6117 6.6707 13.2151 6.6707C15.8184 6.6707 17.9289 8.47696 17.9289 11.4998Z"
        stroke="#32BEAA"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M25.5 28.8702C25.5 31.9794 21.8636 34.4999 13.5 34.4999C5.13636 34.4999 1.5 31.9794 1.5 28.8702C1.5 25.761 6.87258 23.2405 13.5 23.2405C20.1274 23.2405 25.5 25.761 25.5 28.8702Z"
        stroke="#32BEAA"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <path
        d="M28.5 1.5L30.1999 5.16032L34.2063 5.6459L31.2505 8.39368L32.0267 12.3541L28.5 10.392L24.9733 12.3541L25.7495 8.39368L22.7937 5.6459L26.8001 5.16032L28.5 1.5Z"
        stroke="#32BEAA"
        stroke-width="3"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PersonalLearn;
