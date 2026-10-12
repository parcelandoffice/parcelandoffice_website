import { escapeHtml } from "./escape-html";

export type ContactInquiryData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

export function buildContactInquiryEmail(data: ContactInquiryData): string {
  const firstName = escapeHtml(data.firstName.trim());
  const lastName = escapeHtml(data.lastName.trim());
  const email = escapeHtml(data.email.trim());
  const phone = data.phone?.trim()
    ? escapeHtml(data.phone.trim())
    : "Not provided";
  const message = escapeHtml(data.message.trim()).replace(/\n/g, "<br />");
  const fullName = `${firstName} ${lastName}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background-color:#3f4854;padding:28px 32px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#eab308;">
                RP Law Firm
              </p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;color:#ffffff;">
                New Contact Inquiry
              </h1>
              <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.8);">
                A visitor submitted the contact form on your website.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:0 0 20px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                      Full Name
                    </p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#111827;">
                      ${fullName}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 20px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                      Email Address
                    </p>
                    <p style="margin:0;font-size:16px;color:#111827;">
                      <a>${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 20px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                      Phone Number
                    </p>
                    <p style="margin:0;font-size:16px;color:#111827;">
                      ${phone}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 8px;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;">
                      Message
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px;background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;">
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #e5e7eb;background-color:#fafafa;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7280;">
                This email was generated automatically from the RP Law Firm contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactInquirySubject(data: ContactInquiryData): string {
  const fullName = `${data.firstName.trim()} ${data.lastName.trim()}`.trim();
  return `New Contact Inquiry from ${fullName}`;
}
