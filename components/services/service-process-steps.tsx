import type { ServiceDetail } from "@/lib/service-details";
import {
  Barcode,
  FileText,
  PackageOpen,
  SlidersHorizontal,
  Sparkles
} from "lucide-react";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  badge?: string;
  icon?: typeof PackageOpen;
  iconUrl?: string;
};

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Bring Your Shipment",
    description:
      "Bring your documents or properly prepared package to our store for shipping assistance.",
    badge: "In-Store Drop-Off",
    icon: PackageOpen,
  },
  {
    step: "02",
    title: "Review Shipping Options",
    description:
      "Check the available service options, estimated delivery times, shipping charges, and destination requirements.",
    badge: "Compare & Select",
    icon: SlidersHorizontal,
  },
  {
    step: "03",
    title: "Complete Shipment Documentation",
    description:
      "Provide the required shipment details and customs paperwork, where applicable.",
    badge: "Customs Paperwork",
    icon: FileText,
  },
  {
    step: "04",
    title: "Drop Off and Track",
    description:
      "Complete your shipment at the counter and use your tracking number to follow eligible shipments.",
    badge: "Receipt & Tracking",
    icon: Barcode,
  },
];

const DEFAULT_ICONS = [PackageOpen, SlidersHorizontal, FileText, Barcode];

const DEFAULT_BADGES_BY_CATEGORY: Record<string, string[]> = {
  Packing: ["BRING ITEM", "REVIEW OPTIONS", "EXPERT PACKING", "READY TO SHIP"],
  "Printing & Document Services": ["SUBMIT FILES", "REVIEW OPTIONS", "PRECISION PRINTING", "READY FOR PICKUP"],
  "Business & Personal Services": ["BRING DOCUMENTS", "ID VERIFICATION", "WITNESS & SIGN", "CERTIFIED SEAL"],
  "Shipping & Mailing": ["IN-STORE DROP-OFF", "COMPARE & SELECT", "CUSTOMS PAPERWORK", "RECEIPT & TRACKING"],
};

/**
 * Fetches a Sanity SVG icon on the server and converts it into inline markup that
 * uses `currentColor`, so it can be recoloured with Tailwind text utilities
 * (e.g. `group-hover:text-accent`) exactly like the built-in Lucide icons.
 * Returns null for non-SVG icons or on failure (falls back to <img>).
 */
async function getInlineSvg(url?: string): Promise<string | null> {
  if (!url || !/\.svg(\?|$)/i.test(url)) return null;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const raw = await res.text();
    const match = raw.match(/<svg[\s\S]*<\/svg>/i);
    if (!match) return null;
    return (
      match[0]
        // basic sanitisation
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/\son\w+="[^"]*"/gi, "")
        // let CSS control size
        .replace(/<svg([^>]*?)\swidth="[^"]*"/i, "<svg$1")
        .replace(/<svg([^>]*?)\sheight="[^"]*"/i, "<svg$1")
        .replace(/<svg([^>]*?)\sclass="[^"]*"/i, "<svg$1")
        // make colours follow `currentColor`
        .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"')
        .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
        .replace(/<svg/i, '<svg width="100%" height="100%" aria-hidden="true"')
    );
  } catch {
    return null;
  }
}

export default async function ServiceProcessSteps({
  service,
}: {
  service: ServiceDetail;
}) {
  const isDHL = service.carrierType === "dhl" || service.slug.includes("dhl");
  const sectionLabel = service.processLabel || "HOW IT WORKS";
  const sectionTitle =
    service.processTitle ||
    (isDHL
      ? "Ship With DHL in Four Simple Steps"
      : service.category === "Packing"
        ? "Get Your Package Ready in Four Simple Steps"
        : service.category === "Printing & Document Services"
          ? "Easy Order Workflow Process"
          : service.category === "Business & Personal Services"
            ? "Fast and Simple in Four Easy Steps"
            : "Four Simple Steps to Complete Your Service");
  const sectionSubtitle =
    service.processSubtitle ||
    "Fast, transparent, and hassle-free assistance from our Odenton counter beside Food Lion.";

  const baseSteps: ProcessStep[] =
    service.processSteps && service.processSteps.length > 0
      ? service.processSteps.map((step, idx) => {
        const catBadges =
          DEFAULT_BADGES_BY_CATEGORY[service.category] ||
          DEFAULT_BADGES_BY_CATEGORY["Shipping & Mailing"];
        const defaultBadge = catBadges[idx % catBadges.length];
        return {
          step: step.step || `0${idx + 1}`,
          title: step.title,
          description: step.description,
          badge:
            step.badge && !step.badge.toLowerCase().startsWith("step")
              ? step.badge
              : defaultBadge,
          icon: DEFAULT_ICONS[idx % DEFAULT_ICONS.length],
          iconUrl: step.iconUrl,
        };
      })
      : DEFAULT_PROCESS_STEPS;

  const stepsToDisplay = await Promise.all(
    baseSteps.map(async (step) => ({
      ...step,
      svgMarkup: await getInlineSvg(step.iconUrl),
    }))
  );

  return (
    <section
      aria-labelledby="shipping-process-heading"
      className="mt-10 sm:mt-18 relative"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-black uppercase tracking-wider text-accent shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" aria-hidden="true" />
          <span>{sectionLabel}</span>
        </div>

        <h2
          id="shipping-process-heading"
          className="font-display mt-3 text-2xl font-black tracking-tight text-primary-dark sm:text-3xl lg:text-4xl"
        >
          {sectionTitle}
        </h2>

        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {sectionSubtitle}
        </p>
      </div>

      {/* Linked 4-Step Interactive Stepper */}
      <div className="relative mt-20 sm:mt-28 mb-4 sm:mb-8">
        {/* Horizontal Connecting Link Line (Desktop & Tablet) */}
        <div
          className="hidden sm:block absolute top-10 left-[12%] right-[12%] h-1 bg-gradient-to-r from-accent/30 via-accent/40 to-accent/30 -translate-y-1/2 z-0 rounded-full"
          aria-hidden="true"
        />

        {/* Step Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-3 relative z-10">
          {stepsToDisplay.map((step) => {
            const Icon = step.icon || PackageOpen;
            return (
              <div
                key={step.step}
                tabIndex={0}
                className="group relative flex flex-col items-center text-center focus-visible:outline-hidden cursor-pointer"
              >
                {/* Relative Circle Anchor Container for Tooltip */}
                <div className="relative flex items-center justify-center">
                  {/* Floating Tooltip with Description (Positioned directly above the round node on desktop) */}
                  <div
                    role="tooltip"
                    className="hidden sm:block absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-68 p-4 rounded-2xl bg-[#0B1B33] text-white shadow-[0_12px_36px_rgba(0,0,0,0.4)] border border-white/5 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-hover:visible sm:group-hover:translate-y-0 transition-all duration-200 z-40 pointer-events-none text-center"
                  >
                    <span className="block text-[11px] font-black uppercase tracking-wider text-accent mb-1.5">
                      {step.badge}
                    </span>
                    <p className="text-xs text-white/95 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    {/* Tooltip Caret Arrow */}
                    <div
                      className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-3.5 w-3.5 rotate-45 bg-[#0B1B33] border-r border-b border-white/5"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Round Circle Node with Icon */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-border/80 bg-white shadow-sm transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_28px_rgba(240,90,34,0.35)] group-hover:scale-105">
                    {step.svgMarkup ? (
                      /* Sanity SVG inlined with currentColor — same hover as built-in icons */
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center text-primary-dark transition-colors duration-300 group-hover:text-accent group-focus-visible:text-accent [&_svg]:h-full [&_svg]:w-full"
                        dangerouslySetInnerHTML={{ __html: step.svgMarkup }}
                      />
                    ) : step.iconUrl ? (
                      /* Non-SVG (PNG/JPG) fallback: recolour via CSS filter (navy -> orange) */
                      <span className="h-10 w-10 flex items-center justify-center p-1.5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={step.iconUrl}
                          alt={step.title}
                          className="h-full w-full object-contain transition-[filter] duration-300 [filter:brightness(0)_invert(3%)_sepia(97%)_saturate(2073%)_hue-rotate(207deg)_brightness(153%)_contrast(94%)] group-hover:[filter:brightness(0)_invert(44%)_sepia(50%)_saturate(3334%)_hue-rotate(351deg)_brightness(89%)_contrast(116%)] group-focus-visible:[filter:brightness(0)_invert(44%)_sepia(50%)_saturate(3334%)_hue-rotate(351deg)_brightness(89%)_contrast(116%)]"
                        />
                      </span>
                    ) : (
                      <Icon className="h-9 w-9 text-primary-dark transition-colors duration-300 group-hover:text-accent stroke-[2.2]" />
                    )}

                    {/* Step Number Badge */}
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-black text-white shadow-xs ring-2 ring-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Title Below Node */}
                <h3 className="font-display mt-4 text-sm sm:text-base font-bold text-primary-dark transition-colors group-hover:text-primary max-w-[200px]">
                  {step.title}
                </h3>

                {/* Mobile Description (Always visible on mobile below title) */}
                <p className="block sm:hidden mt-1.5 text-xs text-muted max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helpful Hint Callout Below Stepper */}
      <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-muted text-center">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span>No carrier account required — walk in, ship, and get on with your day!</span>
      </div>
    </section>
  );
}
