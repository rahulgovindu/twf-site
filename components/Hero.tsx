"use client";

import { motion, useReducedMotion } from "framer-motion";

const STATS = [
  { value: "10L+", label: "Aspirants every year" },
  { value: "0.1%", label: "Final selection rate" },
  { value: "100%", label: "Free support here" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Black core dissolving into the grey canvas — black lives here */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0b 0%, #101012 55%, rgba(10,10,11,0) 100%)",
        }}
      />
      {/* Ambient light layers — the sunrise behind everything */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 60% at 28% 105%, rgba(255,122,26,0.16), rgba(255,122,26,0.05) 45%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 85% -10%, rgba(212,215,220,0.07), transparent 70%)",
        }}
      />

      {/* Headline block — left-anchored, vertically centered */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-16 sm:px-8">
        <motion.p {...fadeUp(0)} className="eyebrow mb-6">
          <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          The Way Forward
        </motion.p>

        <h1 className="font-display max-w-4xl text-[clamp(2.5rem,5.6vw,4.6rem)]">
          <motion.span {...fadeUp(0.15)} className="shine block">
            The world only counts your hard work when you succeed.
          </motion.span>
          <motion.span {...fadeUp(0.55)} className="shine-warm mt-3 block">
            We count it anyway.
          </motion.span>
        </h1>

        <motion.p
          {...fadeUp(0.85)}
          className="mt-7 max-w-xl text-lg leading-relaxed text-ink-dim"
        >
          A platform for UPSC and government exam aspirants rebuilding their
          careers — stories, opportunities, skills, and support.
        </motion.p>

        <motion.div {...fadeUp(1.05)} className="mt-9 flex flex-wrap gap-4">
          <a href="#call-cta" className="btn btn-primary">
            Book a Free Call
          </a>
          <a href="#to-whom" className="btn btn-ghost">
            Learn more
          </a>
        </motion.div>
      </div>

      {/* Stats strip — pinned to the hero's base, hairline-separated */}
      <motion.div
        {...fadeUp(1.25)}
        className="relative border-t border-hairline"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(255,122,26,0.03))",
          }}
        />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-3 px-5 sm:px-8">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 pr-4 ${i > 0 ? "border-l border-hairline pl-6 sm:pl-10" : ""}`}
            >
              <div className="text-2xl font-medium text-ink-strong sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs tracking-wide text-ink-dim uppercase sm:text-sm sm:normal-case sm:tracking-normal">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
