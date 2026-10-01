/**
 * One place for every fact the site states about the company, and every
 * outside URL it links to. Each fact here is sourced in docs/CLAIMS_REGISTER.md.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://deyora.ai").replace(/\/$/, "");

export const DOKYDOC = {
  home: "https://dokydoc.com",
  register: "https://dokydoc.com/register",
  login: "https://dokydoc.com/login",
  enterprise: "https://dokydoc.com/enterprise",
  security: "https://dokydoc.com/security",
  terms: "https://dokydoc.com/terms",
  privacy: "https://dokydoc.com/privacy",
};

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
  founderTitle: "Founder & Director",
  grievanceOfficer: "Muskan Shah",
  /**
   * Rule 26 of the Companies (Incorporation) Rules, 2014 asks for a telephone
   * number on the home page. Set it here once the founder decides which number
   * to publish (open question Q8). The footer shows it as soon as it is set.
   */
  phone: null as string | null,
};

export const mission =
  "Bring intelligence and out-of-the-box thinking to every industry, and make the lives of the people who run companies easier.";
