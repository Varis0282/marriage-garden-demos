"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { eventTypes, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { GOLD, hairline, PageHero, SectionHead, ReviewCard, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const photos = [...img.gallery, ...img.events, ...img.extra];
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
            {photos.map((p, i) => (
              <div key={p + i} className={`break-inside-avoid p-1.5 ${hairline}`}>
                <img src={p} alt={`Celebration moment ${i + 1}`} className="w-full object-cover grayscale-[35%] transition-all duration-500 hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#E4CE9A]/15 bg-[#0A2D23] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className={`grid gap-px bg-[#E4CE9A]/15 sm:grid-cols-2 lg:grid-cols-5 ${hairline}`}>
            {eventTypes.map((ev) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className="bg-[#0A2D23] p-7 text-center">
                  <Icon name={ev.icon} className="mx-auto h-6 w-6 text-[#E4CE9A]" />
                  <p className={`font-display mt-3 text-4xl ${GOLD}`}>{ev.count}</p>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9FB3A5]">{d.title}</h3>
                  <p className="mt-2 text-xs text-[#6E8377]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((_, i) => <ReviewCard key={i} i={i} />)}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
