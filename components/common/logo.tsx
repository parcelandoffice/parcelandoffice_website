import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site-data";
import { urlFor } from "@/lib/sanity-image-builder";
import type { SanityImageSource } from "@sanity/image-url";

export interface LogoProps {
  className?: string;
  imageClassName?: string;
  /** "dark" = for light backgrounds (default), "light" = for dark backgrounds (e.g. footer) */
  variant?: "dark" | "light";
  logoSrc?: string | SanityImageSource | null;
  logoInvertedSrc?: string | SanityImageSource | null;
  logo?: (SanityImageSource & { alt?: string }) | null;
  logoInverted?: (SanityImageSource & { alt?: string }) | null;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onNavigate?: () => void;
}

function resolveLogoUrl(
  source?: string | SanityImageSource | { asset?: { url?: string }; url?: string } | null,
): string | null {
  if (!source) return null;
  if (typeof source === "string") {
    return source.trim() ? source : null;
  }
  if (typeof source === "object") {
    // If the object already has a pre-resolved url or asset.url
    if ("url" in source && typeof source.url === "string" && source.url) {
      return source.url;
    }
    if (
      "asset" in source &&
      source.asset &&
      typeof source.asset === "object" &&
      "url" in source.asset &&
      typeof source.asset.url === "string" &&
      source.asset.url
    ) {
      return source.asset.url;
    }
    try {
      return urlFor(source as SanityImageSource).auto("format").fit("max").url();
    } catch {
      return null;
    }
  }
  return null;
}

export function Logo({
  className = "",
  imageClassName = "",
  variant = "dark",
  logoSrc,
  logoInvertedSrc,
  logo,
  logoInverted,
  alt,
  width = 240,
  height = 56,
  priority = true,
  onNavigate,
}: LogoProps) {
  const isLight = variant === "light";

  // Pick appropriate logo source based on light/dark variant and provided props
  const primarySource = logo ?? logoSrc;
  const invertedSource = logoInverted ?? logoInvertedSrc;

  const chosenSource =
    isLight && invertedSource
      ? invertedSource
      : primarySource || "/images/logo.png";

  const resolvedUrl = resolveLogoUrl(chosenSource) || "/images/logo.png";
  const altText = alt || `${SITE_NAME} logo`;

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — home`}
      className={`group inline-flex shrink-0 items-center justify-start transition-opacity duration-200 hover:opacity-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary rounded-md ${className}`}
    >
      <div
        className={`relative flex items-center justify-start ${
          isLight && !invertedSource
            ? "rounded-lg bg-white/95 px-2 py-1 shadow-2xs"
            : ""
        }`}
      >
        <Image
          src={resolvedUrl}
          alt={altText}
          width={width}
          height={height}
          priority={priority}
          className={`h-9 w-auto max-h-10 sm:h-11 sm:max-h-12 md:h-12 max-w-[190px] sm:max-w-[240px] md:max-w-[280px] object-contain object-left transition-transform duration-200 group-hover:scale-[1.02] ${imageClassName}`}
        />
      </div>
    </Link>
  );
}
