import Link from "next/link";

export const metadata = {
  title: "Marriage Garden Website Demos — 5 Styles",
  description:
    "One venue, five completely different websites. Date-availability enquiry on WhatsApp, Hindi/English, venues, gallery, reviews and map — pick the design you love.",
};

const themes = [
  {
    href: "/heritage",
    name: "Heritage",
    tag: "Classic Royal",
    desc: "Maroon and gold, wedding-invitation elegance — the timeless choice every family trusts.",
    colors: ["#7B1E3A", "#C9A227", "#FDF9F3", "#3D2430"],
    chrome: "bg-[#FDF9F3]",
    bar: "bg-[#7B1E3A]",
    pill: "bg-[#C9A227]",
  },
  {
    href: "/shimmer",
    name: "Shimmer",
    tag: "Modern Animated",
    desc: "Night-sky gradients, glass cards and scroll animations — a venue that feels like a destination wedding.",
    colors: ["#170B26", "#F45B8C", "#E8C97E", "#7C3AED"],
    chrome: "bg-[#170B26]",
    bar: "bg-gradient-to-r from-[#F45B8C] to-[#7C3AED]",
    pill: "bg-[#E8C97E]",
  },
  {
    href: "/haldi",
    name: "Haldi",
    tag: "Warm Festive",
    desc: "Marigold yellows and rani pink — the joy of an Indian shaadi turned into a website.",
    colors: ["#FFF7E6", "#E9A319", "#D6336C", "#2E7D5B"],
    chrome: "bg-[#FFF7E6]",
    bar: "bg-[#E9A319]",
    pill: "bg-[#D6336C]",
  },
  {
    href: "/velvet",
    name: "Velvet",
    tag: "Dark Luxury",
    desc: "Deep emerald and champagne serif — for venues that host Indore's most premium weddings.",
    colors: ["#08281F", "#E4CE9A", "#F6F1E5", "#134534"],
    chrome: "bg-[#08281F]",
    bar: "bg-[#E4CE9A]",
    pill: "bg-[#134534]",
  },
  {
    href: "/ivory",
    name: "Ivory",
    tag: "Minimal Editorial",
    desc: "Warm white, huge type, one teal accent — quiet luxury for the modern couple.",
    colors: ["#FAF9F6", "#171512", "#1F6E6B", "#D8D3C8"],
    chrome: "bg-[#FAF9F6]",
    bar: "bg-[#171512]",
    pill: "bg-[#1F6E6B]",
  },
];

const features = [
  "Date-availability enquiry on WhatsApp",
  "Hindi / English toggle",
  "3 venues with capacity & features",
  "500+ events showcase",
  "Photo gallery & reviews",
  "Google Maps & site-visit CTA",
];

export default function Showcase() {
  return (
    <main className="min-h-screen bg-[#0B0B10] px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-300">Live demo showcase</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          One venue.{" "}
          <span className="bg-gradient-to-r from-rose-300 via-amber-200 to-rose-400 bg-clip-text text-transparent">
            Five completely different websites.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300">
          Every demo below is a complete, working website for the same marriage garden — same content, same features.
          You simply pick the design you love, we put your name on it.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {features.map((f) => (
            <span key={f} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {themes.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              {/* mini browser chrome */}
              <div className={`overflow-hidden rounded-xl ${t.chrome} shadow-lg`}>
                <div className="flex items-center gap-1.5 bg-black/80 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 h-3 w-40 rounded bg-white/20" />
                </div>
                <div className="space-y-2 p-4">
                  <div className={`h-2.5 w-24 rounded ${t.bar}`} />
                  <div className="h-2 w-4/5 rounded bg-black/20" />
                  <div className="h-2 w-3/5 rounded bg-black/10" />
                  <div className="flex gap-2 pt-1">
                    <div className={`h-6 w-20 rounded-full ${t.pill}`} />
                    <div className="h-6 w-16 rounded-full bg-black/10" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-extrabold">{t.name}</h2>
                  <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-slate-300">{t.tag}</span>
                </div>
                <div className="flex gap-1.5">
                  {t.colors.map((c) => (
                    <span key={c} className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-400">{t.desc}</p>
              <p className="mt-3 font-semibold text-rose-300 transition-transform group-hover:translate-x-1">View demo →</p>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-slate-500">
          Built with Next.js · Ready in 7 days for your venue · Utsav Garden &amp; Banquets is a fictional demo brand
        </p>
      </div>
    </main>
  );
}
