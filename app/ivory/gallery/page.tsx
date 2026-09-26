"use client";

import { useLang, pick } from "@/lib/lang";
import { img } from "@/lib/config";
import { eventTypes, reviews } from "@/lib/content";
import { PageHero, NumHead, ReviewRow, CTABand } from "../_ui";

export default function Gallery() {
  const { t, lang } = useLang();
  const photos = [...img.gallery, ...img.events, ...img.extra];
  return (
    <>
      <PageHero n="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="mx-auto max-w-6xl px-4">
        <div className="columns-2 gap-2 md:columns-3 [&>*]:mb-2">
          {photos.map((p, i) => (
            <img key={p + i} src={p} alt={`Celebration moment ${i + 1}`} className="w-full break-inside-avoid object-cover grayscale transition-all duration-500 hover:grayscale-0" />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="01" label={t.nav.gallery} title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5">
          {eventTypes.map((ev, i) => {
            const d = pick(ev, lang);
            return (
              <div key={ev.icon} className={`border-b border-[#D8D3C8] py-8 pr-6 ${i > 0 ? "md:border-l md:pl-6" : ""}`}>
                <p className="font-display text-4xl">{ev.count}</p>
                <h3 className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A857B]">{d.title}</h3>
                <p className="mt-2 text-xs text-[#6E695F]">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="02" label="4.7 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        {reviews.map((_, i) => <ReviewRow key={i} i={i} />)}
      </section>
      <CTABand />
    </>
  );
}
