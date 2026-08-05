/**
 * Central site config — contact + social links.
 * Fill in real values; anything left empty ("") is automatically hidden
 * in the UI, so placeholders never ship by accident.
 */
export const SITE = {
  email: "contact@thewayforward.in",

  /** Digits only, with country code, e.g. "919876543210". Empty = hidden. */
  whatsappNumber: "",
  whatsappMessage:
    "Hi Rahul, I found The Way Forward and would like to talk.",

  /** Empty string = icon not rendered. */
  socials: {
    youtube: "",
    instagram: "",
    x: "",
    linkedin: "",
  },
};

export function whatsappLink(): string | null {
  if (!/^\d{10,15}$/.test(SITE.whatsappNumber)) return null;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
}
