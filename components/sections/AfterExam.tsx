import Reveal from "@/components/Reveal";

/* Social proof — publicly documented figures whose civil-services chapter
   ended without the list (or who walked away from the service) and who built
   large lives after. Kept to well-documented names only; framing stays
   factual ("prepared", "left") to avoid over-claiming. */
const PEOPLE = [
  {
    name: "Ram Nath Kovind",
    line: "Turned down an allied service after his attempts — later became President of India.",
  },
  {
    name: "N. Chandrababu Naidu",
    line: "Prepared for the civil services — became Chief Minister of Andhra Pradesh.",
  },
  {
    name: "Anubhav Dubey",
    line: "Left UPSC preparation — co-founded Chai Sutta Bar, now a nationwide chain.",
  },
  {
    name: "Anubhav Singh Bassi",
    line: "Left preparation — became one of India's biggest stand-up comedians.",
  },
  {
    name: "Roman Saini",
    line: "Cleared the IAS — then resigned to co-found Unacademy.",
  },
  {
    name: "Rajan Singh",
    line: "Left the IPS — built an ed-tech company teaching habit change.",
  },
];

export default function AfterExam() {
  return (
    <section id="after-exam" className="fade-grey relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            You&rsquo;re in good company
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display shine mb-6 text-4xl sm:text-5xl">
            The exam was a chapter. It was never the whole book.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-12 max-w-2xl leading-relaxed text-ink-dim">
            Some never made the list. Some made it and walked away. All of
            them took what the preparation built in them and spent it
            somewhere the world could see.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="surface-gradient h-full rounded-[2px] border border-line p-6">
                <h3 className="mb-1.5 font-medium text-ink-strong">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink-dim">
                  {p.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-sm text-ink-dim">
            Walked this road yourself and built something?{" "}
            <a
              href="#share-story"
              className="font-medium text-accent-soft transition-colors hover:text-accent"
            >
              Tell your story on the podcast →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
