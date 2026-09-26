import { inst } from "./config";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-12-15" -> "15 Dec 2026" */
export function prettyDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export type BookingDetails = { name: string; phone: string; dateISO: string; eventType: string; guests: string; venue: string; note: string };

/** Build a wa.me deep link with a pre-filled availability enquiry.
 *  Keep emoji to single code points (ZWJ emoji corrupted via heredoc once). */
export function whatsAppLink(b: BookingDetails): string {
  const RING = "💍";
  const lines = [
    `${RING} *Date Availability Enquiry — ${inst.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Event:* ${b.eventType}`,
    b.dateISO ? `*Event Date:* ${prettyDate(b.dateISO)}` : "",
    `*Guests:* ${b.guests}`,
    b.venue ? `*Preferred Venue:* ${b.venue}` : "",
    b.note ? `*Details:* ${b.note}` : "",
    ``,
    `Please confirm availability and share packages. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 9);
  return `https://wa.me/${inst.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${inst.whatsapp}?text=${encodeURIComponent(`Hello ${inst.name}, I want to check date availability for an event.`)}`;
}
