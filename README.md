# Valor Devs

> **We Build. We Deliver.** — the marketing website for Valor Devs, an AI-native software engineering partner operating under **Global Vital Spark LLC**, Austin, TX.

Built with Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, and Framer Motion. Dark-only, fully responsive (320px → 1920px+), and ready to deploy on Vercel.

---

## Tech Stack

| Layer        | Choice |
| ------------ | ------ |
| Framework    | Next.js 14 (App Router) |
| Language     | TypeScript (strict mode) |
| Styling      | Tailwind CSS |
| Animations   | Framer Motion |
| Icons        | Lucide React |
| Fonts        | Space Grotesk (headings) · Inter (body) via `next/font` |
| Deploy       | Vercel (custom domain via Hostinger DNS) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# edit .env.local as needed

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

### Scripts

| Command         | Description |
| --------------- | ----------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Production build (static export of all routes) |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint |

---

## Environment Variables

See [`.env.example`](.env.example). All are optional with sensible defaults.

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata, sitemap, OG tags) |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number shown in UI |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email shown in UI |
| `CONTACT_FORM_ENDPOINT` | (Optional) endpoint to wire the contact form to a real backend |

---

## Project Structure

```
src/
├─ app/                      # App Router pages & routes
│  ├─ page.tsx               # Homepage
│  ├─ layout.tsx             # Root layout (fonts, nav, footer, metadata)
│  ├─ template.tsx           # Page-transition wrapper
│  ├─ globals.css            # Design tokens & base styles
│  ├─ sitemap.ts / robots.ts # SEO foundations
│  ├─ services/              # /services + /services/[slug] (8 pages)
│  ├─ portfolio/             # /portfolio + /portfolio/[slug] (8 case studies)
│  ├─ insights/              # /insights + /insights/[slug] (6 articles)
│  ├─ about, process, industries, careers, contact
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                    # Button, Badge, Section, Reveal, Counter, Typewriter
│  ├─ cards/                 # ServiceCard, CaseStudyCard, TeamCard, TestimonialCard, ArticleCard
│  ├─ sections/              # TrustBar, StatsStrip, IndustriesGrid, LogoStrip
│  ├─ Navbar, Footer, Hero, PageHero, CTASection, FAQ, ContactForm, Loader, ParticleField, Logo
└─ lib/
   ├─ site.ts                # Brand, contact, trust signals
   ├─ services.ts            # 8 services + detail content
   ├─ content.ts             # Case studies, testimonials, industries, team, articles, roles, FAQs, process
   ├─ nav.ts                 # Navigation structure
   └─ utils.ts               # cn() helper
```

All content lives in `src/lib` — edit those files to update copy, services, case studies, and articles without touching components.

---

## Design System

Defined in `tailwind.config.ts` and `src/app/globals.css`:

- **Background** `#0a0f1e` · **Surface** `#0f1729` · **Card** `#151f3a`
- **Gold** `#c9a84c` (light `#e8c96d`, dark `#a0832a`)
- **Muted text** `#8899bb` · **Border** `rgba(201,168,76,0.2)`

Utility classes: `.text-gradient-gold`, `.glass`, `.eyebrow`, `.card-surface`.

---

## Features

- Animated particle hero with floating shield + cycling typewriter
- Sticky glass navbar with mega-menu (desktop) and full-screen slide-in menu (mobile)
- Scroll-triggered reveals, animated stat counters, hover lift + gold glow on cards
- Filterable portfolio grid, FAQ accordion, multi-field contact form
- Page-transition fades, first-visit loader, reduced-motion support
- Per-page metadata + OG tags, `sitemap.xml`, `robots.txt`, semantic HTML, WCAG-minded contrast

---

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` (Production scope).
4. Deploy — Vercel auto-detects Next.js, no extra config needed.
5. Add your custom domain in **Project → Settings → Domains**, then point your Hostinger DNS:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`

---

## Notes

- **Dark mode only** — no light theme by design.
- All case studies, testimonials, and articles use realistic **fictional** placeholder content (no Lorem Ipsum).
- The contact form is functional client-side (success state). Wire it to `CONTACT_FORM_ENDPOINT` (e.g. Resend, Formspree) for production submissions.

---

© Valor Devs. A Global Vital Spark LLC Company · Austin, TX 78731 🇺🇸
