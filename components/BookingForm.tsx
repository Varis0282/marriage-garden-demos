"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { venues } from "@/lib/content";
import { whatsAppLink } from "@/lib/booking";

export type BookingStyles = {
  wrap: string;
  label: string;
  input: string;
  select: string;
  submit: string;
  success: string;
  error: string;
};

// WhatsApp always receives English labels so the venue team reads one consistent format
const EVENT_TYPES_EN = ["Wedding", "Reception", "Engagement / Sagai", "Birthday / Anniversary", "Corporate / Community"];
const GUEST_OPTIONS_EN = ["Under 200", "200 - 500", "500 - 1,000", "1,000+"];

export default function BookingForm({ styles }: { styles: BookingStyles }) {
  const { lang, t } = useLang();
  const b = t.booking;

  // min date is computed client-side only, to keep SSR output stable
  const [minDate, setMinDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateISO, setDateISO] = useState("");
  const [typeIdx, setTypeIdx] = useState(0);
  const [guestIdx, setGuestIdx] = useState(0);
  const [venue, setVenue] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      setError(lang === "en" ? "Please enter your name." : "कृपया अपना नाम लिखें।");
      return;
    }
    if (digits.length < 10 || digits.length > 12) {
      setError(lang === "en" ? "Please enter a valid 10-digit mobile number." : "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।");
      return;
    }
    if (!dateISO) {
      setError(lang === "en" ? "Please select your event date." : "कृपया आयोजन की तारीख चुनें।");
      return;
    }
    setError("");
    window.open(
      whatsAppLink({
        name: name.trim(),
        phone: phone.trim(),
        dateISO,
        eventType: EVENT_TYPES_EN[typeIdx],
        guests: GUEST_OPTIONS_EN[guestIdx],
        venue,
        note: note.trim(),
      }),
      "_blank"
    );
    setDone(true);
  }

  return (
    <form onSubmit={submit} className={styles.wrap} noValidate>
      <div>
        <label className={styles.label}>{b.name} *</label>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder={b.namePh} type="text" name="name" />
      </div>

      <div>
        <label className={styles.label}>{b.phone} *</label>
        <input className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={b.phonePh} type="tel" name="phone" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={styles.label}>{b.date} *</label>
          <input className={styles.input} value={dateISO} onChange={(e) => setDateISO(e.target.value)} type="date" min={minDate} name="eventDate" />
        </div>
        <div>
          <label className={styles.label}>{b.eventType}</label>
          <select className={styles.select} value={typeIdx} onChange={(e) => setTypeIdx(Number(e.target.value))}>
            {b.eventTypes.map((et, i) => (
              <option key={et} value={i}>{et}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={styles.label}>{b.guests}</label>
          <select className={styles.select} value={guestIdx} onChange={(e) => setGuestIdx(Number(e.target.value))}>
            {b.guestOptions.map((g, i) => (
              <option key={g} value={i}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={styles.label}>{b.venue}</label>
          <select className={styles.select} value={venue} onChange={(e) => setVenue(e.target.value)}>
            <option value="">{b.anyVenue}</option>
            {venues.map((v) => (
              <option key={v.en.name} value={v.en.name}>{v[lang].name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={styles.label}>{b.note}</label>
        <textarea className={styles.input} value={note} onChange={(e) => setNote(e.target.value)} placeholder={b.notePh} rows={3} />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {done && <p className={styles.success}>{b.success}</p>}

      <button type="submit" className={styles.submit}>
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm7.1 18.9c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.2 6.7 5.9.9.4 1.7.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
        {b.submit}
      </button>
    </form>
  );
}
