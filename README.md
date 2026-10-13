# Deyora Intelligence: website

The website of **Deyora Intelligence Private Limited**, the company behind
**DokyDoc**. The product itself lives at [dokydoc.com](https://dokydoc.com); this
site explains the company, its vision and its products, and takes enquiries.

## The one rule

**Every sentence on this site must be true today.** The company is pre-revenue,
DokyDoc is live, and DokyBrain is in development. Before you add a claim, find
its source; then record it in [`docs/CLAIMS_REGISTER.md`](docs/CLAIMS_REGISTER.md).

`npm run build` runs `scripts/check-claims.mjs` first and fails if the copy
contains a claim that was once false on this site: proof language, unmeasured
percentages, certifications we do not hold, launch labels, seat pricing,
invented testimonials or AI model names. If it fails, fix the copy, not the
rule.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Netlify with
`@netlify/plugin-nextjs`. The site's own code has no analytics, no cookies and
no third-party scripts; fonts are self-hosted by `next/font`. Cloudflare sits
in front of the site and adds its Web Analytics and email-protection scripts at
the edge (disclosed in `/privacy`, board answers a61, a62 and a64).

```
app/
  page.tsx               Home: the vision, the problem, what we build, products, principles, industries, founder note
  dokydoc/page.tsx       DokyDoc: what it does today, the Boardroom, DokyBrain (in development), pricing, security
  about/page.tsx         Founder's note, how we build, company facts
  contact/               The contact form (Netlify Forms) with its notice at collection
  privacy/page.tsx       Website privacy notice
  opengraph-image.tsx    Social sharing image
  icon.png, apple-icon.png
components/              Nav, Footer, ui (Status, buttons, marks), Illustrations, RevealObserver
lib/site.ts              Company facts and every outside URL, in one place
public/__forms.html      Static form declaration for Netlify Forms
scripts/check-claims.mjs The claims check
docs/CLAIMS_REGISTER.md  Every claim on the site and its source
```

## Run

```bash
npm install
npm run dev            # http://localhost:3000
npm run check:claims   # the claims check on its own
npm run build          # claims check, then the production build
npm run typecheck
```

The contact form only sends from the deployed site; locally it says so and
sends nothing. See [`NETLIFY_FORM_SETUP.md`](NETLIFY_FORM_SETUP.md).

## Before this goes live

1. **Telephone number.** None is published: rule 26 of the Companies
   (Incorporation) Rules, 2014 lists one, but the founder decided on 11 Oct 2026
   to publish none (`company.phone` stays `null` in `lib/site.ts`).
2. **Domain.** `NEXT_PUBLIC_SITE_URL` defaults to `https://deyoraintelligence.com`,
   the company's only official domain (the founder, 13 Oct 2026); deyora.ai is
   not used.
3. **Netlify Forms.** Set up and tested on 13 Oct 2026; NETLIFY_FORM_SETUP.md
   says what is in place and the deletion every three months.
4. **The founder's note** on the home and About pages is written from the
   founder's own words; the founder approves the final wording.
