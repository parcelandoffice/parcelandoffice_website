import BlogDetail from "@/components/blog/BlogDetail";
import { getPostBySlug, getRelatedPostsByCategory } from "@/lib/apis";
import { Blog, SanityPost } from "@/lib/types";
import type { Metadata } from "next";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Blog | RP Law Firm",
        };
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.short_description,
        alternates: {
            canonical: `${process.env.SITE_URL}/blog/${slug}`,
        },
    };
}

const BlogDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const blogDetail = await getPostBySlug(slug);
    const primaryCategoryId = blogDetail?.categories?.[0]?._id;
    const relatedBlogs: Blog[] =
        blogDetail && primaryCategoryId
            ? await getRelatedPostsByCategory(primaryCategoryId, blogDetail._id)
            : [];

    return <BlogDetail blogDetail={blogDetail as SanityPost} relatedBlogs={relatedBlogs} />;
}

export default BlogDetailPage;
