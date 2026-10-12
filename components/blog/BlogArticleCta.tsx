import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";

export default function BlogArticleCta() {
    return (
        <section className="relative overflow-hidden bg-primary-dark py-20">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    <Scale className="h-3.5 w-3.5" aria-hidden="true" />
                    Legal Expertise
                </p>

                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need Professional Legal Advice?
                </h3>

                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                If you are facing a legal challenge or require professional legal advice, RP Law Firm is ready to assist you. Contact us to discuss your matter and receive practical legal guidance tailored to your specific needs.
                </p>

                <Link
                    href="/contact-us"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-wide text-primary-dark shadow-[0_0_32px_rgba(234,179,8,0.35)] transition-[filter] hover:brightness-110"
                >
                    Schedule a Consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}
