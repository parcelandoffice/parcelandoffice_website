"use client";

import type { HomeTestimonial } from "@/lib/types";
import { useCallback, useEffect, useState } from "react";
import SectionHeading from "../ui/section-heading";
import RevealCss from "../ui/reveal-css";

const MAX_QUOTE_LENGTH = 125;

const defaultTestimonials: HomeTestimonial[] = [
  {
    _id: "default-1",
    star: 5,
    description:
      "RP Law Firm handled our corporate legal matters with exceptional professionalism. Their strategic advice and prompt communication gave us complete confidence throughout the process. I highly recommend their services.",
    name: "Rahul Mehta",
  },
  {
    _id: "default-2",
    star: 5,
    description:
      "I was impressed by their professionalism, transparency, and dedication. They handled my legal matter efficiently and kept me informed at every stage. I truly appreciate their support.",
    name: "Neha Desai",
  },
  {
    _id: "default-3",
    star: 5,
    description:
      "From contract drafting to legal consultation, RP Law Firm has been a dependable legal partner for our business. Their expertise and attention to detail have been invaluable.",
    name: "Amit Patel",
  },
  {
    _id: "default-4",
    star: 5,
    description:
      "The team was knowledgeable, approachable, and genuinely committed to achieving the best outcome for my case. They explained every legal step clearly and made the entire process stress-free.",
    name: "Priya Shah",
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
    <blockquote className="min-h-28 flex-1 text-muted leading-relaxed">
      <p>
        &ldquo;{displayQuote}
        {!expanded && isLong && "…"}&rdquo;
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
        >
          {expanded ? "Read less" : "Read more"}
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
  testimonialTag = "Client Stories",
  testimonialTitle = "What Our Clients Say",
  testimonialDescription = "Trusted by individuals, families, and businesses for reliable legal counsel, transparent communication, and dedicated representation. Here's what our clients have to say about their experience with RP Law Firm.",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {


  const items =
    testimonials?.length ? testimonials : defaultTestimonials;
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

  const showSlider = items.length > 3;

  const visible = showSlider
    ? items.slice(current, current + slidesToShow)
    : items;

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="flex flex-col items-center">
          <SectionHeading
            eyebrow={testimonialTag}
            title={testimonialTitle}
            description={testimonialDescription}
          />
        </RevealCss>

        <div className="relative mt-14">
          <div
            className={`grid gap-6 ${
              slidesToShow === 3 && items.length >= 3
                ? "lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {visible.map((testimonial) => (
              <article
                key={testimonial._id}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm"
              >
                <div
                  className="mb-4 flex gap-1 text-accent"
                  aria-label={`Rated ${testimonial.star} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.star }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <TestimonialQuote quote={testimonial.description} />
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </footer>
              </article>
            ))}
          </div>

          {showSlider && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
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
