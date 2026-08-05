import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    num: "01",
    title: "Stories that get it",
    body: "Ex-aspirants who rebuilt — honest conversations and podcasts, not success worship.",
  },
  {
    num: "02",
    title: "Opportunities that fit",
    body: "Curated jobs and roles where your years of preparation actually count.",
  },
  {
    num: "03",
    title: "Skills for the next chapter",
    body: "Practical tracks with industry experts, built for people starting over.",
  },
  {
    num: "04",
    title: "Support that listens",
    body: "One-on-one guidance and a community that knows what you carried.",
  },
];

export default function PortalTeaser() {
  return (
    <section id="portal-teaser" className="fade-grey relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            What&rsquo;s coming
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-6 text-4xl sm:text-5xl">
            A portal built for what comes next.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-ink">
            This page is only the beginning. Over the coming months, The Way
            Forward opens a portal made for aspirants rebuilding their careers.
          </p>
        </Reveal>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.08}>
              <div className="surface-gradient group h-full rounded-[2px] border border-line p-7 transition-colors hover:border-line-strong">
                <p className="mb-3 text-xs font-medium tracking-[0.14em] text-accent">
                  {p.num}
                </p>
                <h3 className="font-display shine mb-2 text-xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="flex flex-wrap items-center justify-between gap-5 rounded-[2px] border p-7"
            style={{
              borderColor: "rgba(255,122,26,0.25)",
              background:
                "linear-gradient(120deg, rgba(255,122,26,0.09), rgba(255,122,26,0.03) 60%, transparent)",
            }}
          >
            <p className="m-0 max-w-xl">
              <strong className="mb-0.5 block text-ink-strong">
                Early access opens to the list first.
              </strong>
              <span className="text-ink-dim">
                Join now and you&rsquo;ll be the first inside when the doors
                open.
              </span>
            </p>
            <a href="#newsletter" className="btn btn-accent">
              Get early access
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
