"use client";

import Image from "next/image";
import type { PostAuthor } from "@/lib/types";
import { AUTHOR_PROFILES, DEFAULT_AUTHOR_PROFILE } from "@/lib/static-blogs";
import { getImageUrl } from "@/lib/helpers";
import type { SanityImageSource } from "@sanity/image-url";

interface AuthorInformationProps {
  author?: PostAuthor;
  authorName?: string;
  authorRole?: string;
}

export default function AuthorInformation({
  author,
  authorName,
  authorRole,
}: AuthorInformationProps) {
  const resolvedName = author?.name || authorName || DEFAULT_AUTHOR_PROFILE.name;
  const profile =
    (resolvedName && AUTHOR_PROFILES[resolvedName]) ||
    DEFAULT_AUTHOR_PROFILE;

  const designation = author?.additionalInfo || authorRole || profile.role || "Author";
  const description =
    author?.bio || profile.bio || "Logistics specialist and contributor to Parcel & Office Solutions.";

  let avatarUrl = profile.image;
  if (author?.image) {
    try {
      avatarUrl = getImageUrl(author.image as SanityImageSource);
    } catch {
      avatarUrl = profile.image;
    }
  }

  return (
    <section className="mt-12" aria-label="Author information">
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface p-6 shadow-xs sm:p-7">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
          {/* Author Image */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-surface-muted shadow-xs sm:h-24 sm:w-24">
            <Image
              src={avatarUrl}
              alt={resolvedName}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>

          {/* Author Information: Name, Designation, and Small Description */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {resolvedName}
              </h3>
              <span className="inline-flex items-center self-center rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent sm:self-auto">
                {designation}
              </span>
            </div>

            <p className="mt-2.5 text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
