"use client";

import {
  ChevronDown,
  Clock,
  HelpCircle,
  Menu,
  Phone,
  Search,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@components/common/logo";
import ContactModal from "@components/common/contact-modal";
import {
  BUSINESS,
  SERVICES,
  STORE_HOURS,
  getServiceHref,
} from "@/lib/site-data";

function useTodayHours() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const today = STORE_HOURS[new Date().getDay()];
    setLabel(
      today.open ? `${today.open} – ${today.close}` : "Closed today",
    );
  }, []);

  return label;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [queryModalOpen, setQueryModalOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const todayHours = useTodayHours();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesMenuOpen(false);
  };

  const scrollToTracking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("tracking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeAll();
  };

  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services") || pathname === "/#services";
  const isContactActive = pathname === "/contact-us";

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface">
        {/* Row 1: Brand Logo on Left, 2 CTAs on Right */}
        <div
          className={`border-b border-border bg-surface transition-shadow duration-200 ${
            scrolled ? "shadow-[var(--shadow-card)]" : ""
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Logo onNavigate={closeAll} />

            {/* Right side CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* CTA 1: Track Your Parcel */}
              <a
                href="/#tracking"
                onClick={scrollToTracking}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3.5 py-2 text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary sm:px-5 sm:py-2.5"
              >
                <Search className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span>Track Your Parcel</span>
              </a>

              {/* CTA 2: Query In Your Mind? */}
              <button
                type="button"
                onClick={() => setQueryModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-on-primary transition-all duration-200 hover:bg-primary-dark shadow-xs sm:px-5 sm:py-2.5"
              >
                <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Query In Your Mind?</span>
              </button>

              {/* Mobile hamburger toggle */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface-muted lg:hidden"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Navigation Panel with Home, Services (Submenu), Contact Us */}
        <div className="hidden border-b border-border bg-surface-muted/50 lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <nav
              className="flex items-center gap-2 py-1.5"
              aria-label="Main navigation"
            >
              {/* 1. Home Menu with Active Page UI */}
              <Link
                href="/"
                onClick={closeAll}
                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isHomeActive
                    ? "bg-primary-soft text-primary font-bold shadow-xs"
                    : "text-foreground hover:bg-surface hover:text-primary"
                }`}
              >
                Home
              </Link>

              {/* 2. Services Menu with Submenu containing all 15 Featured Products & Services */}
              <div
                className="relative"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setServicesMenuOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-expanded={servicesMenuOpen}
                  aria-haspopup="true"
                  aria-controls="services-mega-menu"
                  onClick={() => setServicesMenuOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isServicesActive || servicesMenuOpen
                      ? "bg-primary-soft text-primary font-bold"
                      : "text-foreground hover:bg-surface hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesMenuOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Submenu: All services available in Featured Products & Services */}
                <div
                  id="services-mega-menu"
                  className={`absolute left-0 top-full w-[880px] pt-1.5 transition-all duration-200 ${
                    servicesMenuOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1.5 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-float)]">
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          Our Products &amp; Services
                        </span>
                        <p className="text-xs text-muted mt-0.5">
                          Explore our full range of 15 multi-carrier shipping, document, and office solutions
                        </p>
                      </div>
                      <Link
                        href="/#services"
                        onClick={closeAll}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        View Grid View
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    {/* 3-Column Grid of all 15 services */}
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2.5">
                      {SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.slug}
                            href={getServiceHref(service.slug)}
                            onClick={closeAll}
                            tabIndex={servicesMenuOpen ? 0 : -1}
                            className="group flex items-start gap-3 rounded-lg p-2 transition-all duration-150 hover:bg-surface-muted"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <div className="min-w-0">
                              <span className="block text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                                {service.label}
                              </span>
                              <span className="block text-[11px] text-muted line-clamp-1">
                                {service.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Contact Us Menu with Active Page UI */}
              <Link
                href="/contact-us"
                onClick={closeAll}
                className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isContactActive
                    ? "bg-primary-soft text-primary font-bold shadow-xs"
                    : "text-foreground hover:bg-surface hover:text-primary"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Quick store hours info on right */}
            <div className="hidden items-center gap-2 text-xs text-muted xl:flex">
              <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>Today: <strong className="text-foreground">{todayHours}</strong></span>
              <span className="text-border">|</span>
              <a
                href={BUSINESS.phoneHref}
                className="font-bold text-primary hover:underline"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Mobile drawer: Home, Services, Contact Us */}
        <div
          id="mobile-menu"
          className={`overflow-y-auto border-b border-border bg-surface transition-all duration-200 lg:hidden ${
            mobileOpen
              ? "max-h-[calc(100dvh-5rem)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-border mb-2">
              <a
                href="/#tracking"
                onClick={scrollToTracking}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-2.5 text-xs font-bold text-foreground"
              >
                <Search className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Track Parcel
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setQueryModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2.5 text-xs font-bold text-on-primary"
              >
                <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Query?
              </button>
            </div>

            {/* 1. Home */}
            <Link
              href="/"
              onClick={closeAll}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                isHomeActive
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
              }`}
            >
              Home
            </Link>

            {/* 2. Services Accordion with all 15 services */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                isServicesActive || mobileServicesOpen
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <div className="grid grid-cols-1 gap-1 px-2 py-2 bg-surface-muted rounded-lg">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={getServiceHref(service.slug)}
                      onClick={closeAll}
                      className="flex items-center gap-2.5 py-1.5 px-2 rounded text-xs text-foreground hover:text-primary hover:bg-surface"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span>{service.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* 3. Contact Us */}
            <Link
              href="/contact-us"
              onClick={closeAll}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                isContactActive
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
              }`}
            >
              Contact Us
            </Link>

            {/* Direct Call action */}
            <a
              href={BUSINESS.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-on-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </nav>
        </div>
      </header>

      {/* Query Popup Box Modal */}
      <ContactModal
        isOpen={queryModalOpen}
        onClose={() => setQueryModalOpen(false)}
      />
    </>
  );
}
