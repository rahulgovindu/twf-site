import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Page not found — The Way Forward" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const links = PAGES.filter((p) => p.path !== "/" && p.priority >= 0.8);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="eyebrow mb-6">
          <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          404
        </p>
        <h1 className="font-display shine mb-5 text-4xl sm:text-5xl">
          This page isn&rsquo;t here.
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-ink-dim">
          The link may be old, or the page may have moved. Everything on the
          site is one click away below.
        </p>

        <ul className="divide-y divide-hairline border-y border-hairline">
          {links.map((p) => (
            <li key={p.path}>
              <a
                href={p.path}
                className="group block py-5 transition-colors hover:bg-surface/40"
              >
                <span className="block font-medium text-ink-strong transition-colors group-hover:text-accent-soft">
                  {p.label}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-ink-dim">
                  {p.blurb}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/" className="btn btn-primary">
            Go to the homepage
          </a>
          <a href="/#call-cta" className="btn btn-ghost">
            Book a free call
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
