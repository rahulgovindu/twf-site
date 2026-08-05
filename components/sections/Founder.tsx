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
          <h2 className="font-display shine mb-8 text-3xl leading-tight sm:text-4xl">
            I never thought I wouldn&rsquo;t clear UPSC — not even in my
            wildest dreams.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mb-6 text-lg leading-relaxed text-ink">
            Six-plus years. Seventeen thousand five hundred hours of
            preparation. No backup exam, no Plan B — and when the final
            result came, a five-year career gap and an emptiness I had no name
            for. That suffering was very personal, and I found no one who
            could address this phase of my life.
          </p>
        </Reveal>
        <Reveal>
          <p className="mb-6 leading-relaxed text-ink-dim">
            It took six months to make peace with it, with family and a few
            friends as the pillars of my restart. Then a UPSC syllabus topic
            became a direction: I had studied agricultural trade for Mains,
            and it stayed with me. I upskilled in data analysis, generative
            AI, and marketing, analysed 300+ export products, and built my
            own agri-exports company from zero. Alongside it, I build and
            ship AI tools for clients in India and abroad.
          </p>
        </Reveal>
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
