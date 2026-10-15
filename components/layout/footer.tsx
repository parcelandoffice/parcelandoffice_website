import { Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";
import { Logo } from "@components/common/logo";
import FooterQuickLinks from "@components/navigation/footer-quick-links";
import { BUSINESS, SITE_NAME } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary-dark text-on-dark">
      <div
        aria-hidden="true"
        className="bg-gradient-brand absolute inset-x-0 top-0 h-1"
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-dark/70">
              Your one-stop shop for packing, shipping, printing and business
              services in Odenton, MD. It&apos;s handled!
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
              Quick Links
            </h2>
            <FooterQuickLinks />
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-on-dark/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-light" aria-hidden="true" />
                <a
                  href={BUSINESS.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-light"
                >
                  {BUSINESS.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-light" aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="transition-colors hover:text-accent-light">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-light" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="break-all transition-colors hover:text-accent-light"
                >
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold tracking-widest text-accent uppercase">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Store Location
            </h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-on-dark/15 shadow-sm">
              <iframe
                title="Parcel & Office Solutions Google Map"
                src="https://maps.google.com/maps?q=8777+Piney+Orchard+Pkwy+Ste+B,+Odenton,+MD+21113&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-on-dark/10 pt-6 text-xs text-on-dark/55 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/" className="transition-colors hover:text-accent-light">
              Privacy Statement
            </Link>
            <Link href="/" className="transition-colors hover:text-accent-light">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
