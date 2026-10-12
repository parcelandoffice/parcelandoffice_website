import { Resend } from "resend";

type SendEmailOptions = {
  to: string;
  from: string;
  subject: string;
  html: string;
};

let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  resendClient ??= new Resend(apiKey);
  return resendClient;
}

export async function sendEmail(options: SendEmailOptions) {
  const { data, error } = await getResendClient().emails.send(options);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
