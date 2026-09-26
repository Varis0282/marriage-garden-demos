"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, Plus, Minus, MapPin, ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, stats, venues, reviews, whyUs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/ivory";
export const TEAL = "text-[#1F6E6B]";
export const RULE = "border-t-2 border-[#171512]";

/** Numbered editorial section header: "01 — Venues" */
export function NumHead({ n, label, title, sub }: { n: string; label?: string; title: string; sub?: string }) {
  return (
    <div className={`${RULE} pt-6`}>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-lg text-[#1F6E6B]">{n}</span>
          {label && <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A857B]">{label}</span>}
        </div>
      </div>
      <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-[#6E695F]">{sub}</p>}
    </div>
  );
}

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
    <header className="sticky top-0 z-40 border-b-2 border-[#171512] bg-[#FAF9F6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="font-display text-xl tracking-wide">
          {lang === "en" ? "UTSAV" : "उत्सव"}<span className={TEAL}>.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-4 transition-colors hover:text-[#1F6E6B] hover:underline">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-[#8A857B] hover:text-[#1F6E6B]">← All demos</Link>
          <LangToggle className="border-2 border-[#171512] px-3 py-1 text-xs font-bold hover:bg-[#171512] hover:text-[#FAF9F6]" />
          <Link href={`${BASE}/contact`} className="bg-[#1F6E6B] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#171512]">
            {t.nav.book}
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle className="border-2 border-[#171512] px-3 py-1 text-xs font-bold" />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[#D8D3C8] bg-[#FAF9F6] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#D8D3C8] py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 bg-[#1F6E6B] px-5 py-3 text-center font-bold text-white">
              {t.nav.book}
            </Link>
            <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-xs text-[#8A857B]">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function PageHero({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A857B]">
        {inst.shortName} · Indore · <span className={TEAL}>{n}</span>
      </p>
      <h1 className="font-display mt-4 text-5xl leading-tight md:text-7xl">{title}</h1>
      {sub && <p className="mt-5 max-w-xl text-lg text-[#6E695F]">{sub}</p>}
    </section>
  );
}

export function StatsRow() {
  const { lang } = useLang();
  return (
    <div className={`${RULE} grid grid-cols-2 md:grid-cols-4`}>
      {stats.map((s, i) => (
        <div key={s.value} className={`py-8 pr-6 ${i > 0 ? "border-l border-[#D8D3C8] pl-6" : ""}`}>
          <p className="font-display text-4xl md:text-5xl">{s.value}</p>
          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A857B]">{s[lang]}</p>
        </div>
      ))}
    </div>
  );
}

export function VenueRow({ i, full = false }: { i: number; full?: boolean }) {
  const { lang, t } = useLang();
  const v = venues[i];
  const d = v[lang];
  return (
    <div className="grid gap-8 border-b border-[#D8D3C8] py-10 lg:grid-cols-12">
      <div className="lg:col-span-1">
        <span className="font-display text-lg text-[#1F6E6B]">{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div className="lg:col-span-5">
        <img src={img.venues[v.img]} alt={d.name} className="h-64 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
      </div>
      <div className="lg:col-span-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">{lang === "en" ? v.capacity : v.capacityHi}</p>
        <h3 className="font-display mt-2 text-3xl">{d.name}</h3>
        <p className="mt-3 text-[#6E695F]">{d.desc}</p>
        {full && (
          <ul className="mt-4 space-y-1.5 text-sm text-[#4A463D]">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className={`mt-1 ${TEAL}`}>—</span> {f}
              </li>
            ))}
          </ul>
        )}
        <Link href={`${BASE}/contact`} className={`mt-5 inline-flex items-center gap-1 font-bold underline underline-offset-4 ${TEAL} hover:text-[#171512]`}>
          {t.nav.book} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function WhyList() {
  const { lang } = useLang();
  return (
    <div className="grid gap-x-12 md:grid-cols-2">
      {whyUs.map((w, i) => {
        const d = pick(w, lang);
        return (
          <div key={w.icon} className="flex gap-6 border-b border-[#D8D3C8] py-7">
            <span className="font-display text-lg text-[#1F6E6B]">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-2xl">{d.title}</h3>
              <p className="mt-2 text-sm text-[#6E695F]">{d.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ReviewRow({ i }: { i: number }) {
  const { lang } = useLang();
  const r = reviews[i];
  return (
    <div className="border-b border-[#D8D3C8] py-8">
      <p className="font-display text-xl leading-relaxed md:text-2xl">“{lang === "en" ? r.en : r.hi}”</p>
      <p className="mt-4 text-sm font-bold">
        {r.name} <span className="ml-2 font-normal text-[#8A857B]">{r.area}</span>
        <span className={`ml-3 ${TEAL}`}>{"★".repeat(r.stars)}</span>
      </p>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#D8D3C8]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg md:text-xl">
                <span className={`mr-4 text-sm ${TEAL}`}>{String(i + 1).padStart(2, "0")}</span>
                {item.q}
              </span>
              {isOpen ? <Minus className={`h-5 w-5 shrink-0 ${TEAL}`} /> : <Plus className="h-5 w-5 shrink-0" />}
            </button>
            {isOpen && <p className="pb-6 pl-9 text-[#6E695F]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h3 className="font-display flex items-center gap-2 text-2xl">
          <MapPin className={`h-5 w-5 ${TEAL}`} /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mt-4 text-[#6E695F]">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mt-4 space-y-1 text-sm text-[#6E695F]">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-bold text-[#171512]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex items-center gap-1 font-bold underline underline-offset-4 ${TEAL} hover:text-[#171512]`}>
          {t.misc.getDirections} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="border-2 border-[#171512] lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full grayscale lg:h-96" loading="lazy" title="Venue location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#171512] py-20 text-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8A857B]">{inst.shortName} · Indore</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">{t.sections.ctaTitle}</h2>
        <p className="mt-4 max-w-xl text-[#B8B3A6]">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#1F6E6B] px-8 py-3.5 font-bold text-white transition-colors hover:bg-[#FAF9F6] hover:text-[#171512]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#FAF9F6]/40 px-8 py-3.5 font-bold transition-colors hover:border-[#FAF9F6]">
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
    <footer className="border-t-2 border-[#171512] pt-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">
            {lang === "en" ? "UTSAV" : "उत्सव"}<span className={TEAL}>.</span>
          </p>
          <p className="mt-3 text-sm text-[#6E695F]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:text-[#1F6E6B] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#6E695F]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#1F6E6B]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#6E695F]">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-bold text-[#171512]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#D8D3C8] py-5 text-center text-xs text-[#8A857B]">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#171512] bg-white p-6 sm:p-9",
  label: "mb-2 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#171512]",
  input: "w-full border-0 border-b-2 border-[#171512] bg-transparent px-0 py-2.5 text-[#171512] outline-none transition-colors placeholder:text-[#B8B3A6] focus:border-[#1F6E6B]",
  select: "w-full border-0 border-b-2 border-[#171512] bg-transparent px-0 py-2.5 text-[#171512] outline-none focus:border-[#1F6E6B]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold text-white transition-colors hover:bg-[#171512]",
  success: "border-l-4 border-[#1F6E6B] bg-[#1F6E6B]/10 px-4 py-3 text-sm font-semibold text-[#1F6E6B]",
  error: "border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700",
};
