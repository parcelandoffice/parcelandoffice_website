import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RevealCss from "@components/ui/reveal-css";
import type { AboutPageData } from "@/lib/types";

type HeroStatementProps = {
  data?: AboutPageData | null;
  title?: string;
  badge?: string;
  cardTitle?: string;
  cardDescription?: string;
};

export default function HeroStatement({ data, title, badge, cardTitle, cardDescription }: HeroStatementProps) {
  const displayTitle = data?.heroTitle || title || "Moving our world forward by delivering what matters.";
  const displayBadge = data?.heroCardBadge || badge || "CUSTOMER FIRST";
  const displayCardTitle =
    data?.heroCardTitle || cardTitle || "How Parcel & Office Solutions delivers confidence with every package.";
  const displayCardDescription =
    data?.heroCardDescription ||
    cardDescription ||
    "From urgent business deliveries and fragile family heirlooms to everyday office essentials, our Odenton store brings the power of FedEx, UPS, DHL, and USPS under one roof with personalized care.";
  const primaryCtaLabel = data?.heroCardPrimaryCtaLabel || "Explore Services";
  const primaryCtaUrl = data?.heroCardPrimaryCtaUrl || "/#services";
  const heroImageSrc = data?.heroImageUrl || "/images/courier-associate-packing.jpg";

  return (
    <section className="bg-surface pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Centered Statement with Accent Underline */}
        <RevealCss className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-6xl lg:leading-[1.15]">
            {displayTitle}
          </h1>
          <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-accent" />
        </RevealCss>

        {/* Hero Visual Banner with Overlapping Floating Card */}
        <div className="relative mt-12 sm:mt-16">
          <RevealCss>
            <div className="relative aspect-[16/9] min-h-[420px] w-full overflow-hidden rounded-3xl border border-border shadow-2xl sm:min-h-[520px] lg:min-h-[580px]">
              <Image
                src={heroImageSrc}
                alt={displayCardTitle}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-black/20" />
            </div>
          </RevealCss>

          {/* Floating White Card Overlapping Image on the Right */}
          <div className="relative -mt-16 px-4 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0 sm:max-w-lg sm:px-0 lg:bottom-14 lg:right-14">
            <RevealCss delay={0.15}>
              <div className="rounded-2xl border border-border/80 bg-surface/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                {/* Accent Tag */}
                <div className="flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-accent" />
                  <span className="text-xs font-extrabold tracking-widest text-secondary uppercase">
                    {displayBadge}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-xl font-bold leading-snug text-secondary sm:text-2xl">
                  {displayCardTitle}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {displayCardDescription}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href={primaryCtaUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:brightness-110 active:scale-95"
                  >
                    {primaryCtaLabel} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </RevealCss>
          </div>
        </div>
      </div>
    </section>
  );
}
