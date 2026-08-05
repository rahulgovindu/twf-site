"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/* Email capture — the conversion spine of the pre-portal phase.
   TODO(wiring): connect to Brevo before launch. Static-export options:
   (a) Brevo hosted-form POST URL, or (b) a small subscribe.php endpoint on
   Hostinger holding the API key. The UI below is final either way. */
export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  return (
    <section id="newsletter" className="relative py-20 sm:py-24">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8">
        <Reveal>
          <div className="surface-gradient rounded-[2px] border border-line-strong p-8 sm:p-11">
            <p className="eyebrow mb-5">
              <span className="inline-block h-px w-7 bg-accent" aria-hidden />
              The weekly digest
            </p>
            <h2 className="font-display shine mb-4 text-3xl sm:text-4xl">
              One honest email a week.
            </h2>
            <p className="mb-7 text-ink-dim">
              Opportunities, stories, and next steps for people rebuilding
              after the exam. No coaching ads. No rank-holder worship.
              Unsubscribe anytime.
            </p>

            {status === "idle" ? (
              <form
                className="flex flex-wrap gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("done");
                }}
              >
                <label className="sr-only" htmlFor="nl-email">
                  Email address
                </label>
                <input
                  id="nl-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 basis-56 rounded-[2px] border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:border-accent focus-visible:outline-none"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="font-medium text-accent-soft" role="status">
                You&rsquo;re on the list. Talk soon.
              </p>
            )}

            <p className="mt-5 text-xs tracking-wide text-accent-soft">
              Subscribers get early access when the portal opens.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
