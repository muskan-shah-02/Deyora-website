// ─────────────────────────────────────────────────────────────────────────────
// Pricing config — single source of truth.
//
// To change prices: edit ONLY this file. The /pricing page and any
// price-display anywhere else reads from here.
//
// Each tier holds a price-per-currency map. Display picks the visitor's
// detected currency; if a price isn't defined for that currency, we fall
// back to USD with a "from" prefix.
// ─────────────────────────────────────────────────────────────────────────────

export type PriceMap = Partial<Record<string, number>>; // currency code → amount

export type PricingTier = {
  key: string;
  name: string;
  badge?: string;
  positioning: string;     // short value-prop one-liner
  cadence: string;         // "per seat / month", "per repo / month", "custom", etc.
  prices: PriceMap | "custom" | "free";
  fromOnly?: boolean;      // show "From X" instead of fixed price
  highlight?: boolean;     // visual emphasis
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  features: string[];
  fineprint?: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    key: "design-partner",
    name: "Design Partner",
    badge: "Alpha — limited slots",
    positioning:
      "For the first ten teams to come on board. Founder access, weekly office hours, and locked-in pricing that holds through GA.",
    cadence: "limited to first 10 design partners",
    prices: "free",
    ctaLabel: "Apply",
    ctaHref: "/book-a-demo",
    features: [
      "Full DokyDoc access during the alpha",
      "Direct Slack channel with the founders",
      "Roadmap influence — shape what ships next",
      "Locked-in design-partner pricing post-launch",
      "Onboarding + setup handled by the team",
    ],
    fineprint:
      "Light commitment: 30 minutes of feedback every fortnight, and we ship faster because of it.",
  },
  {
    key: "team",
    name: "Team",
    positioning:
      "For product, engineering, and QA teams that want traceability across a real-world stack — without a procurement cycle.",
    cadence: "per seat / month, billed annually",
    fromOnly: true,
    prices: {
      USD: 49,
      INR: 1999,
      GBP: 39,
      EUR: 45,
      AUD: 79,
      CAD: 69,
      SGD: 69,
      AED: 179,
    },
    highlight: true,
    ctaLabel: "Book a Demo",
    ctaHref: "/book-a-demo",
    features: [
      "Unlimited PRDs, BRDs, Confluence/Notion pages",
      "Up to 5 connected GitHub or GitLab repos",
      "Auto-generated UAT checklists",
      "Real-time drift alerts to Slack",
      "Role-based access — PM, Eng, QA, Admin",
      "Email support, 1 business day response",
    ],
    fineprint:
      "Monthly billing available. Volume discount kicks in at 25+ seats.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    positioning:
      "For regulated industries, large engineering orgs, and teams that need air-gapped or self-hosted deployment.",
    cadence: "custom — annual contracts",
    prices: "custom",
    ctaLabel: "Talk to a Founder",
    ctaHref: "/book-a-demo",
    features: [
      "Everything in Team",
      "Unlimited repos and integrations",
      "SSO (SAML / OIDC), SCIM provisioning",
      "Self-hosted or VPC deployment option",
      "Audit log export + SOC 2 evidence package",
      "Dedicated technical contact",
      "Custom SLAs",
    ],
    fineprint:
      "Air-gapped and on-prem deployments are scoped per engagement.",
  },
];
