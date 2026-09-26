"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand, FadeIn, glass } from "../_ui";
import { Sparkles } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 lg:grid-cols-2">
        <FadeIn>
          <img src={img.about} alt="Wedding celebration" className="h-[440px] w-full rounded-3xl object-cover shadow-2xl shadow-[#7C3AED]/20" />
        </FadeIn>
        <FadeIn delay={0.15} className="space-y-5 text-[#C9B8DB]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-[#E8C97E]">{a.story3}</p>
        </FadeIn>
      </section>
      <StatsBand />
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={a.missionTitle} title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1} className={`p-6 text-center ${glass}`}>
                <Sparkles className="mx-auto mb-3 h-6 w-6 text-[#F45B8C]" />
                <h3 className="font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-[#B9A6CD]">{v.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
