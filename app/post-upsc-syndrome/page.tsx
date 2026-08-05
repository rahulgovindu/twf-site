import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "POST-UPSC Syndrome — what it is and why it has a name",
  description:
    "POST-UPSC Syndrome: the phase after your final attempts when you must rebuild identity, career and confidence. What it feels like, why it hits so hard, and what helps.",
  alternates: { canonical: "/post-upsc-syndrome/" },
  openGraph: {
    title: "POST-UPSC Syndrome — what it is and why it has a name",
    description:
      "The phase after your final attempts, when you must rebuild identity, career and confidence. What it feels like, why it hits so hard, and what helps.",
    url: "https://thewayforward.in/post-upsc-syndrome/",
    type: "article",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://thewayforward.in/post-upsc-syndrome/#article",
      headline: "POST-UPSC Syndrome — what it is and why it has a name",
      url: "https://thewayforward.in/post-upsc-syndrome/",
      inLanguage: "en-IN",
      author: { "@type": "Person", name: "Rahul Govindu" },
      publisher: {
        "@type": "Organization",
        name: "The Way Forward",
        url: "https://thewayforward.in",
      },
      about: {
        "@type": "DefinedTerm",
        name: "POST-UPSC Syndrome",
        description:
          "The phase after a UPSC aspirant's final attempts when they realise the dream may never come true — and must rebuild their identity, career and confidence, often carrying a multi-year gap. A lived experience, not a medical diagnosis.",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thewayforward.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "POST-UPSC Syndrome",
          item: "https://thewayforward.in/post-upsc-syndrome/",
        },
      ],
    },
  ],
};

const SIGNS = [
  {
    title: "Identity loss",
    body: "“Aspirant” was not what you did — it was who you were. When the attempts end, the identity ends with them, and nothing has been built to replace it.",
  },
  {
    title: "Reliving the result",
    body: "The mind returns to the moment of the result again and again, as if replaying it could change it.",
  },
  {
    title: "Social withdrawal",
    body: "Calls go unanswered. Weddings and reunions get skipped. Every “what next?” feels like a verdict being read out.",
  },
  {
    title: "Career paralysis",
    body: "A multi-year gap stares back from the resume. Applying anywhere feels like starting from zero — so applying stops.",
  },
  {
    title: "The “failed at life” feeling",
    body: "One exam's result quietly expands until it covers everything — years of discipline, knowledge, and character get counted as nothing.",
  },
];

const HELPS = [
  {
    title: "Name it",
    body: "What you are going through is a phase with a shape and an end — not a verdict on your worth. Naming it is the first step out of it.",
  },
  {
    title: "Give it time",
    body: "Acceptance does not arrive on a schedule. It took our founder six months to make peace with it. Let it take the time it takes.",
  },
  {
    title: "Keep your people close",
    body: "The friends and family who stand by you now are the pillars of your restart. Let them in.",
  },
  {
    title: "Take professional support",
    body: "If the weight will not lift — anxiety, depression, hopelessness — please reach out. Tele-MANAS (14416) is free, 24×7, run by the Government of India. iCall (TISS): 9152987821.",
  },
  {
    title: "Then, rebuild",
    body: "The discipline that carried you through preparation survives the result. When you are ready, it becomes the foundation of whatever you build next.",
  },
];

export default function PostUpscSyndrome() {
  return (
    <>
      <Script
        id="pus-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            It has a name
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display shine mb-8 text-4xl sm:text-5xl">
            POST-UPSC Syndrome
          </h1>
        </Reveal>

        {/* The definition — the quotable card */}
        <Reveal>
          <div className="surface-gradient relative mb-14 rounded-[2px] border border-line p-7 sm:p-9">
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-0 w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #ffa05c, #ff7a1a 50%, rgba(255,122,26,0.2))",
              }}
            />
            <blockquote>
              <p className="leading-relaxed text-ink">
                <span className="mb-2 block text-sm font-semibold tracking-wide text-accent uppercase">
                  Definition
                </span>
                the phase after your final attempts when you realise the dream
                may never come true — and you must rebuild your identity,
                career and confidence, often carrying a multi-year gap.
              </p>
            </blockquote>
            <p className="mt-4 text-sm text-ink-dim">
              A lived experience, not a medical diagnosis.
            </p>
          </div>
        </Reveal>

        {/* First-person account */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            What it feels like
          </h2>
        </Reveal>
        <Reveal>
          <div className="fade-warm mb-14 rounded-[2px] border border-line p-7 sm:p-9">
            <p className="font-display mb-5 text-[1.06rem] leading-[1.85] text-ink">
              The moment I realised I had failed, emptiness filled my mind. I
              didn&rsquo;t know how to react. For almost thirty days I lived
              inside that one moment — nothing else came in; I just relived
              it over and over.
            </p>
            <p className="font-display mb-5 text-[1.06rem] leading-[1.85] text-ink">
              Failed results, broken promises, silent cries, and loneliness.
              With every passing attempt I watched trust thin out — friends,
              family, and finally my own. And the hardest part: this suffering
              was very personal. I found no one who could address this phase
              of my life.
            </p>
            <p className="font-display text-[1.06rem] leading-[1.85] text-ink-strong">
              — Rahul Govindu, founder
            </p>
          </div>
        </Reveal>

        {/* The signs */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            How it shows up
          </h2>
        </Reveal>
        <div className="mb-14 space-y-4">
          {SIGNS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="surface-gradient rounded-[2px] border border-line p-6">
                <h3 className="mb-1.5 font-medium text-ink-strong">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-dim">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why it hits so hard */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            Why it hits so hard
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-4 leading-relaxed text-ink">
            Because everything was staked on one outcome. Fewer than 1 in 500
            who write the exam make the final list — and even among the
            roughly 1,000 selected each year, only around 180 become IAS
            officers, the service most aspirants actually dream of. A serious
            attempt costs years — six or more for many, at eight to ten
            hours a day, mastering a syllabus that spans seventeen
            general-studies subjects, hundreds of thinkers, and a thousand
            news cycles. That is over seventeen thousand hours of disciplined
            work, often through your entire twenties, with family hopes
            riding on every attempt.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-14 leading-relaxed text-ink-dim">
            When the system returns a single &ldquo;no&rdquo; to that much
            devotion, the mind has no category for it. So it loops. That loop
            is the syndrome — and it can be walked out of.
          </p>
        </Reveal>

        {/* What helps */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">What helps</h2>
        </Reveal>
        <ol className="mb-16 space-y-5">
          {HELPS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.05}>
              <li className="flex items-baseline gap-4">
                <span className="text-sm font-medium tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="mb-1 block text-ink-strong">
                    {h.title}
                  </strong>
                  <span className="text-sm leading-relaxed text-ink-dim">
                    {h.body}
                  </span>
                </span>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* CTA */}
        <Reveal>
          <div
            className="rounded-[2px] border p-7 text-center sm:p-9"
            style={{
              borderColor: "rgba(255,122,26,0.25)",
              background:
                "radial-gradient(ellipse 90% 120% at 50% 120%, rgba(255,122,26,0.12), rgba(255,122,26,0.03) 55%, transparent 80%)",
            }}
          >
            <h2 className="font-display shine mb-3 text-2xl sm:text-3xl">
              You don&rsquo;t have to walk out of it alone.
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-ink-dim">
              A free one-on-one call — no pitch, no cost. Or one honest email
              a week while you find your footing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/#call-cta" className="btn btn-primary">
                Book a free call
              </a>
              <a href="/#newsletter" className="btn btn-ghost">
                Join the digest
              </a>
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
