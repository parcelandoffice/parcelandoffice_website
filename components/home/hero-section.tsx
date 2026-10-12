import Link from "next/link";
import Image from "next/image";
import { HomePageData } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import HeroPracticeAreasLink from "./hero-practice-areas-link";

export default function HeroSection({
  homePageData,
  heroImageUrl,
}: {
  homePageData: HomePageData;
  heroImageUrl: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="hero-stagger">
          <p className="hero-animate-item mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            RP Law Firm
          </p>
          <h1 className="hero-animate-item text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {homePageData.heroTitle}{" "}
            {homePageData.heroHighlightText && (
              <span className="italic text-accent">
                {homePageData.heroHighlightText}
              </span>
            )}
          </h1>
          <p className="hero-animate-item mt-6 max-w-xl text-lg leading-relaxed text-white">
            {homePageData.heroSubtitle ||
              "At RP Law Firm, we provide trusted legal counsel and effective representation with professionalism, integrity, and dedication. We are committed to protecting your rights and delivering practical legal solutions tailored to your needs."}
          </p>

          <div className="hero-animate-item mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="group inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-primary shadow-lg shadow-accent/20 transition-colors hover:bg-accent-light"
            >
              {homePageData.ctaButtonText || "Schedule a Consultation"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <HeroPracticeAreasLink className="inline-flex items-center rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
              Explore Practice Areas
            </HeroPracticeAreasLink>
          </div>
        </div>

        <div className="hero-image-animate relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={heroImageUrl}
              alt={
                homePageData.heroImage?.alt ||
                (homePageData.heroTitle
                  ? `${homePageData.heroTitle} - RP Law Firm`
                  : "RP Law Firm hero image")
              }
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-surface p-5 sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">98% Client Satisfaction</p>
                <p className="text-xs text-muted">Proven track record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
