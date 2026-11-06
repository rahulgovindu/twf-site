import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ToWhom from "@/components/sections/ToWhom";
import Why from "@/components/sections/Why";
import Support from "@/components/sections/Support";
import Letter from "@/components/sections/Letter";
import Founder from "@/components/sections/Founder";
import AfterExam from "@/components/sections/AfterExam";
import Library from "@/components/sections/Library";
import PortalTeaser from "@/components/sections/PortalTeaser";
import ShareStory from "@/components/sections/ShareStory";
import CallCta from "@/components/sections/CallCta";
import Newsletter from "@/components/sections/Newsletter";
import { HOME_FAQ } from "@/lib/faq";
import {
  abs,
  baseGraph,
  faqNode,
  graph,
  ORG_ID,
  pageMetadata,
  WEBSITE_ID,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Life After UPSC: Rebuild Your Career | The Way Forward",
  description:
    "For UPSC and government exam aspirants whose attempts are over. Understand POST-UPSC Syndrome, read people who rebuilt, and find the way forward — free.",
  path: "/",
  keywords: [
    "life after UPSC",
    "POST-UPSC Syndrome",
    "UPSC failure what next",
    "what to do after failing UPSC",
    "career after UPSC preparation",
    "government exam career transition",
    "ex-UPSC aspirant jobs",
  ],
});

/* The FAQ answers here are the same objects rendered in the Why section —
   see lib/faq.ts. Marked-up answers must match visible ones. */
const JSON_LD = graph([
  ...baseGraph,
  faqNode(HOME_FAQ, "/"),
  {
    "@type": "WebPage",
    "@id": abs("/"),
    url: abs("/"),
    name: "Life After UPSC: Rebuild Your Career",
    description:
      "A platform for UPSC and government exam aspirants rebuilding their careers — stories, opportunities, skills, and support.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: abs("/og.jpg"),
      width: 1200,
      height: 630,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#why h2", "#why p"],
    },
  },
  {
    "@type": "DefinedTerm",
    "@id": `${abs("/post-upsc-syndrome/")}#term`,
    name: "POST-UPSC Syndrome",
    description:
      "The phase after a UPSC aspirant's final attempts when they realise the dream may never come true — and must rebuild their identity, career and confidence, often carrying a multi-year gap. A lived experience, not a medical diagnosis.",
    url: abs("/post-upsc-syndrome/"),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "The Way Forward glossary",
      url: abs("/"),
    },
  },
]);

export default function Home() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Header />
      <main>
        <Hero />
        <ToWhom />
        <Why />
        <Support />
        <Letter />
        <Founder />
        <AfterExam />
        <Library />
        <PortalTeaser />
        <ShareStory />
        <CallCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
