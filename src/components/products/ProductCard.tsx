import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { UI_LABELS } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 w-full">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
      </div>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-md bg-primary-light px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {product.category}
          </span>
          <span className="text-lg font-bold text-primary">MRP {formatPrice(product.mrp)}</span>
        </div>
        <h3 className="text-2xl font-semibold leading-tight text-text-primary">{product.name}</h3>
        <p className="line-clamp-2 text-base text-text-secondary">{product.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full border-border text-primary hover:bg-primary-light">
          <Link href={`/products/${product.slug}`}>{UI_LABELS.viewDetails}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}