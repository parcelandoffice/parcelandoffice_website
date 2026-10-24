"use client";

import {
  ChevronDown,
  ChevronUp,
  List,
  Share2,
  Copy,
  Check,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { TocHeading } from "@/lib/portable-text";
import { BUSINESS } from "@/lib/site-data";

export const STATIC_TOC_ITEMS: TocHeading[] = [
  { id: "overview-highlights", text: "Overview & Key Takeaways", level: 2 },
  { id: "guidelines-standards", text: "Essential Guidelines & Standards", level: 2 },
  { id: "step-by-step-guide", text: "Step-by-Step Practical Guide", level: 2 },
  { id: "carrier-solutions", text: "Carrier Options & Service Comparison", level: 2 },
  { id: "pro-tips-savings", text: "Pro Tips & Cost Optimization", level: 2 },
  { id: "summary-conclusion", text: "Summary & Actionable Advice", level: 2 },
];

// Matches header height + padding offset
const SCROLL_ANCHOR_OFFSET = 110;
const ACTIVE_THRESHOLD = SCROLL_ANCHOR_OFFSET + 24;

interface TableOfContentsProps {
  headings?: TocHeading[];
  children: React.ReactNode;
  readTime?: string;
  articleTitle?: string;
}

export default function TableOfContents({
  headings = STATIC_TOC_ITEMS,
  children,
  readTime = "5 min read",
  articleTitle,
}: TableOfContentsProps) {
  // Use static TOC items for consistent UI integration as requested
  const resolvedHeadings =
    headings && headings.length > 0 ? headings : STATIC_TOC_ITEMS;

  const [activeId, setActiveId] = useState(resolvedHeadings[0]?.id ?? "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigatingToRef = useRef<string | null>(null);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    navigatingToRef.current = id;
    setActiveId(id);
    setIsMobileOpen(false);

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      SCROLL_ANCHOR_OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Fallback release after scroll
    window.setTimeout(() => {
      navigatingToRef.current = null;
    }, 800);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? Math.min(100, Math.max(0, (winScroll / height) * 100)) : 0;
      setScrollProgress(Math.round(scrolled));

      if (navigatingToRef.current) return;

      let current = resolvedHeadings[0]?.id || "";
      for (const heading of resolvedHeadings) {
        const el = document.getElementById(heading.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= ACTIVE_THRESHOLD) {
            current = heading.id;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [resolvedHeadings]);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-accent via-accent-light to-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)] xl:gap-14">
        {/* ===================== SIDEBAR ===================== */}
        <aside className="lg:sticky lg:top-24 lg:self-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Mobile Accordion */}
          <div className="lg:hidden mb-6 rounded-2xl border border-border bg-surface shadow-xs">
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-surface-muted rounded-2xl"
              aria-expanded={isMobileOpen}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <List className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-foreground">
                  Table of Contents
                </span>
                <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent">
                  {scrollProgress}% Read
                </span>
              </div>
              {isMobileOpen ? (
                <ChevronUp className="h-4 w-4 text-muted" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted" />
              )}
            </button>

            {isMobileOpen && (
              <nav
                aria-label="Mobile table of contents"
                className="border-t border-border/60 p-3 pt-2"
              >
                <ul className="space-y-1">
                  {resolvedHeadings.map((heading, idx) => {
                    const isActive = activeId === heading.id;
                    return (
                      <li key={heading.id}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(heading.id)}
                          className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-semibold transition-all ${
                            isActive
                              ? "bg-accent/10 text-accent font-bold"
                              : "text-muted hover:bg-surface-muted hover:text-foreground"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                              isActive
                                ? "bg-accent text-white"
                                : "bg-surface-muted text-muted"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="truncate">{heading.text}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>

          {/* Desktop Table of Contents Card */}
          <div className="hidden lg:block space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[var(--shadow-card)]">
              {/* Card Header */}
              <div className="border-b border-border/60 bg-gradient-to-r from-surface-muted to-surface px-4.5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <List className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      In This Article
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent">
                    <Sparkles className="h-3 w-3" />
                    {scrollProgress}% Read
                  </span>
                </div>

                {/* Progress Mini Bar */}
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border/60">
                  <div
                    className="h-full bg-accent transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>

              {/* Navigation List */}
              <nav aria-label="Table of contents" className="p-2.5">
                <ul className="space-y-1">
                  {resolvedHeadings.map((heading, idx) => {
                    const isActive = activeId === heading.id;
                    return (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(heading.id);
                          }}
                          className={`group relative flex items-center gap-3 rounded-xl px-3 py-2 text-xs transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-white font-bold shadow-xs"
                              : "text-muted hover:bg-surface-muted hover:text-foreground font-medium"
                          }`}
                        >
                          {/* Step number badge */}
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold transition-colors ${
                              isActive
                                ? "bg-accent text-white"
                                : "bg-surface-muted text-muted group-hover:bg-border group-hover:text-foreground"
                            }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>

                          <span className="leading-snug">{heading.text}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Card Footer: Quick Share & Read Time */}
              <div className="border-t border-border/60 bg-surface-muted/40 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {readTime}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 font-bold text-primary transition-colors hover:text-accent cursor-pointer"
                    title="Copy article link"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-success" />
                        <span className="text-success">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Helpline / Store Assistance Card */}
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-soft/70 via-surface to-surface p-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <PhoneCall className="h-3.5 w-3.5 text-accent" />
                <span>Odenton Store Help</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Questions about courier drop-offs, packing materials, or mailbox rentals?
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-white shadow-xs transition-colors hover:bg-primary-light"
                >
                  <PhoneCall className="h-3 w-3" />
                  <span>{BUSINESS.phone}</span>
                </a>
                <a
                  href={BUSINESS.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-center text-[11px] font-semibold text-muted hover:text-primary transition-colors"
                >
                  <MapPin className="h-3 w-3 text-accent" />
                  <span>8777 Piney Orchard Pkwy Ste B</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* ===================== MAIN CONTENT WRAPPER ===================== */}
        <div className="min-w-0">{children}</div>
      </div>
    </>
  );
}
