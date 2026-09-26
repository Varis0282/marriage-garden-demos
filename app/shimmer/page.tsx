"use client";

import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { eventTypes, services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, FadeIn, SectionHead, StatsBand, VenueCard, WhyGrid, ReviewMarquee, FAQList, MapBlock, CTABand, Counter, glass } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 text-center lg:pt-24">
        <FadeIn>
          <p className="mx-auto mb-5 w-fit rounded-full border border-white/15 bg-white/5 px-5 py-1.5 text-sm text-[#E8C97E]">
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-7xl">
            {t.hero.title}{" "}
            <span className="bg-gradient-to-r from-[#F45B8C] via-[#E8C97E] to-[#7C3AED] bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[#B9A6CD]">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-8 py-3.5 font-bold text-white shadow-xl shadow-[#F45B8C]/30 transition-transform hover:scale-105">
              <CalendarCheck className="h-5 w-5" /> {t.hero.cta1}
            </Link>
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="relative mt-14">
          <img src={img.hero} alt="Wedding at Utsav Garden" className="h-[420px] w-full rounded-3xl object-cover shadow-2xl shadow-[#7C3AED]/20" />
          <div className={`absolute -bottom-6 left-6 px-5 py-3 ${glass}`}>
            <p className="text-2xl font-extrabold text-[#E8C97E]"><Counter value="4.7★" /></p>
            <p className="text-xs text-[#B9A6CD]">900+ reviews</p>
          </div>
          <div className={`absolute -top-6 right-6 px-5 py-3 ${glass}`}>
            <p className="text-2xl font-extrabold text-[#F45B8C]"><Counter value="1,500" /></p>
            <p className="text-xs text-[#B9A6CD]">guest capacity</p>
          </div>
        </FadeIn>
      </section>

      <StatsBand />

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.venues} title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
          <div className="grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.12}><VenueCard i={i} /></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Utsav" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <WhyGrid />
        </div>
      </section>

      {/* Event types */}
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
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const d = pick(s, lang);
              return (
                <FadeIn key={s.icon + d.title} delay={i * 0.07} className={`p-6 ${glass} transition-colors hover:bg-white/[0.1]`}>
                  <Icon name={s.icon} className="h-7 w-7 text-[#E8C97E]" />
                  <h3 className="mt-3 font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#B9A6CD]">{d.desc}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews marquee */}
      <section className="py-14">
        <SectionHead eyebrow="4.7★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <ReviewMarquee />
      </section>

      {/* Gallery */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={i * 0.05} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <Link href={`${BASE}/gallery`} className="block h-full overflow-hidden rounded-2xl">
                  <img src={g} alt={`Event moment ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
