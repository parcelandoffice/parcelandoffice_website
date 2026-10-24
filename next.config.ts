import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY:
      process.env.GOOGLE_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_DATASET,
  },
  redirects: async () => {
    return [
      {
        source: "/Products-Services/Shipping/FedEx-Shipping",
        destination: "/services/fedex-shipping",
        permanent: true,
      },
      {
        source: "/products-services/shipping/fedex-shipping",
        destination: "/services/fedex-shipping",
        permanent: true,
      },
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
