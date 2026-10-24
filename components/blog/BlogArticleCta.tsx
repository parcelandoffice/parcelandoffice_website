import { ArrowRight, PhoneCall, Package, ShieldCheck, Printer, MapPin } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/site-data";

export default function BlogArticleCta() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-white">
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      {/* Ambient Glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
      /> */}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          <Package className="h-3.5 w-3.5" aria-hidden="true" />
          Parcel & Office Solutions • Odenton, MD
        </p>

        <h3 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Have Questions About Shipping, Packing, or Printing?
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Visit Parcel &amp; Office Solutions in Odenton, MD. Whether you need multi-carrier price comparisons, custom fragile crating, authorized UPS, FedEx, DHL, or USPS drop-offs, or certified Notary services, our friendly staff is here to help.
        </p>

        {/* Feature Highlights Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-white/90">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            Authorized Courier Hub
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-xs">
            <Package className="h-3.5 w-3.5 text-accent" />
            Custom Box Sizing &amp; Packing
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-xs">
            <Printer className="h-3.5 w-3.5 text-accent" />
            High-Speed Print &amp; Notary
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_0_28px_rgba(255,140,0,0.35)] transition-all hover:bg-accent-dark hover:scale-105 active:scale-95"
          >
            <span>Get In Touch</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-xs transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            <PhoneCall className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Call: {BUSINESS.phone}</span>
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-white/60">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span>8777 Piney Orchard Pkwy Ste B, Odenton, MD 21113 • Beside Food Lion</span>
        </p>
      </div>
    </section>
  );
}
