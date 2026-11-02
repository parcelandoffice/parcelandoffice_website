import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site-data";
import type { ResolvedLogo } from "@/lib/logo";

export interface LogoProps {
  /** Logo resolved on the server via `resolveLogo()` (Sanity Site Settings) */
  logo?: ResolvedLogo | null;
  /** Extra classes for the link wrapper */
  className?: string;
  /**
   * Size classes for the logo box. Set a height (width follows the logo's
   * aspect ratio) and optionally a max-width.
   */
  sizeClassName?: string;
  alt?: string;
  priority?: boolean;
  onNavigate?: () => void;
}

const DEFAULT_SIZE = "h-10 sm:h-11 lg:h-12";

export function Logo({
  logo,
  className = "",
  sizeClassName = DEFAULT_SIZE,
  alt,
  priority = true,
  onNavigate,
}: LogoProps) {
  const altText = alt || `${SITE_NAME} logo`;

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — home`}
      className={`group inline-flex shrink-0 items-center justify-start rounded-md transition-opacity duration-200 hover:opacity-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {logo ? (
        // Crop window sized to the visible artwork; the full image is scaled
        // and offset inside it so empty canvas padding is hidden.
        <span
          className={`relative block shrink-0 overflow-hidden transition-transform duration-200 group-hover:scale-[1.02] ${sizeClassName}`}
          style={{ aspectRatio: `${logo.aspectRatio}` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo.src}
            alt={altText}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            loading={priority ? "eager" : "lazy"}
            className="absolute select-none"
            draggable={false}
            style={{
              maxWidth: "none",
              width: `${100 / logo.crop.w}%`,
              height: `${100 / logo.crop.h}%`,
              left: `${(-logo.crop.x / logo.crop.w) * 100}%`,
              top: `${(-logo.crop.y / logo.crop.h) * 100}%`,
            }}
          />
        </span>
      ) : (
        <Image
          src="/images/logo.png"
          alt={altText}
          width={240}
          height={56}
          priority={priority}
          className={`w-auto object-contain object-left ${sizeClassName}`}
        />
      )}
    </Link>
  );
}
