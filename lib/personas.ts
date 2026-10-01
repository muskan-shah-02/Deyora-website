/**
 * Who is visiting. A visitor picks one (or arrives on a link such as
 * /?for=manufacturing), and the site speaks to them. The choice stays in their
 * own browser; it reaches us only if they send us a message.
 *
 * Every line here must be true today (see docs/CLAIMS_REGISTER.md). Anything
 * about DokyBrain is labelled as in development.
 */

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
    chip: "I run a company",
    eyebrow: "For founders and owners",
    headline: "Know what is slipping",
    accent: "before it costs you.",
    sub: "Deyora reads what your business already holds, compares what was promised with what happened, and brings you the few things that deserve your attention, with the evidence. It prepares. You decide.",
    points: [
      ["Today", "If you pay for software, DokyDoc checks what your team or agency built against what you agreed."],
      ["In development", "DokyBrain, a brain for the whole company: orders, suppliers, customers and money, starting with manufacturing."],
      ["Always", "You see the evidence behind every finding, and the decisions stay with your people."],
    ],
    primary: { label: "Talk to the founder", href: "/contact?topic=owner" },
    secondary: { label: "See DokyDoc", href: "/dokydoc" },
    illustration: "decision",
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
    primary: { label: "Start on DokyDoc", href: "https://dokydoc.com/register", dokydoc: true },
    secondary: { label: "How it works", href: "/dokydoc#how" },
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
    primary: { label: "Start on DokyDoc", href: "https://dokydoc.com/register", dokydoc: true },
    secondary: { label: "What it does today", href: "/dokydoc#capabilities" },
    illustration: "decision",
    topic: "dokydoc",
  },
  {
    id: "maker",
    chip: "I run a manufacturing business",
    eyebrow: "For manufacturers · DokyBrain, in development",
    headline: "Every promise to a customer,",
    accent: "checked against the evidence.",
    sub: "Orders, plants, suppliers, dispatch, invoices: the facts sit in a dozen places. DokyBrain is being designed to put them side by side and show the few commitments that deserve your attention this week. It is not built yet, and we are designing it with manufacturers.",
    points: [
      ["What it is designed to show", "Commitments that have slipped or keep moving, counted against the whole: “6 of 47 open commitments”, never just “delivery is at risk”."],
      ["By design", "It never sends, approves or changes anything in your systems. It prepares; your people decide."],
      ["Where you come in", "Tell us how you track orders and suppliers today. It shapes what we build first."],
    ],
    primary: { label: "Tell us how you work", href: "/contact?topic=manufacturing" },
    secondary: { label: "About DokyBrain", href: "/dokydoc#dokybrain" },
    illustration: "commitments",
    topic: "manufacturing",
  },
  {
    id: "investor",
    chip: "I'm an investor",
    eyebrow: "For investors",
    headline: "Building the intelligence layer",
    accent: "for how companies run.",
    sub: "Deyora starts where promises are easiest to check, in software delivery, with DokyDoc live today. DokyBrain extends the same evidence-first engine to the whole company, starting with manufacturing.",
    points: [
      ["Live", "DokyDoc runs at dokydoc.com with self-serve sign-up and a prepaid wallet."],
      ["Built carefully", "About 5,000 automated tests run before every release, and a release cannot ship if they fail."],
      ["Next", "DokyBrain: designed, phased and being built inside DokyDoc."],
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
