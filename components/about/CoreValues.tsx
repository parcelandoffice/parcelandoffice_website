import type { ResolvedCoreValueItem } from "@/lib/types";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import RevealCss from "../ui/reveal-css";
import SectionHeading from "../ui/section-heading";

const DEFAULT_CORE_VALUES: ResolvedCoreValueItem[] = [
    {
        title: "Integrity",
        description:
            "We uphold honesty, fairness, and ethical conduct in every professional engagement.",
    },
    {
        title: "Excellence",
        description:
            "We continuously strive to deliver legal services of the highest quality through preparation, dedication, and attention to detail.",
    },
    {
        title: "Confidentiality",
        description:
            "Every client's information is treated with complete privacy and professional discretion.",
    },
    {
        title: "Commitment",
        description:
            "We remain dedicated to protecting our clients' legal rights and pursuing their objectives with diligence and responsibility.",
    },
    {
        title: "Transparency",
        description:
            "We believe in clear communication, honest advice, and keeping clients informed throughout the legal process.",
    },
];

type CoreValuesProps = {
    coreValuesTag?: string;
    coreValuesTitle?: string;
    coreValuesDescription?: string;
    coreValuesItems?: ResolvedCoreValueItem[];
};

function CoreValues({
    coreValuesTag,
    coreValuesTitle,
    coreValuesDescription,
    coreValuesItems,
}: CoreValuesProps) {
    const values =
        coreValuesItems && coreValuesItems.length > 0
            ? coreValuesItems
            : DEFAULT_CORE_VALUES;

    return (
        <section className="bg-background pt-28 pb-10">
            <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                <RevealCss>
                    <SectionHeading
                        eyebrow={
                            coreValuesTag ?? "Principles That Drive Us"
                        }
                        title={coreValuesTitle ?? "Our Core Values"}
                        description={
                            coreValuesDescription ??
                            "Our values define how we practice law and the trust we build with every client."
                        }
                        align="left"
                        markAs="h3"
                    />
                </RevealCss>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {values.map((value, index) => (
                        <RevealCss
                            key={`${value.title}-${index}`}
                            as="article"
                            delay={index * 0.1}
                            className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                                {value.iconUrl ? (
                                    <Image
                                        src={value.iconUrl}
                                        alt=""
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ShieldCheck
                                        className="h-6 w-6"
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                    />
                                )}
                            </div>

                            <div className="text-xl font-bold text-primary">
                                {value.title}
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-muted">
                                {value.description}
                            </p>
                        </RevealCss>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
