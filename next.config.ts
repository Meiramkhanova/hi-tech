import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
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
  turbopack: {
    root: path.resolve(__dirname, "../../"),
  },
};

export default nextConfig;
