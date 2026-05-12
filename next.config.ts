import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(__dirname),
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
