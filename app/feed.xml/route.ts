import { PAGES } from "@/lib/content";
import { SITE_NAME, SITE_URL, abs } from "@/lib/seo";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const items = PAGES.filter((page) => page.isArticle)
    .sort((a, b) => b.published.localeCompare(a.published))
    .map(
      (page) => `    <item>
      <title>${escapeXml(page.label)}</title>
      <link>${abs(page.path)}</link>
      <guid isPermaLink="true">${abs(page.path)}</guid>
      <description>${escapeXml(page.blurb)}</description>
      <pubDate>${new Date(page.published).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <description>Writing for UPSC and government exam aspirants rebuilding their careers.</description>
    <language>en-IN</language>
    <atom:link href="${abs("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
