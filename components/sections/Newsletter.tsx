"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/* Email capture — posts to the PHP endpoint on Hostinger (hostinger-api/).
   In local dev the endpoint doesn't exist; the form will show the error state. */
export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe.php", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.ok) {
        setStatus("done");
      } else {
        setMessage(json?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setMessage("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

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

            {status === "done" ? (
              <p className="font-medium text-accent-soft" role="status">
                You&rsquo;re on the list. Talk soon.
              </p>
            ) : (
              <form className="flex flex-wrap gap-3" onSubmit={onSubmit}>
                <label className="sr-only" htmlFor="nl-email">
                  Email address
                </label>
                <input
                  id="nl-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="min-w-0 flex-1 basis-56 rounded-[2px] border border-line bg-black-deep/40 px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:border-accent focus-visible:outline-none"
                />
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-accent-soft" role="alert">
                {message}
              </p>
            )}

            <p className="mt-5 text-xs tracking-wide text-accent-soft">
              Subscribers get early access when the portal opens.
            </p>
            <p className="mt-2 text-xs text-ink-dim">
              We store only what you submit, never share it, and you can ask
              us to delete it anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
