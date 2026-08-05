import Reveal from "@/components/Reveal";

/* The strongest sunrise glow lands here — journey's end. */
export default function CallCta() {
  return (
    <section id="call-cta" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 115%, rgba(255,122,26,0.22), rgba(255,122,26,0.07) 45%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 justify-center">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            The first step
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-6 text-4xl sm:text-5xl">
            A free one-on-one call.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-10 text-lg leading-relaxed text-ink">
            No pitch, no cost. Just a conversation about what&rsquo;s next —
            career clarity, skills, or simply talking it through.
          </p>
        </Reveal>
        <Reveal>
          <a href="mailto:contact@thewayforward.in?subject=Free%20one-on-one%20call" className="btn btn-primary">
            Book your call
          </a>
          <p className="mt-6 text-sm text-ink-dim">
            We&rsquo;ll reach out within 3 working days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
