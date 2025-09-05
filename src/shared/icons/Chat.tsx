import { SVGAttributes } from "react";

function Chat({ className, ...props }: SVGAttributes<SVGSVGElement>) {
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
        d="M36.4677 27.2712C37.4507 25.0476 37.9966 22.5876 37.9966 20C37.9966 10.0589 29.9385 2 19.9983 2C10.0581 2 2 10.0589 2 20C2 29.9411 10.0581 38 19.9983 38C23.1986 38 26.2039 37.1646 28.8079 35.7001L38 37.9983L36.4677 27.2712Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Chat;
