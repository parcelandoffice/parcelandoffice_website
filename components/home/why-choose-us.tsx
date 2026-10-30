import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  Truck,
  PackageCheck,
  Briefcase,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  type LucideIcon,
} from "lucide-react";
import type { HomePageData } from "@/lib/types";
import RevealCss from "@components/ui/reveal-css";
import { BUSINESS } from "@/lib/site-data";
import { getImageUrl } from "@/lib/helpers";

interface WhyChooseItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  customIconUrl?: string | null;
  badge?: string;
}

const DEFAULT_ITEMS: WhyChooseItem[] = [
  {
    title: "Multiple Services Under One Roof",
    subtitle:
      "Take care of a variety of shipping, packing, printing, and document needs in one convenient location.",
    icon: Boxes,
    badge: "01",
  },
  {
    title: "Major Carrier Shipping Options",
    subtitle:
      "Explore available shipping services through FedEx, UPS, DHL, and USPS.",
    icon: Truck,
    badge: "02",
  },
  {
    title: "Professional Packing Assistance",
    subtitle:
      "Get help preparing eligible items for shipment and explore available packaging supplies.",
    icon: PackageCheck,
    badge: "03",
  },
  {
    title: "Solutions for Personal and Business Needs",
    subtitle:
      "Find services for everyday documents, packages, and useful business tasks.",
    icon: Briefcase,
    badge: "04",
  },
  {
    title: "Convenient Odenton Location",
    subtitle:
      "Visit our store on Piney Orchard Parkway, Suite B, beside Food Lion Supermarket.",
    icon: MapPin,
    badge: "05",
  },
];

type WhyChooseUsProps = {
  data?: HomePageData | null;
  homePageData?: HomePageData;
  whyChooseUsImageUrl?: string;
};

export default function WhyChooseUs({
  data,
  homePageData,
}: WhyChooseUsProps) {
  const activeData = data || homePageData;

  const eyebrow =
    activeData?.whyChooseUsTag || "THE PARCEL & OFFICE SOLUTIONS DIFFERENCE";
  const title =
    activeData?.whyChooseUsTitle || "More Than Shipping. It's Handled.";
  const description =
    activeData?.whyChooseUsDescription ||
    "We bring shipping, packing, printing, and everyday business services together to help make your errands simpler. Whether you're sending a package or preparing important documents, we're here to help you explore the right options.";

  // If Sanity provides items, map them or fallback to our curated 5 points
  const items: WhyChooseItem[] =
    activeData?.whyChooseUsItems && activeData.whyChooseUsItems.length > 0
      ? activeData.whyChooseUsItems.map((item, index) => {
          let customIconUrl: string | null = null;
          if (item.icon && typeof item.icon === "object") {
            customIconUrl = getImageUrl(item.icon);
          } else if (typeof item.icon === "string" && (item.icon.startsWith("http") || item.icon.startsWith("/"))) {
            customIconUrl = item.icon;
          }

          return {
            title: item.title,
            subtitle: item.subtitle,
            icon: DEFAULT_ITEMS[index % DEFAULT_ITEMS.length].icon,
            customIconUrl,
            badge: item.badge || `0${index + 1}`,
          };
        })
      : DEFAULT_ITEMS;

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24 border-b border-border"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & Interactive Stats (5 Cols) */}
          <div className="lg:col-span-5">
            <RevealCss direction="right">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>{eyebrow}</span>
              </div>

              {/* Section Headline */}
              <h2 className="font-display mt-4 text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-4xl lg:leading-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-base text-muted leading-relaxed">
                {description}
              </p>

              {/* Action CTA Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#services"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs sm:text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  <span>Call Store</span>
                </a>
              </div>

            </RevealCss>
          </div>

          {/* Right Column: 5 Feature Cards Grid (7 Cols) */}
          <div className="lg:col-span-7">
            <RevealCss direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  // If 5 items, make the 5th item (Odenton Location) span both columns on tablet/desktop for a balanced layout
                  const isLastOdd = items.length === 5 && index === 4;

                  return (
                    <div
                      key={item.title}
                      className={`group flex items-start gap-3.5 rounded-2xl border border-border/80 bg-surface-muted/40 p-5 transition-all duration-300 hover:border-accent hover:bg-surface hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 ${isLastOdd ? "sm:col-span-2" : ""
                        }`}
                    >
                      {/* Icon & Number Badge */}
                      <div className="relative shrink-0">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-accent shadow-2xs overflow-hidden">
                          {item.customIconUrl ? (
                            <Image
                              src={item.customIconUrl}
                              alt={item.title}
                              width={24}
                              height={24}
                              className="h-5 w-5 object-contain"
                            />
                          ) : (
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                        <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent text-[10px] font-black text-on-dark shadow-2xs">
                          {item.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-extrabold text-primary-dark group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealCss>
          </div>
        </div>
      </div>
    </section>
  );
}
