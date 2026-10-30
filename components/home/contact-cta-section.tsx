import { getContactCtaData } from "@/lib/apis";
import ContactCta from "./contact-cta";
import type { HomePageData } from "@/lib/types";

export default async function ContactCtaSection({
  isContactPage,
  homeData,
}: {
  isContactPage?: boolean;
  homeData?: HomePageData | null;
}) {
  const contactCtaData = await getContactCtaData();

  const mergedData = {
    _id: contactCtaData?._id || "contactCta",
    tag: homeData?.contactTag || contactCtaData?.tag,
    title: homeData?.contactHeading || contactCtaData?.title,
    description: homeData?.contactDescription || contactCtaData?.description,
  };

  return <ContactCta contactCtaData={mergedData} isContactPage={isContactPage} />;
}
