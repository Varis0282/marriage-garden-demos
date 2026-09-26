import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utsav Garden & Banquets — Indore | Heritage Demo",
  description: "Grand lawn, crystal banquet and rooftop terrace on Ring Road, Indore. Check date availability on WhatsApp.",
};

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${body.className} ${display.variable} bg-[#FDF9F3] text-[#4A3A41]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
