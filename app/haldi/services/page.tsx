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
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <div key={s.icon + d.title} className={`flex gap-5 rounded-3xl bg-white p-7 shadow-md shadow-amber-900/5 ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"} transition-transform hover:rotate-0`}>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FCE4EE] text-[#D6336C]">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-[#5C4A33]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A6F4D]">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#D6336C] px-8 py-3.5 font-extrabold text-white shadow-xl shadow-pink-500/25 transition-transform hover:-rotate-1 hover:scale-105">
            {t.hero.cta1}
          </Link>
        </div>
      </section>
      <section className="bg-[#FBEED0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
