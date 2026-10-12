import { getContactCtaData } from "@/lib/apis";
import ContactCta from "./contact-cta";

export default async function ContactCtaSection({ isContactPage }: { isContactPage?: boolean }) {
  const contactCtaData = await getContactCtaData();

  return <ContactCta contactCtaData={contactCtaData} isContactPage={isContactPage} />;
}
