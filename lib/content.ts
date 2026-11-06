/**
 * The site's content index — one entry per indexable page.
 *
 * Single source of truth for the sitemap, the "read next" blocks and
 * llms.txt, so a new page can never be published and then silently left out
 * of internal linking or the sitemap (the most common way content pages end
 * up orphaned and uncrawled).
 *
 * `updated` is a hand-maintained date, not build time: a sitemap that stamps
 * every URL with "today" on every deploy teaches crawlers to ignore the
 * signal entirely.
 */

export type Page = {
  path: string;
  /** Short label used in navigation and "read next" cards. */
  label: string;
  /** One line describing what the reader gets. Used in cards and llms.txt. */
  blurb: string;
  published: string;
  updated: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  /** Long-form reads that should cross-link to each other. */
  isArticle: boolean;
};

export const PAGES: Page[] = [
  {
    path: "/",
    label: "Home",
    blurb:
      "What The Way Forward is, who it is for, and the odds nobody states plainly.",
    published: "2026-08-09",
    updated: "2026-11-05",
    priority: 1,
    changeFrequency: "weekly",
    isArticle: false,
  },
  {
    path: "/post-upsc-syndrome/",
    label: "POST-UPSC Syndrome",
    blurb:
      "The phase after your final attempt — what it feels like, why it hits so hard, and what helps.",
    published: "2026-08-09",
    updated: "2026-08-22",
    priority: 0.9,
    changeFrequency: "monthly",
    isArticle: true,
  },
  {
    path: "/personalities-who-failed-upsc/",
    label: "Personalities who failed UPSC",
    blurb:
      "Source-verified profiles of people who wrote the exam, never made the list, and built remarkable lives — plus the widely repeated names that are myths.",
    published: "2026-08-22",
    updated: "2026-08-22",
    priority: 0.9,
    changeFrequency: "monthly",
    isArticle: true,
  },
  {
    path: "/ten-things-upsc-taught-me/",
    label: "Ten things UPSC taught me",
    blurb:
      "What six years and 17,500 hours of preparation actually deposited in you — and exactly how life makes you forget it.",
    published: "2026-08-22",
    updated: "2026-08-22",
    priority: 0.8,
    changeFrequency: "monthly",
    isArticle: true,
  },
  {
    path: "/the-100-reset/",
    label: "The 100 Reset",
    blurb:
      "100 small tasks across 10 areas of life, for the days when motivation isn't coming. Borrow momentum instead of waiting for it.",
    published: "2026-08-22",
    updated: "2026-08-22",
    priority: 0.8,
    changeFrequency: "monthly",
    isArticle: true,
  },
  {
    path: "/about/",
    label: "About",
    blurb:
      "What The Way Forward is, who founded it, and how it checks what it publishes.",
    published: "2026-11-05",
    updated: "2026-11-05",
    priority: 0.7,
    changeFrequency: "monthly",
    isArticle: false,
  },
  {
    path: "/privacy/",
    label: "Privacy Policy",
    blurb: "What we collect, why, and how to have it removed.",
    published: "2026-08-09",
    updated: "2026-08-09",
    priority: 0.2,
    changeFrequency: "yearly",
    isArticle: false,
  },
  {
    path: "/disclaimer/",
    label: "Disclaimer",
    blurb: "What this site is, what it is not, and how to read what's on it.",
    published: "2026-08-09",
    updated: "2026-08-09",
    priority: 0.2,
    changeFrequency: "yearly",
    isArticle: false,
  },
];

export const byPath = (path: string): Page => {
  const page = PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`Unknown page in content index: ${path}`);
  return page;
};

/** Other long-form reads, for "read next" blocks. */
export const otherArticles = (currentPath: string): Page[] =>
  PAGES.filter((p) => p.isArticle && p.path !== currentPath);
