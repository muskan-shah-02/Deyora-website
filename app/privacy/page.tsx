import Link from "next/link";
import type { ReactNode } from "react";
import { company, DOKYDOC } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { Eyebrow } from "@/components/ui";
import { ForgetMe } from "@/components/Visitor";

export const metadata = pageMeta({
  title: "Website privacy notice",
  description:
    "How Deyora Intelligence handles personal data from this website, its contact form, emails and the people it contacts for business.",
  path: "/privacy",
});

/**
 * Version 2.0 is the text of deyora-hq handoffs/2026-10-09_t157_policies_v2/out/D6_website_privacy_notice.md,
 * approved by the founder. EFFECTIVE is the day this version goes live on main: never earlier, and never backdated.
 * A later change follows "Changes to this notice" below and adds a row to CHANGE_LOG.
 */
const VERSION = "2.0";
const EFFECTIVE = "11 October 2026";

const CHANGE_LOG: [string, string][] = [
  [
    EFFECTIVE,
    "Version 2.0. Adds emails to us, the people we contact for business, who receives personal data and where, your rights in full, children, security and these change rules. The contact form rests on s.7(a) instead of consent. Replaces the notice effective 1 October 2026",
  ],
];

const a = "text-text underline underline-offset-4";

/** A table on wider screens; on a phone, each row is a short block with the column names as labels. */
function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="mt-4">
      <div className="space-y-4 sm:hidden">
        {rows.map((r, i) => (
          <dl key={i} className="border-b border-paper-line pb-4 text-[15px] leading-relaxed">
            <dt className="font-semibold text-text">{r[0]}</dt>
            {r.slice(1).map((c, j) => (
              <dd key={j} className="mt-1">
                <span className="text-text-mute">{head[j + 1]}: </span>
                {c}
              </dd>
            ))}
          </dl>
        ))}
      </div>
      <table className="hidden w-full border-collapse text-left text-[15px] leading-relaxed sm:table">
        <thead>
          <tr className="border-b border-paper-line">
            {head.map((h) => (
              <th key={h} scope="col" className="py-2 pr-4 align-bottom font-semibold text-text">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-paper-line align-top">
              {r.map((c, j) => (
                <td key={j} className="py-2 pr-4">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Privacy() {
  const email = (
    <a href={`mailto:${company.email}`} className={a}>
      {company.email}
    </a>
  );
  const policy = (
    <a href={DOKYDOC.privacy} className={a} target="_blank" rel="noopener noreferrer">
      DokyDoc Privacy Policy
    </a>
  );

  return (
    <article className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="h-display mt-6 text-[42px] sm:text-[54px]">Website privacy notice</h1>
        <p className="mt-4 text-[15px] text-text-mute">
          Version {VERSION} · Effective {EFFECTIVE}
        </p>

        <div className="mt-10 space-y-10 text-[17px] leading-[1.75] text-text-soft [&_h2]:font-serif [&_h2]:text-[26px] [&_h2]:leading-snug [&_h2]:text-text [&_h3]:mt-6 [&_h3]:text-[19px] [&_h3]:font-semibold [&_h3]:text-text [&_strong]:text-text">
          <section>
            <h2>Who we are and what this notice covers</h2>
            <p className="mt-3">
              {company.legalName} (&ldquo;Deyora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a company incorporated in
              India (CIN {company.cin}), with its registered office at {company.registeredOffice}. Our product is DokyDoc.
            </p>
            <p className="mt-3">This notice explains how we handle personal data when:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>you visit this website, deyoraintelligence.com;</li>
              <li>you send us the contact form on this website, or email us;</li>
              <li>we contact you for business, for example to introduce DokyDoc.</li>
            </ul>
            <p className="mt-3">
              For this personal data, Deyora is the <strong>Data Fiduciary</strong>: we decide why and how it is used.
            </p>
            <p className="mt-3">
              The <strong>{policy}</strong> applies when you use DokyDoc. If it describes the data in this notice
              differently, this notice applies and we correct the other.
            </p>
            <p className="mt-3">
              We follow India&rsquo;s Digital Personal Data Protection Act, 2023 (the &ldquo;DPDP Act&rdquo;) and the rules
              made under it as each provision comes into force, and the other Indian laws that apply to us, including the
              Information Technology Act, 2000 and its rules. A section number in this notice, such as s.7(a), is a section
              of the DPDP Act. A <strong>Data Principal</strong> is the person the personal data is about, a{" "}
              <strong>Data Processor</strong> handles personal data on behalf of a Data Fiduciary, and{" "}
              <strong>the Board</strong> is the Data Protection Board of India.
            </p>
            <p className="mt-3">
              We do not sell personal data, and we do not share it with anyone for their own marketing.
            </p>
          </section>

          <section>
            <h2>Website visitors</h2>
            <p className="mt-3">
              When you open a page, your browser sends our website host what every website receives: your IP address,
              details of your browser and device, the address of the page and, often, the website that sent you. The host
              uses this to deliver the page and keep the website secure, and keeps records of these requests under its own
              terms. We do not use them to find out who you are, or to follow you across other websites. Our ground is
              legitimate use under s.7(a): your browser sends this information so that you can see the page.
            </p>

            <h3>What this website keeps in your browser</h3>
            <p className="mt-3">
              The website keeps a few things in your own browser&rsquo;s storage, so that it can show you what fits the
              choices you make. None of it reaches us unless you send the contact form.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>The kind of visitor you said you are</strong>, if you choose an option such as &ldquo;I run a
                company&rdquo; or open a link such as /?for=investor. Kept until you clear it.
              </li>
              <li>
                <strong>The name and company sent with your message</strong>, once you send the contact form, so that the
                website can greet you and fill them in next time. Kept until you clear it.
              </li>
              <li>
                <strong>This visit</strong>: the pages you open, the name of the website that sent you (never the page you
                were on) and any campaign tags in the link you arrived by, such as utm_source. Kept for this visit only,
                and gone when you close the tab.
              </li>
            </ul>
            <p className="mt-3">
              To clear it, use &ldquo;Forget me in this browser&rdquo; at the foot of any page once something is stored,
              or clear this site&rsquo;s data in your browser. <ForgetMe className="text-text underline" />
            </p>
            <p className="mt-3">
              The links on this website that start or open DokyDoc carry tags saying that you came from this website, and
              most of them also say the kind of visitor you said you are, if you chose one. They never carry your name or
              email address.
            </p>

            <h3>Cookies and analytics</h3>
            <p className="mt-3">
              Apart from what is listed above, this website stores nothing about you on your device. It sets no cookies
              and runs no analytics or advertising scripts. It loads nothing from other websites: its fonts and images come
              from this website itself. If we change this, we will update this notice first, and ask for your consent where
              the law requires it.
            </p>
          </section>

          <section>
            <h2>The contact form</h2>
            <p className="mt-3">
              <strong>What you send.</strong> Your email address, the two answers you choose, a note if you add one, and
              the name and company the form shows before you send. The form suggests the name and company from your email
              address (for example, priya.sharma@acme.in suggests Priya Sharma from Acme). The suggestion is made in your
              browser, nothing is looked up anywhere, and you can change or remove it before you send.
            </p>
            <p className="mt-3">
              <strong>What the form adds.</strong> So that we can reply in context, the form also sends what this website
              keeps in your browser, apart from your name and company: the kind of visitor you said you are, if you chose
              one; the pages you opened during this visit; the website that sent you; and any campaign tags. Before you
              send, the form lists the pages you opened and the website that sent you. Our form provider records your IP
              address, details of your browser and the page you sent the form from, and checks each message for spam.
            </p>
            <p className="mt-3">
              <strong>Why we use it.</strong> To reply to you and, if you ask, to arrange a call or a walkthrough of
              DokyDoc, or to send you documents you asked for. We do not add you to a mailing list or use your details for
              advertising.
            </p>
            <p className="mt-3">
              <strong>Our ground.</strong> Legitimate use under s.7(a): you give us these details for this purpose. You can
              tell us at any time that you no longer want us to use them, and we will stop and delete them, unless a law
              requires us to keep them.
            </p>
            <p className="mt-3">
              <strong>Where it goes.</strong> Our form provider keeps your message and emails a copy to our mailbox.
              &ldquo;Who receives personal data&rdquo; names both providers, and &ldquo;How long we keep data&rdquo; says
              when each copy is deleted.
            </p>
            <p className="mt-3">Please do not send confidential documents through the form.</p>
          </section>

          <section>
            <h2>Emails to us</h2>
            <p className="mt-3">
              When you email us, or reply to an email from us, we receive your email address, your name as your email
              shows it, and whatever your message and its attachments contain. We use them to reply and to deal with what
              you wrote about, such as an enquiry, a request for our security documents, a partnership, an investment, a
              job at Deyora or a press request, and we keep the correspondence as a record. Our ground is legitimate use
              under s.7(a). Our email is kept in our mailbox at our email provider.
            </p>
            <p className="mt-3">Some messages are covered elsewhere:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Emails about a DokyDoc account, including requests for support, are covered by the DokyDoc Privacy Policy.
              </li>
              <li>
                If your organisation sends us its business records, for example for a review under a signed
                non-disclosure agreement, we handle them as that agreement says.
              </li>
            </ul>
          </section>

          <section>
            <h2>People we contact for business</h2>
            <p className="mt-3">
              We contact people at businesses we think may be interested in our products, and others we approach for our
              business, such as possible partners and investors. We also talk with people in different businesses about
              how they work, so that we can build products that help them.
            </p>
            <p className="mt-3">
              <strong>What we hold.</strong> Your name, job title, company, work email address, phone number and city;
              when and how we contacted you; notes of our calls and messages, including what you told us; and whether you
              asked us not to contact you.
            </p>
            <p className="mt-3">
              <strong>Where it comes from.</strong> Business details you made public yourself, or asked to be made public,
              such as on your company&rsquo;s website, your professional networking profile or a listing your business
              published; details you gave us, for example on a business card, at a meeting or event, or in a reply;
              introductions from people who know you; and business directories and business-contact databases compiled
              by other organisations.
            </p>
            <p className="mt-3">
              <strong>How we contact you.</strong> By email, by phone, or by message through a professional networking or
              messaging service.
            </p>
            <p className="mt-3">
              <strong>Why we use it.</strong> To introduce our products, arrange demonstrations, meetings and pilots,
              follow up on our conversations and learn what your business needs.
            </p>
            <p className="mt-3">
              <strong>Our ground.</strong>
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Business details you made public yourself, or asked to be made public: the DPDP Act does not apply to them
                (s.3(c)(ii)). We follow this notice for them all the same.
              </li>
              <li>Details you gave us: legitimate use under s.7(a), for the purpose you gave them for.</li>
              <li>
                Details we have in any other way, such as through an introduction or from a business directory or
                database: until 31 March 2027, we may contact you at your work email address or work phone number, saying
                first who we are and why we are contacting you, and we stop at once if you say no. From 31 March 2027, we
                contact you only if you have agreed to hear from us after being given this notice, for example through the
                person who introduced you. That agreement is your consent (s.6), and you can withdraw it at any time.
              </li>
            </ul>
            <p className="mt-3">
              <strong>To stop us.</strong> Reply to any message from us, tell us on a call, or write to the grievance
              officer. We stop contacting you and take you off our outreach list, usually the same day. We keep only your
              email address or phone number on a do-not-contact list, so that we do not contact you again, and delete your
              other details from our outreach list and from its earlier versions. Copies that the AI tools named in
              &ldquo;Who receives personal data&rdquo; have already received are kept by those tools under their own
              terms.
            </p>
            <p className="mt-3">The services that hold these details are named in &ldquo;Who receives personal data&rdquo;.</p>
          </section>

          <section>
            <h2>Who receives personal data</h2>
            <p className="mt-3">These service providers handle personal data for us, under their terms with us:</p>
            <Table
              head={["Provider", "What it does for us", "What it receives", "Where it may handle the data"]}
              rows={[
                [
                  "Netlify, Inc.",
                  "Hosts this website and receives the contact form",
                  "Requests to the website; contact form messages, with the IP address, browser details and page recorded for each",
                  "United States and other countries",
                ],
                [
                  "Zoho Corporation Private Limited (Zoho Mail)",
                  "Our email",
                  "Copies of contact form messages; emails you send us and our replies; our emails to people we contact for business",
                  "India",
                ],
                [
                  "A private code-hosting service",
                  "Keeps our outreach list",
                  "The details described in “People we contact for business”",
                  "Outside India",
                ],
                [
                  "AI tools we use to organise our own work",
                  "Help us prepare and organise our work, including our outreach",
                  "Copies of our outreach list, which is kept with our other working files",
                  "Outside India",
                ],
              ]}
            />
            <p className="mt-4">
              When we call you, or message you through a professional networking or messaging service, that service
              carries the call or message under its own terms.
            </p>
            <p className="mt-3">
              Our own people see this personal data only as their work needs, and our professional advisers see it, under
              a duty of confidentiality, only where they need it to advise us. We disclose personal data to a court or a
              public authority only where a law, judgment or order requires it (s.7(d) and s.7(e)). If Deyora&rsquo;s
              business is merged, sold or otherwise transferred, the personal data in this notice may pass to the new
              owner, which may use it only as this notice describes.
            </p>
          </section>

          <section>
            <h2>Where personal data is kept</h2>
            <p className="mt-3">
              Our mailbox is in India. Our website host is based in the United States, and the code-hosting service and AI
              tools we use are outside India, so personal data in this notice may be handled outside India. The DPDP Act
              allows this, except to a country or territory the Government of India restricts by notification (s.16). We
              will not transfer personal data to a restricted country or territory, and we make no promise that it stays
              in any one country.
            </p>
          </section>

          <section>
            <h2>How long we keep data</h2>
            <Table
              head={["Personal data", "How long we keep it"]}
              rows={[
                [
                  "What this website keeps in your browser",
                  "The kind of visitor you chose, and the name and company sent with your message: until you clear them. This visit: until you close the tab",
                ],
                ["Requests to the website", "Kept by the website host under its own terms"],
                ["Contact form messages at our form provider", "Deleted after 365 days"],
                [
                  "Emails, including the copy of each contact form message in our mailbox",
                  "Deleted two years after the last message in the conversation",
                ],
                [
                  "People we contact for business",
                  "Kept while we are in touch. Deleted from our outreach list and from its earlier versions once 12 months pass with no contact between us. If you ask us to stop, only the do-not-contact entry stays. Copies that the AI tools named in “Who receives personal data” have already received are kept by those tools under their own terms",
                ],
              ]}
            />
            <p className="mt-4">
              We make these deletions by hand at a review every three months, so an item can stay up to three months past
              the time shown. An email that forms part of a tax record, a signed agreement or a dispute is kept for as long
              as the law, the agreement or the dispute requires. If you become a customer, the DokyDoc Privacy Policy
              covers your account.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p className="mt-3">
              We protect personal data with safeguards suited to the risk. This website and its form work only over
              encrypted (HTTPS) connections, and only the people at Deyora whose work needs them can open the form
              messages, our mailbox and our outreach list. If a personal data breach affects your personal data, we will
              tell you and the Board as the DPDP Act and its rules require. Before those duties come into force, we already
              tell the people affected in the same way, and we prepare the report the Board will need.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p className="mt-3">You can:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                ask for a summary of the personal data we hold about you and how we use it, and for the identities of the
                other Data Fiduciaries and Data Processors we have shared it with, with a description of what we shared
                (s.11);
              </li>
              <li>
                ask us to correct, complete or update it, or to erase it (s.12). We erase it unless we need to keep it for
                the purpose you gave it for or to comply with a law;
              </li>
              <li>
                withdraw your consent where we rely on it, as easily as you gave it (s.6), and tell us that you no longer
                agree to a use where we rely on s.7(a);
              </li>
              <li>
                nominate one or more people to use your rights if you die or become unable to act (s.14), by emailing us
                their names and email addresses;
              </li>
              <li>
                have a grievance resolved by our grievance officer (s.13) and, if you are not satisfied, complain to the
                Board once the relevant provisions of the DPDP Act are in force.
              </li>
            </ul>
            <p className="mt-3">
              Where the DPDP Act does not apply, for example to business details you made public yourself, we answer these
              requests in the same way.
            </p>

            <h3>How to make a request</h3>
            <p className="mt-3">
              Write to the grievance officer at {email}, preferably from the email address you used with us. We may ask you
              to confirm who you are before we act. We handle these requests manually, by a person. We reply within 30
              days, and every reply names the grievance officer and says how to reach them. You can ask for this notice,
              and for our replies, in English or in any language in the Eighth Schedule to the Constitution of India.
            </p>

            <h3>If the GDPR applies to you</h3>
            <p className="mt-3">
              If the EU or UK General Data Protection Regulation (the &ldquo;GDPR&rdquo;) applies to our handling of your
              personal data, read Data Fiduciary as &ldquo;controller&rdquo;, Data Processor as &ldquo;processor&rdquo; and
              Data Principal as &ldquo;data subject&rdquo;. We rely on these legal bases: our legitimate interests in
              running and protecting this website, answering messages and contacting businesses about our products;
              consent where we ask for it; and legal obligation for records a law requires us to keep. You have the rights
              the GDPR gives you, including to object to processing, and you may complain to your supervisory authority.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p className="mt-3">
              This website and our products are for businesses, and are not meant for anyone under 18. We do not knowingly
              collect personal data from children. If you are under 18, please do not send us your details. If we learn
              that we hold a child&rsquo;s personal data without the consent the law requires, we will delete it.
            </p>
          </section>

          <section>
            <h2>Changes to this notice</h2>
            <p className="mt-3">
              This page shows its version and the date it took effect, and the change log below records every change with
              its date. We keep earlier versions and will send any of them on request.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                We may replace a provider in &ldquo;Who receives personal data&rdquo; with one that does the same job, and
                correct or clarify wording, with a dated entry in the change log. A new provider is listed before it
                receives any personal data, and a correction never widens what we do.
              </li>
              <li>
                A change that adds a kind of personal data or a purpose is a new version, published on this page before it
                takes effect. A change that reduces your rights is published at least 30 days before it takes effect.
              </li>
              <li>
                We will not use personal data we already hold for a purpose this notice does not describe, such as a
                newsletter, without your consent.
              </li>
            </ul>
          </section>

          <section>
            <h2>Change log</h2>
            <Table head={["Date", "What changed"]} rows={CHANGE_LOG} />
          </section>

          <section>
            <h2>Grievance officer and contact</h2>
            <p className="mt-3">
              Our grievance officer is <strong>{company.grievanceOfficer}</strong>, {company.grievanceOfficerTitle},
              reachable at {email}. The grievance officer answers questions about how we process personal data, and
              handles requests, grievances and complaints under this notice. We respond within 30 days.
            </p>
            <p className="mt-3">
              <strong>{company.legalName}</strong>
              <br />
              CIN {company.cin}
              <br />
              {company.registeredOffice}
              <br />
              {email}
            </p>
          </section>

          <p className="border-t border-paper-line pt-8 text-[15px]">
            <Link href="/contact" className={a}>
              Back to the contact page
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
