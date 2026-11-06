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
  type Crumb,
  type Faq,
} from "@/lib/seo";

const PATH = "/personalities-who-failed-upsc/";
const page = byPath(PATH);

const TITLE = "Personalities Who Failed UPSC — And Rebuilt (Verified)";

export const metadata = pageMetadata({
  title: TITLE,
  description:
    "Source-verified profiles of people who wrote the UPSC exam, were never selected, and rebuilt — plus the famous names that other lists get wrong.",
  path: PATH,
  type: "article",
  publishedTime: page.published,
  modifiedTime: page.updated,
  keywords: [
    "personalities who failed UPSC",
    "famous people who failed UPSC",
    "successful people who failed UPSC",
    "who failed UPSC and became successful",
    "life after UPSC failure",
    "UPSC failure success stories",
  ],
});

const TRAIL: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Personalities who failed UPSC", path: PATH },
];

type Profile = {
  name: string;
  field: string;
  journey: string;
  pivot: string;
  built: string;
  why: string;
  quote?: { text: string; source: string; href: string };
  care?: string;
  sources: { label: string; href: string }[];
  sameAs?: string[];
};

const PROFILES: Profile[] = [
  {
    name: "Anubhav Singh Bassi",
    field: "Stand-up comedy and acting",
    journey:
      "A law graduate from RMLNLU Lucknow, he moved to Delhi to prepare for the Civil Services Examination around 2015. He attempted Prelims twice and never cleared it — a fact he has never hidden; his best-known stand-up special is literally about that Mukherjee Nagar life.",
    pivot:
      "His first open mic in Delhi came in 2017. Two years later, one video went viral.",
    built:
      "One of India's most-watched stand-up comedians, with an Amazon Prime special in 2023, a Bollywood debut opposite Ranbir Kapoor the same year, and sold-out tours in India and abroad.",
    why: "The failure isn't buried in his biography — it is his most famous material. He is the clearest proof that the story itself can become the asset.",
    sources: [
      {
        label: "Business Standard",
        href: "https://www.business-standard.com/entertainment/who-is-anubhav-singh-bassi-the-stand-up-comedian-who-made-it-to-big-screen-123081600593_1.html",
      },
      {
        label: "Gulf News interview",
        href: "https://gulfnews.com/entertainment/bollywood/indian-comedian-anubhav-singh-bassi-on-why-being-a-lawyer-is-not-as-good-as-a-stand-up-performer-1.91237059",
      },
      {
        label: "Wikipedia",
        href: "https://en.wikipedia.org/wiki/Anubhav_Singh_Bassi",
      },
    ],
    sameAs: ["https://en.wikipedia.org/wiki/Anubhav_Singh_Bassi"],
  },
  {
    name: "Veda Gogineni",
    field: "Entrepreneurship — co-founder, Earthful",
    journey:
      "An IIT Kharagpur alumna, she resigned a Deutsche Bank job in Mumbai in 2015 to prepare full-time in Delhi. Four attempts across roughly three and a half years, missing cutoffs at times by a single mark. She was never selected.",
    pivot:
      "She stepped back on her mother's advice, and in 2020 co-founded the plant-based nutrition brand Earthful with her sister Sudha.",
    built:
      "A Shark Tank India deal of ₹75 lakh for 2% equity, followed by ₹5 crore in 2024 and a ₹26 crore pre-Series A round backed by Fireside Ventures and V3 Ventures.",
    why: "She left a high-status job for the exam and still rebuilt — which is the exact fear most aspirants carry, answered.",
    quote: {
      text: "The exhaustive cycle of preparing, failing, and restarting drained me.",
      source: "The Better India, April 2025",
      href: "https://thebetterindia.com/421333/national-civil-services-day-former-upsc-aspirants-share-success-story/",
    },
    sources: [
      {
        label: "The Better India",
        href: "https://thebetterindia.com/421333/national-civil-services-day-former-upsc-aspirants-share-success-story/",
      },
      {
        label: "Indian Startup News — funding",
        href: "https://indianstartupnews.com/funding/shark-tank-india-featured-earthful-raises-rs-26-crore-founder-says-we-want-to-grow-deeper-into-bharat-10898961",
      },
    ],
  },
  {
    name: "Akella Raghavendra",
    field: "Education and the social sector",
    journey:
      "Four attempts between 1994 and 1999. He reached the interview stage and missed the final list by roughly twelve marks — the kind of near-miss that is harder to put down than a distant one.",
    pivot:
      "Journalism with Eenadu and ETV from 1998, film scriptwriting, and then teaching.",
    built:
      "More than 500 students placed into the IAS, IPS and state services; India's first Braille and audiobook UPSC material for visually impaired aspirants — around 3,000 audio files, funded with about ₹5 lakh of his own savings — and free coaching for blind and physically challenged aspirants.",
    why: "The strongest Telugu-audience story on this list, and the clearest example of preparation converted into something the exam never asked for.",
    quote: {
      text: "If you take an elevator you may or may not reach your destination; but if you take the stairs, you definitely will.",
      source: "The Better India, August 2018",
      href: "https://thebetterindia.com/156738/upsc-exams-ias-telangana-akella-raghavendra/",
    },
    sources: [
      {
        label: "The Better India",
        href: "https://thebetterindia.com/156738/upsc-exams-ias-telangana-akella-raghavendra/",
      },
      {
        label: "YourStory",
        href: "https://yourstory.com/socialstory/2019/10/akella-raghavendra-visually-impaired-ias-upsc-civil-services",
      },
    ],
  },
  {
    name: "Kajal Srivastava",
    field: "Social enterprise and traditional martial arts",
    journey:
      "Six attempts, ending on 24 October 2020. Strong mock scores throughout; never selected. Six attempts is not the outlier version of this story — it is the median one.",
    pivot:
      "Kalaripayattu, which she had discovered in 2017, became the centre of the rebuild. She launched the TAVASI movement and a natural activewear brand.",
    built:
      "TAVASI workshops have supported more than 2,000 people living with trauma, alongside a homegrown activewear label.",
    why: "The most relatable scale on this page. Not a unicorn — a rebuilt life.",
    quote: {
      text: "I restarted my life, and today, I am glad that I didn't clear the exam.",
      source: "The Better India, April 2025",
      href: "https://thebetterindia.com/421333/national-civil-services-day-former-upsc-aspirants-share-success-story/",
    },
    care:
      "Her public account includes surviving a suicide attempt during those years. She has chosen to speak about it openly. If any part of this is familiar to you right now, please talk to someone today — Tele-MANAS is free and 24×7 on 14416.",
    sources: [
      {
        label: "The Better India — profile",
        href: "https://thebetterindia.com/358409/upsc-cse-aspirant-all-six-attempts-failed-kalaripayattu-martial-arts-teacher-startup-kajal-srivastava-delhi/",
      },
      {
        label: "The Better India — civil services day feature",
        href: "https://thebetterindia.com/421333/national-civil-services-day-former-upsc-aspirants-share-success-story/",
      },
    ],
  },
];

const MYTHS = [
  {
    heading: "They cleared the exam — they didn't fail it",
    body: "Arvind Kejriwal (IRS), Roman Saini (IAS, AIR 18), Vikas Divyakirti, Awdhesh Singh (IRS), Jayaprakash Narayan (IAS), K. Annamalai (IPS), R. S. Praveen Kumar (IPS) and Suhas L. Y. (IAS) are routinely listed as UPSC failures. Every one of them was selected. What they did was leave the service afterwards, which is a completely different story — and a much less useful one if you are holding a rejection.",
  },
  {
    heading: "They wrote a different exam",
    body: "Khan Sir attempted the NDA and was rejected on medical grounds, not the Civil Services Examination. Jaideep Ahlawat wrote the CDS. Manoj Bajpayee's rejections were from the National School of Drama. Kailash Kher never attempted the exam at all. These names get folded into UPSC listicles because the emotional shape of the story fits, not because the facts do.",
  },
  {
    heading: "No primary source exists",
    body: "Ravish Kumar, Sudhir Chaudhary, Chetan Bhagat, Anurag Thakur, R. Madhavan, Sarathbabu Elumalai, M. Laxmikanth, Saurabh Dwivedi and a dozen others appear on “famous UPSC failures” lists across the internet. We looked for a primary source for each — a first-person statement, an interview, an autobiography — and found none. Until one exists, they stay off this page. They may well be true. That is not the same as verified.",
  },
];

const FAQ: Faq[] = [
  {
    q: "Who are the most successful people who failed UPSC?",
    a: "Among people whose UPSC attempts are documented and who were never selected: comedian and actor Anubhav Singh Bassi, Earthful co-founder Veda Gogineni, educator and accessibility pioneer Akella Raghavendra, and social entrepreneur Kajal Srivastava. Many better-known names on similar lists either cleared the exam or have no primary source confirming they wrote it.",
  },
  {
    q: "Did Anubhav Singh Bassi fail UPSC?",
    a: "Yes. He prepared in Delhi from around 2015, attempted the Prelims twice, and never cleared it. He has spoken about it publicly himself — his best-known stand-up special is built around that period of his life.",
  },
  {
    q: "Is it true that Ravish Kumar, Chetan Bhagat or R. Madhavan failed UPSC?",
    a: "There is no primary source for any of these claims — no first-person statement, interview or autobiography confirming they wrote the Civil Services Examination. They circulate widely on listicles that cite each other. Treat them as unverified rather than true.",
  },
  {
    q: "Why aren't Arvind Kejriwal and Roman Saini on this list?",
    a: "Because they cleared the exam. Kejriwal joined the IRS and Roman Saini the IAS with All India Rank 18. Both later resigned. Leaving the service by choice is a different story from never being selected, and only the second one is useful if you are rebuilding after a rejection.",
  },
  {
    q: "Does failing UPSC ruin your career?",
    a: "No. It costs you time and it costs you an identity, and both of those are real. But the discipline, synthesis and endurance the preparation built are portable, and every profile on this page is someone who spent that capital somewhere else. The years are a gap on paper and an asset in practice.",
  },
];

const JSON_LD = graph([
  ...baseGraph,
  breadcrumbNode(TRAIL),
  articleNode({
    path: PATH,
    headline: "Personalities who failed UPSC — and rebuilt",
    description:
      "Source-verified profiles of people who wrote the UPSC exam, were never selected, and built remarkable lives — and the famous names no primary source supports.",
    datePublished: page.published,
    dateModified: page.updated,
    section: "Stories",
    wordCount: 1600,
    keywords: [
      "personalities who failed UPSC",
      "famous people who failed UPSC",
      "life after UPSC failure",
    ],
    speakable: ["h1", "#answer"],
  }),
  {
    "@type": "ItemList",
    "@id": `${abs(PATH)}#list`,
    name: "Verified personalities who failed UPSC and rebuilt",
    description:
      "People who wrote the UPSC Civil Services Examination, were never selected, and later achieved something documented.",
    numberOfItems: PROFILES.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: PROFILES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: p.name,
        description: `${p.field}. ${p.why}`,
        ...(p.sameAs ? { sameAs: p.sameAs } : {}),
      },
    })),
  },
  faqNode(FAQ, PATH),
  {
    "@type": "WebPage",
    "@id": abs(PATH),
    url: abs(PATH),
    name: TITLE,
    isPartOf: { "@id": `${abs("/")}#website` },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  },
]);

export default function PersonalitiesWhoFailedUpsc() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Breadcrumbs trail={TRAIL} />

        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            Verified, not copied
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display shine mb-6 text-4xl sm:text-5xl">
            Personalities who failed UPSC — and rebuilt
          </h1>
        </Reveal>
        <Reveal>
          <ArticleMeta page={page} />
        </Reveal>

        {/* Answer-first summary: the passage designed to be lifted whole by a
            search snippet or an AI answer. Self-contained, no pronouns
            depending on earlier text. */}
        <Reveal>
          <div
            id="answer"
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
            <p className="leading-relaxed text-ink">
              Four people are profiled on this page: comedian and actor{" "}
              <strong className="text-ink-strong">Anubhav Singh Bassi</strong>,
              Earthful co-founder{" "}
              <strong className="text-ink-strong">Veda Gogineni</strong>,
              educator and accessibility pioneer{" "}
              <strong className="text-ink-strong">Akella Raghavendra</strong>,
              and social entrepreneur{" "}
              <strong className="text-ink-strong">Kajal Srivastava</strong>.
              Each of them wrote the UPSC Civil Services Examination, was never
              selected, and later built something documented and substantial.
            </p>
            <p className="mt-4 leading-relaxed text-ink-dim">
              This list is short on purpose. Most names circulating as
              &ldquo;famous UPSC failures&rdquo; either cleared the exam, wrote
              a different one, or have no primary source at all.{" "}
              <a
                href="#myths"
                className="text-accent-soft transition-colors hover:text-accent"
              >
                Those are listed too
              </a>
              , because knowing which stories are false matters as much as
              knowing which are true.
            </p>
          </div>
        </Reveal>

        {/* Method — E-E-A-T made explicit */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            How this list is verified
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-4 leading-relaxed text-ink">
            To appear here, a person has to clear three bars. They actually
            wrote the Civil Services Examination at some stage. They were{" "}
            <strong className="text-ink-strong">never selected</strong> — people
            who cleared and later resigned belong to a different story. And what
            they built afterwards is documented by a reputable source, not by a
            listicle quoting another listicle.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-14 leading-relaxed text-ink-dim">
            Every profile below rests on a first-person account — an interview,
            a bio, a stage set — corroborated by independent reporting. Sources
            are linked under each entry so you can check them yourself. Where a
            claim could not be sourced, it is not on this page, even when it
            would have made the page more impressive.
          </p>
        </Reveal>

        {/* Profiles */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            The four verified stories
          </h2>
        </Reveal>

        <div className="mb-14 space-y-8">
          {PROFILES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="surface-gradient rounded-[2px] border border-line p-6 sm:p-8">
                <h3 className="font-display shine mb-1 text-2xl">{p.name}</h3>
                <p className="mb-5 text-xs tracking-wide text-accent-soft uppercase">
                  {p.field}
                </p>

                <dl className="space-y-4">
                  <div>
                    <dt className="mb-1 text-xs font-semibold tracking-[0.14em] text-ink-dim uppercase">
                      The attempts
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink">
                      {p.journey}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold tracking-[0.14em] text-ink-dim uppercase">
                      The turn
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink">
                      {p.pivot}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-semibold tracking-[0.14em] text-ink-dim uppercase">
                      What they built
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink">
                      {p.built}
                    </dd>
                  </div>
                </dl>

                {p.quote && (
                  <blockquote className="relative mt-6 pl-5">
                    <span
                      aria-hidden
                      className="absolute top-0 bottom-0 left-0 w-[2px] bg-accent/40"
                    />
                    <p className="font-display text-[1.05rem] leading-relaxed text-ink-strong">
                      &ldquo;{p.quote.text}&rdquo;
                    </p>
                    <cite className="mt-2 block text-xs text-ink-dim not-italic">
                      —{" "}
                      <a
                        href={p.quote.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-ink-strong"
                      >
                        {p.quote.source}
                      </a>
                    </cite>
                  </blockquote>
                )}

                <p className="mt-6 border-t border-hairline pt-5 text-sm leading-relaxed text-ink-dim">
                  {p.why}
                </p>

                {p.care && (
                  <p
                    className="mt-4 rounded-[2px] border p-4 text-sm leading-relaxed text-ink"
                    style={{
                      borderColor: "rgba(255,122,26,0.25)",
                      background: "rgba(255,122,26,0.05)",
                    }}
                  >
                    {p.care}
                  </p>
                )}

                <p className="mt-5 text-xs leading-relaxed text-ink-dim">
                  Sources:{" "}
                  {p.sources.map((s, j) => (
                    <span key={s.href}>
                      {j > 0 && " · "}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-soft transition-colors hover:text-accent"
                      >
                        {s.label}
                      </a>
                    </span>
                  ))}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Myth-busting */}
        <Reveal>
          <h2 id="myths" className="font-display shine mb-6 text-3xl">
            The names we won&rsquo;t publish
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-8 leading-relaxed text-ink-dim">
            Search for people who failed UPSC and you will meet the same twenty
            names everywhere. Most of those lists are wrong. Here is what our
            research actually found, in three categories.
          </p>
        </Reveal>
        <div className="mb-14 space-y-4">
          {MYTHS.map((m, i) => (
            <Reveal key={m.heading} delay={i * 0.05}>
              <div className="rounded-[2px] border border-line p-6">
                <h3 className="mb-2 font-medium text-ink-strong">
                  {m.heading}
                </h3>
                <p className="text-sm leading-relaxed text-ink-dim">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why it's short */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            Why this list is so short
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-4 leading-relaxed text-ink">
            Because the internet&rsquo;s supply of{" "}
            <em>verified</em> failure-to-rebuild stories is genuinely thin. Not
            because the people don&rsquo;t exist — roughly five lakh write this
            exam every year and about a thousand are selected, so there are
            millions of them. They exist because nobody interviews them.
            Publications cover the ones who made the list.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-14 leading-relaxed text-ink-dim">
            That silence is the entire reason The Way Forward exists. This page
            will grow — not by copying other lists, but through original
            conversations with people whose attempts ended without their name on
            it. If that is your story, or you know whose it is,{" "}
            <a
              href="/#share-story"
              className="text-accent-soft transition-colors hover:text-accent"
            >
              tell us about it
            </a>
            .
          </p>
        </Reveal>

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
              Your story isn&rsquo;t over either.
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-ink-dim">
              A free one-on-one call — no pitch, no cost. Or one honest email a
              week while you find your footing.
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
