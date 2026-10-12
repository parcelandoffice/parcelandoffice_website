import { DEFAULT_LIMIT, DEFAULT_OFFSET, PLACEHOLDER_IMAGE } from "./constants";
import type { FilteredResponseQueryOptions, QueryParams } from "@sanity/client";
import { sanityClient } from "./sanity-client";
import { urlFor } from "./sanity-image-builder";
import type {
  AboutPageData,
  Blog,
  ContactCtaData,
  FooterData,
  HomePageData,
  PageSeoData,
  PostAuthor,
  SanityPost,
  SettingsData,
  SiteMetadata,
} from "./types";

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
  return {
    id: post._id,
    title: post.title,
    slug: post.slug,
    short_description: post.short_description ?? "",
    image: post.mainImage
      ? urlFor(post.mainImage).width(800).height(480).url()
      : PLACEHOLDER_IMAGE,
    imageAlt: post.mainImage?.alt,
    category: post.categories?.[0]?.title ?? "Legal",
    publishedAt: post.publishedAt,
  };
}

type PostsQueryOptions = {
  limit?: number;
  offset?: number;
};

export async function getPosts({
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PostsQueryOptions = {}): Promise<Blog[]> {
  const posts: SanityPost[] = await fetchFromSanity(postsQuery, {
    limit,
    offset,
  });

  return posts.map(mapSanityPostToBlog);
}

export async function getTotalPostsCount(categoryId?: string): Promise<number> {
  if (categoryId) {
    return fetchFromSanity<number>(
      `count(*[_type == "post" && $categoryId in categories[]._ref])`,
      { categoryId }
    );
  }
  return fetchFromSanity<number>(`count(*[_type == "post"])`);
}

export async function getAllPostSlugs(): Promise<
  Array<{ slug: string; publishedAt?: string; _updatedAt?: string }>
> {
  return fetchFromSanity(allPostSlugsQuery);
}

export async function getPostBySlug(
  slug: string
): Promise<SanityPost | null> {
  const post: SanityPost | null = await fetchFromSanity(
    postBySlugQuery,
    { slug }
  );

  if (!post) {
    return null;
  }

  return post;
}

export async function getPostsByCategory({
  categoryId,
  limit = DEFAULT_LIMIT,
  offset = DEFAULT_OFFSET,
}: PostsQueryOptions & { categoryId: string }): Promise<Blog[]> {
  const posts: SanityPost[] = await fetchFromSanity(
    postsByCategoryQuery,
    {
      categoryId,
      limit,
      offset,
    }
  );

  return posts.map(mapSanityPostToBlog);
}

const relatedPostsQuery = `
  *[
    _type == "post" &&
    _id != $postId &&
    $categoryId in categories[]._ref
  ]
  | order(publishedAt desc)
  [0...$limit] {
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

export async function getRelatedPosts(
  postId: string,
  categoryId: string,
  limit: number = 2
): Promise<Blog[]> {
  const posts: SanityPost[] = await fetchFromSanity(
    relatedPostsQuery,
    {
      postId,
      categoryId,
      limit,
    }
  );

  return posts.map(mapSanityPostToBlog);
}

export async function getRelatedPostsByCategory(
  categoryId: string,
  postId: string
): Promise<Blog[]> {
  const posts: SanityPost[] = await fetchFromSanity(
    relatedPostsByCategoryQuery,
    { categoryId, postId }
  );

  return posts.map(mapSanityPostToBlog);
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