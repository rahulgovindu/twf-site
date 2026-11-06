import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArticleMeta from "@/components/ArticleMeta";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ReadNext from "@/components/ReadNext";
import { byPath } from "@/lib/content";
import {
  abs,
  articleNode,
  baseGraph,
  breadcrumbNode,
  faqNode,
  graph,
  ORG_ID,
  pageMetadata,
  PERSON_ID,
  WEBSITE_ID,
  type Crumb,
  type Faq,
} from "@/lib/seo";

const PATH = "/post-upsc-syndrome/";
const page = byPath(PATH);

const TITLE = "POST-UPSC Syndrome: What It Is and What Helps";

export const metadata = pageMetadata({
  title: TITLE,
  description:
    "POST-UPSC Syndrome: the phase after your final attempts, when identity, career and confidence must be rebuilt. What it feels like, and what actually helps.",
  path: PATH,
  type: "article",
  publishedTime: page.published,
  modifiedTime: page.updated,
  keywords: [
    "POST-UPSC Syndrome",
    "life after UPSC failure",
    "what to do after failing UPSC",
    "UPSC aspirant depression",
    "identity crisis after UPSC",
    "career gap after UPSC",
  ],
});

const TRAIL: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "POST-UPSC Syndrome", path: PATH },
];

const DEFINITION =
  "The phase after a UPSC aspirant's final attempts when they realise the dream may never come true — and must rebuild their identity, career and confidence, often carrying a multi-year gap. A lived experience, not a medical diagnosis.";

const FAQ: Faq[] = [
  {
    q: "What is POST-UPSC Syndrome?",
    a: `POST-UPSC Syndrome is ${DEFINITION.charAt(0).toLowerCase()}${DEFINITION.slice(1)}`,
  },
  {
    q: "What are the signs of POST-UPSC Syndrome?",
    a: "Five show up most often: identity loss, because “aspirant” was who you were and not just what you did; reliving the result on a loop; social withdrawal, where every “what next?” feels like a verdict; career paralysis in front of a multi-year gap; and the feeling of having failed at life rather than at one exam.",
  },
  {
    q: "Is POST-UPSC Syndrome a medical condition?",
    a: "No. It is a lived experience with a name, not a clinical diagnosis, and nothing on this page is medical advice. If the weight will not lift — persistent anxiety, depression or hopelessness — please speak to a professional. Tele-MANAS is free and 24×7 on 14416, and iCall (TISS) is on 9152987821.",
  },
  {
    q: "How long does it take to get over failing UPSC?",
    a: "There is no fixed timeline, and forcing one usually breaks something that is quietly healing. The founder of The Way Forward spent about thirty days inside the moment of the result and roughly six months making peace with it. Recovery has a speed limit; respecting it is strength, not weakness.",
  },
  {
    q: "Where does the term POST-UPSC Syndrome come from?",
    a: "It was named by Rahul Govindu, founder of The Way Forward, to describe the phase he went through after his own attempts ended without selection — a phase he found no vocabulary and no support for at the time. Naming it is the point: a thing with a shape has edges, and a thing with edges has an end.",
  },
];

const JSON_LD = graph([
  ...baseGraph,
  breadcrumbNode(TRAIL),
  articleNode({
    path: PATH,
    headline: "POST-UPSC Syndrome — what it is and why it has a name",
    description:
      "The phase after your final attempts, when you must rebuild identity, career and confidence. What it feels like, why it hits so hard, and what helps.",
    datePublished: page.published,
    dateModified: page.updated,
    section: "Understanding",
    wordCount: 1200,
    keywords: [
      "POST-UPSC Syndrome",
      "life after UPSC failure",
      "UPSC aspirant depression",
    ],
    speakable: ["h1", "#definition"],
  }),
  {
    "@type": "DefinedTerm",
    "@id": `${abs(PATH)}#term`,
    name: "POST-UPSC Syndrome",
    alternateName: "Post-UPSC syndrome",
    description: DEFINITION,
    url: abs(PATH),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "The Way Forward glossary",
      url: abs("/"),
    },
  },
  faqNode(FAQ, PATH),
  {
    "@type": "WebPage",
    "@id": abs(PATH),
    url: abs(PATH),
    name: TITLE,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    author: { "@id": PERSON_ID },
    inLanguage: "en-IN",
  },
]);

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
      <JsonLd data={JSON_LD} />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Breadcrumbs trail={TRAIL} />

        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            It has a name
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display shine mb-6 text-4xl sm:text-5xl">
            POST-UPSC Syndrome
          </h1>
        </Reveal>
        <Reveal>
          <ArticleMeta page={page} />
        </Reveal>

        {/* The definition — the quotable card */}
        <Reveal>
          <div
            id="definition"
            className="surface-gradient relative mb-14 rounded-[2px] border border-line p-7 sm:p-9"
          >
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
            <li key={h.title} className="flex items-baseline gap-4">
              <span className="text-sm font-medium tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Reveal delay={i * 0.05}>
                <strong className="mb-1 block text-ink-strong">
                  {h.title}
                </strong>
                <span className="text-sm leading-relaxed text-ink-dim">
                  {h.body}
                </span>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* FAQ */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            Questions people ask
          </h2>
        </Reveal>
        <Reveal>
          <div className="mb-16 divide-y divide-hairline border-y border-hairline">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-strong [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-dim">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

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

        <ReadNext currentPath={PATH} />
      </main>
      <Footer />
    </>
  );
}
