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
      {
        protocol: "http",
        hostname: "194.31.159.170",
        port: "1338",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
