"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Truck,
  Package,
  Mail,
  RotateCcw,
  Printer,
  FileText,
  Scissors,
  Inbox,
  Fingerprint,
  ScanLine,
  PackageOpen,
  ShoppingBag,
  Box,
  Camera,
  Stamp,
  Copy,
  Share2,
  Target,
  Megaphone,
  Search,
  Code2,
  Globe,
  TrendingUp,
  CreditCard,
  Gift,
  Heart,
  Briefcase,
  Layers,
  Laptop,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RevealCss from "@components/ui/reveal-css";
import {
  SERVICES,
  SERVICES_MENU_CATEGORIES,
  getServiceHref,
  getDigitalMarketingHref,
} from "@/lib/site-data";
import { getImageUrl } from "@/lib/helpers";
import type { HomePageData, SanityService } from "@/lib/types";

type CategoryKey = "shipping" | "packing" | "printing" | "business" | "it";

interface CategoryMeta {
  key: CategoryKey;
  label: string;
  shortLabel: string;
  subtitle: string;
  icon: LucideIcon;
}

const CATEGORIES: CategoryMeta[] = [
  {
    key: "shipping",
    label: "Shipping & Mailing Services",
    shortLabel: "Shipping & Mailing",
    subtitle: "Authorized FedEx, UPS, DHL Express & USPS shipping, drop-offs, and mailbox rentals.",
    icon: Plane,
  },
  {
    key: "packing",
    label: "Packing Services",
    shortLabel: "Packing",
    subtitle: "Custom protective packing for fragile items and quality boxes, tape & cushioning supplies.",
    icon: PackageOpen,
  },
  {
    key: "printing",
    label: "Printing & Document Services",
    shortLabel: "Printing & Document",
    subtitle: "High-resolution color printing, copying, scanning, faxing, shredding & marketing materials.",
    icon: Printer,
  },
  {
    key: "business",
    label: "Business & Personal Services",
    shortLabel: "Business & Personal",
    subtitle: "Certified notary public, Live Scan fingerprinting, passport photos & everyday essentials.",
    icon: Briefcase,
  },
  {
    key: "it",
    label: "IT & Digital Marketing Services",
    shortLabel: "IT Services",
    subtitle: "SEO, Google Ads, social media marketing, lead generation & custom web development.",
    icon: Laptop,
  },
];

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  plane: Plane,
  truck: Truck,
  package: Package,
  mail: Mail,
  "rotate-ccw": RotateCcw,
  printer: Printer,
  "file-text": FileText,
  scissors: Scissors,
  inbox: Inbox,
  fingerprint: Fingerprint,
  "scan-line": ScanLine,
  "package-open": PackageOpen,
  "shopping-bag": ShoppingBag,
  box: Box,
  camera: Camera,
  stamp: Stamp,
  copy: Copy,
  "share-2": Share2,
  target: Target,
  megaphone: Megaphone,
  search: Search,
  code: Code2,
  globe: Globe,
  "trending-up": TrendingUp,
  "credit-card": CreditCard,
  gift: Gift,
  heart: Heart,
};

const SLUG_ICON_MAP: Record<string, LucideIcon> = (() => {
  const map: Record<string, LucideIcon> = {};
  for (const s of SERVICES) {
    map[s.slug] = s.icon;
  }
  for (const cat of SERVICES_MENU_CATEGORIES) {
    for (const item of cat.items) {
      map[item.slug] = item.icon;
    }
  }
  return map;
})();

function getIconForService(slug: string, iconName?: string): LucideIcon {
  if (iconName && SERVICE_ICON_MAP[iconName]) {
    return SERVICE_ICON_MAP[iconName];
  }
  const clean = slug.toLowerCase().replace(/-usa$/, "");
  if (SLUG_ICON_MAP[slug]) return SLUG_ICON_MAP[slug];
  if (SLUG_ICON_MAP[clean]) return SLUG_ICON_MAP[clean];

  if (clean.includes("fedex")) return Plane;
  if (clean.includes("ups")) return Truck;
  if (clean.includes("dhl")) return Package;
  if (clean.includes("postal") || clean.includes("usps")) return Mail;
  if (clean.includes("mailbox")) return Inbox;
  if (clean.includes("packaging-supplies") || clean.includes("supplies")) return ShoppingBag;
  if (clean.includes("packing")) return PackageOpen;
  if (clean.includes("print")) return Printer;
  if (clean.includes("copy")) return Copy;
  if (clean.includes("scan")) return ScanLine;
  if (clean.includes("shred")) return Scissors;
  if (clean.includes("fax") || clean.includes("flyer") || clean.includes("brochure")) return FileText;
  if (clean.includes("business-card")) return CreditCard;
  if (clean.includes("notary")) return Stamp;
  if (clean.includes("fingerprint")) return Fingerprint;
  if (clean.includes("passport")) return Camera;
  if (clean.includes("gift")) return Gift;
  if (clean.includes("greeting")) return Heart;
  if (clean.includes("social-media")) return Share2;
  if (clean.includes("lead-generation")) return Target;
  if (clean.includes("google-ads") || clean.includes("ppc")) return Megaphone;
  if (clean.includes("seo") || clean.includes("aeo") || clean.includes("geo")) return Search;
  if (clean.includes("web-development") || clean.includes("website")) return Code2;
  if (clean.includes("digital") || clean.includes("marketing")) return TrendingUp;

  return Package;
}

function getCategoryForService(s: SanityService, slug: string): CategoryKey {
  if (s._type === "itService" || s.serviceType === "digital-marketing") return "it";
  if (s._type === "shippingMailingService") return "shipping";
  if (s._type === "packingService") return "packing";
  if (s._type === "printingDocumentService") return "printing";
  if (s._type === "businessPersonalService") return "business";

  const cat = (s.category || "").toLowerCase();
  if (cat.includes("it") || cat.includes("digital")) return "it";
  if (cat.includes("shipping") || cat.includes("mailing")) return "shipping";
  if (cat.includes("packing")) return "packing";
  if (cat.includes("print") || cat.includes("document")) return "printing";
  if (cat.includes("business") || cat.includes("personal")) return "business";

  const clean = slug.toLowerCase();
  if (
    clean.includes("fedex") ||
    clean.includes("ups") ||
    clean.includes("dhl") ||
    clean.includes("postal") ||
    clean.includes("mailbox")
  ) {
    return "shipping";
  }
  if (clean.includes("packing") || clean.includes("packaging")) return "packing";
  if (
    clean.includes("print") ||
    clean.includes("copy") ||
    clean.includes("scan") ||
    clean.includes("shred") ||
    clean.includes("fax") ||
    clean.includes("flyer") ||
    clean.includes("business-card")
  ) {
    return "printing";
  }
  if (
    clean.includes("social-media") ||
    clean.includes("lead-generation") ||
    clean.includes("google-ads") ||
    clean.includes("seo") ||
    clean.includes("web-development")
  ) {
    return "it";
  }

  return "business";
}

type DisplayServiceItem = {
  id: string;
  slug: string;
  label: string;
  description: string;
  icon: LucideIcon;
  customIconUrl: string | null;
  href: string;
  categoryKey: CategoryKey;
};

type ServicesGridProps = {
  data?: HomePageData | null;
  servicesList?: SanityService[];
};

export default function ServicesGrid({ data, servicesList }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");

  const title = data?.servicesTitle || "Our Services";
  const ctaText = data?.servicesCtaText || "Inquire About Custom Services";
  const ctaUrl = data?.servicesCtaUrl || "/contact-us";

  const displayServices = useMemo<DisplayServiceItem[]>(() => {
    const combined: SanityService[] = [];
    const seen = new Set<string>();

    const addService = (s?: SanityService | null) => {
      if (!s || !s.title) return;
      const slug = typeof s.slug === "string" ? s.slug : s.slug?.current || "";
      const key = s._id || slug || s.title;
      if (seen.has(key)) return;
      seen.add(key);
      combined.push(s);
    };

    // Prioritize all active services across the 4 parcel/office categories + IT services
    if (servicesList && servicesList.length > 0) {
      servicesList.forEach(addService);
    }
    if (data?.featuredServicesList && data.featuredServicesList.length > 0) {
      data.featuredServicesList.forEach(addService);
    }

    if (combined.length > 0) {
      return combined.map((s) => {
        const slug =
          typeof s.slug === "string"
            ? s.slug
            : s.slug?.current || "service";
        const isItService =
          s._type === "itService" || s.serviceType === "digital-marketing";
        const customIconObj = s.customIcon as any;
        const customIconUrl = customIconObj?.asset?.url
          ? customIconObj.asset.url
          : customIconObj?.asset
          ? getImageUrl(s.customIcon!)
          : null;
        const href =
          s.customUrl ||
          (isItService
            ? getDigitalMarketingHref(slug)
            : getServiceHref(slug));

        return {
          id: s._id || slug,
          slug,
          label: s.title,
          description: s.shortDescription || "",
          icon: getIconForService(slug, s.iconName),
          customIconUrl,
          href,
          categoryKey: getCategoryForService(s, slug),
        };
      });
    }

    // Fallback to static menu categories if Sanity has no services yet
    const fallbackItems: DisplayServiceItem[] = [];
    for (const cat of SERVICES_MENU_CATEGORIES) {
      const catKey: CategoryKey = cat.title.includes("Shipping")
        ? "shipping"
        : cat.title.includes("Packing")
        ? "packing"
        : cat.title.includes("Printing")
        ? "printing"
        : "business";
      for (const item of cat.items) {
        const staticMatch = SERVICES.find((s) => s.slug === item.slug);
        fallbackItems.push({
          id: item.slug,
          slug: item.slug,
          label: item.label,
          description: staticMatch?.description || "",
          icon: item.icon,
          customIconUrl: null,
          href: item.href,
          categoryKey: catKey,
        });
      }
    }
    return fallbackItems;
  }, [servicesList, data?.featuredServicesList]);

  const groupedCategories = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      ...cat,
      items: displayServices.filter((s) => s.categoryKey === cat.key),
    })).filter((cat) => cat.items.length > 0);
  }, [displayServices]);

  const visibleGroups =
    activeCategory === "all"
      ? groupedCategories
      : groupedCategories.filter((g) => g.key === activeCategory);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-anchor bg-surface py-16 sm:py-20 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Title Header */}
        <RevealCss>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-primary" />
              <div>
                <h2
                  id="services-heading"
                  className="font-display text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl"
                >
                  {title}
                </h2>
              </div>
            </div>

            <Link
              href={ctaUrl}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-accent"
            >
              {ctaText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </RevealCss>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Service Categories"
          className="mt-7 flex flex-wrap items-center gap-2.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "border-primary bg-primary text-white shadow-sm"
                : "border-border bg-surface-muted/60 text-secondary hover:border-accent/50 hover:bg-surface hover:text-primary"
            }`}
          >
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>All Services</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                activeCategory === "all"
                  ? "bg-white/20 text-white"
                  : "bg-primary-soft text-primary"
              }`}
            >
              {displayServices.length}
            </span>
          </button>

          {groupedCategories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-border bg-surface-muted/60 text-secondary hover:border-accent/50 hover:bg-surface hover:text-primary"
                }`}
              >
                <CatIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{cat.shortLabel}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-extrabold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-primary-soft text-primary"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category-Wise Service Groups */}
        <div className="mt-10 space-y-12">
          {visibleGroups.map((group) => (
            <div key={group.key} className="space-y-5">
              {/* Category Section Header (Only shown in "All Services" view: category name only) */}
              {activeCategory === "all" && (
                <div className="flex items-center gap-3.5">
                  <span className="h-6 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <h3 className="font-display text-lg font-extrabold tracking-tight text-primary-dark sm:text-xl whitespace-nowrap">
                    {group.label}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-border via-border/60 to-transparent" aria-hidden="true" />
                </div>
              )}

              {/* Circular Service Badges Grid */}
                <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.items.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.id}>
                        <Link
                          href={service.href}
                          className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-border bg-surface p-5 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/50 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                        >
                          {/* Circular Icon Container */}
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white sm:h-18 sm:w-18 overflow-hidden">
                            {service.customIconUrl ? (
                              <Image
                                src={service.customIconUrl}
                                alt={service.label}
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain transition-all duration-200 group-hover:scale-105 group-hover:brightness-0 group-hover:invert"
                              />
                            ) : (
                              <Icon
                                className="h-7 w-7 transition-transform duration-200 group-hover:scale-105 sm:h-8 sm:w-8"
                                strokeWidth={1.75}
                                aria-hidden="true"
                              />
                            )}
                          </div>

                          {/* Content */}
                          <div className="mt-4 flex-1">
                            <h4 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                              {service.label}
                            </h4>
                            {service.description && (
                              <p className="mt-1.5 hidden text-xs leading-relaxed text-muted sm:line-clamp-2">
                                {service.description}
                              </p>
                            )}
                          </div>

                          {/* Arrow Indicator */}
                          <div className="mt-3 flex items-center justify-center">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-muted text-muted transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                              <ArrowUpRight
                                className="h-3 w-3"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
