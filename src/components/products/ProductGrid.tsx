"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, SearchX } from "lucide-react";

import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { PRODUCT_LISTING_CONTENT } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

import { ProductFilter } from "./ProductFilter";
import { ProductSearch } from "./ProductSearch";

interface ProductGridProps {
  products: Product[];
}

const ITEMS_PER_PAGE = 8;

export function ProductGrid({ products }: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(PRODUCT_LISTING_CONTENT.allProductsLabel);
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const byCategory =
      activeCategory === PRODUCT_LISTING_CONTENT.allProductsLabel
        ? products
        : products.filter((product) => product.category === activeCategory);
    return byCategory.filter((product) =>
      [product.name, product.category, product.shortDescription].join(" ").toLowerCase().includes(query)
    );
  }, [activeCategory, products, search]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, pageCount);
  const pagedProducts = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <h1 className="text-4xl font-extrabold uppercase tracking-wide text-[#9bb9ea]">{PRODUCT_LISTING_CONTENT.title}</h1>
            <p className="mt-3 text-lg text-text-secondary">{PRODUCT_LISTING_CONTENT.subtitle}</p>
          </div>
          <ProductSearch value={search} onChange={handleSearchChange} />
        </div>
        <ProductFilter categories={categories} active={activeCategory} onSelect={handleCategoryChange} />
        {pagedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pagedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-white py-16 text-center">
            <SearchX className="mx-auto size-10 text-text-secondary" />
            <p className="mt-4 text-xl font-semibold text-text-primary">{PRODUCT_LISTING_CONTENT.noProductsLabel}</p>
            <p className="mt-2 text-text-secondary">{PRODUCT_LISTING_CONTENT.noProductsHint}</p>
          </div>
        )}
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={safePage === 1}>
            <ChevronLeft className="size-4" />
          </Button>
          {Array.from({ length: pageCount }, (_, idx) => idx + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={cn("flex size-9 items-center justify-center rounded-md border border-border text-sm", num === safePage && "bg-primary text-white")}
            >
              {num}
            </button>
          ))}
          <Button variant="outline" size="icon" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={safePage === pageCount}>
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
