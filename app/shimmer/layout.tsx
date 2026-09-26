import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, Backdrop } from "./_ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utsav Garden & Banquets — Indore | Shimmer Demo",
  description: "Grand lawn, crystal banquet and rooftop terrace on Ring Road, Indore. Check date availability on WhatsApp.",
};

export default function ShimmerLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${sora.className} relative min-h-screen overflow-x-clip bg-[#170B26] text-[#EDE4F5]`}>
        <Backdrop />
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
