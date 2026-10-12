"use client";

import { useEffect, useRef } from "react";
import { Clock, Phone, X } from "lucide-react";
import { BUSINESS, STORE_HOURS } from "@/lib/site-data";

type StoreHoursModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function StoreHoursModal({ isOpen, onClose }: StoreHoursModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate the 7 days of the current week starting with Monday
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday...
  const distanceToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(now);
  monday.setDate(now.getDate() + distanceToMonday);

  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const jsDayIndex = d.getDay(); // 0 = Sun, 1 = Mon...
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear();

    const hours = STORE_HOURS[jsDayIndex];

    weekDays.push({
      shortDay: dayNames[i],
      month: monthNames[d.getMonth()],
      dateNum: d.getDate(),
      isToday,
      open: hours.open,
      close: hours.close,
    });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-hours-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-secondary/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-2xl sm:max-w-[700px] overflow-hidden rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-[var(--shadow-float)] transition-all"
      >
        {/* Close Button at top right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Centered Header in Theme Primary Colors */}
        <div className="text-center pt-1 pb-6">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
              <Clock className="h-4 w-4" aria-hidden="true" />
            </span>
            <h2
              id="store-hours-modal-title"
              className="font-display text-2xl sm:text-3xl font-extrabold text-primary tracking-tight"
            >
              Store Hours
            </h2>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            Odenton, MD Store Location &bull; Open 6 Days a Week
          </p>
        </div>

        {/* 7-Days Horizontal Cards Container */}
        <div className="overflow-x-auto pb-1">
          <div className="grid min-w-[540px] grid-cols-7 gap-1.5 sm:gap-2">
            {weekDays.map((day) => {
              const openParts = day.open?.split(" ") ?? [];
              const closeParts = day.close?.split(" ") ?? [];

              if (day.isToday) {
                return (
                  <div key={day.shortDay} className="flex flex-col">
                    {/* Active Accent pill badge on top for Today */}
                    <div className="rounded-t-md bg-accent py-1 text-center text-[11px] sm:text-xs font-black uppercase tracking-wider text-primary-dark shadow-xs">
                      Today
                    </div>
                    {/* Primary Brand Navy active card */}
                    <div className="flex flex-col items-center justify-between rounded-b-md bg-primary p-2 sm:p-2.5 text-white min-h-[142px] sm:min-h-[152px] shadow-md ring-2 ring-accent/30">
                      <div className="flex flex-col items-center text-center">
                        <span className="text-xs sm:text-sm font-black tracking-wider uppercase leading-tight text-white">
                          {day.shortDay}
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-white/90 mt-0.5">
                          {day.month} {day.dateNum}
                        </span>
                      </div>

                      <div className="w-[75%] border-t border-accent/60 my-2" />

                      <div className="flex flex-col items-center text-center text-xs sm:text-sm font-black leading-tight text-white">
                        {day.open ? (
                          <>
                            <span>
                              {openParts[0]}{" "}
                              <span className="text-[9px] sm:text-[10px] font-bold text-accent-light">
                                {openParts[1]}
                              </span>
                            </span>
                            <span className="text-[11px] font-bold text-accent my-0.5 leading-none">
                              —
                            </span>
                            <span>
                              {closeParts[0]}{" "}
                              <span className="text-[9px] sm:text-[10px] font-bold text-accent-light">
                                {closeParts[1]}
                              </span>
                            </span>
                          </>
                        ) : (
                          <span className="my-auto font-black text-white">Closed</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={day.shortDay} className="flex flex-col">
                  {/* Spacer aligning card tops with Today badge */}
                  <div className="h-[25px] sm:h-[26px]" aria-hidden="true" />

                  {/* Standard Day Card */}
                  <div className="flex flex-col items-center justify-between rounded-md border border-border bg-surface p-2 sm:p-2.5 min-h-[142px] sm:min-h-[152px] shadow-2xs hover:border-primary/40 hover:shadow-xs transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-xs sm:text-sm font-bold text-primary tracking-wider uppercase leading-tight">
                        {day.shortDay}
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-muted mt-0.5">
                        {day.month} {day.dateNum}
                      </span>
                    </div>

                    <div className="w-[75%] border-t border-border my-2" />

                    <div className="flex flex-col items-center text-center text-xs sm:text-sm font-bold text-foreground leading-tight">
                      {day.open ? (
                        <>
                          <span>
                            {openParts[0]}{" "}
                            <span className="text-[9px] sm:text-[10px] font-semibold text-muted">
                              {openParts[1]}
                            </span>
                          </span>
                          <span className="text-[11px] text-muted-light leading-none my-0.5">
                            —
                          </span>
                          <span>
                            {closeParts[0]}{" "}
                            <span className="text-[9px] sm:text-[10px] font-semibold text-muted">
                              {closeParts[1]}
                            </span>
                          </span>
                        </>
                      ) : (
                        <span className="my-auto text-xs sm:text-sm font-bold text-muted">
                          Closed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note with Phone Link */}
        <div className="mt-5 pt-3.5 border-t border-border flex items-center justify-between text-xs text-muted flex-wrap gap-2">
          <span>Daily carrier cutoffs may differ from store hours.</span>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-3 w-3 text-accent" aria-hidden="true" />
            <span>Call {BUSINESS.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
