import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_BACKEND_HOST || "http://194.31.159.170/",
        port: process.env.NEXT_BACKEND_PORT,
      },
    ],
  },
};

export default nextConfig;
