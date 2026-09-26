"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { eventTypes, services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, GOLD, hairline, Eyebrow, SectionHead, StatsBand, VenueRow, WhyGrid, ReviewCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E4CE9A]/15">
        <img src={img.hero} alt="Wedding at Utsav Garden" className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale-[30%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08281F]/70 via-[#08281F]/40 to-[#08281F]" />
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center md:py-40">
          <Eyebrow>{t.hero.badge}</Eyebrow>
          <h1 className={`font-display text-5xl leading-tight md:text-7xl ${GOLD}`}>
            {t.hero.title}
            <br />
            <span className="italic text-[#F6F1E5]">{t.hero.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[#B9C7BD]">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="bg-[#E4CE9A] px-9 py-3.5 font-bold uppercase tracking-[0.15em] text-[#08281F] transition-colors hover:bg-[#F0E2BD]">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border border-[#E4CE9A]/50 px-9 py-3.5 font-semibold uppercase tracking-[0.15em] text-[#E4CE9A] transition-colors hover:bg-[#E4CE9A]/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Venues — editorial rows */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-20 px-4">
          <SectionHead eyebrow={t.nav.venues} title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
          {[0, 1, 2].map((i) => <VenueRow key={i} i={i} flip={i % 2 === 1} />)}
        </div>
      </section>

      {/* Why */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={inst.shortName} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>

      {/* Event types */}
      <section className="border-y border-[#E4CE9A]/15 bg-[#0A2D23] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-px bg-[#E4CE9A]/15 sm:grid-cols-2 lg:grid-cols-5 border border-[#E4CE9A]/20">
            {eventTypes.map((ev) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className="bg-[#0A2D23] p-7 text-center transition-colors hover:bg-[#0E3A2D]">
                  <Icon name={ev.icon} className="mx-auto h-6 w-6 text-[#E4CE9A]" />
                  <p className={`font-display mt-3 text-4xl ${GOLD}`}>{ev.count}</p>
                  <h3 className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9FB3A5]">{d.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className={`grid gap-px bg-[#E4CE9A]/15 md:grid-cols-2 lg:grid-cols-3 ${hairline}`}>
            {services.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon + d.title} className="bg-[#08281F] p-8 transition-colors hover:bg-[#0C3227]">
                  <Icon name={s.icon} className="h-6 w-6 text-[#E4CE9A]" />
                  <h3 className={`font-display mt-4 text-xl ${GOLD}`}>{d.title}</h3>
                  <p className="mt-3 text-sm text-[#9FB3A5]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.7" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => <ReviewCard key={i} i={i} />)}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {img.gallery.map((g, i) => (
              <Link key={g} href={`${BASE}/gallery`} className={`overflow-hidden ${hairline} p-1.5 ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={g} alt={`Event moment ${i + 1}`} className="h-full w-full object-cover grayscale-[35%] transition-all duration-500 hover:scale-105 hover:grayscale-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E4CE9A]/15 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
