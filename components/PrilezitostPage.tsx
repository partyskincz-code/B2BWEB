import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Drobecky from "@/components/Drobecky";
import FloatingStars from "@/components/FloatingStars";

export type Prilezitost = {
  tag: string;
  h1: string;
  perex: string;
  produkty: { title: string; text: string }[];
  duvody: string[];
  foto: { src: string; alt: string };
  fotoPopis: string;
  ceny: { format: string; cena: string; pozn: string }[];
  faq: { q: string; a: string }[];
  ctaTitul: string;
  ctaText: string;
  souvisejici: { href: string; label: string }[];
};

export default function PrilezitostPage({ data }: { data: Prilezitost }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 bg-brand-light relative overflow-hidden">
        <FloatingStars variant="light" density={0.5} />
        <div className="container-pad">
          <div className="max-w-3xl">
            <Drobecky nazev={data.tag} />
            <span className="tag mb-4">{data.tag}</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              {data.h1}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{data.perex}</p>
            <div className="flex flex-wrap gap-x-7 gap-y-4">
              <Link href="/kontakt" className="btn-primary">
                Nezávazně poptat
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/produkty" className="btn-outline">
                Ceník a produkty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Co vyrobíme */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mb-14 max-w-[18ch]">
            Co pro vás vyrobíme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.produkty.map((p) => (
              <div key={p.title} className="border-t border-brand-secondary/15 pt-7">
                <h3 className="font-display font-bold text-brand-secondary text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foto + důvody */}
      <section className="section-pad bg-[#F7F2F0]">
        <div className="container-pad grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#EFE9E7]">
            <Image src={data.foto.src} alt={data.foto.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">{data.fotoPopis}</p>
            <ul className="space-y-3">
              {data.duvody.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ceny */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mb-4 max-w-[18ch]">
            Orientační ceny
          </h2>
          <p className="text-gray-500 mb-8">
            Ceny jsou konečné za kus. Přesnou kalkulaci připravíme podle množství a formátu do 24 hodin.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs uppercase tracking-widest text-gray-400">
                  <th className="py-2 pr-4 font-semibold">Formát</th>
                  <th className="py-2 pr-4 font-semibold">Cena od</th>
                  <th className="py-2 font-semibold">Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {data.ceny.map((c) => (
                  <tr key={c.format} className="border-t border-brand-secondary/15">
                    <td className="py-5 pr-4 font-display font-bold text-brand-secondary text-xl">{c.format}</td>
                    <td className="py-5 pr-4 num text-xl">{c.cena}</td>
                    <td className="py-5 pr-4 text-[#3F4A55] text-sm">{c.pozn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/produkty" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-primary hover:underline">
            Kompletní ceník všech formátů <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-[#F7F2F0]">
        <div className="container-pad max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mb-12 max-w-[18ch]">
            Časté otázky
          </h2>
          <div className="space-y-4">
            {data.faq.map((f) => (
              <details key={f.q} className="group border-t border-brand-secondary/15 py-7">
                <summary className="cursor-pointer font-display font-bold text-brand-secondary list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-brand-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-500 text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="bg-brand-primary px-7 py-16 md:px-16 md:py-24 relative overflow-hidden">
            <FloatingStars variant="warm" />
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-light mb-7 max-w-[15ch]">{data.ctaTitul}</h2>
            <p className="text-brand-light/85 text-lg md:text-xl font-light leading-relaxed max-w-[52ch] mb-10">{data.ctaText}</p>
            <Link href="/kontakt" className="btn-cream">
              Poptat výrobu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Související */}
      <section className="pb-20 bg-white">
        <div className="container-pad">
          <p className="tag mb-6">Mohlo by se hodit</p>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {data.souvisejici.map((s) => (
              <Link key={s.href} href={s.href} className="inline-flex items-center border-b border-brand-secondary/25 pb-1 text-sm text-[#3F4A55] hover:border-brand-primary hover:text-brand-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
