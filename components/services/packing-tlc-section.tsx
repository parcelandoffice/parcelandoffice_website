import React from "react";
import Link from "next/link";
import { PackageOpen, Sparkles, ShieldCheck, HeartHandshake, Box, ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/lib/service-details";

export default function PackingTlcSection({ service }: { service: ServiceDetail }) {
  const { packingCommitment } = service;

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-card)]">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-accent">
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Packed with Care &amp; TLC</span>
          </div>

          <h2 className="font-display mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            {packingCommitment.title}
          </h2>

          <blockquote className="mt-3 border-l-2 border-accent pl-4 text-sm font-semibold italic text-white/90 leading-relaxed">
            &ldquo;{packingCommitment.quote}&rdquo;
          </blockquote>

          <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
            {packingCommitment.body}
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {packingCommitment.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary-dark">
                  <ShieldCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action / Boxes Highlight Card */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary-dark shadow-md">
            <Box className="h-7 w-7" />
          </div>

          <h3 className="font-display mt-4 text-base font-extrabold text-white">
            Need Shipping Supplies?
          </h3>
          <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
            Over 30+ corrugated box sizes, padded envelopes, mailing tubes, and bubble cushion in stock today.
          </p>

          <Link
            href="/services/packaging-supplies"
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-primary-dark transition-all hover:bg-accent-light shadow-xs"
          >
            <span>Explore Packaging Supplies</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
