import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import Drobecky from "@/components/Drobecky";
import FloatingStars from "@/components/FloatingStars";

export type CenikData = {
  tag: string;
  h1: string;
  perex: string;
  tetovackyTitul: string;
  tetovackyPerex: string;
  sloupecFormat: string;
  hladiny: string[];
  tetovacky: { format: string; ceny: string[] }[];
  poznamkaA7: string;
  baleniTitul: string;
  baleniPerex: string;
  baleni: { typ: string; priplatek: string; pozn: string }[];
  provedeniTitul?: string;
  provedeniPerex?: string;
  provedeni?: { typ: string; priplatek: string; pozn: string }[];
  dalsiTitul: string;
  dalsi: { produkt: string; cena: string; minimum: string; pozn: string }[];
  infoBox: { pred: string; zvyraznene: string; po: string };
  odkazyPod: { href: string; label: string }[];
  pdfLabel: string;
  vCeneTitul: string;
  vCene: string[];
  zvlastTitul: string;
  zvlast: string[];
  faqTitul: string;
  faq: { q: string; a: string }[];
  dalNadpis: string;
  dalOdkazy: { href: string; label: string }[];
  ctaTitul: string;
  ctaText: string;
  ctaTlacitko: string;
  kontaktHref: string;
};

export default function CenikView({ d }: { d: CenikData }) {
  return (
    <>
      <section className="pt-24 pb-8 md:pt-28 md:pb-10 bg-brand-light relative overflow-hidden">
        <FloatingStars variant="light" density={0.5} />
        <div className="container-pad max-w-3xl">
          <Drobecky nazev={d.tag} />
          <span className="tag mb-4">{d.tag}</span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-4 leading-tight">
            {d.h1}
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{d.perex}</p>
        </div>
      </section>

      <section className="pt-10 pb-14 md:pt-14 md:pb-20 bg-white">
        <div className="container-pad">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-secondary mb-2">{d.tetovackyTitul}</h2>
          <p className="text-gray-500 mb-8">{d.tetovackyPerex}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-brand-secondary/20">
                <tr>
                  <th className="px-4 pb-4 text-left text-[12px] font-medium uppercase tracking-[0.18em] text-brand-primary whitespace-nowrap">{d.sloupecFormat}</th>
                  {d.hladiny.map((h) => (
                    <th key={h} className="px-4 pb-4 text-center text-[12px] font-medium uppercase tracking-[0.18em] text-brand-primary whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.tetovacky.map((r) => (
                  <tr key={r.format} className="border-t border-brand-secondary/15">
                    <td className="px-4 py-6 font-display font-bold text-2xl text-brand-secondary whitespace-nowrap">{r.format}</td>
                    {r.ceny.map((c, j) => (
                      <td key={j} className="px-4 py-6 text-center text-[#3F4A55] whitespace-nowrap">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">{d.poznamkaA7}</p>

          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mt-14 mb-3">{d.baleniTitul}</h2>
          <p className="text-gray-500 mb-8">{d.baleniPerex}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {d.baleni.map((b) => (
              <div key={b.typ} className="flex items-start justify-between gap-4 border-t border-brand-secondary/15 pt-6">
                <div>
                  <p className="font-display font-bold text-brand-secondary">{b.typ}</p>
                  <p className="text-gray-500 text-sm mt-1">{b.pozn}</p>
                </div>
                <p className="font-display font-bold text-brand-primary whitespace-nowrap">{b.priplatek}</p>
              </div>
            ))}
          </div>

          {d.provedeni && d.provedeni.length > 0 && (
            <>
              <h2 className="text-3xl font-display font-extrabold text-brand-secondary mt-14 mb-3">{d.provedeniTitul}</h2>
              <p className="text-gray-500 mb-8">{d.provedeniPerex}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {d.provedeni.map((b) => (
                  <div key={b.typ} className="flex items-start justify-between gap-4 border-t border-brand-secondary/15 pt-6">
                    <div>
                      <p className="font-display font-bold text-brand-secondary">{b.typ}</p>
                      <p className="text-gray-500 text-sm mt-1">{b.pozn}</p>
                    </div>
                    <p className="font-display font-bold text-brand-primary whitespace-nowrap">{b.priplatek}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mt-14 mb-8">{d.dalsiTitul}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            {d.dalsi.map((x) => (
              <div key={x.produkt} className="border-t border-brand-secondary/15 pt-7">
                <h3 className="font-display font-bold text-brand-secondary mb-1">{x.produkt}</h3>
                <p className="font-display font-extrabold text-brand-primary text-xl mb-1">{x.cena}</p>
                <p className="text-gray-400 text-xs mb-3">{x.minimum}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{x.pozn}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-[#3F4A55] bg-brand-light p-5">
            <Info size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
            <p>
              {d.infoBox.pred} <strong className="text-brand-secondary">{d.infoBox.zvyraznene}</strong>{d.infoBox.po}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
            {d.odkazyPod.map((o) => (
              <Link key={o.href} href={o.href} className="inline-flex items-center border-b border-brand-secondary/25 pb-1 text-sm text-[#3F4A55] hover:border-brand-primary hover:text-brand-primary transition-colors">
                {o.label}
              </Link>
            ))}
          </div>

          <a href="/MakeTheMoment_B2B_Cenik.pdf" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
            {d.pdfLabel} <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="section-pad bg-[#F7F2F0]">
        <div className="container-pad grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-extrabold text-brand-secondary mb-5">{d.vCeneTitul}</h2>
            <ul className="space-y-3">
              {d.vCene.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-extrabold text-brand-secondary mb-5">{d.zvlastTitul}</h2>
            <ul className="space-y-3">
              {d.zvlast.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="w-[18px] text-center text-gray-300 flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad max-w-3xl">
          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-8">{d.faqTitul}</h2>
          <div className="space-y-4">
            {d.faq.map((f) => (
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

      <section className="pb-4 bg-white">
        <div className="container-pad">
          <p className="tag mb-6">{d.dalNadpis}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {d.dalOdkazy.map((o) => (
              <Link key={o.href} href={o.href} className="inline-flex items-center border-b border-brand-secondary/25 pb-1 text-sm text-[#3F4A55] hover:border-brand-primary hover:text-brand-primary transition-colors">
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="bg-brand-primary px-7 py-16 md:px-16 md:py-24 relative overflow-hidden">
            <FloatingStars variant="warm" />
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-light mb-7 max-w-[15ch]">{d.ctaTitul}</h2>
            <p className="text-brand-light/85 text-lg md:text-xl font-light leading-relaxed max-w-[52ch] mb-10">{d.ctaText}</p>
            <Link href={d.kontaktHref} className="btn-cream">
              {d.ctaTlacitko} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
