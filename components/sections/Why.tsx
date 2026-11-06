import Reveal from "@/components/Reveal";
import { HOME_FAQ } from "@/lib/faq";

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


export default function Why() {
  return (
    <section id="why" className="glow-accent-tl relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            Why this exists
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
            Preparation has a cost nobody discusses:{" "}
            <strong className="shine-warm font-display text-[1.15em]">
              time
            </strong>
            . Opportunity has moved with every era — government jobs, then
            IT, then the internet, now AI. A Plan B isn&rsquo;t betrayal of
            your dream; it&rsquo;s how you carry that dream&rsquo;s
            discipline into the next one.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-14 text-lg leading-relaxed text-ink">
            What UPSC gave you — discipline, resilience, diverse knowledge — is{" "}
            <strong className="text-ink-strong">capital, not waste</strong>.
          </p>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <div id="faq" className="divide-y divide-hairline border-y border-hairline">
            {HOME_FAQ.map((f) => (
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
