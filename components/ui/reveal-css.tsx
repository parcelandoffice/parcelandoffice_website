"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type RevealCssProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: "div" | "li" | "article" | "section";
};

const directionClass: Record<Direction, string> = {
  up: "reveal-css-up",
  down: "reveal-css-down",
  left: "reveal-css-left",
  right: "reveal-css-right",
  none: "reveal-css-none",
};

export default function RevealCss({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: RevealCssProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-css ${directionClass[direction]} ${
        isVisible ? "reveal-css-visible" : ""
      } ${className}`.trim()}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
