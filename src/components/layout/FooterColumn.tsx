import Link from "next/link";

import type { FooterLink } from "@/lib/types";

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="text-center sm:text-left">
      <h4 className="text-base font-semibold text-text-primary">{title}</h4>
      <ul className="mt-4 flex flex-col items-center space-y-2 sm:items-start">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-text-secondary transition hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}