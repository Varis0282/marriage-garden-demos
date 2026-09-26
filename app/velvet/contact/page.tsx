"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { GOLD, hairline, PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Crown } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c) => (
              <div key={c.title} className={`flex gap-4 p-6 ${hairline} bg-[#0A2D23]`}>
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center ${hairline} text-[#E4CE9A]`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className={`font-display ${GOLD}`}>{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#9FB3A5] hover:text-[#E4CE9A]">{c.body}</a>
                  ) : (
                    <p className="text-[#9FB3A5]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className={`p-6 ${hairline} bg-[#0A2D23]`}>
              <h3 className={`font-display mb-3 flex items-center gap-2 ${GOLD}`}>
                <Clock className="h-5 w-5" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#9FB3A5]">
                  <span className={`font-semibold ${GOLD}`}>{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className={`flex items-center gap-3 p-6 ${hairline}`}>
              <Crown className="h-6 w-6 shrink-0 text-[#E4CE9A]" />
              <p className="text-sm font-semibold text-[#D8CFBB]">
                {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className={`underline decoration-[#E4CE9A]/60 underline-offset-4 ${GOLD}`}>{inst.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
