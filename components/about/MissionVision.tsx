import type { AboutPageData } from '@/lib/types';
import { CheckCircle2, Compass, Globe, Sparkles, Target } from 'lucide-react';
import Image from 'next/image';
import RevealCss from '../ui/reveal-css';
import Eyebrow from './EyeBrow';

type MissionVisionProps = {
  aboutPageData?: AboutPageData | null;
  missionIconUrl?: string;
  visionIconUrl?: string;
};

const DEFAULT_MISSION =
  'Our mission is to provide fast, dependable, and cost-effective shipping and business solutions through multi-carrier flexibility, certified custom packaging, and friendly customer-first service. We strive to make sending and receiving effortless for every resident, family, and growing enterprise in Odenton and beyond.';

const DEFAULT_VISION =
  'To be Odenton’s premier and most trusted shipping, mailing, and business support center — recognized for integrity, logistical excellence, and empowering our local community with seamless connections to every corner of the globe.';

const MissionVision = ({
  aboutPageData,
  missionIconUrl,
  visionIconUrl,
}: MissionVisionProps) => {
  const missionText = aboutPageData?.missionText ?? DEFAULT_MISSION;
  const visionText = aboutPageData?.visionText ?? DEFAULT_VISION;

  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 lg:py-28">
      {/* Subtle Dot Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]"
      />

      {/* Ambient Radial Accent Light Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,var(--color-primary-light)_0%,transparent_70%)] opacity-25 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <RevealCss className="mx-auto max-w-3xl text-center">
          <Eyebrow>Purpose &amp; Direction</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Guided By Reliability, Driven By{" "}
            <span className="text-accent">Excellence</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Empowering our neighbors and businesses with multi-carrier courier power, safe handling, and dedicated local support.
          </p>
        </RevealCss>

        {/* 2 Interactive Cards: Mission & Vision */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {/* Mission Card */}
          <RevealCss delay={0}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:p-10">
              {/* Top Accent Gradient Line */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-accent via-accent-light to-amber-300" />

              <div>
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary-dark">
                  {missionIconUrl ? (
                    <Image
                      src={missionIconUrl}
                      alt={aboutPageData?.missionIcon?.alt || "Our Mission"}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Target size={28} strokeWidth={2} />
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Our Mission
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  {missionText}
                </p>
              </div>

              {/* Pillars / Milestones */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  Key Commitments
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-white/75">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Multi-carrier choice for best transit speed and rates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Meticulous packaging care for valuable &amp; fragile items</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>Friendly, personalized assistance at every visit</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealCss>

          {/* Vision Card */}
          <RevealCss delay={0.12}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-light/50 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:p-10">
              {/* Top Accent Gradient Line */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-amber-400 via-accent-light to-accent" />

              <div>
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light/20 text-accent-light transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-light group-hover:text-primary-dark">
                  {visionIconUrl ? (
                    <Image
                      src={visionIconUrl}
                      alt={aboutPageData?.visionIcon?.alt || "Our Vision"}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    <Globe size={28} strokeWidth={2} />
                  )}
                </div>

                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Our Vision
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  {visionText}
                </p>
              </div>

              {/* Pillars / Milestones */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-light">
                  Long-Term Goals
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-white/75">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-light" />
                    <span>Connecting Odenton locally and to 220+ countries worldwide</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-light" />
                    <span>Turnkey office &amp; logistics support for local entrepreneurs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-light" />
                    <span>Setting the benchmark for customer care, safety &amp; speed</span>
                  </li>
                </ul>
              </div>
            </div>
          </RevealCss>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
