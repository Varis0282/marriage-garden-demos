"use client";

import { useLang } from "@/lib/lang";
import { PageHero, VenueCard, CTABand, MapBlock, SectionHead, FadeIn } from "../_ui";

export default function Venues() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <FadeIn key={i} delay={i * 0.12}><VenueCard i={i} full /></FadeIn>
          ))}
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
