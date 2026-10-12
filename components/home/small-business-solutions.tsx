"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import RevealCss from "@components/ui/reveal-css";
import { SMALL_BUSINESS_SOLUTIONS } from "@/lib/site-data";

export default function SmallBusinessSolutions() {
  return (
    <section
      id="business-solutions"
      aria-labelledby="business-solutions-heading"
      className="section-anchor bg-surface py-16 sm:py-20 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Reference 2 */}
        <RevealCss>
          <div className="text-center max-w-3xl mx-auto">
            <h2
              id="business-solutions-heading"
              className="font-display text-2xl font-normal text-foreground tracking-tight sm:text-3xl lg:text-4xl"
            >
              Tips and Advice for Small Business Owners
            </h2>
            <div className="mt-2 h-1 w-16 bg-badge-teal mx-auto rounded-full" />
          </div>
        </RevealCss>

        {/* 3-Column Grid matching Reference 2 */}
        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Solutions List with Circular Color Icons */}
          <RevealCss direction="right" className="flex flex-col justify-between lg:col-span-4">
            <div>
              <p className="text-sm font-semibold text-muted mb-6">
                How Can Parcel &amp; Office Help You?
              </p>

              <ul className="space-y-4">
                {SMALL_BUSINESS_SOLUTIONS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3.5 rounded-xl p-2 transition-colors hover:bg-surface-muted"
                      >
                        {/* Circular colored icon matching Reference 2 */}
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bgToken} text-on-primary shadow-xs transition-transform duration-200 group-hover:scale-105`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>

                        <div className="min-w-0">
                          <span className="block text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                            {item.title}
                          </span>
                          <span className="block text-xs text-muted line-clamp-1">
                            {item.description}
                          </span>
                        </div>

                        <ChevronRight
                          className="ml-auto h-4 w-4 shrink-0 text-muted opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Pill button matching Reference 2 ("More Solutions") */}
            <div className="pt-6">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 rounded-full bg-badge-teal px-6 py-2.5 text-xs font-bold text-on-primary transition-all duration-200 hover:bg-primary-dark shadow-xs"
              >
                More Solutions
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </RevealCss>

          {/* Middle Column: Packing Specialist Photo Card */}
          <RevealCss delay={0.1} className="lg:col-span-4">
            <div className="group relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)]">
              <div className="relative h-full w-full min-h-[380px]">
                <Image
                  src="/images/courier-associate-packing.jpg"
                  alt="Certified packaging specialist professionally packing and securing a parcel box"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-on-dark">
                  <span className="inline-block rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase text-on-primary">
                    Expert Packing
                  </span>
                  <h3 className="font-display mt-2 text-lg font-bold text-on-dark leading-tight">
                    Custom Boxing &amp; Fragile Packaging
                  </h3>
                  <p className="mt-1 text-xs text-on-dark/80 line-clamp-2">
                    Professional boxing, cushioning, and carrier-approved materials to ensure safe transit every time.
                  </p>
                </div>
              </div>
            </div>
          </RevealCss>

          {/* Right Column: Small Business Owner Photo Card */}
          <RevealCss delay={0.2} className="lg:col-span-4">
            <div className="group relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)]">
              <div className="relative h-full w-full min-h-[380px]">
                <Image
                  src="/images/small-biz-owner.jpg"
                  alt="Small business entrepreneur and local maker in her studio workshop"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-on-dark">
                  <span className="inline-block rounded-md bg-badge-orange px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase text-on-primary">
                    Business Growth
                  </span>
                  <h3 className="font-display mt-2 text-lg font-bold text-on-dark leading-tight">
                    Supporting Odenton&apos;s Local Entrepreneurs
                  </h3>
                  <p className="mt-1 text-xs text-on-dark/80 line-clamp-2">
                    From direct mail campaigns to scheduled daily pickups, we take care of operations so you can build your business.
                  </p>
                </div>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
}
