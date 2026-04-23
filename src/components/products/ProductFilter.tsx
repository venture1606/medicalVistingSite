import { PRODUCT_LISTING_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}

export function ProductFilter({ categories, active, onSelect }: ProductFilterProps) {
  const options = [PRODUCT_LISTING_CONTENT.allProductsLabel, ...categories];

  return (
    <div className="flex flex-wrap gap-3">
      {options.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={cn(
            "rounded-full border px-5 py-2 text-sm font-medium transition",
            active === category
              ? "border-primary bg-primary text-white"
              : "border-border bg-white text-primary hover:bg-primary-light"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}