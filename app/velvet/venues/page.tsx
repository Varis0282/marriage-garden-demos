"use client";

import { useLang } from "@/lib/lang";
import { PageHero, VenueRow, CTABand, MapBlock, SectionHead } from "../_ui";

export default function Venues() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-24 px-4">
          {[0, 1, 2].map((i) => <VenueRow key={i} i={i} flip={i % 2 === 1} full />)}
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>
      <CTABand />
    </>
  );
}
