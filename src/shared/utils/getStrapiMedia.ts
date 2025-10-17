const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
const BACKEND_PORT = process.env.NEXT_PUBLIC_BACKEND_PORT;

const isDev = process.env.NODE_ENV === "development";

const MEDIA_URL = isDev
  ? `http://${BACKEND_HOST}:${BACKEND_PORT}`
  : `https://${BACKEND_HOST}`;

export const getStrapiMedia = (url?: string) => {
  if (!url) return "/assets/no-image.png";
  return url.startsWith("/") ? `${MEDIA_URL}${url}` : url;
};
