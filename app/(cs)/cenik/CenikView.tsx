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
      <section className="pt-28 pb-14 bg-brand-light relative overflow-hidden">
        <FloatingStars variant="light" density={0.5} />
        <div className="container-pad max-w-3xl">
          <Drobecky nazev={d.tag} />
          <span className="tag mb-4">{d.tag}</span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
            {d.h1}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{d.perex}</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-2">{d.tetovackyTitul}</h2>
          <p className="text-gray-500 mb-8">{d.tetovackyPerex}</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold text-brand-secondary whitespace-nowrap">{d.sloupecFormat}</th>
                  {d.hladiny.map((h) => (
                    <th key={h} className="px-4 py-4 text-center font-semibold text-brand-secondary whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.tetovacky.map((r, i) => (
                  <tr key={r.format} className={`border-t border-gray-50 ${i % 2 === 1 ? "bg-gray-50/60" : ""}`}>
                    <td className="px-4 py-4 font-medium text-brand-secondary whitespace-nowrap">{r.format}</td>
                    {r.ceny.map((c, j) => (
                      <td key={j} className="px-4 py-4 text-center text-gray-600 whitespace-nowrap">{c}</td>
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
              <div key={b.typ} className="flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
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
                  <div key={b.typ} className="flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {d.dalsi.map((x) => (
              <div key={x.produkt} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display font-bold text-brand-secondary mb-1">{x.produkt}</h3>
                <p className="font-display font-extrabold text-brand-primary text-xl mb-1">{x.cena}</p>
                <p className="text-gray-400 text-xs mb-3">{x.minimum}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{x.pozn}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 text-sm text-gray-500 bg-brand-light rounded-xl p-4">
            <Info size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
            <p>
              {d.infoBox.pred} <strong className="text-brand-secondary">{d.infoBox.zvyraznene}</strong>{d.infoBox.po}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {d.odkazyPod.map((o) => (
              <Link key={o.href} href={o.href} className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-brand-primary/40 hover:text-brand-primary transition-colors">
                {o.label}
              </Link>
            ))}
          </div>

          <a href="/MakeTheMoment_B2B_Cenik.pdf" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
            {d.pdfLabel} <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
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
              <details key={f.q} className="group bg-gray-50 rounded-2xl border border-gray-100 p-6">
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{d.dalNadpis}</p>
          <div className="flex flex-wrap gap-3">
            {d.dalOdkazy.map((o) => (
              <Link key={o.href} href={o.href} className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:border-brand-primary/40 hover:text-brand-primary transition-colors">
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="bg-gradient-to-br from-brand-primary to-[#593027] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
            <FloatingStars variant="warm" />
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">{d.ctaTitul}</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{d.ctaText}</p>
            <Link href={d.kontaktHref} className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              {d.ctaTlacitko} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
