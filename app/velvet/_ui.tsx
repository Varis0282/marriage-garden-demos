"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Star, MapPin, Crown, Clock } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, stats, venues, reviews, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/velvet";
export const GOLD = "text-[#E4CE9A]";
export const hairline = "border border-[#E4CE9A]/20";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#B49E62]">
      <span className="h-px w-10 bg-[#B49E62]/60" /> {children} <span className="h-px w-10 bg-[#B49E62]/60" />
    </p>
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
    <header className="sticky top-0 z-40 border-b border-[#E4CE9A]/15 bg-[#08281F]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-3">
          <span className={`flex h-10 w-10 items-center justify-center ${hairline} text-[#E4CE9A]`}>
            <Crown className="h-5 w-5" />
          </span>
          <span className={`font-display text-lg leading-tight ${GOLD}`}>{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#9FB3A5] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#E4CE9A]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-[11px] normal-case tracking-normal text-[#6E8377] hover:text-[#E4CE9A]">← All demos</Link>
          <LangToggle className={`px-3 py-1 text-xs ${hairline} hover:bg-[#E4CE9A]/10`} />
          <Link href={`${BASE}/contact`} className="border border-[#E4CE9A] px-6 py-2.5 text-[#E4CE9A] transition-colors hover:bg-[#E4CE9A] hover:text-[#08281F]">
            {t.nav.book}
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle className={`px-3 py-1 text-xs ${hairline}`} />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[#E4CE9A]/15 bg-[#08281F] px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#E4CE9A]/10 py-3 text-sm font-semibold uppercase tracking-[0.15em]">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 border border-[#E4CE9A] px-5 py-3 text-center font-semibold text-[#E4CE9A]">
              {t.nav.book}
            </Link>
            <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-xs text-[#6E8377]">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`font-display text-3xl md:text-5xl ${GOLD}`}>{title}</h2>
      {sub && <p className="mt-4 text-[#9FB3A5]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="border-b border-[#E4CE9A]/15 py-20 text-center">
      <Eyebrow>{inst.shortName} · Indore</Eyebrow>
      <h1 className={`font-display px-4 text-4xl md:text-6xl ${GOLD}`}>{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl px-4 text-[#9FB3A5]">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i <= n ? "fill-[#E4CE9A] text-[#E4CE9A]" : "fill-[#1C4436] text-[#1C4436]"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-[#E4CE9A]/15">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={`px-4 py-12 text-center ${i > 0 ? "border-l border-[#E4CE9A]/15" : ""}`}>
            <p className={`font-display text-4xl md:text-5xl ${GOLD}`}>{s.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6E8377]">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function VenueRow({ i, flip = false, full = false }: { i: number; flip?: boolean; full?: boolean }) {
  const { lang, t } = useLang();
  const v = venues[i];
  const d = v[lang];
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className={`group overflow-hidden ${hairline} p-3`}>
        <img
          src={img.venues[v.img]}
          alt={d.name}
          className="h-80 w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        />
      </div>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#B49E62]">{lang === "en" ? v.capacity : v.capacityHi}</p>
        <h3 className={`font-display mt-3 text-3xl md:text-4xl ${GOLD}`}>{d.name}</h3>
        <p className="mt-4 text-[#9FB3A5]">{d.desc}</p>
        {full && (
          <ul className="mt-5 space-y-2.5 text-sm text-[#C4BBA4]">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-2 h-px w-5 shrink-0 bg-[#E4CE9A]/60" /> {f}
              </li>
            ))}
          </ul>
        )}
        <Link href={`${BASE}/contact`} className="mt-7 inline-block border border-[#E4CE9A] px-7 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#E4CE9A] transition-colors hover:bg-[#E4CE9A] hover:text-[#08281F]">
          {t.nav.book}
        </Link>
      </div>
    </div>
  );
}

export function WhyGrid() {
  const { lang } = useLang();
  return (
    <div className={`grid gap-px bg-[#E4CE9A]/15 sm:grid-cols-2 lg:grid-cols-4 ${hairline}`}>
      {whyUs.map((w) => {
        const d = pick(w, lang);
        return (
          <div key={w.icon} className="bg-[#08281F] p-8 text-center transition-colors hover:bg-[#0C3227]">
            <Icon name={w.icon} className="mx-auto h-7 w-7 text-[#E4CE9A]" />
            <h3 className={`font-display mt-4 text-xl ${GOLD}`}>{d.title}</h3>
            <p className="mt-3 text-sm text-[#9FB3A5]">{d.desc}</p>
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
    <div className={`flex h-full flex-col p-7 ${hairline} bg-[#0A2D23]`}>
      <p className={`font-display text-5xl leading-none ${GOLD}`}>“</p>
      <p className="flex-1 text-sm italic text-[#C4BBA4]">{lang === "en" ? r.en : r.hi}</p>
      <div className="mt-5 border-t border-[#E4CE9A]/15 pt-4">
        <Stars n={r.stars} />
        <p className={`mt-2 font-semibold ${GOLD}`}>{r.name}</p>
        <p className="text-xs uppercase tracking-[0.15em] text-[#6E8377]">{r.area}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#E4CE9A]/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={`flex w-full items-center justify-between gap-4 py-5 text-left font-semibold ${isOpen ? GOLD : "text-[#D8CFBB]"}`}
            >
              <span><span className="mr-4 font-display text-[#B49E62]">{String(i + 1).padStart(2, "0")}</span>{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#B49E62] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="pb-6 pl-10 text-[#9FB3A5]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className={`grid gap-px bg-[#E4CE9A]/15 lg:grid-cols-5 ${hairline}`}>
      <div className="bg-[#08281F] p-8 lg:col-span-2">
        <h3 className={`font-display mb-5 flex items-center gap-2 text-2xl ${GOLD}`}>
          <MapPin className="h-5 w-5" /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mb-5 text-[#9FB3A5]">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-[#9FB3A5]">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className={`font-semibold ${GOLD}`}>{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#E4CE9A] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#E4CE9A] transition-colors hover:bg-[#E4CE9A] hover:text-[#08281F]">
          {t.misc.getDirections}
        </a>
      </div>
      <div className="bg-[#08281F] lg:col-span-3">
        <iframe src={inst.mapEmbed} className="h-72 w-full opacity-85 grayscale invert lg:h-full" loading="lazy" title="Venue location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden py-24">
      <img src={img.cta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale-[40%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08281F] via-[#08281F]/60 to-[#08281F]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <Eyebrow>{inst.shortName}</Eyebrow>
        <h2 className={`font-display text-3xl md:text-5xl ${GOLD}`}>{t.sections.ctaTitle}</h2>
        <p className="mt-4 text-[#9FB3A5]">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#E4CE9A] px-9 py-3.5 font-bold uppercase tracking-[0.15em] text-[#08281F] transition-colors hover:bg-[#F0E2BD]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 border border-[#E4CE9A]/50 px-9 py-3.5 font-semibold uppercase tracking-[0.15em] text-[#E4CE9A] transition-colors hover:bg-[#E4CE9A]/10">
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
    <footer className="border-t border-[#E4CE9A]/15 pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center ${hairline} text-[#E4CE9A]`}>
              <Crown className="h-5 w-5" />
            </span>
            <span className={`font-display ${GOLD}`}>{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-[#6E8377]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${GOLD}`}>{t.footer.quick}</h4>
          <ul className="space-y-2.5 text-sm text-[#9FB3A5]">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#E4CE9A]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${GOLD}`}>{t.footer.contact}</h4>
          <ul className="space-y-2.5 text-sm text-[#9FB3A5]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#E4CE9A]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${GOLD}`}>{t.footer.hours}</h4>
          <ul className="space-y-2.5 text-sm text-[#9FB3A5]">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className={`font-semibold ${GOLD}`}>{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E4CE9A]/15 py-5 text-center text-xs uppercase tracking-[0.2em] text-[#6E8377]">
        © {new Date().getFullYear()} {inst.name} · {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: `space-y-5 p-6 sm:p-9 ${hairline} bg-[#0A2D23]`,
  label: "mb-2 block text-[11px] font-bold uppercase tracking-[0.25em] text-[#B49E62]",
  input: "w-full border border-[#E4CE9A]/25 bg-[#08281F] px-4 py-3 text-[#F6F1E5] outline-none transition-colors placeholder:text-[#5E7268] focus:border-[#E4CE9A] [color-scheme:dark]",
  select: "w-full border border-[#E4CE9A]/25 bg-[#08281F] px-4 py-3 text-[#F6F1E5] outline-none focus:border-[#E4CE9A]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#1FB959]",
  success: "border border-green-400/40 bg-green-400/10 px-4 py-3 text-sm font-semibold text-green-300",
  error: "border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300",
};
