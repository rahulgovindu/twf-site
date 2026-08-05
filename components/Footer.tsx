const QUICK_LINKS = [
  { href: "#to-whom", label: "Who it's for" },
  { href: "#why", label: "Why this platform" },
  { href: "#letter", label: "For parents" },
  { href: "#portal-teaser", label: "What's coming" },
  { href: "#call-cta", label: "Book a call" },
];

const HELPLINES = [
  { name: "Tele-MANAS", number: "14416" },
  { name: "iCall (TISS)", number: "9152987821" },
  { name: "Vandrevala Foundation", number: "1860-2662-345" },
];

export default function Footer() {
  return (
    <footer className="fade-grey border-t border-hairline pt-16 pb-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-ink-dim uppercase">
              About
            </h4>
            <p className="text-sm leading-relaxed text-ink-dim">
              The Way Forward is a free platform for UPSC and government exam
              aspirants who are rebuilding their careers. Built by someone who
              has been there.
            </p>
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
          <p>An exam is not life.</p>
        </div>
      </div>
    </footer>
  );
}
