# Claims register

Every factual claim on the website, with the source that makes it true. Checked
against the DokyDoc code at the production commit `dc479e6` (deployed 29 Sep
2026) and the Trust Pack in `deyora-hq`, on 1 October 2026. The story (below)
and every DokyBrain row were checked again on 15 October 2026 against the
production commit `321fd50` (deployed 15 Oct 2026, 20:38 IST), "dokydoc main"
in the rows below.

When a fact changes, change the page and this register in the same commit. A
claim with no row here does not go on the site.

**Status labels.** Everything shown as **Live** is in production on
dokydoc.com. **The product's name on public pages is DokyDoc only** (the
founder, 16 Oct 2026): the internal name of its brain, DokyBrain, appears on no
public page, in no metadata, sitemap, alt text or /llms.txt; the rows below use
it only to point at the product code. DokyDoc's checks on orders, invoices,
payments and stock are live (since 15 Oct 2026): they are off for a company
until Deyora switches them on, and no company can load its own records yet, so
the site lists a company's own records under **Coming**, with no date. **No line
says a visitor can see the demo company until it is up on production** (a153;
board task t204): those lines are behind `lib/demo.json` ("up": false), which is
set to true only in the website push after t204 is done; "Book a demo" stays
(the founder, 16 Oct 2026), because it books a time to talk. Every link to the product
goes to https://dokydoc.com, its home page, never straight to /login, /register
or /dashboard; links to DokyDoc's /terms, /privacy, /subprocessors and /security
stay. Nothing that waits for v1.8's final push is on this site.

## The home page: the company and its vision (`lib/home.ts`, `app/page.tsx`; a153)

The planner on the founder's delegation (board answer a153): the home page is about Deyora and its vision; the
product's detail is at dokydoc.com (and /dokydoc here until then). Vision sentences are aims, said as "we are
building", never as something done; the only product named is DokyDoc.

| Claim | Source |
|---|---|
| Under the brand line: "Your company's knowledge: scattered." / "Your company brain: connected." / "We bring together what your company knows, connect it to what it does, and show you what needs attention." | The founder's wording, 16 Oct 2026 (a155 review, Q41). True today: DokyDoc reads a company's documents and code and the demo companies' records, checks them against each other and shows what doesn't match; a company's own records are listed as coming on /dokydoc |
| Option 2: "We are building intelligence for the people who run companies." | The About page's headline (`app/about/page.tsx`), approved wording |
| Option 3: "We are building intelligence that shows the people in charge what needs attention." | The mission, shortened (`deyora.mission`: "…shows what needs attention, and prepares the next step, so the people in charge spend their time deciding, not chasing") |
| "We are building intelligence that helps the people who run companies see what is hidden in their own records. It prepares. You decide." | An aim ("we are building"); "It prepares. You decide." is `deyora.promise` |
| The dolphin: a drawing of this site's own, no claim | `components/Dolphin.tsx` |
| "Our first product: DokyDoc" and its line (orders, invoices, payments and stock against each other, and code against its documents; only what doesn't match, with the record behind each one; you decide) | DokyDoc is live at dokydoc.com; the line is the story's (`STORY.line`, rows below) with documents against code (DokyDoc (Live), below) |
| "Visit dokydoc.com" goes to https://dokydoc.com | The founder, 16 Oct 2026: every link to the product goes to its home page |
| "A person decides": what we build prepares the work and shows its reasons; the decision stays with a person on your side | `deyora.promise`; DokyDoc's sign-off by a named person (DokyDoc (Live), below) |
| "Every finding shows its record" | The trust row "Every item shows its record" (The story, below) |
| "Measured, not promised": a DokyDoc check is switched on only after it finds the right answers on test records whose answers are kept hidden from it | The trust row "Every check is tested first" (The story, below): dokydoc `backend/app/brain/proven_checks.py` and the hidden exam B |
| The team: the founder's quote; Divyansh Shah, Director; Arpit Agarwal, Shareholder | The founder's approved quote (unchanged from the home page of 16 Oct); `lib/site.ts` `people` (both agreed, a152) |

## The story (`lib/story.ts`, `components/Story.tsx`; /dokydoc, /llms.txt)

Board answer a147, task t155; deyora-hq `handoffs/2026-10-15_a147_story/STORY.md`. Plain words at the founder's
request (16 Oct 2026). Sources are in dokydoc main `321fd50`.

| Claim | Source |
|---|---|
| "See what's going wrong in your business. All in one list." DokyDoc checks orders, invoices, payments and stock against each other, shows only what doesn't match, with the record behind each one; you decide | What the product does in production: DokyBrain's checks (rows below), which run today on the demo company, and its one attention list ("What deserves your attention today, and every commitment behind it, each with its evidence", `frontend/lib/commitments-copy.ts:39-40`). Where it runs today is said right under the buttons ("Today you can see it on our demo company, or use it on your software and its documents. Using it on your own company's records is coming") |
| "A supplier keeps slipping": the delivery date on a purchase order keeps moving later | `mfg.supplier_slippage`, `general.commitment_slippage` (a PO line's date moved later twice in 90 days; `brain/packs/manufacturing/detection.py:42-46`, `packs/general/detection.py:30-35`) |
| "Shipped, but not billed" | `mfg.order_to_cash_gap`, `general.order_to_cash` (goods uninvoiced; `detection.py:39-41`, `general/detection.py:36-39`) |
| "Late payer over the limit" | `mfg.payment_at_risk`, `general.obligation_at_risk` (overdue beyond a 30-day grace and over the credit limit; `detection.py:65-70`, `general/detection.py:40-46`) |
| "Two systems, two answers" | `general.source_disagreement` (`packs/general/disagreement.py:11-25`) |
| "PO and sales order don't match" (quantity, price, date or address) | `mfg.customer_po_vs_so` (`detection.py:51-64`) |
| "Materials not in place": an order due before the materials it needs are on record | `mfg.commitment_coverage_gap` (`detection.py:25-38`; `detectors/templates/coverage.py:3-4`) |
| "Stock running short": new orders above free stock | `mfg.demand_vs_inventory` (stock-out days; `detection.py:91-101`) |
| "Software that misses the spec": a requirement nobody built, or code nobody asked for | The DokyDoc rows below (coverage matrix, reverse check) |
| Each of these is a check DokyDoc runs; each finding shows the record behind it | All ten have passed their exams (`core/proven_checks.py:211-222`); the attention list as above |
| Step 1: documents and code today; ERP exports on the demo company now, on your own company coming | The connector list `frontend/content/legal/subprocessors-and-connectors.md:115-125, 229-234`; `backend/app/brain/raw_log.py:167-182` (refused in production while storage is local, `.env.production.example:266`, and while the use is pending, `register_fragments/p1_17a.py:47-53`); `core/raw_log_allowance.py` `DEMO_COMPANY` |
| Step 2: it compares them and lists only what doesn't add up | The checks and the attention list above |
| Step 3: you decide; DokyDoc changes nothing in your ERP | `core/third_party_writes.py` (no write back to an ERP); §0 D11, D12 |
| Who it is for: businesses that take orders (any industry), manufacturers (the deepest set of checks), software teams (DokyDoc's first job; use it today) | The general starter for an industry no pack covers (`packs/general/starters.py:3-21, 52-71`); the manufacturing pack (`packs/manufacturing/`); DokyDoc's self-serve sign-up (`frontend/app/register/page.tsx`) |
| Live: DokyDoc for software, self-serve | DokyDoc rows below; `frontend/app/login/page.tsx:187-194` (the login page links to registration) |
| Live: "DokyDoc for orders, invoices, payments and stock", running since 15 October 2026; "We switch it on for each company" | Deploy run 38729273597 of `321fd50`, 20:38:52 IST (deyora-hq board, Log row 285); every brain feature is `POLICY_OFF` and only the platform operator switches it on (`core/feature_gate.py:149-218`; `services/tenant_feature_service.py:10-14, 84-91`) |
| Live: our demo company, a sample manufacturer with made-up records; we show it on request | `docs/founder_tasks_phase2/t203_demo_on_production.md:3-8, 52-88`; `services/demo_grant_service.py:10-25`. The site goes live only once the demo is up on production (t203) |
| Coming: your own company's records; recording decisions and goals; Zoho Books, QuickBooks and HubSpot; alerts by email, Slack or Teams; signed reports you can send to a customer; more checks | Raw log as above; `register_fragments/p3_01.py:122-127`; the connector list ("Built, not available yet", :125, :238); `p3_05.py:57-63`, `p3_13.py:55`; `p2_10.py:67-72`, `p4_01.py:54-59`, `p4_04.py:22-28` (a signed report is a page the company prints and sends itself, `frontend/lib/verification-report-copy.ts` `NOTHING_SENT`); locked checks (`proven_checks.py:207-210`). No dates |
| Price: pay only for what you use, a wallet in rupees, the price before anything runs, no plans and no subscription | `frontend/app/billing/page.tsx:1474-1478` ("One product, no plans and no subscription… shows its price before it runs"). Not "no seats": a company has a user cap (`models/tenant.py` `max_users`, 10 by default; `licensed_seats` for a contract), and the product's copy guard says seats are enforced (`tests/test_false1_copy_is_a_contract.py:7, 48`) |
| "Get started" goes to https://dokydoc.com (the product's home page); "Book a demo" goes to /contact?topic=demo, the topic "I'd like a DokyDoc demo"; the announcement bar, "DokyDoc now checks orders, invoices, payments and stock · Book a demo" | The founder's decision of 16 Oct 2026; `components/Conversation.tsx` (the "demo" topic); the announcement is true as the story's rows say |
| The hero card: "3 of 48 open orders need you", a late supplier, an order shipped and not billed, a late payer over the limit | An illustration in code with made-up names and numbers, captioned "Illustration · made-up example"; the count carries its denominator (Rule 6) |
| Under the headline: "Nothing to install" · "Changes nothing in your ERP" · "Pay only for what you use" (a149: each true for any visitor today) | DokyDoc is a web app at dokydoc.com, and code comes in by a pasted token, a public link or a ZIP (the DokyDoc rows); `core/third_party_writes.py` (no write back to an ERP); the wallet (`frontend/app/billing/page.tsx:1474-1478`). "Works with your Excel exports" is not used here: until a company's own records open in production (t220) it holds only on the demo company, so it waits in the free-look offer |
| "DokyDoc is the company brain for your business: it checks your orders, invoices, payments and stock against each other" (once, below the first screen) | a149's line, renamed by the founder's decision of 16 Oct 2026; the checks rows above |
| Trust: every item shows its record (the order, invoice or document it came from) | The attention list, "each with its evidence" (`commitments-copy.ts:39-40`); each line cites its export rows (`brain/packs/manufacturing/reports.py`, `ReportLine.examined`) |
| Trust: it says "not checked" instead of guessing, and lists what it could not see | DokyDoc's report of what was not examined (`services/exposure_report.py`); DokyBrain's brief, "what the brain could not see" (`brief-copy.ts:30-31`); a report "cannot be judged" state (`brain/reports/condition.py`) |
| Trust: it never writes back to your ERP; an automated test blocks any new kind of write into another system | `core/third_party_writes.py` (every write-verb call into another system classified; an unclassified one fails the build); `tests/integration/test_ib12_no_write_back.py` |
| Trust: before a check is switched on it must find the right answers on test records whose answers are kept hidden from it; until it passes it stays locked | `core/proven_checks.py:1-30` (switched on only once both halves pass: its planted cases on dataset A, its precision floor on the sealed dataset B); `brain/eval/measures.py:226` ("hidden evaluation… answer key sealed until scoring"); the lock (`proven_checks.py:238-239`) |
| Where your data is kept: DokyDoc's server in Helsinki, Finland, run by Hetzner; "When DokyDoc analyses it, it is processed by the AI providers named on our Sub-processor and Connector List, with the other companies that process data for us" (a153: no AI model named on the page); "Deyora does not train models across customers" | The Sub-processor and Connector List as published on 15 Oct 2026 (dokydoc.com/subprocessors; deyora-hq t157 D5), its table of six; the Privacy Policy 2.0 ("does not train models across customers", a pinned phrase) |
| PREPARED, NOT LIVE: "Free look at your last 3 months" (send 3 months of Excel or CSV exports; DokyDoc runs on them; free; nothing to install) | Renders only when `lib/offers.json` says `"freeLook": true`, set in the website push after a company's own records open in production (board task t220) and the founder approves the offer. Until then nothing shows it and the contact chat does not offer it |
| /dokydoc redirects permanently (301) to dokydoc.com once its own home page is live | `lib/dokydoc-home.json` (`"live": false` until v1.8's final push); `next.config.js`; `lib/site.ts` `productPage` |

## Company

| Claim | Source |
|---|---|
| Deyora Intelligence Private Limited; CIN U62010RJ2026PTC114088; incorporated 8 May 2026; ROC Jaipur; registered office B-195, Shastri Nagar, Bhilwara, Rajasthan 311001 | Certificate of Incorporation and MCA master data (`deyora-hq/company/records`); `company/STATUS_AND_OPEN_ITEMS.md` §1 |
| DokyDoc is a product of the company | CO-01 Company Profile |
| Grievance and query contact: Muskan Shah | TP-00-01 W-77, W-79 |
| "We reply within one business day (Monday to Friday, India time)" | TP-00-01 W-76: a sales-response promise the founder holds |
| "A young company"; "you talk to the founder" | CO-01 §3–4: pre-revenue, one person does the work |
| Vision, mission and promise of Deyora and of DokyDoc (`lib/site.ts`: `deyora`, `dokydocStatement`) | Statements of intent, not facts. Approved by the founder on 1 Oct 2026 "as of now" and recorded in `deyora-hq/team/DECISIONS.md` |
| The founder's photo is shown only once set in `lib/site.ts`; until then, initials. No LinkedIn link for the founder or the company, and no telephone number (founder's decisions of 1 Oct 2026, confirmed for the telephone number on 11 Oct 2026, board answer a48, knowing that rule 26 of the Companies (Incorporation) Rules, 2014 lists one; `deyora-hq/team/DECISIONS.md`) | `lib/site.ts` (`founderPhoto`, `founderLinkedIn`, `companyLinkedIn`, `phone` all null) |
| "The people behind Deyora" on /about, after the founder's note: Divyansh Shah, Director, and Arpit Agarwal, Shareholder, each with a link to their LinkedIn page; the same names, roles and links in the Organization structured data (`app/layout.tsx`, `member`) and in /llms.txt | Trust Pack CO-01 section 4 (the roles, word for word) and `deyora-hq/company/STATUS_AND_OPEN_ITEMS.md` section 1 (the directors and shareholders); the LinkedIn addresses as the founder gave them on 14 Oct 2026 (board task t212). Nothing is copied from LinkedIn. The founder confirms on the board that each person agreed to be on the website before it goes live |
| Initials until a person's photo is set, and a one-line bio only once set (`lib/site.ts` `people`: `photo` and `line` both null today) | Board task t212: each photo and each line comes from the founder, approved by the person it describes |
| No share percentages, DINs or continuity roles for anyone on the site | The founder's rule for t212: they stay in the Trust Pack (CO-01 section 4), shared on request |

## Proof points on the home page

| Claim | Source |
|---|---|
| "About 9,000 automated tests run before every DokyDoc release. If one fails, the release stops." | dokydoc main `321fd50`: 8,956 `def test_` functions under `backend/tests`, 44 slow marks excluded (parametrised cases add more runs); `.github/workflows/deploy.yml:104-106` runs `pytest tests/ -m "not slow"` with no `|| echo` (OPS-8) and the deploy job `needs: [test-backend, test-frontend, build, preflight-env]` (:283) |
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
| No plans and no subscription; "The wallet does not charge by the number of users, and there are no tiers" (16 Oct 2026: was "no seats". A company has a user cap, `models/tenant.py` `max_users`, 10 by default, and an Enterprise agreement can license seats, `licensed_seats`, so the site no longer says "no seats") | Decisions PRICING-1 and COMMERCE-1; the wallet charges per operation (`frontend/app/billing/page.tsx:1474-1478`: "One product, no plans and no subscription") |
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

## DokyDoc for orders, invoices, payments and stock (/dokydoc#orders)

The rows of "The story" above hold. These add the rest of /dokydoc#orders. (In the code this part of DokyDoc is called DokyBrain; no public page says so.)

| Claim | Source |
|---|---|
| Part of DokyDoc, not a separate product; no separate sign-up | `dokydoc/docs/DOKYBRAIN_DESIGN.md` §0 D1, D2; it runs in DokyDoc's app, behind DokyDoc's sign-in |
| It raises findings and prepares options; it changes nothing in your ERP; a person decides and acts | `brain/prepared.py`; `core/third_party_writes.py` (no write back to an ERP); §0 D11, D12. The site does not say "never sends", because DokyDoc's merged pull-request comment is on by default (DokyDoc rows) |
| Every figure is a count, with what it is counted out of ("6 of 47 open commitments") | Brain Health, "Every figure is a count, with what it is counted out of" (`frontend/lib/brain-health-copy.ts:113-114`); design Rule 6 |
| Brain Health shows whether you can trust what DokyDoc says today; the weekly brief shows on screen what changed, what crossed the line and what it could not see | `frontend/lib/brain-health-copy.ts:113-114`; `frontend/lib/brief-copy.ts:30-31` |
| Reading a company's own ERP exports and documents into it is coming, with no date | The story's rows above |

## Personas (`lib/personas.ts`)

The home page speaks to whoever the visitor says they are. Every line in the
five personas uses only claims already in this register: DokyDoc's checks,
the reverse check, code hosts and pay-as-you-go wallet (Live), and the checks on orders and invoices
(Live inside DokyDoc, on the demo company today, on a company's own records
coming: the story's rows). "Start on DokyDoc" goes to https://dokydoc.com. The
investor persona repeats the test-count claim above.

## Illustrations

The "Needs your decision" card, the coverage report (DokyDoc), the "Needs
you today" card (the home page's and /dokydoc's hero) and the snag-list
walk-through (DokyDoc) are drawn in code. Their names and numbers are
invented, and each is captioned as an illustration. The "Needs you today"
card follows Rule 6 ("3 of 48 open orders", never "at risk" as a status;
`DOKYBRAIN_DESIGN.md` §6.5), and its three items are three of the checks that
passed their exams: supplier slippage, order to cash and payment at risk. The walk-through uses the
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
