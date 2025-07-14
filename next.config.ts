import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: { unoptimized: true },
  output: "export",
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
