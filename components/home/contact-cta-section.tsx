import { getContactCtaData, getContactPageData } from "@/lib/apis";
import ContactCta from "./contact-cta";
import { getImageUrl } from "@/lib/helpers";
import type { HomePageData } from "@/lib/types";

function resolveOptionalIcon(icon: any): string | null {
  if (!icon) return null;
  if (icon?.asset?.url) return icon.asset.url;
  if (icon?.asset) return getImageUrl(icon);
  return null;
}

export default async function ContactCtaSection({
  isContactPage,
  homeData,
}: {
  isContactPage?: boolean;
  homeData?: HomePageData | null;
}) {
  const [contactCtaData, contactPageData] = await Promise.all([
    getContactCtaData().catch(() => null),
    getContactPageData().catch(() => null),
  ]);

  const mergedData = {
    _id: contactCtaData?._id || "contactCta",
    tag: homeData?.contactTag || contactCtaData?.tag,
    title: homeData?.contactHeading || contactCtaData?.title,
    description: homeData?.contactDescription || contactCtaData?.description,
    phoneIconUrl: resolveOptionalIcon(homeData?.contactPhoneIcon),
    phoneCardLabel: homeData?.contactPhoneLabel,
    phone: homeData?.contactPhone,
    phoneSubtext: homeData?.contactPhoneSubtext,
    emailIconUrl: resolveOptionalIcon(homeData?.contactEmailIcon),
    emailCardLabel: homeData?.contactEmailLabel,
    email: homeData?.contactEmail,
    emailSubtext: homeData?.contactEmailSubtext,
    addressIconUrl: resolveOptionalIcon(homeData?.contactAddressIcon),
    addressCardLabel: homeData?.contactAddressLabel,
    address: homeData?.contactAddress,
    addressSubtext: homeData?.contactAddressSubtext,
    // Form fields always come from the Contact Us Page schema
    firstNameLabel: contactPageData?.formFirstNameLabel,
    firstNamePlaceholder: contactPageData?.formFirstNamePlaceholder,
    lastNameLabel: contactPageData?.formLastNameLabel,
    lastNamePlaceholder: contactPageData?.formLastNamePlaceholder,
    emailLabel: contactPageData?.formEmailLabel,
    emailPlaceholder: contactPageData?.formEmailPlaceholder,
    phoneLabel: contactPageData?.formPhoneLabel,
    phonePlaceholder: contactPageData?.formPhonePlaceholder,
    messageLabel: contactPageData?.formMessageLabel,
    messagePlaceholder: contactPageData?.formMessagePlaceholder,
    submitText: contactPageData?.formSubmitText,
    successTitle: contactPageData?.formSuccessTitle,
    successMessage: contactPageData?.formSuccessMessage,
  };

  return (
    <ContactCta
      contactCtaData={mergedData}
      contactPageData={contactPageData}
      isContactPage={isContactPage}
    />
  );
}
