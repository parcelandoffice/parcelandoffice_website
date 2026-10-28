"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { DigitalMarketingServiceData } from "@/lib/digital-marketing-data";

interface DigitalFaqProps {
  service: DigitalMarketingServiceData;
}

export default function DigitalFaq({ service }: DigitalFaqProps) {
  const faqs = service.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || !faqs.items || faqs.items.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-surface-muted/40 py-14 sm:py-20 lg:py-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
            <span>{faqs.eyebrow}</span>
          </div>

          <h2 className="font-display mt-3 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl">
            {faqs.heading}
          </h2>

          {faqs.description && (
            <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
              {faqs.description}
            </p>
          )}
        </div>

        {/* Accordion FAQ Items */}
        <div className="mt-10 sm:mt-12 space-y-3.5">
          {faqs.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-surface shadow-[var(--shadow-card)]"
                    : "border-border/80 bg-surface hover:border-accent/40"
                }`}
              >
                <button
                  type="button"
                  id={questionId}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                        isOpen
                          ? "bg-accent text-white"
                          : "bg-primary-soft text-primary"
                      }`}
                    >
                      Q
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-primary-dark">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/60 px-6 pt-4 pb-6 text-sm sm:text-base leading-relaxed text-muted font-normal pl-16">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
