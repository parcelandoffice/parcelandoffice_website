import RevealCss from "@components/ui/reveal-css";
import { CheckCircle2, Compass, Globe, Sparkles, Target } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-surface-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent">
            <span className="h-1 w-6 rounded-full bg-accent" />
            Our Purpose &amp; Aspiration
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            Committed to Excellence in Every Delivery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Grounded in local trust and powered by the world’s leading carrier networks.
          </p>
        </RevealCss>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {/* Mission Card */}
          <RevealCss delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl sm:p-10">
              <div className="absolute left-8 right-8 top-0 h-1.5 rounded-b-md bg-accent" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-primary-dark">
                  <Target size={28} strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  To provide fast, reliable, and cost-effective shipping and office solutions through multi-carrier flexibility, certified packaging, and friendly customer care. We make sending and receiving effortless for every resident, family, and growing enterprise in Odenton and beyond.
                </p>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <ul className="space-y-2.5 text-sm font-medium text-secondary">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Real-time multi-carrier rate and transit comparisons</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Certified custom packaging for fragile &amp; valuable shipments</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Personalized, super-star customer care at every visit</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealCss>

          {/* Vision Card */}
          <RevealCss delay={0.12}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl sm:p-10">
              <div className="absolute left-8 right-8 top-0 h-1.5 rounded-b-md bg-accent-light" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent-light group-hover:text-primary-dark">
                  <Globe size={28} strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  To be Odenton’s premier and most trusted shipping, mailing, and business support center — recognized for integrity, logistical excellence, and empowering our local community with seamless connections to every corner of the globe.
                </p>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <ul className="space-y-2.5 text-sm font-medium text-secondary">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Connecting Odenton directly to over 220+ international destinations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Turnkey office tools empowering local small businesses &amp; military families</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Setting the gold standard for community logistics and reliability</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
}
