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
  type Crumb,
  type Faq,
} from "@/lib/seo";

const PATH = "/ten-things-upsc-taught-me/";
const page = byPath(PATH);

const TITLE = "10 Things UPSC Taught Me That I Refuse to Forget";

export const metadata = pageMetadata({
  title: TITLE,
  description:
    "Six years and 17,500 hours of UPSC preparation deposited ten things in me. Here is each one — and exactly how life afterwards tries to make you forget it.",
  path: PATH,
  type: "article",
  publishedTime: page.published,
  modifiedTime: page.updated,
  keywords: [
    "what UPSC taught me",
    "lessons from UPSC preparation",
    "is UPSC preparation a waste",
    "skills gained from UPSC preparation",
    "life after UPSC",
  ],
});

const TRAIL: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Ten things UPSC taught me", path: PATH },
];

type Lesson = { title: string; body: string[]; forgotten: string };

const PREPARATION: Lesson[] = [
  {
    title: "You can point yourself at something for years without anyone making you",
    body: [
      "No boss. No deadline. No applause. For over two thousand mornings, you sat down because you decided to. Almost nobody on earth has proven this about themselves — most people need salaries, supervisors and Monday meetings to do six months of anything.",
    ],
    forgotten:
      "After the exam, people speak of their discipline as if it belonged to that phase of life — “I was different then.” Then they wait for a job, a boss, a system to make them work again. But the structure was never in the exam. It was in you. It is portable, and it is the single most employable thing you own.",
  },
  {
    title: "Synthesis is a superpower — and you already have it",
    body: [
      "Seventeen subjects. Hundreds of thinkers. A thousand news cycles. You learned to hold contradictory sources in your head and produce a coherent position under time pressure. There are senior professionals with twenty years of experience who cannot do this.",
    ],
    forgotten:
      "Because the exam rejected you, you throw away the skill along with the syllabus — as if it were all rote learning that failed. It wasn't rote. I found my first business inside GS-3: agricultural trade, supply chains, exports. The syllabus became my business plan. Your syllabus is hiding something too.",
  },
  {
    title: "You can act without feedback",
    body: [
      "You wrote Mains and then waited months, not knowing whether a single sentence mattered. You worked all year for one result, delivered in one line, with no explanation. Most of life is exactly this — parenting, building a business, writing, healing. Effort now, verdict much later, often never clearly.",
    ],
    forgotten:
      "The modern world retrains us on instant metrics — likes, views, daily numbers. The muscle that let you work in silence atrophies, and one day you can't do anything that doesn't pay you back by Friday. Guard that muscle. It is rarer than talent.",
  },
  {
    title: "You met brilliant people who also didn't make it",
    body: [
      "So you know — not believe, know — that outcomes are merit multiplied by circumstance multiplied by luck. Fewer than one in five hundred make the list. You sat beside people sharper than you who are also not on it.",
    ],
    forgotten:
      "The moment you succeed at the next thing, the mind quietly rewrites the story as pure merit. The 499 vanish from memory. Keep them in memory. They are what keeps you humble in success and kind in judgment — including the judgment of yourself.",
  },
];

const FAILURE: Lesson[] = [
  {
    title: "You are not your outcome — and this lesson will come back for a retest",
    body: [
      "The deepest wound of what I call POST-UPSC Syndrome is identity fused to a result. “Aspirant” was not what I did; it was who I was. When the attempts ended, I ended. Breaking that fusion cost me more than the preparation did.",
    ],
    forgotten:
      "This is the one that matters most: the fusion re-forms around the next identity. Founder. Designation. Revenue. Follower count. The exam-shaped hole gets filled with a new idol, and the syndrome returns wearing new clothes. The lifelong practice is not “recover from UPSC.” It is: never again hand your worth to a single scoreboard. Any scoreboard.",
  },
  {
    title: "Named pain is survivable pain",
    body: [
      "For thirty days after my last result, I lived inside one moment — partly because what I was going through had no name. The day I gave it one — POST-UPSC Syndrome — it acquired a shape. A thing with a shape has edges, and a thing with edges has an end.",
    ],
    forgotten:
      "Once the crisis passes, we retire the vocabulary. Then the next crisis finds us mute again. Carry the emotional vocabulary forward. Naming what hurts — early, precisely, out loud — is not weakness. It is infrastructure.",
  },
  {
    title: "You now hold rock-bottom data",
    body: [
      "You know, from the inside, what your worst fear feels like — and that you walked out of it. That is not a scar. That is capital. It is the reason I could start companies with no safety net: the downside of any business decision was smaller than what I had already survived.",
    ],
    forgotten:
      "Comfort. A few stable years, and you start protecting what you have as if you had never survived losing everything. Renew the memory deliberately: I have already survived worse than this decision's downside. Then decide.",
  },
  {
    title: "Failure audited your relationships — keep the report",
    body: [
      "The years of attempts ran a filter over everyone you knew. You learned exactly who stays in a room where nothing is going well. That information cost you your twenties. It is among the most expensive things you own.",
    ],
    forgotten:
      "Success crowds your calendar with new, shinier people, and the ones who sat with you in the dark start getting your leftovers. Reverse it, on purpose. The people from the dark phase hold lifetime priority. Review it annually, like a balance sheet.",
  },
  {
    title: "Time is the only bill that is never waived",
    body: [
      "The exam taught opportunity cost by invoice. I know the exact amount: six years, 2,190 days, 17,500 hours.",
    ],
    forgotten:
      "The irony here is brutal: people who lost years to the exam later lose years to a mediocre job, a dead venture, a stale city — through the same mechanism, sunk cost plus “one more year.” The lesson was never “UPSC costs time.” The lesson is: audit every long commitment annually, as an outsider would. You already know what unaudited years cost. You have the receipt.",
  },
  {
    title: "Recovery has a speed limit — respecting it is strength",
    body: [
      "I needed six months to make peace with my result. No shortcut existed, and forcing one would have broken something that was quietly healing. Every major loss you will ever face — a person, a company, a dream — will need its own season.",
    ],
    forgotten:
      "Hustle culture reframes mourning as weakness and demands overnight comebacks. Having healed properly once, people start denying themselves — and others — the time it takes. Don't. The six months were not a delay in my story. They were a chapter of it.",
  },
];

const FAQ: Faq[] = [
  {
    q: "Is UPSC preparation a waste of time if you don't clear the exam?",
    a: "No. The preparation builds four things that survive the result: self-directed discipline sustained without supervision, the ability to synthesise contradictory sources under time pressure, tolerance for working long stretches without feedback, and a realistic view of how much of any outcome is luck. All four are portable to work, business and study elsewhere.",
  },
  {
    q: "What skills do you actually gain from UPSC preparation?",
    a: "Sustained self-direction over years without external enforcement; rapid comprehension and synthesis across seventeen general-studies subjects; structured written argument under strict time limits; current-affairs literacy across economics, polity, environment and international relations; and the endurance to work without short-term feedback.",
  },
  {
    q: "How long does it take to recover from failing UPSC?",
    a: "There is no fixed timeline. For the founder of The Way Forward it took about thirty days of shock followed by roughly six months to make peace with the result. Recovery has a speed limit and forcing it usually breaks something. If the weight is not lifting at all, Tele-MANAS (14416) is free and available 24×7 across India.",
  },
];

const JSON_LD = graph([
  ...baseGraph,
  breadcrumbNode(TRAIL),
  articleNode({
    path: PATH,
    headline: TITLE,
    description:
      "What six years and 17,500 hours of UPSC preparation actually deposited — and exactly how life afterwards makes you forget it.",
    datePublished: page.published,
    dateModified: page.updated,
    section: "Essays",
    wordCount: 1900,
    keywords: [
      "what UPSC taught me",
      "lessons from UPSC preparation",
      "is UPSC preparation a waste",
    ],
    speakable: ["h1", "#answer"],
  }),
  faqNode(FAQ, PATH),
  {
    "@type": "WebPage",
    "@id": abs(PATH),
    url: abs(PATH),
    name: TITLE,
    isPartOf: { "@id": `${abs("/")}#website` },
    publisher: { "@id": ORG_ID },
    author: { "@id": PERSON_ID },
    inLanguage: "en-IN",
  },
]);

function LessonList({ items, offset }: { items: Lesson[]; offset: number }) {
  return (
    <ol className="mb-14 space-y-8">
      {items.map((l, i) => (
        <li
          key={l.title}
          className="surface-gradient rounded-[2px] border border-line p-6 sm:p-8"
        >
          <Reveal delay={i * 0.04}>
            <div className="mb-3 flex items-baseline gap-4">
              <span className="text-sm font-medium tracking-widest text-accent">
                {String(offset + i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display shine text-xl leading-snug sm:text-2xl">
                {l.title}
              </h3>
            </div>
            {l.body.map((p) => (
              <p key={p} className="mb-4 leading-relaxed text-ink">
                {p}
              </p>
            ))}
            <p className="mt-5 border-t border-hairline pt-5 text-sm leading-relaxed text-ink-dim">
              <strong className="mb-1 block tracking-wide text-accent-soft uppercase">
                How it gets forgotten
              </strong>
              {l.forgotten}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function TenThingsUpscTaughtMe() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Breadcrumbs trail={TRAIL} />

        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            From the founder
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display shine mb-6 text-4xl leading-tight sm:text-5xl">
            Ten things UPSC taught me that I refuse to forget
          </h1>
        </Reveal>
        <Reveal>
          <ArticleMeta page={page} />
        </Reveal>

        {/* Answer-first summary block */}
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
              I gave UPSC six years — seventeen thousand five hundred hours.
              When it ended without my name on the list, I thought I had wasted
              my twenties. I was wrong, but not in the way motivational posts
              said. They told me &ldquo;nothing is ever wasted&rdquo; and moved
              on. Nobody could tell me <em>what exactly</em> I had earned, so
              for a long time I believed I had earned nothing.
            </p>
            <p className="mt-4 leading-relaxed text-ink-dim">
              Here is the dangerous part, and the real reason I wrote this:{" "}
              <strong className="text-ink-strong">
                these lessons are not lost when you fail. They are lost when you
                recover.
              </strong>{" "}
              Comfort erases them faster than failure ever could. So this is not
              a list of what UPSC teaches. It is a list of what UPSC teaches —
              and exactly how life makes you forget it.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-14 leading-relaxed text-ink">
            The exam ran two courses. The preparation taught the first four. The
            failure taught the rest.
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            What the preparation taught
          </h2>
        </Reveal>
        <LessonList items={PREPARATION} offset={0} />

        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">
            What the failure taught
          </h2>
        </Reveal>
        <LessonList items={FAILURE} offset={4} />

        {/* The one sentence */}
        <Reveal>
          <h2 className="font-display shine mb-6 text-3xl">The one sentence</h2>
        </Reveal>
        <Reveal>
          <blockquote className="relative mb-10 pl-6">
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-0 w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,122,26,0.2), #ff7a1a 50%, rgba(255,122,26,0.2))",
              }}
            />
            <p className="font-display shine-warm text-2xl leading-snug sm:text-3xl">
              The exam taught you how to work. The failure taught you who you
              are when the work fails. The person who remembers both can never
              again be destroyed by an outcome.
            </p>
          </blockquote>
        </Reveal>
        <Reveal>
          <p className="mb-14 text-lg leading-relaxed text-ink">
            The world only counts your hard work when you succeed.{" "}
            <strong className="text-ink-strong">We count it anyway.</strong>
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
              If you are still inside the thirty days
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-ink-dim">
              A free one-on-one call — no pitch, no cost. Or start with the
              piece that gave this phase its name.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/#call-cta" className="btn btn-primary">
                Book a free call
              </a>
              <a href="/post-upsc-syndrome/" className="btn btn-ghost">
                POST-UPSC Syndrome
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
