"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { PageHero, SectionHead, StatsBand, CTABand } from "../_ui";
import { Heart } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const cardColors = ["bg-[#FCE4EE]", "bg-[#FFF3CD]", "bg-[#E7F5EC]", "bg-[#FDE9D8]"];
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2">
        <img src={img.about} alt="Wedding at Utsav" className="h-[440px] w-full -rotate-1 rounded-[2rem] border-8 border-white object-cover shadow-2xl transition-transform hover:rotate-0" />
        <div className="space-y-5 text-[#6B573D]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-extrabold text-[#D6336C]">{a.story3}</p>
        </div>
      </section>
      <StatsBand />
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={a.missionTitle} title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className={`rounded-3xl p-6 text-center ${cardColors[i % 4]} ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                <Heart className="mx-auto mb-3 h-6 w-6 text-[#D6336C]" />
                <h3 className="font-extrabold text-[#5C4A33]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#8A6F4D]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
