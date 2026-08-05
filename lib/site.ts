/**
 * Central site config — contact + social links.
 * Fill in real values; anything left empty ("") is automatically hidden
 * in the UI, so placeholders never ship by accident.
 */
export const SITE = {
  email: "info@thewayforward.in",

  /** Digits only, with country code, e.g. "919876543210". Empty = hidden. */
  whatsappNumber: "918985308312",
  whatsappMessage:
    "Hi Rahul, I found The Way Forward and would like to talk.",

  /** Empty string = icon not rendered. */
  socials: {
    youtube: "https://www.youtube.com/@rahulgovindu",
    instagram: "https://www.instagram.com/rahulgovindu/",
    x: "https://x.com/rahulgovindu49",
    linkedin: "https://www.linkedin.com/in/rahulgovindu/",
  },
};

export function whatsappLink(message?: string): string | null {
  if (!/^\d{10,15}$/.test(SITE.whatsappNumber)) return null;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message ?? SITE.whatsappMessage)}`;
}
