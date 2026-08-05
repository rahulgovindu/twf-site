import Reveal from "@/components/Reveal";
import { SITE, whatsappLink } from "@/lib/site";

/* Call for ex-aspirants who made it big after UPSC — come tell your story
   on the podcast. The audience here is the successful minority; the reader
   in the dark is who their story serves. */
export default function ShareStory() {
  const wa = whatsappLink(
    "Hi Rahul, I rebuilt my career after UPSC and would like to share my story on The Way Forward podcast."
  );
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(
    "I want to share my story on the podcast"
  )}`;

  return (
    <section id="share-story" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div
            className="rounded-[2px] border p-8 text-center sm:p-12"
            style={{
              borderColor: "rgba(255,122,26,0.25)",
              background:
                "radial-gradient(ellipse 90% 120% at 50% 120%, rgba(255,122,26,0.12), rgba(255,122,26,0.03) 55%, transparent 80%)",
            }}
          >
            <p className="eyebrow mb-6 justify-center">
              <span className="inline-block h-px w-7 bg-accent" aria-hidden />
              Share your story
              <span className="inline-block h-px w-7 bg-accent" aria-hidden />
            </p>
            <h2 className="font-display shine mb-6 text-3xl sm:text-4xl">
              Made it big after UPSC?
              <span className="shine-warm block">
                Be a light for many in the dark.
              </span>
            </h2>
            <p className="mx-auto mb-9 max-w-xl leading-relaxed text-ink">
              If you rebuilt after the exam — a career, a business, peace of
              mind — your story could be the map someone is searching for
              tonight. Come tell it on The Way Forward podcast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Share your story
                </a>
              )}
              <a href={mail} className="btn btn-ghost">
                Write to us instead
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
