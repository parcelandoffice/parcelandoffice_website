export const PRACTICE_AREAS_ID = "practice-areas";
export const PRACTICE_AREAS_HASH = `#${PRACTICE_AREAS_ID}`;
export const PRACTICE_AREAS_HREF = `/${PRACTICE_AREAS_HASH}`;

import type { MouseEvent } from "react";

const SCROLL_INTENT_KEY = "practice-areas-scroll-intent";

let hasMountedPracticeAreasOnHome = false;

export function markPracticeAreasScrollIntent() {
  sessionStorage.setItem(SCROLL_INTENT_KEY, "1");
}

export function consumePracticeAreasScrollIntent(): boolean {
  const hasIntent = sessionStorage.getItem(SCROLL_INTENT_KEY) === "1";

  if (hasIntent) {
    sessionStorage.removeItem(SCROLL_INTENT_KEY);
  }

  return hasIntent;
}

export function isPracticeAreasHash(hash = window.location.hash) {
  return hash === PRACTICE_AREAS_HASH;
}

export function clearPracticeAreasHash() {
  if (isPracticeAreasHash()) {
    window.history.replaceState(null, "", "/");
  }
}

export function scrollToPracticeAreasElement(element?: HTMLElement | null) {
  const target =
    element ?? document.getElementById(PRACTICE_AREAS_ID);

  target?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function isDirectUrlEntryWithHash() {
  const navEntry = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;

  return navEntry?.type === "navigate" || navEntry?.type === "reload";
}

export function shouldScrollToPracticeAreas() {
  if (!isPracticeAreasHash()) {
    return false;
  }

  if (consumePracticeAreasScrollIntent()) {
    return true;
  }

  if (!hasMountedPracticeAreasOnHome && isDirectUrlEntryWithHash()) {
    return true;
  }

  return false;
}

export function markPracticeAreasHomeMounted() {
  hasMountedPracticeAreasOnHome = true;
}

export function handleHomeNavigationClick(
  event: MouseEvent<HTMLAnchorElement>,
  pathname: string,
) {
  if (pathname !== "/" || !window.location.hash) {
    return;
  }

  event.preventDefault();
  window.history.replaceState(null, "", "/");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function handlePracticeAreasNavigationClick(
  event: MouseEvent<HTMLAnchorElement>,
  pathname: string,
) {
  markPracticeAreasScrollIntent();

  if (pathname === "/" && isPracticeAreasHash()) {
    event.preventDefault();
    scrollToPracticeAreasElement();
  }
}
