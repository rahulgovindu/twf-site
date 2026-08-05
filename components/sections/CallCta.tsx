"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/* The strongest glow lands here — the logo motif: a dark orb glowing orange
   on the grey canvas. The form posts to /api/book-call.php on Hostinger. */
export default function CallCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/book-call.php", {
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

  const inputClass =
    "w-full rounded-[2px] border border-line bg-black-deep/40 px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-visible:border-accent focus-visible:outline-none";

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
          {status === "done" ? (
            <p className="text-lg font-medium text-accent-soft" role="status">
              Request received. We&rsquo;ll reach out within 3 working days.
            </p>
          ) : (
            <form
              className="mx-auto grid max-w-lg gap-3 text-left"
              onSubmit={onSubmit}
            >
              <label className="sr-only" htmlFor="call-name">
                Your name
              </label>
              <input
                id="call-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
              />
              <label className="sr-only" htmlFor="call-email">
                Email address
              </label>
              <input
                id="call-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
              <label className="sr-only" htmlFor="call-phone">
                Phone (optional)
              </label>
              <input
                id="call-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone (optional)"
                className={inputClass}
              />
              <label className="sr-only" htmlFor="call-note">
                Anything you want us to know (optional)
              </label>
              <textarea
                id="call-note"
                name="note"
                rows={3}
                placeholder="Anything you want us to know (optional)"
                className={inputClass}
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
                className="btn btn-primary mt-2"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Book your call"}
              </button>
              {status === "error" && (
                <p className="text-sm text-accent-soft" role="alert">
                  {message}
                </p>
              )}
            </form>
          )}
        </Reveal>

        {status !== "done" && (
          <Reveal>
            <p className="mt-6 text-sm text-ink-dim">
              We&rsquo;ll reach out within 3 working days.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
