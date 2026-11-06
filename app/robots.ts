import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/* Answer-engine crawlers named explicitly rather than left to the wildcard.
   Several of them (Google-Extended, Applebot-Extended, ClaudeBot…) are
   routinely blocked by default hosting configs and by publishers copying
   each other's robots.txt — an explicit Allow is a standing statement that
   this site wants to be quotable in AI answers, which is where a growing
   share of "life after UPSC" questions now get asked. */
const ANSWER_ENGINES = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "DuckDuckBot",
  "YandexBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...ANSWER_ENGINES.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
