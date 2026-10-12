import type { AboutPageData } from "@/lib/types";
import RevealCss from "@components/ui/reveal-css";
import Image from "next/image";
import Eyebrow from "./EyeBrow";

const DEFAULT_TAG = "Our Origins";
const DEFAULT_QUOTE =
    "Trusted Legal Solutions in Ahmedabad, Gujarat";
const DEFAULT_PARAGRAPHS = [
    "At RP Law Firm, we are committed to providing practical, ethical, and result-oriented legal services to individuals, families, entrepreneurs, and businesses across Gujarat and India. Founded by Adv. Rinal Patel, our firm combines legal knowledge, strategic thinking, and a client-centric approach to deliver effective solutions for complex legal matters.",
    "We understand that every legal issue has personal, financial, and commercial implications. Whether you are involved in litigation, require legal advice, or need assistance with documentation and compliance, we work closely with you to protect your rights and achieve the most appropriate legal outcome.",
    "Based in Ahmedabad, Gujarat, RP Law Firm represents clients before the Gujarat High Court, District & Sessions Courts, Civil Courts, Family Courts, Consumer Commissions, Commercial Courts, and various judicial and quasi-judicial authorities. Our commitment is to provide clear legal guidance, responsive communication, and professional representation at every stage of your matter.",
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

    return (
        <section className="bg-surface py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <RevealCss>
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={aboutUsImageUrl}
                                    alt={imageAlt || "Law office interior"}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-accent opacity-[0.18]" />
                            <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-xl bg-accent opacity-[0.18]" />
                        </div>
                    </RevealCss>

                    <RevealCss delay={0.08}>
                        <Eyebrow>{tag}</Eyebrow>
                        <div className="mt-5 space-y-5">
                            <blockquote className="mb-6 border-l-[3px] border-accent pl-5 text-lg italic leading-relaxed text-muted">
                                <h2>{quote}</h2>
                            </blockquote>
                            {paragraphs.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="leading-relaxed text-muted"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </RevealCss>
                </div>
            </div>
        </section>
    );
};

export default AboutFirm;
