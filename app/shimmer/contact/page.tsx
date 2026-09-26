"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles, FadeIn, glass } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </FadeIn>
          <FadeIn delay={0.15} className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className={`flex gap-4 p-5 ${glass}`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F45B8C]/30 to-[#7C3AED]/30 text-[#E8C97E]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#B9A6CD] hover:text-[#F45B8C]">{c.body}</a>
                  ) : (
                    <p className="text-[#B9A6CD]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className={`p-5 ${glass}`}>
              <h3 className="mb-2 flex items-center gap-2 font-bold text-white">
                <Clock className="h-5 w-5 text-[#F45B8C]" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#B9A6CD]">
                  <span className="font-semibold text-white">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className={`flex items-center gap-3 p-5 ${glass}`}>
              <Megaphone className="h-6 w-6 shrink-0 text-[#E8C97E]" />
              <p className="text-sm font-semibold text-white">
                {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className="underline decoration-[#F45B8C] decoration-2 underline-offset-2">{inst.phone}</a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
