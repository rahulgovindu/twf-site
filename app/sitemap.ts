import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thewayforward.in";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/post-upsc-syndrome/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/disclaimer/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
