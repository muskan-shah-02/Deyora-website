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

/**
 * The two calls to action, everywhere (the founder, 16 Oct 2026): "Get started" sends people to DokyDoc's own home
 * page, https://dokydoc.com, never straight to its sign-in or registration; "Book a demo" stays on this site.
 */
export const CTA = {
  start: { label: "Get started", href: DOKYDOC.home },
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
      cta: "start" as const,
    },
  ],
  live: [
    ["DokyDoc for software", "Check your code against its documents. Sign up yourself at dokydoc.com."],
    [
      "DokyDoc for orders, invoices, payments and stock",
      "Running since 15 October 2026. We switch it on for each company.",
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
  pricing: "Pay only for what you use. Add money to a wallet in rupees, and see the price before anything runs. No plans and no subscription.",
  oneProduct:
    "DokyDoc is the company brain for your business: it checks your orders, invoices, payments and stock against each other.",
  /** Three short points under the headline, each true for any visitor today. */
  points: ["Nothing to install", "Changes nothing in your ERP", "Pay only for what you use"],
  trust: [
    {
      t: "Every item shows its record",
      d: "Open any item and you see the order, invoice or document it came from.",
    },
    {
      t: "It says \"not checked\" instead of guessing",
      d: "When DokyDoc cannot check something, it tells you, and lists what it could not see.",
    },
    {
      t: "It never changes your ERP",
      d: "DokyDoc reads your records. It never writes back to your ERP, and an automated test blocks any new kind of write into another system.",
    },
    {
      t: "Every check is tested first",
      d: "Before a check is switched on, it must find the right answers on test records whose answers are kept hidden from it. Until it passes, it stays locked.",
    },
  ],
  data: {
    t: "Where your data is kept",
    d: "On DokyDoc's server in Helsinki, Finland, run by Hetzner. The companies that process data for us are Hetzner, Cloudflare, Google's Gemini API (paid tier), Zoho, Sentry and Razorpay, each on our published Sub-processor and Connector List. Deyora does not train models across customers.",
  },
};

/**
 * Prepared, not live (board answer a149): the free look at a company's last three months. It goes live only
 * when a company's own records open in production (board task t220) and the founder approves the offer:
 * set "freeLook" to true in lib/offers.json then. Until then nothing renders it.
 */
export const FREE_LOOK = {
  t: "Free look at your last 3 months",
  d: "Send us the Excel or CSV exports of your last 3 months: sales orders, deliveries, invoices and purchase orders. We run DokyDoc on them and show you what it finds. Free, and nothing to install.",
  cta: { label: "Ask for a free look", href: "/contact?topic=demo" },
  need: "A free look at our last 3 months",
};
