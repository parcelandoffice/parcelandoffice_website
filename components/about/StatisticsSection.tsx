import AnimatedCounter from "@components/ui/animated-counter";
import RevealCss from "@components/ui/reveal-css";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StatisticsSection() {
  const stats = [
    {
      value: 4,
      suffix: "",
      label: "Major Carriers Under One Roof",
      subtext: "FedEx • UPS • DHL • USPS",
    },
    {
      value: 220,
      suffix: "+",
      label: "Countries and territories",
      subtext: "Express worldwide global reach",
    },
    {
      value: 50,
      suffix: "K+",
      label: "Packages safely delivered",
      subtext: "Meticulously packed & tracked",
    },
    {
      value: 100,
      suffix: "%",
      label: "Secure packing & care guarantee",
      subtext: "Hometown dedication in Odenton",
    },
  ];

  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Full-width Container with Overlapping Stats Card - Reference Image 2 */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary-dark shadow-2xl">
          {/* Background Delivery / Transit Image */}
          <div className="relative h-[650px] w-full sm:h-[600px] lg:h-[640px]">
            <Image
              src="/images/fedex-hero.jpg"
              alt="Multi-carrier delivery logistics in motion"
              fill
              className="object-cover object-center brightness-90"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Gradient Overlay for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent sm:bg-gradient-to-r sm:from-black/40 sm:via-transparent sm:to-black/30" />
          </div>

          {/* Floating Vertical White Statistics Card - Reference Image 2 */}
          <div className="absolute bottom-6 left-4 right-4 sm:bottom-auto sm:left-auto sm:right-8 sm:top-1/2 sm:-translate-y-1/2 sm:w-[380px] lg:right-12 lg:w-[420px]">
            <RevealCss delay={0.1}>
              <div className="rounded-2xl border border-border/80 bg-surface/95 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                <div className="divide-y divide-border">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-5">
                      <div className="flex items-baseline gap-1 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                        <AnimatedCounter end={stat.value} duration={1200} />
                        <span className="text-accent">{stat.suffix}</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-secondary">
                        {stat.label}
                      </p>
                      <p className="text-xs text-muted">
                        {stat.subtext}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Yellow/Amber Pill Action Button - Reference Image 2 */}
                <div className="mt-5 pt-2">
                  <Link
                    href="/#services"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold tracking-wide text-primary-dark shadow-md transition-all duration-200 hover:brightness-110 active:scale-98"
                  >
                    View All Services &amp; Rates <ChevronRight size={18} />
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
