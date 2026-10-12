"use client";

import { createContext, useContext } from "react";
import type { FooterData } from "@/lib/types";

const FooterDataContext = createContext<FooterData | null>(null);

export function FooterDataProvider({
  children,
  footerData,
}: {
  children: React.ReactNode;
  footerData: FooterData;
}) {
  return (
    <FooterDataContext.Provider value={footerData}>
      {children}
    </FooterDataContext.Provider>
  );
}

export function useFooterData(): FooterData {
  const context = useContext(FooterDataContext);

  if (!context) {
    throw new Error("useFooterData must be used within FooterDataProvider");
  }

  return context;
}
