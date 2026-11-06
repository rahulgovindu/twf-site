import type { Crumb } from "@/lib/seo";

/**
 * Visible breadcrumb trail. The matching BreadcrumbList schema is emitted by
 * each page's JSON-LD graph — Google only shows breadcrumb SERP rich results
 * when the markup is backed by a real on-page trail.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-dim">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {c.name}
                </span>
              ) : (
                <a
                  href={c.path}
                  className="transition-colors hover:text-ink-strong"
                >
                  {c.name}
                </a>
              )}
              {!last && (
                <span aria-hidden className="text-line-strong">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
