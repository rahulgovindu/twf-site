"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

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
              {whatsappLink() && (
                <a
                  href={whatsappLink()!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5L9.7 7.6c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3Z" />
                  </svg>
                  Or message me on WhatsApp
                </a>
              )}
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
            <p className="mt-2 text-xs text-ink-dim">
              We store only what you submit, never share it, and you can ask
              us to delete it anytime.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
