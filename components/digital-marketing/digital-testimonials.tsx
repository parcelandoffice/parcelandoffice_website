import React from "react";
import { Star, Quote } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalTestimonialsProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalTestimonials({ service }: DigitalTestimonialsProps) {
  const testimonials = service.testimonials;

  // Strict constraint per requirements:
  // "Use only approved, genuine testimonials. If social media-specific testimonials are unavailable, omit this section until suitable feedback is collected."
  const approvedTestimonials = testimonials?.items?.filter(
    (item) => item.approved === true
  );

  if (!testimonials || !approvedTestimonials || approvedTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-surface-muted/50 py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-black uppercase tracking-wider text-accent">
            {testimonials.eyebrow || "Client Testimonials"}
          </span>

          <h2 className="font-display mt-2.5 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {testimonials.heading || "What Our Clients Say"}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-muted">
            {testimonials.description || "Build trust with authentic feedback from businesses we've worked with."}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approvedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-accent mb-4">
                  {Array.from({ length: t.rating || 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-accent" />
                  ))}
                </div>

                <Quote className="h-6 w-6 text-accent/30 mb-2" />

                <p className="text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary font-bold text-sm">
                  {t.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-primary-dark">
                    {t.clientName}
                  </h4>
                  <p className="text-xs text-muted">
                    {t.role ? `${t.role}, ` : ""}{t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
