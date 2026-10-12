"use client";

import { useEffect, useState } from "react";
import { STORE_HOURS } from "@/lib/site-data";

/** Weekly hours table; highlights the current day after hydration (avoids SSR mismatch). */
export default function StoreHours({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  const isDark = variant === "dark";
  // Display Monday first, Sunday last
  const order = [1, 2, 3, 4, 5, 6, 0];

  return (
    <ul className={`space-y-1.5 text-sm ${className}`}>
      {order.map((index) => {
        const entry = STORE_HOURS[index];
        const isToday = today === index;

        return (
          <li
            key={entry.day}
            className={`flex items-center justify-between gap-4 rounded-lg px-3 py-1.5 transition-colors ${
              isToday
                ? "bg-primary text-on-primary font-semibold"
                : isDark
                  ? "text-on-dark/70"
                  : "text-muted"
            }`}
          >
            <span>{entry.day}</span>
            <span>
              {entry.open ? `${entry.open} – ${entry.close}` : "Closed"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
