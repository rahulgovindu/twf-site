import { SITE, whatsappLink } from "@/lib/site";

const QUICK_LINKS = [
  { href: "/#to-whom", label: "Who it's for" },
  { href: "/post-upsc-syndrome/", label: "POST-UPSC Syndrome" },
  { href: "/personalities-who-failed-upsc/", label: "Personalities who failed UPSC" },
  { href: "/ten-things-upsc-taught-me/", label: "Ten things UPSC taught me" },
  { href: "/the-100-reset/", label: "The 100 Reset" },
  { href: "/about/", label: "About" },
  { href: "/#letter", label: "For parents" },
  { href: "/#call-cta", label: "Book a call" },
];

const HELPLINES = [
  { name: "Tele-MANAS", number: "14416" },
  { name: "iCall (TISS)", number: "9152987821" },
  { name: "Vandrevala Foundation", number: "9999-666-555" },
];

const SOCIAL_ICONS: Record<string, { label: string; path: string }> = {
  youtube: {
    label: "YouTube",
    path: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.2ZM9.8 15.3V8.7l6 3.3-6 3.3Z",
  },
  instagram: {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.5-.3-1.8a2 2 0 0 0-.7-1.1 2 2 0 0 0-1.1-.7c-.3-.1-.7-.3-1.8-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm5.2-9.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  x: {
    label: "X",
    path: "M18.2 2.3h3.3l-7.3 8.3 8.6 11.1h-6.7l-5.3-6.8-6 6.8H1.5l7.8-8.9L1 2.3h6.9l4.7 6.2 5.6-6.2Zm-1.2 17.5h1.8L7 4.1H5l12 15.7Z",
  },
  linkedin: {
    label: "LinkedIn",
    path: "M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.4H5.7V9.7h2.6v8.7ZM7 8.6a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1Zm11.4 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2c.3-.7 1.2-1.4 2.5-1.4 2.6 0 3.1 1.7 3.1 4v4.9Z",
  },
};

export default function Footer() {
  const socialEntries = Object.entries(SITE.socials).filter(([, url]) => url);
  const wa = whatsappLink();

  return (
    <footer className="fade-grey border-t border-hairline pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-ink-dim uppercase">
              About
            </h4>
            <p className="text-sm leading-relaxed text-ink-dim">
              The Way Forward is a platform for UPSC and government exam
              aspirants who are rebuilding their careers. Built by someone who
              has been there.
            </p>
            {(socialEntries.length > 0 || wa) && (
              <div className="mt-5 flex items-center gap-4">
                {socialEntries.map(([key, url]) => {
                  const icon = SOCIAL_ICONS[key];
                  if (!icon) return null;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={icon.label}
                      className="text-ink-dim transition-colors hover:text-ink-strong"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d={icon.path} />
                      </svg>
                    </a>
                  );
                })}
                {wa && (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-ink-dim transition-colors hover:text-ink-strong"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5L9.7 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3Z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-ink-dim uppercase">
              Quick links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink transition-colors hover:text-ink-strong"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-ink-dim uppercase">
              Helpline
            </h4>
            <div className="space-y-3 border-l-2 border-accent/60 pl-4">
              {HELPLINES.map((h) => (
                <p key={h.name} className="text-sm">
                  <strong className="block text-ink-strong">{h.name}</strong>
                  <a
                    href={`tel:${h.number.replace(/-/g, "")}`}
                    className="text-accent-soft transition-colors hover:text-accent"
                  >
                    {h.number}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8 text-xs text-ink-dim">
          <p>
            © {new Date().getFullYear()} The Way Forward. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy/" className="transition-colors hover:text-ink-strong">
              Privacy Policy
            </a>
            <a href="/disclaimer/" className="transition-colors hover:text-ink-strong">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
