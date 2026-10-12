import type { ContactInquiryData } from "@/lib/email/contact-inquiry-template";
import { getSanityWriteClient } from "@/lib/sanity-write-client";

export async function saveContactSubmission(data: ContactInquiryData) {
  return getSanityWriteClient().create({
    _type: "contactSubmission",
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    message: data.message,
    submittedAt: new Date().toISOString(),
    emailSent: false,
  });
}

export async function markContactSubmissionEmailSent(documentId: string) {
  return getSanityWriteClient()
    .patch(documentId)
    .set({ emailSent: true })
    .commit();
}
