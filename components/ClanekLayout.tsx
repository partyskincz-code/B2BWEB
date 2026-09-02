import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Drobecky from "@/components/Drobecky";

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
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
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

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-primary to-[#593027] p-8 text-center">
            <p className="text-white font-display font-bold text-xl mb-3">Potřebujete kalkulaci na míru?</p>
            <p className="text-white/80 mb-6">Napište nám formát, množství a termín. Odpovíme do 24 hodin.</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              Nezávazně poptat <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Další z poradny</p>
            <div className="flex flex-wrap gap-3">
              {data.dalsi.map((d) => (
                <Link key={d.href} href={d.href} className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-brand-primary/40 hover:text-brand-primary transition-colors">
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
