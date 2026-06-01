# Progreso y Filantropía Social

> Sitio web de la Fundación Progreso y Filantropía Social — organización ciudadana del tercer sector que construye ciudadanía activa, participativa y comprometida con el bienestar general.

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-Propietary-blue)](./LICENSE)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Tech Stack

| Layer | Technology | Purpose |
| ----- | ---------- | ------- |
| **Framework** | Astro 5 | Static site generation, content collections |
| **Styling** | Tailwind CSS 4 | Utility-first design system |
| **Fonts** | Cabinet Grotesk, DM Sans, Playfair Display | Editorial typography |
| **Icons** | Custom SVG | Vector icon sets per section |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Hero.astro        # Home & page hero banners
│   ├── SectionTitle.astro # Section headings with overline support
│   ├── ImpactStats.astro  # Metric counters (light/dark variants)
│   ├── TrustBadge.astro   # Marquee-style principle pills
│   ├── ProjectCard.astro  # Project showcase cards
│   ├── BlogCard.astro     # Blog post cards
│   ├── DonationCTA.astro  # Donation call-to-action (inline/banner)
│   ├── Header.astro       # Fixed navigation header
│   └── Footer.astro       # Site footer
├── content/
│   └── blog/              # Markdown blog posts (content collections)
├── data/
│   ├── site.ts            # Site-wide configuration & metadata
│   └── navigation.ts      # Header & footer navigation links
├── layouts/
│   └── BaseLayout.astro   # Root HTML layout with SEO & scroll scripts
├── pages/
│   ├── index.astro        # Home page
│   ├── quienes-somos.astro
│   ├── proyectos.astro
│   ├── blog/index.astro
│   ├── blog/[slug].astro
│   ├── donar.astro
│   ├── contacto.astro
│   ├── red-de-cooperacion.astro
│   └── transparencia.astro
├── styles/
│   └── global.css         # Tailwind theme, animations, utilities
└── public/
    ├── images/
    │   ├── icons/         # Custom SVG value icons (libertad, igualdad, etc.)
    │   ├── projects/      # Project thumbnail images
    │   └── blog/         # Blog post hero images
    ├── favicon.svg
    └── og-image.png
```

## Design System

### Typography

We use a **three-font editorial system** to avoid the generic AI aesthetic:

- **Cabinet Grotesk** — Display/headings. Geometric neo-grotesque with character.
- **DM Sans** — Body text. Clean, readable, slightly wider than Inter.
- **Playfair Display** — Serif accents. Used for italic highlights and emotional emphasis.

### Color Palette

| Token | Value | Usage |
| ----- | ----- | ----- |
| `--color-action` | `#2A54FF` | Primary CTA, links, interactive elements |
| `--color-institutional` | `#0C1222` | Dark backgrounds, header, footer |
| `--color-base` | `#FAFBFD` | Page background |

### Animation Philosophy

- **Scroll reveal**: Elements fade up with blur using `IntersectionObserver`
- **Stagger**: Cards use `--delay` CSS custom properties for sequential entrance
- **Micro-interactions**: Hover glow follows cursor on value cards, icons scale on hover
- **Accessibility**: `@media (prefers-reduced-motion: reduce)` disables all motion

## Content Management

Blog posts live in `src/content/blog/` as Markdown files with frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
pubDate: 2025-01-15
category: "noticias"
author: "Nombre del autor"
draft: false
---
```

Categories: `noticias`, `eventos`, `historias-de-impacto`, `analisis`, `transparencia`, `anuncios`.

## Commands

| Command | Action |
| ------- | ------ |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)