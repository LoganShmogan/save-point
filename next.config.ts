import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Old pages Google still has on file. /job-search is left as a 404 since
  // it has no replacement yet.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/packages", destination: "/pricing", permanent: true },
      { source: "/automation", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
