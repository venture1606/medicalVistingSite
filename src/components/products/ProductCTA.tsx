import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRODUCT_DETAIL_CONTENT, WHATSAPP_BASE_URL } from "@/lib/constants";

interface ProductCTAProps {
  productName: string;
}

export function ProductCTA({ productName }: ProductCTAProps) {
  const message = encodeURIComponent(`Hi, I'm interested in ${productName}. Can you help me?`);

  return (
    <div className="space-y-4">
      <Button asChild className="h-12 w-full bg-whatsapp text-white hover:bg-whatsapp/90">
        <a href={`${WHATSAPP_BASE_URL}?text=${message}`} target="_blank" rel="noreferrer">
          <MessageCircle className="size-5" />
          {PRODUCT_DETAIL_CONTENT.whatsappCta}
        </a>
      </Button>
      <p className="text-center text-base text-text-secondary">{PRODUCT_DETAIL_CONTENT.deliveryHint}</p>
    </div>
  );
}