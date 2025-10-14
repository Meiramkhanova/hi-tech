import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
      // {
      //   protocol: "https",
      //   hostname: process.env.NEXT_PUBLIC_BACKEND_HOST || "194.31.159.170",
      //   port: process.env.NEXT_PUBLIC_BACKEND_PORT || "1337",
      // },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
