/**
 * A best guess at a name and a company from a work email, so a visitor types
 * one thing instead of four. The guess is always shown and editable before
 * anything is sent; nothing is looked up anywhere.
 *
 *   priya.sharma@acme-foods.co.in  →  "Priya Sharma", "Acme Foods"
 *   rahul@gmail.com                →  "Rahul", no company
 *   info@acme.in                   →  no name, "Acme"
 */

const FREE_MAIL = new Set([
  "gmail", "googlemail", "yahoo", "ymail", "rocketmail", "outlook", "hotmail", "live", "msn", "icloud", "me", "mac",
  "aol", "proton", "protonmail", "pm", "rediffmail", "rediff", "zohomail", "yandex", "gmx", "mail", "tutanota",
  "tuta", "fastmail", "hey", "duck", "inbox", "lycos", "mailinator",
]);

const ROLE_MAILBOXES = new Set([
  "info", "hello", "hi", "contact", "admin", "office", "sales", "team", "support", "mail", "accounts", "account",
  "hr", "careers", "jobs", "enquiry", "enquiries", "query", "queries", "founder", "ceo", "director", "md", "owner",
  "business", "help", "billing", "finance", "purchase", "noreply", "no-reply",
]);

// The second-level labels of country domains: acme.co.in → acme.
const SECOND_LEVEL = new Set(["co", "com", "net", "org", "ac", "gov", "edu", "ltd", "plc", "nic", "res", "firm", "gen", "ind"]);

const title = (w: string) => (w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w);

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function guessIdentity(email: string): { name: string | null; company: string | null } {
  const at = email.trim().toLowerCase().split("@");
  if (at.length !== 2 || !EMAIL_RE.test(email.trim())) return { name: null, company: null };
  const [local, domain] = at;

  let name: string | null = null;
  const base = local.split("+")[0];
  if (!ROLE_MAILBOXES.has(base)) {
    const parts = base
      .split(/[._-]+/)
      .map((p) => p.replace(/\d+/g, ""))
      .filter((p) => /^[a-z]{2,}$/.test(p));
    if (parts.length >= 2) name = `${title(parts[0])} ${title(parts[parts.length - 1])}`;
    else if (parts.length === 1 && parts[0].length >= 3 && parts[0].length <= 12) name = title(parts[0]);
  }

  let company: string | null = null;
  const labels = domain.split(".").filter(Boolean);
  if (labels.length >= 2) {
    labels.pop();
    if (labels.length >= 2 && SECOND_LEVEL.has(labels[labels.length - 1])) labels.pop();
    const org = labels[labels.length - 1];
    if (org && !FREE_MAIL.has(org)) company = org.split("-").filter(Boolean).map(title).join(" ");
  }

  return { name, company };
}

export const firstName = (name: string | null) => (name ? name.trim().split(/\s+/)[0] : null);
