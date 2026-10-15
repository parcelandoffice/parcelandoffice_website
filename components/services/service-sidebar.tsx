"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Clock,
  MapPin,
  ChevronRight,
  Package,
  Plane,
  Truck,
  Mail,
  Printer,
  FileText,
  Scissors,
  Inbox,
  Fingerprint,
  Camera,
  Stamp,
  Copy,
  PackageOpen,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS, getServiceHref, STORE_HOURS } from "@/lib/site-data";
import { CarrierLogo } from "@components/common/carrier-logos";

type SidebarItem = {
  slug: string;
  label: string;
  icon: LucideIcon;
  badge?: string;
};

type SidebarCategory = {
  name: string;
  items: SidebarItem[];
};

const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    name: "Shipping & Mailing",
    items: [
      { slug: "fedex-shipping", label: "FedEx Shipping", icon: Plane, badge: "Authorized" },
      { slug: "ups-shipping", label: "UPS Shipping", icon: Truck, badge: "Outlet" },
      { slug: "dhl-shipping", label: "DHL Shipping", icon: Package, badge: "Express" },
      { slug: "us-postal-service", label: "US Postal Service", icon: Mail, badge: "Postal" },
    ],
  },
  {
    name: "Packing & Supplies",
    items: [
      { slug: "professional-packing", label: "Professional Packing", icon: PackageOpen },
      { slug: "packaging-supplies", label: "Packaging Supplies", icon: ShoppingBag },
    ],
  },
  {
    name: "Printing & Documents",
    items: [
      { slug: "print-document-services", label: "Print & Document Services", icon: Printer },
      { slug: "document-scanning", label: "Document Scanning", icon: FileText },
      { slug: "document-shredding", label: "Document Shredding", icon: Scissors },
      { slug: "fax-services", label: "Fax Services", icon: FileText },
      { slug: "copying-services", label: "Copying Services", icon: Copy },
    ],
  },
  {
    name: "Business & Personal",
    items: [
      { slug: "mailbox-rental", label: "Mailbox Rental", icon: Inbox },
      { slug: "digital-fingerprinting", label: "Digital Fingerprinting", icon: Fingerprint },
      { slug: "notary-public", label: "Notary Public", icon: Stamp },
      { slug: "passport-photos", label: "Passport Photos", icon: Camera },
    ],
  },
];

export default function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  const [quickTrackingNum, setQuickTrackingNum] = useState("");

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickTrackingNum.trim()) return;
    const url = `https://www.fedex.com/fedextrack/?trknbr=${encodeURIComponent(quickTrackingNum.trim())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside className="w-full space-y-6 lg:w-80 shrink-0">
      {/* 1. All Services Navigation Directory */}
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
        <div className="border-b border-border bg-primary-soft/60 px-5 py-4">
          <span className="text-[11px] font-black uppercase tracking-wider text-accent">
            Store Directory
          </span>
          <h3 className="font-display text-base font-extrabold text-primary-dark">
            Products &amp; Services
          </h3>
        </div>

        <div className="p-3.5 space-y-4">
          {SIDEBAR_CATEGORIES.map((category) => (
            <div key={category.name}>
              <div className="px-2 pb-1.5 pt-1 text-[11px] font-black uppercase tracking-wider text-muted-light">
                {category.name}
              </div>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.slug === currentSlug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={getServiceHref(item.slug)}
                        className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 ${isActive
                            ? "bg-primary text-white shadow-xs"
                            : "text-foreground/80 hover:bg-surface-muted hover:text-primary"
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${isActive
                                ? "bg-white/15 text-white"
                                : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-accent"
                              }`}
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="leading-tight">{item.label}</span>
                        </div>

                        {isActive ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        ) : item.badge ? (
                          <span className="text-[9px] font-bold text-muted bg-surface-muted px-1.5 py-0.5 rounded border border-border/80">
                            {item.badge}
                          </span>
                        ) : (
                          <ChevronRight className="h-3.5 w-3.5 text-muted-light/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Today's FedEx Cutoffs Card (Real-time Utility) */}
      <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-muted p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <CarrierLogo carrier="fedex" className="h-4 w-auto object-contain" />
            <h4 className="font-display text-xs font-black uppercase tracking-wider text-primary-dark">
              Daily Cutoff Times
            </h4>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-success">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Live
          </span>
        </div>

        <div className="mt-3.5 space-y-2.5">
          <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface px-3 py-2 text-xs">
            <span className="font-semibold text-muted">FedEx Express:</span>
            <strong className="font-display font-extrabold text-[#4d148c]">6:00 PM</strong>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border/80 bg-surface px-3 py-2 text-xs">
            <span className="font-semibold text-muted">FedEx Ground:</span>
            <strong className="font-display font-extrabold text-primary-dark">4:00 PM</strong>
          </div>
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-muted">
          Packages dropped off before cutoff depart same-day. Free counter drop-off receipts provided on-site.
        </p>
      </div>

      {/* 3. Quick FedEx Tracking Widget */}
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-accent" />
          <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-primary-dark">
            Track FedEx Package
          </h4>
        </div>
        <p className="mt-1 text-[11px] text-muted">
          Enter your 12 or 15-digit tracking number:
        </p>

        <form onSubmit={handleTrackSubmit} className="mt-3 space-y-2">
          <input
            type="text"
            value={quickTrackingNum}
            onChange={(e) => setQuickTrackingNum(e.target.value)}
            placeholder="e.g. 7812 3456 7890"
            className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2 text-xs font-medium text-foreground outline-none transition-all placeholder:text-muted focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-white transition-all hover:bg-accent hover:text-primary-dark shadow-2xs cursor-pointer"
          >
            <span>Track on FedEx</span>
            <ExternalLink className="h-3 w-3" />
          </button>
        </form>
      </div>
    </aside>
  );
}
