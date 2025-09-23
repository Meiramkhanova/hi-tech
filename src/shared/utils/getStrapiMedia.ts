const BACKEND_HOST =
  process.env.NEXT_PUBLIC_BACKEND_HOST || "http://194.31.159.170/";
const BACKEND_PORT = process.env.NEXT_PUBLIC_BACKEND_PORT;

const MEDIA_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;

export const getStrapiMedia = (url?: string) => {
  if (!url) return "/assets/no-image.png";
  return url.startsWith("/") ? `${MEDIA_URL}${url}` : url;
};
