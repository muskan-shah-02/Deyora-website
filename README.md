# Deyora Intelligence — Website

The official website for **Deyora Intelligence**, the AI company behind **DokyDoc** and a growing portfolio of intelligence products for the software delivery lifecycle.

## Architecture

Built as a **Next.js 14 (App Router) + TypeScript + Tailwind** site. Separation of concerns:

- **Deyora** is the parent brand — vision, mission, story, principles.
- **Products** are data-driven. Add a new product by appending an entry to `lib/products.ts` — a new page renders at `/products/<slug>` automatically.

```
app/
├── layout.tsx              # Fonts + Nav/Footer shell
├── page.tsx                # Deyora home (vision-led)
├── about/page.tsx          # Vision, mission, story, principles
├── products/
│   ├── page.tsx            # Product catalog
│   └── [slug]/page.tsx     # Dynamic product page (DokyDoc, future products)
├── contact/page.tsx
└── globals.css
components/                 # Nav, Footer, Reveal, Marquee,
                            # MetricCounter, CostCalculator, VideoPlayer, ProductCard…
lib/
├── company.ts              # Deyora brand data (vision, mission, story, principles)
└── products.ts             # Product portfolio data — single source of truth
public/
├── images/logo.svg
└── videos/glowing.mp4
```

## Design System

- **Display:** Barlow Condensed Black — large headlines
- **Mono:** IBM Plex Mono — labels, micro-copy, codes
- **Sans:** Outfit / IBM Plex Sans — body copy
- **Palette:** Black `#000`, layered grays, white, with blue gradient accent from the logo (`#2B6BFF` → `#A8C5FF`)
- **Motion:** scroll reveals, animated metric counters, marquee tickers, shimmer headline accents

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # TS check
```

## Adding a New Product

1. Append a `Product` object to the `products` array in `lib/products.ts`.
2. The catalog (`/products`) and detail route (`/products/<slug>`) update automatically.
3. Drop hero/demo video into `public/videos/` if needed.

## Routes

| Path                   | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `/`                    | Deyora Intelligence home                   |
| `/about`               | Vision, mission, story, principles         |
| `/products`            | Portfolio catalog                          |
| `/products/dokydoc`    | DokyDoc product page                       |
| `/products/[slug]`     | Any future product                         |
| `/contact`             | Contact                                    |
