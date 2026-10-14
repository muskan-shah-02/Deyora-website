# Claims register

Every factual claim on the website, with the source that makes it true. Checked
against the DokyDoc code at the production commit `dc479e6` (deployed 29 Sep
2026) and the Trust Pack in `deyora-hq`, on 1 October 2026.

When a fact changes, change the page and this register in the same commit. A
claim with no row here does not go on the site.

**Status labels.** Everything shown as **Live** is in production on
dokydoc.com. DokyBrain is **In development**: it exists as an approved design
only, so the site describes it with "is designed to", "will" and "being built",
never as available, and gives it no sign-up, date or price.

## Company

| Claim | Source |
|---|---|
| Deyora Intelligence Private Limited; CIN U62010RJ2026PTC114088; incorporated 8 May 2026; ROC Jaipur; registered office B-195, Shastri Nagar, Bhilwara, Rajasthan 311001 | Certificate of Incorporation and MCA master data (`deyora-hq/company/records`); `company/STATUS_AND_OPEN_ITEMS.md` §1 |
| DokyDoc is a product of the company | CO-01 Company Profile |
| Grievance and query contact: Muskan Shah | TP-00-01 W-77, W-79 |
| "We reply within one business day (Monday to Friday, India time)" | TP-00-01 W-76: a sales-response promise the founder holds |
| "A young company"; "you talk to the founder" | CO-01 §3–4: pre-revenue, one person does the work |
| Vision, mission and promise of Deyora and of DokyDoc (`lib/site.ts`: `deyora`, `dokydocStatement`) | Statements of intent, not facts. Approved by the founder on 1 Oct 2026 "as of now" and recorded in `deyora-hq/team/DECISIONS.md` |
| The founder's photo is shown only once set in `lib/site.ts`; until then, initials. No LinkedIn links and no telephone number (founder's decisions of 1 Oct 2026, confirmed for the telephone number on 11 Oct 2026, board answer a48, knowing that rule 26 of the Companies (Incorporation) Rules, 2014 lists one; `deyora-hq/team/DECISIONS.md`) | `lib/site.ts` (`founderPhoto`, `founderLinkedIn`, `companyLinkedIn`, `phone` all null) |

## Proof points on the home page

| Claim | Source |
|---|---|
| "About 5,000 automated tests run before every DokyDoc release. If one fails, the release stops." | `dokydoc` at `dc479e6`: 5,058 `def test_` functions under `backend/tests`, 2 of them marked slow and excluded; `.github/workflows/deploy.yml` runs `pytest tests/ -m "not slow"` with no `|| echo` (OPS-8) and the deploy job `needs: [test-backend, test-frontend, build, preflight-env]` |
| "An automated check stops this website from publishing the kinds of claims we cannot back." | `scripts/check-claims.mjs`, run as `prebuild`; a failing check fails the Netlify build. It blocks known kinds of false claim; it does not check every sentence, which is why the copy says "the kinds of claims" |
| "1 business day to hear back" | TP-00-01 W-76 (above) |

## DokyDoc (Live)

| Claim | Source in `dokydoc` |
|---|---|
| Reads requirement documents (PDF, Word, text, Markdown) and reports parts it could not read | `services/validation_service.py`, `document_parser.py`; AI-03 Rule 5 |
| Code from GitHub, GitLab (cloud or own server), Bitbucket Cloud, public link, ZIP | `api/endpoints/code_host_integrations.py`, `repository_uploads.py`; `docs/CODE_HOST_CONNECTORS.md` |
| Exact names first, fuzzy next, AI only for undecided pairs; links marked verified or inferred; unchecked stays unverified | `services/mapping_service.py:7-9`; `core/basis.py`; AI-03 Rules 1, 5 |
| Coverage matrix; report of what was not examined | `api/endpoints/validation.py` (`coverage-matrix`, `/exposure`); `services/exposure_report.py` |
| Reverse check | CO-01 §2; `validation_service.py` |
| Needs your decision; decisions survive re-scans | `frontend/app/dashboard/decisions/page.tsx`; AI-03 Rule 3 |
| A CXO signs off; the sealed record states signer, time, coverage, open findings and when it stops holding; DokyDoc never signs for you | `validation.py` `create_sign_off`; `models/brd_sign_off.py`; `core/certificate_validity.py`; Terms §2 |
| UAT checklists and test cases, for review | `validation.py` (`/uat-checklist`, `/generate-tests`) |
| AskyDoc | `frontend/app/dashboard/chat`; `services/rag_service.py` |
| Auto Docs, as a starting point to edit | `api/endpoints/auto_docs.py`; CO-01 §2 |
| Knowledge graph, business map, architecture views | `/dashboard/brain`, `/dashboard/map`, `/dashboard/visual-architecture` |
| Jira: check tickets against code; create an issue only when a person asks. Slack: bring in messages from chosen channels (DokyDoc reads Slack; it posts nothing there) | `api/endpoints/integrations.py` (Slack calls: `oauth.v2.access`, `conversations.list`, `conversations.history` only); `core/third_party_writes.py` |
| Audit log of changes to documents, repositories, users, integrations and keys, chained so tampering shows; CXO, Admin and Auditor only | SEC-02 LOG-01, LOG-02, LOG-05 (TR-01, deployed 29 Sep 2026). Decisions and sign-off are not in the chain, so the site does not say "every change" |
| Writes into other systems only in registered ways, held by a build-failing test (today two: a Jira issue a person asks for, and a comment on a merged GitHub pull request, which is on by default until the opt-in change ships) | `tests/integration/test_ib12_no_write_back.py` (`test_exactly_two_calls_change_business_state`); `core/third_party_writes.py`; `api/endpoints/webhooks.py:377-397` |
| The Boardroom: eight advisers, up to three read-only lookups each, one rebuttal round, disagreement minuted; agenda through six lenses without AI; build, park or kill with a reason; build can open Jira tickets; each turn priced against a budget | `services/boardroom_meeting.py` (`SEATS`), `boardroom_lookups.py`, `boardroom_service.py:70-77`; `docs/BOARDROOM_DESIGN.md` |
| Prepaid rupee wallet through Razorpay; price shown before each paid operation; unaffordable operations refused; GST invoice per top-up; unused balance never expires; top-ups not refundable | Terms §4 (`frontend/content/legal/terms-of-service.md:46-70`); `.env.production.example` |
| No seats, no tiers | Decisions PRICING-1 and COMMERCE-1 |
| Spend limits per person and per month | AI-01 §9; `services/free_tier_service.py` |
| Enterprise: annual agreement, PO invoicing, own Google AI key set up with you, custom work | `frontend/app/enterprise/page.tsx`; COMMERCE-1; TR-17 deployed 29 Sep 2026 |
| Hosted on a server in Helsinki, Finland (EU); TLS 1.2 or 1.3 to DokyDoc | Hetzner console, read by the founder on 11 Oct 2026 (board answer a60: Hetzner's HEL1 location); SEC-02 CRY-02. SEC-03C §1 still says Germany until the Trust Pack changes of version 2.0 |
| Document text and connector tokens encrypted | SEC-02 CRY-01 |
| Organisation isolation checked by automated tests before every release | SEC-02; `.github/workflows/deploy.yml` (tests gate the deploy) |
| Google Gemini API, paid tier, does not use content to train; DokyDoc trains no models | AI-01 §2 |

## Straight answers (`lib/dokydoc.ts` `FAQ`, on /dokydoc#faq and in /llms.txt)

Each answer repeats claims already registered above, except these:

| Claim | Source in `dokydoc` |
|---|---|
| "In three steps": exact names, close matches using shared words and spelling distance, then AI only for pairs those cannot settle | `services/mapping_service.py:1-12` (Tier 1 normalised name equality; Tier 2 token overlap and Levenshtein; Tier 3 AI for ambiguous pairs only) |
| "Not live. It analyses when you start a run. With a GitHub or GitLab webhook, it also analyses the changed files each time code is pushed, paid from your wallet" | `api/endpoints/webhooks.py` (`_extract_github_push`, `_extract_gitlab_push`, `webhook_triggered_analysis`; line 75 notes a webhook run spends the tenant's wallet) |
| Works on code written with AI tools, "whoever or whatever wrote it" | The code hosts and ZIP upload read the repository's files as they are; nothing in ingestion depends on who wrote the code |
| Does not scan for vulnerabilities or run load tests | No such feature exists (CO-01 §2 feature list; capabilities above) |
| "Nothing else is connected today" | The connector list above; accounting and CRM built but not switched on |
| Does not settle disagreements with a vendor; a CXO signs off, DokyDoc never signs | Terms §2; sign-off row above |
| "We have published no figures on rework cost, savings or speed" (llms.txt corrections) | This site carries none, and the claims check blocks unmeasured percentages and multipliers |

## Code written with AI tools (DokyDoc page band, builder persona)

| Claim | Source |
|---|---|
| DokyDoc reads the code whoever or whatever wrote it, and reports missing, not in any document and not examined | As above; the three finding kinds are the coverage matrix, the reverse check and the exposure report |
| "Teams and agencies now write code with AI tools, fast and from short prompts" | A description of the market, not a claim about DokyDoc; no figure is attached |

## What the site says DokyDoc does not do yet

| Statement | Source |
|---|---|
| No two-factor sign-in or company-wide login | SEC-02 IAM-02, IAM-04 |
| No independent penetration test; no ISO 27001 or SOC 2 certification | SEC-02; SEC-03C §5 |
| Hosted in Finland (EU); AI outside India; no India hosting | Board answer a60 (11 Oct 2026); SEC-03C §5; AI-01 §9 |
| No published accuracy figure, because none has been measured on real customer projects | AI-03 "Gaps" |
| Accounting and CRM connections built but not switched on | `api/endpoints/connectors.py:335-347`; CO-01 §9 |

## DokyBrain (In development)

| Claim | Source in `dokydoc/docs/DOKYBRAIN_DESIGN.md` |
|---|---|
| Built inside DokyDoc, not a separate product | §0 D1, D2 |
| "One evidence-backed foundation that connects what a company intended, promised, built, delivered and earned…" | §1.1 thesis |
| Observes, reasons, recommends and prepares; a person approves and acts; never acts in your systems | §0 D11, D12 |
| No count without its denominator ("6 of 47 open commitments") | Rule 6 |
| Starting with manufacturing; designed so any industry can start | §0 D9, D20, D22 |
| Sealed output will be a Verification Report signed by a named person at the customer | §0 D10; §2.4 |
| Stands on what DokyDoc already runs: Boardroom, AskyDoc, sealed sign-off, verified-versus-inferred evidence | §15.1 |
| "The machine may be wrong. It must never be unknowably wrong." | §3 ("The brain may be wrong; it must never be unknowably wrong") |

## Personas (`lib/personas.ts`)

The home page speaks to whoever the visitor says they are. Every line in the
five personas uses only claims already in this register: DokyDoc's checks,
the reverse check, code hosts and pay-as-you-go wallet (Live), and DokyBrain's
design (In development, labelled as such in the "maker" persona's eyebrow and
copy). The investor persona repeats the test-count claim above.

## Illustrations

The "Needs your decision" card (home), the coverage report (DokyDoc), the
commitments card (home, "I run a manufacturing business") and the snag-list
walk-through (DokyDoc) are drawn in code. Their names and numbers are
invented, and each is captioned as an illustration. The commitments card is
also labelled "DokyBrain · in development", follows Rule 6 ("6 of 47 open
commitments", never "at risk" as a status; `DOKYBRAIN_DESIGN.md` §6.5) and
uses the `core.commitment_slippage` idea (§2.2). The walk-through uses the
product's own decision words (Agreed / Not a problem / Document should
change: `frontend/app/dashboard/decisions/page.tsx` `ACTION_FILTERS`) and the
report of what was not examined (`services/exposure_report.py`).

## Website privacy

| Claim | Source |
|---|---|
| Notice at collection and the privacy notice: purpose, Netlify (United States), deletion after 365 days and two years, rights, grievance officer, 30 days | The deletions are made at a review every three months, with a repeating reminder the founder set on 13 Oct 2026 (board answer a95); TP-00-01 W-77; IT (SPDI) Rules 2011 rules 4 and 5(9); DPDP Act s.5 and Rules rule 3 when in force |
| The privacy notice is version 2.0, the text of t157 section D6 as the founder approved it; it shows its version, its effective date and a change log | deyora-hq `handoffs/2026-10-09_t157_policies_v2/out/D6_website_privacy_notice.md`; founder's decisions of 11 Oct 2026 (board answer a41) |
| A complaint to the Board is made in the way the Board sets out on its website (the rights list), with a dated change-log row; both appear only once `BOARD_ROUTE_CLARIFIED` in `app/privacy/page.tsx` is set to the day the founder writes "push main for the website" | A clarification under the notice's "Changes to this notice", from the reviewer's verdict on version 2.0 and its approval on 13 Oct 2026 (board answer a97); the same words as the DokyDoc Privacy Policy 2.0; deyora-hq t157 section D6 |
| The contact form rests on s.7(a) (details given for a purpose), not consent; people can still tell us to stop | Founder's decision of 11 Oct 2026 (a41, decision 5); Trust Pack PRV-03's DPDP mapping |
| Form messages: Netlify keeps them and emails a copy to the company mailbox at Zoho Mail (India); the mailbox copy is deleted two years after the last message | `NETLIFY_FORM_SETUP.md`: set up and tested with the founder on 13 Oct 2026, one email notification to the company mailbox and no webhook (board answer a89); deyora-hq t157 research note R4, row 5 (Zoho Mail in its India data centre) |
| The website host receives every request and keeps records of them under its own terms | Every request reaches the host; t157 section D6, "Facts checked against the website code" |
| Cloudflare sits in front of the site, carries its traffic and may set a security cookie; it adds its Web Analytics script (counts visits; Cloudflare says it uses no cookies or other browser storage and does not use the IP address or browser details to identify anyone) and its email-protection script; nothing else is added | Founder's Cloudflare screenshots and page source, 11 Oct 2026 (board answers a61, a62); kept and disclosed by the founder's choice (a64); Cloudflare's Web Analytics page ("does not use any client-side state, such as cookies or localStorage") and Cloudflare's cookie list, read 11 Oct 2026 |
| People Deyora contacts for business: what is held, where it comes from (business directories and business-contact databases among the sources), the grounds (s.3(c)(ii), s.7(a), s.6), contact at work email and work phone until 31 March 2027 with the strict rule from then, the do-not-contact entry, deletion from the list and its earlier versions, deletion after 12 months without contact | deyora-hq `team/DECISIONS.md` (6 Oct 2026; 11 Oct 2026: a41, decision 2 B in a47, the list's source in a53) and `sales/calling/README.md`; the strict rule's date is board task t195 |
| A private code-hosting service and the AI tools Deyora uses hold the outreach list | Founder's decisions of 11 Oct 2026 (a41, 3a and 3b); the calling plan is in deyora-hq `sales/calling/` |
| The site's own code sets no cookies and runs no analytics; apart from Cloudflare's two scripts, it loads nothing from other websites | This repository: no analytics, no third-party scripts; fonts self-hosted by `next/font`; the Content-Security-Policy in `netlify.toml` allows scripts only from the site itself, so browsers that enforce it refuse the Web Analytics script, and the notice says "if your browser runs it" |
| What the site keeps in the browser (persona and, after sending, first name and company in localStorage; this visit's pages, referring host and UTM tags in sessionStorage) and that none of it leaves the browser unless the form is sent | `components/Visitor.tsx`; the form payload is built in `components/Conversation.tsx` `onSubmit` |
| Name and company are suggested from the email address in the browser, nothing is looked up | `lib/identity.ts` (no network call) |
| The form sends the two answers, the persona, this visit's pages, the referring host and UTM tags, and says so before sending | `components/Conversation.tsx`; `public/__forms.html` declares the same fields |
| Links into DokyDoc carry `utm_source`, `utm_medium` and the persona as `utm_content`, never an email or a name | `lib/site.ts` `dokydocLink` |

## Security

| Claim | Source |
|---|---|
| The vulnerability disclosure policy at /security/disclosure: how to report, the response times, the scope, the rules for testing, coordinated disclosure, the safe harbour, no bug bounty, internal handling, and the security.txt it describes | deyora-hq `trust-pack/02-security/POL-SEC-11_VULNERABILITY_DISCLOSURE_POLICY.md`, version 1.2 (13 Oct 2026): the page is its text without the header and internal notes; the founder's instruction of 13 Oct 2026 to make it ready to publish (t157) |
| `/.well-known/security.txt`: contact muskan@deyoraintelligence.com, expiry 29 September 2027 (less than a year ahead, as RFC 9116 recommends), the policy page and its own canonical address | POL-SEC-11 §10; served as `text/plain; charset=utf-8` by the header in `netlify.toml`; the security contact and the domain are the founder's answers a71 and a94 |
| "Acknowledgements. None yet." | The list starts empty: the policy is published for the first time with this page, and it promises the list (§8). A name is added only with the reporter's permission |

## From the release day of version 2.0 of the DokyDoc documents

`DOKYDOC_V2_RELEASE_DAY` in `lib/site.ts` holds the marker `{{RELEASE_DAY}}` until that day (deyora-hq board task t157; `handoffs/2026-10-09_t157_policies_v2/RESUME.md`, "On the release day", item 2). It is filled with the day, India time, never earlier, in the commit the founder publishes with "push main for the website". Until then every page keeps its wording of 14 October 2026 and the rows above hold. From that day, the claims below replace the rows named, each in the words of the approved version 2.0 texts (board answer a97), and `FACTS_UPDATED` (the date /llms.txt is "current as of") takes the day.

| Claim from the release day | Replaces | Source |
|---|---|---|
| The privacy notice: the DokyDoc Privacy Policy covers Account Data and Customer Content, and its Personal Data We Handle list sets out the personal data DokyDoc handles; business records an organisation sends us for a review are handled as its Data Processor, under that agreement and the DokyDoc Privacy Policy; a change-log row dated the release day. The version stays 2.0: it is a clarification under "Changes to this notice" | The notice's paragraph on the DokyDoc Privacy Policy and the second point under "Emails to us" | deyora-hq t157 section D6, "Before version 2.0 of the DokyDoc documents", word for word |
| /security/disclosure is POL-SEC-11 version 1.3, dated the release day. §4: the services of the providers on the Sub-processor and Connector List, the services customers connect and the website's host are out of scope. §7: testing that follows the policy is not a breach of the Terms of Service ("Acceptable use"), because the policy is the written permission they require | The "Security" row for version 1.2 (§4's list of named providers, Slack among them; §7's "Terms of Service (§3)") | deyora-hq trust-pack POL-SEC-11 version 1.3, in the release-day patch (`handoffs/2026-10-09_t157_policies_v2/release/trust_pack_2.0.patch`), word for word |
| The wallet: "No refunds. Top-ups are final."; a company's top-up balance does not expire and stays usable while its account is open; an organisation that is not a company can use each top-up for 360 days from the day it is paid, and any part unused by then lapses | "unused balance never expires; top-ups not refundable" (DokyDoc, the wallet row) | The Terms of Service 2.0, "Fees, wallet and invoices" (deyora-hq t157 section D2), word for word |
| Jira only: the Slack lines go (the capability card and the answer on connected tools) | "Slack: bring in messages from chosen channels" (DokyDoc, the Jira and Slack row) | The release that publishes version 2.0 removes the Slack workspace connection (board answer a78); the Sub-processor and Connector List 2.0 has no Slack row (D5) |
| The answer on connected tools no longer says "Nothing else is connected today", and /llms.txt no longer says "DokyDoc connects only to the tools listed above": Confluence becomes available that day ("Available, for sites on atlassian.net", D5), and no approved website wording lists it yet | "Nothing else is connected today" (Straight answers) | D5's connector table; the product's e09622d ships in the same release |
| AI: Google's Gemini API on the paid tier; "under Google's terms for paid services, Google does not use prompts, including files such as documents and images, or responses to improve its products"; "Deyora does not train models across customers, and does not use Customer Content to improve results for any other customer"; "Deyora will not train or fine-tune an AI model on your organisation's Customer Content, even for your organisation alone, unless your organisation agrees in writing" | "Google Gemini API, paid tier, does not use content to train; DokyDoc trains no models" (DokyDoc, the last row) | The Privacy Policy 2.0, "How DokyDoc uses AI" (D1), the same promise in the Terms (D2, "Customer Content") and the DPA (D3); the Sub-processor and Connector List, "Google's Gemini API (paid tier)", "Use of what it receives" (D5); deyora-hq t157 Section C, gap 89. Google's terms are read again on the day the List is published (D5's founder check) |
