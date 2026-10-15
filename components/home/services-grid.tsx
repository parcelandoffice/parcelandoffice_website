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
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RevealCss from "@components/ui/reveal-css";
import { SERVICES, getServiceHref } from "@/lib/site-data";
import { getImageUrl } from "@/lib/helpers";
import type { HomePageData, SanityService } from "@/lib/types";

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
};

type ServicesGridProps = {
  data?: HomePageData | null;
  servicesList?: SanityService[];
};

export default function ServicesGrid({ data, servicesList }: ServicesGridProps) {
  const title = data?.servicesTitle || "Featured Products & Services";
  const ctaText = data?.servicesCtaText || "Inquire About Custom Services";
  const ctaUrl = data?.servicesCtaUrl || "/contact-us";

  const rawServices =
    (data?.featuredServicesList && data.featuredServicesList.length > 0)
      ? data.featuredServicesList
      : (servicesList && servicesList.length > 0)
      ? servicesList
      : null;

  const displayServices = rawServices
    ? rawServices.map((s) => ({
        slug: typeof s.slug === "string" ? s.slug : s.slug?.current || "service",
        label: s.title,
        description: s.shortDescription || "",
        icon: (s.iconName && SERVICE_ICON_MAP[s.iconName]) || Package,
        customIconUrl: s.customIcon ? getImageUrl(s.customIcon) : null,
        href: s.customUrl || getServiceHref(typeof s.slug === "string" ? s.slug : s.slug?.current || "service"),
      }))
    : SERVICES.map((s) => ({
        slug: s.slug,
        label: s.label,
        description: s.description,
        icon: s.icon,
        customIconUrl: null,
        href: getServiceHref(s.slug),
      }));
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
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary-dark"
            >
              {ctaText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </RevealCss>

        {/* Circular Service Badges Grid */}
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {displayServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <RevealCss
                as="li"
                key={service.slug + index}
                delay={(index % 5) * 0.04}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-border bg-surface p-5 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:border-accent/50 hover:shadow-[var(--shadow-card-hover)]"
                >
                  {/* Circular Icon Container */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white sm:h-18 sm:w-18 overflow-hidden">
                    {service.customIconUrl ? (
                      <Image
                        src={service.customIconUrl}
                        alt={service.label}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain transition-transform duration-200 group-hover:scale-105"
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
                    <h3 className="font-display text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                      {service.label}
                    </h3>
                    <p className="mt-1.5 hidden text-xs leading-relaxed text-muted sm:line-clamp-2">
                      {service.description}
                    </p>
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
              </RevealCss>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
