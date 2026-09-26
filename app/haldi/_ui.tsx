"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Star, MapPin, PartyPopper, Clock } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, stats, venues, reviews, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/haldi";
const PINK = "text-[#D6336C]";

/** Hand-drawn squiggle underline */
export function Squiggle({ className = "text-[#E9A319]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`mx-auto mt-2 h-3 w-28 ${className}`} fill="none" aria-hidden>
      <path d="M2 8c10-6 20 4 30-2s20 4 30-2 20 4 30-2 16 2 26 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Confetti dots decoration */
export function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        "left-[8%] top-[15%] bg-[#D6336C]",
        "left-[85%] top-[12%] bg-[#E9A319]",
        "left-[15%] top-[75%] bg-[#2E7D5B]",
        "left-[92%] top-[65%] bg-[#D6336C]",
        "left-[45%] top-[8%] bg-[#2E7D5B]",
        "left-[70%] top-[85%] bg-[#E9A319]",
      ].map((c, i) => (
        <span key={i} className={`absolute h-3 w-3 rounded-full opacity-40 ${c}`} />
      ))}
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
    <header className="sticky top-0 z-40 bg-[#FFF7E6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 rotate-3 items-center justify-center rounded-2xl bg-[#E9A319] text-white shadow-md shadow-amber-500/30 transition-transform hover:rotate-6">
            <PartyPopper className="h-6 w-6" />
          </span>
          <span className={`text-lg font-extrabold leading-tight ${PINK}`}>{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[15px] font-bold text-[#8A6F4D] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#D6336C]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs font-semibold text-[#B99B6B] hover:text-[#D6336C]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#2E7D5B] px-3 py-1 text-sm font-bold text-[#2E7D5B] hover:bg-[#2E7D5B] hover:text-white" />
          <Link
            href={`${BASE}/contact`}
            className="rounded-full bg-[#D6336C] px-6 py-2.5 text-white shadow-lg shadow-pink-500/25 transition-transform hover:-rotate-1 hover:scale-105"
          >
            {t.nav.book}
          </Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle className="rounded-full border-2 border-[#2E7D5B] px-3 py-1 text-sm font-bold text-[#2E7D5B]" />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t-2 border-dashed border-[#E9A319]/50 bg-[#FFF7E6] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#F3E3C2] py-3 font-bold">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#D6336C] px-5 py-3 text-center font-bold text-white">
              {t.nav.book}
            </Link>
            <Link href="/" onClick={() => setOpen(false)} className="rounded-full border-2 border-[#E9A319] px-4 py-3 text-sm font-bold text-[#B07A10]">
              ← All demos
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className={`mb-1 text-sm font-extrabold uppercase tracking-widest ${light ? "text-[#FFD68A]" : "text-[#2E7D5B]"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : PINK}`}>{title}</h2>
      <Squiggle className={light ? "text-[#FFD68A]" : "text-[#E9A319]"} />
      {sub && <p className={`mt-3 ${light ? "text-amber-100" : "text-[#8A6F4D]"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#FBEED0] py-16 text-center">
      <Confetti />
      <div className="relative">
        <h1 className={`text-4xl font-extrabold md:text-5xl ${PINK}`}>{title}</h1>
        <Squiggle />
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-[#8A6F4D]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#E9A319] text-[#E9A319]" : "fill-[#EEDFC2] text-[#EEDFC2]"}`} />
      ))}
    </div>
  );
}

const statColors = ["bg-[#FDE9D8] text-[#C2410C]", "bg-[#E7F5EC] text-[#2E7D5B]", "bg-[#FCE4EE] text-[#D6336C]", "bg-[#FFF3CD] text-[#B07A10]"];

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={`rounded-3xl px-4 py-7 ${statColors[i % 4]} ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
            <p className="text-4xl font-extrabold">{s.value}</p>
            <p className="mt-1 text-sm font-bold opacity-80">{s[lang]}</p>
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
  const tilts = ["-rotate-1", "rotate-1", "-rotate-1"];
  return (
    <div className={`group rounded-[2rem] border-4 border-white bg-white shadow-xl shadow-amber-900/10 transition-all hover:rotate-0 hover:shadow-2xl ${tilts[i % 3]}`}>
      <div className="overflow-hidden rounded-t-[1.7rem]">
        <img src={img.venues[v.img]} alt={d.name} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-[#E7F5EC] px-4 py-1 text-xs font-extrabold text-[#2E7D5B]">
          {lang === "en" ? v.capacity : v.capacityHi}
        </span>
        <h3 className={`mt-3 text-2xl font-extrabold ${PINK}`}>{d.name}</h3>
        <p className="mt-2 text-sm text-[#8A6F4D]">{d.desc}</p>
        {full && (
          <ul className="mt-4 space-y-2 text-sm">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <PartyPopper className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E9A319]" /> {f}
              </li>
            ))}
          </ul>
        )}
        <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-full bg-[#E9A319] px-5 py-2 text-sm font-extrabold text-white shadow-md shadow-amber-500/30 transition-transform hover:scale-105">
          {t.nav.book} →
        </Link>
      </div>
    </div>
  );
}

const whyColors = ["bg-[#FCE4EE]", "bg-[#FFF3CD]", "bg-[#E7F5EC]", "bg-[#FDE9D8]"];

export function WhyGrid() {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((w, i) => {
        const d = pick(w, lang);
        return (
          <div key={w.icon} className={`rounded-3xl p-6 text-center ${whyColors[i % 4]} ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D6336C] shadow-sm">
              <Icon name={w.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-extrabold text-[#5C4A33]">{d.title}</h3>
            <p className="mt-2 text-sm text-[#8A6F4D]">{d.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ReviewCard({ i }: { i: number }) {
  const { lang } = useLang();
  const r = reviews[i];
  const initial = r.name.charAt(0);
  const avatarColors = ["bg-[#D6336C]", "bg-[#2E7D5B]", "bg-[#E9A319]", "bg-[#C2410C]", "bg-[#7C3AED]", "bg-[#0E7490]"];
  return (
    <div className="flex h-full flex-col rounded-3xl border-2 border-dashed border-[#E9A319]/60 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-extrabold text-white ${avatarColors[i % 6]}`}>
          {initial}
        </span>
        <div>
          <p className={`font-extrabold ${PINK}`}>{r.name}</p>
          <p className="text-xs text-[#B99B6B]">{r.area}</p>
        </div>
      </div>
      <Stars n={r.stars} />
      <p className="mt-3 flex-1 text-sm text-[#6B573D]">“{lang === "en" ? r.en : r.hi}”</p>
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
          <div key={i} className="overflow-hidden rounded-3xl border-2 border-[#F3E3C2] bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-extrabold text-[#5C4A33]"
            >
              {item.q}
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCE4EE] text-[#D6336C] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && <p className="border-t-2 border-dashed border-[#F3E3C2] px-5 py-4 text-[#8A6F4D]">{item.a}</p>}
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
        <div className="rounded-3xl border-4 border-white bg-[#FBEED0] p-6 shadow-lg">
          <h3 className={`mb-4 flex items-center gap-2 text-xl font-extrabold ${PINK}`}>
            <MapPin className="h-5 w-5 text-[#2E7D5B]" /> {lang === "en" ? inst.name : inst.nameHi}
          </h3>
          <p className="mb-4 text-[#6B573D]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-[#6B573D]">
            {inst.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-extrabold">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#2E7D5B] px-6 py-2.5 text-sm font-extrabold text-white shadow-md hover:bg-[#236348]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border-4 border-white shadow-lg lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Venue location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#D6336C] py-16">
      <Confetti />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <Squiggle className="text-[#FFD68A]" />
        <p className="mt-3 text-pink-100">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#E9A319] px-8 py-3.5 font-extrabold text-white shadow-xl transition-transform hover:-rotate-1 hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border-[3px] border-white/70 px-8 py-3.5 font-extrabold text-white transition-colors hover:bg-white/10">
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
    <footer className="bg-[#4A3524] pt-14 text-[#E8D9BD]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 rotate-3 items-center justify-center rounded-2xl bg-[#E9A319] text-white">
              <PartyPopper className="h-5 w-5" />
            </span>
            <span className="font-extrabold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-[#C9B394]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#FFD68A]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#C9B394]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#FFD68A]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#C9B394]">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-extrabold text-white">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#A8906C]">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-[2rem] border-4 border-white bg-white p-6 shadow-xl shadow-amber-900/10 sm:p-8",
  label: "mb-1.5 block text-sm font-extrabold text-[#D6336C]",
  input: "w-full rounded-2xl border-2 border-[#F3E3C2] bg-[#FFFBF2] px-4 py-2.5 text-[#5C4A33] outline-none transition-colors placeholder:text-[#C9B394] focus:border-[#E9A319] focus:ring-2 focus:ring-amber-200",
  select: "w-full rounded-2xl border-2 border-[#F3E3C2] bg-[#FFFBF2] px-4 py-2.5 text-[#5C4A33] outline-none focus:border-[#E9A319] focus:ring-2 focus:ring-amber-200",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-extrabold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};
