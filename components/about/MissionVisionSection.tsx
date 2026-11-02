import RevealCss from "@components/ui/reveal-css";
import { CheckCircle2, Globe, Target } from "lucide-react";
import Image from "next/image";
import type { AboutPageData } from "@/lib/types";

const DEFAULT_MISSION_POINTS = [
  "Real-time multi-carrier rate and transit comparisons",
  "Certified custom packaging for fragile & valuable shipments",
  "Personalized, super-star customer care at every visit",
];

const DEFAULT_VISION_POINTS = [
  "Connecting Odenton directly to over 220+ international destinations",
  "Turnkey office tools empowering local small businesses & military families",
  "Setting the gold standard for community logistics and reliability",
];

export default function MissionVisionSection({ data }: { data?: AboutPageData | null }) {
  const eyebrow = data?.missionVisionEyebrow || "Our Purpose & Aspiration";
  const title = data?.missionVisionTitle || "Committed to Excellence in Every Delivery";
  const subtitle =
    data?.missionVisionSubtitle || "Grounded in local trust and powered by the world’s leading carrier networks.";

  // Mission
  const missionTitle = data?.missionTitle || "Our Mission";
  const missionDesc =
    data?.missionDescription ||
    "To provide fast, reliable, and cost-effective shipping and office solutions through multi-carrier flexibility, certified packaging, and friendly customer care. We make sending and receiving effortless for every resident, family, and growing enterprise in Odenton and beyond.";
  const missionPoints =
    data?.missionPoints && data.missionPoints.length > 0 ? data.missionPoints : DEFAULT_MISSION_POINTS;
  const missionIconUrl = data?.missionIconUrl;

  // Vision
  const visionTitle = data?.visionTitle || "Our Vision";
  const visionDesc =
    data?.visionDescription ||
    "To be Odenton’s premier and most trusted shipping, mailing, and business support center — recognized for integrity, logistical excellence, and empowering our local community with seamless connections to every corner of the globe.";
  const visionPoints =
    data?.visionPoints && data.visionPoints.length > 0 ? data.visionPoints : DEFAULT_VISION_POINTS;
  const visionIconUrl = data?.visionIconUrl;

  return (
    <section className="bg-surface-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-accent">
            <span className="h-1 w-6 rounded-full bg-accent" />
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        </RevealCss>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {/* Mission Card */}
          <RevealCss delay={0.05}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl sm:p-10">
              <div className="absolute left-8 right-8 top-0 h-1.5 rounded-b-md bg-accent" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  {missionIconUrl ? (
                    <Image
                      src={missionIconUrl}
                      alt="Icon"
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Target size={28} strokeWidth={2} />
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary">
                  {missionTitle}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {missionDesc}
                </p>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <ul className="space-y-2.5 text-sm font-medium text-secondary">
                  {missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealCss>

          {/* Vision Card */}
          <RevealCss delay={0.12}>
            <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl sm:p-10">
              <div className="absolute left-8 right-8 top-0 h-1.5 rounded-b-md bg-accent-light" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-accent-light group-hover:text-white">
                  {visionIconUrl ? (
                    <Image
                      src={visionIconUrl}
                      alt="Icon"
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Globe size={28} strokeWidth={2} />
                  )}
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary">
                  {visionTitle}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {visionDesc}
                </p>
              </div>

              <div className="mt-8 border-t border-border-subtle pt-6">
                <ul className="space-y-2.5 text-sm font-medium text-secondary">
                  {visionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
}
