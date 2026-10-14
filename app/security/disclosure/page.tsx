import type { ReactNode } from "react";
import { company, DOKYDOC, DOKYDOC_V2_RELEASE_DAY, untilDokyDocV2 } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { Eyebrow } from "@/components/ui";

export const metadata = pageMeta({
  title: "Vulnerability disclosure policy",
  description:
    "How to report a security weakness in DokyDoc or this website to Deyora Intelligence, what we promise in return, and what is in scope.",
  path: "/security/disclosure",
});

/**
 * The text of POL-SEC-11 (deyora-hq trust-pack/02-security/POL-SEC-11_VULNERABILITY_DISCLOSURE_POLICY.md), version 1.2,
 * without its header table and internal notes. Change this page and that file in the same change, and raise the
 * version in both. public/.well-known/security.txt points here and must match §10.
 * Version 1.3 shows from the release day of version 2.0 of the DokyDoc documents (DOKYDOC_V2_RELEASE_DAY in
 * lib/site.ts), the day the Trust Pack's release-day patch raises the file to 1.3: it changes only two citations,
 * §4's out-of-scope list and §7's point on the Terms of Service.
 */
const VERSION = untilDokyDocV2("1.2", "1.3");
const DATED = untilDokyDocV2("13 October 2026", DOKYDOC_V2_RELEASE_DAY);
/** RFC 9116: less than a year after publication; renewed at each yearly review (POL-SEC-11 §10). */
const EXPIRES = "2027-09-29T18:29:59.000Z";
/** Literal, not the build's site URL: the static file says exactly this. */
const ORIGIN = "https://deyoraintelligence.com";

const a = "text-text underline underline-offset-4";

function Steps({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <div className="mt-4">
      <div className="space-y-4 sm:hidden">
        {rows.map(([step, when]) => (
          <dl key={step} className="border-b border-paper-line pb-4 text-[15px] leading-relaxed">
            <dt className="font-semibold text-text">{step}</dt>
            <dd className="mt-1">{when}</dd>
          </dl>
        ))}
      </div>
      <table className="hidden w-full border-collapse text-left text-[15px] leading-relaxed sm:table">
        <thead>
          <tr className="border-b border-paper-line">
            <th scope="col" className="py-2 pr-4 align-bottom font-semibold text-text">
              Step
            </th>
            <th scope="col" className="py-2 pr-4 align-bottom font-semibold text-text">
              When
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([step, when]) => (
            <tr key={step} className="border-b border-paper-line align-top">
              <td className="py-2 pr-4">{step}</td>
              <td className="py-2 pr-4">{when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Disclosure() {
  const email = (
    <a href={`mailto:${company.email}`} className={a}>
      {company.email}
    </a>
  );
  const securityTxt = [
    `Contact: mailto:${company.email}`,
    `Expires: ${EXPIRES}`,
    "Preferred-Languages: en",
    `Policy: ${ORIGIN}/security/disclosure`,
    `Canonical: ${ORIGIN}/.well-known/security.txt`,
  ].join("\n");

  return (
    <article className="py-16 sm:py-24">
      <div className="container-page max-w-3xl">
        <Eyebrow>Security</Eyebrow>
        <h1 className="h-display mt-6 text-[42px] sm:text-[54px]">Vulnerability disclosure policy</h1>
        <p className="mt-4 text-[15px] text-text-mute">
          Version {VERSION} · {DATED}
        </p>

        <div className="mt-10 space-y-10 text-[17px] leading-[1.75] text-text-soft [&_h2]:font-serif [&_h2]:text-[26px] [&_h2]:leading-snug [&_h2]:text-text [&_strong]:text-text [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <section>
            <h2>1. Our commitment</h2>
            <p className="mt-3">
              {company.legalName} builds DokyDoc. We want to hear about security weaknesses in it, and we will work with
              anyone who reports one in good faith. This page says how to report, what we promise in return, and what is
              in and out of scope.
            </p>
          </section>

          <section>
            <h2>2. How to report</h2>
            <p className="mt-3">
              Email <strong>{email}</strong>, with &ldquo;Security&rdquo; in the subject. Please write in English. If you
              get no acknowledgement within 3 business days, please write again.
            </p>
            <p className="mt-3">Please include:</p>
            <ul>
              <li>the affected URL, API endpoint or feature;</li>
              <li>the type of weakness and its impact as you see it;</li>
              <li>
                step-by-step instructions to reproduce it, with a working demonstration, screenshots or a short video if
                they help;
              </li>
              <li>
                the name of the DokyDoc organisation you tested with, and the dates, times (with time zone) and IP
                addresses of your testing, so we can tell your traffic from an attack;
              </li>
              <li>whether you saw, kept or changed any data that is not yours;</li>
              <li>how you would like to be credited, if at all.</li>
            </ul>
            <p className="mt-3">
              Do not send other people&rsquo;s personal data or customer content in your report. Describe it instead.
            </p>
          </section>

          <section>
            <h2>3. What we promise</h2>
            <Steps
              rows={[
                [
                  "Acknowledge your report",
                  <>
                    Within <strong>3 business days</strong> (Monday–Friday, India, excluding national holidays)
                  </>,
                ],
                [
                  "Tell you whether we confirm the issue, and its severity",
                  <>
                    Within <strong>10 business days</strong>
                  </>,
                ],
                [
                  "Keep you updated",
                  <>
                    At least every <strong>14 days</strong> until it is fixed
                  </>,
                ],
                [
                  "Fix it",
                  <>
                    Within our remediation windows, measured from confirmation: Critical <strong>7 days</strong> (
                    <strong>72 hours</strong> if actively exploited), High <strong>30 days</strong>, Medium{" "}
                    <strong>90 days</strong>, Low <strong>180 days</strong> or the next planned change
                  </>,
                ],
                ["Tell you when it is fixed", "When the fix is live, and before any public disclosure"],
              ]}
            />
            <p className="mt-3">
              We will not share your identity outside the company without your permission, except where the law requires
              it.
            </p>
          </section>

          <section>
            <h2>4. Scope</h2>
            <p className="mt-3">
              <strong>In scope:</strong>
            </p>
            <ul>
              <li>
                the DokyDoc application at <code>https://dokydoc.com</code> and <code>https://www.dokydoc.com</code>,
                including its API under <code>/api/</code>;
              </li>
              <li>
                the company website at <code>https://deyoraintelligence.com</code>, for weaknesses in the site itself.
              </li>
            </ul>
            <p className="mt-3">
              You may create your own organisation in DokyDoc to test with. Test only against accounts and organisations
              you created. To test isolation between organisations, create two.
            </p>
            <p className="mt-3">
              AI features are in scope where a weakness lets someone reach another organisation&rsquo;s data or perform
              an action the user did not authorise (for example through prompt injection). The quality or accuracy of AI
              output is not a security issue; please send that to support.
            </p>
            <p className="mt-3">
              <strong>Out of scope:</strong>
            </p>
            <ul>
              <li>
                denial of service, load or stress testing, and anything that degrades the service for others;
              </li>
              <li>social engineering or phishing of our staff, customers or suppliers;</li>
              <li>physical attacks on offices, data centres or devices;</li>
              <li>
                {untilDokyDocV2(
                  "third-party services we use, such as Cloudflare, Hetzner, Google, Razorpay, GitHub, GitLab, Bitbucket, Atlassian, Slack, Zoho, Sentry and the platform that hosts our website: please report to them directly;",
                  "the services of the providers on our Sub-processor and Connector List, the services our customers connect, and the platform that hosts our website: please report to them directly;",
                )}
              </li>
              <li>output from automated scanners without a demonstrated, exploitable impact;</li>
              <li>
                missing security headers, banner or version disclosure, or email SPF/DKIM/DMARC settings, without a
                demonstrated impact;
              </li>
              <li>clickjacking on pages with no sensitive action, self-XSS, and logout CSRF;</li>
              <li>rate limits on endpoints that are not sensitive;</li>
              <li>issues that need an outdated browser or a compromised device;</li>
              <li>
                limitations we already state on DokyDoc&rsquo;s{" "}
                <a href={DOKYDOC.security} className={a} target="_blank" rel="noopener noreferrer">
                  <code>/security</code> page
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Rules for testing</h2>
            <ul>
              <li>
                Use only accounts and organisations you own. If you reach data that is not yours, stop, do not keep or
                share it, and tell us in your report.
              </li>
              <li>Do not change or delete data that is not yours.</li>
              <li>
                Keep automated requests below 5 per second, and do not run tests that could affect other customers.
              </li>
              <li>Do not try to obtain paid credit or services without paying; report the weakness instead.</li>
              <li>Do not leave backdoors, persistence or malware.</li>
              <li>Delete any data you obtained once you have reported.</li>
              <li>Keep the details confidential until we agree a disclosure date (§6).</li>
              <li>Do not ask for payment or any other benefit in return for not disclosing a weakness.</li>
              <li>Follow Indian law and the law where you are.</li>
            </ul>
          </section>

          <section>
            <h2>6. Coordinated disclosure</h2>
            <p className="mt-3">
              We ask you to wait <strong>90 days</strong> from your report, or until the fix is live if that is sooner,
              before publishing details. We may agree a longer period for a complex fix, and we will tell you why. If the
              weakness is being exploited, we will work with you on an earlier joint disclosure. We are happy to publish
              our own advisory and credit you by name.
            </p>
          </section>

          <section>
            <h2>7. Safe harbour</h2>
            <p className="mt-3">
              If you make a good-faith effort to follow this policy, then for the research you do under it:
            </p>
            <ul>
              <li>
                <strong>You have our permission.</strong> {company.legalName}, as the person in charge of the systems in
                §4, permits you to access and test them within the scope in §4 and the rules in §5. This is our
                permission for the purposes of section 43 of the Information Technology Act, 2000.
              </li>
              <li>
                <strong>No civil claim.</strong> We will not bring a civil claim against you, including a claim for
                compensation under section 43 of the Information Technology Act, 2000 or a claim for breach of our Terms
                of Service.
              </li>
              <li>
                <strong>No complaint.</strong> We will not file a police complaint, a first information report or any
                other complaint against you with any authority.
              </li>
              <li>
                <strong>Terms of Service.</strong>{" "}
                {untilDokyDocV2(
                  "Testing that follows this policy is not a breach of the rule in our Terms of Service (§3) against probing the service.",
                  "Testing that follows this policy is not a breach of the Terms of Service (“Acceptable use”), which forbid probing, scanning or testing DokyDoc’s security “without Deyora’s written permission”: this policy is that written permission.",
                )}
              </li>
              <li>
                <strong>If someone else acts.</strong> If a third party makes a claim or complaint against you about
                research that followed this policy, we will confirm in writing, on request, that we permitted it.
              </li>
            </ul>
            <p className="mt-3">
              <strong>What this cannot do.</strong> This is our own undertaking. It does not waive any criminal liability,
              which is a matter for the State and not for us, and it does not bind the police, CERT-In, courts,
              regulators, our customers or our suppliers. It covers only our own systems in §4; we cannot give permission
              to test the third-party services listed there. It does not cover research that breaks the rules in §5, that
              goes beyond what is needed to show the weakness, or that accesses, keeps, changes or discloses data that is
              not yours beyond that.
            </p>
            <p className="mt-3">
              <strong>Our legal duties continue.</strong> Indian law may require us to report certain cyber incidents to
              CERT-In within 6 hours of noticing them, to tell affected customers when their data may have been exposed,
              and to answer lawful requests from authorities. If your report shows such an incident, we will make the
              report. In it we will describe your research as done with our permission and in good faith, and we will not
              give your name unless the law requires it or you agree.
            </p>
          </section>

          <section>
            <h2>8. Rewards</h2>
            <p className="mt-3">
              We do not run a bug bounty and do not pay for reports. With your permission, we will thank you by name in
              our advisory and in an acknowledgements list on this page.
            </p>
            <p className="mt-3">
              <strong>Acknowledgements.</strong> None yet.
            </p>
          </section>

          <section>
            <h2>9. How we handle a report internally</h2>
            <p className="mt-3">
              Each report is recorded in the vulnerability register and handled under our vulnerability and patch
              management policy (triage, CVSS rating, remediation windows). If it shows that customer data may have been
              exposed, our incident response plan starts at once, including customer notice and the CERT-In report.
            </p>
          </section>

          <section>
            <h2>
              10. <code>/.well-known/security.txt</code>
            </h2>
            <p className="mt-3">
              The same contact details are published in machine-readable form (RFC 9116) at{" "}
              <code>{`${ORIGIN}/.well-known/security.txt`}</code>, served over HTTPS as <code>text/plain</code>, with
              its own <code>Canonical</code> line. <code>Expires</code> is set less than one year after publication, as
              the RFC recommends, and renewed at each yearly review. The file reads:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md border border-paper-line p-4 text-[14px] leading-relaxed">
              {securityTxt}
            </pre>
          </section>
        </div>
      </div>
    </article>
  );
}
