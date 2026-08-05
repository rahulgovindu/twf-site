import Reveal from "@/components/Reveal";

/* Icon array: 500 dots, one lit — "fewer than 1 in 500 make the final list."
   Chosen over a bar/log chart: the story is a single extreme proportion, and an
   icon array shows it honestly without axis tricks. The lit dot carries a
   direct annotation (never color-alone). */
const COLS = 25;
const ROWS = 20;
const GAP = 14;
const R = 3.4;
const LIT_INDEX = 313; // row 12, col 13 — near center-right, findable

function DotField() {
  const dots = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    const cx = (i % COLS) * GAP + GAP / 2;
    const cy = Math.floor(i / COLS) * GAP + GAP / 2;
    if (i === LIT_INDEX) continue;
    dots.push(
      <circle key={i} cx={cx} cy={cy} r={R} fill="rgba(168,173,181,0.22)" />
    );
  }
  const litX = (LIT_INDEX % COLS) * GAP + GAP / 2;
  const litY = Math.floor(LIT_INDEX / COLS) * GAP + GAP / 2;
  return (
    <svg
      viewBox={`0 0 ${COLS * GAP} ${ROWS * GAP + 34}`}
      className="w-full"
      role="img"
      aria-label="Icon array of 500 dots representing candidates who write the exam. A single orange dot is highlighted, labeled: one selected. Fewer than 1 in 500 make the final list."
    >
      {dots}
      {/* halo + lit dot */}
      <circle cx={litX} cy={litY} r={R * 3.2} fill="rgba(255,122,26,0.18)" />
      <circle cx={litX} cy={litY} r={R + 0.6} fill="#FF7A1A" />
      {/* direct annotation — line down to label */}
      <line
        x1={litX}
        y1={litY + R * 3.6}
        x2={litX}
        y2={ROWS * GAP + 12}
        stroke="rgba(255,122,26,0.5)"
        strokeWidth="1"
      />
      <text
        x={litX}
        y={ROWS * GAP + 27}
        textAnchor="middle"
        fill="#FFA05C"
        fontSize="11.5"
        fontFamily="var(--font-body)"
      >
        1 selected — out of these 500
      </text>
    </svg>
  );
}

const FUNNEL = [
  { value: "~10,00,000", label: "apply each year" },
  { value: "~5,00,000", label: "appear for Prelims" },
  { value: "~1,000", label: "reach the final list" },
];

const FAQ = [
  {
    q: "What is POST-UPSC Syndrome?",
    a: "POST-UPSC Syndrome: the phase after your final attempts when you realise the dream may never come true — and you must rebuild your identity, career and confidence, often carrying a multi-year gap. It is a lived experience, not a medical diagnosis.",
  },
  {
    q: "What are the actual odds of clearing UPSC?",
    a: "Fewer than 1 in 500 who write the exam make the final list. Roughly 10 lakh apply each year, about 5 lakh appear, and around 1,000 are selected — a success rate of 0.1–0.2%.",
  },
  {
    q: "Is The Way Forward a coaching institute?",
    a: "No. The Way Forward is not coaching, not therapy, and not a job consultancy. It is a platform for aspirants whose attempts are over — stories of people who rebuilt, career opportunities, skills, and support to regain confidence.",
  },
];

export default function Why() {
  return (
    <section id="why" className="glow-accent-tl relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            Why this platform?
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-8 text-4xl sm:text-5xl">
            The reality of the exam.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-12 text-lg leading-relaxed text-ink">
            Fewer than{" "}
            <strong className="text-ink-strong">1 in 500</strong> who write
            this exam make the final list — a success rate of{" "}
            <strong className="text-ink-strong">0.1–0.2%</strong>.
          </p>
        </Reveal>

        {/* Funnel tiles */}
        <Reveal>
          <div className="mb-12 grid grid-cols-3 gap-px overflow-hidden rounded-[2px] border border-line bg-line">
            {FUNNEL.map((f) => (
              <div key={f.label} className="surface-gradient p-4 sm:p-6">
                <div className="text-lg font-medium text-ink-strong sm:text-2xl">
                  {f.value}
                </div>
                <div className="mt-1 text-xs text-ink-dim sm:text-sm">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Icon array */}
        <Reveal>
          <figure className="surface-gradient rounded-[2px] border border-line p-6 sm:p-9">
            <DotField />
            <figcaption className="mt-4 text-center text-xs text-ink-dim">
              Each dot is a candidate who writes the exam. Source: UPSC Annual
              Reports.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <p className="mt-12 mb-6 leading-relaxed text-ink-dim">
            Opportunity cost, the value of time, the opportunity timeline (govt
            jobs era → IT boom → internet/creator boom → now, the AI era), the
            importance of a Plan B, and how to transition from UPSC to jobs or
            business.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-10 text-lg leading-relaxed text-ink">
            What UPSC gave you — discipline, resilience, diverse knowledge — is{" "}
            <strong className="text-ink-strong">capital, not waste</strong>.
          </p>
        </Reveal>

        <Reveal>
          <h3 className="font-display shine mb-6 text-2xl sm:text-3xl">
            Here you will:
          </h3>
        </Reveal>
        <ol className="mb-14 space-y-4">
          {[
            "Learn from ex-aspirants' stories and transitions (podcast engine)",
            "Discover the many ways to rebuild a career",
            "Upskill with industry experts",
            "Regain lost confidence and morale",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <li className="flex items-baseline gap-4">
                <span className="text-sm font-medium tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink">{item}</span>
              </li>
            </Reveal>
          ))}
        </ol>

        {/* FAQ */}
        <Reveal>
          <div id="faq" className="divide-y divide-hairline border-y border-hairline">
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
      </div>
    </section>
  );
}
