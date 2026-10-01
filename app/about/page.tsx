import { company, deyora, dokydocStatement } from "@/lib/site";
import { pageMeta } from "@/lib/meta";
import { ArrowLink, ButtonLink, DokyDocMark, Eyebrow, Section } from "@/components/ui";
import { FounderAvatar, FounderLinks } from "@/components/Founder";

export const metadata = pageMeta({
  title: "About, vision and mission",
  description:
    "Deyora Intelligence is an Indian company building intelligence for the people who run companies. Our vision, our mission, the founder, and the company behind DokyDoc.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <section className="on-dark bg-ink-950 text-ink-200">
        <div className="container-page pb-24 pt-16 sm:pt-24">
          <div className="max-w-4xl animate-rise">
            <Eyebrow>About Deyora</Eyebrow>
            <h1 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[70px]">
              We are building intelligence for the people who run companies.
            </h1>
            <p className="lede mt-8 max-w-2xl">{deyora.vision}</p>
          </div>
        </div>
      </section>

      {/* ── Vision and mission ───────────────────────────────── */}
      <Section id="vision" labelledBy="vision-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>Vision and mission</Eyebrow>
          <h2 id="vision-title" className="h-section mt-5">
            What we are building towards, in one line each.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article data-reveal className="on-dark flex flex-col rounded-2xl bg-ink-950 p-8 text-ink-200 shadow-lift sm:p-10">
            <p className="eyebrow">Deyora Intelligence</p>
            <dl className="mt-6 space-y-7">
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-300">Vision</dt>
                <dd className="mt-2 font-serif text-[26px] leading-snug text-white">{deyora.vision}</dd>
              </div>
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-300">Mission</dt>
                <dd className="mt-2 text-[17px] leading-relaxed text-ink-300">{deyora.mission}</dd>
              </div>
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-300">Promise</dt>
                <dd className="mt-2 font-serif text-[22px] text-white">{deyora.promise}</dd>
              </div>
            </dl>
          </article>
          <article data-reveal className="card flex flex-col p-8 sm:p-10">
            <p className="eyebrow flex items-center gap-3">
              <DokyDocMark size={28} /> DokyDoc, our first product
            </p>
            <dl className="mt-6 space-y-7">
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-700">Vision</dt>
                <dd className="mt-2 font-serif text-[26px] leading-snug">{dokydocStatement.vision}</dd>
              </div>
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-700">Mission</dt>
                <dd className="mt-2 text-[17px] leading-relaxed text-text-soft">{dokydocStatement.mission}</dd>
              </div>
              <div>
                <dt className="font-mono text-[12px] uppercase tracking-label text-brand-700">In one picture</dt>
                <dd className="mt-2 font-serif text-[20px] italic leading-snug">{dokydocStatement.analogy}</dd>
              </div>
            </dl>
          </article>
        </div>
      </Section>

      {/* ── Founder's note ───────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="note-title">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div data-reveal>
            <FounderAvatar size={96} />
            <Eyebrow className="mt-8">A note from the founder</Eyebrow>
            <h2 id="note-title" className="h-section mt-5">
              Why I started Deyora.
            </h2>
            <div className="mt-6">
              <FounderLinks />
            </div>
          </div>
          <div data-reveal className="space-y-6 text-[19px] leading-[1.75] text-text-soft">
            <p>
              Founders and company owners carry the whole business in their heads. What was promised to a customer, what
              the team is building, where money is leaking, which supplier is slipping. The information exists somewhere,
              but it is scattered, and nobody has the time to put it side by side.
            </p>
            <p>
              I want to bring intelligence and out-of-the-box thinking to every industry, and make that job easier. Less
              time chasing information and fixing what slipped. More time thinking, building and deciding. Technology
              should cut costs and remove busywork, not add another screen to check.
            </p>
            <p>
              We started with software delivery, because it is where the gap between what was promised and what was
              delivered is easiest to see, and DokyDoc checks it today. We are now designing DokyBrain, a brain for the
              whole company, starting with manufacturing.
            </p>
            <p>
              Whatever we build follows one rule: it prepares, and a person decides. Intelligence should make the people
              running a company sharper, not take the decision away from them.
            </p>
            <p className="pt-2 font-serif text-[22px] text-text">
              {company.founder}
              <span className="block font-sans text-[15px] text-text-mute">
                {company.founderTitle}, {company.brand}
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── How we build ─────────────────────────────────────── */}
      <Section labelledBy="build-title">
        <div className="max-w-3xl" data-reveal>
          <Eyebrow>How we build</Eyebrow>
          <h2 id="build-title" className="h-section mt-5">
            Five commitments we write down, so we can be held to them.
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Start from the problem", "We begin with a real problem a company has, not with what the technology can do. We build alongside conversations with the people who have the problem."],
            ["Evidence over confidence", "Every finding shows where it came from. What was not checked is labelled as not checked. We do not show a confidence percentage we cannot defend."],
            ["A person decides", "Our products observe, compare, recommend and prepare. They do not act in your systems on their own, and they never sign on your behalf."],
            ["Cost in plain sight", "You see the price before anything runs. We use cheap methods first and AI where it is needed, which keeps the bill down."],
            ["Say what is not built", "We do not sell what does not exist. Our product pages say what is live and what is not, and we keep that honest with automated checks."],
          ].map(([t, d], i) => (
            <li key={t} data-reveal className="card p-8">
              <span className="font-mono text-[12px] text-brand-700">0{i + 1}</span>
              <p className="mt-4 font-serif text-[24px] leading-snug">{t}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-text-soft">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── The company ──────────────────────────────────────── */}
      <Section className="bg-paper-deep" labelledBy="company-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <Eyebrow>The company</Eyebrow>
            <h2 id="company-title" className="h-section mt-5">
              Deyora Intelligence, and DokyDoc.
            </h2>
            <p className="lede mt-6">
              Deyora Intelligence is the company. DokyDoc is our product, live at dokydoc.com, and DokyDoc is where
              DokyBrain is being built.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <ArrowLink href="/dokydoc">About DokyDoc</ArrowLink>
              <ArrowLink href="/contact">Get in touch</ArrowLink>
            </div>
          </div>
          <dl data-reveal className="card divide-y divide-paper-line">
            {[
              ["Legal name", company.legalName],
              ["Corporate identity number", company.cin],
              ["Incorporated", `${company.incorporated}, in India (${company.registrar})`],
              ["Registered office", company.registeredOffice],
              ["Email", company.email],
              ["Queries and grievances", company.grievanceOfficer],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 px-7 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6">
                <dt className="text-[14px] text-text-mute">{k}</dt>
                <dd className="text-[15.5px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section dark labelledBy="about-cta">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 id="about-cta" className="h-section text-white">
            Have a problem worth solving?
          </h2>
          <p className="lede mx-auto mt-6 max-w-xl">Tell us what slows your company down. You will hear back from the founder.</p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact?topic=owner">Talk to the founder</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
