const BACKEND_HOST = process.env.NEXT_BACKEND_HOST;
const BACKEND_PORT = process.env.NEXT_BACKEND_PORT;

const MEDIA_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;

export const getStrapiMedia = (url?: string) => {
  if (!url) return "/assets/no-image.png";
  return url.startsWith("/") ? `${MEDIA_URL}${url}` : url;
};
