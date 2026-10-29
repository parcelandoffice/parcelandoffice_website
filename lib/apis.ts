import { DEFAULT_LIMIT, DEFAULT_OFFSET, PLACEHOLDER_IMAGE } from "./constants";
import type { FilteredResponseQueryOptions, QueryParams } from "@sanity/client";
import { sanityClient } from "./sanity-client";
import { urlFor } from "./sanity-image-builder";
import type {
  AboutPageData,
  Blog,
  BlogCategoryItem,
  ContactCtaData,
  FooterData,
  HomePageData,
  PageSeoData,
  PostAuthor,
  SanityPost,
  SanityService,
  SanityTestimonial,
  SettingsData,
  SiteMetadata,
} from "./types";
import {
  type DigitalMarketingServiceData,
} from "./digital-marketing-data";

const SANITY_REVALIDATE_SECONDS = 180;

type SanityFetchOptions = FilteredResponseQueryOptions;

async function fetchFromSanity<T>(
  query: string,
  params: QueryParams = {},
  options?: SanityFetchOptions,
  retries = 3
): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params, {
      ...options,
      next: {
        ...options?.next,
        revalidate: SANITY_REVALIDATE_SECONDS,
      },
    });
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return fetchFromSanity<T>(query, params, options, retries - 1);
    }
    throw error;
  }
}

const authorFields = `
  _id,
  name,
  "slug": slug.current,
  image,
  bio,
  additionalInfo
`;

const postsQuery = `
  *[_type == "post"]
  | order(publishedAt desc)
  [$offset...$offset + $limit] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    body,
    mainImage,

    author->{
      ${authorFields}
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;

const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    metaTitle,
    metaDescription,
    body,
    mainImage,

    author->{
      ${authorFields}
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;

const postsByCategoryQuery = `
  *[
    _type == "post" &&
    $categoryId in categories[]._ref
  ]
  | order(publishedAt desc)
  [$offset...$offset + $limit] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    body,
    mainImage,

    author->{
      ${authorFields}
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;

const relatedPostsByCategoryQuery = `
  *[
    _type == "post" &&
    _id != $postId &&
    $categoryId in categories[]._ref
  ] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    short_description,
    body,
    mainImage,

    author->{
      ${authorFields}
    },

    categories[]->{
      _id,
      title,
      description
    }
  }
`;

const allPostSlugsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt,
    _updatedAt
  }
`;

export function mapSanityPostToBlog(post: SanityPost): Blog {
  const categoryTitle = post.categories?.[0]?.title || "General";

  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    short_description: post.short_description ?? "",
    image: post.mainImage
      ? urlFor(post.mainImage).width(800).height(480).url()
      : PLACEHOLDER_IMAGE,
    imageAlt: post.mainImage?.alt || post.title,
    category: categoryTitle,
    publishedAt: post.publishedAt || new Date().toISOString(),
  };
}

export async function getBlogCategories(): Promise<BlogCategoryItem[]> {
  try {
    const [sanityCategories, totalCount, uncategorizedCount] = await Promise.all([
      fetchFromSanity<
        { _id: string; title: string; description?: string; count: number }[]
      >(`
        *[_type == "category"] | order(title asc) {
          _id,
          title,
          description,
          "count": count(*[_type == "post" && references(^._id)])
        }
      `),
      fetchFromSanity<number>(`count(*[_type == "post"])`),
      fetchFromSanity<number>(
        `count(*[_type == "post" && (!defined(categories) || count(categories) == 0)])`
      ),
    ]);

    const result: BlogCategoryItem[] = [
      {
        title: "All",
        count: totalCount || 0,
        description: "All guides, shipping insights, and office solutions articles.",
      },
    ];

    (sanityCategories || []).forEach((cat) => {
      if (cat.title) {
        result.push({
          title: cat.title,
          count: cat.count || 0,
          description: cat.description || undefined,
        });
      }
    });

    if (uncategorizedCount > 0) {
      result.push({
        title: "General",
        count: uncategorizedCount,
        description: "General shipping and office solutions articles.",
      });
    }

    return result;
  } catch (error) {
    console.error("Error fetching categories from Sanity:", error);
    return [{ title: "All", count: 0 }];
  }
}

type PostsQueryOptions = {
  limit?: number;
  offset?: number;
  category?: string;
};

export async function getPosts({
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
  category,
}: PostsQueryOptions = {}): Promise<Blog[]> {
  try {
    let query: string;
    let params: QueryParams = { limit, offset };

    if (!category || category === "All") {
      query = `
        *[_type == "post"]
        | order(publishedAt desc)
        [$offset...$offset + $limit] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          short_description,
          body,
          mainImage,
          author->{
            ${authorFields}
          },
          categories[]->{
            _id,
            title,
            description
          }
        }
      `;
    } else if (category.toLowerCase() === "general") {
      query = `
        *[_type == "post" && (!defined(categories) || count(categories) == 0 || "General" in categories[]->title)]
        | order(publishedAt desc)
        [$offset...$offset + $limit] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          short_description,
          body,
          mainImage,
          author->{
            ${authorFields}
          },
          categories[]->{
            _id,
            title,
            description
          }
        }
      `;
    } else {
      params = { limit, offset, category };
      query = `
        *[_type == "post" && ($category in categories[]->title || $category in categories[]->_id)]
        | order(publishedAt desc)
        [$offset...$offset + $limit] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          short_description,
          body,
          mainImage,
          author->{
            ${authorFields}
          },
          categories[]->{
            _id,
            title,
            description
          }
        }
      `;
    }

    const posts = await fetchFromSanity<SanityPost[]>(query, params);
    if (posts && posts.length > 0) {
      return posts.map(mapSanityPostToBlog);
    }
    return [];
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    return [];
  }
}

export async function getTotalPostsCount(categoryName?: string): Promise<number> {
  try {
    if (!categoryName || categoryName === "All") {
      return await fetchFromSanity<number>(`count(*[_type == "post"])`);
    }

    if (categoryName.toLowerCase() === "general") {
      return await fetchFromSanity<number>(
        `count(*[_type == "post" && (!defined(categories) || count(categories) == 0 || "General" in categories[]->title)])`
      );
    }

    return await fetchFromSanity<number>(
      `count(*[_type == "post" && ($category in categories[]->title || $category in categories[]->_id)])`,
      { category: categoryName }
    );
  } catch (error) {
    console.error("Error fetching total posts count from Sanity:", error);
    return 0;
  }
}

export async function getAllPostSlugs(): Promise<
  Array<{ slug: string; publishedAt?: string; _updatedAt?: string }>
> {
  try {
    const slugs = await fetchFromSanity<
      Array<{ slug: string; publishedAt?: string; _updatedAt?: string }>
    >(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        "slug": slug.current,
        publishedAt,
        _updatedAt
      }`
    );
    return slugs || [];
  } catch (error) {
    console.error("Error fetching all post slugs from Sanity:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  try {
    const post = await fetchFromSanity<SanityPost | null>(postBySlugQuery, { slug });
    return post || null;
  } catch (error) {
    console.error("Error fetching post by slug from Sanity:", error);
    return null;
  }
}

export async function getPostsByCategory({
  categoryId,
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PostsQueryOptions & { categoryId: string }): Promise<Blog[]> {
  return getPosts({ category: categoryId, limit, offset });
}

export async function getRelatedPosts(
  postId: string,
  categoryId: string,
  limit: number = 3
): Promise<Blog[]> {
  return getRelatedPostsByCategory(categoryId, postId, limit);
}

export async function getRelatedPostsByCategory(
  categoryNameOrId: string,
  postId: string,
  limit: number = 3
): Promise<Blog[]> {
  try {
    let posts = await fetchFromSanity<SanityPost[]>(
      `*[
        _type == "post" &&
        _id != $postId &&
        ($category in categories[]->title || $category in categories[]->_id)
      ] | order(publishedAt desc)[0...$limit] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        short_description,
        mainImage,
        author->{
          ${authorFields}
        },
        categories[]->{
          _id,
          title
        }
      }`,
      { category: categoryNameOrId, postId, limit }
    );

    if (!posts || posts.length < limit) {
      const remaining = limit - (posts?.length || 0);
      const existingIds = (posts || []).map((p) => p._id);
      const fallbackPosts = await fetchFromSanity<SanityPost[]>(
        `*[
          _type == "post" &&
          _id != $postId &&
          !(_id in $existingIds)
        ] | order(publishedAt desc)[0...$remaining] {
          _id,
          title,
          "slug": slug.current,
          publishedAt,
          short_description,
          mainImage,
          author->{
            ${authorFields}
          },
          categories[]->{
            _id,
            title
          }
        }`,
        { postId, existingIds, remaining }
      );
      posts = [...(posts || []), ...(fallbackPosts || [])];
    }

    return (posts || []).map(mapSanityPostToBlog);
  } catch (error) {
    console.error("Error fetching related posts from Sanity:", error);
    return [];
  }
}

export async function getPageSeoData(): Promise<PageSeoData | null> {
  return fetchFromSanity(`
    *[_type == "pageSeo"][0]{
      _id,
      homePageSeo {
        metaTitle,
        metaDescription
      },
      blogPageSeo {
        metaTitle,
        metaDescription
      },
      aboutPageSeo {
        metaTitle,
        metaDescription
      },
      contactPageSeo {
        metaTitle,
        metaDescription
      }
    }
  `);
}

export async function getAboutPageData(): Promise<AboutPageData | null> {
  return fetchFromSanity(`
    *[_type == "aboutPage"][0]{
      _id,
      title,
      titleHighlight,
      subtitle,
      featuredImage,
      aboutUsImage,
      aboutFirmTag,
      aboutFirmQuote,
      aboutFirmParagraphs,
      missionText,
      missionIcon,
      visionText,
      visionIcon,
      ctaButtonText,
      founderTag,
      founderAuthor->{
        ${authorFields}
      },
      coreValuesTag,
      coreValuesTitle,
      coreValuesDescription,
      coreValuesItems[]{
        title,
        description,
        icon
      }
    }
  `);
}

export async function getHomePageData(): Promise<HomePageData | null> {
  return fetchFromSanity(`
    *[_type == "homePage"][0]{
      _id,
      heroSlides[]{
        _key,
        image,
        badge,
        title,
        subtitle,
        ctaLabel,
        ctaUrl
      },
      trackingEyebrow,
      trackingTitle,
      trackingDescription,
      trackingCardTitle,
      trackingCardSubtitle,
      trackingCardBadge,
      trackingCardDescription,
      trackingInputPlaceholder,
      trackingButtonText,
      cutoffsCardTitle,
      cutoffsCardSubtitle,
      cutoffsCardBadge,
      pickupCutoffs[]{
        _key,
        carrierName,
        carrierBadge,
        slots[]{
          label,
          time
        }
      },
      cutoffsFooterText,
      cutoffsFooterUrl,
      welcomeEyebrow,
      welcomeTitle,
      welcomeParagraphs,
      welcomeHighlights[]{
        _key,
        text,
        icon
      },
      welcomeStats[]{
        _key,
        value,
        suffix,
        label
      },
      servicesTitle,
      servicesCtaText,
      servicesCtaUrl,
      featuredServicesList[]->{
        _id,
        title,
        slug,
        shortDescription,
        iconName,
        customIcon,
        category,
        orderRank,
        isFeatured,
        badge,
        customUrl
      },
      processEyebrow,
      processTitle,
      processDescription,
      processSteps[]{
        _key,
        stepNumber,
        title,
        text,
        icon
      },
      metaTitle,
      metaDescription,
      ogImage,
      // Legacy fields
      heroTitle,
      heroHighlightText,
      heroSubtitle,
      heroImage,
      ctaButtonText,
      aboutImage,
      aboutTag,
      aboutTitle,
      aboutDescription,
      aboutCtaButtonText,
      practiceAreaTag,
      practiceAreaTitle,
      practiceAreaDescription,
      practiceAreas[]{
        icon,
        label,
        description
      },
      whyChooseUsImage,
      whyChooseUsTag,
      whyChooseUsTitle,
      whyChooseUsDescription,
      whyChooseUsItems[]{
        _id,
        title,
        subtitle
      },
      trackRecordTag,
      trackRecordTitle,
      trackRecordDescription,
      trackRecords[]{
        label,
        value
      },
      testimonialTag,
      testimonialTitle,
      testimonialDescription,
      testimonials[]->{
        _id,
        star,
        description,
        name
      },
      faqTag,
      faqTitle,
      faqDescription,
      faqCtaButtonText,
      faqs[]{
        question,
        answer
      }
    }
  `);
}

export async function getServices(): Promise<any[]> {
  return fetchFromSanity(`
    *[_type in ["itService", "shippingMailingService", "packingService", "printingDocumentService", "businessPersonalService", "service"] && (isFeatured == true || !defined(isFeatured))] | order(orderRank asc, _createdAt asc) {
      _id,
      title,
      slug,
      serviceType,
      shortDescription,
      iconName,
      customIcon,
      category,
      orderRank,
      isFeatured,
      badge,
      customUrl
    }
  `);
}

function mapSanityToDigitalMarketingService(
  doc: SanityService,
  baseFallback?: DigitalMarketingServiceData
): DigitalMarketingServiceData {
  const cleanSlug = (doc.slug?.current || baseFallback?.slug || "").replace(/-usa$/, "");

  const resolveIconUrl = (source?: any): string | undefined => {
    if (!source) return undefined;
    if (typeof source === "string") return source || undefined;
    if (!source.asset) return undefined;
    try {
      return urlFor(source).url() || undefined;
    } catch {
      return undefined;
    }
  };

  const heroImgUrl =
    resolveIconUrl(doc.heroImage) ||
    baseFallback?.hero.heroImage ||
    "/images/social-media-hero.jpg";

  const overviewImgUrl =
    resolveIconUrl(doc.overviewImage) || baseFallback?.overview.image;

  return {
    slug: cleanSlug,
    title: doc.title || baseFallback?.title || "Digital Marketing Services",
    badge: doc.badge || baseFallback?.badge,
    shortDescription: doc.shortDescription || baseFallback?.shortDescription || "",
    iconUrl: resolveIconUrl(doc.customIcon),
    showHero: doc.showHero !== false,
    showOverview: doc.showOverview !== false,
    showSolutions: doc.showSolutions !== false,
    showPlatforms: doc.showPlatforms !== false,
    showIndustries: doc.showIndustries !== false,
    showLocalMarketing: doc.showLocalMarketing !== false,
    showProcess: doc.showProcess !== false,
    showWhyChooseUs: doc.showWhyChooseUs !== false,
    showTestimonials: doc.showTestimonials !== false,
    showFaqs: doc.showFaqs !== false,
    showFinalCta: doc.showFinalCta !== false,
    hero: {
      eyebrow: doc.heroEyebrow || baseFallback?.hero.eyebrow || doc.title,
      title: (doc.heroImage as any)?.alt || doc.title || baseFallback?.hero.title || "",
      tagline: doc.heroTagline || baseFallback?.hero.tagline || "",
      headlineHighlight: doc.heroHeadlineHighlight || baseFallback?.hero.headlineHighlight || "",
      description: doc.heroDescription || doc.shortDescription || baseFallback?.hero.description || "",
      ctaText: doc.heroCtaText || baseFallback?.hero.ctaText || "Get a Free Consultation",
      ctaHref: doc.heroCtaHref || baseFallback?.hero.ctaHref || `/contact-us?service=${cleanSlug}-usa`,
      secondaryCtaText: doc.heroSecondaryCtaText || baseFallback?.hero.secondaryCtaText || "Explore Solutions",
      secondaryCtaHref: doc.heroSecondaryCtaHref || baseFallback?.hero.secondaryCtaHref || "#solutions",
      heroImage: heroImgUrl,
      stats: (doc.heroStats && doc.heroStats.length > 0)
        ? doc.heroStats
        : (baseFallback?.hero.stats || []),
    },
    overview: {
      eyebrow: doc.overviewEyebrow || baseFallback?.overview.eyebrow || "Service Overview",
      heading: doc.overviewHeading || baseFallback?.overview.heading || "Strategic Brand Growth",
      image: overviewImgUrl || baseFallback?.overview.image,
      imageAlt: (doc.overviewImage as any)?.alt || doc.overviewHeading || baseFallback?.overview.imageAlt,
      paragraphs: doc.overviewParagraph
        ? doc.overviewParagraph
            .split(/\n+/)
            .map((p) => p.trim())
            .filter(Boolean)
        : (doc.overviewParagraphs && doc.overviewParagraphs.length > 0)
          ? doc.overviewParagraphs
          : (baseFallback?.overview.paragraphs || []),
      pillarsTitle: doc.pillarsTitle || baseFallback?.overview.pillarsTitle,
      pillars: (doc.pillars && doc.pillars.length > 0)
        ? doc.pillars.map((p: any, idx: number) => ({
            ...p,
            icon: p.icon || baseFallback?.overview.pillars?.[idx]?.icon,
            iconUrl: resolveIconUrl(p.iconImage),
          }))
        : (baseFallback?.overview.pillars || []),
    },
    solutions: {
      eyebrow: doc.solutionsEyebrow || baseFallback?.solutions.eyebrow || "Our Solutions",
      heading: doc.solutionsHeading || baseFallback?.solutions.heading || "Engineered for Results",
      description: doc.solutionsDescription || baseFallback?.solutions.description,
      ctaText: doc.solutionsCtaText || baseFallback?.solutions.ctaText || "REQUEST A CUSTOM PROPOSAL",
      ctaHref: doc.solutionsCtaHref || baseFallback?.solutions.ctaHref || `/contact-us?service=${cleanSlug}-usa`,
      items: (doc.solutionItems && doc.solutionItems.length > 0)
        ? doc.solutionItems.map((s: any, idx: number) => {
            const matchedFallback =
              baseFallback?.solutions.items?.find(
                (fb) =>
                  (s.id && fb.id === s.id) ||
                  (s.title && fb.title.toLowerCase() === s.title.toLowerCase())
              ) || baseFallback?.solutions.items?.[idx];
            return {
              id: s.id || matchedFallback?.id || `solution-${idx}`,
              title: s.title,
              description: s.description,
              icon: s.icon || matchedFallback?.icon,
              iconUrl: resolveIconUrl(s.iconImage),
              highlights: s.highlights || matchedFallback?.highlights || [],
            };
          })
        : (baseFallback?.solutions.items || []),
    },
    platforms: (doc.platformsList && doc.platformsList.length > 0)
      ? {
          eyebrow: doc.platformsEyebrow || baseFallback?.platforms?.eyebrow || "Social Media Platforms We Manage",
          heading: doc.platformsHeading || baseFallback?.platforms?.heading || "Choose the platforms for your audience",
          description: doc.platformsDescription || baseFallback?.platforms?.description,
          items: doc.platformsList.map((pl: any, idx: number) => {
            const matchedFallback =
              baseFallback?.platforms?.items?.find(
                (fb) => pl.name && fb.name.toLowerCase() === pl.name.toLowerCase()
              ) || baseFallback?.platforms?.items?.[idx];
            return {
              name: pl.name,
              description: pl.description,
              platform:
                pl.platform ||
                matchedFallback?.platform ||
                pl.name.toLowerCase().replace(/\s+/g, "-"),
              iconUrl: resolveIconUrl(pl.iconImage),
            };
          }),
        }
      : baseFallback?.platforms,
    process: {
      eyebrow: doc.processEyebrow || baseFallback?.process?.eyebrow || "Our Process",
      heading: doc.processHeading || baseFallback?.process?.heading || "How We Drive Results",
      subtitle: doc.processSubtitle || baseFallback?.process?.subtitle,
      steps: (doc.processSteps && doc.processSteps.length > 0)
        ? doc.processSteps.map((pr: any) => ({
            step: pr.step,
            title: pr.title,
            description: pr.description,
            iconUrl: resolveIconUrl(pr.iconImage),
          }))
        : (baseFallback?.process?.steps || []),
    },
    industries: {
      eyebrow: doc.industriesEyebrow || baseFallback?.industries?.eyebrow || "Industries We Serve",
      heading: doc.industriesHeading || baseFallback?.industries?.heading || "Tailored Industry Expertise",
      description: doc.industriesDescription || baseFallback?.industries?.description || "",
      items: (doc.industryItems && doc.industryItems.length > 0)
        ? doc.industryItems.map((ind: any, idx: number) => {
            const matchedFallback =
              baseFallback?.industries?.items?.find(
                (fb) => ind.title && fb.title.toLowerCase() === ind.title.toLowerCase()
              ) || baseFallback?.industries?.items?.[idx];
            return {
              title: ind.title,
              description: ind.description || matchedFallback?.description || "",
              icon: ind.icon || matchedFallback?.icon || "",
              iconUrl: resolveIconUrl(ind.iconImage),
            };
          })
        : (baseFallback?.industries?.items || []),
    },
    localMarketing: (doc.localMarketingPoints && doc.localMarketingPoints.length > 0)
      ? {
          eyebrow: doc.localMarketingEyebrow || baseFallback?.localMarketing?.eyebrow,
          heading: doc.localMarketingHeading || baseFallback?.localMarketing?.heading || "",
          intro: doc.localMarketingIntro || baseFallback?.localMarketing?.intro || "",
          ctaText: doc.localMarketingCtaText || baseFallback?.localMarketing?.ctaText,
          ctaHref: doc.localMarketingCtaHref || baseFallback?.localMarketing?.ctaHref,
          approachTitle: doc.localMarketingApproachTitle || baseFallback?.localMarketing?.approachTitle || "Our Approach",
          points: doc.localMarketingPoints.map((lp: any, idx: number) => {
            const matchedFallback =
              baseFallback?.localMarketing?.points?.find(
                (fb) => lp.title && fb.title.toLowerCase() === lp.title.toLowerCase()
              ) || baseFallback?.localMarketing?.points?.[idx];
            return {
              title: lp.title,
              description: lp.description,
              icon: lp.icon || matchedFallback?.icon,
              iconUrl: resolveIconUrl(lp.iconImage),
            };
          }),
        }
      : baseFallback?.localMarketing,
    whyChooseUs: {
      eyebrow: doc.whyChooseEyebrow || baseFallback?.whyChooseUs?.eyebrow || "Why Choose Us",
      heading: doc.whyChooseHeading || baseFallback?.whyChooseUs?.heading || "The Trusted Choice",
      subtitle:
        doc.whyChooseDescription ||
        doc.whyChooseSubtitle ||
        baseFallback?.whyChooseUs?.subtitle,
      ctaText: doc.whyChooseCtaText || baseFallback?.whyChooseUs?.ctaText,
      ctaHref: doc.whyChooseCtaHref || baseFallback?.whyChooseUs?.ctaHref,
      points: (doc.whyChoosePoints && doc.whyChoosePoints.length > 0)
        ? doc.whyChoosePoints.map((wc: any) => ({
            title: wc.title,
            description: wc.description,
            iconUrl: resolveIconUrl(wc.iconImage),
          }))
        : (baseFallback?.whyChooseUs?.points || []),
    },
    testimonials: {
      eyebrow: doc.testimonialsEyebrow || baseFallback?.testimonials?.eyebrow || "Client Testimonials",
      heading: doc.testimonialsHeading || baseFallback?.testimonials?.heading || "What Our Clients Say",
      description: doc.testimonialsDescription || baseFallback?.testimonials?.description,
      items: (doc.testimonialsList && doc.testimonialsList.length > 0)
        ? doc.testimonialsList.map((t: any) => ({
            quote: t.quote,
            clientName: t.clientName,
            role: t.role,
            company: t.company,
            rating: t.rating || 5,
            approved: true,
            avatarUrl: resolveIconUrl(t.avatar),
          }))
        : (baseFallback?.testimonials?.items || []),
    },
    faqs: {
      eyebrow: doc.faqsEyebrow || baseFallback?.faqs?.eyebrow || "FAQs",
      heading: doc.faqsHeading || baseFallback?.faqs?.heading || "Frequently Asked Questions",
      description: doc.faqsDescription || baseFallback?.faqs?.description,
      items: (doc.faqsList && doc.faqsList.length > 0)
        ? doc.faqsList
        : (baseFallback?.faqs?.items || []),
    },
    finalCta: {
      eyebrow: doc.finalCtaEyebrow || baseFallback?.finalCta?.eyebrow || "Strategic Consultation",
      heading: doc.finalCtaHeading || baseFallback?.finalCta?.heading || "Ready to Grow?",
      description: doc.finalCtaDescription || baseFallback?.finalCta?.description || "Get in touch with our specialists today.",
      ctaText: doc.finalCtaPrimaryButtonText || doc.finalCtaButtonText || baseFallback?.finalCta?.ctaText || "Get in Touch",
      ctaHref: doc.finalCtaPrimaryButtonHref || doc.finalCtaButtonHref || baseFallback?.finalCta?.ctaHref || `/contact-us?service=${cleanSlug}-usa`,
      secondaryCtaText: doc.finalCtaSecondaryButtonText || baseFallback?.finalCta?.secondaryCtaText,
      secondaryCtaHref: doc.finalCtaSecondaryButtonHref || baseFallback?.finalCta?.secondaryCtaHref,
      trustPoints: (doc.finalCtaTrustPoints && doc.finalCtaTrustPoints.length > 0)
        ? doc.finalCtaTrustPoints
        : (baseFallback?.finalCta?.trustPoints || []),
    },
  };
}

export async function getDigitalMarketingServices(): Promise<SanityService[]> {
  try {
    return await fetchFromSanity(`
      *[_type in ["itService", "service"] && (_type == "itService" || serviceType == "digital-marketing" || serviceType == "digital_marketing_service")] | order(orderRank asc, _createdAt asc) {
        _id,
        _type,
        title,
        slug,
        serviceType,
        shortDescription,
        iconName,
        customIcon,
        category,
        orderRank,
        isFeatured,
        badge,
        customUrl,
        showHero,
        showOverview,
        showSolutions,
        showPlatforms,
        showIndustries,
        showLocalMarketing,
        showProcess,
        showWhyChooseUs,
        showTestimonials,
        showFaqs,
        showFinalCta,
        heroEyebrow,
        heroTagline,
        heroHeadlineHighlight,
        heroDescription,
        heroImage,
        heroCtaText,
        heroCtaHref,
        heroSecondaryCtaText,
        heroSecondaryCtaHref,
        heroStats,
        overviewEyebrow,
        overviewHeading,
        overviewParagraph,
        overviewParagraphs,
        overviewImage,
        pillarsTitle,
        pillars[]{
          title,
          description,
          icon,
          iconImage
        },
        solutionsEyebrow,
        solutionsHeading,
        solutionsDescription,
        solutionsCtaText,
        solutionsCtaHref,
        solutionItems[]{
          id,
          title,
          description,
          icon,
          iconImage,
          highlights
        },
        platformsEyebrow,
        platformsHeading,
        platformsDescription,
        platformsList[]{
          name,
          description,
          platform,
          iconImage
        },
        localMarketingEyebrow,
        localMarketingHeading,
        localMarketingIntro,
        localMarketingCtaText,
        localMarketingCtaHref,
        localMarketingApproachTitle,
        localMarketingPoints[]{
          title,
          description,
          icon,
          iconImage
        },
        processEyebrow,
        processHeading,
        processSubtitle,
        processSteps[]{
          step,
          title,
          description,
          iconImage
        },
        industriesEyebrow,
        industriesHeading,
        industriesDescription,
        industryItems[]{
          title,
          description,
          icon,
          iconImage
        },
        whyChooseEyebrow,
        whyChooseHeading,
        whyChooseSubtitle,
        whyChooseDescription,
        whyChooseCtaText,
        whyChooseCtaHref,
        whyChoosePoints[]{
          title,
          description,
          iconImage
        },
        "testimonialsList": *[_type == "testimonial" && (serviceCategory == "itService" || !defined(serviceCategory) || isFeatured == true)] | order(_createdAt desc){
          quote,
          clientName,
          role,
          company,
          rating,
          avatar
        },
        faqsEyebrow,
        faqsHeading,
        faqsDescription,
        faqsList,
        finalCtaEyebrow,
        finalCtaHeading,
        finalCtaDescription,
        finalCtaPrimaryButtonText,
        finalCtaPrimaryButtonHref,
        finalCtaSecondaryButtonText,
        finalCtaSecondaryButtonHref,
        finalCtaButtonText,
        finalCtaButtonHref,
        finalCtaTrustPoints
      }
    `);
  } catch (error) {
    console.error("Error fetching digital marketing services from Sanity:", error);
    return [];
  }
}

export interface ItServiceMenuItem {
  _id?: string;
  title: string;
  slug: string;
  cleanSlug: string;
  href: string;
  shortDescription?: string;
  badge?: string;
  iconUrl?: string;
  iconName?: string;
  orderRank?: number;
  isFeatured?: boolean;
}

export async function getDigitalMarketingServiceBySlug(
  slug: string
): Promise<DigitalMarketingServiceData | null> {
  const cleanSlug = slug.toLowerCase().trim().replace(/-usa$/, "");

  try {
    const sanityDoc = await fetchFromSanity<SanityService | null>(
      `*[_type in ["itService", "service"] && (_type == "itService" || serviceType == "digital-marketing" || serviceType == "digital_marketing_service") && (slug.current == $cleanSlug || slug.current == $slug || slug.current == $withUsa)] | order(select(_type == "itService" => 0, 1) asc, _updatedAt desc)[0]{
        _id,
        _type,
        title,
        slug,
        serviceType,
        shortDescription,
        iconName,
        customIcon,
        category,
        orderRank,
        isFeatured,
        badge,
        customUrl,
        showHero,
        showOverview,
        showSolutions,
        showPlatforms,
        showIndustries,
        showLocalMarketing,
        showProcess,
        showWhyChooseUs,
        showTestimonials,
        showFaqs,
        showFinalCta,
        heroEyebrow,
        heroTagline,
        heroHeadlineHighlight,
        heroDescription,
        heroImage,
        heroCtaText,
        heroCtaHref,
        heroSecondaryCtaText,
        heroSecondaryCtaHref,
        heroStats,
        overviewEyebrow,
        overviewHeading,
        overviewParagraph,
        overviewParagraphs,
        overviewImage,
        pillarsTitle,
        pillars[]{
          title,
          description,
          icon,
          iconImage
        },
        solutionsEyebrow,
        solutionsHeading,
        solutionsDescription,
        solutionsCtaText,
        solutionsCtaHref,
        solutionItems[]{
          id,
          title,
          description,
          icon,
          iconImage,
          highlights
        },
        platformsEyebrow,
        platformsHeading,
        platformsDescription,
        platformsList[]{
          name,
          description,
          platform,
          iconImage
        },
        localMarketingEyebrow,
        localMarketingHeading,
        localMarketingIntro,
        localMarketingCtaText,
        localMarketingCtaHref,
        localMarketingApproachTitle,
        localMarketingPoints[]{
          title,
          description,
          icon,
          iconImage
        },
        processEyebrow,
        processHeading,
        processSubtitle,
        processSteps[]{
          step,
          title,
          description,
          iconImage
        },
        industriesEyebrow,
        industriesHeading,
        industriesDescription,
        industryItems[]{
          title,
          description,
          icon,
          iconImage
        },
        whyChooseEyebrow,
        whyChooseHeading,
        whyChooseSubtitle,
        whyChooseDescription,
        whyChooseCtaText,
        whyChooseCtaHref,
        whyChoosePoints[]{
          title,
          description,
          iconImage
        },
        "testimonialsList": *[_type == "testimonial" && (serviceCategory == "itService" || !defined(serviceCategory) || isFeatured == true)] | order(_createdAt desc){
          quote,
          clientName,
          role,
          company,
          rating,
          avatar
        },
        faqsEyebrow,
        faqsHeading,
        faqsDescription,
        faqsList,
        finalCtaEyebrow,
        finalCtaHeading,
        finalCtaDescription,
        finalCtaPrimaryButtonText,
        finalCtaPrimaryButtonHref,
        finalCtaSecondaryButtonText,
        finalCtaSecondaryButtonHref,
        finalCtaButtonText,
        finalCtaButtonHref,
        finalCtaTrustPoints
      }`,
      {
        cleanSlug,
        slug,
        withUsa: `${cleanSlug}-usa`,
      }
    );

    if (sanityDoc) {
      return mapSanityToDigitalMarketingService(sanityDoc);
    }
  } catch (error) {
    console.error(`Error fetching digital marketing service "${slug}" from Sanity:`, error);
  }

  return null;
}

export async function getItServiceBySlug(
  slug: string
): Promise<DigitalMarketingServiceData | null> {
  return getDigitalMarketingServiceBySlug(slug);
}

export async function getRawItServiceBySlug(slug: string): Promise<any | null> {
  const cleanSlug = slug.toLowerCase().trim().replace(/-usa$/, "");
  try {
    return await fetchFromSanity(
      `*[_type == "itService" && (slug.current == $cleanSlug || slug.current == $slug || slug.current == $withUsa)][0]`,
      {
        cleanSlug,
        slug,
        withUsa: `${cleanSlug}-usa`,
      }
    );
  } catch (error) {
    console.error(`Error fetching raw IT service for "${slug}" from Sanity:`, error);
    return null;
  }
}

export async function getItServices(): Promise<ItServiceMenuItem[]> {
  try {
    const rawServices = await fetchFromSanity<any[]>(`
      *[_type == "itService"] | order(orderRank asc, _createdAt asc) {
        _id,
        _type,
        title,
        slug,
        badge,
        shortDescription,
        orderRank,
        isFeatured,
        customIcon,
        customUrl,
        iconName
      }
    `);

    if (!rawServices || rawServices.length === 0) {
      return [];
    }

    return rawServices.map((doc) => {
      const slugCurrent = doc.slug?.current || "";
      const cleanSlug = slugCurrent.replace(/-usa$/, "");
      const href = doc.customUrl || (cleanSlug ? `/${cleanSlug}-usa` : `/${slugCurrent}`);

      let iconUrl: string | undefined = undefined;
      if (doc.customIcon) {
        if (typeof doc.customIcon === "string") {
          iconUrl = doc.customIcon;
        } else if (doc.customIcon.asset) {
          try {
            iconUrl = urlFor(doc.customIcon).url() || undefined;
          } catch {
            iconUrl = undefined;
          }
        }
      }

      return {
        _id: doc._id,
        title: doc.title || "",
        slug: slugCurrent,
        cleanSlug,
        href,
        shortDescription: doc.shortDescription || "",
        badge: doc.badge || undefined,
        iconUrl,
        iconName: doc.iconName || undefined,
        orderRank: doc.orderRank,
        isFeatured: doc.isFeatured,
      };
    });
  } catch (error) {
    console.error("Error fetching IT services list from Sanity:", error);
    return [];
  }
}

export async function getAllDigitalMarketingSlugs(): Promise<string[]> {
  try {
    const sanitySlugs = await fetchFromSanity<string[]>(`
      *[_type in ["itService", "service"] && (_type == "itService" || serviceType == "digital-marketing" || serviceType == "digital_marketing_service") && defined(slug.current)].slug.current
    `);
    const cleanedSanity = (sanitySlugs || []).map((s) => s.replace(/-usa$/, ""));
    const set = new Set([...cleanedSanity]);
    return Array.from(set);
  } catch {
    return [];
  }
}

export async function getSiteSettings(): Promise<any | null> {
  return fetchFromSanity(`
    *[_type == "siteSettings"][0]{
      _id,
      siteName,
      siteTagline,
      logo,
      logoInverted,
      phone,
      fax,
      email,
      addressLines,
      googleMapsUrl,
      googleMapsEmbedUrl,
      storeHours,
      announcementText,
      announcementButtonText,
      announcementButtonUrl,
      footerDescription,
      copyrightText
    }
  `);
}

export async function getFooterData(): Promise<FooterData> {
  const [homeData, metadata] = await Promise.all([
    fetchFromSanity<Pick<FooterData, "address" | "mobileNumber" | "email">>(`
      *[_type == "homePage"][0]{
        address,
        mobileNumber,
        email
      }
    `),
    getMetadata(),
  ]);

  return {
    ...homeData,
    footerSummary: metadata?.footerSummary,
  };
}

export async function getMetadata(): Promise<SiteMetadata | null> {
  return fetchFromSanity(`
    *[_type == "metadata"][0]{
      _id,
      blogHeroTitle,
      blogHeroDescription,
      footerSummary
    }
  `);
}

export async function getContactCtaData(): Promise<ContactCtaData | null> {
  return fetchFromSanity(`
    *[_type == "contactCta"][0]{
      _id,
      tag,
      title,
      description
    }
  `);
}

export async function getSettings(): Promise<SettingsData | null> {
  return fetchFromSanity(`
    *[_type == "settings"][0]{
      logo,
      logoInverted
    }
  `);
}

const firstAuthorQuery = `
  *[_type == "author"] | order(_createdAt asc)[0] {
    ${authorFields}
  }
`;

export async function getFirstAuthor(): Promise<PostAuthor | null> {
  return fetchFromSanity(firstAuthorQuery);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  try {
    return await fetchFromSanity(`
      *[_type == "testimonial"] | order(_createdAt desc){
        _id,
        clientName,
        role,
        company,
        quote,
        rating,
        avatar,
        serviceCategory,
        isFeatured
      }
    `);
  } catch (error) {
    console.error("Error fetching testimonials from Sanity:", error);
    return [];
  }
}