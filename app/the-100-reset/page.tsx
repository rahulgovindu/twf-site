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

const PATH = "/the-100-reset/";
const page = byPath(PATH);

const TITLE = "The 100 Reset — 100 Small Tasks to Restart Your Life";

export const metadata = pageMetadata({
  title: TITLE,
  description:
    "Stuck after the exam? Don't wait for motivation — borrow momentum. 100 small tasks across 10 areas of life, none longer than a day, almost all free.",
  path: PATH,
  type: "article",
  publishedTime: page.published,
  modifiedTime: page.updated,
  keywords: [
    "how to restart your life",
    "feeling stuck after UPSC",
    "daily reset checklist",
    "small habits to rebuild confidence",
    "what to do after failing an exam",
  ],
});

const TRAIL: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "The 100 Reset", path: PATH },
];

type Area = { emoji: string; name: string; note: string; tasks: string[] };

const AREAS: Area[] = [
  {
    emoji: "🏃",
    name: "Body",
    note: "The first thing preparation takes, and the fastest thing to get back.",
    tasks: [
      "Drink 2 litres of water today",
      "Make your bed the moment you wake up",
      "Walk 30 minutes without your phone",
      "Sleep before 11 PM tonight",
      "Do 10 push-ups (knees allowed)",
      "Stretch for 5 minutes after waking",
      "Eat one meal with zero screens",
      "Take the stairs all day",
      "Cook one meal from scratch",
      "Go one full day without sugar",
    ],
  },
  {
    emoji: "🧠",
    name: "Mind",
    note: "Attention is a muscle. These are the reps.",
    tasks: [
      "Write down 3 things you're grateful for",
      "Sit in silence for 10 minutes — no phone, no music",
      "Read 10 pages of any book",
      "Write one page about how you actually feel",
      "Learn one new word and use it today",
      "Do one task with 100% focus — no switching",
      "Watch a sunrise or sunset, start to finish",
      "Write down the one thing you're avoiding",
      "Spend 15 minutes on a puzzle, chess, or sudoku",
      "Go to bed without checking your phone",
    ],
  },
  {
    emoji: "🏠",
    name: "Space",
    note: "A room you control is proof that something is still in your hands.",
    tasks: [
      "Clear one drawer completely",
      "Give away 5 things you haven't used in a year",
      "Clean your desk before you sleep",
      "Wash and fold everything in the laundry pile",
      "Delete 50 photos from your phone",
      "Empty your wallet or bag and keep only what you need",
      "Fix one small broken thing you've been ignoring",
      "Rearrange one corner of your room",
      "Water your plants — or get one",
      "Make one space in your home phone-free",
    ],
  },
  {
    emoji: "💰",
    name: "Money",
    note: "Most of the shame here comes from not looking. Start by looking.",
    tasks: [
      "Track every rupee you spend today",
      "Cancel one subscription you don't use",
      "Check your bank balance without flinching",
      "Cook instead of ordering — once this week",
      "Write down everything you owe and are owed",
      "Set aside ₹100 (or any amount) — just to start",
      "Sell or give away one thing you don't need",
      "Compare your last 3 months of spending",
      "Learn one money term you've been nodding along to",
      "Write your one financial goal for this year",
    ],
  },
  {
    emoji: "👥",
    name: "People",
    note: "The years of attempts thinned this out. It rebuilds one call at a time.",
    tasks: [
      "Call an old friend — no reason needed",
      "Tell a family member one specific thing you appreciate",
      "Have one meal with someone, phones away",
      "Reply to that message you've been sitting on",
      "Ask an elder about their life before you existed",
      "Introduce yourself to a neighbour",
      "Forgive one small grudge — silently counts",
      "Ask someone “how are you, really?” and listen",
      "Compliment a stranger sincerely",
      "Write (don't send yet) a letter to someone who shaped you",
    ],
  },
  {
    emoji: "🛠️",
    name: "Skills",
    note: "You already know how to learn. Point it somewhere small.",
    tasks: [
      "Learn to cook one new dish properly",
      "Watch a tutorial and actually do the thing",
      "Fix something yourself instead of calling someone",
      "Write 100 words about anything, badly",
      "Learn 5 phrases in a new language",
      "Practice one skill for 20 minutes without checking results",
      "Teach someone something you know",
      "Learn one keyboard shortcut that saves you time",
      "Take one good photo deliberately, not casually",
      "Make something with your hands — anything",
    ],
  },
  {
    emoji: "📵",
    name: "Digital",
    note: "The feed is very good at telling you everyone else moved on.",
    tasks: [
      "Uninstall one app that eats your time",
      "Unfollow 20 accounts that don't add to your life",
      "Turn off all non-human notifications",
      "Keep your phone in another room for 2 hours",
      "Unsubscribe from 10 email lists",
      "Set your phone to grayscale for a day",
      "No phone for the first 30 minutes after waking",
      "Clear your downloads folder",
      "Go half a day with your phone on silent, face down",
      "Back up the photos and files you'd cry about losing",
    ],
  },
  {
    emoji: "🌳",
    name: "Nature",
    note: "Years indoors with a syllabus. This is the cheapest correction there is.",
    tasks: [
      "Walk barefoot on grass or sand",
      "Sit under a tree for 15 minutes doing nothing",
      "Plant one sapling or seed",
      "Watch birds for 10 minutes — find three kinds",
      "Take a walk when it's drizzling",
      "Eat one fruit you've never tried",
      "Stargaze for 15 minutes away from bright lights",
      "Pick up 10 pieces of litter from a public place",
      "Visit the nearest lake, river, beach, or hill",
      "Grow something you can eat — even coriander counts",
    ],
  },
  {
    emoji: "🦁",
    name: "Courage",
    note: "Rejection made you flinch. These are small, survivable doses.",
    tasks: [
      "Eat alone at a restaurant, unapologetically",
      "Say no to one thing you'd normally say yes to",
      "Ask for help with something — out loud",
      "Speak up once in a group where you usually stay quiet",
      "Do one thing badly, in public, and survive it",
      "Ask for a discount, a raise, or a favour",
      "Admit one mistake without excuses",
      "Have the conversation you've been avoiding",
      "Share something you made with one person",
      "Apply for something you feel underqualified for",
    ],
  },
  {
    emoji: "💛",
    name: "Kindness",
    note: "The fastest known way to stop being the only person in your head.",
    tasks: [
      "Pay for a stranger's chai or meal",
      "Donate 5 things in good condition",
      "Leave a genuine review for a small business",
      "Thank someone who never gets thanked — by name",
      "Help someone with a task without being asked",
      "Feed a street animal or bird",
      "Give someone your full attention for 10 minutes",
      "Share someone's work you admire — publicly",
      "Do one favour and never mention it",
      "Write down what this reset changed — and pass the list on",
    ],
  },
];

const FAQ: Faq[] = [
  {
    q: "What is The 100 Reset?",
    a: "The 100 Reset is a free checklist of 100 small tasks spread across ten areas of life — body, mind, space, money, people, skills, digital, nature, courage and kindness. No task takes more than a day, most take minutes, and around 90% cost nothing. It is designed for the period after a long effort ends, when motivation isn't arriving on its own.",
  },
  {
    q: "How do I use it when I have no motivation at all?",
    a: "Don't start with motivation — start with one task, in any order, today. The list works by borrowing momentum rather than waiting for it: small completed actions produce the evidence that you can still finish things, and that evidence is what motivation is actually made of. Skip anything that doesn't apply to you.",
  },
  {
    q: "Is this a substitute for therapy or professional help?",
    a: "No. The 100 Reset is a momentum tool, not treatment. If you are carrying something heavy — persistent hopelessness, anxiety that won't lift, thoughts of harming yourself — please speak to a professional. Tele-MANAS (14416) is free and 24×7 across India, and iCall from TISS is on 9152987821. Asking for help is task 83 for a reason.",
  },
];

const totalTasks = AREAS.reduce((n, a) => n + a.tasks.length, 0);

const JSON_LD = graph([
  ...baseGraph,
  breadcrumbNode(TRAIL),
  articleNode({
    path: PATH,
    headline: "The 100 Reset — 100 small tasks to restart your life",
    description:
      "100 small tasks across 10 areas of life, for the days when motivation isn't coming. None takes more than a day.",
    datePublished: page.published,
    dateModified: page.updated,
    section: "Tools",
    wordCount: 1400,
    keywords: ["how to restart your life", "feeling stuck", "reset checklist"],
    speakable: ["h1", "#answer"],
  }),
  {
    "@type": "HowTo",
    "@id": `${abs(PATH)}#howto`,
    name: "The 100 Reset",
    description:
      "A ten-part reset for when a long effort ends and motivation doesn't arrive: ten areas of life, ten small tasks each, done in any order at your own pace.",
    inLanguage: "en-IN",
    totalTime: "P30D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
    publisher: { "@id": ORG_ID },
    step: AREAS.map((a, i) => ({
      "@type": "HowToSection",
      position: i + 1,
      name: a.name,
      description: a.note,
      itemListElement: a.tasks.map((t, j) => ({
        "@type": "HowToStep",
        position: j + 1,
        name: t,
        text: t,
        url: `${abs(PATH)}#${a.name.toLowerCase()}`,
      })),
    })),
  },
  faqNode(FAQ, PATH),
]);

export default function The100Reset() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Breadcrumbs trail={TRAIL} />

        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            A free tool
          </p>
        </Reveal>
        <Reveal>
          <h1 className="font-display shine mb-4 text-4xl sm:text-5xl">
            The 100 Reset
          </h1>
        </Reveal>
        <Reveal>
          <p className="mb-5 text-lg text-ink-dim">
            {AREAS.length} areas. {AREAS[0].tasks.length} small tasks each. One
            reset.
          </p>
        </Reveal>
        <Reveal>
          <ArticleMeta page={page} />
        </Reveal>

        <Reveal>
          <div
            id="answer"
            className="surface-gradient relative mb-12 rounded-[2px] border border-line p-7 sm:p-9"
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
              Feeling stuck? Don&rsquo;t wait for motivation —{" "}
              <strong className="text-ink-strong">borrow momentum</strong>. Do
              any task, in any order, at your own pace. Tick them off. Small
              wins compound.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-dim">
              <strong className="text-ink">The rules:</strong> no task takes
              more than a day. Most take minutes. No money needed for 90% of
              them. Skip any that don&rsquo;t apply — this is your reset, not a
              syllabus.
            </p>
          </div>
        </Reveal>

        {/* Jump links — useful for readers, and they give crawlers a table of
            contents for the page's ten sections. */}
        <Reveal>
          <nav aria-label="Jump to an area" className="mb-14">
            <ul className="flex flex-wrap gap-2">
              {AREAS.map((a, i) => (
                <li key={a.name}>
                  <a
                    href={`#${a.name.toLowerCase()}`}
                    className="inline-block rounded-[2px] border border-line px-3 py-1.5 text-sm text-ink-dim transition-colors hover:border-line-strong hover:text-ink-strong"
                  >
                    <span aria-hidden>{a.emoji}</span> {i + 1}. {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        {AREAS.map((area, ai) => {
          const start = ai * area.tasks.length;
          return (
            <section
              key={area.name}
              id={area.name.toLowerCase()}
              className="mb-14 scroll-mt-24"
            >
              <Reveal>
                <h2 className="font-display shine mb-2 text-3xl">
                  <span aria-hidden className="mr-2">
                    {area.emoji}
                  </span>
                  {ai + 1}. {area.name}
                </h2>
              </Reveal>
              <Reveal>
                <p className="mb-6 text-sm leading-relaxed text-ink-dim">
                  {area.note}
                </p>
              </Reveal>
              <ol className="divide-y divide-hairline border-y border-hairline">
                {area.tasks.map((t, ti) => (
                  <li key={t} className="flex items-baseline gap-4 py-3.5">
                    <span className="w-7 shrink-0 text-sm font-medium tracking-widest text-accent tabular-nums">
                      {start + ti + 1}
                    </span>
                    <span className="leading-relaxed text-ink">{t}</span>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        <Reveal>
          <div className="mb-14 rounded-[2px] border border-line p-6 sm:p-8">
            <h2 className="font-display shine mb-3 text-2xl">
              A note before you start
            </h2>
            <p className="leading-relaxed text-ink-dim">
              This is a momentum reset, not a cure. If you are carrying
              something heavy, these {totalTasks} tasks are a companion — not a
              substitute for talking to someone you trust, or a professional.
              Asking for help is task 83 for a reason. Tele-MANAS{" "}
              <a
                href="tel:14416"
                className="text-accent-soft transition-colors hover:text-accent"
              >
                14416
              </a>{" "}
              is free and open 24×7 across India.
            </p>
          </div>
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
              Task 83: ask for help — out loud.
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-ink-dim">
              A free one-on-one call — no pitch, no cost. Or one honest email a
              week while you work through the list.
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
