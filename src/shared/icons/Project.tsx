import { SVGAttributes } from "react";

function Project({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      stroke="currentColor"
      className={className}
      {...props}>
      <g filter="url(#filter0_d_1645_1479)">
        <path
          d="M37 31.4062L30.4231 23.6538H26.2692L23.5 20.8846L29.0385 12.5769H38.7308M13.8077 5.65385L17.9474 9.79352C18.796 10.6421 19.0572 11.9148 18.6115 13.029L17.3313 16.2296C16.8757 17.3685 15.7725 18.1154 14.5458 18.1154H6.88462M41.5 19.5C41.5 29.4411 33.4411 37.5 23.5 37.5C13.5589 37.5 5.5 29.4411 5.5 19.5C5.5 9.55887 13.5589 1.5 23.5 1.5C33.4411 1.5 41.5 9.55887 41.5 19.5Z"
          stroke="currentColor"
          className={className}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1645_1479"
          x="0"
          y="0"
          width="47"
          height="47"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1645_1479"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1645_1479"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Project;
