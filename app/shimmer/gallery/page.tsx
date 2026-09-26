"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { eventTypes } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, ReviewMarquee, CTABand, FadeIn, Counter, glass } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const photos = [...img.gallery, ...img.events, ...img.extra];
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
            {photos.map((p, i) => (
              <FadeIn key={p + i} delay={(i % 3) * 0.06}>
                <img src={p} alt={`Celebration moment ${i + 1}`} className="w-full break-inside-avoid rounded-2xl transition-transform hover:scale-[1.02]" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((ev, i) => {
              const d = pick(ev, lang);
              return (
                <FadeIn key={ev.icon} delay={i * 0.08} className={`p-5 text-center ${glass}`}>
                  <Icon name={ev.icon} className="mx-auto h-6 w-6 text-[#F45B8C]" />
                  <p className="mt-2 text-3xl font-extrabold text-[#E8C97E]"><Counter value={ev.count} /></p>
                  <h3 className="mt-1 text-sm font-bold text-white">{d.title}</h3>
                  <p className="mt-1 text-xs text-[#B9A6CD]">{d.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-14">
        <SectionHead eyebrow="4.7★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewMarquee />
      </section>
      <CTABand />
    </>
  );
}
