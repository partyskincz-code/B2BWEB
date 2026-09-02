import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  robots: { index: false, follow: true },
};

const odkazy = [
  { href: "/produkty", label: "Produkty a nabídka" },
  { href: "/cenik", label: "Ceník" },
  { href: "/jak-to-funguje", label: "Jak probíhá zakázka" },
  { href: "/reference", label: "Reference a realizace" },
  { href: "/tetovacky-na-firemni-event", label: "Tetovačky na firemní event" },
  { href: "/tetovacky-na-veletrh", label: "Promo materiály na veletrh" },
  { href: "/tetovacky-na-festival", label: "Tetovačky na festival" },
  { href: "/tetovacky-pro-skoly", label: "Tetovačky pro školy" },
];

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-brand-light min-h-[70vh]">
      <div className="container-pad max-w-2xl">
        <p className="font-display font-extrabold text-brand-primary text-6xl mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mb-4">
          Tuhle stránku jsme nenašli
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Odkaz je nejspíš zastaralý nebo obsahuje překlep. Zkuste některou z těchto stránek —
          nebo nám rovnou napište, co potřebujete.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          {odkazy.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-600 hover:border-brand-primary/40 hover:text-brand-primary transition-colors"
            >
              {o.label}
            </Link>
          ))}
        </div>
        <Link href="/kontakt" className="btn-primary">
          Nezávazně poptat
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
