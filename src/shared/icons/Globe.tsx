import { SVGAttributes } from "react";

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {}

function Globe({ className, ...props }: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      className={className}
      viewBox="0 0 48 48"
      fill="white">
      <path
        d="M4.7998 40.4116L7.44022 37.5881C11.2283 41.4232 16.4895 42.9174 22.3059 42.9174C33.8453 42.9174 43.1998 33.5629 43.1998 22.0235C43.1998 16.3005 40.8988 11.1149 37.1716 7.34132L39.8112 5.08252M34.6936 21.3882C34.6936 28.8927 28.61 34.9763 21.1055 34.9763C13.601 34.9763 7.51742 28.8927 7.51742 21.3882C7.51742 13.8837 13.601 7.80014 21.1055 7.80014C28.61 7.80014 34.6936 13.8837 34.6936 21.3882Z"
        stroke="#32BEAA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Globe;
