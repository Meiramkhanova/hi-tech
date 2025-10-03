import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOST || "194.31.159.170",
        port: process.env.NEXT_PUBLIC_BACKEND_PORT || "1337",
      },
    ],
  },
};

export default nextConfig;
