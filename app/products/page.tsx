import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Products — Deyora Intelligence",
  description: "Explore the Deyora Intelligence product portfolio.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 border-b border-subtle">
        <div className="container-deyora">
          <Reveal><SectionLabel>Product Portfolio</SectionLabel></Reveal>
          <Reveal>
            <h1 className="display text-5xl md:text-7xl lg:text-[96px] text-white mb-10 max-w-5xl">
              Products built<br />on a single thesis:<br />
              <span className="shimmer-text">trace everything.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-sans font-light text-[17px] leading-relaxed text-ink-secondary max-w-2xl">
              Deyora Intelligence is building a portfolio of AI products that bring measurable order to the software
              delivery lifecycle. Today, DokyDoc is live. More products are queued.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-secondary py-24 md:py-32">
        <div className="container-deyora grid lg:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
