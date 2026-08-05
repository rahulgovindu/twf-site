"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#to-whom", label: "Who it's for" },
  { href: "/#why", label: "Why" },
  { href: "/#letter", label: "For parents" },
  { href: "/#portal-teaser", label: "What's coming" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-hairline"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-[4.25rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/twf-logo.jpg"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display shine text-lg whitespace-nowrap">
            The Way Forward
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm whitespace-nowrap text-ink-dim transition-colors hover:text-ink-strong"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#call-cta"
            className="btn btn-primary !px-5 !py-2.5 text-sm whitespace-nowrap"
          >
            Book a free call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-hairline bg-surface/95 backdrop-blur-xl px-5 py-6 md:hidden"
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-base text-ink transition-colors hover:text-ink-strong"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/#call-cta"
                className="btn btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Book a free call
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
