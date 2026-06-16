# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

LumeBox landing page and blog — a marketing consultancy website built with Next.js 14 (App Router). The site is in Brazilian Portuguese (pt-BR). The primary CTA links to WhatsApp (`https://wa.me/5511914887343`).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint via next lint

## Architecture

**Next.js 14 App Router** with static rendering. No database — blog posts are defined as hardcoded data in `lib/posts.ts` (content as raw HTML strings). Posts with `draft: true` are excluded from static generation.

**Styling**: Tailwind CSS 3 with a custom design system defined in `tailwind.config.ts`:
- Brand colors: `lume-yellow` (#F9C623), `lume-yellow-dark` (#D4A614), `lume-dark` (#1A1A1A)
- Fonts: Inter (sans/body via `--font-inter`) and Playfair Display (display/headings via `--font-playfair`), loaded as Next.js Google Fonts in `app/layout.tsx`
- Custom border-radius tokens: `rounded-btn`, `rounded-card`, `rounded-card-sm`

**Article prose styling** uses a `.article-prose` CSS class in `app/globals.css` (not Tailwind prose plugin). Blog post HTML is rendered via `dangerouslySetInnerHTML`. Callout paragraphs use `<p class="callout">`.

**Animations**: Framer Motion with `useReducedMotion` support. Interactive components use `'use client'` directive.

**Image handling**: `next/image` with `sharp`. Remote images allowed from `**.bitrix24.com` and `upload.wikimedia.org` (configured in `next.config.js`). Static assets are imported directly from `assets/` directory.

**OG images**: Auto-generated per blog post via `app/blog/[slug]/opengraph-image.tsx` using `next/og` ImageResponse.

## Key conventions

- Path alias `@/*` maps to the project root
- Landing page sections: Navbar, Hero, BitrixBadge, Services, Qualification, FAQ, Footer
- Blog components live under `components/blog/`
- `WA_LINK` constant is duplicated across components that need it (Navbar, Hero, blog article page)
