"use client";

import {
  clearPracticeAreasHash,
  markPracticeAreasHomeMounted,
  scrollToPracticeAreasElement,
  shouldScrollToPracticeAreas,
} from "@/lib/practice-areas-navigation";
import { useEffect, useRef, type ReactNode } from "react";

type PracticeAreasShellProps = {
  children: ReactNode;
};

export default function PracticeAreasShell({ children }: PracticeAreasShellProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollIfNeeded = () => {
      if (shouldScrollToPracticeAreas()) {
        scrollToPracticeAreasElement(sectionRef.current);
        return;
      }

      clearPracticeAreasHash();
    };

    scrollIfNeeded();
    markPracticeAreasHomeMounted();

    window.addEventListener("hashchange", scrollIfNeeded);

    return () => {
      window.removeEventListener("hashchange", scrollIfNeeded);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="practice-areas"
      className="scroll-mt-20 bg-background py-20 lg:scroll-mt-24 lg:py-28"
    >
      {children}
    </section>
  );
}
