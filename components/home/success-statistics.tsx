import AnimatedCounter from "@components/ui/animated-counter";
import SectionHeading from "@components/ui/section-heading";
import RevealCss from "@components/ui/reveal-css";
import { parseTrackRecordValue } from "@/lib/helpers";
import type { TrackRecordItem } from "@/lib/types";

const defaultStats: TrackRecordItem[] = [
  { value: "100%", label: "Transparent Communication" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "100%", label: "Confidentiality Assured" },
];

type SuccessStatisticsProps = {
  trackRecordTag?: string;
  trackRecordTitle?: string;
  trackRecordDescription?: string;
  trackRecords?: TrackRecordItem[];
};

export default function SuccessStatistics({
  trackRecordTag = "Our Track Record",
  trackRecordTitle = "Trusted by Clients. Proven Through Results.",
  trackRecordDescription = "Our achievements reflect years of legal excellence, successful outcomes, and the confidence that individuals and businesses place in RP Law Firm.",
  trackRecords = defaultStats,
}: SuccessStatisticsProps) {
  const stats = trackRecords?.length > 0 ? trackRecords : defaultStats;

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealCss className="flex flex-col items-center">
          <SectionHeading
            eyebrow={trackRecordTag}
            title={trackRecordTitle}
            description={trackRecordDescription}
            light
            markAs="h4"
          />
        </RevealCss>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const parsed = parseTrackRecordValue(stat.value);

            return (
              <RevealCss
                key={stat.label}
                delay={index * 0.1}
                className="bg-primary/40 p-8 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-bold text-accent sm:text-5xl">
                  {parsed ? (
                    <AnimatedCounter
                      end={parsed.end}
                      suffix={parsed.suffix}
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-3 text-sm font-medium text-white/70 sm:text-base">
                  {stat.label}
                </p>
              </RevealCss>
            );
          })}
        </div>
      </div>
    </section>
  );
}
