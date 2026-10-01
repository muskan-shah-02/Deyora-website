/**
 * What DokyDoc does, what it does not do yet, and straight answers to the
 * questions people ask. One source for the DokyDoc page, its FAQ structured
 * data and /llms.txt, so the three can never disagree.
 *
 * Every line has a source in docs/CLAIMS_REGISTER.md. The claims check reads
 * this file like any page.
 */

import { company } from "@/lib/site";

/** Shown in /llms.txt. Change it whenever anything below changes. */
export const FACTS_UPDATED = "1 October 2026";

export const CAPABILITIES: [string, string][] = [
  ["Coverage matrix", "Requirement by requirement: linked, missing or not examined, with a separate report of what was never looked at."],
  ["Reverse check", "Code, and claims in documents, that no requirement explains."],
  ["Needs your decision", "One ordered list of findings to decide, and a record of every decision already made."],
  ["Sealed sign-off", "A signed record that states the condition it depends on, and shows the day it stops holding."],
  ["UAT checklists and test cases", "Generated from the extracted requirements, for your team to review before use."],
  ["AskyDoc", "Ask questions about your own documents and code, in plain language."],
  ["Auto Docs", "Draft requirement documents, architecture diagrams and API summaries from your sources, as a starting point to edit."],
  ["Maps of your system", "A knowledge graph, a business map and architecture views of what was analysed."],
  ["Jira and Slack", "Check Jira tickets against the code, and create a Jira issue only when a person asks. Bring in messages from the Slack channels you choose."],
  ["Code from anywhere", "GitHub, GitLab, Bitbucket Cloud, a public repository link, or a ZIP upload. Nothing to install."],
  ["Spend controls", "Limits per person and per month, and the price of every paid run shown before it starts."],
  ["Audit trail", "Changes to documents, repositories, users, integrations and keys are recorded in a chain that shows tampering. Viewing and export are limited to the CXO, Admin and Auditor roles."],
];

export const SECURITY: string[] = [
  "Hosted on a server in Germany. Connections to DokyDoc use TLS 1.2 or 1.3.",
  "Document text and connector tokens are encrypted in the database.",
  "Each organisation is kept separate, and automated tests check access across organisations before every release.",
  "AI analysis uses Google’s Gemini API on the paid tier, under which Google does not use your content to train its models. DokyDoc trains no models of its own.",
  "Changes to documents, repositories, users and integrations are recorded in an audit log that shows tampering.",
];

export const LIMITS: string[] = [
  "Two-factor sign-in and company-wide login are not available yet.",
  "We have not yet had an independent penetration test, and we hold no ISO 27001 or SOC 2 certification.",
  "Your data is hosted in Germany, and AI processing happens outside India. Hosting in India is not available yet.",
  "Results are estimates for a person to review. We publish no accuracy figure, because we have not yet measured one on real customer projects.",
  "Accounting and CRM connections are built but not yet switched on.",
];

/**
 * Straight answers. Written so that an assistant summarising us has a correct
 * sentence to quote, including on the points older descriptions got wrong.
 */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What does DokyDoc do, in one sentence?",
    a: "It reads your requirement documents and your code, links each requirement to the code that implements it, and shows what is built, what is missing and what it could not check, with the evidence, for a named person on your side to review and sign off.",
  },
  {
    q: "How does it link a requirement to the code?",
    a: "In three steps. First it matches exact names. Then it looks for close matches, using shared words and spelling distance. Only the pairs those two steps cannot settle go to AI. Each link is marked verified, when a person has confirmed it, or inferred, when DokyDoc made it, and a requirement nobody checked stays unverified.",
  },
  {
    q: "How accurate is it?",
    a: "We have not measured accuracy on real customer projects yet, so we publish no figure. Instead, every finding points to the document and the code behind it, every link says whether a person verified it, and anything DokyDoc could not read is listed as not examined rather than passed as fine.",
  },
  {
    q: "Is a DokyDoc report the final word on my software?",
    a: "No. It is evidence for a person to judge. A CXO on your side signs off, and the sealed record states who signed, when, what was covered, which findings were still open and when it stops holding. DokyDoc never signs for you, and it does not settle disagreements with a vendor: it gives both sides the same facts to talk about.",
  },
  {
    q: "Does it watch my code all the time?",
    a: "Not live. It analyses when you start a run. If you connect a GitHub or GitLab webhook, it also analyses the changed files each time code is pushed, paid from your wallet like any other run.",
  },
  {
    q: "Does it work on code written with AI coding tools?",
    a: "Yes. DokyDoc reads the code in your repository, whoever or whatever wrote it, and checks it against what your documents asked for. That matters more when code is written fast from short prompts: requirements the prompts never covered show up as missing, and features nobody asked for show up as not in any document.",
  },
  {
    q: "Does it check security or performance requirements?",
    a: "It reads every requirement in your documents, including those about security and speed, and links what it can find in the code. It does not scan for vulnerabilities and does not run load tests, so it cannot tell you a system is secure or fast. Code that no requirement explains is flagged for a person to look at, which is not the same as a security review.",
  },
  {
    q: "Which tools does it connect to?",
    a: "Code from GitHub, GitLab (cloud or your own server), Bitbucket Cloud, a public repository link or a ZIP upload. Jira, to check tickets against the code and to create an issue when a person asks. Slack, to read messages from the channels you choose; DokyDoc posts nothing there. Accounting and CRM connections are built but not switched on. Nothing else is connected today.",
  },
  {
    q: "Does it change anything in my systems?",
    a: "Only in two registered ways today: a Jira issue, when a person asks for one, and a summary comment on a merged GitHub pull request, which is on by default until an opt-in setting ships. An automated test fails our build if a new way of writing into another system appears.",
  },
  {
    q: "What does it cost?",
    a: "Pay as you go, from a prepaid wallet in rupees, topped up through Razorpay. The price of each paid operation is shown before it runs, and anything your balance cannot cover is refused up front. There are no seats and no tiers. You get a GST invoice for every top-up, and unused balance never expires; top-ups are not refundable. Companies that buy through a contract can take an annual Enterprise agreement.",
  },
  {
    q: "Where is my data, and does the AI learn from it?",
    a: "DokyDoc runs on a server in Germany, and connections to it use TLS 1.2 or 1.3. Document text and connector tokens are encrypted in the database, and automated tests check before every release that one organisation cannot reach another's data. AI analysis uses Google's Gemini API on the paid tier, under which Google does not use your content to train its models, and DokyDoc trains no models of its own. Hosting in India is not available yet.",
  },
  {
    q: "What security reviews has it had?",
    a: "None independent yet: there has been no penetration test by an outside firm, and we hold no ISO 27001 or SOC 2 certification. Two-factor sign-in and company-wide login are not available yet. Our security documents are shared under NDA; ask through the contact page.",
  },
  {
    q: "Is DokyBrain available?",
    a: "No. DokyBrain is in development, being built inside DokyDoc, starting with manufacturing: orders, plants, suppliers and money. It has no sign-up, date or price yet. By design it prepares and recommends, and a person decides and acts.",
  },
  {
    q: "Who is behind DokyDoc?",
    a: `${company.legalName} (CIN ${company.cin}), incorporated on ${company.incorporated} and registered in Bhilwara, Rajasthan, India. The founder, ${company.founder}, reads every message sent through this website.`,
  },
];
