import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Refund & Cancellation Policy — Deyora Intelligence",
  description:
    "Refund and cancellation terms for DokyDoc and other Deyora Intelligence services — subscriptions, AI usage charges, wallet top-ups, enterprise contracts.",
};

const CONTACT_EMAIL = "muskan@deyoraintelligence.com";

export default function RefundPolicyPage() {
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
              Refund & Cancellation Policy
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

              {/* 1. Scope */}
              <Section id="scope" num="01" title="Scope">
                <p>
                  This Policy applies to all paid Services offered by Deyora
                  Intelligence, including subscriptions to the DokyDoc
                  platform, top-ups to your usage wallet, and any enterprise
                  contracts entered into through our standard order form. It
                  does not apply to bespoke professional-services engagements,
                  which are governed by their own statement of work.
                </p>
                <p>
                  By making a purchase you agree to this Policy. This Policy is
                  to be read together with our Terms of Service and Privacy
                  Policy.
                </p>
              </Section>

              {/* 2. Billing model */}
              <Section
                id="billing-model"
                num="02"
                title="The DokyDoc Billing Model — Plain English"
              >
                <p>So that the rules below make sense, here is how billing works:</p>
                <ul>
                  <li>
                    <strong>Subscription fees</strong> are the recurring
                    charges for access to the DokyDoc platform (per user per
                    month, or annually). They are paid in advance.
                  </li>
                  <li>
                    <strong>AI usage charges</strong> are pay-per-use charges
                    for analysis, validation, and AskyDoc requests. They are
                    deducted from your usage wallet when work is performed.
                    You top up the wallet whenever you choose; we never bill
                    you by surprise.
                  </li>
                  <li>
                    <strong>Enterprise plans</strong> are negotiated separately
                    and follow the payment terms set out in your enterprise
                    order form.
                  </li>
                </ul>
                <p>
                  Different rules apply to each — the sections below address
                  them in turn.
                </p>
              </Section>

              {/* 3. Cancellation */}
              <Section
                id="cancellation"
                num="03"
                title="Cancellation of Subscriptions"
              >
                <p>
                  You may cancel your subscription at any time from your
                  account settings or by writing to{" "}
                  <EmailLink />.
                </p>
                <SubSection title="3.1 Monthly subscriptions">
                  <p>
                    Cancellation takes effect at the end of the current
                    billing cycle. You retain access until that date. No
                    partial-month refunds are issued.
                  </p>
                </SubSection>
                <SubSection title="3.2 Annual subscriptions">
                  <p>
                    You are entitled to a full refund of the annual
                    subscription fee if you cancel{" "}
                    <strong>within 14 days</strong> of the original purchase,
                    less any AI-usage charges already consumed from the wallet
                    (which are non-refundable per §4 below).
                  </p>
                  <p>
                    After 14 days, the subscription remains active until the
                    end of the prepaid term. No refund of the annual fee is
                    issued after the cooling-off period, except where required
                    by applicable law or expressly provided in an enterprise
                    order form.
                  </p>
                </SubSection>
                <SubSection title="3.3 Enterprise contracts">
                  <p>
                    Termination and refund terms are as set out in your
                    enterprise order form. Where the order form is silent,
                    this Policy applies.
                  </p>
                </SubSection>
              </Section>

              {/* 4. AI Usage */}
              <Section
                id="ai-usage"
                num="04"
                title="AI Usage Charges (Wallet Deductions)"
              >
                <p>
                  AI usage charges are deducted from your wallet at the time
                  the work is performed. The compute and third-party LLM costs
                  are incurred at that moment and are not recoverable by us.
                </p>
                <p>
                  AI usage charges are <strong>non-refundable</strong>, with
                  the following exceptions:
                </p>
                <ul>
                  <li>
                    Where analysis fails to produce results due to a
                    verifiable system error on our side. In that case the
                    charge is auto-refunded to your wallet within 24 hours.
                  </li>
                  <li>
                    Where the document was classified by our system as outside
                    the scope DokyDoc is designed for (e.g. a binary file or
                    an empty document), and you were charged in error.
                    Auto-refund within 24 hours.
                  </li>
                  <li>
                    Where you can demonstrate that the output was materially
                    incorrect due to a system fault (not due to limitations of
                    the underlying AI). Reviewed case-by-case.
                  </li>
                </ul>
              </Section>

              {/* 5. Wallet refunds */}
              <Section id="wallet-refunds" num="05" title="Wallet Top-Up Refunds">
                <p>
                  Unused wallet balance is refundable on written request to{" "}
                  <EmailLink /> within <strong>30 days</strong> of the top-up,
                  subject to:
                </p>
                <ul>
                  <li>
                    The amount actually consumed by AI usage is not
                    refundable.
                  </li>
                  <li>
                    The payment-gateway processing fee paid by us on the
                    original top-up (typically 1.5%–2.5%) is deducted from the
                    refund.
                  </li>
                  <li>Refunds are returned to the original payment method.</li>
                </ul>
                <p>
                  After 30 days, unused wallet balance remains in your account
                  and may be used at any time during the life of your
                  subscription.
                </p>
              </Section>

              {/* 6. Promotional credits */}
              <Section
                id="promo-credits"
                num="06"
                title="Free Trial / Promotional Credits"
              >
                <p>
                  Free-trial credits, promotional credits, and referral
                  bonuses (&ldquo;Promotional Balance&rdquo;) are not refundable
                  in cash under any circumstances. Promotional Balance expires
                  per the terms stated at the time it was granted (default: 90
                  days).
                </p>
              </Section>

              {/* 7. SLA */}
              <Section
                id="sla"
                num="07"
                title="Service-Interruption Credits (SLA)"
              >
                <p>
                  If the DokyDoc platform is unavailable for{" "}
                  <strong>more than 24 consecutive hours</strong> within a
                  calendar month due to infrastructure under our control, you
                  are eligible for a service credit equal to one full
                  day&apos;s pro-rata subscription fee for each 24-hour period
                  of unavailability, capped at 30 days&apos; fees in any
                  single month.
                </p>
                <p>
                  Service credits are issued to your wallet on request, within
                  30 days of the incident. To request a credit, write to{" "}
                  <EmailLink /> with the dates and times of the unavailability
                  you experienced.
                </p>
                <p>
                  The following are <strong>not</strong> counted as
                  unavailability:
                </p>
                <ul>
                  <li>
                    Scheduled maintenance announced at least 48 hours in
                    advance
                  </li>
                  <li>
                    Outages of third-party services (e.g. Google Cloud,
                    Razorpay) that affect DokyDoc but are outside our control
                  </li>
                  <li>
                    Failures caused by your own integrations or
                    misconfiguration
                  </li>
                </ul>
              </Section>

              {/* 8. How to request */}
              <Section
                id="how-to-request"
                num="08"
                title="How to Request a Refund"
              >
                <p>
                  Email <EmailLink /> with:
                </p>
                <ul>
                  <li>Your registered account email</li>
                  <li>The transaction ID or invoice number</li>
                  <li>The reason for the refund request</li>
                  <li>
                    Any supporting evidence (error screenshots, dates of
                    unavailability, etc.)
                  </li>
                </ul>
                <p>
                  We acknowledge requests within{" "}
                  <strong>2 business days</strong> and respond substantively
                  within <strong>7 business days</strong>. Approved refunds are
                  credited to the original payment method within{" "}
                  <strong>7 – 10 business days</strong> after approval, subject
                  to payment-gateway settlement times.
                </p>
              </Section>

              {/* 9. Chargebacks */}
              <Section
                id="chargebacks"
                num="09"
                title="Disputed Charges and Chargebacks"
              >
                <p>
                  We ask that you contact us before initiating a chargeback
                  through your bank or card issuer. We will work with you in
                  good faith to resolve any billing dispute. Initiating a
                  chargeback without first contacting us may result in
                  suspension of your account pending resolution.
                </p>
              </Section>

              {/* 10. Taxes */}
              <Section id="taxes" num="10" title="Taxes">
                <p>
                  Refunds include any applicable GST that was charged on the
                  original invoice, refunded proportionally to the value
                  refunded.
                </p>
              </Section>

              {/* 11. Changes */}
              <Section id="changes" num="11" title="Changes to this Policy">
                <p>
                  We may revise this Policy from time to time. Material
                  changes will be notified to active subscribers by email at
                  least <strong>30 days</strong> in advance. The current
                  version is always available at{" "}
                  <a
                    href="https://deyoraintelligence.com/refund-policy"
                    className="text-accent-blue-soft hover:text-white underline underline-offset-4"
                  >
                    deyoraintelligence.com/refund-policy
                  </a>
                  .
                </p>
              </Section>

              {/* 12. Contact */}
              <Section id="contact" num="12" title="Contact">
                <p>
                  Refund, cancellation, and billing queries: <EmailLink />
                </p>
                <p>
                  For grievance redressal, see §17 of our Privacy Policy.
                </p>
              </Section>

              {/* 13. Governing law */}
              <Section id="governing-law" num="13" title="Governing Law">
                <p>
                  This Policy is governed by the laws of India. Disputes are
                  subject to the exclusive jurisdiction of the courts of
                  Hyderabad, Telangana.
                </p>
              </Section>

              {/* Footer note */}
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
              Questions about billing or refunds?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-primary"
              >
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
  { num: "01", id: "scope", title: "Scope" },
  { num: "02", id: "billing-model", title: "Billing Model" },
  { num: "03", id: "cancellation", title: "Cancellation" },
  { num: "04", id: "ai-usage", title: "AI Usage Charges" },
  { num: "05", id: "wallet-refunds", title: "Wallet Top-Up Refunds" },
  { num: "06", id: "promo-credits", title: "Promotional Credits" },
  { num: "07", id: "sla", title: "Service Credits (SLA)" },
  { num: "08", id: "how-to-request", title: "How to Request" },
  { num: "09", id: "chargebacks", title: "Chargebacks" },
  { num: "10", id: "taxes", title: "Taxes" },
  { num: "11", id: "changes", title: "Changes" },
  { num: "12", id: "contact", title: "Contact" },
  { num: "13", id: "governing-law", title: "Governing Law" },
];
