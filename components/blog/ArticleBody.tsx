"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Check, Copy } from "lucide-react";
import type { SanityPost } from "@/lib/types";
import type { StaticBlogItem } from "@/lib/static-blogs";
import BlogPortableText from "@/components/blog/BlogPortableText";
import { BUSINESS } from "@/lib/site-data";

interface ArticleBodyProps {
  blogDetail: SanityPost;
  staticItem?: StaticBlogItem;
}

export default function ArticleBody({
  blogDetail,
  staticItem,
}: ArticleBodyProps) {
  const [copied, setCopied] = useState(false);

  const paragraphs =
    staticItem?.contentParagraphs && staticItem.contentParagraphs.length > 0
      ? staticItem.contentParagraphs
      : [
          blogDetail?.short_description ||
            "Reliable shipping and smart packaging solutions are fundamental for individuals and thriving modern businesses.",
          "Choosing authorized carrier networks ensures your domestic packages and international air freight are handled with utmost security, speed, and transparent tracking.",
          "At Parcel and Office Solutions in Odenton, MD, our experienced packaging specialists provide multi-carrier rate comparisons, custom box crafting, and comprehensive office solutions.",
        ];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = (platform: "twitter" | "linkedin" | "whatsapp" | "facebook") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogDetail?.title || "Parcel and Office Solutions");

    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const hasSanityBody = Boolean(
    blogDetail?.body && blogDetail.body.length > 0
  );

  return (
    <div className="article-body space-y-12 text-foreground/90">
      {hasSanityBody ? (
        <section>
          <BlogPortableText content={blogDetail.body} />
        </section>
      ) : (
        <>
          {/* ================= SECTION 1: OVERVIEW & KEY TAKEAWAYS ================= */}
          <section id="overview-highlights" className="scroll-mt-28 space-y-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
              <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
              <span>1. Overview &amp; Key Takeaways</span>
            </h2>

            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
              {paragraphs[0]}
            </p>
          </section>

          {paragraphs[1] && (
            <section id="guidelines-standards" className="scroll-mt-28 space-y-4 pt-2">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2.5">
                <span className="inline-block h-6 w-1 rounded-full bg-accent shrink-0" />
                <span>2. Details &amp; Guidance</span>
              </h2>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                {paragraphs[1]}
              </p>
            </section>
          )}
        </>
      )}

      {/* Share Article Bar (Tags removed) */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/80 bg-surface p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
          <Share2 className="h-4 w-4 text-accent" />
          <span>Share This Article:</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleShare("twitter")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
            title="Share on X / Twitter"
          >
            <span className="text-xs font-bold">𝕏</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("linkedin")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
            title="Share on LinkedIn"
          >
            <span className="text-xs font-bold">in</span>
          </button>
          <button
            type="button"
            onClick={() => handleShare("whatsapp")}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:border-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp cursor-pointer"
            title="Share on WhatsApp"
          >
            <span className="text-xs font-bold">WA</span>
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3.5 py-2 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer"
            title="Copy Link"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-success" />
                <span className="text-success">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
