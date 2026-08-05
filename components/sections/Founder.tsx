import Reveal from "@/components/Reveal";

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            The founder&rsquo;s story
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-4 text-3xl leading-tight sm:text-4xl">
            I never thought I wouldn&rsquo;t clear UPSC — not even in my
            wildest dreams.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-8 text-sm text-ink-dim italic">
            Engineer by accident. Broke up with UPSC. Making peace with
            entrepreneurship.
          </p>
        </Reveal>

        {/* Opening block: story text + portrait in a clean two-column grid
            (photo first in source so it leads on mobile). */}
        <div className="sm:grid sm:grid-cols-[1fr_13rem] sm:items-start sm:gap-x-10">
          <div className="mb-8 w-44 sm:order-2 sm:mb-0 sm:w-full">
            <img
              src="/rahul-govindu.jpg"
              alt="Rahul Govindu, founder of The Way Forward"
              width={640}
              height={853}
              loading="lazy"
              className="w-full rounded-[2px] border border-line"
            />
            <p className="mt-2 text-xs text-ink-dim">Rahul Govindu</p>
          </div>

          <div className="sm:order-1">
            <Reveal>
              <p className="mb-6 text-lg leading-relaxed text-ink">
                Six-plus years. Seventeen thousand five hundred hours of
                preparation. No backup exam, no Plan B — and when the final
                result came, a five-year career gap and an emptiness I had no
                name for. That suffering was very personal, and I found no
                one who could address this phase of my life.
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-6 leading-relaxed text-ink-dim">
                It took six months to make peace with it, with family and a
                few friends as the pillars of my restart. Then a UPSC
                syllabus topic became a direction: I had studied agricultural
                trade for Mains, and it stayed with me. I upskilled in data
                analysis, generative AI, and marketing, analysed 300+ export
                products, and built my own agri-exports company from zero.
                Alongside it, I work as an independent full-stack developer,
                shipping web platforms and AI tools for clients in India and
                abroad.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <p className="mb-10 leading-relaxed text-ink">
            None of that erases the years. But it proved something: the
            discipline survives the result.{" "}
            <strong className="text-ink-strong">
              The Way Forward is what I searched for in my darkest month and
              couldn&rsquo;t find.
            </strong>
          </p>
        </Reveal>

        {/* The rebuild, quantified — outcomes as evidence of the thesis
            ("the discipline survives the result"), not resume rows. */}
        <Reveal>
          <div className="surface-gradient mb-10 rounded-[2px] border border-line p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold tracking-[0.14em] text-ink-dim uppercase">
              The rebuild, two years in
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              <div>
                <div className="font-display shine-warm text-3xl sm:text-4xl">
                  100+
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  aspirants &amp; students helped to find their way forward
                </p>
              </div>
              <div>
                <div className="font-display shine text-3xl sm:text-4xl">2</div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  companies built from zero
                </p>
              </div>
              <div>
                <div className="font-display shine text-3xl sm:text-4xl">
                  30+
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  clients served with AI builds, in India &amp; abroad
                </p>
              </div>
              <div>
                <div className="font-display shine text-3xl sm:text-4xl">
                  300+
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  export products analysed across agri, pharma &amp; chemicals
                </p>
              </div>
              <div>
                <div className="font-display shine text-3xl sm:text-4xl">
                  3X
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  growth delivered for export clients in spices,
                  agrochemicals &amp; pharma
                </p>
              </div>
              <div>
                <div className="font-display shine text-3xl sm:text-4xl">
                  10+
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                  small businesses built into digital brands
                </p>
              </div>
            </div>
            <p className="mt-7 border-t border-hairline pt-5 text-sm leading-relaxed text-ink">
              <a
                href="http://www.govindubrothers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft transition-colors hover:text-accent"
              >
                Govindu Brothers Enterprises
              </a>{" "}
              — agri-exports to Dubai &amp; Sri Lanka ·{" "}
              <a
                href="http://www.rosemediahouse.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-soft transition-colors hover:text-accent"
              >
                Rose Media House
              </a>{" "}
              — digital branding for professionals &amp; small businesses ·
              and the third build is the one you&rsquo;re reading — this
              platform, designed and shipped end to end with the same AI
              tooling I use for clients
            </p>
            <p className="mt-3 text-xs leading-relaxed text-ink-dim">
              B.Tech (ECE), JNTU Hyderabad · MA (PSIR), IGNOU · UGC NET
              qualified · ex-mentor &amp; faculty, UPSC coaching industry
            </p>
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="relative my-10 pl-6">
            <span
              aria-hidden
              className="absolute top-0 bottom-0 left-0 w-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,122,26,0.2), #ff7a1a 50%, rgba(255,122,26,0.2))",
              }}
            />
            <p className="font-display shine-warm text-2xl leading-snug sm:text-3xl">
              &ldquo;I failed the UPSC exam, but I refuse to fail life. My
              mission is to turn every aspirant&rsquo;s failure into their
              foundation for success.&rdquo;
            </p>
            <cite className="mt-4 block text-sm text-ink-dim not-italic">
              — Rahul Govindu
            </cite>
          </blockquote>
        </Reveal>

        <Reveal>
          <p className="text-sm text-ink-dim">
            Learning from mistakes, adapting to the present, evolving the
            future — that&rsquo;s the way forward.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
