/**
 * The home page of deyoraintelligence.com (board answer a153, the planner on the founder's delegation): the
 * company and its vision, not manufacturing. The product's own story lives at dokydoc.com (lib/story.ts keeps it
 * for /dokydoc and /llms.txt until then). Vision sentences are aims ("we are building"), never claims; the only
 * product named is DokyDoc, which is announced and live.
 */
import { deyora } from "@/lib/site";

/** a155: the brand line, the home page's headline, with the dolphin. */
export const BRAND_LINE = "See what's hidden.";

/**
 * The vision line under the brand line: three options taken from the approved wording on /about#vision
 * (deyora-hq team/DECISIONS.md), for the founder to pick one in the review. NEXT_PUBLIC_VISION picks one for a
 * build ("1", "2" or "3"); option 1 is the default, and HQ's recommendation. Once the founder picks, the other
 * two go.
 */
export const VISION_OPTIONS = [
  { id: "1", from: "The vision, word for word", label: "Our vision", line: deyora.vision },
  { id: "2", from: "The About page's headline, word for word", label: null, line: "We are building intelligence for the people who run companies." },
  {
    id: "3",
    from: "The mission, shortened",
    label: null,
    line: "We are building intelligence that shows the people in charge what needs attention, so they spend their time deciding, not chasing.",
  },
] as const;

export const VISION =
  VISION_OPTIONS.find((v) => v.id === process.env.NEXT_PUBLIC_VISION) ?? VISION_OPTIONS[0];

export const HOME = {
  /** The drawing's description for a screen reader. */
  dolphin:
    "A drawing: a dolphin sends out pulses of sound that ripple through dark water, and as each pulse passes, hidden shapes light up: a document, a box, a coin and a calendar.",
  pill: "Deyora Intelligence",
  toProduct: "Our first product",
  product: {
    eyebrow: "Our first product",
    title: "DokyDoc",
    line: "DokyDoc checks your orders, invoices, payments and stock against each other, and your code against its documents. It shows you only what doesn't match, with the record behind each one. You decide what to do.",
    visit: "Visit dokydoc.com",
    preview: "A preview of DokyDoc's home page at dokydoc.com",
  },
  beliefs: {
    eyebrow: "What we believe",
    title: "Three rules for everything we build.",
    items: [
      {
        t: "A person decides.",
        d: "What we build prepares the work and shows its reasons. The decision stays with a person on your side.",
      },
      {
        t: "Every finding shows its record.",
        d: "Each thing DokyDoc raises opens to the order, invoice, document or code it came from.",
      },
      {
        t: "Measured, not promised.",
        d: "A DokyDoc check is switched on only after it finds the right answers on test records whose answers are kept hidden from it. We say what we measured, not what we hope.",
      },
    ],
  },
  team: {
    eyebrow: "The team",
    title: "The people behind Deyora.",
    quote: "I want to make life easier for the people who run companies. Less time chasing. More time deciding.",
    more: "About us",
  },
  talk: {
    eyebrow: "Talk to us",
    title: "Two taps and an email.",
    lede: "You talk to the founder. Tell us where things slip in your business.",
  },
};
