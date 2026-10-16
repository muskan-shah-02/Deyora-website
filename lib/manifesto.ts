/**
 * The manifesto (board answer a155): a DRAFT in the founder's voice, for the founder to edit and sign. Until the
 * founder signs it, lib/manifesto.json says "signed": false and nothing shows it: /manifesto answers 404, and the
 * home page's excerpt and the menu's link are hidden. Set "signed" to true in the commit that carries the
 * founder's edited text. NEXT_PUBLIC_PREVIEW_MANIFESTO=1 shows it in a review build only, never on Netlify.
 *
 * Plain words; aims are said as aims ("we are building"); the three rules match the home page's beliefs.
 */
import manifesto from "./manifesto.json";
import { company } from "@/lib/site";

export const MANIFESTO_SHOWN: boolean =
  manifesto.signed === true || process.env.NEXT_PUBLIC_PREVIEW_MANIFESTO === "1";

export const MANIFESTO = {
  title: "Every company runs on promises.",
  paragraphs: [
    "A delivery date to a customer. A price agreed with a supplier. A payment term. A feature written into a contract. Each promise is written down somewhere: in the ERP, in Excel, in an email, on WhatsApp.",
    "When a promise starts to slip, the facts that show it are usually there already. They sit in different places, and nobody has the time to put them side by side. So the people who run the company find out late, when a customer calls or the money has gone.",
    "I started Deyora to build the intelligence that sees which promises are slipping, and shows the record behind each one. Not another dashboard to check, and not a chatbot that guesses: a careful reader of what a business already knows.",
  ],
  rulesIntro: "We hold ourselves to three rules.",
  rules: [
    ["A person decides.", "What we build prepares the work and shows its reasons. The decision stays with the people who run the company."],
    ["Every finding shows its record.", "If we cannot point to the order, invoice, document or code behind something, we do not say it."],
    ["Measured, not promised.", "A check is switched on only after it finds the right answers on test records whose answers are kept hidden from it. We say what we have measured, not what we hope."],
  ] as [string, string][],
  closing: [
    "Large companies pay whole teams to do this checking. We are building it so that every company, in every industry, can run with the same clarity.",
    "Our first product, DokyDoc, starts with orders, invoices, payments, stock and software. There is a long way to go, and we say plainly what works today and what is still coming.",
  ],
  signature: { name: company.founder, title: `${company.founderTitle}, ${company.brand}` },
  /** The home page's excerpt: the idea in three sentences. */
  excerpt:
    "Every company runs on promises: a delivery date, a price, a payment term. When one starts to slip, the facts that show it are usually there already, in different places. Deyora is building the intelligence that sees which promises are slipping, and shows the record behind each one.",
  read: "Read the manifesto",
};
