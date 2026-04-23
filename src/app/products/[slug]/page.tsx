import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductDosage } from "@/components/products/ProductDosage";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductTabs } from "@/components/products/ProductTabs";
import { PRODUCT_DETAIL_CONTENT } from "@/lib/constants";
import { products } from "@/lib/data";

interface ProductDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  return {
    title: product ? `${product.name} | PharmaPrecise` : "Product Not Found | PharmaPrecise",
    description: product?.shortDescription,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-lg text-text-secondary">
          <Link href="/products" className="hover:text-primary">{PRODUCT_DETAIL_CONTENT.breadcrumbsRoot}</Link>
          <span> {'>'} </span>
          <span>{product.category}</span>
          <span> {'>'} </span>
          <span className="text-text-primary">{product.name}</span>
        </nav>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductImageGallery images={[product.imageUrl, ...product.thumbnails.slice(0, 3)]} badge={product.badge} />
          <div className="space-y-6">
            <ProductInfo product={product} />
            <ProductDosage dosageProtocol={product.dosageProtocol} />
            <ProductCTA productName={product.name} />
          </div>
        </div>
        <ProductTabs
          composition={product.composition}
          clinicalTrials={product.clinicalTrials}
          storageHandling={product.storageHandling}
        />
      </div>
    </section>
  );
}