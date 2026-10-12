import Link from "next/link";
import { VISIBLE_NAV_LINKS } from "@/lib/site-data";

export default function FooterQuickLinks() {
  return (
    <ul className="mt-5 space-y-3">
      {VISIBLE_NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-block text-sm text-on-dark/70 transition-all duration-200 hover:translate-x-1 hover:text-accent-light"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/#services"
          className="inline-block text-sm text-on-dark/70 transition-all duration-200 hover:translate-x-1 hover:text-accent-light"
        >
          Products &amp; Services
        </Link>
      </li>
    </ul>
  );
}
