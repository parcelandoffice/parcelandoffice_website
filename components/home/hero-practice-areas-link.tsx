"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PRACTICE_AREAS_HREF,
  handlePracticeAreasNavigationClick,
} from "@/lib/practice-areas-navigation";

type HeroPracticeAreasLinkProps = {
  className: string;
  children: React.ReactNode;
};

export default function HeroPracticeAreasLink({
  className,
  children,
}: HeroPracticeAreasLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={PRACTICE_AREAS_HREF}
      onClick={(event) => handlePracticeAreasNavigationClick(event, pathname)}
      className={className}
    >
      {children}
    </Link>
  );
}
