import Reveal from "@/components/Reveal";

const HELPLINES = [
  {
    name: "Tele-MANAS",
    tel: "14416",
    display: "14416",
    note: "Govt of India, 24×7, free",
  },
  {
    name: "iCall",
    tel: "+919152987821",
    display: "9152987821",
    note: "TISS, Mon–Sat, 8am–10pm",
  },
];

export default function Support() {
  return (
    <section id="support" className="glow-silver relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            You are not alone
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-6 text-4xl sm:text-5xl">
            Struggling? Reach out.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-10 text-lg leading-relaxed text-ink">
            We&rsquo;ll listen, and connect you with professional support, free
            of cost.
          </p>
        </Reveal>

        <div className="space-y-4">
          {HELPLINES.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.1}>
              <div className="surface-gradient flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-[2px] border border-line p-5 sm:p-6">
                <strong className="text-ink-strong">{h.name}</strong>
                <a
                  href={`tel:${h.tel}`}
                  className="font-medium text-accent-soft transition-colors hover:text-accent"
                >
                  {h.display}
                </a>
                <span className="text-sm text-ink-dim">{h.note}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-ink-dim">
            We listen and connect you to professionals — we don&rsquo;t claim
            to provide counselling ourselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
