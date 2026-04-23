import { BadgeCheck, FlaskConical, Stethoscope, Truck } from "lucide-react";

import { HOME_SECTIONS, WHY_CHOOSE_ITEMS } from "@/lib/constants";

const ICONS = {
  BadgeCheck,
  Stethoscope,
  Truck,
  FlaskConical,
};

export function WhyChooseUs() {
  return (
    <section className="bg-primary-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{HOME_SECTIONS.whyChooseTitle}</h2>
          <p className="mt-3 text-text-secondary">{HOME_SECTIONS.whyChooseSubtitle}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <article key={item.title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}