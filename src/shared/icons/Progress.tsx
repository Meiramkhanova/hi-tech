import { SVGAttributes } from "react";

function Progress({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M14.1129 38V17.048C14.1129 16.4957 14.5607 16.048 15.1129 16.048H25.2294C25.7817 16.048 26.2294 16.4957 26.2294 17.048V38M14.1129 38L14.1162 28.3603C14.1163 27.8079 13.6686 27.36 13.1162 27.36H3C2.44772 27.36 2 27.8077 2 28.36V37C2 37.5523 2.44772 38 3 38H14.1129ZM14.1129 38H26.2294M26.2294 38V3C26.2294 2.44772 26.6772 2 27.2294 2H37C37.5523 2 38 2.44772 38 3V37C38 37.5523 37.5523 38 37 38H26.2294Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Progress;
