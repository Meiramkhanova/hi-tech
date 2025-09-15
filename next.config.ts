import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-hitech.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
