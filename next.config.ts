import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY:
      process.env.GOOGLE_RECAPTCHA_SITE_KEY,
  },
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "host",
            value: "www.rplawfirm.in",
          },
        ],
        destination: "https://rplawfirm.in/:path*",
        permanent: true, // 308 Permanent Redirect
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
