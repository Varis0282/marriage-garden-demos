"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, NumHead, StatsRow, CTABand, TEAL } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero n="About" title={a.title} sub={a.sub} />
      <section className="mx-auto max-w-6xl px-4 pt-4">
        <img src={img.about} alt="Wedding at Utsav" className="h-[440px] w-full object-cover grayscale-[20%]" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-[#4A463D]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
          </div>
          <p className={`font-display text-2xl leading-relaxed ${TEAL}`}>{a.story3}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <StatsRow />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="01" label={a.missionTitle} title={a.missionTitle} sub={a.mission} />
        <div className="mt-6 grid gap-x-12 md:grid-cols-2">
          {a.values.map((v, i) => (
            <div key={v.title} className="flex gap-6 border-b border-[#D8D3C8] py-7">
              <span className={`font-display text-lg ${TEAL}`}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm text-[#6E695F]">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
