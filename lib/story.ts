/**
 * The one story for deyoraintelligence.com and dokydoc.com (board answer a147, task t155;
 * deyora-hq handoffs/2026-10-15_a147_story/STORY.md). The home page, /dokydoc and /llms.txt read it from here.
 *
 * Every sentence is true in production today: DokyDoc as deployed on 15 October 2026 (dokydoc main 321fd50).
 * docs/CLAIMS_REGISTER.md, "The story", gives the source of each. A sentence that becomes true only with v1.8's
 * final push does not go here: it goes on dokydoc.com's own home page, which ships with that push.
 */
import { DOKYDOC } from "@/lib/site";

export const DEMO_HREF = "/contact?topic=demo";

/** The two calls to action, everywhere. */
export const CTA = {
  login: { label: "Log in to DokyDoc", href: DOKYDOC.login },
  demo: { label: "Book a demo", href: DEMO_HREF },
};

export const STORY = {
  headline: "Every promise your company makes,",
  accent: "checked against what its records show.",
  line:
    "Orders, delivery dates, contracts, specifications and payment terms sit in different places, and nobody sees when they drift apart. DokyDoc puts them side by side, shows you the few that need you, with the evidence, and leaves the decision to you.",
  problem: [
    "Every company that takes orders makes promises: a delivery date to a customer, a price, a specification, payment terms, a requirement in a contract.",
    "The evidence of whether each one is being kept sits in different systems and documents: the ERP, spreadsheets, purchase orders, invoices, code. Nobody sees when they drift apart until a customer complains or money is lost.",
  ],
  steps: [
    {
      t: "DokyDoc reads the records you already have",
      d: "Documents and code, for any company, today. Exports from an ERP (orders, deliveries, invoices, stock): on our demo company today; from your own company, coming.",
    },
    {
      t: "DokyBrain connects them and raises what needs you",
      d: "Only the few things that need a person, each with its evidence and with what it could not see.",
    },
    {
      t: "You decide",
      d: "A person decides, never DokyDoc. DokyDoc keeps each decision with its finding through every re-scan.",
    },
  ],
  audiences: [
    {
      id: "business",
      t: "Any company that takes orders",
      note: "No industry pack needed.",
      status: "Demo on request",
      problems: [
        "A supplier whose promised dates keep moving later.",
        "What was ordered, shipped, invoiced and paid does not agree.",
        "A customer who owes you money and is over their credit limit.",
        "Two of your systems saying different things about the same order.",
      ],
      cta: "demo" as const,
    },
    {
      id: "manufacturing",
      t: "Manufacturers",
      note: "The deepest pack today.",
      status: "Demo on request",
      problems: [
        "A customer order due before the inputs it needs are on record.",
        "A customer's PO that says something different from your sales order.",
        "A supplier slipping on the lines you depend on.",
        "A payment at risk: overdue and over the credit limit, or an order on block.",
      ],
      cta: "demo" as const,
    },
    {
      id: "software",
      t: "Software teams",
      note: "Documents against code, DokyDoc's first job.",
      status: "Self-serve",
      problems: [
        "A requirement nobody built.",
        "Code that no requirement asked for.",
        "What could not be checked, listed rather than passed as fine.",
        "A sign-off by a named person on your side, never by DokyDoc.",
      ],
      cta: "login" as const,
    },
  ],
  live: [
    [
      "DokyDoc",
      "At dokydoc.com, with self-serve sign-up: documents against code, AskyDoc and the Boardroom. You pay as you go from a prepaid wallet in rupees, and each price is shown before the work runs.",
    ],
    [
      "DokyBrain, inside DokyDoc",
      "In production since 15 October 2026: the attention list with its evidence, Brain Health, the weekly brief on screen, and AskyDoc answering from it. Ten checks have passed the tests we set before a check can be switched on. Deyora switches DokyBrain on for each company.",
    ],
    [
      "The demo company",
      "Prathvel Engineering, a manufacturer with invented records, where DokyBrain runs on a full set of exports. We show it on request.",
    ],
  ] as [string, string][],
  coming: [
    "DokyBrain on your own company's records: reading your ERP exports and documents into it.",
    "Recording decisions and goals in DokyBrain, with what happened afterwards.",
    "Accounting and CRM connections: Zoho Books, QuickBooks Online and HubSpot.",
    "Briefs and notifications by email, and posting to Slack or Teams.",
    "Forwarding email to DokyBrain.",
    "Signed delivery reports, the public report check, and sharing a supplier's delivery record.",
    "More checks, each once it passes its tests.",
  ],
  oneProduct: "DokyDoc is one product. DokyBrain is the brain inside it.",
};
