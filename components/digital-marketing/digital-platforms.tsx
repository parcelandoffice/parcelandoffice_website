import React from "react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalPlatformsProps {
  service: DigitalMarketingServiceData;
}

function getPlatformIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "facebook":
      return (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function DigitalPlatforms({ service }: DigitalPlatformsProps) {
  const platforms = service.platforms;
  if (!platforms || !platforms.items || platforms.items.length === 0) return null;

  return (
    <section id="platforms" className="bg-surface py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean without title highlighter */}
        <div className="mx-auto max-w-3xl text-center">
          {platforms.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{platforms.eyebrow}</span>
            </div>
          )}

          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-[40px]">
            {platforms.heading}
          </h2>

          {platforms.description && (
            <p className="mt-4 text-base sm:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              {platforms.description}
            </p>
          )}
        </div>

        {/* Platforms Showcase - Open, Non-Card Layout Without Numbers */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {platforms.items.map((item) => {
            return (
              <div
                key={item.name}
                className="group flex flex-col items-start transition-all duration-300"
              >
                {/* Platform Icon Badge */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
                  {getPlatformIcon(item.platform)}
                </div>

                {/* Platform Title */}
                <h3 className="font-display mt-5 text-lg sm:text-xl font-bold tracking-tight text-primary-dark transition-colors duration-300 group-hover:text-accent">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
