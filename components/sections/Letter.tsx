import { Newsreader } from "next/font/google";
import Reveal from "@/components/Reveal";

/* Newsreader is a reading serif, so the letter feels personal and stays easy
   to read at length. It is loaded here so only the homepage needs it. */
const letterFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  // The letter sits well below the fold, so it shouldn't delay first paint.
  preload: false,
});

const BODY_CLASS =
  "mb-7 text-[1.125rem] leading-[1.8] text-[#e4dccf] [text-wrap:pretty] sm:text-[1.2rem]";

export default function Letter() {
  const shareText = encodeURIComponent(
    "A letter to the parents of every UPSC aspirant — https://thewayforward.in/#letter"
  );

  return (
    <section
      id="letter"
      className={`${letterFont.className} fade-warm relative py-24 sm:py-32`}
    >
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="mb-6 block h-px w-10 bg-accent" aria-hidden />
          <h2 className="shine-warm mb-10 inline-block pr-2 pb-2 text-[2.6rem] leading-[1.1] font-light tracking-[-0.015em] italic sm:mb-12 sm:text-6xl">
            A letter to the parents
          </h2>
        </Reveal>

        <Reveal>
          {/* Warm paper-dark card, lit by the brand's small orange light */}
          <div
            className="relative overflow-hidden rounded-[2px] border border-[#3a322a] p-7 sm:p-14"
            style={{
              background:
                "radial-gradient(ellipse 75% 42% at 88% 0%, rgba(255,122,26,0.13), transparent 72%), linear-gradient(180deg, #1d1915, #141210)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.05), 0 32px 90px -48px rgba(255,122,26,0.4)",
            }}
          >
            <p className="mb-8 text-[1.75rem] leading-tight font-normal tracking-[-0.01em] text-[#f4eee4] sm:text-[2.1rem]">
              Dear Parents,
            </p>

            <p className={BODY_CLASS}>
              You may already know the odds at UPSC: fewer than 1 in 500 who
              write this exam will ever see their name on the final list.
              Failure here is not the exception — it is the overwhelming rule,
              even for the brightest.
            </p>
            <p className={BODY_CLASS}>
              It is easy to judge a person by a result. It is much harder to
              see the years of effort, the pain, and the quiet sacrifices
              behind it. Many toppers have confessed they nearly broke before
              they cracked it. Even Rank 1 could not have claimed, at the
              start, that success was certain. But the effort is real. The
              hardships are real. The setbacks are real. This preparation
              itself turns a kid into an adult.
            </p>
            <p className={BODY_CLASS}>
              So this is my humble request: be kind. In these hard times{" "}
              <em className="text-[#ffc08f]">
                your child needs your hand, not your verdict.
              </em>{" "}
              Your lap is still the only place we feel relieved. Show them you
              will not judge them by one exam. Give them time to recover, and
              hope to look forward — there is so much more to explore and
              achieve in this wonderful life.
            </p>

            {/* The line a parent should remember */}
            <div className="relative mt-11 mb-11 pl-6">
              <span
                aria-hidden
                className="absolute top-0 bottom-0 left-0 w-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,122,26,0.2), #ff7a1a 50%, rgba(255,122,26,0.2))",
                }}
              />
              <p className="text-2xl leading-[1.35] font-light text-[#f4eee4] italic [text-wrap:balance] sm:text-[2rem]">
                Our regrets may fade with time. Our gratitude to you never
                will.
              </p>
            </div>

            <p className="text-[1.0625rem] leading-relaxed text-[#bdb3a4] italic sm:text-[1.125rem]">
              — Rahul, and every aspirant who never found the words
            </p>

            <div className="mt-10 font-[family-name:var(--font-body)]">
              <a
                className="btn btn-ghost text-sm"
                href={`https://wa.me/?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share this letter on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
