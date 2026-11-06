import Reveal from "@/components/Reveal";
import { PAGES } from "@/lib/content";

/**
 * The homepage's link surface into every long-form page.
 *
 * Content pages that are only reachable from the sitemap get crawled late and
 * ranked worse; a prominent link from the strongest page on the domain is the
 * cheapest fix there is. Generated from the content index so a new page is
 * linked the moment it's added.
 */
export default function Library() {
  const reads = PAGES.filter((p) => p.isArticle);

  return (
    <section id="library" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            Free to read
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-6 text-4xl sm:text-5xl">
            Start with what you need today.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-12 max-w-2xl leading-relaxed text-ink-dim">
            No sign-up, no paywall, nothing to buy. Written for the phase
            you&rsquo;re actually in.
          </p>
        </Reveal>

        <ul className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
          {reads.map((p, i) => (
            <li key={p.path} className="surface-gradient h-full">
              <Reveal delay={i * 0.05} className="h-full">
                <a href={p.path} className="group flex h-full flex-col p-7">
                  <h3 className="font-display shine mb-3 text-xl">{p.label}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-dim">
                    {p.blurb}
                  </p>
                  <span className="text-sm text-accent-soft transition-colors group-hover:text-accent">
                    Read →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
