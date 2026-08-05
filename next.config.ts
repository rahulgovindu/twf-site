import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deployable to Hostinger shared hosting (plain HTML/CSS/JS).
  output: "export",
  // Hostinger serves flat files; trailing slashes give clean /about/ URLs.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
