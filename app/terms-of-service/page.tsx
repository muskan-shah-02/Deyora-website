import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Terms of Service — Deyora Intelligence",
  description:
    "Terms of Service for DokyDoc and Deyora Intelligence — account, ownership, AI disclaimers, billing, liability, and governing law.",
};

const CONTACT_EMAIL = "muskan@deyoraintelligence.com";

export default function TermsOfServicePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 border-b border-subtle">
        <div className="container-deyora">
          <Reveal>
            <SectionLabel>Legal</SectionLabel>
          </Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl lg:text-[88px] text-white mb-8 max-w-4xl">
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 max-w-3xl">
              <Meta label="Entity" value="Deyora Intelligence" />
              <Meta label="Effective" value="8 June 2026" />
              <Meta label="Version" value="1.0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-bg-primary py-20 md:py-28">
        <div className="container-deyora">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="label-mono mb-6">On this page</div>
                <nav className="flex flex-col gap-3">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="font-sans font-light text-[13px] text-ink-secondary hover:text-white transition-colors"
                    >
                      <span className="font-mono text-[11px] text-ink-tertiary mr-2">
                        {s.num}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className="max-w-3xl">
              <Reveal>
                <p className="font-sans text-[15px] leading-relaxed text-ink-secondary mb-12">
                  <span className="font-medium text-white">Entity:</span>{" "}
                  Deyora Intelligence (&ldquo;Company&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;our&rdquo;, &ldquo;us&rdquo;)
                  <br />
                  <span className="font-medium text-white">Platform:</span>{" "}
                  DokyDoc and deyoraintelligence.com (the &ldquo;Services&rdquo;)
                </p>
              </Reveal>

              <Section id="acceptance" num="01" title="Acceptance of these Terms">
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) form a binding
                  agreement between Deyora Intelligence and you (or the
                  organisation you represent). By creating an account,
                  accessing the Services, or clicking &ldquo;I agree&rdquo; on
                  any sign-up page, you accept these Terms and our Privacy
                  Policy and Refund Policy.
                </p>
                <p>
                  If you are accepting on behalf of an organisation, you
                  represent that you have authority to bind that organisation
                  to these Terms. References to &ldquo;you&rdquo; include your
                  organisation where applicable.
                </p>
              </Section>

              <Section id="definitions" num="02" title="Definitions">
                <ul>
                  <li>
                    <strong>&ldquo;Services&rdquo;</strong> — the DokyDoc
                    platform and any features made available at
                    deyoraintelligence.com or app.dokydoc.com.
                  </li>
                  <li>
                    <strong>&ldquo;Customer Content&rdquo;</strong> — all
                    documents, source code, repositories, integration data,
                    chat inputs, and any other content you upload, connect, or
                    generate through the Services. Includes derivative outputs
                    such as analyses, knowledge graphs, and validation results
                    that contain or are derived from your inputs.
                  </li>
                  <li>
                    <strong>&ldquo;Subscription&rdquo;</strong> — your paid
                    access plan (monthly, annual, or enterprise).
                  </li>
                  <li>
                    <strong>&ldquo;Wallet&rdquo;</strong> — your prepaid
                    balance used to pay for AI usage charges.
                  </li>
                  <li>
                    <strong>&ldquo;Affiliate&rdquo;</strong> — any entity that
                    controls, is controlled by, or is under common control
                    with a party.
                  </li>
                </ul>
              </Section>

              <Section id="registration" num="03" title="Account Registration">
                <p>
                  You must register an account to access most of the Services.
                  You agree to provide accurate, current information and to
                  keep it updated. You are responsible for safeguarding your
                  credentials and for all activity under your account. You
                  must immediately notify us at <EmailLink /> of any
                  unauthorised access or suspected breach of your account.
                </p>
              </Section>

              <Section
                id="what-we-provide"
                num="04"
                title="The Services — What We Provide"
              >
                <p>DokyDoc provides:</p>
                <ul>
                  <li>Automated analysis of documents you upload.</li>
                  <li>Automated analysis of code you upload or connect.</li>
                  <li>
                    A private per-project knowledge graph linking your
                    documents and code (the &ldquo;Brain&rdquo;).
                  </li>
                  <li>
                    A validation engine that proposes and tracks coverage
                    between document content and code implementation.
                  </li>
                  <li>
                    An AI chat assistant (AskyDoc) scoped to your account,
                    projects, billing, and our product documentation.
                  </li>
                </ul>
                <p>
                  We may modify, add, or discontinue features with reasonable
                  notice. Material reductions in functionality will be notified
                  at least 30 days in advance.
                </p>
              </Section>

              <Section id="ownership" num="05" title="Ownership and Licences">
                <SubSection title="5.1 Your ownership of Customer Content">
                  <p>
                    You retain all right, title, and interest in and to
                    Customer Content, including all intellectual-property
                    rights. We do not claim ownership of your documents, your
                    code, or anything derived from them by the Services.
                  </p>
                </SubSection>
                <SubSection title="5.2 Licence you grant us">
                  <p>
                    You grant Deyora Intelligence a worldwide, non-exclusive,
                    royalty-free, fully-paid licence to host, store, transmit,
                    display, process, and create derivative works of Customer
                    Content <strong>solely to the extent necessary to provide
                    the Services to you</strong>. This licence is automatically
                    terminated when you delete the relevant Customer Content
                    from your account or when these Terms are terminated,
                    except to the extent retention is required by law (see
                    §11).
                  </p>
                </SubSection>
                <SubSection title="5.3 No training on Customer Content">
                  <p>
                    We do not use Customer Content to train, fine-tune, or
                    improve any artificial-intelligence model — neither our
                    own nor any third-party model. The full statement is in §6
                    of our Privacy Policy.
                  </p>
                </SubSection>
                <SubSection title="5.4 Our IP">
                  <p>
                    The Services, including the DokyDoc software, our prompts,
                    algorithms, documentation, trademarks, and any
                    improvements to them, remain our exclusive property. These
                    Terms grant you a limited, non-exclusive, non-transferable,
                    revocable licence to access and use the Services solely as
                    authorised.
                  </p>
                </SubSection>
                <SubSection title="5.5 Feedback">
                  <p>
                    If you submit feedback, suggestions, or feature requests,
                    you grant us a perpetual, irrevocable, royalty-free
                    licence to use that feedback for any purpose without
                    obligation to you.
                  </p>
                </SubSection>
              </Section>

              <Section id="acceptable-use" num="06" title="Acceptable Use">
                <p>
                  You will not, and will not permit any user under your
                  account to:
                </p>
                <ul>
                  <li>
                    Use the Services in violation of any law, regulation, or
                    third-party right.
                  </li>
                  <li>
                    Upload content you do not have the right to process.
                  </li>
                  <li>
                    Upload content containing malicious code (viruses, worms,
                    ransomware, etc.).
                  </li>
                  <li>
                    Reverse engineer, decompile, or attempt to extract our
                    source code, models, or prompts.
                  </li>
                  <li>
                    Use the Services to develop a competing product, or to
                    benchmark the Services for publication without our prior
                    written consent.
                  </li>
                  <li>
                    Resell, sub-license, or commercially redistribute access to
                    the Services without a written reseller agreement.
                  </li>
                  <li>
                    Attempt to circumvent any access controls or rate limits.
                  </li>
                  <li>
                    Use automated means to access the Services beyond the rate
                    limits published in our documentation.
                  </li>
                  <li>
                    Upload content that infringes others&apos;
                    intellectual-property, privacy, or other rights.
                  </li>
                </ul>
                <p>
                  We may suspend or terminate access to the Services in the
                  event of a material breach of this section.
                </p>
              </Section>

              <Section
                id="ai-disclaimers"
                num="07"
                title="AI Outputs — Important Disclaimers"
              >
                <p>
                  The Services use large language models and other
                  artificial-intelligence systems. AI outputs are probabilistic
                  and may contain errors, omissions, or material inaccuracies.
                  You acknowledge and agree that:
                </p>
                <ul>
                  <li>
                    AI outputs are advisory and must be reviewed by a qualified
                    human before being used for any decision with legal,
                    financial, safety, or regulatory consequences.
                  </li>
                  <li>
                    Suggested document-to-code mappings, coverage scores,
                    validation findings, and chat responses are not guarantees
                    and must be validated by you.
                  </li>
                  <li>
                    We do not warrant that any AI output is fit for any
                    particular purpose, including audit, certification, or
                    regulatory submission, unless we have expressly agreed so
                    in writing.
                  </li>
                </ul>
                <p>
                  You are responsible for your decisions and for compliance
                  with any laws, regulations, or industry standards that apply
                  to your use of AI outputs.
                </p>
              </Section>

              <Section id="fees" num="08" title="Fees, Billing, and Taxes">
                <SubSection title="8.1 Subscription fees">
                  <p>
                    Subscription fees are charged in advance per the plan you
                    select. They are non-refundable except as described in our{" "}
                    <Link href="/refund-policy" className="text-accent-blue-soft hover:text-white underline underline-offset-4">
                      Refund Policy
                    </Link>
                    .
                  </p>
                </SubSection>
                <SubSection title="8.2 Wallet and AI usage">
                  <p>
                    AI usage charges are deducted from your prepaid Wallet as
                    work is performed. The current rate card is published at{" "}
                    <a
                      href="https://deyoraintelligence.com/pricing"
                      className="text-accent-blue-soft hover:text-white underline underline-offset-4"
                    >
                      deyoraintelligence.com/pricing
                    </a>
                    . We may change rates with at least 30 days notice;
                    existing Wallet balance is honoured at the original rate
                    for 90 days.
                  </p>
                </SubSection>
                <SubSection title="8.3 Auto top-up">
                  <p>
                    If you enable auto-top-up, you authorise us to charge your
                    saved payment method when your Wallet balance falls below
                    the threshold you set. You may disable auto-top-up at any
                    time from account settings.
                  </p>
                </SubSection>
                <SubSection title="8.4 Taxes">
                  <p>
                    Fees are exclusive of GST and any other applicable taxes,
                    which are charged additionally where required.
                  </p>
                </SubSection>
                <SubSection title="8.5 Invoicing">
                  <p>
                    GST-compliant tax invoices are issued automatically and
                    available from your account.
                  </p>
                </SubSection>
                <SubSection title="8.6 Late payments">
                  <p>
                    For invoiced enterprise customers, undisputed amounts not
                    paid by the due date may accrue interest at 1.5% per month
                    or the maximum rate permitted by law, whichever is lower,
                    and may result in suspension of Services.
                  </p>
                </SubSection>
              </Section>

              <Section id="term-termination" num="09" title="Term and Termination">
                <SubSection title="9.1 Term">
                  <p>
                    These Terms remain in force while you have an active
                    account or subscription.
                  </p>
                </SubSection>
                <SubSection title="9.2 Termination by you">
                  <p>
                    You may terminate by cancelling your subscription per the
                    Refund Policy and deleting your account. Refunds are
                    governed by the Refund Policy.
                  </p>
                </SubSection>
                <SubSection title="9.3 Termination by us">
                  <p>We may suspend or terminate your access if:</p>
                  <ul>
                    <li>
                      You materially breach these Terms and fail to cure the
                      breach within 14 days of written notice (or immediately,
                      in cases of egregious abuse, security risk, or violation
                      of §6).
                    </li>
                    <li>
                      You fail to pay undisputed amounts when due, and the
                      failure continues for 30 days after notice.
                    </li>
                    <li>We are required to do so by law.</li>
                  </ul>
                </SubSection>
                <SubSection title="9.4 Effect of termination">
                  <p>On termination:</p>
                  <ul>
                    <li>Your right to access the Services ends.</li>
                    <li>
                      You have <strong>30 days</strong> to export Customer
                      Content from the account.
                    </li>
                    <li>
                      After 30 days, Customer Content is deleted per our
                      Privacy Policy retention schedule.
                    </li>
                    <li>
                      Sections of these Terms that by their nature should
                      survive (Ownership, IP, Disclaimers, Limitation of
                      Liability, Indemnification, Confidentiality, Governing
                      Law) survive termination.
                    </li>
                  </ul>
                </SubSection>
              </Section>

              <Section id="confidentiality" num="10" title="Confidentiality">
                <p>
                  Each party may receive confidential information of the other
                  in the course of using or providing the Services. Each party
                  agrees to:
                </p>
                <ul>
                  <li>
                    Use the other party&apos;s confidential information solely
                    to perform or exercise rights under these Terms.
                  </li>
                  <li>
                    Protect such information with at least the same degree of
                    care it uses for its own confidential information (and no
                    less than reasonable care).
                  </li>
                  <li>
                    Not disclose such information to third parties except to
                    its employees, advisors, and sub-processors who have a
                    need to know and are bound by confidentiality obligations.
                  </li>
                </ul>
                <p>
                  Confidential information does not include information that
                  is publicly available, independently developed, or rightfully
                  received from a third party without confidentiality
                  obligations.
                </p>
                <p>
                  Customer Content is treated as your confidential information.
                </p>
              </Section>

              <Section id="data-protection" num="11" title="Data Protection">
                <p>
                  The processing of personal data and Customer Content is
                  governed by our Privacy Policy at{" "}
                  <a
                    href="https://deyoraintelligence.com/privacy-policy"
                    className="text-accent-blue-soft hover:text-white underline underline-offset-4"
                  >
                    deyoraintelligence.com/privacy-policy
                  </a>
                  , which is incorporated by reference. For enterprise
                  customers, a separate Data Processing Agreement (DPA) is
                  available on request and prevails over the Privacy Policy
                  where it conflicts.
                </p>
              </Section>

              <Section
                id="third-parties"
                num="12"
                title="Third-Party Services and Integrations"
              >
                <p>
                  The Services may integrate with third-party services
                  (Google, GitHub, Jira, Confluence, Slack, etc.). Your use of
                  those services is governed by their respective terms. We are
                  not responsible for third-party services or their
                  availability.
                </p>
              </Section>

              <Section
                id="warranties"
                num="13"
                title="Warranties and Disclaimers"
              >
                <p>We warrant that:</p>
                <ul>
                  <li>
                    We have the right to grant the licences described in §5.4.
                  </li>
                  <li>
                    We will perform the Services with reasonable skill and
                    care.
                  </li>
                </ul>
                <p>
                  EXCEPT AS EXPRESSLY SET OUT ABOVE, THE SERVICES ARE PROVIDED{" "}
                  <strong>&ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;</strong>.
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                  OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL
                  BE UNINTERRUPTED, ERROR-FREE, OR THAT AI OUTPUTS WILL BE
                  COMPLETE, ACCURATE, OR FIT FOR ANY PARTICULAR PURPOSE.
                </p>
              </Section>

              <Section
                id="limitation"
                num="14"
                title="Limitation of Liability"
              >
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul>
                  <li>
                    NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS,
                    REVENUE, DATA, OR GOODWILL, EVEN IF ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES.
                  </li>
                  <li>
                    OUR AGGREGATE LIABILITY UNDER THESE TERMS WILL NOT EXCEED
                    THE TOTAL FEES YOU PAID TO US IN THE TWELVE (12) MONTHS
                    PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR INR
                    50,000, WHICHEVER IS GREATER.
                  </li>
                </ul>
                <p>The limitations above do not apply to:</p>
                <ul>
                  <li>Your obligation to pay fees.</li>
                  <li>Either party&apos;s indemnification obligations.</li>
                  <li>
                    Damages resulting from fraud, gross negligence, or wilful
                    misconduct.
                  </li>
                  <li>Liability that cannot be limited under applicable law.</li>
                </ul>
              </Section>

              <Section id="indemnification" num="15" title="Indemnification">
                <p>
                  You will defend, indemnify, and hold harmless Deyora
                  Intelligence from and against any third-party claim arising
                  out of:
                </p>
                <ul>
                  <li>Your breach of these Terms.</li>
                  <li>
                    Your Customer Content, including any claim that it
                    infringes a third party&apos;s rights.
                  </li>
                  <li>Your use of the Services in violation of law.</li>
                </ul>
                <p>
                  We will defend, indemnify, and hold harmless you from and
                  against any third-party claim that the Services as provided
                  by us infringe that third party&apos;s intellectual-property
                  rights, provided you give us prompt notice and reasonable
                  cooperation, and provided the claim does not arise from
                  Customer Content, modifications you made, or use of the
                  Services in combination with anything we did not provide.
                </p>
              </Section>

              <Section id="force-majeure" num="16" title="Force Majeure">
                <p>
                  Neither party is liable for any failure or delay caused by
                  an event beyond its reasonable control, including natural
                  disasters, war, terrorism, riots, embargoes, acts of civil
                  or military authorities, fire, floods, accidents, pandemics,
                  strikes, failures of public infrastructure, or failures of
                  third-party cloud or LLM providers.
                </p>
              </Section>

              <Section
                id="governing-law"
                num="17"
                title="Governing Law and Dispute Resolution"
              >
                <p>
                  These Terms are governed by the laws of India. The parties
                  will first attempt in good faith to resolve any dispute
                  through discussion. If not resolved within 30 days, the
                  dispute is subject to the exclusive jurisdiction of the
                  courts of <strong>Hyderabad, Telangana</strong>.
                </p>
              </Section>

              <Section
                id="modifications"
                num="18"
                title="Modifications to these Terms"
              >
                <p>
                  We may modify these Terms from time to time. Material
                  changes will be notified to active customers by email at
                  least <strong>30 days</strong> before they take effect.
                  Continued use of the Services after the effective date
                  constitutes acceptance. If you do not accept the
                  modifications, you may terminate before they take effect and
                  receive a pro-rata refund of any prepaid fees for the unused
                  portion of the term.
                </p>
              </Section>

              <Section id="notices" num="19" title="Notices">
                <p>
                  Notices to us must be sent to <EmailLink /> and a copy by
                  registered post to our registered office. Notices to you may
                  be sent to the email address on your account.
                </p>
              </Section>

              <Section id="assignment" num="20" title="Assignment">
                <p>
                  You may not assign these Terms without our prior written
                  consent. We may assign these Terms to an Affiliate or in
                  connection with a merger, acquisition, or sale of
                  substantially all of our assets, on notice to you.
                </p>
              </Section>

              <Section id="severability" num="21" title="Severability">
                <p>
                  If any provision of these Terms is held unenforceable, the
                  remaining provisions will continue in full force.
                </p>
              </Section>

              <Section id="no-waiver" num="22" title="No Waiver">
                <p>
                  No failure or delay in exercising any right under these
                  Terms operates as a waiver of that right.
                </p>
              </Section>

              <Section id="entire-agreement" num="23" title="Entire Agreement">
                <p>
                  These Terms, together with the Privacy Policy, Refund
                  Policy, and any enterprise order form or DPA executed
                  between us, constitute the entire agreement between the
                  parties regarding the Services and supersede all prior
                  agreements and understandings.
                </p>
              </Section>

              <Section id="contact" num="24" title="Contact">
                <p>
                  <EmailLink />
                </p>
              </Section>

              <div className="mt-20 border-t border-subtle pt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-tertiary">
                  Confidential &amp; Proprietary · Deyora Intelligence © 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-secondary border-t border-subtle py-24 text-center">
        <div className="container-deyora">
          <Reveal>
            <h2 className="display text-3xl md:text-5xl text-white mb-6">
              Questions about these terms?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
                Email Us
              </a>
              <Link href="/contact" className="btn-secondary">
                Other Contact Options →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── helpers ───────────────────────── */

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="label-mono mb-2">{label}</div>
      <div className="font-sans text-white text-[15px]">{value}</div>
    </div>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section id={id} className="mb-16 scroll-mt-24">
        <div className="font-mono text-[11px] tracking-[0.14em] text-accent-blue-soft mb-3">
          {num}
        </div>
        <h2 className="display text-2xl md:text-3xl text-white mb-6 leading-tight">
          {title}
        </h2>
        <div className="prose-legal">{children}</div>
      </section>
    </Reveal>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6 border-l border-subtle pl-6">
      <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-white mb-3">
        {title}
      </h3>
      <div className="prose-legal">{children}</div>
    </div>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="text-accent-blue-soft hover:text-white underline underline-offset-4 break-words"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

/* ───────────────────────── TOC data ───────────────────────── */

const sections = [
  { num: "01", id: "acceptance", title: "Acceptance" },
  { num: "02", id: "definitions", title: "Definitions" },
  { num: "03", id: "registration", title: "Registration" },
  { num: "04", id: "what-we-provide", title: "What We Provide" },
  { num: "05", id: "ownership", title: "Ownership & Licences" },
  { num: "06", id: "acceptable-use", title: "Acceptable Use" },
  { num: "07", id: "ai-disclaimers", title: "AI Disclaimers" },
  { num: "08", id: "fees", title: "Fees & Billing" },
  { num: "09", id: "term-termination", title: "Term & Termination" },
  { num: "10", id: "confidentiality", title: "Confidentiality" },
  { num: "11", id: "data-protection", title: "Data Protection" },
  { num: "12", id: "third-parties", title: "Third-Party Services" },
  { num: "13", id: "warranties", title: "Warranties" },
  { num: "14", id: "limitation", title: "Limitation of Liability" },
  { num: "15", id: "indemnification", title: "Indemnification" },
  { num: "16", id: "force-majeure", title: "Force Majeure" },
  { num: "17", id: "governing-law", title: "Governing Law" },
  { num: "18", id: "modifications", title: "Modifications" },
  { num: "19", id: "notices", title: "Notices" },
  { num: "20", id: "assignment", title: "Assignment" },
  { num: "21", id: "severability", title: "Severability" },
  { num: "22", id: "no-waiver", title: "No Waiver" },
  { num: "23", id: "entire-agreement", title: "Entire Agreement" },
  { num: "24", id: "contact", title: "Contact" },
];
