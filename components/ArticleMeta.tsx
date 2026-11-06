import type { Page } from "@/lib/content";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

/**
 * Visible author and dates for a long-form page. Matches the Article schema,
 * so people and crawlers see the same authorship and freshness details.
 */
export default function ArticleMeta({ page }: { page: Page }) {
  return (
    <p className="mb-10 text-sm leading-relaxed text-ink-dim">
      By{" "}
      <a
        href="/about/"
        rel="author"
        className="text-accent-soft transition-colors hover:text-accent"
      >
        Rahul Govindu
      </a>
      , founder of The Way Forward ·{" "}
      <time dateTime={page.published}>
        Published {formatDate(page.published)}
      </time>
      {page.updated !== page.published && (
        <>
          {" "}
          · <time dateTime={page.updated}>Updated {formatDate(page.updated)}</time>
        </>
      )}
    </p>
  );
}
