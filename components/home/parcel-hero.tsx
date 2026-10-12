"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type HeroSlide = {
  image: string;
  badge?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/slider2.jpg",
    badge: "UPS Authorized Shipping Outlet",
    ctaLabel: "Explore UPS Services",
    ctaUrl: "/#services",
  },
  {
    image: "/images/slider3.jpg",
    badge: "DHL Express International Courier"
  },
  {
    image: "/images/slider4.jpg",
  },
  {
    image: "/images/slider5.jpg",
  },
  {
    image: "/images/slider6.jpg"
  },
];

export default function ParcelHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      aria-label="Hero Slides"
      className="relative bg-surface "
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
                  alt={slide.badge || `Slide ${index + 1}`}
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

                {/* Bottom Left: Optional CTA */}
                {slide.ctaLabel && slide.ctaUrl && (
                  <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
                    <Link
                      href={slide.ctaUrl}
                      className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold text-on-primary transition-all duration-200 hover:bg-primary-dark shadow-[var(--shadow-card)]"
                    >
                      <span>{slide.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
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
                className={`transition-all duration-300 rounded-full ${index === activeSlide
                  ? "w-8 h-2.5 bg-primary ring-2 ring-surface shadow-md"
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
