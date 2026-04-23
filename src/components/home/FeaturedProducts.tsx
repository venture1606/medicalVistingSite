import Link from "next/link";

import { ProductCard } from "@/components/products/ProductCard";
import { HOME_SECTIONS } from "@/lib/constants";
import { featuredProducts } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary-dark">{HOME_SECTIONS.featuredTitle}</h2>
            <p className="mt-2 text-text-secondary">{HOME_SECTIONS.featuredSubtitle}</p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-primary transition hover:text-primary-dark">
            {HOME_SECTIONS.featuredCta} →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}