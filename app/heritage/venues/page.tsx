"use client";

import { useLang } from "@/lib/lang";
import { PageHero, VenueCard, CTABand, MapBlock, SectionHead } from "../_ui";

export default function Venues() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-3">
          {[0, 1, 2].map((i) => <VenueCard key={i} i={i} full />)}
        </div>
      </section>
      <section className="bg-[#F8F0E3] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>
      <CTABand />
    </>
  );
}
