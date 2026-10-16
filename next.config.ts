import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/btostudio-site",
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
