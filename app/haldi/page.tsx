"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { eventTypes, services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, StatsBand, VenueCard, WhyGrid, ReviewCard, FAQList, MapBlock, CTABand, Squiggle, Confetti } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Confetti />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-4 inline-block -rotate-1 rounded-full bg-[#FCE4EE] px-5 py-2 text-sm font-extrabold text-[#D6336C]">
              {t.hero.badge}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-[#5C4A33] md:text-6xl">
              {t.hero.title} <span className="text-[#D6336C]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="ml-1 text-[#E9A319] !mx-0" />
            <p className="mt-5 max-w-lg text-[#8A6F4D]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="flex items-center gap-2 rounded-full bg-[#D6336C] px-7 py-3.5 font-extrabold text-white shadow-xl shadow-pink-500/25 transition-transform hover:-rotate-1 hover:scale-105">
                <CalendarCheck className="h-5 w-5" /> {t.hero.cta1}
              </Link>
              <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-[3px] border-[#2E7D5B] px-7 py-3.5 font-extrabold text-[#2E7D5B] transition-colors hover:bg-[#2E7D5B] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Wedding celebration at Utsav Garden" className="h-[420px] w-full rotate-2 rounded-[2rem] border-8 border-white object-cover shadow-2xl transition-transform hover:rotate-0" />
            <div className="absolute -bottom-5 -left-3 -rotate-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#E9A319]">4.7★</p>
              <p className="text-xs font-bold text-[#8A6F4D]">900+ Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.venues} title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
          <div className="grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => <VenueCard key={i} i={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#FBEED0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>

      {/* Event types */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {eventTypes.map((ev, i) => {
              const d = pick(ev, lang);
              return (
                <div key={ev.icon} className={`rounded-3xl bg-white p-5 text-center shadow-md shadow-amber-900/5 ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCE4EE] text-[#D6336C]">
                    <Icon name={ev.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-3xl font-extrabold text-[#E9A319]">{ev.count}</p>
                  <h3 className="mt-1 font-extrabold text-[#5C4A33]">{d.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#FBEED0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const d = pick(s, lang);
              return (
                <div key={s.icon + d.title} className="rounded-3xl bg-white p-6 shadow-md shadow-amber-900/5 transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F5EC] text-[#2E7D5B]">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-3 text-lg font-extrabold text-[#5C4A33]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8A6F4D]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.7★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => <ReviewCard key={i} i={i} />)}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {img.gallery.map((g, i) => (
              <Link key={g} href={`${BASE}/gallery`} className={`overflow-hidden rounded-2xl border-4 border-white shadow-md ${i === 0 ? "col-span-2 row-span-2" : ""} ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                <img src={g} alt={`Event moment ${i + 1}`} className="h-full w-full object-cover" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBEED0] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
