# Matsambu Projects

Premium marketing site for Matsambu Projects — a South African construction company offering **building construction**, **general building contracting**, and **rib-and-block supply & installation**.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **React Hook Form + Zod** for the contact form.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Project structure

```
app/                # App Router pages and global layout
  layout.tsx        # Root layout: fonts, navbar, footer, page transitions
  page.tsx          # Home
  about/            # About
  services/         # Services
  projects/         # Projects
  contact/          # Contact
  not-found.tsx     # 404
  sitemap.ts        # sitemap.xml
  robots.ts         # robots.txt
components/
  layout/           # Navbar, Footer, PageTransition, CtaBand
  ui/               # Primitives (Button, Reveal, Container, Icons, etc.)
  home/             # Home page sections
  about/            # About page sections
  services/         # Services page sections
  projects/         # Projects grid
  contact/          # Contact form + info card
lib/
  content.ts        # All site copy and data (services, projects, stats, etc.)
  utils.ts          # cn() helper
public/             # Static assets
```

## Editing content

All copy, services, projects, stats, testimonials, team, and contact details live in **`lib/content.ts`** as typed TypeScript objects. Edit there to update the site.

## Contact form

The contact form uses **React Hook Form + Zod** for client-side validation. Submission is currently simulated client-side; look for the `TODO` in `components/contact/ContactForm.tsx` to wire it to a server action or API route.

## Brand

- Primary: **Navy** (`#0B1B2B`)
- Secondary: **Steel** (`#4A5A6A`)
- Accent: **Construction yellow** (`#F5B82E`)
- Fonts: **Plus Jakarta Sans** (display) + **Inter** (body)
