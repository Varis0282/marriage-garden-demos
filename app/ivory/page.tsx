"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { eventTypes, services } from "@/lib/content";
import { BASE, TEAL, RULE, NumHead, StatsRow, VenueRow, WhyList, ReviewRow, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A857B]">{t.hero.badge}</p>
        <h1 className="font-display mt-6 text-5xl leading-[1.05] md:text-8xl">
          {t.hero.title}
          <br />
          <span className={TEAL}>{t.hero.titleAccent}</span>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-[#D8D3C8] pt-8 lg:grid-cols-2">
          <p className="max-w-md text-lg text-[#6E695F]">{t.hero.sub}</p>
          <div className="flex flex-wrap items-start gap-4 lg:justify-end">
            <Link href={`${BASE}/contact#book`} className="bg-[#1F6E6B] px-8 py-3.5 font-bold text-white transition-colors hover:bg-[#171512]">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#171512] px-8 py-3.5 font-bold transition-colors hover:bg-[#171512] hover:text-[#FAF9F6]">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
        <img src={img.hero} alt="Wedding at Utsav Garden" className="mt-10 h-[480px] w-full object-cover grayscale-[20%]" />
      </section>

      {/* 01 Stats */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <StatsRow />
      </section>

      {/* 02 Venues */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="01" label={t.nav.venues} title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
        {[0, 1, 2].map((i) => <VenueRow key={i} i={i} />)}
      </section>

      {/* 03 Why */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="02" label={inst.shortName} title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="mt-6">
          <WhyList />
        </div>
      </section>

      {/* 04 Events hosted */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="03" label={t.nav.gallery} title={t.sections.eventsTitle} sub={t.sections.eventsSub} />
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5">
          {eventTypes.map((ev, i) => {
            const d = pick(ev, lang);
            return (
              <div key={ev.icon} className={`border-b border-[#D8D3C8] py-8 pr-6 ${i > 0 ? "md:border-l md:pl-6" : ""}`}>
                <p className="font-display text-4xl">{ev.count}</p>
                <h3 className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A857B]">{d.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* 05 Services */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="04" label={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
        <div className="mt-6">
          {services.map((s, i) => {
            const d = pick(s, lang);
            return (
              <div key={s.icon + d.title} className="group grid gap-2 border-b border-[#D8D3C8] py-6 md:grid-cols-12 md:items-baseline">
                <span className={`font-display text-sm md:col-span-1 ${TEAL}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-2xl md:col-span-4">{d.title}</h3>
                <p className="text-sm text-[#6E695F] md:col-span-6">{d.desc}</p>
                <ArrowUpRight className="hidden h-5 w-5 justify-self-end text-[#B8B3A6] transition-colors group-hover:text-[#1F6E6B] md:col-span-1 md:block" />
              </div>
            );
          })}
        </div>
        <Link href={`${BASE}/services`} className={`mt-6 inline-flex items-center gap-1 font-bold underline underline-offset-4 ${TEAL}`}>
          {t.misc.viewAll} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      {/* 06 Reviews */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="05" label="4.7 / 5" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        {[0, 1, 2].map((i) => <ReviewRow key={i} i={i} />)}
      </section>

      {/* 07 Gallery */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="06" label={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-6">
          {img.gallery.map((g, i) => (
            <Link key={g} href={`${BASE}/gallery`} className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={g} alt={`Event moment ${i + 1}`} className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* 08 FAQ */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <NumHead n="07" label="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <div className="mt-6">
          <FAQList />
        </div>
      </section>

      {/* 09 Map */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="08" label={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <div className="mt-8">
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
