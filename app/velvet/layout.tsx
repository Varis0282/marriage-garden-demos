import type { Metadata } from "next";
import { Prata, Karla } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const display = Prata({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const body = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utsav Garden & Banquets — Indore | Velvet Demo",
  description: "Grand lawn, crystal banquet and rooftop terrace on Ring Road, Indore. Check date availability on WhatsApp.",
};

export default function VelvetLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${body.className} ${display.variable} bg-[#08281F] text-[#D8CFBB]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
