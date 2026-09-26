"use client";

import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand } from "../_ui";
import { Gem } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border-2 border-[#C9A227]/40" />
          <img src={img.about} alt="Wedding celebration at Utsav" className="relative h-[440px] w-full rounded-3xl object-cover shadow-xl" />
        </div>
        <div className="space-y-5 text-[#6B5560]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-[#7B1E3A]">{a.story3}</p>
        </div>
      </section>
      <StatsBand />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={a.missionTitle} title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#EADFCE] bg-white p-6 text-center shadow-sm">
                <Gem className="mx-auto mb-3 h-6 w-6 text-[#C9A227]" />
                <h3 className="font-display text-xl font-bold text-[#7B1E3A]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#8A7280]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
