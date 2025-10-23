import { SVGAttributes } from "react";

function Profile({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      {...props}>
      <path
        d="M38.4 27.3713C40.9347 29.2651 43.2 34.0333 43.2 36.9712C43.2 37.8865 42.5323 38.6285 41.7085 38.6285H40.8M31.2 19.6089C32.8397 18.6604 33.9429 16.8875 33.9429 14.8571C33.9429 12.8266 32.8397 11.0537 31.2 10.1052M6.29159 38.6285H32.5657C33.3894 38.6285 34.0572 37.8865 34.0572 36.9712C34.0572 31.218 29.2507 26.5541 19.4286 26.5541C9.60658 26.5541 4.80005 31.218 4.80005 36.9712C4.80005 37.8865 5.46783 38.6285 6.29159 38.6285ZM24.9143 14.8571C24.9143 17.8867 22.4583 20.3428 19.4286 20.3428C16.3989 20.3428 13.9429 17.8867 13.9429 14.8571C13.9429 11.8274 16.3989 9.37134 19.4286 9.37134C22.4583 9.37134 24.9143 11.8274 24.9143 14.8571Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className={className}
      />
    </svg>
  );
}

export default Profile;
