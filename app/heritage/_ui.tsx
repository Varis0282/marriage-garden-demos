"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Star, MapPin, Gem, Clock } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, stats, venues, reviews, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/heritage";
const MAROON = "text-[#7B1E3A]";

export function useNavLinks() {
  const { t } = useLang();
  return [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/venues`, label: t.nav.venues },
    { href: `${BASE}/services`, label: t.nav.services },
    { href: `${BASE}/gallery`, label: t.nav.gallery },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = useNavLinks();
  return (
    <header className="sticky top-0 z-40 bg-[#FDF9F3]/95 shadow-sm backdrop-blur">
      <div className="bg-[#7B1E3A] text-[#F3E3C8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5 text-[#C9A227]" /> {inst.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#C9A227]" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#C9A227] bg-[#7B1E3A] text-[#F3E3C8]">
            <Gem className="h-5 w-5" />
          </span>
          <span className={`font-display text-xl font-bold leading-tight ${MAROON}`}>
            {lang === "en" ? inst.name : inst.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[#6B5560] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#7B1E3A]">
              {l.label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact`}
            className="rounded-full bg-[#7B1E3A] px-6 py-2.5 text-[#F3E3C8] shadow-md shadow-rose-900/20 transition-colors hover:bg-[#5E1029]"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#EADFCE] bg-[#FDF9F3] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#EADFCE] py-3 font-semibold">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-[#7B1E3A] px-5 py-3 text-center font-semibold text-[#F3E3C8]">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

/** Gold rule + serif heading */
export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C9A227]">
          <span className="h-px w-8 bg-[#C9A227]" /> {eyebrow} <span className="h-px w-8 bg-[#C9A227]" />
        </p>
      )}
      <h2 className={`font-display text-4xl font-bold md:text-5xl ${light ? "text-[#F3E3C8]" : MAROON}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-[#D9C9B2]" : "text-[#8A7280]"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#7B1E3A] py-20 text-center">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${img.heroAlt})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative">
        <h1 className="font-display text-4xl font-bold text-[#F3E3C8] md:text-6xl">{title}</h1>
        <div className="mx-auto mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-[#C9A227]" />
          <Gem className="h-4 w-4 text-[#C9A227]" />
          <span className="h-px w-12 bg-[#C9A227]" />
        </div>
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-[#D9C9B2]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#C9A227] text-[#C9A227]" : "fill-[#E5DACB] text-[#E5DACB]"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-[#C9A227]/40 bg-[#7B1E3A] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="font-display text-4xl font-bold text-[#C9A227] md:text-5xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-[#D9C9B2]">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VenueCard({ i, full = false }: { i: number; full?: boolean }) {
  const { lang, t } = useLang();
  const v = venues[i];
  const d = v[lang];
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#EADFCE] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <img src={img.venues[v.img]} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-[#7B1E3A]/90 px-4 py-1 text-xs font-bold text-[#F3E3C8]">
          {lang === "en" ? v.capacity : v.capacityHi}
        </span>
      </div>
      <div className="p-6">
        <h3 className={`font-display text-2xl font-bold ${MAROON}`}>{d.name}</h3>
        <p className="mt-2 text-sm text-[#8A7280]">{d.desc}</p>
        {full && (
          <ul className="mt-4 space-y-2 text-sm">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Gem className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C9A227]" /> {f}
              </li>
            ))}
          </ul>
        )}
        <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-full border border-[#7B1E3A] px-5 py-2 text-sm font-bold text-[#7B1E3A] transition-colors hover:bg-[#7B1E3A] hover:text-[#F3E3C8]">
          {t.nav.book} →
        </Link>
      </div>
    </div>
  );
}

export function WhyGrid() {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((w) => {
        const d = pick(w, lang);
        return (
          <div key={w.icon} className="rounded-2xl border border-[#EADFCE] bg-white p-6 text-center shadow-sm">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FDF3E3] text-[#7B1E3A]">
              <Icon name={w.icon} className="h-6 w-6" />
            </span>
            <h3 className={`font-display text-xl font-bold ${MAROON}`}>{d.title}</h3>
            <p className="mt-2 text-sm text-[#8A7280]">{d.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ReviewCard({ i }: { i: number }) {
  const { lang } = useLang();
  const r = reviews[i];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#EADFCE] bg-white p-6 shadow-sm">
      <Stars n={r.stars} />
      <p className="mt-3 flex-1 text-sm italic text-[#6B5560]">“{lang === "en" ? r.en : r.hi}”</p>
      <div className="mt-4 border-t border-[#EADFCE] pt-3">
        <p className={`font-bold ${MAROON}`}>{r.name}</p>
        <p className="text-xs text-[#A08D96]">{r.area}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-[#EADFCE] bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#4A3A41]"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#C9A227] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-[#EADFCE] px-5 py-4 text-[#8A7280]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-[#EADFCE] bg-white p-6 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 font-display text-2xl font-bold ${MAROON}`}>
            <MapPin className="h-5 w-5 text-[#C9A227]" /> {lang === "en" ? inst.name : inst.nameHi}
          </h3>
          <p className="mb-4 text-[#6B5560]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-[#6B5560]">
            {inst.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-[#4A3A41]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#7B1E3A] px-6 py-2.5 text-sm font-semibold text-[#F3E3C8] hover:bg-[#5E1029]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[#EADFCE] shadow-sm lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Venue location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-20">
      <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#7B1E3A]/85" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-display text-4xl font-bold text-[#F3E3C8] md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-[#D9C9B2]">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#C9A227] px-8 py-3.5 font-bold text-[#3D2430] shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#F3E3C8]/60 px-8 py-3.5 font-bold text-[#F3E3C8] transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="bg-[#3D2430] pt-14 text-[#D9C9B2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227] bg-[#7B1E3A] text-[#F3E3C8]">
              <Gem className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-[#F3E3C8]">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-[#B79DA9]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-[#F3E3C8]">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#C9A227]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-[#F3E3C8]">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#B79DA9]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#C9A227]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-[#F3E3C8]">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#B79DA9]">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-[#F3E3C8]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#A08D96]">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-2xl border border-[#EADFCE] bg-white p-6 shadow-sm sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#7B1E3A]",
  input: "w-full rounded-lg border border-[#E0D2BD] bg-white px-4 py-2.5 text-[#4A3A41] outline-none transition-colors placeholder:text-[#B7A594] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/25",
  select: "w-full rounded-lg border border-[#E0D2BD] bg-white px-4 py-2.5 text-[#4A3A41] outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/25",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
