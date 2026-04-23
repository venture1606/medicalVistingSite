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

  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-text-primary">{COMPANY_NAME}</h3>
            <p className="mt-4 text-sm leading-6 text-text-secondary">{FOOTER_CONTENT.tagline}</p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = ICONS[social.label as keyof typeof ICONS];
                return (
                  <Button key={social.label} asChild size="icon" variant="outline" className="size-9">
                    <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                      <Icon className="size-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
          <FooterColumn title={secondTitle} links={secondLinks} />
          <FooterColumn title={thirdTitle} links={thirdLinks} />
          <div>
            <h4 className="text-base font-semibold text-text-primary">
              {isCertifications ? FOOTER_CONTENT.certificationsTitle : FOOTER_CONTENT.newsletterTitle}
            </h4>
            {isCertifications ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {FOOTER_CONTENT.certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-primary-light px-3 py-2 text-xs font-semibold text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <form className="mt-4 space-y-3">
                <Input placeholder={FOOTER_CONTENT.newsletterPlaceholder} type="email" />
                <Button className="w-full bg-primary text-white hover:bg-primary-dark">
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
