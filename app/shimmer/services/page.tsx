"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, SectionHead, WhyGrid, CTABand, FadeIn, glass } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <FadeIn key={s.icon + d.title} delay={i * 0.07} className={`flex gap-5 p-7 ${glass}`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F45B8C]/25 to-[#7C3AED]/25 text-[#E8C97E]">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#B9A6CD]">{d.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn className="mt-12 text-center">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-8 py-3.5 font-bold text-white shadow-xl shadow-[#F45B8C]/30 transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
        </FadeIn>
      </section>
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
