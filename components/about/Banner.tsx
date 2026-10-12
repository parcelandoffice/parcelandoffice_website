import type { AboutPageData } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PracticeAreasLink from './PracticeAreasLink';

type BannerProps = {
    aboutPageData?: AboutPageData | null;
    featuredImageUrl: string;
    featuredImageAlt?: string;
};

const Banner = ({ aboutPageData, featuredImageUrl, featuredImageAlt }: BannerProps) => {
    const title = aboutPageData?.title ?? 'About';
    const titleHighlight = aboutPageData?.titleHighlight ?? 'RP Law Firm';
    const subtitle =
        aboutPageData?.subtitle ??
        'Although headquartered in Ahmedabad, Gujarat, RP Law Firm proudly serves clients across India. Through technology-enabled consultations and strategic legal coordination, we assist individuals, businesses, NRIs, and corporate clients in handling legal matters before courts, tribunals, and regulatory authorities nationwide.';
    const ctaButtonText = aboutPageData?.ctaButtonText ?? 'Schedule a Consultation';

    return (
        <section className="relative flex min-h-[88vh] items-center overflow-hidden sm:items-start">
            <Image
                src={featuredImageUrl}
                alt={
                    featuredImageAlt ||
                    aboutPageData?.featuredImage?.alt ||
                    `${title} - ${titleHighlight}`
                }
                fill
                priority
                fetchPriority="high"
                className="object-cover object-center"
                sizes="100vw"
            />

            <div className="absolute inset-0 bg-primary/75" />
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]"
            />

            {/* <div className="absolute left-0 top-0 h-full w-1 bg-accent" /> */}

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20">
                <div className="about-hero-stagger max-w-3xl text-left">
                    <h1 className="about-hero-animate-item text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        {title} <br/>
                        <span className="text-accent">{titleHighlight}</span>
                    </h1>

                    <p className="about-hero-animate-item mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
                        {subtitle}
                    </p>

                    <div className="about-hero-animate-item mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-primary transition-[filter] hover:brightness-110"
                        >
                            {ctaButtonText} <ArrowRight size={16} />
                        </Link>
                        <PracticeAreasLink />
                    </div>
                </div>
            </div>
        </section>
    );

};

export default Banner