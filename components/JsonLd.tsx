/**
 * Renders a JSON-LD graph into the shipped HTML.
 *
 * Deliberately a plain <script>, not next/script: next/script serialises the
 * tag into the RSC flight payload and injects it on the client, so anything
 * that doesn't execute JavaScript — which is most AI answer-engine crawlers —
 * sees no structured data at all. A server-rendered script tag is in the HTML
 * on first byte.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
