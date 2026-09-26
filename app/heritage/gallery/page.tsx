"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { eventTypes, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, SectionHead, ReviewCard, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const photos = [...img.gallery, ...img.events, ...img.extra];
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="columns-2 gap-3 md:columns-3 [&>*]:mb-3">
            {photos.map((p, i) => (
              <img key={p + i} src={p} alt={`Celebration moment ${i + 1}`} className="w-full break-inside-avoid rounded-xl shadow-sm transition-transform hover:scale-[1.02]" />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F0E3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((ev) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className="rounded-2xl border border-[#EADFCE] bg-white p-5 text-center">
                  <Icon name={ev.icon} className="mx-auto h-6 w-6 text-[#C9A227]" />
                  <p className="mt-2 font-display text-3xl font-bold text-[#7B1E3A]">{ev.count}</p>
                  <h3 className="mt-1 text-sm font-bold text-[#6B5560]">{d.title}</h3>
                  <p className="mt-1 text-xs text-[#8A7280]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16">
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
