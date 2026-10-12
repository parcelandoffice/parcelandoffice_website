import { formatDate, getImageUrl } from "@/lib/helpers";
import { extractTocHeadings } from "@/lib/portable-text";
import { Blog, SanityPost } from "@/lib/types";
import BlogArticleCta from "@components/blog/BlogArticleCta";
import BlogPortableText from "@components/blog/BlogPortableText";
import RelatedBlogs from "@components/blog/RelatedBlogs";
import TableOfContents from "@components/blog/TableOfContents";
import { SanityImageSource } from "@sanity/image-url";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
    blogDetail: SanityPost;
    relatedBlogs?: Blog[];
}

export default function BlogDetail({
    blogDetail,
    relatedBlogs = [],
}: BlogDetailProps) {
    const tocHeadings = extractTocHeadings(blogDetail.body);

    return (
        <article className="bg-background">
            <section className="relative flex min-h-[62vh] items-start overflow-hidden">
                <Image
                    src={blogDetail?.mainImage ? getImageUrl(blogDetail.mainImage as SanityImageSource) : "/placeholder.jpg"}
                    alt={blogDetail.mainImage?.alt || blogDetail.title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-primary/75" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14">
                    <div className="max-w-3xl">
                        <nav
                            aria-label="Breadcrumb"
                            className="mb-6 flex items-center gap-2 text-sm text-white/70"
                        >
                            <Link
                                href="/blogDetail"
                                className="text-md transition-colors hover:text-accent"
                            >
                                Blog
                            </Link>

                            <span>
                                <ChevronRightIcon
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="line-clamp-1 text-md text-white">
                                {blogDetail.title}
                            </span>
                        </nav>

                        <div className="mt-15">
                            {/* <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-accent" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                    {blogDetail.categories?.[0]?.title}
                                </span>
                            </div> */}

                            <h1 className="text-2xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-4xl">
                                {blogDetail.title}
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                                {blogDetail.short_description}
                            </p>

                            <p className="mt-6 text-sm font-medium text-white/70">
                                {formatDate(blogDetail.publishedAt)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-10">
                <div className="container">                    
                    <TableOfContents headings={tocHeadings}>
                        <BlogPortableText content={blogDetail.body} />
                    </TableOfContents>
                </div>
            </section>
            <section className="py-10">
                <div className="container max-w-5xl">
                    <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-8 text-center md:flex-row md:text-left">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full outline outline-2 outline-offset-[3px] outline-accent">
                            <Image
                                src={blogDetail.author?.image ? getImageUrl(blogDetail.author.image as SanityImageSource) : "/placeholder.jpg"}
                                alt={blogDetail.author?.name ?? ""}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </div>

                        <div>
                            <div className="text-2xl font-bold text-primary">
                                {blogDetail.author?.name ?? ""}
                            </div>

                            <p className="mt-2 whitespace-pre-line text-muted">
                                {blogDetail.author?.bio ?? ""}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedBlogs blogs={relatedBlogs} />
            <BlogArticleCta />

        </article>
    );
}
