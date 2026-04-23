import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { PRODUCT_LISTING_CONTENT } from "@/lib/constants";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-secondary" />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={PRODUCT_LISTING_CONTENT.searchPlaceholder}
        className="h-12 border-border bg-white pl-10 text-base"
      />
    </div>
  );
}