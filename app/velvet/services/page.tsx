"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, GOLD, hairline, PageHero, SectionHead, WhyGrid, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className={`grid gap-px bg-[#E4CE9A]/15 md:grid-cols-2 ${hairline}`}>
            {services.map((s, i) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon + d.title} className="flex gap-6 bg-[#08281F] p-9 transition-colors hover:bg-[#0C3227]">
                  <p className={`font-display text-2xl ${GOLD}`}>{String(i + 1).padStart(2, "0")}</p>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon name={s.icon} className="h-5 w-5 text-[#E4CE9A]" />
                      <h3 className={`font-display text-2xl ${GOLD}`}>{d.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-[#9FB3A5]">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-14 text-center">
            <Link href={`${BASE}/contact`} className="bg-[#E4CE9A] px-9 py-3.5 font-bold uppercase tracking-[0.15em] text-[#08281F] transition-colors hover:bg-[#F0E2BD]">
              {t.hero.cta1}
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>
      <CTABand />
    </>
  );
}
