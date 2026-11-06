import { otherArticles } from "@/lib/content";

/**
 * Cross-links every long read to every other one. Deliberately generated from
 * the content index rather than hand-written per page — internal links are the
 * main way crawl equity reaches new pages, and hand-maintained lists rot the
 * moment a page is added.
 */
export default function ReadNext({ currentPath }: { currentPath: string }) {
  const items = otherArticles(currentPath);
  if (!items.length) return null;

  return (
    <aside className="mt-20 border-t border-hairline pt-10">
      <h2 className="mb-6 text-xs font-semibold tracking-[0.18em] text-ink-dim uppercase">
        Read next
      </h2>
      <ul className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
        {items.map((p) => (
          <li key={p.path} className="surface-gradient">
            <a href={p.path} className="group block h-full p-6">
              <span className="font-display shine mb-2 block text-lg">
                {p.label}
              </span>
              <span className="block text-sm leading-relaxed text-ink-dim">
                {p.blurb}
              </span>
              <span className="mt-4 inline-block text-sm text-accent-soft transition-colors group-hover:text-accent">
                Read →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
