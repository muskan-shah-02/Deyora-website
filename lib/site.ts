/**
 * One place for every fact the site states about the company, and every
 * outside URL it links to. Each fact here is sourced in docs/CLAIMS_REGISTER.md.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://deyoraintelligence.com").replace(/\/$/, "");

const DOKYDOC_ORIGIN = "https://dokydoc.com";

export const DOKYDOC = {
  home: DOKYDOC_ORIGIN,
  register: `${DOKYDOC_ORIGIN}/register`,
  /** The app itself; it sends anyone not signed in to the sign-in page. */
  app: `${DOKYDOC_ORIGIN}/dashboard`,
  login: `${DOKYDOC_ORIGIN}/login`,
  enterprise: `${DOKYDOC_ORIGIN}/enterprise`,
  security: `${DOKYDOC_ORIGIN}/security`,
  terms: `${DOKYDOC_ORIGIN}/terms`,
  privacy: `${DOKYDOC_ORIGIN}/privacy`,
};

/**
 * A link into DokyDoc that says where the visitor came from, so a sign-up can
 * be traced back to this site. Extra parameters are harmless if the app
 * ignores them. Never put an email address or a name in a URL: it ends up in
 * server logs and browser history.
 */
export function dokydocLink(url: string, persona?: string | null) {
  const u = new URL(url);
  u.searchParams.set("utm_source", "deyoraintelligence.com");
  u.searchParams.set("utm_medium", "website");
  if (persona) u.searchParams.set("utm_content", persona);
  return u.toString();
}

export const company = {
  brand: "Deyora Intelligence",
  short: "Deyora",
  legalName: "Deyora Intelligence Private Limited",
  cin: "U62010RJ2026PTC114088",
  incorporated: "8 May 2026",
  registrar: "Registrar of Companies, Jaipur",
  registeredOffice: "B-195, Shastri Nagar, Bhilwara, Rajasthan 311001, India",
  email: "muskan@deyoraintelligence.com",
  founder: "Muskan Shah",
  founderFirstName: "Muskan",
  founderTitle: "Founder & Director",
  grievanceOfficer: "Muskan Shah",
  /** Set these when the founder sends them; the site shows them once set. */
  founderPhoto: null as string | null, // e.g. "/people/muskan-shah.jpg"
  founderLinkedIn: null as string | null, // e.g. "https://www.linkedin.com/in/…"
  companyLinkedIn: null as string | null,
  /**
   * Rule 26 of the Companies (Incorporation) Rules, 2014 asks for a telephone
   * number on the home page. Set it here once the founder decides which number
   * to publish (open question Q8). The footer shows it as soon as it is set.
   */
  phone: null as string | null,
};

/** Vision and mission. Approved wording lives in deyora-hq team/DECISIONS.md. */
export const deyora = {
  vision: "Every company, in every industry, runs with the clarity that today only the biggest can afford.",
  mission:
    "We build intelligence that reads what a business already knows, shows what needs attention, and prepares the next step, so the people in charge spend their time deciding, not chasing.",
  promise: "It prepares. You decide.",
};

export const dokydocStatement = {
  vision: "Nobody should pay for software they cannot check.",
  mission:
    "Show everyone who pays for software what was actually built against what was agreed, in plain language, before they sign off.",
  analogy:
    "Before you take possession of a new flat, you walk through it with a snag list. DokyDoc is that walk-through for software.",
};

/** Kept for older imports. */
export const mission = deyora.mission;
