import { ArrowRight, CheckCircle2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RevealCss from "@components/ui/reveal-css";

export default function AboutBrandStory() {
  return (
    <section className="bg-surface-muted/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Visual - Stylized Circular Character/Courier Showcase - Reference Image 3 */}
          <div className="flex justify-center lg:col-span-5">
            <RevealCss>
              <div className="relative flex items-center justify-center">
                {/* Decorative Circular Blue Frame with Orange/Amber Border Accent */}
                <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-primary-light p-2 shadow-2xl sm:h-96 sm:w-96">
                  {/* Outer Accent Ring */}
                  <div className="absolute -inset-3 rounded-full border-2 border-accent/40 border-dashed animate-[spin_40s_linear_infinite]" />

                  {/* Inner Image Container */}
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-surface bg-surface-subtle">
                    <Image
                      src="/images/hero-parcels.jpg"
                      alt="Parcel & Office Solutions logistics specialist"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 320px, 384px"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>

                  {/* Floating Box Badge (Like Save Rack box badge) */}
                  <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-4 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary-dark">
                      <PackageCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-xs font-bold text-secondary">Authorized Partner</p>
                      <p className="text-[11px] font-semibold text-accent">FedEx • UPS • DHL • USPS</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealCss>
          </div>

          {/* Right Content - Structured Typography & CTA - Reference Image 3 */}
          <div className="lg:col-span-7">
            <RevealCss delay={0.1}>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
                About Parcel &amp; Office Solutions
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Located in Odenton, Maryland—right beside Food Lion Supermarket on Piney Orchard Parkway—Parcel &amp; Office Solutions is strategically positioned to serve local residents, military families from Fort Meade, and regional businesses. Operating as an authorized partner for USPS, UPS, FedEx, and DHL Express, we guarantee seamless multi-carrier connectivity and complete parcel peace of mind.
                </p>

                <p>
                  Founded with a mission to bring friendly, stress-free courier and office services to the community, Parcel &amp; Office Solutions has quickly grown into a trusted and highly regarded logistics hub. Our comprehensive range of services includes domestic and international express shipping, certified professional custom packaging, private mailbox rentals with physical street addresses, along with specialized office solutions like notary public services, digital electronic fingerprinting, passport photos, and commercial printing.
                </p>

                <p>
                  Our clients appreciate our dedicated, super-star customer care, transparent real-time rate comparisons across top carriers, fast 24-hour turnaround, and hassle-free drop-off and pickup options with no long post-office lines.
                </p>
              </div>

              {/* Orange CTA Button (Reference Image 3) */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-bold text-white shadow-[0_4px_16px_rgba(255,140,0,0.35)] transition-all duration-200 hover:brightness-110 active:scale-95"
                >
                  Get Started Today <ArrowRight size={18} />
                </Link>

                <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  No appointment needed for shipping &amp; drop-offs
                </div>
              </div>
            </RevealCss>
          </div>
        </div>
      </div>
    </section>
  );
}
