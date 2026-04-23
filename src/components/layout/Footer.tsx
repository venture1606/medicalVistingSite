 "use client";

import { usePathname } from "next/navigation";
import { GitBranch, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  COMPANY_NAME,
  FOOTER_CONTENT,
  FOOTER_LINKS,
  FOOTER_TITLES,
  SOCIAL_LINKS,
} from "@/lib/constants";
import type { FooterVariant } from "@/lib/types";

import { FooterColumn } from "./FooterColumn";
import { useSubmitEmail } from "@/hooks/useSubmitEmail";


const ICONS = {
  Github: GitBranch,
  Mail,
};

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = "newsletter" }: FooterProps) {
  const pathname = usePathname();
  const resolvedVariant =
    pathname.startsWith("/products") && variant === "newsletter"
      ? "certifications"
      : variant;
  const isCertifications = resolvedVariant === "certifications";
  const secondTitle = isCertifications
    ? FOOTER_TITLES.navigation
    : FOOTER_TITLES.solutions;
  const thirdTitle = isCertifications
    ? FOOTER_TITLES.legal
    : FOOTER_TITLES.corporate;
  const secondLinks = isCertifications ? FOOTER_LINKS.navigation : FOOTER_LINKS.solutions;
  const thirdLinks = isCertifications ? FOOTER_LINKS.legal : FOOTER_LINKS.corporate;
  const { email, setEmail, handleSubmit } = useSubmitEmail();


  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-extrabold tracking-tight text-primary">{COMPANY_NAME}</h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">{FOOTER_CONTENT.tagline}</p>
            <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICONS[social.label as keyof typeof ICONS];
                return (
                  <Button key={social.label} asChild size="icon" variant="outline" className="size-10 rounded-full border-slate-200 transition-all hover:border-primary hover:text-primary">
                    <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                      <Icon className="size-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
          <FooterColumn title={secondTitle} links={secondLinks} />
          <FooterColumn title={thirdTitle} links={thirdLinks} />
          <div className="text-center sm:text-left">
            <h4 className="text-base font-semibold text-text-primary">
              {isCertifications ? FOOTER_CONTENT.certificationsTitle : FOOTER_CONTENT.newsletterTitle}
            </h4>
            {isCertifications ? (
              <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
                {FOOTER_CONTENT.certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-slate-600 transition-all hover:border-primary hover:bg-primary-light hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <Input
                  placeholder={FOOTER_CONTENT.newsletterPlaceholder}
                  type="email"
                  className="border-slate-200 focus-visible:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full bg-primary font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-dark">
                  {FOOTER_CONTENT.newsletterButton}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary">{FOOTER_CONTENT.copyright}</p>
      </div>
    </footer>
  );
}
