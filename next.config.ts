import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Keep search engines on the custom domain instead of the duplicate .vercel.app copy.
        source: "/:path*",
        has: [{ type: "host", value: "rankandrender.vercel.app" }],
        destination: "https://www.rankandrender.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
