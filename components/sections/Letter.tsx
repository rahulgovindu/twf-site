import Reveal from "@/components/Reveal";

const PARAGRAPHS = [
  "You may already know the odds at UPSC: fewer than 1 in 500 who write this exam will ever see their name on the final list. Failure here is not the exception — it is the overwhelming rule, even for the brightest.",
  "It is easy to judge a person by a result. It is much harder to see the years of effort, the pain, and the quiet sacrifices behind it. Many toppers have confessed they nearly broke before they cracked it. Even Rank 1 could not have claimed, at the start, that success was certain. But the effort is real. The hardships are real. The setbacks are real. This preparation itself turns a kid into an adult.",
  "So this is my humble request: be kind. In these hard times your child needs your hand, not your verdict. Your lap is still the only place we feel relieved. Show them you will not judge them by one exam. Give them time to recover, and hope to look forward — there is so much more to explore and achieve in this wonderful life.",
  "Our regrets may fade with time. Our gratitude to you never will.",
];

export default function Letter() {
  const shareText = encodeURIComponent(
    "A letter to the parents of every UPSC aspirant — https://thewayforward.in/#letter"
  );

  return (
    <section id="letter" className="fade-warm relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            A letter to the parents
          </p>
        </Reveal>

        <Reveal>
          {/* Warm paper-dark letter card */}
          <div
            className="rounded-[2px] border border-line p-8 sm:p-12"
            style={{
              background: "linear-gradient(180deg, #1b1815, #16130f)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <h2 className="font-display shine mb-8 text-3xl sm:text-4xl">
              Dear Parents,
            </h2>
            {PARAGRAPHS.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="font-display mb-6 text-[1.06rem] leading-[1.85] font-normal text-ink last:mb-0"
              >
                {p}
              </p>
            ))}

            <div className="mt-10">
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
