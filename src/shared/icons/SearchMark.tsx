import { SVGAttributes } from "react";

function SearchMark({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="42"
      viewBox="0 0 38 42"
      fill="white"
      className={className}
      {...props}>
      <path
        d="M18.3996 40.1999H6.39959C3.74862 40.1999 1.59959 38.0509 1.59961 35.3999L1.59979 6.60002C1.59981 3.94907 3.74884 1.80005 6.39979 1.80005H28.0003C30.6513 1.80005 32.8003 3.94908 32.8003 6.60005V16.2M34.0004 34.2L36.4004 36.6M35.2004 29.4C35.2004 32.7138 32.5141 35.4 29.2004 35.4C25.8867 35.4 23.2004 32.7138 23.2004 29.4C23.2004 26.0863 25.8867 23.4 29.2004 23.4C32.5141 23.4 35.2004 26.0863 35.2004 29.4Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchMark;
