"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand, GOLD, hairline } from "../_ui";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 lg:grid-cols-2">
        <div className={`p-3 ${hairline}`}>
          <img src={img.about} alt="Wedding at Utsav" className="h-[440px] w-full object-cover grayscale-[30%] transition-all duration-700 hover:grayscale-0" />
        </div>
        <div className="space-y-6 text-[#B9C7BD]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className={`font-display text-lg italic ${GOLD}`}>{a.story3}</p>
        </div>
      </section>
      <StatsBand />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={a.missionTitle} title={a.missionTitle} sub={a.mission} />
          <div className={`grid gap-px bg-[#E4CE9A]/15 sm:grid-cols-2 lg:grid-cols-4 ${hairline}`}>
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#08281F] p-8 text-center transition-colors hover:bg-[#0C3227]">
                <p className={`font-display text-3xl ${GOLD}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`font-display mt-3 text-xl ${GOLD}`}>{v.title}</h3>
                <p className="mt-3 text-sm text-[#9FB3A5]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
