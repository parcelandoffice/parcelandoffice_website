"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";

/**
 * Authentic delivery partner logos using PNG assets from /images/delivery_partners/
 * PNG extension only as requested.
 */

export function FedExLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/delivery_partners/fedex.png"
      alt="FedEx Logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}

export function UPSLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/delivery_partners/ups.png"
      alt="UPS Logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}

export function USPSLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/delivery_partners/usps.png"
      alt="USPS Logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}

export function DelhiveryLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <img
      src="/images/delivery_partners/delhivery.png"
      alt="Delhivery Logo"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}

export function DHLLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DHL Logo"
      role="img"
    >
      <rect width="96" height="32" rx="4" fill="#FFCC00" />
      <path d="M5 9h11l-1.3 3H3.7l1.3-3zm-1.3 4.5h11l-1.3 3H2.4l1.3-3zm-1.3 4.5h11L12.1 21H1.1l1.3-3z" fill="#D40511" />
      <path d="M80 9h11l-1.3 3H78.7l1.3-3zm-1.3 4.5h11l-1.3 3H77.4l1.3-3zm-1.3 4.5h11L87.1 21H76.1l1.3-3z" fill="#D40511" />
      <path
        d="M20 7h12c6 0 9.5 3.5 8 9.5-1.5 6-6.5 9.5-12.5 9.5H15.5L20 7zm6 5.2l-2.4 9.6h4.5c3.2 0 5.8-1.8 6.7-5.2.9-3.4-.8-4.4-4-4.4H26z"
        fill="#D40511"
      />
      <path
        d="M39 26l4.8-19h5.5l-1.8 7h7.5l1.8-7h5.5L57.5 26H52l1.9-7.5h-7.5L44.5 26H39z"
        fill="#D40511"
      />
      <path
        d="M60 26l4.8-19h5.5l-3.6 14.5h10.5l-1.1 4.5H60z"
        fill="#D40511"
      />
    </svg>
  );
}

/**
 * Universal CarrierLogo selector
 */
export function CarrierLogo({
  carrier,
  className = "h-5 w-auto",
}: {
  carrier: "fedex" | "ups" | "dhl" | "usps" | "delhivery" | string;
  className?: string;
}) {
  const norm = carrier.toLowerCase().trim();

  if (norm.includes("fedex")) {
    return <FedExLogo className={className} />;
  }
  if (norm.includes("ups")) {
    return <UPSLogo className={className} />;
  }
  if (norm.includes("usps") || norm.includes("postal")) {
    return <USPSLogo className={className} />;
  }
  if (norm.includes("delhivery")) {
    return <DelhiveryLogo className={className} />;
  }
  if (norm.includes("dhl")) {
    return <DHLLogo className={className} />;
  }

  return (
    <span className={`inline-flex items-center justify-center font-black tracking-wider text-primary ${className}`}>
      {carrier.toUpperCase()}
    </span>
  );
}
