/**
 * What DokyDoc does, what it does not do yet, and straight answers to the
 * questions people ask. One source for the DokyDoc page, its FAQ structured
 * data and /llms.txt, so the three can never disagree.
 *
 * Every line has a source in docs/CLAIMS_REGISTER.md. The claims check reads
 * this file like any page.
 */

import { company, DOKYDOC_V2_RELEASE_DAY, untilDokyDocV2 } from "@/lib/site";

/**
 * Shown in /llms.txt. Change it whenever anything below changes. The lines marked with untilDokyDocV2 change on the
 * release day of version 2.0 of the DokyDoc documents (DOKYDOC_V2_RELEASE_DAY in lib/site.ts), and this date with them.
 */
export const FACTS_UPDATED = untilDokyDocV2("1 October 2026", DOKYDOC_V2_RELEASE_DAY);

export const CAPABILITIES: [string, string][] = [
  ["Coverage matrix", "Requirement by requirement: linked, missing or not examined, with a separate report of what was never looked at."],
  ["Reverse check", "Code, and claims in documents, that no requirement explains."],
  ["Needs your decision", "One ordered list of findings to decide, and a record of every decision already made."],
  ["Sealed sign-off", "A signed record that states the condition it depends on, and shows the day it stops holding."],
  ["UAT checklists and test cases", "Generated from the extracted requirements, for your team to review before use."],
  ["AskyDoc", "Ask questions about your own documents and code, in plain language."],
  ["Auto Docs", "Draft requirement documents, architecture diagrams and API summaries from your sources, as a starting point to edit."],
  ["Maps of your system", "A knowledge graph, a business map and architecture views of what was analysed."],
  // The release that publishes version 2.0 removes the Slack workspace connection (board answer a78).
  untilDokyDocV2<[string, string]>(
    ["Jira and Slack", "Check Jira tickets against the code, and create a Jira issue only when a person asks. Bring in messages from the Slack channels you choose."],
    ["Jira", "Check Jira tickets against the code, and create a Jira issue only when a person asks."],
  ),
  ["Code from anywhere", "GitHub, GitLab, Bitbucket Cloud, a public repository link, or a ZIP upload. Nothing to install."],
  ["Spend controls", "Limits per person and per month, and the price of every paid run shown before it starts."],
  ["Audit trail", "Changes to documents, repositories, users, integrations and keys are recorded in a chain that shows tampering. Viewing and export are limited to the CXO, Admin and Auditor roles."],
];

export const SECURITY: string[] = [
  "Hosted on a server in Helsinki, Finland, in the EU. Connections to DokyDoc use TLS 1.2 or 1.3.",
  "Document text and connector tokens are encrypted in the database.",
  "Each organisation is kept separate, and automated tests check access across organisations before every release.",
  // From the release day, the AI promises of the version 2.0 documents, word for word (Section C, gap 89).
  untilDokyDocV2(
    "AI analysis uses Google’s Gemini API on the paid tier, under which Google does not use your content to train its models. DokyDoc trains no models of its own.",
    "AI analysis uses Google’s Gemini API on the paid tier. Under Google’s terms for paid services, Google does not use prompts, including files such as documents and images, or responses to improve its products. Deyora does not train models across customers, and does not use Customer Content to improve results for any other customer. Deyora will not train or fine-tune an AI model on your organisation’s Customer Content, even for your organisation alone, unless your organisation agrees in writing.",
  ),
  "Changes to documents, repositories, users and integrations are recorded in an audit log that shows tampering.",
];

export const LIMITS: string[] = [
  "Two-factor sign-in and company-wide login are not available yet.",
  "We have not yet had an independent penetration test, and we hold no ISO 27001 or SOC 2 certification.",
  "Your data is hosted in Finland, in the EU, and AI processing happens outside India. Hosting in India is not available yet.",
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
    // From the release day: no Slack (a78). Confluence also becomes available that day and the site does not list
    // it, so "Nothing else is connected today" goes until approved wording lists it.
    a: untilDokyDocV2(
      "Code from GitHub, GitLab (cloud or your own server), Bitbucket Cloud, a public repository link or a ZIP upload. Jira, to check tickets against the code and to create an issue when a person asks. Slack, to read messages from the channels you choose; DokyDoc posts nothing there. Accounting and CRM connections are built but not switched on. Nothing else is connected today.",
      "Code from GitHub, GitLab (cloud or your own server), Bitbucket Cloud, a public repository link or a ZIP upload. Jira, to check tickets against the code and to create an issue when a person asks. Accounting and CRM connections are built but not switched on.",
    ),
  },
  {
    q: "Does it change anything in my systems?",
    a: "Only in two registered ways today: a Jira issue, when a person asks for one, and a summary comment on a merged GitHub pull request, which is on by default until an opt-in setting ships. An automated test fails our build if a new way of writing into another system appears.",
  },
  {
    q: "What does it cost?",
    // From the release day, the Terms of Service's rule ("Fees, wallet and invoices"), word for word.
    a: untilDokyDocV2(
      "Pay as you go, from a prepaid wallet in rupees, topped up through Razorpay. The price of each paid operation is shown before it runs, and anything your balance cannot cover is refused up front. The wallet does not charge by the number of users, and there are no tiers. You get a GST invoice for every top-up, and unused balance never expires; top-ups are not refundable. Companies that buy through a contract can take an annual Enterprise agreement.",
      "Pay as you go, from a prepaid wallet in rupees, topped up through Razorpay. The price of each paid operation is shown before it runs, and anything your balance cannot cover is refused up front. The wallet does not charge by the number of users, and there are no tiers. You get a GST invoice for every top-up. No refunds. Top-ups are final. If your organisation is a company, its top-up balance does not expire and stays usable while its account is open. If your organisation is not a company registered under the Companies Act, 2013 or an earlier companies law (for example a partnership, a limited liability partnership, a trust, a society or a sole proprietor), each top-up it pays for can be used for 360 days from the day it is paid, and any part unused by then lapses. Companies that buy through a contract can take an annual Enterprise agreement.",
    ),
  },
  {
    q: "Where is my data, and does the AI learn from it?",
    a: untilDokyDocV2(
      "DokyDoc runs on a server in Helsinki, Finland, in the EU, and connections to it use TLS 1.2 or 1.3. Document text and connector tokens are encrypted in the database, and automated tests check before every release that one organisation cannot reach another's data. AI analysis uses Google's Gemini API on the paid tier, under which Google does not use your content to train its models, and DokyDoc trains no models of its own. Hosting in India is not available yet.",
      "DokyDoc runs on a server in Helsinki, Finland, in the EU, and connections to it use TLS 1.2 or 1.3. Document text and connector tokens are encrypted in the database, and automated tests check before every release that one organisation cannot reach another's data. AI analysis uses Google's Gemini API on the paid tier. Under Google's terms for paid services, Google does not use prompts, including files such as documents and images, or responses to improve its products. Deyora does not train models across customers, and does not use Customer Content to improve results for any other customer. Deyora will not train or fine-tune an AI model on your organisation's Customer Content, even for your organisation alone, unless your organisation agrees in writing. Hosting in India is not available yet.",
    ),
  },
  {
    q: "What security reviews has it had?",
    a: "None independent yet: there has been no penetration test by an outside firm, and we hold no ISO 27001 or SOC 2 certification. Two-factor sign-in and company-wide login are not available yet. Our security documents are shared under NDA; ask through the contact page.",
  },
  {
    q: "Is DokyBrain available?",
    a: "Yes, inside DokyDoc, since 15 October 2026, and Deyora switches it on for each company. Today it runs on our demo manufacturer, Prathvel Engineering, with invented records, and we show it on request. Reading your own company's ERP exports and documents into it is coming. It has no separate sign-up: it is part of DokyDoc. By design it prepares and recommends, and a person decides and acts.",
  },
  {
    q: "Who is behind DokyDoc?",
    a: `${company.legalName} (CIN ${company.cin}), incorporated on ${company.incorporated} and registered in Bhilwara, Rajasthan, India. The founder, ${company.founder}, reads every message sent through this website.`,
  },
];
