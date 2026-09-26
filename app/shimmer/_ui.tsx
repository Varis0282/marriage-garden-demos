"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Star, MapPin, Sparkles } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { faqs, stats, venues, reviews, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/shimmer";

/* Fixed gradient blobs behind everything */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0">
      <div className="absolute -left-40 top-[-10%] h-[480px] w-[480px] rounded-full bg-[#F45B8C]/25 blur-[130px]" />
      <div className="absolute right-[-10%] top-[30%] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/30 blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[25%] h-[420px] w-[420px] rounded-full bg-[#E8C97E]/15 blur-[120px]" />
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Animated number: counts up when scrolled into view (e.g. "500+", "4.7★") */
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value.replace(/[^\d.]/g, ""));
    const suffix = value.replace(/[\d.,]/g, "");
    const decimals = value.includes(".") ? 1 : 0;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setText(`${v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{text}</span>;
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
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/15 bg-[#241238]/80 px-5 py-2.5 shadow-xl shadow-black/30 backdrop-blur-lg">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F45B8C] to-[#7C3AED] text-white">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <span className="text-sm font-bold sm:text-base">{lang === "en" ? inst.shortName : "उत्सव"}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-[#C9B8DB] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <Link href="/" className="hidden text-xs text-[#9C87B5] hover:text-white sm:block">← All demos</Link>
          <LangToggle className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold hover:bg-white/10" />
          <Link
            href={`${BASE}/contact`}
            className="hidden rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#F45B8C]/30 transition-transform hover:scale-105 lg:block"
          >
            {t.nav.book}
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/15 bg-[#241238]/95 p-4 backdrop-blur-lg lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-5 py-3 text-center font-bold text-white">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F45B8C]">{eyebrow}</p>
      )}
      <h2 className="bg-gradient-to-r from-white via-[#F3D9E4] to-[#E8C97E] bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[#B9A6CD]">{sub}</p>}
    </FadeIn>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="px-4 pb-10 pt-16 text-center">
      <FadeIn>
        <h1 className="bg-gradient-to-r from-[#F45B8C] via-white to-[#E8C97E] bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          {title}
        </h1>
        {sub && <p className="mx-auto mt-5 max-w-xl text-[#B9A6CD]">{sub}</p>}
      </FadeIn>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#E8C97E] text-[#E8C97E]" : "fill-white/15 text-white/15"}`} />
      ))}
    </div>
  );
}

export const glass = "rounded-3xl border border-white/12 bg-white/[0.06] backdrop-blur-md";

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="px-4 py-14">
      <div className={`mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4 ${glass}`}>
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.1}>
            <p className="text-4xl font-extrabold text-[#E8C97E]">
              <Counter value={s.value} />
            </p>
            <p className="mt-1 text-sm text-[#B9A6CD]">{s[lang]}</p>
          </FadeIn>
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
    <motion.div whileHover={{ y: -8 }} className={`group overflow-hidden ${glass}`}>
      <div className="relative h-52 overflow-hidden">
        <img src={img.venues[v.img]} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#170B26] via-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/15 px-4 py-1 text-xs font-bold backdrop-blur">
          {lang === "en" ? v.capacity : v.capacityHi}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{d.name}</h3>
        <p className="mt-2 text-sm text-[#B9A6CD]">{d.desc}</p>
        {full && (
          <ul className="mt-4 space-y-2 text-sm text-[#D5C7E4]">
            {d.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F45B8C]" /> {f}
              </li>
            ))}
          </ul>
        )}
        <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#F45B8C]/25 transition-transform hover:scale-105">
          {t.nav.book} →
        </Link>
      </div>
    </motion.div>
  );
}

export function WhyGrid() {
  const { lang } = useLang();
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUs.map((w, i) => {
        const d = pick(w, lang);
        return (
          <FadeIn key={w.icon} delay={i * 0.1} className={`p-6 text-center ${glass}`}>
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F45B8C]/25 to-[#7C3AED]/25 text-[#E8C97E]">
              <Icon name={w.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-bold text-white">{d.title}</h3>
            <p className="mt-2 text-sm text-[#B9A6CD]">{d.desc}</p>
          </FadeIn>
        );
      })}
    </div>
  );
}

/** Infinite review marquee, pauses on hover */
export function ReviewMarquee() {
  const { lang } = useLang();
  const doubled = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#170B26]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#170B26]" />
      <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
        {doubled.map((r, i) => (
          <div key={i} className={`w-80 shrink-0 p-6 ${glass}`}>
            <Stars n={r.stars} />
            <p className="mt-3 text-sm text-[#D5C7E4]">“{lang === "en" ? r.en : r.hi}”</p>
            <p className="mt-4 font-bold text-white">{r.name}</p>
            <p className="text-xs text-[#9C87B5]">{r.area}</p>
          </div>
        ))}
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
          <div key={i} className={`overflow-hidden ${glass}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#F45B8C] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-white/10 px-5 py-4 text-[#B9A6CD]">{item.a}</p>}
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
      <div className={`p-6 lg:col-span-2 ${glass}`}>
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
          <MapPin className="h-5 w-5 text-[#F45B8C]" /> {lang === "en" ? inst.name : inst.nameHi}
        </h3>
        <p className="mb-4 text-[#B9A6CD]">{lang === "en" ? inst.address : inst.addressHi}</p>
        <div className="mb-4 space-y-1 text-sm text-[#B9A6CD]">
          {inst.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-white">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-6 py-2.5 text-sm font-bold text-white">
          {t.misc.getDirections} →
        </a>
      </div>
      <div className={`overflow-hidden lg:col-span-3 ${glass}`}>
        <iframe src={inst.mapEmbed} className="h-72 w-full opacity-90 [filter:invert(0.88)_hue-rotate(200deg)] lg:h-full" loading="lazy" title="Venue location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-20">
      <FadeIn className={`relative mx-auto max-w-5xl overflow-hidden p-10 text-center md:p-16 ${glass}`}>
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F45B8C]/30 blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#7C3AED]/30 blur-[90px]" />
        <h2 className="relative text-3xl font-extrabold text-white md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="relative mt-4 text-[#B9A6CD]">{t.sections.ctaSub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-full bg-gradient-to-r from-[#F45B8C] to-[#7C3AED] px-8 py-3.5 font-bold text-white shadow-xl shadow-[#F45B8C]/30 transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = useNavLinks();
  return (
    <footer className="relative border-t border-white/10 pt-14 text-[#B9A6CD]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F45B8C] to-[#7C3AED] text-white">
              <Sparkles className="h-4.5 w-4.5" />
            </span>
            <span className="font-bold text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
          </div>
          <p className="text-sm text-[#9C87B5]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#F45B8C]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-[#9C87B5]">
            <li>{lang === "en" ? inst.address : inst.addressHi}</li>
            <li><a href={`tel:${inst.phoneRaw}`} className="hover:text-[#F45B8C]">{inst.phone}</a></li>
            <li>{inst.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-[#9C87B5]">
            {inst.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-white">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-[#71608A]">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: `space-y-5 p-6 sm:p-8 ${glass}`,
  label: "mb-1.5 block text-sm font-bold text-[#E8C97E]",
  input: "w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-2.5 text-white outline-none transition-colors placeholder:text-[#9C87B5] focus:border-[#F45B8C] focus:ring-2 focus:ring-[#F45B8C]/30 [color-scheme:dark]",
  select: "w-full rounded-xl border border-white/15 bg-[#241238] px-4 py-2.5 text-white outline-none focus:border-[#F45B8C] focus:ring-2 focus:ring-[#F45B8C]/30",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-[1.02]",
  success: "rounded-xl bg-green-400/15 px-4 py-3 text-sm font-semibold text-green-300",
  error: "rounded-xl bg-red-400/15 px-4 py-3 text-sm font-semibold text-red-300",
};
