"use client";

import { useLang } from "@/lib/lang";
import { PageHero, VenueRow, NumHead, MapBlock, CTABand } from "../_ui";

export default function Venues() {
  const { t } = useLang();
  return (
    <>
      <PageHero n="Venues" title={t.sections.venuesTitle} sub={t.sections.venuesSub} />
      <section className="mx-auto max-w-6xl px-4">
        {[0, 1, 2].map((i) => <VenueRow key={i} i={i} full />)}
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <NumHead n="01" label={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <div className="mt-8">
          <MapBlock />
        </div>
      </section>
      <CTABand />
    </>
  );
}
