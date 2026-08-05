import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/* Everything is crawlable — including AI/answer-engine bots (AEO):
   the wildcard covers GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://thewayforward.in/sitemap.xml",
  };
}
