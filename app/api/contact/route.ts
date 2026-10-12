import { NextResponse } from "next/server";
import {
  markContactSubmissionEmailSent,
  saveContactSubmission,
} from "@/lib/contact-submission";
import {
  buildContactInquiryEmail,
  buildContactInquirySubject,
  type ContactInquiryData,
} from "@/lib/email/contact-inquiry-template";
import { sendEmail } from "@/lib/email/send-email";
import { verifyRecaptchaToken } from "@/lib/verify-recaptcha";
import { CreateEmailResponseSuccess } from "resend";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseContactPayload(
  body: unknown,
):
  | { data: ContactInquiryData; recaptchaToken: string }
  | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request body." };
  }

  const { firstName, lastName, email, phone, message, recaptchaToken } =
    body as Record<string, unknown>;

  if (typeof firstName !== "string" || !firstName.trim()) {
    return { error: "First name is required." };
  }

  if (typeof lastName !== "string" || !lastName.trim()) {
    return { error: "Last name is required." };
  }

  if (typeof email !== "string" || !isValidEmail(email.trim())) {
    return { error: "A valid email address is required." };
  }

  if (typeof message !== "string" || !message.trim()) {
    return { error: "Message is required." };
  }

  if (phone !== undefined && phone !== null && typeof phone !== "string") {
    return { error: "Phone number must be a string." };
  }

  if (typeof recaptchaToken !== "string" || !recaptchaToken.trim()) {
    return { error: "reCAPTCHA verification is required." };
  }

  return {
    data: {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: typeof phone === "string" ? phone.trim() : undefined,
      message: message.trim(),
    },
    recaptchaToken: recaptchaToken.trim(),
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = parseContactPayload(body);

    if ("error" in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    const isHuman = await verifyRecaptchaToken(parsed.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_FORM_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
    const senderName =
      process.env.CONTACT_FORM_SENDER_NAME || "RP Law Firm";

    if (!to || !fromEmail) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const submission = await saveContactSubmission(parsed.data);

    const emailResponse: CreateEmailResponseSuccess = await sendEmail({
      to,
      from: `${senderName} <${fromEmail}>`,
      subject: buildContactInquirySubject(parsed.data),
      html: buildContactInquiryEmail(parsed.data),
    });
    console.log("emailResponse", emailResponse);


    if (emailResponse?.id) {
      await markContactSubmissionEmailSent(submission._id);
    } else {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return NextResponse.json(
      {
        error: "Unable to send your inquiry right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
