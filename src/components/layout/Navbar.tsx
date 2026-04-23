"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  COMPANY_NAME,
  NAV_LINKS,
  UI_LABELS,
  WHATSAPP_BASE_URL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-sm backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-primary-dark">
          {COMPANY_NAME.toUpperCase()}
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "border-b-2 border-transparent pb-1 text-sm font-medium text-text-secondary transition hover:text-primary",
                pathname === link.href && "border-primary text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-whatsapp text-white hover:bg-whatsapp/90">
            <a href={WHATSAPP_BASE_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">{UI_LABELS.chatOnWhatsApp}</span>
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label={UI_LABELS.openMenu} />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="border-b border-border py-6 text-center">
                <SheetTitle className="text-xl font-bold tracking-tight text-primary">
                  {COMPANY_NAME}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-center px-6">
                <div className="w-full">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block w-full rounded-lg py-2 text-center text-lg font-semibold text-text-primary transition-colors hover:bg-slate-50 hover:text-primary active:bg-slate-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-10 w-full pt-6 border-t border-border">
                  <Button asChild className="h-14 w-full bg-whatsapp text-lg font-bold text-white shadow-lg shadow-whatsapp/20 hover:bg-whatsapp/90">
                    <a href={WHATSAPP_BASE_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2">
                      <MessageCircle className="size-6" /> {UI_LABELS.chatOnWhatsApp}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
