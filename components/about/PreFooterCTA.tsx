import { ArrowRight, Lock, Phone, Scale, Trophy } from 'lucide-react'
import Link from 'next/link'
import RevealCss from '../ui/reveal-css'

const TRUST = [
    { icon: Scale, text: "Free Initial Consultation" },
    { icon: Lock, text: "100% Confidential" },
    { icon: Trophy, text: "Award-Winning Team" },
] as const;

function PreFooterCTA() {
    return (
        <section className="relative overflow-hidden bg-primary-dark py-28">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_1)] [background-size:36px_36px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full opacity-20"
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
                <RevealCss>
                    <div className="mb-4 flex justify-center">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                            <span className="inline-block h-px w-6 bg-accent" />
                            Take the First Step
                            <span className="inline-block h-px w-6 bg-accent" />
                        </span>
                    </div>

                     <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                    Ready to Discuss <br />
                        <span className="text-accent">Your Legal Needs?</span>
                    </h2>

                    <p className="mx-auto mb-10 max-w-6xl text-lg text-white/65">
                    Whether you&apos;re seeking legal advice, resolving a dispute, or planning for the future, RP Law Firm is here to provide trusted guidance, strategic solutions, and dedicated representation every step of the way.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="transition-transform duration-200 hover:scale-105 active:scale-[0.97]">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-9 py-4 text-sm font-bold tracking-wide text-primary-dark transition-[filter] hover:brightness-110"
                            >
                                Schedule a Consultation <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="transition-transform duration-200 hover:scale-105 active:scale-[0.97]">
                            <Link
                                href="tel:+919512123013"
                                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-9 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                <Phone size={16} /> Call Us Now
                            </Link>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-wrap justify-center gap-8">
                        {TRUST.map(({ icon, text }) => {
                            const Icon = icon;
                            return (
                                <div
                                    key={text}
                                    className="flex items-center gap-2 text-sm text-white/55"
                                >
                                    <Icon size={15} strokeWidth={1.8} />
                                    <span>{text}</span>
                                </div>
                            );
                        })}
                    </div>
                </RevealCss>
            </div>
        </section>
    )
}

export default PreFooterCTA
