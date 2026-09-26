"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";
import { MapPin, Phone, Mail, Clock, Megaphone } from "lucide-react";

export default function Contact() {
  const { t, lang } = useLang();
  const b = t.booking;
  const iconBgs = ["bg-[#FCE4EE] text-[#D6336C]", "bg-[#E7F5EC] text-[#2E7D5B]", "bg-[#FFF3CD] text-[#B07A10]"];
  return (
    <>
      <PageHero title={b.title} sub={b.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
              { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
              { icon: Mail, title: "Email", body: inst.email },
            ].map((c, i) => (
              <div key={c.title} className={`flex gap-4 rounded-3xl bg-white p-5 shadow-md shadow-amber-900/5 ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}`}>
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconBgs[i % 3]}`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-extrabold text-[#5C4A33]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-[#8A6F4D] hover:text-[#D6336C]">{c.body}</a>
                  ) : (
                    <p className="text-[#8A6F4D]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-3xl bg-white p-5 shadow-md shadow-amber-900/5">
              <h3 className="mb-2 flex items-center gap-2 font-extrabold text-[#5C4A33]">
                <Clock className="h-5 w-5 text-[#2E7D5B]" /> {t.footer.hours}
              </h3>
              {inst.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#8A6F4D]">
                  <span className="font-extrabold">{tm.days}:</span> {tm.hours}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-[#FFF3CD] p-5">
              <Megaphone className="h-6 w-6 shrink-0 text-[#B07A10]" />
              <p className="text-sm font-extrabold text-[#5C4A33]">
                {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className="underline decoration-[#E9A319] decoration-2 underline-offset-2">{inst.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
