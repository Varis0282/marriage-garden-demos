"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { eventTypes, services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, StatsBand, VenueCard, WhyGrid, ReviewCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/50 bg-[#FDF3E3] px-4 py-1.5 text-sm font-semibold text-[#7B1E3A]">
            <span className="h-2 w-2 rounded-full bg-[#C9A227]" /> {t.hero.badge}
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-[#7B1E3A] md:text-6xl">
            {t.hero.title} <span className="text-[#C9A227]">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-lg text-[#8A7280]">{t.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`${BASE}/contact#book`} className="flex items-center gap-2 rounded-full bg-[#7B1E3A] px-7 py-3.5 font-bold text-[#F3E3C8] shadow-lg shadow-rose-900/20 transition-transform hover:scale-105">
              <CalendarCheck className="h-5 w-5" /> {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#7B1E3A] px-7 py-3.5 font-bold text-[#7B1E3A] transition-colors hover:bg-[#7B1E3A] hover:text-[#F3E3C8]">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl border-2 border-[#C9A227]/40" />
          <img src={img.hero} alt="Indian wedding at Utsav Garden" className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-5 left-6 rounded-2xl bg-white px-5 py-3 shadow-xl">
            <p className="font-display text-2xl font-bold text-[#7B1E3A]">4.7★</p>
            <p className="text-xs text-[#8A7280]">900+ Google reviews</p>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Venues */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.venues} title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
          <div className="grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => <VenueCard key={i} i={i} />)}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#F8F0E3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>

      {/* Event types */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((ev) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className="rounded-2xl border border-[#EADFCE] bg-white p-5 text-center shadow-sm">
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#7B1E3A] text-[#C9A227]">
                    <Icon name={ev.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-display text-3xl font-bold text-[#C9A227]">{ev.count}</p>
                  <h3 className="mt-1 font-bold text-[#7B1E3A]">{d.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-[#7B1E3A] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead light eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon + d.title} className="rounded-2xl border border-[#C9A227]/30 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
                  <Icon name={s.icon} className="h-7 w-7 text-[#C9A227]" />
                  <h3 className="mt-3 font-display text-xl font-bold text-[#F3E3C8]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#D9C9B2]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.7★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => <ReviewCard key={i} i={i} />)}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {img.gallery.map((g, i) => (
              <Link key={g} href={`${BASE}/gallery`} className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                <img src={g} alt={`Event moment ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F0E3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
