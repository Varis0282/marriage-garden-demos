"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, SectionHead, WhyGrid, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {services.map((s) => {
            const d = pick(s, lang);
            return (
              <div key={s.icon + d.title} className="flex gap-5 rounded-2xl border border-[#EADFCE] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FDF3E3] text-[#7B1E3A]">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#7B1E3A]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A7280]">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#7B1E3A] px-8 py-3.5 font-bold text-[#F3E3C8] shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <section className="bg-[#F8F0E3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
