import productsData from "@/lib/data/products.json";
import type { Product } from "@/lib/types";

export const products: Product[] = productsData as Product[];

export const featuredProducts = products.filter((product) => product.isFeatured);
