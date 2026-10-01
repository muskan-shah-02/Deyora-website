import Link from "next/link";
import { company, DOKYDOC, dokydocLink } from "@/lib/site";
import { DeyoraMark } from "@/components/ui";
import { ForgetMe } from "@/components/Visitor";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink-950 text-ink-300">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <DeyoraMark size={36} />
            <span className="font-serif text-[22px]">Deyora Intelligence</span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-400">
            Intelligence for the people who run companies. It prepares. You decide.
          </p>
        </div>

        <FooterCol
          title="Products"
          links={[
            { href: "/dokydoc", label: "DokyDoc" },
            { href: "/dokydoc#faq", label: "DokyDoc: straight answers" },
            { href: "/dokydoc#dokybrain", label: "DokyBrain (in development)" },
            { href: dokydocLink(DOKYDOC.app), label: "Open DokyDoc", external: true },
            { href: DOKYDOC.security, label: "DokyDoc security", external: true },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { href: "/about#vision", label: "Vision and mission" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/contact?topic=trust", label: "Security documents (NDA)" },
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            { href: "/privacy", label: "Website privacy notice" },
            { href: DOKYDOC.terms, label: "DokyDoc terms", external: true },
            { href: DOKYDOC.privacy, label: "DokyDoc privacy policy", external: true },
          ]}
        />
      </div>

      {/* Company identity: Companies Act, 2013 s.12(3)(c) and rule 26 of the
          Companies (Incorporation) Rules, 2014. */}
      <div className="border-t border-white/[0.07]">
        <div className="container-page py-8 text-[13px] leading-relaxed text-ink-400">
          <p>
            <span className="text-ink-200">{company.legalName}</span>
            <Sep />CIN {company.cin}
            <Sep />Registered office: {company.registeredOffice}
          </p>
          <p className="mt-1">
            Email:{" "}
            <a href={`mailto:${company.email}`} className="text-ink-200 underline-offset-4 hover:underline">
              {company.email}
            </a>
            {company.phone ? (
              <>
                <Sep />Telephone: <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-ink-200">{company.phone}</a>
              </>
            ) : null}
            <Sep />Queries and grievances: {company.grievanceOfficer}
          </p>
          <p className="mt-4 text-ink-400">
            © {new Date().getFullYear()} {company.legalName}. DokyDoc is a product of {company.legalName}.
            <ForgetMe className="ml-3 text-ink-300" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function Sep() {
  return <span aria-hidden="true" className="mx-2 text-ink-700">·</span>;
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div>
      <h2 className="eyebrow !text-ink-400">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-[15px]">
        {links.map((l) => (
          <li key={l.href + l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-ink-300 hover:text-white">
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href={l.href} className="text-ink-300 hover:text-white">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
