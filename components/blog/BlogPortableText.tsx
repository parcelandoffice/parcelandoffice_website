import {
    PortableText,
    type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import Link from "next/link";
import { buildHeadingIdMap } from "@/lib/portable-text";

interface BlogPortableTextProps {
    content: PortableTextBlock[];
}

function createComponents(
    headingIdMap: Map<string, string>
): PortableTextComponents {
    const headingClass =
        "scroll-mt-32 font-bold tracking-tight text-primary";

    return {
        block: {
            normal: ({ children }) => (
                <p className="mb-5 leading-8 text-muted">{children}</p>
            ),
            h2: ({ children, value }) => {
                const id = value._key
                    ? headingIdMap.get(value._key)
                    : undefined;

                return (
                    <h2
                        id={id}
                        className={`${headingClass} mb-5 mt-12 text-2xl sm:text-3xl !text-accent`}
                    >
                        {children}
                    </h2>
                );
            },
            h3: ({ children, value }) => {
                const id = value._key
                    ? headingIdMap.get(value._key)
                    : undefined;

                return (
                    <h3
                        id={id}
                        className={`${headingClass} my-4 text-xl sm:text-2xl`}
                    >
                        {children}
                    </h3>
                );
            },
            h4: ({ children }) => (
                <h4 className="mb-3 mt-8 text-lg font-bold text-primary">
                    {children}
                </h4>
            ),
            blockquote: ({ children }) => (
                <blockquote className="my-8 border-l-4 border-accent py-1 pl-6 italic text-primary">
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }) => (
                <ul className="mb-6 list-disc space-y-2 pl-6 text-muted marker:text-accent">
                    {children}
                </ul>
            ),
            number: ({ children }) => (
                <ol className="mb-6 list-decimal space-y-2 pl-6 text-muted marker:font-semibold marker:text-accent">
                    {children}
                </ol>
            ),
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="leading-8">{children}</li>
            ),
            number: ({ children }) => (
                <li className="leading-8">{children}</li>
            ),
        },
        marks: {
            strong: ({ children }) => (
                <strong className="font-semibold text-primary">
                    {children}
                </strong>
            ),
            em: ({ children }) => <em className="italic">{children}</em>,
            link: ({ children, value }) => {
                const href = value?.href ?? "#";
                const isExternal = href.startsWith("http");

                return (
                    <Link
                        href={href}
                        className="font-medium text-accent underline-offset-4 transition-colors hover:text-accent-light hover:underline"
                        {...(isExternal
                            ? {
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                              }
                            : {})}
                    >
                        {children}
                    </Link>
                );
            },
        },
        types: {
            image: ({ value }) => {
                if (!value?.asset?.url) return null;

                return (
                    <figure className="my-10">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                            <Image
                                src={value.asset.url}
                                alt={value.alt ?? ""}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 720px"
                            />
                        </div>
                        {value.caption ? (
                            <figcaption className="mt-3 text-center text-sm text-muted">
                                {value.caption}
                            </figcaption>
                        ) : null}
                    </figure>
                );
            },
        },
    };
}

export default function BlogPortableText({ content }: BlogPortableTextProps) {
    const headingIdMap = buildHeadingIdMap(content);
    const components = createComponents(headingIdMap);

    return (
        <div className="blog-content max-w-none">
            <PortableText value={content} components={components} />
        </div>
    );
}
