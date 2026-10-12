import ContactCtaSection from "@/components/home/contact-cta-section";
import { getPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("contact");
}

export default function ContactUs() {
  return <ContactCtaSection isContactPage={true} />;
}