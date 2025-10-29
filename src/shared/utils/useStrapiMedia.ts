"use client";

import { useEnv } from "@/providers/EnvProvider";

export function useStrapiMedia(url?: string) {
  const { mediaUrl } = useEnv();

  if (!url) return "/assets/no-image.png";
  if (url.startsWith("http")) return url;

  const cleanBase = mediaUrl.replace(/\/+$/, "");
  const cleanUrl = url.replace(/^\/+/, "");

  return `${cleanBase}/${cleanUrl}`;
}
