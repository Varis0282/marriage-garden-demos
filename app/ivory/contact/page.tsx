"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { TEAL, PageHero, MapBlock, bookingStyles, NumHead } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero n="Contact" title={b.title} sub={b.sub} />
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className="border-b border-[#D8D3C8] py-6">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">
                  <c.icon className={`h-4 w-4 ${TEAL}`} /> {c.title}
                </h3>
                {c.href ? (
                  <a href={c.href} className="font-display mt-2 block text-xl hover:text-[#1F6E6B]">{c.body}</a>
                ) : (
                  <p className="font-display mt-2 text-xl">{c.body}</p>
                )}
              </div>
            ))}
            <div className="border-b border-[#D8D3C8] py-6">
              <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A857B]">
                <Clock className={`h-4 w-4 ${TEAL}`} /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="mt-2 text-sm text-[#6E695F]">
                  <span className="font-bold text-[#171512]">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <p className="py-6 text-sm font-semibold">
              {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className={`underline underline-offset-4 ${TEAL}`}>{inst.phone}</a>
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="01" label={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <div className="mt-8">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
