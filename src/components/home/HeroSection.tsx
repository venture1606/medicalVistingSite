import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HERO_CONTENT, UI_LABELS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:gap-14 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="inline-flex rounded-full bg-primary-light px-4 py-1 text-xs font-semibold tracking-[0.12em] text-primary">
            {HERO_CONTENT.label}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-primary-dark sm:text-5xl">
            {HERO_CONTENT.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">{HERO_CONTENT.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="h-11 bg-primary px-6 text-white hover:bg-primary-dark">
              <Link href="/products">{HERO_CONTENT.primaryCta}</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 border-border px-6 text-primary hover:bg-primary-light">
              <Link href="/#about">{UI_LABELS.learnMore}</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <Image
            src={HERO_CONTENT.imageUrl}
            alt={HERO_CONTENT.title}
            width={900}
            height={720}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}