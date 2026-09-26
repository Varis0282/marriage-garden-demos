import type { Metadata } from "next";
import { Marcellus, Figtree } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const display = Marcellus({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utsav Garden & Banquets — Indore | Ivory Demo",
  description: "Grand lawn, crystal banquet and rooftop terrace on Ring Road, Indore. Check date availability on WhatsApp.",
};

export default function IvoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${body.className} ${display.variable} bg-[#FAF9F6] text-[#171512]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
