"use server";

export type ContactFormPayload = {
  name: string;
  email: string;
  category: string;
  message: string;
};

export type ContactFormResult = {
  ok: boolean;
  /** true when the message reached the studio inbox through the webhook */
  delivered: boolean;
  error?: string;
};

/**
 * Posts the inquiry to the studio's Make webhook (CONTACT_WEBHOOK_URL in Vercel).
 * When the variable is not set, returns delivered:false so the form falls back
 * to opening the visitor's email client, which is the behavior the site had before.
 */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactFormResult> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) {
    return { ok: true, delivered: false };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "immersivestudiocda.com/contact",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      return { ok: false, delivered: false, error: `The inbox responded ${res.status}.` };
    }
    return { ok: true, delivered: true };
  } catch {
    return { ok: false, delivered: false, error: "We couldn't reach the studio inbox. Please try again." };
  }
}
