"use client";

import {
  ChevronDown,
  Clock,
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
import StoreHoursModal from "@components/common/store-hours-modal";
import {
  BUSINESS,
  SERVICES_MENU_CATEGORIES,
  DIGITAL_MARKETING_MENU,
  ABOUT_US_MENU,
  STORE_HOURS,
} from "@/lib/site-data";

function useTodayHours() {
  const [label, setLabel] = useState<string>("9:30 AM – 6:30 PM");

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = STORE_HOURS[new Date().getDay()];
      setLabel(
        today.open ? `${today.open} – ${today.close}` : "Closed",
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return label;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [queryModalOpen, setQueryModalOpen] = useState(false);
  const [storeHoursModalOpen, setStoreHoursModalOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [digitalMenuOpen, setDigitalMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDigitalOpen, setMobileDigitalOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
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
    setDigitalMenuOpen(false);
    setAboutMenuOpen(false);
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
  const isDigitalActive = pathname.startsWith("/digital-marketing");
  const isAboutActive = pathname.startsWith("/about-us") || pathname.startsWith("/blog");
  const isContactActive = pathname === "/contact-us";

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface">
        {/* Row 1: Brand Logo on Left, 2 CTAs on Right */}
        <div
          className={`border-b border-border bg-surface transition-shadow duration-200 ${scrolled ? "shadow-[var(--shadow-card)]" : ""
            }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Logo onNavigate={closeAll} />

            {/* Right side Menu & Track Your Parcel CTA */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Desktop Navigation */}
              <nav
                className="hidden lg:flex items-center gap-1"
                aria-label="Main navigation"
              >
                {/* 1. Home */}
                <Link
                  href="/"
                  onClick={closeAll}
                  className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${isHomeActive
                    ? "bg-primary-soft text-primary font-bold shadow-2xs"
                    : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                    }`}
                >
                  <span>Home</span>
                </Link>

                {/* 2. Services (4 Categories Mega Menu) */}
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
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${isServicesActive
                      ? "bg-primary-soft text-primary font-bold shadow-2xs"
                      : servicesMenuOpen
                        ? "bg-surface-muted text-primary font-bold"
                        : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                      }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${servicesMenuOpen
                        ? "rotate-180 text-accent"
                        : "text-muted"
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    id="services-mega-menu"
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[840px] max-w-[calc(100vw-2rem)] pt-2 transition-all duration-200 ${servicesMenuOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1.5 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="rounded-xl border border-border border-t-4 border-t-accent bg-surface p-6 shadow-[var(--shadow-float)]">
                      <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                            Our Services &amp; Solutions
                          </span>
                          <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-bold text-accent-dark">
                            18 Core Services
                          </span>
                        </div>
                        <Link
                          href="/#services"
                          onClick={closeAll}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors"
                        >
                          View Services Grid
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>

                      {/* 4-Column Grid */}
                      <div className="grid grid-cols-4 gap-6">
                        {SERVICES_MENU_CATEGORIES.map((category) => (
                          <div key={category.title} className="flex flex-col">
                            <div className="flex items-center justify-between border-b border-border/80 pb-2 mb-2.5">
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-primary">
                                {category.title}
                              </h4>
                              <span className="text-[10px] font-bold text-muted bg-surface-muted px-1.5 py-0.5 rounded">
                                {category.items.length}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              {category.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeAll}
                                    tabIndex={servicesMenuOpen ? 0 : -1}
                                    className="group flex items-center gap-2 rounded-lg p-1.5 text-xs font-semibold text-foreground transition-all duration-150 hover:bg-primary-soft hover:text-primary"
                                  >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-accent">
                                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                                    </span>
                                    <span className="leading-tight group-hover:text-primary transition-colors">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Digital Marketing Services */}
                <div
                  className="relative"
                  onMouseEnter={() => setDigitalMenuOpen(true)}
                  onMouseLeave={() => setDigitalMenuOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setDigitalMenuOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={digitalMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setDigitalMenuOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${isDigitalActive
                      ? "bg-primary-soft text-primary font-bold shadow-2xs"
                      : digitalMenuOpen
                        ? "bg-surface-muted text-primary font-bold"
                        : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                      }`}
                  >
                    <span>Digital Marketing Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${digitalMenuOpen
                        ? "rotate-180 text-accent"
                        : "text-muted"
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full w-[360px] pt-2 transition-all duration-200 ${digitalMenuOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1.5 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="rounded-xl border border-border border-t-4 border-t-accent bg-surface p-4 shadow-[var(--shadow-float)]">
                      <div className="flex items-center justify-between border-b border-border pb-2.5 mb-2.5">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-primary">
                          Digital Marketing Services
                        </span>
                        <span className="inline-flex items-center rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent-dark">
                          5 Solutions
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        {DIGITAL_MARKETING_MENU.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={closeAll}
                              className="group flex items-start gap-3 rounded-lg p-2 transition-all duration-150 hover:bg-primary-soft"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-accent mt-0.5">
                                <Icon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <div className="min-w-0">
                                <span className="block text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                                  {item.label}
                                </span>
                                <span className="block text-[11px] text-muted line-clamp-1">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. About Us */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutMenuOpen(true)}
                  onMouseLeave={() => setAboutMenuOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setAboutMenuOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={aboutMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setAboutMenuOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${isAboutActive
                      ? "bg-primary-soft text-primary font-bold shadow-2xs"
                      : aboutMenuOpen
                        ? "bg-surface-muted text-primary font-bold"
                        : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                      }`}
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${aboutMenuOpen
                        ? "rotate-180 text-accent"
                        : "text-muted"
                        }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`absolute right-0 top-full w-[300px] pt-2 transition-all duration-200 ${aboutMenuOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1.5 opacity-0 pointer-events-none"
                      }`}
                  >
                    <div className="rounded-xl border border-border border-t-4 border-t-accent bg-surface p-3 shadow-[var(--shadow-float)]">
                      <div className="flex flex-col gap-1">
                        {ABOUT_US_MENU.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={closeAll}
                              className="group flex items-start gap-3 rounded-lg p-2.5 transition-all duration-150 hover:bg-primary-soft"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-accent mt-0.5">
                                <Icon className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <div className="min-w-0">
                                <span className="block text-xs font-bold text-foreground transition-colors group-hover:text-primary">
                                  {item.label}
                                </span>
                                <span className="block text-[11px] text-muted line-clamp-1">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Contact Us */}
                <Link
                  href="/contact-us"
                  onClick={closeAll}
                  className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${isContactActive
                    ? "bg-primary-soft text-primary font-bold shadow-2xs"
                    : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                    }`}
                >
                  <span>Contact Us</span>
                </Link>
              </nav>

              {/* Sole Right CTA: Track Your Parcel */}
              <Link
                href="/#tracking"
                onClick={scrollToTracking}
                className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent px-4 py-2 text-xs font-bold text-on-dark transition-all duration-200 hover:bg-accent-dark shadow-xs shrink-0"
              >
                <Search className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                <span>Track Your Parcel</span>
              </Link>

              {/* Mobile hamburger toggle */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="rounded-lg p-2 text-foreground transition-colors hover:bg-surface-muted lg:hidden cursor-pointer"
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

        {/* Mobile drawer with Full Menu */}
        <div
          id="mobile-menu"
          className={`overflow-y-auto border-b border-border bg-surface transition-all duration-200 lg:hidden ${mobileOpen
            ? "max-h-[calc(100dvh-5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {/* Mobile Store Hours button (opens modal) */}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setStoreHoursModalOpen(true);
              }}
              className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent-soft mb-1 cursor-pointer w-full text-left"
            >
              <span className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span>Today: <strong className="font-bold text-foreground">{todayHours}</strong></span>
              </span>
              <span className="rounded bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent-dark uppercase">
                View Hours
              </span>
            </button>

            {/* Mobile CTAs */}
            <div className="pb-3 border-b border-border mb-2">
              <Link
                href="/#tracking"
                onClick={scrollToTracking}
                className="flex items-center justify-center gap-2 rounded-full border border-accent/25 bg-accent px-4 py-2.5 text-xs font-bold text-on-dark shadow-xs w-full"
              >
                <Search className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                <span>Track Your Parcel</span>
              </Link>
            </div>

            {/* 1. Home */}
            <Link
              href="/"
              onClick={closeAll}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${isHomeActive
                ? "bg-primary text-white font-bold border-l-4 border-accent shadow-xs"
                : "text-foreground hover:bg-surface-muted"
                }`}
            >
              <span>Home</span>
              {isHomeActive && (
                <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary-dark">
                  Active
                </span>
              )}
            </Link>

            {/* 2. Services Accordion with 4 categories */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors ${isServicesActive
                ? "bg-primary text-white font-bold border-l-4 border-accent"
                : mobileServicesOpen
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
                }`}
            >
              <span>Services (18)</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 px-3 py-2 bg-surface-muted rounded-lg border-l-2 border-primary/30 ml-2">
                {SERVICES_MENU_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <span className="block text-[11px] font-extrabold uppercase tracking-wider text-primary pb-1 border-b border-border/60 mb-1">
                      {cat.title}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {cat.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeAll}
                            className="flex items-center gap-2 py-1 px-2 rounded text-xs text-foreground hover:text-primary hover:bg-surface"
                          >
                            <Icon className="h-3.5 w-3.5 text-primary" />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. Digital Marketing Services Accordion */}
            <button
              type="button"
              onClick={() => setMobileDigitalOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors ${isDigitalActive
                ? "bg-primary text-white font-bold border-l-4 border-accent"
                : mobileDigitalOpen
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
                }`}
            >
              <span>Digital Marketing Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileDigitalOpen ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>
            {mobileDigitalOpen && (
              <div className="grid grid-cols-1 gap-1 px-3 py-2 bg-surface-muted rounded-lg border-l-2 border-primary/30 ml-2">
                {DIGITAL_MARKETING_MENU.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center gap-2 py-1 px-2 rounded text-xs text-foreground hover:text-primary hover:bg-surface"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}



            {/* 5. About Us Accordion */}
            <button
              type="button"
              onClick={() => setMobileAboutOpen((prev) => !prev)}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-semibold transition-colors ${isAboutActive
                ? "bg-primary text-white font-bold border-l-4 border-accent"
                : mobileAboutOpen
                  ? "bg-primary-soft text-primary font-bold"
                  : "text-foreground hover:bg-surface-muted"
                }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""
                  }`}
                aria-hidden="true"
              />
            </button>
            {mobileAboutOpen && (
              <div className="grid grid-cols-1 gap-1 px-3 py-2 bg-surface-muted rounded-lg border-l-2 border-primary/30 ml-2">
                {ABOUT_US_MENU.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center gap-2 py-1 px-2 rounded text-xs text-foreground hover:text-primary hover:bg-surface"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* 6. Contact Us */}
            <Link
              href="/contact-us"
              onClick={closeAll}
              className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${isContactActive
                ? "bg-primary text-white font-bold border-l-4 border-accent shadow-xs"
                : "text-foreground hover:bg-surface-muted"
                }`}
            >
              <span>Contact Us</span>
              {isContactActive && (
                <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary-dark">
                  Active
                </span>
              )}
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

      {/* Store Hours Modal (matching attached layout) */}
      <StoreHoursModal
        isOpen={storeHoursModalOpen}
        onClose={() => setStoreHoursModalOpen(false)}
      />
    </>
  );
}
