"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/helpers";

export type HeroSlide = {
  image?: any;
  badge?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/slider2.jpg",
    badge: "UPS Authorized Shipping Outlet",
    title: "Get 3 Months Free* Mailboxes",
    subtitle: "Choose secure mail and package deliveries at your neighborhood The UPS Store® location. Get started today.",
    ctaLabel: "GET OFFER*",
    ctaUrl: "/#services",
  },
  {
    image: "/images/slider3.jpg",
    badge: "DHL Express International Courier",
    title: "Fast International Shipping",
    subtitle: "Reliable worldwide express courier and document delivery across 220+ countries and territories.",
    ctaLabel: "SHIP WORLDWIDE",
    ctaUrl: "/#services",
  },
  {
    image: "/images/slider4.jpg",
  },
  {
    image: "/images/slider5.jpg",
    badge: "Professional Printing & Copying",
    title: "Print & Marketing Materials",
    subtitle: "High-resolution color printing, flyers, brochures, and custom business stationery.",
    ctaLabel: "EXPLORE SERVICES",
    ctaUrl: "/#services",
  },
  {
    image: "/images/slider6.jpg",
  },
];

export default function ParcelHero({ slides }: { slides?: HeroSlide[] }) {
  const heroSlides = slides && slides.length > 0
    ? slides.map((s) => ({
        image: typeof s.image === "string" ? s.image : s.image ? getImageUrl(s.image) : "/images/slider2.jpg",
        badge: s.badge,
        title: s.title,
        subtitle: s.subtitle,
        ctaLabel: s.ctaLabel,
        ctaUrl: s.ctaUrl,
      }))
    : HERO_SLIDES;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      aria-label="Hero Slides"
      className="relative bg-surface overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Full container width slider card with no rounded corners */}
        <div className="relative w-full overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
          {/* Sliding track with standard horizontal slide animation */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={index}
                className="relative min-w-full w-full shrink-0 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]"
              >
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title || slide.badge || `Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-center"
                />

                {/* Top Right: Optional Badge */}
                {slide.badge && (
                  <div className="absolute top-5 right-5 sm:top-7 sm:right-8 z-10">
                    <span className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-1.5 text-xs sm:text-sm font-bold text-primary shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-success" />
                      {slide.badge}
                    </span>
                  </div>
                )}

                {/* Bottom Left: Title, Subtitle & CTA Overlay Card (Optional, preserves >80% image visibility) */}
                {/* Bottom Left: Title, Subtitle & CTA Overlay Card (Themed, preserves >80% image visibility) */}
                {(slide.title || slide.subtitle || (slide.ctaLabel && slide.ctaUrl)) && (
                  <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 z-10 max-w-[85%] sm:max-w-md lg:max-w-[440px] pointer-events-auto">
                    <div className="rounded-2xl border border-border/80 border-l-4 border-l-accent bg-surface/95 backdrop-blur-md p-5 sm:p-6 lg:p-7 shadow-[var(--shadow-card-hover)]">
                      {slide.title && (
                        <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-extrabold text-primary-dark tracking-tight leading-tight">
                          {slide.title}
                        </h2>
                      )}

                      {slide.subtitle && (
                        <p className="mt-2.5 text-xs sm:text-sm text-muted font-medium leading-relaxed">
                          {slide.subtitle}
                        </p>
                      )}

                      {slide.ctaLabel && slide.ctaUrl && (
                        <div className="mt-4 sm:mt-5">
                          <Link
                            href={slide.ctaUrl}
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-accent hover:text-primary-dark hover:shadow-md"
                          >
                            <span>{slide.ctaLabel}</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slider Dots (Centered at Bottom of Container, Transparent Background) */}
          <div
            role="tablist"
            aria-label="Slider Dots"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-transparent"
          >
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === activeSlide}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeSlide
                    ? "w-8 h-2.5 bg-accent ring-2 ring-surface shadow-md"
                    : "w-2.5 h-2.5 bg-surface/90 hover:bg-surface ring-1 ring-foreground/20 shadow-xs"
                }`}
              />
            ))}
          </div>

          {/* Chevron Icons (Bottom Right of Slider, Rounded Corner Action Buttons) */}
          <div className="absolute bottom-4 right-4 sm:right-6 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:bg-primary hover:text-on-primary hover:border-primary shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all duration-200 hover:bg-primary hover:text-on-primary hover:border-primary shadow-sm"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
