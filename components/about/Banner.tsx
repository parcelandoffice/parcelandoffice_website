import type { AboutPageData } from '@/lib/types';
import { ArrowRight, MapPin, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type BannerProps = {
  aboutPageData?: AboutPageData | null;
  featuredImageUrl: string;
  featuredImageAlt?: string;
};

const Banner = ({ aboutPageData, featuredImageUrl, featuredImageAlt }: BannerProps) => {
  const title = aboutPageData?.title ?? 'About';
  const titleHighlight = aboutPageData?.titleHighlight ?? 'Parcel & Office Solutions';
  const subtitle =
    aboutPageData?.subtitle ??
    'Located in Odenton, MD, Parcel & Office Solutions is your trusted one-stop destination for multi-carrier shipping, professional packing, digital printing, and comprehensive business services. As an authorized outlet for FedEx, UPS, DHL, and USPS, we deliver reliability, convenience, and genuine hometown care with every parcel.';
  const ctaButtonText = aboutPageData?.ctaButtonText ?? 'Explore Services';

  const imageSrc =
    featuredImageUrl && !featuredImageUrl.includes('placeholder')
      ? featuredImageUrl
      : '/images/hero-parcels.jpg';

  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden bg-primary-dark sm:min-h-[86vh]">
      {/* Background Image with Dark Navy & Amber Glow Overlays */}
      <Image
        src={imageSrc}
        alt={
          featuredImageAlt ||
          aboutPageData?.featuredImage?.alt ||
          `${title} - ${titleHighlight}`
        }
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center opacity-30 mix-blend-luminosity"
        sizes="100vw"
      />

      {/* Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-90" />
      
      {/* Ambient Accent Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,var(--color-primary-light)_0%,transparent_70%)] opacity-30 blur-2xl"
      />

      {/* Subtle Dot Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:36px_36px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            Authorized Multi-Carrier Shipping &amp; Office Hub
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-accent via-accent-light to-amber-200 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-wide text-primary-dark shadow-[0_4px_20px_rgba(255,140,0,0.35)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_25px_rgba(255,140,0,0.5)] active:scale-95"
            >
              {ctaButtonText} <ArrowRight size={17} />
            </Link>

            <Link
              href="/#tracking"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-white/20 active:scale-95"
            >
              <Truck size={17} className="text-accent-light" />
              Track Package
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white"
            >
              <MapPin size={16} className="text-accent" />
              Visit Odenton Store
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">4 Major Carriers</p>
                <p className="text-xs text-white/60">FedEx • UPS • DHL • USPS</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <PackageCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Certified Packing</p>
                <p className="text-xs text-white/60">Fragile &amp; Valuables</p>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">100% Care &amp; Trust</p>
                <p className="text-xs text-white/60">Hassle-Free Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;