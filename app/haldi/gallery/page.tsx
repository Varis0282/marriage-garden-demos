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
          <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {photos.map((p, i) => (
              <img key={p + i} src={p} alt={`Celebration moment ${i + 1}`} className={`w-full break-inside-avoid rounded-2xl border-4 border-white shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FBEED0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((ev, i) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className={`rounded-3xl bg-white p-5 text-center shadow-md shadow-amber-900/5 ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                  <Icon name={ev.icon} className="mx-auto h-6 w-6 text-[#D6336C]" />
                  <p className="mt-2 text-3xl font-extrabold text-[#E9A319]">{ev.count}</p>
                  <h3 className="mt-1 text-sm font-extrabold text-[#5C4A33]">{d.title}</h3>
                  <p className="mt-1 text-xs text-[#8A6F4D]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-14">
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
