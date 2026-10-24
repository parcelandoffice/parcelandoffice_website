"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Check, Copy } from "lucide-react";
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
          blogDetail?.short_description ||
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
    const text = encodeURIComponent(blogDetail?.title || "Parcel and Office Solutions");

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

  const hasSanityBody =
    blogDetail?.body &&
    blogDetail.body.length > 0 &&
    blogDetail.body.some((b) => b.style === "h2" || b.style === "h3");

  return (
    <div className="article-body space-y-12 text-foreground/90">
      {/* ================= SECTION 1: OVERVIEW & KEY TAKEAWAYS ================= */}
      <section id="overview-highlights" className="scroll-mt-28 space-y-4">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>1. Overview &amp; Key Takeaways</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          {paragraphs[0]}
        </p>

        <h3 className="pt-2 font-display text-lg font-bold text-foreground sm:text-xl">
          Key Article Highlights
        </h3>

        <ul className="list-disc space-y-2.5 pl-6 text-foreground/80 marker:text-accent leading-relaxed">
          <li>
            <strong className="font-semibold text-foreground">Multi-Carrier Access:</strong> Compare live rates and transit speeds across UPS, FedEx, DHL, and USPS in one stop.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Damage-Free Protection:</strong> High-density cushioning and double-wall cartons protect delicate electronics and valuables.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Customs Compliance:</strong> Streamline export declarations, commercial invoices, and harmonized tariff codes effortlessly.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Local Convenience:</strong> Convenient Odenton storefront with scheduled daily carrier pickup cutoff times.
          </li>
        </ul>
      </section>

      {/* ================= SECTION 2: ESSENTIAL GUIDELINES & STANDARDS ================= */}
      <section id="guidelines-standards" className="scroll-mt-28 space-y-4 pt-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>2. Essential Guidelines &amp; Standards</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          {paragraphs[1] ||
            "Whether sending important corporate documents across state lines or shipping commercial inventory globally, following established courier packaging standards ensures punctual delivery without handling surcharges."}
        </p>

        <p className="rounded-2xl border-l-4 border-accent bg-surface-muted/60 p-5 sm:p-6 italic font-medium text-foreground/90 sm:text-lg leading-relaxed">
          &ldquo;Accurate parcel preparation and understanding dimensional weight rules save up to 30% on commercial transit fees. Ensuring labels are unobstructed and boxes are properly sealed is the first line of defense against delays.&rdquo;
        </p>

        <h3 className="pt-2 font-display text-lg font-bold text-foreground sm:text-xl">
          Courier Preparation Standards
        </h3>

        <ul className="list-disc space-y-2.5 pl-6 text-foreground/80 marker:text-accent leading-relaxed">
          <li>
            <strong className="font-semibold text-foreground">Box Integrity:</strong> Use rigid corrugated cardboard with intact structural flaps. Avoid reusing worn boxes that have lost burst strength.
          </li>
          <li>
            <strong className="font-semibold text-foreground">H-Tape Sealing:</strong> Apply heavy-duty 2-inch wide pressure-sensitive plastic tape along center seams and both edge seams in an &ldquo;H&rdquo; pattern.
          </li>
          <li>
            <strong className="font-semibold text-foreground">Label Placement:</strong> Position carrier shipping labels flat on the largest surface. Never wrap barcode labels over edges, corners, or seams.
          </li>
        </ul>
      </section>

      {/* ================= SECTION 3: STEP-BY-STEP PRACTICAL GUIDE ================= */}
      <section id="step-by-step-guide" className="scroll-mt-28 space-y-4 pt-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>3. Step-by-Step Practical Guide</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          Follow our proven four-step packing and dispatch routine to ensure seamless clearance and prompt receipt:
        </p>

        <ol className="list-decimal space-y-3.5 pl-6 text-foreground/80 marker:font-bold marker:text-accent leading-relaxed">
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Item Assessment &amp; Dimension Measurement:</strong> Weigh your parcel accurately and record length, width, and height. Factor in minimum 2-inch void space on all sides for internal cushioning.
          </li>
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Cushioning Wrap &amp; Shock Isolation:</strong> Wrap fragile items individually in bubble wrap or honeycomb kraft paper. Fill all remaining voids with biodegradable peanuts or air pillows so items cannot shift.
          </li>
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Compare Multi-Carrier Rates &amp; Speeds:</strong> Evaluate delivery guarantees, pickup cutoffs, and pricing across FedEx, UPS, DHL Express, and USPS to pick the best carrier for your destination and budget.
          </li>
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Counter Drop-off &amp; Real-Time Tracking Activation:</strong> Drop off your parcel at our Odenton counter before daily carrier pickup cutoff. Receive an instant verified receipt and automated digital tracking updates.
          </li>
        </ol>

        {/* Section Image */}
        <figure className="my-8 overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-xs">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1000&auto=format&fit=crop&q=80"
              alt="Parcel packaging materials and shipping preparation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          <figcaption className="p-3 text-center text-xs text-muted">
            Proper void-fill cushioning and heavy-duty double-wall cartons protect fragile items during courier transit.
          </figcaption>
        </figure>
      </section>

      {/* ================= SECTION 4: CARRIER OPTIONS & SERVICE COMPARISON ================= */}
      <section id="carrier-solutions" className="scroll-mt-28 space-y-4 pt-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>4. Carrier Options &amp; Service Comparison</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          As an authorized multi-carrier service center, Parcel &amp; Office Solutions provides direct counter drop-off and pickup across all four premier logistics networks:
        </p>

        <ul className="list-disc space-y-3.5 pl-6 text-foreground/80 marker:text-accent leading-relaxed">
          <li>
            <strong className="font-semibold text-foreground">
              <Link href="/services/ups-shipping" className="text-accent underline underline-offset-4 hover:text-accent-dark">
                UPS Ground &amp; Air Services:
              </Link>
            </strong> Industry leader in ground freight reliability and heavy package shipping. Carbon-neutral offset options available on all shipments directly at our desk. Best for B2B freight, ground parcels, and returns drop-offs.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              <Link href="/services/fedex-shipping" className="text-accent underline underline-offset-4 hover:text-accent-dark">
                FedEx Express &amp; Ground:
              </Link>
            </strong> Domestic overnight delivery options including Priority Overnight (10:30 AM) and Standard Overnight. Full QR code mobile return support. Best for time-critical documents and urgent domestic shipments.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              <Link href="/services/dhl-shipping" className="text-accent underline underline-offset-4 hover:text-accent-dark">
                DHL Worldwide Express:
              </Link>
            </strong> The premier choice for cross-border courier delivery in 220+ countries and territories. Fast customs electronic pre-clearance reduces international transit times by days. Best for global exports, international documents, and overseas family parcels.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              <Link href="/services/usps-shipping" className="text-accent underline underline-offset-4 hover:text-accent-dark">
                USPS Priority Mail &amp; First-Class:
              </Link>
            </strong> The most economical solution for lightweight items, PO Boxes, and military APO/FPO/DPO destinations across all 50 states. Best for everyday residential mail, flat-rate boxes, and military mail.
          </li>
        </ul>
      </section>

      {/* ================= SECTION 5: PRO TIPS & COST OPTIMIZATION ================= */}
      <section id="pro-tips-savings" className="scroll-mt-28 space-y-4 pt-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>5. Pro Tips &amp; Cost Optimization</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          {paragraphs[2] ||
            "Small adjustments in how packages are prepped and timed yield major operational savings for households and small businesses alike."}
        </p>

        <ol className="list-decimal space-y-3.5 pl-6 text-foreground/80 marker:font-bold marker:text-accent leading-relaxed">
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Eliminate Empty Space to Avoid Dimensional (DIM) Weight Penalties:</strong> Carriers charge based on volume if a parcel is large but lightweight. Custom-cutting cartons to fit the contents prevents paying for empty air.
          </li>
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Drop Off Before Scheduled Daily Carrier Cutoffs:</strong> Parcels dropped off before late afternoon cutoff times depart on the same business day, preventing overnight warehouse transit delays.
          </li>
          <li className="pl-1">
            <strong className="font-semibold text-foreground">Consolidate Shipments with Commercial Accounts:</strong> Local entrepreneurs and home-based businesses can set up corporate accounts with Parcel &amp; Office for volume discounts, free supplies pickup, and priority check-in.
          </li>
        </ol>
      </section>

      {/* ================= SECTION 6: SUMMARY & ACTIONABLE ADVICE ================= */}
      <section id="summary-conclusion" className="scroll-mt-28 space-y-4 pt-2">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
          <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
          <span>6. Summary &amp; Actionable Advice</span>
        </h2>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          Mastering modern shipping and packaging comes down to three essentials: selecting the proper box durability, utilizing industry-standard cushioning, and comparing rates across trusted authorized couriers.
        </p>

        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          For expert assistance, visit Parcel &amp; Office Solutions at 8777 Piney Orchard Pkwy Suite B in Odenton, MD. Bring your items directly to our counter for custom packing, multi-carrier rate comparisons, and secure drop-offs. Have questions? Feel free to <Link href="/contact-us" className="font-medium text-accent underline underline-offset-4 hover:text-accent-dark">contact our team</Link> or call us directly at <a href={BUSINESS.phoneHref} className="font-medium text-accent underline underline-offset-4 hover:text-accent-dark">{BUSINESS.phone}</a>.
        </p>
      </section>

      {/* If custom Sanity content exists, also render it cleanly */}
      {hasSanityBody && (
        <section className="pt-6 border-t border-border/80">
          <h3 className="mb-6 font-display text-xl font-bold text-foreground">
            Additional Article Content
          </h3>
          <BlogPortableText content={blogDetail.body} />
        </section>
      )}

      {/* Share Article Bar (Tags removed) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
          <Share2 className="h-4 w-4 text-accent" />
          <span>Share This Article:</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleShare("twitter")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
            title="Share on X / Twitter"
          >
            <span className="text-xs font-bold">𝕏</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("linkedin")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
            title="Share on LinkedIn"
          >
            <span className="text-xs font-bold">in</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("whatsapp")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp cursor-pointer"
            title="Share on WhatsApp"
          >
            <span className="text-xs font-bold">WA</span>
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
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
    </div>
  );
}
