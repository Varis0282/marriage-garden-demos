"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import { BASE, TEAL, PageHero, NumHead, WhyList, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero n="Services" title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="mx-auto max-w-6xl px-4">
        {services.map((s, i) => {
          const d = pick(s, lang);
          return (
            <div key={s.icon + d.title} className="grid gap-3 border-b border-[#D8D3C8] py-8 md:grid-cols-12 md:items-baseline">
              <span className={`font-display text-sm md:col-span-1 ${TEAL}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-3xl md:col-span-4">{d.title}</h3>
              <p className="text-[#6E695F] md:col-span-7">{d.desc}</p>
            </div>
          );
        })}
        <Link href={`${BASE}/contact`} className={`mt-8 inline-flex items-center gap-1 text-lg font-bold underline underline-offset-4 ${TEAL}`}>
          {t.hero.cta1} <ArrowUpRight className="h-5 w-5" />
        </Link>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="01" label="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="mt-6">
          <WhyList />
        </div>
      </section>
      <CTABand />
    </>
  );
}
