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
  /** Hlavní realizace. Vykreslí se hned pod hero sekcí jako hlavní důkaz. */
  pripad?: {
    stitek: string;
    klient: string;
    klientUrl?: string;
    vedlejsiOdkaz?: { href: string; label: string };
    h2: string;
    text: string[];
    cisla: { hodnota: string; popis: string }[];
    fotky?: { src: string; alt: string; pomer?: string }[];
    fotoPopis?: string;
    /** Barvy hostující značky. Blok se tím vizuálně přepne do jejího světa. */
    styl?: { pozadi: string; akcent: string; text: string };
    /** Text přes hlavní fotku, ve stylu značky klienta. */
    znacka?: { hlavni: string; pod: string };
  };
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

      {/* Hlavní realizace */}
      {data.pripad && (() => {
        const pripad = data.pripad;
        const akcent = pripad.styl?.akcent ?? "#F2EBE9";
        return (
        <section
          className="py-20 md:py-28"
          style={{
            background: pripad.styl?.pozadi ?? "#212A34",
            color: pripad.styl?.text ?? "#F2EBE9",
          }}
        >
          <div className="container-pad">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] mb-8 opacity-60">
              {pripad.stitek}
            </p>

            {/* Hlavní fotka přes celou šířku, se značkou klienta přes ni */}
            {pripad.fotky && pripad.fotky[0] && (
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden mb-12">
                <Image
                  src={pripad.fotky[0].src}
                  alt={pripad.fotky[0].alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1240px) 100vw, 1176px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 72%)" }}
                />
                {pripad.znacka && (
                  <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10">
                    <p
                      className="font-display font-extrabold leading-none text-4xl sm:text-5xl"
                      style={{ color: akcent }}
                    >
                      {pripad.znacka.hlavni}
                    </p>
                    <p className="font-display font-extrabold leading-none text-2xl sm:text-4xl mt-1.5 text-white">
                      {pripad.znacka.pod}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-x-16 gap-y-12">
              <div className="flex-[999_1_460px] min-w-0">
                <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 max-w-[18ch]">
                  {pripad.h2}
                </h2>
                {pripad.text.map((t) => (
                  <p key={t} className="text-lg md:text-xl font-light leading-relaxed opacity-85 max-w-[58ch] mb-5">
                    {t}
                  </p>
                ))}
                {pripad.klientUrl ? (
                  <a
                    href={pripad.klientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm border-b pb-1 transition-opacity hover:opacity-70"
                    style={{
                      color: akcent,
                      borderColor: akcent,
                    }}
                  >
                    {pripad.klient} <ArrowRight size={15} />
                  </a>
                ) : (
                  <p className="mt-4 text-sm opacity-70">{pripad.klient}</p>
                )}
                {pripad.vedlejsiOdkaz && (
                  <Link
                    href={pripad.vedlejsiOdkaz.href}
                    className="inline-flex items-center gap-2 mt-4 ml-0 sm:ml-8 text-sm border-b border-current/40 pb-1 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {pripad.vedlejsiOdkaz.label} <ArrowRight size={15} />
                  </Link>
                )}
              </div>

              <div className="flex-[1_1_240px] min-w-0">
                <dl className="space-y-9">
                  {pripad.cisla.map((c) => (
                    <div key={c.popis}>
                      <dt className="font-display font-extrabold text-5xl leading-none whitespace-nowrap">
                        {c.hodnota}
                      </dt>
                      <dd className="text-sm opacity-70 mt-3 leading-relaxed">{c.popis}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Doplňkové fotky */}
            {pripad.fotky && pripad.fotky.length > 1 && (
              <figure className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {pripad.fotky.slice(1).map((f) => (
                    <div key={f.src} className={`relative w-full overflow-hidden ${f.pomer ?? "aspect-[4/3]"}`} style={{ background: "rgba(255,255,255,0.06)" }}>
                      <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 580px" />
                    </div>
                  ))}
                </div>
                {pripad.fotoPopis && (
                  <figcaption className="text-sm opacity-60 mt-4 max-w-[60ch]">{pripad.fotoPopis}</figcaption>
                )}
              </figure>
            )}
          </div>
        </section>
        );
      })()}

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
