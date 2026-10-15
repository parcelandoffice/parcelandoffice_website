import type { PortableTextBlock } from "@/lib/portable-text";
import type { SanityImageSource } from "@sanity/image-url";

export type PageSeoFields = {
  metaTitle?: string;
  metaDescription?: string;
};

export type PageSeoKey = "home" | "blog" | "about" | "contact";

export type PageSeoData = {
  _id: string;
  homePageSeo?: PageSeoFields;
  blogPageSeo?: PageSeoFields;
  aboutPageSeo?: PageSeoFields;
  contactPageSeo?: PageSeoFields;
};

export type CoreValueItem = {
  title: string;
  description: string;
  icon?: SanityImageSource;
};

export type ResolvedCoreValueItem = {
  title: string;
  description: string;
  iconUrl?: string;
};

export type AboutPageData = {
  _id: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  featuredImage?: SanityImageSource & { alt?: string };
  aboutUsImage?: SanityImageSource & { alt?: string };
  aboutFirmTag?: string;
  aboutFirmQuote?: string;
  aboutFirmParagraphs?: string[];
  missionText?: string;
  missionIcon?: SanityImageSource & { alt?: string };
  visionText?: string;
  visionIcon?: SanityImageSource & { alt?: string };
  ctaButtonText?: string;
  founderTag?: string;
  founderAuthor?: PostAuthor;
  coreValuesTag?: string;
  coreValuesTitle?: string;
  coreValuesDescription?: string;
  coreValuesItems?: CoreValueItem[];
};

export type PracticeAreaItem = {
  icon?: SanityImageSource & { alt?: string };
  label: string;
  description: string;
};

export type WhyChooseUsItem = {
  title: string;
  subtitle: string;
};

export type TrackRecordItem = {
  label: string;
  value: string;
};

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export type HomeTestimonial = {
  _id: string;
  star: number;
  description: string;
  name: string;
};

export type HeroSlideData = {
  _key?: string;
  image?: SanityImageSource;
  badge?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

export type PickupSlotData = {
  label: string;
  time: string;
};

export type PickupCutoffData = {
  _key?: string;
  carrierName: string;
  carrierBadge?: string;
  slots?: PickupSlotData[];
};

export type WelcomeHighlightData = {
  _key?: string;
  text: string;
  icon?: string;
};

export type WelcomeStatData = {
  _key?: string;
  value: number;
  suffix?: string;
  label: string;
};

export type ProcessStepData = {
  _key?: string;
  stepNumber: number;
  title: string;
  text: string;
  icon?: string;
};

export type SanityService = {
  _id: string;
  title: string;
  slug?: { current: string };
  shortDescription?: string;
  iconName?: string;
  customIcon?: SanityImageSource;
  category?: string;
  orderRank?: number;
  isFeatured?: boolean;
  badge?: string;
  customUrl?: string;
};

export type HomePageData = {
  _id?: string;
  // Hero Slider
  heroSlides?: HeroSlideData[];

  // Tracking & Cutoffs
  trackingEyebrow?: string;
  trackingTitle?: string;
  trackingDescription?: string;
  trackingCardTitle?: string;
  trackingCardSubtitle?: string;
  trackingCardBadge?: string;
  trackingCardDescription?: string;
  trackingInputPlaceholder?: string;
  trackingButtonText?: string;
  cutoffsCardTitle?: string;
  cutoffsCardSubtitle?: string;
  cutoffsCardBadge?: string;
  pickupCutoffs?: PickupCutoffData[];
  cutoffsFooterText?: string;
  cutoffsFooterUrl?: string;

  // Welcome & Story
  welcomeEyebrow?: string;
  welcomeTitle?: string;
  welcomeParagraphs?: string[];
  welcomeHighlights?: WelcomeHighlightData[];
  welcomeStats?: WelcomeStatData[];

  // Featured Services
  servicesTitle?: string;
  servicesCtaText?: string;
  servicesCtaUrl?: string;
  featuredServicesList?: SanityService[];

  // 3-Step Process
  processEyebrow?: string;
  processTitle?: string;
  processDescription?: string;
  processSteps?: ProcessStepData[];

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;

  // Legacy fields
  heroTitle?: string;
  heroHighlightText?: string;
  heroSubtitle?: string;
  heroImage?: SanityImageSource & { alt?: string };
  ctaButtonText?: string;
  aboutImage?: SanityImageSource & { alt?: string };
  aboutTag?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  aboutCtaButtonText?: string;
  practiceAreaTag?: string;
  practiceAreaTitle?: string;
  practiceAreaDescription?: string;
  practiceAreas?: PracticeAreaItem[];
  whyChooseUsImage?: SanityImageSource & { alt?: string };
  whyChooseUsTag?: string;
  whyChooseUsTitle?: string;
  whyChooseUsDescription?: string;
  whyChooseUsItems?: WhyChooseUsItem[];
  trackRecordTag?: string;
  trackRecordTitle?: string;
  trackRecordDescription?: string;
  trackRecords?: TrackRecordItem[];
  testimonialTag?: string;
  testimonialTitle?: string;
  testimonialDescription?: string;
  testimonials?: HomeTestimonial[];
  faqTag?: string;
  faqTitle?: string;
  faqDescription?: string;
  faqCtaButtonText?: string;
  faqs?: HomeFaqItem[];
};

export type FooterData = {
  footerSummary?: string;
  address?: string;
  mobileNumber?: string;
  email?: string;
};

export type SiteMetadata = {
  _id: string;
  blogHeroTitle?: string;
  blogHeroDescription?: string;
  footerSummary?: string;
};

export type ContactCtaData = {
  _id: string;
  tag?: string;
  title?: string;
  description?: string;
};

export type SettingsData = {
  logo?: SanityImageSource & { alt?: string };
  logoInverted?: SanityImageSource & { alt?: string };
};

export type PostAuthor = {
  _id: string;
  name: string;
  slug: string;
  image?: SanityImageSource & { alt?: string };
  bio?: string;
  additionalInfo?: string;
};

export type PostCategory = {
  _id: string;
  title: string;
  description?: string;
};

export type SanityPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  short_description?: string;
  metaTitle?: string;
  metaDescription?: string;
  body: PortableTextBlock[];
  mainImage?: SanityImageSource & { alt?: string };
  author?: PostAuthor;
  categories?: PostCategory[];
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  image: string;
  imageAlt?: string;
  category?: string;
  publishedAt: string;
};
