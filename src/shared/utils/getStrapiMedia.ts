const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL || "http://localhost:1337";

export const getStrapiMedia = (url?: string) => {
  if (!url) return "/assets/no-image.png";
  return url.startsWith("/") ? `${MEDIA_URL}${url}` : url;
};
