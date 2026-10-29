export interface DigitalMarketingStat {
  value: string;
  label: string;
  subtext?: string;
}

export interface DigitalMarketingPillar {
  title: string;
  description: string;
  icon?: "calendar" | "palette" | "users" | "target" | "trending-up" | "sparkles" | "check-circle" | "code" | string;
  iconUrl?: string;
}

export interface DigitalMarketingSolutionItem {
  id: string;
  title: string;
  description: string;
  icon?: "strategy" | "content" | "target" | "analytics" | "campaign" | "code" | "social" | "brand" | string;
  iconUrl?: string;
  highlights?: string[];
}

export interface DigitalMarketingProcessStep {
  step: string;
  title: string;
  description: string;
  iconUrl?: string;
}

export interface DigitalMarketingIndustry {
  title: string;
  description: string;
  icon?: "shopping-bag" | "heart-pulse" | "building" | "briefcase" | "utensils" | "cpu" | string;
  iconUrl?: string;
}

export interface DigitalMarketingWhyChoosePoint {
  title: string;
  description: string;
  iconUrl?: string;
}

export interface DigitalMarketingTestimonial {
  quote: string;
  clientName: string;
  company: string;
  role?: string;
  rating?: number;
  approved?: boolean;
  avatarUrl?: string;
}

export interface DigitalMarketingFaq {
  question: string;
  answer: string;
}

export interface DigitalMarketingPlatformItem {
  name: string;
  description: string;
  platform?: "facebook" | "instagram" | "linkedin" | "youtube" | string;
  iconUrl?: string;
}

export interface DigitalMarketingPlatformsData {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: DigitalMarketingPlatformItem[];
}

export interface DigitalMarketingLocalApproachPoint {
  title: string;
  description: string;
  icon?: string;
  iconUrl?: string;
}

export interface DigitalMarketingLocalMarketingData {
  eyebrow?: string;
  heading: string;
  intro: string;
  approachTitle: string;
  points: DigitalMarketingLocalApproachPoint[];
  ctaText?: string;
  ctaHref?: string;
}

export interface DigitalMarketingFinalCta {
  eyebrow?: string;
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustPoints?: string[];
}

export interface DigitalMarketingServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  badge?: string;
  iconUrl?: string;
  showHero?: boolean;
  showOverview?: boolean;
  showSolutions?: boolean;
  showPlatforms?: boolean;
  showIndustries?: boolean;
  showLocalMarketing?: boolean;
  showProcess?: boolean;
  showWhyChooseUs?: boolean;
  showTestimonials?: boolean;
  showFaqs?: boolean;
  showFinalCta?: boolean;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    headlineHighlight?: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    heroImage: string;
    stats?: DigitalMarketingStat[];
  };
  overview: {
    eyebrow: string;
    heading: string;
    image?: string;
    imageAlt?: string;
    paragraphs: string[];
    pillarsTitle?: string;
    pillars?: DigitalMarketingPillar[];
  };
  solutions: {
    eyebrow: string;
    heading: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    items: DigitalMarketingSolutionItem[];
  };
  platforms?: DigitalMarketingPlatformsData;
  industries?: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingIndustry[];
  };
  localMarketing?: DigitalMarketingLocalMarketingData;
  process?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    steps: DigitalMarketingProcessStep[];
  };
  whyChooseUs?: {
    eyebrow: string;
    heading: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
    points: DigitalMarketingWhyChoosePoint[];
  };
  testimonials?: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingTestimonial[];
  };
  faqs?: {
    eyebrow: string;
    heading: string;
    description?: string;
    items: DigitalMarketingFaq[];
  };
  finalCta?: DigitalMarketingFinalCta;
}

/**
 * Static mock data removed. IT Services are dynamically loaded from Sanity CMS via itService schema.
 */
export const DIGITAL_MARKETING_SERVICES: Record<string, DigitalMarketingServiceData> = {};
export const DIGITAL_MARKETING_SLUGS: string[] = [];

export function getDigitalMarketingService(slug: string): DigitalMarketingServiceData | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim().replace(/-usa$/, "");
  return DIGITAL_MARKETING_SERVICES[normalized];
}
