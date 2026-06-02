export type ProductStatus = "live" | "beta" | "upcoming";

export type Feature = {
  counter: string;
  title: string;
  body: string;
};

export type RoleSolution = {
  role: string;
  headline: string;
  body: string;
};

export type Metric = {
  start: number;
  target: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  status: ProductStatus;
  tagline: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  externalUrl?: string;
  heroHeadline: string[];
  heroOutlineWord?: string;
  heroSub: string;
  metrics: Metric[];
  features: Feature[];
  roles: RoleSolution[];
  videoSrc?: string;
};

export const products: Product[] = [
  {
    slug: "dokydoc",
    name: "DokyDoc",
    status: "live",
    tagline: "AI Traceability Platform",
    category: "Software Delivery Intelligence",
    shortDescription:
      "Automatically maps product requirements to your codebase. Eradicate rework, align teams, and ship exactly what was planned.",
    longDescription:
      "DokyDoc is Deyora Intelligence's flagship product — an AI traceability platform that bridges the gap between what product teams write and what engineering teams build. It reads PRDs and BRDs, extracts atomic business rules through its Business Ontology Engine, and continuously maps every requirement to live code using a proprietary 3-Tier Mapping Algorithm that cuts AI inference costs by up to 97%.",
    externalUrl: "https://dokydoc.com/",
    heroHeadline: ["Stop guessing if", "your developers", "are building the", "RIGHT product."],
    heroOutlineWord: "RIGHT",
    heroSub:
      "DokyDoc is the AI traceability platform that automatically maps your product requirements to your codebase. Eradicate rework, align your teams, and ship exactly what was planned.",
    videoSrc: "/videos/glowing.mp4",
    metrics: [
      { start: 0, target: 97, suffix: "%", label: "AI API Cost Reduction" },
      { start: 0, target: 100, suffix: "%", label: "Requirement Traceability" },
      { start: 124, target: 0, suffix: "", label: "Undocumented Features" },
      { start: 1, target: 3, decimals: 1, suffix: "×", label: "Faster UAT Completion" },
    ],
    features: [
      {
        counter: "01 — INGEST",
        title: "Business Ontology Engine",
        body: "Upload any PRD, BRD, or requirements document. The BOE extracts atomic business rules — Processes, Rules, and Attributes — from unstructured text into structured, machine-readable intelligence.",
      },
      {
        counter: "02 — MAP",
        title: "3-Tier Mapping Algorithm",
        body: "DokyDoc's proprietary algorithm traces every extracted rule directly to functions, endpoints, and modules in your codebase — at up to 97% reduction in AI inference costs versus standard approaches.",
      },
      {
        counter: "03 — TRACE",
        title: "Real-Time Traceability",
        body: "Every requirement is tracked against live code. Missing implementations are flagged instantly. Architectural drift is caught before it reaches production and costs you a sprint.",
      },
      {
        counter: "04 — VERIFY",
        title: "Cryptographic Proof",
        body: "Generate a tamper-evident hash proving your delivered code matches the agreed specification. The ultimate client transparency tool. The definitive end to scope-creep disputes.",
      },
      {
        counter: "05 — TEST",
        title: "Auto-Generated UAT",
        body: "Business rules from the BOE convert into precise UAT checklists — eliminating manual QA planning and guaranteeing complete coverage of every edge case and business rule.",
      },
      {
        counter: "06 — INTEGRATE",
        title: "Native Integrations",
        body: "Connect DokyDoc to GitHub, Jira, Notion, Google Docs, and Confluence. Continuous traceability without changing how your team already works — zero friction adoption.",
      },
    ],
    roles: [
      {
        role: "Product Managers",
        headline: "Never wonder what happened to your PRD again.",
        body: "You write detailed requirements, but they get ignored. DokyDoc reads your PRDs and automatically flags if a required feature hasn't been implemented in the code — in real time, before the sprint ends.",
      },
      {
        role: "Engineering Leaders / CTOs",
        headline: "Eliminate rework and undocumented tech debt.",
        body: "Stop wasting two-week sprints building the wrong features. DokyDoc analyzes your repositories to find undocumented endpoints and architectural drift before they ever merge into main.",
      },
      {
        role: "QA Teams",
        headline: "Automate your UAT checklists entirely.",
        body: "Stop manually writing test cases. DokyDoc's Business Ontology Engine extracts atomic business rules from your documents and auto-generates complete UAT checklists instantly.",
      },
      {
        role: "Dev Shops & IT Agencies",
        headline: "Prove your delivery mathematically to clients.",
        body: "End scope-creep disputes forever. Provide clients with a tamper-evident cryptographic hash proving your code matches the agreed Business Requirement Document. No arguments. Pure proof.",
      },
    ],
  },
  {
    slug: "next-product",
    name: "Next from Deyora",
    status: "upcoming",
    tagline: "Coming Soon",
    category: "Intelligence Layer",
    shortDescription:
      "The next chapter of Deyora Intelligence — a new product extending the traceability vision deeper into the delivery lifecycle. Details revealing soon.",
    longDescription:
      "Deyora is building a portfolio of intelligence products that fix the software development lifecycle end-to-end. The next product will extend the same first-principles approach — mathematical, traceable, verifiable — into a new layer of the SDLC. Join the waitlist for early access.",
    heroHeadline: ["Something new is", "being built at", "DEYORA."],
    heroOutlineWord: "DEYORA",
    heroSub:
      "Deyora Intelligence is expanding the product line. Our next release continues the mission to make software delivery measurable, mathematical, and trustworthy.",
    metrics: [],
    features: [],
    roles: [],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const liveProducts = () => products.filter((p) => p.status === "live");
