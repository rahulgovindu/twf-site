import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Central SEO / AEO layer.
 *
 * Two jobs:
 *  1. `pageMetadata()` — one consistent <head> per page (canonical, OG,
 *     Twitter, snippet directives).
 *  2. Schema builders — a single connected JSON-LD graph. Every page reuses
 *     the same @id values for the Organization, WebSite and Person nodes, so
 *     search and answer engines resolve them to one entity instead of
 *     re-declaring an unrelated organisation on every URL.
 *
 * Anything emitted here must be renderable on the server: static export means
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) mostly do NOT run JavaScript,
 * so structured data has to exist in the shipped HTML, not in a client script.
 */

export const SITE_URL = "https://thewayforward.in";
export const SITE_NAME = "The Way Forward";
export const LOCALE = "en_IN";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#rahul-govindu`;
export const LOGO_ID = `${SITE_URL}/#logo`;

/** Absolute URL for a site-relative path. */
export function abs(path: string): string {
  return new URL(path, SITE_URL).toString();
}

const socialProfiles = Object.values(SITE.socials).filter(Boolean);

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

type PageMetaInput = {
  /** Full <title>. Keep under ~60 characters so it survives SERP truncation. */
  title: string;
  /** 140–160 characters. This is the snippet users actually read. */
  description: string;
  /** Site-relative path with trailing slash, e.g. "/post-upsc-syndrome/". */
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Site-relative image path. Defaults to the shared OG card. */
  image?: string;
  imageAlt?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  image = "/og.jpg",
  imageAlt = "The Way Forward — life beyond the exam",
}: PageMetaInput): Metadata {
  return {
    // absolute: each page owns its full title so we can keep every one
    // under the SERP truncation limit instead of inheriting a suffix.
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: path,
      types: { "application/rss+xml": "/feed.xml" },
    },
    openGraph: {
      title,
      description,
      url: abs(path),
      siteName: SITE_NAME,
      locale: LOCALE,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: ["Rahul Govindu"],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@rahulgovindu49",
      site: "@rahulgovindu49",
    },
  };
}

/* ------------------------------------------------------------------ */
/* Schema graph nodes                                                  */
/* ------------------------------------------------------------------ */

export const organizationNode = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "TWF",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: abs("/twf-logo-512.jpg"),
    contentUrl: abs("/twf-logo-512.jpg"),
    width: 512,
    height: 512,
    caption: SITE_NAME,
  },
  image: { "@id": LOGO_ID },
  description:
    "A free platform for UPSC and government exam aspirants rebuilding their careers — stories, opportunities, skills, and support.",
  slogan: "The world only counts your hard work when you succeed. We count it anyway.",
  foundingDate: "2026",
  founder: { "@id": PERSON_ID },
  knowsAbout: [
    "Life after UPSC",
    "POST-UPSC Syndrome",
    "Career transition for civil services aspirants",
    "Rebuilding after competitive exam failure",
  ],
  areaServed: { "@type": "Country", name: "India" },
  sameAs: socialProfiles,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Support",
    email: SITE.email,
    availableLanguage: ["en", "hi", "te"],
    areaServed: "IN",
  },
};

export const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Rahul Govindu",
  url: abs("/about/"),
  image: abs("/rahul-govindu.jpg"),
  jobTitle: "Founder",
  description:
    "Founder & CEO of Pailam & Pailam Bridge, and founder of The Way Forward. Six-plus years and 17,500 hours as a UPSC aspirant; never selected. Now an agri-exporter and independent full-stack developer who writes about rebuilding after the exam.",
  worksFor: [
    { "@id": ORG_ID },
    {
      "@type": "Organization",
      name: "Pailam Healthcare Technologies Private Limited",
      url: "https://pailam.in",
    },
  ],
  nationality: { "@type": "Country", name: "India" },
  knowsAbout: [
    "POST-UPSC Syndrome",
    "UPSC Civil Services Examination",
    "Career transition after competitive exams",
    "Agricultural exports",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "JNTU Hyderabad" },
    { "@type": "CollegeOrUniversity", name: "Indira Gandhi National Open University" },
  ],
  sameAs: socialProfiles,
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "A platform for UPSC and government exam aspirants rebuilding their careers.",
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

/** The three entity nodes every page should carry. */
export const baseGraph = [organizationNode, websiteNode, personNode];

/* ------------------------------------------------------------------ */
/* Per-page node builders                                              */
/* ------------------------------------------------------------------ */

export type Crumb = { name: string; path: string };

export function breadcrumbNode(trail: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(trail[trail.length - 1].path)}#breadcrumb`,
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export type Faq = { q: string; a: string };

export function faqNode(faqs: Faq[], path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

type ArticleInput = {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  /** Rough reading time in minutes, surfaced to answer engines. */
  wordCount?: number;
  section?: string;
  keywords?: string[];
  image?: string;
  /** Selector list for voice/answer surfaces. */
  speakable?: string[];
};

export function articleNode({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  wordCount,
  section,
  keywords,
  image = "/og.jpg",
  speakable,
}: ArticleInput) {
  return {
    "@type": "Article",
    "@id": `${abs(path)}#article`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: abs(path),
    url: abs(path),
    headline,
    description,
    inLanguage: "en-IN",
    datePublished,
    dateModified,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    image: {
      "@type": "ImageObject",
      url: abs(image),
      width: 1200,
      height: 630,
    },
    ...(wordCount ? { wordCount } : {}),
    ...(section ? { articleSection: section } : {}),
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakable,
          },
        }
      : {}),
  };
}

/** Wraps nodes in a single @graph document. */
export function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
