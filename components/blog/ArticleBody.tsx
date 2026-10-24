"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Lightbulb,
  Truck,
  Package,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Share2,
  Copy,
  Check,
  Quote,
  Layers,
  FileCheck2,
  Building2,
  Info,
} from "lucide-react";
import type { SanityPost } from "@/lib/types";
import type { StaticBlogItem } from "@/lib/static-blogs";
import BlogPortableText from "@/components/blog/BlogPortableText";
import { BUSINESS } from "@/lib/site-data";

interface ArticleBodyProps {
  blogDetail: SanityPost;
  staticItem?: StaticBlogItem;
}

export default function ArticleBody({
  blogDetail,
  staticItem,
}: ArticleBodyProps) {
  const [copied, setCopied] = useState(false);

  const paragraphs =
    staticItem?.contentParagraphs && staticItem.contentParagraphs.length > 0
      ? staticItem.contentParagraphs
      : [
          blogDetail.short_description ||
            "Reliable shipping and smart packaging solutions are fundamental for individuals and thriving modern businesses.",
          "Choosing authorized carrier networks ensures your domestic packages and international air freight are handled with utmost security, speed, and transparent tracking.",
          "At Parcel and Office Solutions in Odenton, MD, our experienced packaging specialists provide multi-carrier rate comparisons, custom box crafting, and comprehensive office solutions.",
        ];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform: "twitter" | "linkedin" | "whatsapp" | "facebook") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogDetail.title);

    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  // Check if body has custom Sanity PortableText blocks with headings
  const hasCustomSanityContent =
    blogDetail.body &&
    blogDetail.body.length > 0 &&
    blogDetail.body.some((b) => b.style === "h2" || b.style === "h3");

  return (
    <div className="article-body space-y-12 text-foreground/90">
      {/* ================= SECTION 1: OVERVIEW & HIGHLIGHTS ================= */}
      <section
        id="overview-highlights"
        className="scroll-mt-28 space-y-6"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            1. Overview & Key Takeaways
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-muted sm:text-xl font-normal">
          {paragraphs[0]}
        </p>

        {/* Highlights Callout Card */}
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent-soft/40 via-surface to-surface p-6 shadow-xs sm:p-7">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-white shadow-xs">
              <Sparkles className="h-4 w-4" />
            </span>
            <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
              Key Article Highlights
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/80 p-3.5 shadow-2xs">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 leading-snug">
                <strong>Multi-Carrier Access:</strong> Compare live rates and transit speeds across UPS, FedEx, DHL, and USPS in one stop.
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/80 p-3.5 shadow-2xs">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 leading-snug">
                <strong>Damage-Free Protection:</strong> High-density cushioning and double-wall cartons protect delicate electronics and valuables.
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/80 p-3.5 shadow-2xs">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 leading-snug">
                <strong>Customs Compliance:</strong> Streamline export declarations, commercial invoices, and harmonized tariff codes effortlessly.
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/80 p-3.5 shadow-2xs">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
              <div className="text-xs sm:text-sm text-foreground/90 leading-snug">
                <strong>Local Convenience:</strong> Convenient Odenton storefront with scheduled daily carrier pickup cutoff times.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GUIDELINES & STANDARDS ================= */}
      <section
        id="guidelines-standards"
        className="scroll-mt-28 space-y-6 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            2. Essential Guidelines & Standards
          </h2>
        </div>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {paragraphs[1] ||
            "Whether sending important corporate documents across state lines or shipping commercial inventory globally, following established courier packaging standards ensures punctual delivery without handling surcharges."}
        </p>

        {/* Featured Quote / Insight Banner */}
        <div className="relative overflow-hidden rounded-2xl border-l-4 border-accent bg-surface-muted p-6 sm:p-8">
          <Quote className="absolute right-4 top-4 h-16 w-16 text-primary/5 pointer-events-none" />
          <blockquote className="relative z-10">
            <p className="text-base font-medium italic leading-relaxed text-primary sm:text-lg">
              &ldquo;Accurate parcel preparation and understanding dimensional weight rules save up to 30% on commercial transit fees. Ensuring labels are unobstructed and boxes are properly sealed is the first line of defense against delays.&rdquo;
            </p>
            <footer className="mt-4 flex items-center gap-3">
              <span className="h-px w-6 bg-accent" />
              <cite className="text-xs font-bold uppercase tracking-wider text-muted not-italic">
                Parcel & Office Solutions Logistics Standards
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Core Standards Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="mb-2 flex items-center gap-2 text-primary font-bold text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Box Integrity</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Use rigid corrugated cardboard with intact structural flaps. Avoid reusing worn boxes that have lost burst strength.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="mb-2 flex items-center gap-2 text-primary font-bold text-sm">
              <Layers className="h-4 w-4 text-accent" />
              <span>H-Tape Sealing</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Apply heavy-duty 2-inch wide pressure-sensitive plastic tape along center seams and both edge seams in an &ldquo;H&rdquo; pattern.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4 shadow-2xs">
            <div className="mb-2 flex items-center gap-2 text-primary font-bold text-sm">
              <FileCheck2 className="h-4 w-4 text-accent" />
              <span>Label Placement</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Position carrier shipping labels flat on the largest surface. Never wrap barcode labels over edges, corners, or seams.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: STEP-BY-STEP PROCESS ================= */}
      <section
        id="step-by-step-guide"
        className="scroll-mt-28 space-y-6 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            3. Step-by-Step Practical Guide
          </h2>
        </div>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Follow our proven four-step packing and dispatch routine to ensure seamless clearance and prompt receipt:
        </p>

        {/* Process Cards */}
        <div className="space-y-4">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-xs sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-display text-lg font-bold shadow-xs">
              01
            </div>
            <div className="flex-1">
              <h4 className="font-display text-base font-bold text-foreground">
                Item Assessment & Dimension Measurement
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                Weigh your parcel accurately and record length, width, and height. Factor in minimum 2-inch void space on all sides for internal cushioning.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-xs sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-display text-lg font-bold shadow-xs">
              02
            </div>
            <div className="flex-1">
              <h4 className="font-display text-base font-bold text-foreground">
                Cushioning Wrap & Shock Isolation
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                Wrap fragile items individually in bubble wrap or honeycomb kraft paper. Fill all remaining voids with biodegradable peanuts or air pillows so items cannot shift.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-xs sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-display text-lg font-bold shadow-xs">
              03
            </div>
            <div className="flex-1">
              <h4 className="font-display text-base font-bold text-foreground">
                Compare Multi-Carrier Rates & Speeds
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                Evaluate delivery guarantees, pickup cutoffs, and pricing across FedEx, UPS, DHL Express, and USPS to pick the best carrier for your destination and budget.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-xs sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white font-display text-lg font-bold shadow-xs">
              04
            </div>
            <div className="flex-1">
              <h4 className="font-display text-base font-bold text-foreground">
                Counter Drop-off & Real-Time Tracking Activation
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                Drop off your parcel at our Odenton counter before daily carrier pickup. Receive instant verified receipt and automated digital tracking updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: CARRIER SOLUTIONS ================= */}
      <section
        id="carrier-solutions"
        className="scroll-mt-28 space-y-6 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            4. Carrier Options & Service Comparison
          </h2>
        </div>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          As an authorized multi-carrier service center, Parcel & Office Solutions provides direct counter drop-off and pickup across all four premier logistics networks:
        </p>

        {/* Carrier Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* UPS */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-[#351c15] px-3 py-1 text-xs font-bold text-[#ffb500]">
                UPS Authorized Drop-Off
              </span>
              <span className="text-[11px] font-semibold text-muted">Daily Pickup</span>
            </div>
            <h4 className="mt-3 font-display text-base font-bold text-foreground">
              UPS Ground & Air Services
            </h4>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Industry leader in ground freight reliability and heavy package shipping. Carbon-neutral offset options available on all shipments directly at our desk.
            </p>
            <div className="mt-3 text-[11px] font-medium text-primary">
              Best for: B2B freight, ground parcels, returns drop-offs.
            </div>
          </div>

          {/* FedEx */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-[#4d148c] px-3 py-1 text-xs font-bold text-white">
                FedEx Authorized ShipCenter
              </span>
              <span className="text-[11px] font-semibold text-muted">Daily Pickup</span>
            </div>
            <h4 className="mt-3 font-display text-base font-bold text-foreground">
              FedEx Express & Ground
            </h4>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Unrivaled domestic overnight delivery options including Priority Overnight (10:30 AM) and Standard Overnight. Full QR code mobile return support.
            </p>
            <div className="mt-3 text-[11px] font-medium text-primary">
              Best for: Time-critical documents, urgent domestic shipments.
            </div>
          </div>

          {/* DHL Express */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-[#d40511] px-3 py-1 text-xs font-bold text-[#ffcc00]">
                DHL Express ServicePoint
              </span>
              <span className="text-[11px] font-semibold text-muted">International Lead</span>
            </div>
            <h4 className="mt-3 font-display text-base font-bold text-foreground">
              DHL Worldwide Priority
            </h4>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              The premier choice for cross-border courier delivery in 220+ countries. Fast customs electronic pre-clearance reduces international transit by days.
            </p>
            <div className="mt-3 text-[11px] font-medium text-primary">
              Best for: Global exports, international documents, overseas family parcels.
            </div>
          </div>

          {/* USPS */}
          <div className="rounded-2xl border border-border bg-surface p-5 shadow-xs transition-transform duration-200 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="rounded-lg bg-[#002b66] px-3 py-1 text-xs font-bold text-white">
                USPS Approved Provider
              </span>
              <span className="text-[11px] font-semibold text-muted">Affordable Standard</span>
            </div>
            <h4 className="mt-3 font-display text-base font-bold text-foreground">
              USPS Priority Mail & First-Class
            </h4>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              The most economical solution for lightweight items, PO Boxes, and military APO/FPO/DPO destinations across all 50 states.
            </p>
            <div className="mt-3 text-[11px] font-medium text-primary">
              Best for: Everyday residential mail, flat-rate boxes, military mail.
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PRO TIPS & COST SAVINGS ================= */}
      <section
        id="pro-tips-savings"
        className="scroll-mt-28 space-y-6 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            5. Pro Tips & Cost Optimization
          </h2>
        </div>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {paragraphs[2] ||
            "Small adjustments in how packages are prepped and timed yield major operational savings for households and small businesses alike."}
        </p>

        {/* Pro Tips Cards */}
        <div className="space-y-3.5">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-r from-surface to-surface-muted p-4.5 shadow-2xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent mt-0.5">
              <Lightbulb className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold text-foreground">
                Eliminate Empty Space to Avoid Dimensional (DIM) Weight Penalties
              </h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Carriers charge based on volume if a parcel is large but lightweight. Custom-cutting cartons to fit the contents prevents paying for empty air.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-r from-surface to-surface-muted p-4.5 shadow-2xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent mt-0.5">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold text-foreground">
                Drop Off Before Scheduled Daily Carrier Cutoffs
              </h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Parcels dropped off before late afternoon cutoff times depart on the same business day, preventing overnight warehouse transit delays.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-to-r from-surface to-surface-muted p-4.5 shadow-2xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent mt-0.5">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <h4 className="font-display text-sm font-bold text-foreground">
                Consolidate Shipments with Commercial Accounts
              </h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Local entrepreneurs and home-based businesses can set up corporate accounts with Parcel & Office for volume discounts, free supplies pickup, and priority check-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: SUMMARY & ACTIONABLE ADVICE ================= */}
      <section
        id="summary-conclusion"
        className="scroll-mt-28 space-y-6 pt-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block h-6 w-1 rounded-full bg-accent" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            6. Summary & Actionable Advice
          </h2>
        </div>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Mastering modern shipping and packaging comes down to three essentials: selecting the proper box durability, utilizing industry-standard cushioning, and comparing rates across trusted authorized couriers.
        </p>

        {/* Store Action Banner */}
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary via-primary-dark to-secondary p-7 text-white shadow-md sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                <Truck className="h-4 w-4" />
                <span>Odenton, MD Store Location</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl text-white">
                Visit Parcel & Office Solutions Today
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed">
                Located beside Food Lion at 8777 Piney Orchard Pkwy Suite B. Bring your items directly to our counter for custom packing, multi-carrier rate check, notary authentication, and secure drop-offs.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:shrink-0">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-bold text-white shadow-sm transition-transform duration-200 hover:scale-105"
              >
                Call: {BUSINESS.phone}
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
              >
                Store Hours & Map
              </Link>
            </div>
          </div>
        </div>

        {/* Tags Cloud */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-muted">
            Tags:
          </span>
          {[
            blogDetail.categories?.[0]?.title || "Shipping",
            "Logistics",
            "PackagingTips",
            "CarrierComparison",
            "OdentonMD",
            "SmallBusiness",
          ].map((tag, idx) => (
            <span
              key={idx}
              className="rounded-lg border border-border bg-surface px-3 py-1 text-xs font-medium text-muted hover:border-primary/40 hover:text-primary transition-colors cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
            <Share2 className="h-4 w-4 text-accent" />
            <span>Share This Guide:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleShare("twitter")}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
              title="Share on X / Twitter"
            >
              <span className="text-xs font-bold">𝕏</span>
            </button>
            <button
              type="button"
              onClick={() => handleShare("linkedin")}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
              title="Share on LinkedIn"
            >
              <span className="text-xs font-bold">in</span>
            </button>
            <button
              type="button"
              onClick={() => handleShare("whatsapp")}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp"
              title="Share on WhatsApp"
            >
              <span className="text-xs font-bold">WA</span>
            </button>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary"
              title="Copy Link"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-success" />
                  <span className="text-success">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* If custom Sanity content exists, also render it cleanly */}
      {hasCustomSanityContent && (
        <section className="pt-6 border-t border-border/80">
          <h3 className="mb-6 font-display text-xl font-bold text-foreground">
            Additional Article Content
          </h3>
          <BlogPortableText content={blogDetail.body} />
        </section>
      )}
    </div>
  );
}
