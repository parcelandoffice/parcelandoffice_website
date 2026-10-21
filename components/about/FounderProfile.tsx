import Image from "next/image";
import { getFirstAuthor } from "@/lib/apis";
import { getImageUrl } from "@/lib/helpers";
import type { AboutPageData, PostAuthor } from "@/lib/types";
import RevealCss from "@components/ui/reveal-css";
import { Award, CheckCircle, HeartHandshake, MapPin, Quote, ShieldCheck } from "lucide-react";
import Eyebrow from "./EyeBrow";

const FALLBACK_NAME = "Founder & Operations Director";
const FALLBACK_IMAGE = "/images/small-biz-owner.jpg";
const DEFAULT_TAG = "Leadership & Customer Dedication";
const DEFAULT_BIO_PARAGRAPHS = [
  "Founded on the belief that neighborhood logistics should be personal, dependable, and convenient, Parcel & Office Solutions was established to provide the Odenton community with a welcoming one-stop center for all shipping and business service needs.",
  "Frustrated by impersonal service, long lines, and rigid single-carrier options, our founders set out to build a multi-carrier center where customers receive honest rate comparisons between FedEx, UPS, DHL, and USPS, paired with expert packaging and reliable office support.",
  "Today, we take immense pride in knowing our regular customers by name, assisting local small businesses, and treating every parcel — big or small — with the utmost care, precision, and respect.",
];

type FounderProfileProps = {
  aboutPageData?: AboutPageData | null;
};

const FounderProfile = async ({ aboutPageData }: FounderProfileProps) => {
  const fallbackAuthor = aboutPageData?.founderAuthor
    ? null
    : await getFirstAuthor().catch(() => null);
  const author: PostAuthor | null =
    aboutPageData?.founderAuthor ?? fallbackAuthor;

  // Filter out any legacy law firm name if it persists in old database records
  const isLawFirmLegacy =
    author?.name?.toLowerCase().includes("rinal") ||
    author?.name?.toLowerCase().includes("patel") ||
    author?.name?.toLowerCase().includes("adv.");

  const name = !isLawFirmLegacy && author?.name ? author.name : FALLBACK_NAME;
  const imageUrl =
    !isLawFirmLegacy && author?.image
      ? getImageUrl(author.image)
      : FALLBACK_IMAGE;

  const tag = aboutPageData?.founderTag ?? DEFAULT_TAG;
  const bio = !isLawFirmLegacy && author?.bio ? author.bio : null;
  const additionalInfo =
    !isLawFirmLegacy && author?.additionalInfo ? author.additionalInfo : null;

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-surface to-surface-muted p-8 shadow-xl sm:p-12 lg:p-16">
          {/* Accent top stripe */}
          <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-primary via-primary-light to-accent" />

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Founder Image & Visuals - 5 cols */}
            <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
              <RevealCss>
                <div className="relative">
                  {/* Portrait Container */}
                  <div className="relative h-64 w-64 overflow-hidden rounded-3xl border-4 border-surface shadow-[0_12px_36px_rgba(15,45,89,0.18)] outline outline-2 outline-accent/60 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                    <Image
                      src={imageUrl}
                      alt={name}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 288px, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                  </div>

                  {/* Corner Accent Badge */}
                  <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl border border-accent/30 bg-surface px-4 py-2.5 shadow-lg sm:-bottom-5 sm:-right-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-primary-dark font-bold">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-secondary">Odenton, MD</p>
                      <p className="text-[11px] text-muted">Locally Owned</p>
                    </div>
                  </div>
                </div>
              </RevealCss>
            </div>

            {/* Founder Bio & Leadership Message - 7 cols */}
            <div className="lg:col-span-7">
              <RevealCss delay={0.08} className="text-left">
                <Eyebrow>{tag}</Eyebrow>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                  {name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-accent">
                  Parcel &amp; Office Solutions • Odenton, MD
                </p>

                {/* Quote Box */}
                <div className="relative mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-secondary">
                  <Quote className="absolute right-4 top-4 h-8 w-8 text-accent/25" />
                  <p className="text-base font-medium italic leading-relaxed sm:text-lg">
                    &ldquo;Every parcel carries someone’s trust — an urgent document, a care package to family, or a small business order fueling a dream. We treat every package as if it were our own.&rdquo;
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                  {bio ? (
                    <p className="whitespace-pre-line">{bio}</p>
                  ) : (
                    DEFAULT_BIO_PARAGRAPHS.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  )}
                  {additionalInfo ? <p>{additionalInfo}</p> : null}
                </div>

                {/* Core Leadership Pledges */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-secondary">
                    <CheckCircle className="h-3.5 w-3.5 text-accent" />
                    Community-First Care
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-secondary">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    Certified Packaging Standards
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-secondary">
                    <HeartHandshake className="h-3.5 w-3.5 text-accent" />
                    Hassle-Free Guarantee
                  </span>
                </div>
              </RevealCss>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
