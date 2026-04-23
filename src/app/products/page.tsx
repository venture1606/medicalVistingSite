import type { Metadata } from "next";

import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clinical Portfolio | PharmaPrecise",
  description: "Browse our clinical-grade therapeutic portfolio by category.",
};

export default function ProductsPage() {
  return <ProductGrid products={products} />;
}