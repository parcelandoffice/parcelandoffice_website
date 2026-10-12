import { Package } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-data";

export function Logo({
  className = "",
  variant = "dark",
  onNavigate,
}: {
  className?: string;
  /** "dark" = text for light backgrounds, "light" = text for dark backgrounds */
  variant?: "dark" | "light";
  onNavigate?: () => void;
}) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — home`}
      className={`group inline-flex shrink-0 items-center gap-3 ${className}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-accent shadow-xs border border-primary-light transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 sm:h-12 sm:w-12">
        <Package className="h-6 w-6 text-accent" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-base font-extrabold tracking-wide uppercase sm:text-lg ${
            isLight ? "text-on-dark" : "text-primary"
          }`}
        >
          Parcel &amp; Office
          <span className="text-accent"> Solutions</span>
        </span>
        <span className="hidden text-[11px] font-semibold tracking-wider text-muted uppercase min-[400px]:block">
          {SITE_TAGLINE}
        </span>
      </span>
    </Link>
  );
}
