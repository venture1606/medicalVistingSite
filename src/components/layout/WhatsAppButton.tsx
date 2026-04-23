import { MessageCircle } from "lucide-react";

import { UI_LABELS, WHATSAPP_BASE_URL } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
      <a
        href={WHATSAPP_BASE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label={UI_LABELS.chatWithUs}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:bg-whatsapp/90"
      >
        <MessageCircle className="size-6" />
      </a>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-text-primary px-3 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
        {UI_LABELS.chatWithUs}
      </span>
    </div>
  );
}