import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { byPath } from "@/lib/content";
import {
  ORG_ID,
  PERSON_ID,
  WEBSITE_ID,
  abs,
  baseGraph,
  breadcrumbNode,
  faqNode,
  graph,
  pageMetadata,
  type Crumb,
  type Faq,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

const PATH = "/about/";
const page = byPath(PATH);
const TRAIL: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "About", path: PATH },
];

export const metadata = pageMetadata({
  title: "About The Way Forward and Founder Rahul Govindu",
  description:
    "The Way Forward is a free platform for UPSC and government exam aspirants rebuilding their careers, founded by former UPSC aspirant Rahul Govindu.",
  path: PATH,
});

/* Visible below, so the marked-up answers match what readers see. */
const FAQS: Faq[] = [
  {
    q: "What is The Way Forward?",
    a: "The Way Forward is a free platform for UPSC and government exam aspirants whose attempts are over and who are rebuilding their identity, career and confidence. It publishes writing, verified stories and practical tools, and offers a free one-on-one call.",
  },
  {
    q: "Who founded The Way Forward?",
    a: "Rahul Govindu founded The Way Forward in 2026. Rahul spent six-plus years and about 17,500 hours preparing for UPSC, was never selected, and built the platform as the support that was missing during that phase.",
  },
  {
    q: "Is The Way Forward coaching or therapy?",
    a: "No. The Way Forward is not a coaching institute, a therapy service or a job consultancy, and it does not partner with anyone who monetises re-attempts.",
  },
];

const JSON_LD = graph([
  ...baseGraph,
  breadcrumbNode(TRAIL),
  faqNode(FAQS, PATH),
  {
    "@type": ["AboutPage", "ProfilePage"],
    "@id": `${abs(PATH)}#webpage`,
    url: abs(PATH),
    name: "About The Way Forward and Founder Rahul Govindu",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": PERSON_ID },
    dateCreated: page.published,
    dateModified: page.updated,
    inLanguage: "en-IN",
  },
]);

export default function About() {
  return (
    <>
      <JsonLd data={JSON_LD} />
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Breadcrumbs trail={TRAIL} />
        <p className="eyebrow mb-6">
          <span className="inline-block h-px w-7 bg-accent" aria-hidden />
          About
        </p>
        <h1 className="font-display shine mb-8 text-4xl sm:text-5xl">
          About The Way Forward
        </h1>

        <div className="space-y-12 leading-relaxed text-ink">
          {FAQS.map((faq) => (
            <section key={faq.q}>
              <h2 className="font-display shine mb-3 text-2xl">{faq.q}</h2>
              <p>{faq.a}</p>
            </section>
          ))}

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              About Rahul Govindu
            </h2>
            <p className="mb-4">
              Rahul Govindu is based in Hyderabad. After UPSC, Rahul rebuilt
              through agri-exports and independent software work. Rahul holds a
              B.Tech (ECE) from JNTU Hyderabad and an MA (PSIR) from IGNOU, has
              qualified UGC NET, and has worked as a mentor and faculty member
              in the UPSC coaching industry.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Founder &amp; CEO,{" "}
                <a
                  href="https://pailam.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft transition-colors hover:text-accent"
                >
                  Pailam
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://www.pailambridge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft transition-colors hover:text-accent"
                >
                  Pailam Bridge
                </a>
                , a healthcare company in Hyderabad
              </li>
              <li>Founder, The Way Forward</li>
              <li>
                Founder and Managing Director,{" "}
                <a
                  href="http://www.govindubrothers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft transition-colors hover:text-accent"
                >
                  Govindu Brothers Enterprises
                </a>
                , agri-exports
              </li>
              <li>
                Co-founder,{" "}
                <a
                  href="http://www.rosemediahouse.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-soft transition-colors hover:text-accent"
                >
                  Rose Media House
                </a>
                , digital branding
              </li>
            </ul>
            <p className="mt-4">
              Read{" "}
              <a
                href="/#founder"
                className="text-accent-soft transition-colors hover:text-accent"
              >
                the founder&rsquo;s story
              </a>{" "}
              in first person.
            </p>
          </section>

          <section>
            <h2 className="font-display shine mb-3 text-2xl">
              How we check what we publish
            </h2>
            <p>
              The list of people who failed UPSC includes only cases with a
              primary source, and it names widely repeated claims found to be
              unverified or false. POST-UPSC Syndrome is described as a lived
              experience, not a medical diagnosis. Corrections are welcome at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent-soft transition-colors hover:text-accent"
              >
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
