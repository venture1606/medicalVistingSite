import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary-dark">
          <Image
            src={ABOUT_CONTENT.imageUrl}
            alt={ABOUT_CONTENT.title}
            width={900}
            height={900}
            className="h-full w-full object-cover opacity-80"
          />
          <p className="absolute bottom-6 left-6 text-lg font-semibold tracking-[0.08em] text-cyan-200">
            {ABOUT_CONTENT.overlayLabel}
          </p>
        </div>
        <div>
          <h2 className="inline-block border-b-4 border-primary pb-2 text-3xl font-bold text-primary-dark md:text-4xl">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">{ABOUT_CONTENT.body}</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                <CheckCircle2 className="size-5 text-primary" /> {ABOUT_CONTENT.missionTitle}
              </h3>
              <p className="text-text-secondary">{ABOUT_CONTENT.missionBody}</p>
            </article>
            <article className="space-y-2">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
                <Star className="size-5 text-primary" /> {ABOUT_CONTENT.valuesTitle}
              </h3>
              <p className="text-text-secondary">{ABOUT_CONTENT.valuesBody}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}