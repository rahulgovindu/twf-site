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
          <p className="mb-10 text-lg leading-relaxed text-ink">
            Six-plus years. Seventeen thousand five hundred hours. A career gap
            — and a way back, through software, agri-exports, and AI. This
            platform is what I wish had existed for me.
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
      </div>
    </section>
  );
}
