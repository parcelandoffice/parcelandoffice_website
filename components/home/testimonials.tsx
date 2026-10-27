"use client";

import type { HomeTestimonial } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";
import RevealCss from "../ui/reveal-css";
import { Quote, Star } from "lucide-react";

const MAX_QUOTE_LENGTH = 145;

const defaultTestimonials: (HomeTestimonial & { role?: string })[] = [
  {
    _id: "test-1",
    star: 5,
    name: "Marcus Taylor",
    role: "Odenton Local Resident",
    description:
      "The team at Parcel & Office Solutions makes shipping completely painless. I drop off my FedEx and UPS packages here weekly, and they always provide drop-off receipts with a smile. Having all major carriers in one spot right beside Food Lion is a huge time-saver.",
  },
  {
    _id: "test-2",
    star: 5,
    name: "Sarah Jenkins",
    role: "Anne Arundel County",
    description:
      "I needed fragile family heirlooms securely packed and shipped internationally via DHL Express. They custom-boxed everything with incredible care and helped with customs documentation. The package arrived safely and right on time!",
  },
  {
    _id: "test-3",
    star: 5,
    name: "David Rodriguez",
    role: "Local Business Owner",
    description:
      "Their private mailbox rental and notary public services have been a total game-changer for my business. Having a real street address to receive packages from FedEx, UPS, and USPS has given my company great credibility. Outstanding staff!",
  },
  {
    _id: "test-4",
    star: 5,
    name: "Emily Watson",
    role: "Fort Meade Community",
    description:
      "Super fast and convenient service. I needed several legal documents printed, scanned, and notarized on a Saturday morning. Everything was completed in under 15 minutes with complete professionalism. Highly recommend!",
  },
  {
    _id: "test-5",
    star: 5,
    name: "Brian Miller",
    role: "Piney Orchard Resident",
    description:
      "Best shipping store around. The staff patiently compared delivery speeds and rates between USPS and UPS for my urgent packages. Transparent pricing and exceptional customer care right here in our neighborhood.",
  },
];

function truncateQuote(quote: string, maxLength: number) {
  if (quote.length <= maxLength) return quote;

  const truncated = quote.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.7) {
    return truncated.slice(0, lastSpace);
  }

  return truncated;
}

function TestimonialQuote({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > MAX_QUOTE_LENGTH;
  const displayQuote =
    expanded || !isLong ? quote : truncateQuote(quote, MAX_QUOTE_LENGTH);

  return (
    <blockquote className="min-h-24 flex-1 text-muted text-sm sm:text-base leading-relaxed">
      <p>
        &ldquo;{displayQuote}
        {!expanded && isLong && "…"}&rdquo;
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-xs font-bold text-accent transition-colors hover:text-accent-dark cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </blockquote>
  );
}

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setSlidesToShow(mediaQuery.matches ? 3 : 1);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return slidesToShow;
}

type TestimonialsProps = {
  testimonialTag?: string;
  testimonialTitle?: string;
  testimonialDescription?: string;
  testimonials?: HomeTestimonial[];
};

export default function Testimonials({
  testimonialTag = "CUSTOMER TESTIMONIALS",
  testimonialTitle = "Trusted by Our Odenton Community",
  testimonialDescription = "See why residents, military families, and local businesses in Odenton and Anne Arundel County rely on Parcel & Office Solutions for seamless shipping, packing, printing, and notary services.",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  const items = testimonials?.length ? testimonials : defaultTestimonials;
  const slidesToShow = useSlidesToShow();
  const maxIndex = Math.max(0, items.length - slidesToShow);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex],
  );

  const next = useCallback(() => {
    goTo(current >= maxIndex ? 0 : current + 1);
  }, [current, maxIndex, goTo]);

  const prev = useCallback(() => {
    goTo(current <= 0 ? maxIndex : current - 1);
  }, [current, maxIndex, goTo]);

  const showSlider = items.length > slidesToShow;

  const visible = showSlider
    ? items.slice(current, current + slidesToShow)
    : items;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-surface-muted/40 py-16 sm:py-20 lg:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="flex flex-col items-center">
          <SectionHeading
            markAs="h2"
            eyebrow={testimonialTag}
            title={testimonialTitle}
            description={testimonialDescription}
          />
        </RevealCss>

        <div className="relative mt-12 sm:mt-14">
          <div
            className={`grid gap-6 ${
              slidesToShow === 3 && items.length >= 3
                ? "lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {visible.map((testimonial) => {
              const initials = testimonial.name
                ? testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()
                : "PO";

              const role =
                (testimonial as any).role || "Verified Customer • Odenton, MD";

              return (
                <article
                  key={testimonial._id}
                  className="group relative flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-surface p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-accent hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: 5 Stars & Quote Icon */}
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="flex gap-1 text-accent"
                        aria-label={`Rated ${testimonial.star || 5} out of 5 stars`}
                      >
                        {Array.from({ length: testimonial.star || 5 }).map(
                          (_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-4 w-4 fill-accent text-accent"
                            />
                          ),
                        )}
                      </div>
                      <Quote className="h-7 w-7 text-primary/10 transition-colors group-hover:text-accent/20" />
                    </div>

                    {/* Quote Content */}
                    <TestimonialQuote quote={testimonial.description} />
                  </div>

                  {/* Customer Footer with Initials Avatar */}
                  <footer className="mt-6 flex items-center gap-3.5 border-t border-border/70 pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-black text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {initials}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold text-primary-dark">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted font-medium truncate">
                        {role}
                      </p>
                    </div>
                  </footer>
                </article>
              );
            })}
          </div>

          {/* Slider Pagination & Controls */}
          {showSlider && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent cursor-pointer shadow-2xs"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      index === current
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-all duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent cursor-pointer shadow-2xs"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
