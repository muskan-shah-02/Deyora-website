/**
 * Who is visiting. A visitor picks one (or arrives on a link such as
 * /?for=manufacturing), and the site speaks to them. The choice stays in their
 * own browser; it reaches us only if they send us a message.
 *
 * Every line here must be true today (see docs/CLAIMS_REGISTER.md). DokyDoc's checks on orders and invoices
 * is live inside DokyDoc, switched on as `LEDGER` (lib/site.ts) says; on a
 * company's own records it is coming, and the copy says so (lib/story.ts).
 */
import { DOKYDOC, LEDGER, productPage } from "@/lib/site";
import { DEMO_HREF } from "@/lib/story";


export type PersonaId = "owner" | "buyer" | "builder" | "maker" | "investor";

export type Persona = {
  id: PersonaId;
  chip: string;
  eyebrow: string;
  headline: string;
  accent: string;
  sub: string;
  points: [string, string][];
  primary: { label: string; href: string; dokydoc?: boolean };
  secondary: { label: string; href: string };
  illustration: "decision" | "commitments";
  topic: string;
};

export const PERSONAS: Persona[] = [
  {
    id: "owner",
    chip: "I run a company that takes orders",
    eyebrow: "For founders and owners",
    headline: "See which promises are slipping,",
    accent: "with the evidence.",
    sub: "Orders, delivery dates, payment terms and invoices sit in different places. DokyDoc puts them side by side and brings you the few things that need you, with the evidence. It prepares. You decide.",
    points: [
      ["What it looks for", "A supplier's dates that keep moving, orders shipped but not invoiced, a customer over their credit limit, two systems that disagree about one order."],
      ["Today", "It runs on our demo company, with invented records. We show it on request. On your own records it is coming."],
      ["Always", "You see the evidence behind every finding, and the decisions stay with your people."],
    ],
    primary: { label: "Book a demo", href: DEMO_HREF },
    secondary: { label: "How it works", href: "/#how" },
    illustration: "commitments",
    topic: "owner",
  },
  {
    id: "buyer",
    chip: "I pay for software",
    eyebrow: "For anyone who commissions software",
    headline: "Paid for software?",
    accent: "See what you actually got.",
    sub: "Before you take possession of a new flat, you walk through it with a snag list. DokyDoc is that walk-through for software: it checks the code against the documents you agreed, and shows what is built, what is missing and what it could not check.",
    points: [
      ["Before you sign off", "See requirement by requirement what was delivered, in plain language, not code."],
      ["When the vendor says done", "Ask for the evidence. Each finding points to the document and the code behind it."],
      ["What it costs", "Pay as you go, in rupees. The price is shown before anything runs."],
    ],
    primary: { label: "Start on DokyDoc", href: DOKYDOC.home, dokydoc: true },
    secondary: { label: "How it works", href: productPage("how") },
    illustration: "decision",
    topic: "dokydoc",
  },
  {
    id: "builder",
    chip: "I build software",
    eyebrow: "For product, engineering and agencies",
    headline: "Show what you built",
    accent: "against what was agreed.",
    sub: "DokyDoc links every requirement in your documents to the code that implements it, and flags what is missing, what nobody asked for and what it could not check. Hand your client the evidence, not a promise.",
    points: [
      ["Requirements to code", "Exact names first, close matches next, AI only where those cannot settle it."],
      ["Code written with AI tools", "Fast code still has to match the spec. DokyDoc checks it against your documents, whoever wrote it."],
      ["Bring code from anywhere", "GitHub, GitLab, Bitbucket Cloud, a public link or a ZIP. Nothing to install."],
    ],
    primary: { label: "Start on DokyDoc", href: DOKYDOC.home, dokydoc: true },
    secondary: { label: "What it does today", href: productPage("capabilities") },
    illustration: "decision",
    topic: "dokydoc",
  },
  {
    id: "maker",
    chip: "I run a manufacturing business",
    eyebrow: "For manufacturers",
    headline: "Every promise to a customer,",
    accent: "checked against the evidence.",
    sub: "Orders, plants, suppliers, dispatch, invoices: the facts sit in a dozen places. DokyDoc puts them side by side and shows the few commitments that deserve your attention, each with its evidence. It runs today on our demo manufacturer, with invented records; on your own records it is coming.",
    points: [
      ["What it looks for", "An order due before its inputs are on record, a customer's PO that differs from your sales order, a supplier slipping, a payment at risk."],
      ["Counted, never vague", "Every figure is a count, with what it is counted out of: “6 of 47 open commitments”, never just “delivery is at risk”."],
      ["By design", "It changes nothing in your ERP. It prepares; your people decide."],
    ],
    primary: { label: "Book a demo", href: DEMO_HREF },
    secondary: { label: "What DokyDoc checks", href: productPage("orders") },
    illustration: "commitments",
    topic: "manufacturing",
  },
  {
    id: "investor",
    chip: "I'm an investor",
    eyebrow: "For investors",
    headline: "Building the intelligence layer",
    accent: "for how companies run.",
    sub: "Deyora started where promises are easiest to check, in software delivery, with DokyDoc. DokyDoc now extends the same evidence-first engine to orders, suppliers and money, starting with manufacturing.",
    points: [
      ["Live", "DokyDoc runs at dokydoc.com with self-serve sign-up and a prepaid wallet."],
      ["Built carefully", "About 9,000 automated tests run before every release, and a release cannot ship if they fail."],
      ["Live in DokyDoc", `Checks on orders, invoices and payments: in production since 15 October 2026, ${LEDGER.participle}, and shown today on our demo manufacturer.`],
    ],
    primary: { label: "Meet the founder", href: "/contact?topic=investor" },
    secondary: { label: "Read the vision", href: "/about#vision" },
    illustration: "decision",
    topic: "investor",
  },
];

export const personaById = (id: string | null | undefined) => PERSONAS.find((p) => p.id === id) || null;

/** Links people share map to a persona: /?for=manufacturing, /?for=investor. */
export const PERSONA_ALIASES: Record<string, PersonaId> = {
  owner: "owner",
  founder: "owner",
  ceo: "owner",
  buyer: "buyer",
  agency: "buyer",
  builder: "builder",
  developer: "builder",
  product: "builder",
  maker: "maker",
  manufacturing: "maker",
  manufacturer: "maker",
  investor: "investor",
  vc: "investor",
};
