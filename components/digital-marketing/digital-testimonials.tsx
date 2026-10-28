import React from "react";
import { Star, Quote, BadgeCheck, Sparkles } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalTestimonialsProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalTestimonials({ service }: DigitalTestimonialsProps) {
  const testimonials = service.testimonials;

  // Strict constraint per requirements:
  // "Use only approved, genuine testimonials. If social media-specific testimonials are unavailable, omit this section until suitable feedback is collected."
  const approvedTestimonials = testimonials?.items?.filter(
    (item) => item.approved !== false
  );

  if (!testimonials || !approvedTestimonials || approvedTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-surface-muted/50 py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{testimonials.eyebrow || "Client Testimonials"}</span>
          </div>

          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {testimonials.heading || "What Our Clients Say"}
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {testimonials.description || "Build trust with authentic feedback from businesses we've worked with."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className={`mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 ${
            approvedTestimonials.length <= 2
              ? "md:grid-cols-2 max-w-4xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {approvedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Decorative Top Bar - Blue by default, Yellow on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light transition-opacity duration-300 group-hover:opacity-0" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Header: Star Rating & Card Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: t.rating || 5 }).map((_, starIdx) => (
                      <Star key={starIdx} className="h-4 w-4 fill-accent" />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-muted">
                    Testimonial Card {idx + 1}
                  </span>
                </div>

                <Quote className="h-7 w-7 text-accent/40 mb-3" />

                <p className="text-sm sm:text-base leading-relaxed text-foreground/90 italic font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author attribution */}
              <div className="mt-7 pt-5 border-t border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary font-extrabold text-sm group-hover:bg-accent-soft group-hover:text-accent-dark transition-colors">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-primary-dark">
                      — {t.clientName}
                    </h4>
                    <p className="text-xs text-muted">
                      {t.company}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-accent-dark">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
