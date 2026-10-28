import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datapointtechnology.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "**.whatsapp.net",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable Webpack disk pack file cache to prevent ERR_MEMORY_ALLOCATION_FAILED on Windows
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
