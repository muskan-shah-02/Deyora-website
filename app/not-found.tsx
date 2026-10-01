import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page max-w-2xl">
        <Eyebrow>404</Eyebrow>
        <h1 className="h-display mt-6 text-[44px] sm:text-[56px]">This page is not here.</h1>
        <p className="lede mt-6">It may have moved when we rebuilt the site. These are good places to start:</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <Link href="/" className="btn-primary">Home</Link>
          </li>
          <li>
            <Link href="/dokydoc" className="btn-ghost">DokyDoc</Link>
          </li>
          <li>
            <Link href="/contact" className="btn-ghost">Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
