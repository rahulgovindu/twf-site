import Reveal from "@/components/Reveal";

export default function ToWhom() {
  return (
    <section id="to-whom" className="fade-grey relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            Who this is for
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-8 text-4xl sm:text-5xl">
            An exam is not life.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mb-6 text-lg leading-relaxed text-ink">
            If you&rsquo;re reading this, you&rsquo;re probably deep into your
            late attempts. Or past Mains or the Interview, weighing one more
            year. Or out of attempts entirely. Or you&rsquo;ve moved on — and
            still carry the weight of it.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-10 leading-relaxed text-ink-dim">
            Whichever it is, this platform is for you — and for every
            government-exam aspirant who gave everything for years and
            didn&rsquo;t see their name on the list. Failing an exam does not
            mean you failed at life.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-5 leading-relaxed text-ink">
            Because we know what those years actually held:
          </p>
        </Reveal>

        {/* Sacrifice stanza — line-by-line reveal */}
        <ul className="mb-10 space-y-3" aria-label="What you carried">
          {[
            "Dreams. Family hopes. Sacrifices.",
            "Loneliness. Broken promises. Silent tears.",
            "The endless cycle of attempts. Your entire twenties.",
          ].map((line, i) => (
            <Reveal key={line} delay={i * 0.15}>
              <li className="font-display text-xl text-ink-strong sm:text-2xl">
                {line}
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mb-10 border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink">
            You carried all of this{" "}
            <strong className="text-ink-strong">by choice, not by force</strong>
            . That is not ordinary. Those are the traits of a champion.
          </p>
        </Reveal>

        <Reveal>
          <p className="mb-6 leading-relaxed text-ink-dim">
            You may now be in POST-UPSC Syndrome — and you should know it has a
            name.
          </p>
        </Reveal>

        {/* The quotable definition card */}
        <Reveal>
          <div
            id="post-upsc-syndrome"
            className="surface-gradient relative rounded-[2px] border border-line p-7 sm:p-9"
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
                  Post-UPSC Syndrome
                </span>
                the phase after your final attempts when you realise the dream
                may never come true — and you must rebuild your identity,
                career and confidence, often carrying a multi-year gap.
              </p>
            </blockquote>
            <p className="mt-4">
              <a
                href="/post-upsc-syndrome/"
                className="text-sm font-medium text-accent-soft transition-colors hover:text-accent"
              >
                What it feels like, and what helps →
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-ink-dim">
            You are among India&rsquo;s most disciplined people. That
            discipline doesn&rsquo;t expire with your attempts.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
