# The Way Forward

**Live: [thewayforward.in](https://thewayforward.in)**

A platform for UPSC and government exam aspirants rebuilding their careers
after their attempts end — stories, opportunities, skills, and support.

> The world only counts your hard work when you succeed.
> **We count it anyway.**

Built solo, end to end — brand system to live deployment — by
[Rahul Govindu](https://www.linkedin.com/in/rahulgovindu/), an ex-UPSC
aspirant (6+ years, 17,500+ hours) who rebuilt through entrepreneurship.
The platform names the phase nobody talks about —
[**POST-UPSC Syndrome**](https://thewayforward.in/post-upsc-syndrome/) —
and exists to help aspirants walk out of it.

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router, static export) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 (custom design tokens, `@utility` layer) · Framer Motion |
| Fonts | Fraunces + Fira Sans, self-hosted via `next/font` (zero external requests) |
| Backend | PHP 8 (PDO, prepared statements) · MySQL — JSON form APIs with honeypot + same-origin checks |
| Infrastructure | Hostinger (Apache) · Let's Encrypt · hardened `.htaccess` (HTTPS, HSTS, security headers, caching) |
| SEO / AEO | JSON-LD graph (Organization, WebSite, FAQPage, Article, DefinedTerm, BreadcrumbList) · programmatic sitemap/robots · OpenGraph |
| Workflow | Git/GitHub · AI-assisted development (Claude) · custom scripting for asset generation |

## Repository layout

- **`master`** — application source (this branch)
- **`hostinger`** — auto-generated deploy branch: the built static site plus
  the `api/` PHP endpoints, mirroring exactly what `public_html` serves.
  Never edited by hand.
- `hostinger-api/` — form endpoint source + MySQL schema + deploy README.
  `config.php` (DB credentials) lives only on the server: gitignored *and*
  Apache-denied.
- `TWF-PROJECT-CONTEXT.md` — the canonical project brief: mission, copy
  bank, design tokens, editorial rules, roadmap.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export -> out/
```

Deployment is the contents of `out/` served from Apache `public_html`,
plus `hostinger-api/` under `public_html/api/`. Full steps in
[`hostinger-api/README.md`](hostinger-api/README.md).

## Author

**Rahul Govindu** — Full-Stack & AI Developer · Founder,
[Govindu Brothers Enterprises](http://www.govindubrothers.com) (agri-exports)
· Co-founder, [Rose Media House](http://www.rosemediahouse.in)

- Website: [thewayforward.in](https://thewayforward.in)
- LinkedIn: [/in/rahulgovindu](https://www.linkedin.com/in/rahulgovindu/)
- YouTube: [@rahulgovindu](https://www.youtube.com/@rahulgovindu)
- Email: info@thewayforward.in

This repository is public as a portfolio work-sample. The Way Forward name,
content, and brand are © Rahul Govindu — all rights reserved.
