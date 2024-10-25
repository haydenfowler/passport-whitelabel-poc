import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: `${process.env.WHITELABEL_ID}-dist`,
};

export default nextConfig;
