/**
 * The one story for deyoraintelligence.com and dokydoc.com (board answer a147, task t155;
 * deyora-hq handoffs/2026-10-15_a147_story/STORY.md). The home page, /dokydoc and /llms.txt read it from here.
 *
 * Plain words on purpose (the founder, 16 Oct 2026): short sentences, everyday words, the problems a business
 * owner already has. Every sentence is still true in production today: DokyDoc as deployed on 15 October 2026
 * (dokydoc main 321fd50); docs/CLAIMS_REGISTER.md, "The story", gives the source of each. A sentence that becomes
 * true only with v1.8's final push does not go here.
 */
import { DOKYDOC } from "@/lib/site";

export const DEMO_HREF = "/contact?topic=demo";

/** The two calls to action, everywhere. */
export const CTA = {
  login: { label: "Log in", href: DOKYDOC.login },
  demo: { label: "Book a demo", href: DEMO_HREF },
};

export type Catch = { t: string; d: string; who: "Any business" | "Manufacturers" | "Software teams" };

export const STORY = {
  eyebrow: "For any business that takes orders",
  headline: "See what's going wrong in your business.",
  accent: "All in one list.",
  line:
    "DokyDoc checks your orders, invoices, payments and stock against each other. It shows you only what doesn't match, with the record behind each one. You decide what to do.",
  today:
    "Today you can see it on our demo company, or use it on your software and its documents. Using it on your own company's records is coming.",
  problem: [
    "Your business runs on promises: a delivery date, a price, a payment term.",
    "The facts sit in your ERP, in Excel, in emails and on WhatsApp. Nobody checks them against each other, so you find out late, when a customer complains or money is lost.",
  ],
  catches: [
    { t: "A supplier keeps slipping", d: "The delivery date on a purchase order keeps moving later.", who: "Any business" },
    { t: "Shipped, but not billed", d: "Goods went out, but no invoice was raised.", who: "Any business" },
    { t: "Late payer over the limit", d: "A customer is late paying and is over their credit limit.", who: "Any business" },
    { t: "Two systems, two answers", d: "Your records say different things about the same order or invoice.", who: "Any business" },
    { t: "PO and sales order don't match", d: "The customer's PO and your sales order differ on quantity, price, date or address.", who: "Manufacturers" },
    { t: "Materials not in place", d: "An order is due, but the materials it needs are not on record.", who: "Manufacturers" },
    { t: "Stock running short", d: "New orders came in that your free stock could not cover.", who: "Manufacturers" },
    { t: "Software that misses the spec", d: "A requirement nobody built, or code nobody asked for.", who: "Software teams" },
  ] as Catch[],
  steps: [
    {
      t: "Bring your records",
      d: "Your documents and code, today. Exports from your ERP, like orders, invoices and stock: on our demo company now, on your own company coming.",
    },
    {
      t: "DokyDoc checks them",
      d: "It compares them with each other and lists only what doesn't add up.",
    },
    {
      t: "You decide",
      d: "Each item shows the record behind it. You decide what to do. DokyDoc changes nothing in your ERP.",
    },
  ],
  audiences: [
    {
      id: "business",
      t: "Businesses that take orders",
      note: "Any industry.",
      status: "See it on our demo",
      problems: [
        "Late suppliers.",
        "Goods shipped but not billed.",
        "Customers paying late and over their limit.",
        "Records that don't agree.",
      ],
      cta: "demo" as const,
    },
    {
      id: "manufacturing",
      t: "Manufacturers",
      note: "Our deepest set of checks.",
      status: "See it on our demo",
      problems: [
        "Customer POs that don't match your sales orders.",
        "Orders due before the materials are in.",
        "Stock that can't cover new orders.",
        "Late suppliers and late payers.",
      ],
      cta: "demo" as const,
    },
    {
      id: "software",
      t: "Software teams",
      note: "DokyDoc's first job.",
      status: "Use it today",
      problems: [
        "Requirements nobody built.",
        "Code nobody asked for.",
        "What could not be checked, listed.",
        "Sign-off by a person on your side.",
      ],
      cta: "login" as const,
    },
  ],
  live: [
    ["DokyDoc for software", "Check your code against its documents. Sign up yourself at dokydoc.com."],
    [
      "DokyBrain",
      "The part of DokyDoc that checks orders, invoices, payments and stock. Running since 15 October 2026. We switch it on for each company.",
    ],
    ["Our demo company", "A sample manufacturer with made-up records. Book a demo and we will show you."],
  ] as [string, string][],
  coming: [
    "Using it on your own company's records.",
    "Recording your decisions and goals, and what happened after.",
    "Connecting Zoho Books, QuickBooks and HubSpot.",
    "Alerts by email, Slack or Teams.",
    "Signed reports you can send to a customer.",
    "More checks.",
  ],
  pricing: "Pay only for what you use. Add money to a wallet in rupees, and see the price before anything runs. No plans and no seats.",
  oneProduct: "DokyDoc is the product. DokyBrain is the part inside it that checks your orders, invoices, payments and stock.",
};
