import type { Faq } from "@/lib/seo";

/**
 * Homepage FAQ — single source for both the rendered <details> list and the
 * FAQPage schema, so the two can't drift (Google treats a mismatch between
 * marked-up and visible answers as a structured-data violation).
 *
 * Written for answer engines as much as for readers: each question is phrased
 * the way people actually type it, and each answer is self-contained — it
 * makes sense lifted out of the page with no surrounding context.
 */
export const HOME_FAQ: Faq[] = [
  {
    q: "What is POST-UPSC Syndrome?",
    a: "POST-UPSC Syndrome is the phase after your final attempts when you realise the dream may never come true — and you must rebuild your identity, career and confidence, often carrying a multi-year gap. It shows up as identity loss, replaying the result, social withdrawal, career paralysis and a feeling of having failed at life. It is a lived experience, not a medical diagnosis.",
  },
  {
    q: "What are the actual odds of clearing UPSC?",
    a: "Fewer than 1 in 500 who write the exam make the final list. Roughly 10 lakh apply each year, about 5 lakh appear, and around 1,000 are selected — a success rate of 0.1–0.2%. Of those selected, only about 180 become IAS officers.",
  },
  {
    q: "What should I do after my last UPSC attempt?",
    a: "First, name what you are going through instead of treating it as a verdict on your worth. Second, give it time — acceptance does not arrive on a schedule. Third, keep the people who stayed close. Fourth, take professional support if the weight will not lift. Only then rebuild: the discipline that carried you through preparation is what you build the next thing on.",
  },
  {
    q: "Are the years spent preparing for UPSC wasted?",
    a: "No. The preparation builds sustained self-direction without supervision, the ability to synthesise contradictory sources under time pressure, tolerance for working without feedback, and broad current-affairs literacy. Those are capital, not waste. What the years cost you is time and an identity — both real, and both recoverable.",
  },
  {
    q: "How do I explain a multi-year UPSC gap on my resume?",
    a: "State it plainly as full-time preparation for the Civil Services Examination, with the years given. Do not hide it or blur the dates. Then translate it: years of self-directed study, research and synthesis across economics, polity, environment and international relations, and written analysis under strict time limits. Employers penalise evasion far more than they penalise the gap.",
  },
  {
    q: "Is The Way Forward a coaching institute?",
    a: "No. The Way Forward is not coaching, not therapy, and not a job consultancy. It is a platform for aspirants whose attempts are over — stories of people who rebuilt, career opportunities, skills, and support to regain confidence. It has a standing rule against partnering with anyone who monetises re-attempts.",
  },
  {
    q: "Is The Way Forward free?",
    a: "Yes. The one-on-one call is free, with no pitch and no cost, and everything published on the site — the writing, the reset checklist, the verified stories — is free to read and use.",
  },
  {
    q: "Where can a UPSC aspirant get mental-health support in India?",
    a: "Tele-MANAS is free and available 24×7 on 14416, run by the Government of India. iCall, run by TISS, is on 9152987821. The Vandrevala Foundation helpline is 9999-666-555. If the weight will not lift — anxiety, depression, hopelessness — please use one of them today.",
  },
  {
    q: "Who is behind The Way Forward?",
    a: "Rahul Govindu, who gave the exam six-plus years and about 17,500 hours and was never selected. He rebuilt over the following two years into agri-exports and independent software work, and started The Way Forward as the thing he searched for in his darkest month and could not find. In 2026 he also founded Pailam, a healthcare company in Hyderabad, where he is CEO.",
  },
];
