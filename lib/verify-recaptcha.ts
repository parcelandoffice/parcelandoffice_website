type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("GOOGLE_RECAPTCHA_SECRET_KEY is not configured.");
    return false;
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    },
  );

  const data = (await response.json()) as RecaptchaVerifyResponse;

  if (!data.success) {
    console.error("reCAPTCHA verification failed:", data["error-codes"]);
  }

  return data.success === true;
}
