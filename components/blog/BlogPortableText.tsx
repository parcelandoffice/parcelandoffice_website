import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import Link from "next/link";
import { buildHeadingIdMap } from "@/lib/portable-text";
import { getImageUrl } from "@/lib/helpers";
import type { SanityImageSource } from "@sanity/image-url";

interface BlogPortableTextProps {
  content: PortableTextBlock[];
}

function createComponents(
  headingIdMap: Map<string, string>
): PortableTextComponents {
  const headingClass = "scroll-mt-28 font-display font-bold tracking-tight text-foreground";

  return {
    block: {
      normal: ({ children }) => (
        <p className="mb-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
          {children}
        </p>
      ),
      h1: ({ children, value }) => {
        const id = value._key ? headingIdMap.get(value._key) : undefined;
        return (
          <h1
            id={id}
            className={`${headingClass} mb-6 mt-12 text-3xl font-extrabold sm:text-4xl`}
          >
            {children}
          </h1>
        );
      },
      h2: ({ children, value }) => {
        const id = value._key ? headingIdMap.get(value._key) : undefined;
        return (
          <h2
            id={id}
            className={`${headingClass} mb-5 mt-10 flex items-center gap-2.5 text-2xl sm:text-3xl`}
          >
            <span className="inline-block h-6 w-1 shrink-0 rounded-full bg-accent" />
            <span>{children}</span>
          </h2>
        );
      },
      h3: ({ children, value }) => {
        const id = value._key ? headingIdMap.get(value._key) : undefined;
        return (
          <h3
            id={id}
            className={`${headingClass} mb-4 mt-8 text-xl sm:text-2xl`}
          >
            {children}
          </h3>
        );
      },
      h4: ({ children }) => (
        <h4 className="mb-3 mt-6 font-display text-lg font-bold text-foreground">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 mt-5 font-display text-base font-bold text-foreground">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-2 mt-4 font-display text-xs font-bold uppercase tracking-wider text-muted">
          {children}
        </h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="my-8 rounded-2xl border-l-4 border-accent bg-surface-muted/60 p-6 sm:p-7 italic font-medium text-foreground/90 sm:text-lg leading-relaxed shadow-2xs">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="my-6 list-disc space-y-2.5 pl-6 text-foreground/80 marker:text-accent leading-relaxed">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="my-6 list-decimal space-y-2.5 pl-6 text-foreground/80 marker:font-bold marker:text-accent leading-relaxed">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="pl-1 leading-relaxed">{children}</li>
      ),
      number: ({ children }) => (
        <li className="pl-1 leading-relaxed">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }) => (
        <strong className="font-bold text-foreground">{children}</strong>
      ),
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="rounded-md border border-border/80 bg-surface-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-accent sm:text-sm">
          {children}
        </code>
      ),
      underline: ({ children }) => (
        <span className="underline underline-offset-4 decoration-accent/60">
          {children}
        </span>
      ),
      "strike-through": ({ children }) => (
        <del className="line-through text-muted">{children}</del>
      ),
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        const isExternal = href.startsWith("http");

        return (
          <Link
            href={href}
            className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-dark hover:underline"
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
        let src = "";
        if (value?.asset?.url) {
          src = value.asset.url;
        } else if (value?.asset?._ref || value?.asset || value) {
          try {
            src = getImageUrl(value as SanityImageSource);
          } catch {
            src = "";
          }
        }

        if (!src) return null;

        return (
          <figure className="my-8 overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-xs">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
              <Image
                src={src}
                alt={value.alt ?? "Article illustration"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            {(value.caption || value.alt) && (
              <figcaption className="p-3 text-center text-xs text-muted">
                {value.caption || value.alt}
              </figcaption>
            )}
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
