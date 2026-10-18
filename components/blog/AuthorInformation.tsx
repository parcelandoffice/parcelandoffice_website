"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, CheckCircle2, ShieldCheck, Award, ArrowUpRight, Sparkles } from "lucide-react";
import type { PostAuthor } from "@/lib/types";
import { AUTHOR_PROFILES, DEFAULT_AUTHOR_PROFILE } from "@/lib/static-blogs";

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

  const role = authorRole || profile.role;
  const bio = author?.bio || profile.bio;
  const avatarUrl = profile.image;
  const email = profile.email || "contact@parcelofficesolutions.com";
  const credentials = profile.credentials || DEFAULT_AUTHOR_PROFILE.credentials;

  return (
    <section className="mt-14" aria-label="Author information">
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface via-surface to-surface-muted p-8 shadow-[var(--shadow-card)] sm:p-10">
        {/* Subtle decorative background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        />

        {/* Eyebrow badge */}
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Published By
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Verified Contributor
          </span>
        </div>

        {/* Author Main Info */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
          {/* Avatar with status ring */}
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-surface shadow-md ring-4 ring-accent/20 sm:h-28 sm:w-28">
              <Image
                src={avatarUrl}
                alt={resolvedName}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 96px, 112px"
              />
            </div>
            {/* Verified icon overlay badge */}
            <div
              className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white shadow-md ring-2 ring-surface"
              title="Verified Logistics Specialist"
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {resolvedName}
              </h3>
              <span className="inline-flex items-center self-center rounded-full bg-surface-muted px-3 py-0.5 text-xs font-bold text-accent sm:self-auto">
                {role}
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {bio}
            </p>

            {/* Author Credential Badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              {credentials.map((cred, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface px-3 py-1 text-xs font-medium text-foreground/80 shadow-xs"
                >
                  <Award className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {cred}
                </span>
              ))}
            </div>

            {/* Author Connect CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-border/50 pt-5 md:justify-start">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary-soft hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span>Contact {resolvedName.split(" ")[0]}</span>
              </a>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-primary-light"
              >
                <span>View More Articles</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
