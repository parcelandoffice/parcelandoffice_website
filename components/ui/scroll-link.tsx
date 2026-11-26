"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ScrollLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children: React.ReactNode;
  };

export default function ScrollLink({
  href,
  onClick,
  children,
  ...props
}: ScrollLinkProps) {
  const pathname = usePathname();
  const rawHref = typeof href === "string" ? href : href.pathname || "";
  const normalizedHref = rawHref === "/services" ? "/#services" : rawHref;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const isServicesTarget =
      normalizedHref === "/#services" || normalizedHref === "#services";

    if (isServicesTarget && pathname === "/") {
      const target = document.getElementById("services");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== "#services") {
          window.history.replaceState(null, "", "#services");
        }
      }
    }
  };

  return (
    <Link href={normalizedHref} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

