import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/vendors", destination: "/showcase", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.mov": {
        loaders: ["next-video/webpack/video-raw-loader.js"],
        as: "*.json",
      },
    },
  },
};

export default withNextVideo(nextConfig);