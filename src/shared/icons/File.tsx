import { SVGAttributes } from "react";

function File({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="36"
      viewBox="0 0 42 36"
      fill="currentColor"
      className={className}
      {...props}>
      <path
        d="M30.0351 15.0008H38.0665C39.2447 15.0008 40.1998 15.9559 40.1998 17.1341V29.5969V32.2008C40.1998 33.3054 39.3044 34.2008 38.1998 34.2008H6.5998M1.7998 3.93412V31.2008C1.7998 32.8576 3.14295 34.2008 4.79981 34.2008H7.1998C8.85666 34.2008 10.1998 32.8576 10.1998 31.2008V17.1341C10.1998 15.9559 11.1549 15.0008 12.3331 15.0008H35.9331V9.95764C35.9331 8.77944 34.978 7.82431 33.7998 7.82431H19.7449L16.485 2.77673C16.0921 2.16828 15.4172 1.80078 14.6929 1.80078H3.93314C2.75493 1.80078 1.7998 2.75591 1.7998 3.93412Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default File;
