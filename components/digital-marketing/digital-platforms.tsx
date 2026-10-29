import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalPlatformsProps {
  service: DigitalMarketingServiceData;
}

function getPlatformIcon(platformName: string) {
  const p = platformName.toLowerCase();
  if (p.includes("linkedin")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }
  if (p.includes("facebook") || p.includes("meta")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (p.includes("instagram")) {
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
  }
  if (p.includes("youtube")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (p.includes("google")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.24 10.285V13.4h6.887C18.2 16.14 15.645 18 12.24 18c-3.315 0-6-2.685-6-6s2.685-6 6-6c1.485 0 2.835.54 3.885 1.425l2.385-2.385C17.07 3.66 14.82 3 12.24 3 7.275 3 3.24 7.035 3.24 12s4.035 9 9 9c5.205 0 8.655-3.66 8.655-8.805 0-.585-.06-1.155-.165-1.71h-8.49z" />
      </svg>
    );
  }
  if (p.includes("tiktok")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    );
  }
  if (p.includes("twitter") || p.includes("x")) {
    return (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return <Sparkles className="h-7 w-7" aria-hidden="true" />;
}

export default function DigitalPlatforms({ service }: DigitalPlatformsProps) {
  const platforms = service.platforms;
  if (!platforms || !platforms.items || platforms.items.length === 0) return null;

  return (
    <section id="platforms" className="bg-surface py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {platforms.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
              {service.iconUrl ? (
                <Image
                  src={service.iconUrl}
                  alt={service.title}
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5 object-contain"
                />
              ) : (
                <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
              )}
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

        {/* Platforms Showcase Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {platforms.items.map((item) => {
            return (
              <div
                key={item.name}
                className="group flex flex-col items-start transition-all duration-300"
              >
                {/* Platform Icon Badge */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105 overflow-hidden">
                  {item.iconUrl ? (
                    <Image
                      src={item.iconUrl}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    getPlatformIcon(item.platform || item.name || "")
                  )}
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
