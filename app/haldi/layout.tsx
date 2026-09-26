import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const baloo = Baloo_2({ subsets: ["latin", "devanagari"] });

export const metadata: Metadata = {
  title: "Utsav Garden & Banquets — Indore | Haldi Demo",
  description: "Grand lawn, crystal banquet and rooftop terrace on Ring Road, Indore. Check date availability on WhatsApp.",
};

export default function HaldiLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${baloo.className} bg-[#FFF7E6] text-[#5C4A33]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
