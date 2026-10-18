import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-data";

export function Logo({
  className = "",
  variant = "dark",
  logoSrc = "/images/logo.jpg",
  onNavigate,
}: {
  className?: string;
  /** "dark" = text for light backgrounds, "light" = text for dark backgrounds */
  variant?: "dark" | "light";
  logoSrc?: string;
  onNavigate?: () => void;
}) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — home`}
      className={`group inline-flex shrink min-w-0 items-center gap-2 sm:gap-3 ${className}`}
    >
      <span
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-xs transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-12 sm:w-12 bg-white ${
          isLight ? "border border-white/20" : "border border-border"
        }`}
      >
        <Image
          src={logoSrc}
          alt={`${SITE_NAME} logo`}
          width={48}
          height={48}
          className="h-full w-full object-contain p-1"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight min-w-0">
        <span
          className={`font-display text-sm font-extrabold tracking-wide uppercase sm:text-base lg:text-lg truncate ${
            isLight ? "text-on-dark" : "text-primary"
          }`}
        >
          Parcel &amp; Office
          <span className="text-accent"> Solutions</span>
        </span>
        <span className="hidden text-[11px] font-semibold tracking-wider text-muted uppercase md:block">
          {SITE_TAGLINE}
        </span>
      </span>
    </Link>
  );
}
