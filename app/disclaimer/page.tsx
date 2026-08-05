import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer — The Way Forward",
  description:
    "What The Way Forward is, what it is not, and how to read the information on this site.",
  alternates: { canonical: "/disclaimer/" },
};

export default function Disclaimer() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="eyebrow mb-6">
          <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          Legal
        </p>
        <h1 className="font-display shine mb-4 text-4xl sm:text-5xl">
          Disclaimer
        </h1>
        <p className="mb-10 text-sm text-ink-dim">Last updated: 5 August 2026</p>

        <div className="space-y-8 leading-relaxed text-ink">
          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              What this platform is not
            </h2>
            <p>
              The Way Forward is not a coaching institute, not a therapy or
              counselling service, and not a job consultancy or placement
              agency. Nothing on this site is professional medical,
              psychological, legal, or financial advice.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Mental health helplines
            </h2>
            <p>
              The helplines listed on this site (Tele-MANAS, iCall, Vandrevala
              Foundation) are independent services run by the Government of
              India and non-profit organisations. We list them so they are
              easy to find; we do not operate them and are not responsible for
              their availability or the support they provide. If you are in
              immediate danger, please contact local emergency services.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Personal experience, not guarantees
            </h2>
            <p>
              The stories, opinions, and guidance shared here — including the
              founder&rsquo;s — are personal experience. Career transitions
              differ from person to person. We cannot and do not guarantee any
              outcome: a job, an income, an admission, or a result of any
              kind.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Statistics and sources
            </h2>
            <p>
              Exam figures on this site (applicants, selection rates) are
              approximations drawn from publicly available UPSC Annual Reports
              and are presented to illustrate scale, not as official data.
              Verify current figures with official sources before relying on
              them.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              External links
            </h2>
            <p>
              Links to other websites and platforms are provided for
              convenience. We are not responsible for their content or
              practices.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">Contact</h2>
            <p>
              Questions about this disclaimer:{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent-soft hover:text-accent">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
