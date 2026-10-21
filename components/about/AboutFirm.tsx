import type { AboutPageData } from "@/lib/types";
import RevealCss from "@components/ui/reveal-css";
import { CheckCircle2, Clock, HeartHandshake, PackageCheck, Printer, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Eyebrow from "./EyeBrow";

const DEFAULT_TAG = "Our Story & Commitment";
const DEFAULT_QUOTE =
  "Taking the hassle out of packing, shipping, and business essentials — with personalized care for every customer.";
const DEFAULT_PARAGRAPHS = [
  "Located at 8777 Piney Orchard Pkwy Ste B beside Food Lion Supermarket in Odenton, MD, Parcel & Office Solutions was founded with a singular mission: to provide our local community with a friendly, efficient, and comprehensive one-stop center for all courier and office needs.",
  "Instead of being locked into a single delivery provider, our multi-carrier authorization lets you choose the perfect carrier for your budget and timeline. As an authorized outlet for FedEx, UPS, DHL Express, and the U.S. Postal Service, our friendly logistics specialists compare transit times and rates on the spot — ensuring you always get the best value.",
  "Beyond shipping, we are Odenton's premier business support hub. Whether you need custom packing for fragile heirlooms, secure private mailbox rentals with a physical street address, mobile or in-store notary services, digital fingerprinting, or high-volume color printing — our team handles the details with speed and precision.",
];

type AboutFirmProps = {
  aboutPageData?: AboutPageData | null;
  aboutUsImageUrl: string;
  imageAlt?: string;
};

const AboutFirm = ({
  aboutPageData,
  aboutUsImageUrl,
  imageAlt,
}: AboutFirmProps) => {
  const tag = aboutPageData?.aboutFirmTag ?? DEFAULT_TAG;
  const quote = aboutPageData?.aboutFirmQuote ?? DEFAULT_QUOTE;
  const paragraphs =
    aboutPageData?.aboutFirmParagraphs &&
    aboutPageData.aboutFirmParagraphs.length > 0
      ? aboutPageData.aboutFirmParagraphs
      : DEFAULT_PARAGRAPHS;

  const imageSrc =
    aboutUsImageUrl && !aboutUsImageUrl.includes("unsplash.com/photo-1521791136064-7986c2920216")
      ? aboutUsImageUrl
      : "/images/courier-associate-packing.jpg";

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      {/* Background Subtle Accent Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Showcase - Left 5 cols */}
          <div className="lg:col-span-5">
            <RevealCss>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image Card with Shadow & Border */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-2xl">
                  <Image
                    src={imageSrc}
                    alt={imageAlt || "Parcel & Office Solutions specialist packing customer order"}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  {/* Subtle Gradient Shade on bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />

                  {/* Inside-image badge */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-primary-dark/85 p-4 text-white backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary-dark shadow-md">
                        <PackageCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-bold text-white">
                          Certified Packaging Experts
                        </p>
                        <p className="text-xs text-white/70">
                          Boxes, bubble wrap, custom cushioning &amp; crating
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Top Badge */}
                <div className="absolute -left-4 -top-4 rounded-2xl border border-accent/30 bg-surface p-3.5 shadow-xl sm:-left-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <HeartHandshake className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-secondary">Hometown Care</p>
                      <p className="text-[11px] text-muted">Odenton, MD</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent Dots */}
                <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-2xl bg-accent/15 blur-xl" />
              </div>
            </RevealCss>
          </div>

          {/* Story Content - Right 7 cols */}
          <div className="lg:col-span-7">
            <RevealCss delay={0.08}>
              <Eyebrow>{tag}</Eyebrow>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
                More Than Just Shipping — We Are Your{" "}
                <span className="text-accent">Neighborhood Logistics Partner</span>
              </h2>

              <blockquote className="mt-6 rounded-2xl border-l-4 border-accent bg-surface-muted p-5 text-base font-medium italic leading-relaxed text-secondary shadow-sm sm:text-lg">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* 4 Feature Value Pills */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Truck className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Multi-Carrier Flexibility</h3>
                    <p className="text-xs text-muted">Compare FedEx, UPS, DHL &amp; USPS</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Safe Transit Guarantee</h3>
                    <p className="text-xs text-muted">Fragile item cushioning &amp; tracking</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Printer className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Complete Office Services</h3>
                    <p className="text-xs text-muted">Notary, mailboxes, printing &amp; faxes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-secondary">Quick Daily Pickups</h3>
                    <p className="text-xs text-muted">No long post-office queues</p>
                  </div>
                </div>
              </div>
            </RevealCss>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;
