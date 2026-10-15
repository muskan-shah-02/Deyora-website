/**
 * One place for every fact the site states about the company, and every
 * outside URL it links to. Each fact here is sourced in docs/CLAIMS_REGISTER.md.
 */

import dokydocHome from "./dokydoc-home.json";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://deyoraintelligence.com").replace(/\/$/, "");

const DOKYDOC_ORIGIN = "https://dokydoc.com";

/**
 * dokydoc.com's own home page (deyora-hq board task t155, answer a147) goes live with DokyDoc's v1.8 final push.
 * Until then the product page is /dokydoc on this site. In the website push after that release, set "live" to
 * true in lib/dokydoc-home.json: next.config.js then redirects /dokydoc permanently (301) to dokydoc.com, the
 * sitemap drops /dokydoc, and every link below points to dokydoc.com.
 */
export const DOKYDOC_HOME_LIVE: boolean = dokydocHome.live === true;

/** Where this site sends people for the product: /dokydoc (with a section) until dokydoc.com's home page is live. */
export function productPage(section?: string): string {
  if (DOKYDOC_HOME_LIVE) return DOKYDOC_ORIGIN;
  return section ? `/dokydoc#${section}` : "/dokydoc";
}

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
  /** The grievance officer's title in the privacy notice, as in the Trust Pack; the chat header keeps founderTitle. */
  grievanceOfficerTitle: "Director",
  /** Set these when the founder sends them; the site shows them once set. */
  founderPhoto: null as string | null, // e.g. "/people/muskan-shah.jpg"
  founderLinkedIn: null as string | null, // e.g. "https://www.linkedin.com/in/…"
  companyLinkedIn: null as string | null,
  /**
   * Rule 26 of the Companies (Incorporation) Rules, 2014 lists a telephone
   * number among the particulars a company's home page shows. The founder
   * decided on 11 Oct 2026 (board answer a48) to publish no telephone number on
   * the website: keep this null. The business number stays in the email
   * signature. The footer shows a number only if one is ever set here.
   */
  phone: null as string | null,
};

export type Person = {
  name: string;
  firstName: string;
  /** In the words of Trust Pack CO-01 section 4. */
  role: string;
  linkedIn: string;
  /** The one-line bio the person approved, set only when the founder sends it; nothing is shown until then. */
  line: string | null;
  /** The photo the person approved, e.g. "/people/name.jpg", set only when the founder sends it; initials until then. */
  photo: string | null;
};

/**
 * The people behind Deyora on /about, in the Organization structured data and in /llms.txt (board task t212). The
 * names, the roles and the LinkedIn addresses are the founder's, in the words of Trust Pack CO-01 section 4; nothing
 * is copied from LinkedIn. Nothing else about these people goes on the site unless the founder sends it: no share
 * percentages, DINs or continuity roles, which stay in the Trust Pack. The founder confirms on the board that each
 * person agreed to be on the website before it goes live.
 */
export const people: Person[] = [
  {
    name: "Divyansh Shah",
    firstName: "Divyansh",
    role: "Director",
    linkedIn: "https://www.linkedin.com/in/divyansh-shah-7a2a93370/",
    line: null,
    photo: null,
  },
  {
    name: "Arpit Agarwal",
    firstName: "Arpit",
    role: "Shareholder",
    linkedIn: "https://www.linkedin.com/in/arpitagarwal974/",
    line: null,
    photo: null,
  },
];

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

/**
 * Version 2.0 of the DokyDoc documents (deyora-hq board task t157; handoffs/2026-10-09_t157_policies_v2/RESUME.md,
 * "On the release day", item 2). A marker until the release day: fill it with that day, India time, in the form
 * "13 October 2026", never earlier, in the commit the founder publishes with "push main for the website". Until it
 * is filled, every page keeps its wording of 14 October 2026. From then, the privacy notice's two passages and its
 * dated change-log row, POL-SEC-11 version 1.3, the wallet, Slack and AI lines, the two lines that would leave out
 * Confluence, and /llms.txt's date change together, each in the words of the approved version 2.0 texts
 * (docs/CLAIMS_REGISTER.md, "From the release day of version 2.0 of the DokyDoc documents").
 */
export const DOKYDOC_V2_RELEASE_DAY: string = "15 October 2026";

/** Whether the release day above is filled. */
export const DOKYDOC_V2_RELEASED = !DOKYDOC_V2_RELEASE_DAY.includes("{{");

/** The wording before the release day of version 2.0 of the DokyDoc documents, then the wording from that day. */
export function untilDokyDocV2<T>(before: T, from: T): T {
  return DOKYDOC_V2_RELEASED ? from : before;
}
