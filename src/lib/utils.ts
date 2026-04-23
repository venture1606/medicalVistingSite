import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function calculateDiscount(mrp: number, discountedPrice: number): number {
  if (mrp <= 0 || discountedPrice <= 0 || discountedPrice >= mrp) {
    return 0;
  }

  return Math.round(((mrp - discountedPrice) / mrp) * 100);
}
