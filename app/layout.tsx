import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marriage Garden Website Demos — 5 Styles",
  description: "Five complete demo websites for one marriage garden. Pick a design, we put your name on it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
