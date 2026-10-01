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
| Vision, mission and promise of Deyora and of DokyDoc (`lib/site.ts`: `deyora`, `dokydocStatement`) | Statements of intent, not facts. Proposed 1 Oct 2026 for the founder's approval; once approved they are recorded in `deyora-hq/team/DECISIONS.md` |
| The founder's photo and LinkedIn are shown only once set in `lib/site.ts` | Nothing is shown until the founder supplies them |

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
| Hosted on a server in Germany; TLS 1.2 or 1.3 to DokyDoc | SEC-03C §1; SEC-02 CRY-02 |
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
| Hosted in Germany; AI outside India; no India hosting | SEC-03C §5; AI-01 §9 |
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
| Notice at collection and the privacy notice: purpose, Netlify (United States), deletion after 365 days and two years, rights, grievance officer, 30 days | TP-00-01 W-77; IT (SPDI) Rules 2011 rules 4 and 5(9); DPDP Act s.5 and Rules rule 3 when in force |
| The site sets no cookies and runs no analytics | This repository: no analytics, no third-party scripts; fonts self-hosted by `next/font` |
| What the site keeps in the browser (persona and, after sending, first name and company in localStorage; this visit's pages, referring host and UTM tags in sessionStorage) and that none of it leaves the browser unless the form is sent | `components/Visitor.tsx`; the form payload is built in `components/Conversation.tsx` `onSubmit` |
| Name and company are suggested from the email address in the browser, nothing is looked up | `lib/identity.ts` (no network call) |
| The form sends the two answers, the persona, this visit's pages, the referring host and UTM tags, and says so before sending | `components/Conversation.tsx`; `public/__forms.html` declares the same fields |
| Links into DokyDoc carry `utm_source`, `utm_medium` and the persona as `utm_content`, never an email or a name | `lib/site.ts` `dokydocLink` |
