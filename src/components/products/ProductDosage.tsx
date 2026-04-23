import { ListChecks } from "lucide-react";

import { PRODUCT_DETAIL_CONTENT } from "@/lib/constants";

interface ProductDosageProps {
  dosageProtocol: string[];
}

export function ProductDosage({ dosageProtocol }: ProductDosageProps) {
  return (
    <div className="rounded-lg border border-border bg-primary-light/50 p-5">
      <h3 className="flex items-center gap-2 text-2xl font-semibold text-text-primary">
        <ListChecks className="size-5 text-primary" />
        {PRODUCT_DETAIL_CONTENT.dosageTitle}
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-lg text-text-secondary">
        {dosageProtocol.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </div>
  );
}