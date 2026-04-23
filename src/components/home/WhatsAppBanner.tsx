import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_BANNER_CONTENT, WHATSAPP_BASE_URL } from "@/lib/constants";

export function WhatsAppBanner() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary-dark p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-bold text-white">{WHATSAPP_BANNER_CONTENT.title}</h2>
            <p className="mt-2 max-w-2xl text-primary-light">{WHATSAPP_BANNER_CONTENT.subtitle}</p>
          </div>
          <Button asChild className="h-12 bg-whatsapp px-8 text-white hover:bg-whatsapp/90">
            <a href={WHATSAPP_BASE_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> {WHATSAPP_BANNER_CONTENT.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}