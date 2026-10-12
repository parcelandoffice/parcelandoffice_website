"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Package,
  Plane,
  Printer,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/site-data";

const SLIDES = [
  {
    id: "fedex",
    eyebrow: "FedEx Authorized ShipCenter®",
    title: "FedEx Express®, Ground® & International",
    subtitle: "Daily scheduled courier pickups & same-day dispatch",
    description:
      "As Odenton's certified FedEx ShipCenter, drop off pre-paid packages with instant scan receipts, or create new shipments with express and ground delivery options across North America and worldwide.",
    icon: Plane,
    badgeClasses: "bg-carrier-fedex-light text-carrier-fedex border-carrier-fedex/20",
    primaryCta: { label: "Explore FedEx Services", href: "/#services" },
    secondaryCta: { label: "Call Store", href: BUSINESS.phoneHref },
    tag: "FedEx Express Cutoff: 6:00 PM",
  },
  {
    id: "ups",
    eyebrow: "Authorized Shipping Outlet",
    title: "UPS Next Day Air® & Worldwide Ground",
    subtitle: "Convenient drop-offs, expert boxing & tracking",
    description:
      "Skip long retail lines. Drop off your pre-labeled UPS packages, purchase certified shipping boxes, bubble cushioning, and access reliable daily UPS ground and air transit.",
    icon: Truck,
    badgeClasses: "bg-carrier-ups-light text-carrier-ups border-carrier-ups/20",
    primaryCta: { label: "Explore UPS Services", href: "/#services" },
    secondaryCta: { label: "Get Directions", href: BUSINESS.mapHref },
    tag: "UPS Air Cutoff: 5:30 PM",
  },
  {
    id: "dhl",
    eyebrow: "International Courier Specialists",
    title: "Fast DHL Express to Over 220 Countries",
    subtitle: "Door-to-door global export & import delivery",
    description:
      "Time-critical international packages require specialist care. We provide commercial invoice preparation, customs compliance support, and expedited worldwide transport via DHL Express.",
    icon: Package,
    badgeClasses: "bg-carrier-dhl-light text-carrier-dhl border-carrier-dhl/20",
    primaryCta: { label: "International Shipping", href: "/#services" },
    secondaryCta: { label: "Contact Specialists", href: "/contact-us" },
    tag: "DHL Express Cutoff: 5:30 PM",
  },
  {
    id: "usps",
    eyebrow: "Approved Postal Provider",
    title: "USPS Priority Mail® & Certified Services",
    subtitle: "Skip the post office wait in Odenton",
    description:
      "Pick up stamps, send domestic Priority Mail flat-rate boxes, certified letters, and hand off pre-paid returns in a friendly, hassle-free neighborhood center.",
    icon: Mail,
    badgeClasses: "bg-carrier-usps-light text-carrier-usps border-carrier-usps/20",
    primaryCta: { label: "Postal & Drop-Off Services", href: "/#services" },
    secondaryCta: { label: "Store Hours", href: "/#tracking" },
    tag: "USPS Postal Cutoff: 4:00 PM",
  },
  {
    id: "print",
    eyebrow: "Full-Service Document Center",
    title: "Commercial Printing, Menus & Marketing",
    subtitle: "Crisp color printing, banners, flyers & business cards",
    description:
      "Your one-stop document hub in Odenton. High-speed copying, large format banners, custom takeout menus, laminating, document scanning, and notary public services.",
    icon: Printer,
    badgeClasses: "bg-badge-teal-light text-badge-teal border-badge-teal/20",
    primaryCta: { label: "View Printing Directory", href: "/#services" },
    secondaryCta: { label: "Call for Quote", href: BUSINESS.phoneHref },
    tag: "Same-Day Print Options",
  },
];

export default function ContainerBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[current];
  const Icon = slide.icon;

  return (
    <section
      aria-label="Promotional Banners"
      className="py-6 sm:py-8 bg-surface border-b border-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Container-length Banner Card */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-surface via-surface-muted to-surface p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
          {/* Top Carrier Accent Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold ${slide.badgeClasses}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{slide.eyebrow}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-muted">
              <span className="flex h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-foreground">{slide.tag}</span>
            </div>
          </div>

          {/* Main Slide Content */}
          <div className="mt-6 grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {slide.subtitle}
              </p>

              <h2 className="font-display mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {slide.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {slide.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={slide.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-on-primary transition-all duration-200 hover:bg-primary-dark shadow-xs"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>

                <a
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  {slide.secondaryCta.label}
                </a>
              </div>
            </div>

            {/* Carrier Visual Emblem Card */}
            <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
              <div className="flex h-44 w-44 flex-col items-center justify-center rounded-2xl border border-border bg-surface p-6 text-center shadow-xs">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <span className="mt-3 font-display text-sm font-extrabold text-foreground">
                  {slide.eyebrow}
                </span>
                <span className="text-[11px] font-medium text-muted">
                  Official Ship Outlet
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-5">
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2" role="tablist">
              {SLIDES.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  role="tab"
                  aria-selected={index === current}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-muted"
                  }`}
                />
              ))}
              <span className="ml-2 font-mono text-xs text-muted">
                0{current + 1} / 0{SLIDES.length}
              </span>
            </div>

            {/* Previous / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
