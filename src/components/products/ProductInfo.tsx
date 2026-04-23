import {
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { PRODUCT_DETAIL_CONTENT } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { calculateDiscount, formatPrice } from "@/lib/utils";

const ICONS = {
  Zap,
  FlaskConical,
  ShieldCheck,
  Leaf,
};

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const discount = calculateDiscount(product.mrp, product.discountedPrice);

  return (
    <div className="space-y-6">
      <span className="inline-flex rounded-md bg-primary-light px-3 py-1 text-sm font-semibold tracking-[0.12em] text-primary">
        {product.formulaBadge.toUpperCase()}
      </span>
      <div>
        <h1 className="text-4xl font-bold text-text-primary">{product.name}</h1>
        <p className="mt-2 text-2xl text-text-secondary">{product.shortDescription}</p>
      </div>
      <Separator />
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-3xl font-bold text-primary">{formatPrice(product.discountedPrice)}</span>
        <span className="text-2xl text-text-secondary line-through">{formatPrice(product.mrp)}</span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">SAVE {discount}%</span>
      </div>
      <Separator />
      <div>
        <h2 className="text-3xl font-semibold text-text-primary">{PRODUCT_DETAIL_CONTENT.descriptionLabel}</h2>
        <p className="mt-3 text-xl leading-9 text-text-secondary">{product.fullDescription}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {product.featurePills.map((pill) => {
          const Icon = ICONS[pill.icon as keyof typeof ICONS] ?? Sparkles;
          return (
            <div key={pill.label} className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-lg text-text-primary">
              <Icon className="size-4 text-primary" />
              {pill.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}