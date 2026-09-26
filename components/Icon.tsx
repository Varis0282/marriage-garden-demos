import { Heart, Flower2, UtensilsCrossed, Music, Car, Camera, Sparkles, Users, CalendarCheck, PartyPopper, Building2, ShieldCheck, Gem, Clock, LucideIcon } from "lucide-react";

const map: Record<string, LucideIcon> = { Heart, Flower2, UtensilsCrossed, Music, Car, Camera, Sparkles, Users, CalendarCheck, PartyPopper, Building2, ShieldCheck, Gem, Clock };

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Heart;
  return <C className={className} />;
}
