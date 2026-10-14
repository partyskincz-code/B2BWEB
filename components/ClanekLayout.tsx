import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Drobecky from "@/components/Drobecky";
import FloatingStars from "@/components/FloatingStars";

export type Odstavec =
  | { typ: "p"; text: string }
  | { typ: "h2"; text: string }
  | { typ: "h3"; text: string }
  | { typ: "ul"; polozky: string[] }
  | { typ: "tip"; text: string };

export type Clanek = {
  nadpis: string;
  perex: string;
  datum: string;
  ctenaMinut: number;
  foto?: { src: string; alt: string };
  telo: Odstavec[];
  dalsi: { href: string; label: string }[];
};

export default function ClanekLayout({ data }: { data: Clanek }) {
  return (
    <>
      <section className="pt-28 pb-10 bg-brand-light">
        <div className="container-pad max-w-3xl">
          <Drobecky nazev="Poradna" />
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mb-4 leading-tight">
            {data.nadpis}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">{data.perex}</p>
          <p className="text-gray-400 text-xs">
            Aktualizováno {data.datum} · čtení na {data.ctenaMinut} minuty
          </p>
        </div>
      </section>

      {data.foto && (
        <section className="bg-brand-light pb-10">
          <div className="container-pad max-w-3xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9E7]">
              <Image src={data.foto.src} alt={data.foto.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>
          </div>
        </section>
      )}

      <section className="section-pad bg-white">
        <article className="container-pad max-w-3xl">
          {data.telo.map((b, i) => {
            if (b.typ === "h2")
              return (
                <h2 key={i} className="text-2xl font-display font-extrabold text-brand-secondary mt-10 mb-4">
                  {b.text}
                </h2>
              );
            if (b.typ === "h3")
              return (
                <h3 key={i} className="text-lg font-display font-bold text-brand-secondary mt-7 mb-3">
                  {b.text}
                </h3>
              );
            if (b.typ === "ul")
              return (
                <ul key={i} className="space-y-2 mb-5">
                  {b.polozky.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="text-brand-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              );
            if (b.typ === "tip")
              return (
                <p key={i} className="bg-brand-light border-l-4 border-brand-primary rounded-r-xl px-5 py-4 text-gray-700 leading-relaxed mb-5">
                  {b.text}
                </p>
              );
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-5">
                {b.text}
              </p>
            );
          })}

          <div className="mt-16 bg-brand-primary px-7 py-14 md:px-12 relative overflow-hidden">
            <FloatingStars variant="warm" density={0.5} />
            <p className="text-brand-light font-display font-extrabold text-3xl mb-4 max-w-[16ch]">Potřebujete kalkulaci na míru?</p>
            <p className="text-brand-light/85 text-lg font-light leading-relaxed max-w-[48ch] mb-8">Napište nám formát, množství a termín. Odpovíme do 24 hodin.</p>
            <Link href="/kontakt" className="btn-cream">
              Nezávazně poptat <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10">
            <p className="tag mb-6">Další z poradny</p>
            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {data.dalsi.map((d) => (
                <Link key={d.href} href={d.href} className="inline-flex items-center border-b border-brand-secondary/25 pb-1 text-sm text-[#3F4A55] hover:border-brand-primary hover:text-brand-primary transition-colors">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
