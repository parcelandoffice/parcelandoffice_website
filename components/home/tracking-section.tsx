import Image from "next/image";
import TrackingForm from "@components/common/tracking-form";
import RevealCss from "@components/ui/reveal-css";
import { Package, ShieldCheck, Zap, Globe } from "lucide-react";

export default function TrackingSection() {
  return (
    <section
      id="tracking"
      aria-labelledby="tracking-heading"
      className="section-anchor mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="overflow-hidden rounded-[2.5rem] border border-border bg-surface shadow-[var(--shadow-card)]">
        {/* Top Accent Bar */}
        <div className="bg-primary px-6 py-3 text-on-primary">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Live Carrier Tracking Portal
            </span>
            <span className="hidden sm:inline-block">
              FedEx &bull; UPS &bull; DHL &bull; USPS
            </span>
          </div>
        </div>

        <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
          {/* Left visual column */}
          <RevealCss direction="right" className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface-muted border border-border">
              <Image
                src="/images/tracking-parcel.jpg"
                alt="Package with barcode and magnifying glass for live shipment tracking"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-on-dark">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 backdrop-blur-md">
                  <ShieldCheck className="h-3.5 w-3.5 text-success" />
                  Verified Status
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3 py-1 backdrop-blur-md">
                  <Zap className="h-3.5 w-3.5 text-accent-light" />
                  Instant Redirect
                </span>
              </div>
            </div>
          </RevealCss>

          {/* Right form column */}
          <RevealCss direction="left" className="lg:col-span-7">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Shipment Status
                </span>
                <h2
                  id="tracking-heading"
                  className="font-display mt-1 text-2xl font-black uppercase tracking-tight text-secondary sm:text-3xl"
                >
                  Package Tracking
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Track your shipments here. Simply enter the shipment tracking number
                to receive up-to-date status and delivery confirmation for your valuable
                and time-sensitive letters and packages. Our system tracks all packages
                sent via <strong className="text-secondary">DHL</strong>, <strong className="text-secondary">FedEx</strong>, <strong className="text-secondary">UPS</strong>, and <strong className="text-secondary">USPS</strong> — easy, fast, and accurately.
              </p>

              <div className="pt-2">
                <TrackingForm variant="section" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-border pt-4 text-xs font-medium text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-primary" />
                  Global Carrier Network
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-success" />
                  Official Carrier Gateways
                </span>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
}
