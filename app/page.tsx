import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ToWhom from "@/components/sections/ToWhom";
import Why from "@/components/sections/Why";
import Support from "@/components/sections/Support";
import Letter from "@/components/sections/Letter";
import Founder from "@/components/sections/Founder";
import AfterExam from "@/components/sections/AfterExam";
import PortalTeaser from "@/components/sections/PortalTeaser";
import ShareStory from "@/components/sections/ShareStory";
import CallCta from "@/components/sections/CallCta";
import Newsletter from "@/components/sections/Newsletter";

/* FAQ answers must stay in sync with the FAQ section in components/sections/Why.tsx */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "The Way Forward",
      url: "https://thewayforward.in",
      logo: "https://thewayforward.in/twf-logo.jpg",
      description:
        "A free platform for UPSC and government exam aspirants rebuilding their careers — stories, opportunities, skills, and support.",
      founder: { "@type": "Person", name: "Rahul Govindu" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is POST-UPSC Syndrome?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "POST-UPSC Syndrome: the phase after your final attempts when you realise the dream may never come true — and you must rebuild your identity, career and confidence, often carrying a multi-year gap. It is a lived experience, not a medical diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "What are the actual odds of clearing UPSC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fewer than 1 in 500 who write the exam make the final list. Roughly 10 lakh apply each year, about 5 lakh appear, and around 1,000 are selected — a success rate of 0.1–0.2%.",
          },
        },
        {
          "@type": "Question",
          name: "Is The Way Forward a coaching institute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Way Forward is not coaching, not therapy, and not a job consultancy. It is a platform for aspirants whose attempts are over — stories of people who rebuilt, career opportunities, skills, and support to regain confidence.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="twf-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />
      <main>
        <Hero />
        <ToWhom />
        <Why />
        <Support />
        <Letter />
        <Founder />
        <AfterExam />
        <PortalTeaser />
        <ShareStory />
        <CallCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
