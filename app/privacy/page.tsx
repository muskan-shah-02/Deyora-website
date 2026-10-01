import type { Metadata } from "next";
import Link from "next/link";
import { company, DOKYDOC } from "@/lib/site";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Website privacy notice",
  description: "How Deyora Intelligence handles the personal data you send through this website.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE = "1 October 2026";

export default function Privacy() {
  return (
    <article className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="h-display mt-6 text-[42px] sm:text-[54px]">Website privacy notice</h1>
        <p className="mt-4 text-[15px] text-text-mute">Effective {EFFECTIVE}</p>

        <div className="mt-10 space-y-10 text-[17px] leading-[1.75] text-text-soft [&_h2]:font-serif [&_h2]:text-[26px] [&_h2]:leading-snug [&_h2]:text-text [&_strong]:text-text">
          <section>
            <p>
              This notice covers this website only. It explains what we collect when you contact us here and what we do
              with it. The DokyDoc product has its own{" "}
              <a href={DOKYDOC.privacy} className="text-text underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                privacy policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Who we are</h2>
            <p className="mt-3">
              {company.legalName} (CIN {company.cin}), registered office at {company.registeredOffice}. We decide why and
              how the data described here is used.
            </p>
          </section>

          <section>
            <h2>What we collect, and why</h2>
            <p className="mt-3">
              When you send the contact form, we receive your name, work email, and, if you give them, your company, your
              role, the topic you choose and your message. Our form provider also records technical details of the
              submission, such as your IP address and browser, to stop spam.
            </p>
            <p className="mt-3">
              We use these details only to reply to your request and, if you ask, to arrange a walkthrough. We do not add
              you to a mailing list, sell your details, or use them for advertising. You give them by choosing to send the
              form, and you can withdraw that consent at any time.
            </p>
          </section>

          <section>
            <h2>Where it is kept, and for how long</h2>
            <p className="mt-3">
              Your message is stored by our form provider, Netlify (United States), and delivered to our company mailbox.
              We delete form submissions 365 days after you send them, and our email correspondence with you two years
              after the last message, unless you become a customer, in which case the DokyDoc privacy policy applies.
            </p>
          </section>

          <section>
            <h2>Cookies and analytics</h2>
            <p className="mt-3">
              This website sets no cookies and runs no analytics or advertising scripts. Its fonts are served from our own
              site.
            </p>
          </section>

          <section>
            <h2>Your choices</h2>
            <p className="mt-3">
              You can ask to see, correct or delete your details, or withdraw your consent, by writing to{" "}
              <a href={`mailto:${company.email}`} className="text-text underline underline-offset-4">
                {company.email}
              </a>
              . We act on a request within 30 days.
            </p>
          </section>

          <section>
            <h2>Grievance officer</h2>
            <p className="mt-3">
              {company.grievanceOfficer}, {company.founderTitle}, {company.legalName}, {company.registeredOffice}. Email:{" "}
              {company.email}. We respond to every grievance within 30 days. Once the relevant provisions of the Digital
              Personal Data Protection Act, 2023 are in force, you may also complain to the Data Protection Board of India
              if you are not satisfied with our response.
            </p>
          </section>

          <section>
            <h2>Changes to this notice</h2>
            <p className="mt-3">
              If we change this notice, we will update it here and change the effective date at the top.
            </p>
          </section>

          <p className="border-t border-paper-line pt-8 text-[15px]">
            <Link href="/contact" className="text-text underline underline-offset-4">
              Back to the contact page
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
