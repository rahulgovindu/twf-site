import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — The Way Forward",
  description:
    "What The Way Forward collects, why, and how you can ask for your data to be removed.",
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="eyebrow mb-6">
          <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          Legal
        </p>
        <h1 className="font-display shine mb-4 text-4xl sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-ink-dim">Last updated: 5 August 2026</p>

        <div className="space-y-8 leading-relaxed text-ink">
          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              What we collect
            </h2>
            <p>
              We collect only what you choose to give us: your email address
              when you subscribe to the weekly digest, and your name, email,
              phone number (optional), and message (optional) when you request
              a free one-on-one call.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Why we collect it
            </h2>
            <p>
              To send you the digest you asked for, and to reach out and
              arrange the call you requested. Nothing else. We do not build
              advertising profiles, and we do not send anything you did not
              sign up for.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Where it lives
            </h2>
            <p>
              Your information is stored in our own database on our hosting
              provider&rsquo;s servers (Hostinger). Access is limited to the
              people running The Way Forward.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              What we never do
            </h2>
            <p>
              We never sell, rent, or share your personal information with
              third parties for their marketing. We never post anything you
              tell us — in a form, on a call, or on WhatsApp — publicly.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">Cookies</h2>
            <p>
              This site currently uses no tracking cookies. If we add basic
              analytics later, this policy will be updated first.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              Your control
            </h2>
            <p>
              Every digest email includes an unsubscribe option. You can also
              ask us at any time to show you, correct, or permanently delete
              whatever we hold about you — write to{" "}
              <a href={`mailto:${SITE.email}`} className="text-accent-soft hover:text-accent">
                {SITE.email}
              </a>{" "}
              and we&rsquo;ll do it within 7 days.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">Contact</h2>
            <p>
              Questions about this policy:{" "}
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
