import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import Drobecky from "@/components/Drobecky";

export const metadata: Metadata = {
  title: "Ceník reklamních tetovaček, samolepek a tiskovin",
  description:
    "Kolik stojí reklamní tetovačky s logem? Ceny od 11 Kč za kus u velkých nákladů, formáty A4 až A7, samolepky od 4 Kč, tiskoviny od 12 Kč. Ceny včetně DPH.",
  alternates: { canonical: "/cenik" },
  openGraph: {
    title: "Ceník reklamních tetovaček, samolepek a tiskovin | PartySkin B2B",
    description:
      "Ceny tetovaček s logem podle formátu a množství, včetně DPH. Samolepky od 4 Kč, tiskoviny od 12 Kč za kus.",
    url: "/cenik",
    images: [
      {
        url: "/og-partyskin-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "PartySkin B2B — dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};

const tetovacky = [
  { format: "A7 (nejmenší)", ceny: ["35 Kč", "22 Kč", "15 Kč", "11 Kč"] },
  { format: "A6", ceny: ["55 Kč", "35 Kč", "25 Kč", "19 Kč"] },
  { format: "A5", ceny: ["95 Kč", "59 Kč", "39 Kč", "29 Kč"] },
  { format: "A4 (největší)", ceny: ["179 Kč", "119 Kč", "79 Kč", "59 Kč"] },
];

const dalsi = [
  { produkt: "Samolepky na míru", cena: "od 4 Kč / ks", minimum: "od 100 ks", pozn: "Tvarový řez, voděodolné a UV odolné materiály." },
  { produkt: "Tiskoviny — pohlednice, pozvánky, vizitky", cena: "od 12 Kč / ks", minimum: "od 50 ks", pozn: "Profesionální papír, plnobarevný tisk." },
  { produkt: "Kompletní řešení pro akci", cena: "individuální", minimum: "dle rozsahu", pozn: "Balíček tetovaček, samolepek a tiskovin v jednom stylu." },
];

const vCene = [
  "Grafické zpracování vašeho loga nebo motivu",
  "Digitální vizualizace na reálném produktu před výrobou",
  "Jedno kolo úprav návrhu",
  "Plnobarevný tisk včetně bílé barvy",
  "Kontrola kvality před expedicí",
];

const zvlast = [
  "Balení — přebal na míru, sáčky, balení po sériích",
  "Tisk na rubovou stranu (návod, kontakt, QR kód)",
  "Expresní výroba mimo standardní termín",
  "Doprava — PPL, DPD nebo spedice u velkých zásilek",
];

const faq = [
  {
    q: "Kolik stojí 1 000 tetovaček s logem?",
    a: "U formátu A6 vychází 1 000 kusů na 19 Kč za kus, tedy 19 000 Kč včetně DPH. Menší formát A7 vyjde na 11 Kč za kus, větší A5 na 29 Kč. K ceně se připočítává balení a doprava.",
  },
  {
    q: "Je grafika v ceně?",
    a: "Ano. Zpracování vašeho loga nebo motivu, vizualizace na reálném produktu i jedno kolo úprav jsou zahrnuté v ceně zakázky.",
  },
  {
    q: "Jsou ceny s DPH, nebo bez?",
    a: "Uvedené ceny jsou včetně DPH a platí za jeden kus bez balení.",
  },
  {
    q: "Platí se záloha?",
    a: "U nových zákazníků požadujeme zálohu 50 % před zahájením výroby. U opakovaných objednávek fakturujeme po dodání.",
  },
  {
    q: "Jak se dá cena snížit?",
    a: "Největší vliv má množství — mezi náklady 100 kusů a 1 000 kusů je rozdíl zhruba třetina ceny za kus. Druhý nejsilnější faktor je formát: A7 vyjde na třetinu ceny A5. Pomůže i standardní balení místo přebalu na míru.",
  },
];

const SITE = "https://www.makethemoment.cz";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Ceník", item: `${SITE}/cenik` },
  ],
};

const cenikSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Ceník promo materiálů na míru",
  provider: { "@id": `${SITE}/#organizace` },
  itemListElement: [
    { "@type": "Offer", name: "Dočasné tetovačky A7", priceCurrency: "CZK", price: "11", description: "Cena za kus při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A6", priceCurrency: "CZK", price: "19", description: "Cena za kus při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A5", priceCurrency: "CZK", price: "29", description: "Cena za kus při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A4", priceCurrency: "CZK", price: "59", description: "Cena za kus při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Samolepky na míru", priceCurrency: "CZK", price: "4", description: "Cena za kus, minimum 100 ks, včetně DPH." },
    { "@type": "Offer", name: "Tiskoviny na míru", priceCurrency: "CZK", price: "12", description: "Cena za kus, minimum 50 ks, včetně DPH." },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cenikSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-28 pb-14 bg-brand-light">
        <div className="container-pad max-w-3xl">
          <Drobecky nazev="Ceník" />
          <span className="tag mb-4">Ceník</span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
            Kolik stojí reklamní tetovačky a promo materiály
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cena závisí na třech věcech: formátu archu, počtu kusů a způsobu balení. Níže jsou orientační ceny,
            přesnou kalkulaci připravíme zdarma do 24 hodin od poptávky.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-2">Dočasné tetovačky</h2>
          <p className="text-gray-500 mb-8">Ceny za jeden kus podle formátu a velikosti nákladu.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-brand-secondary">Formát</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-secondary">1–5 ks</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-secondary">20–49 ks</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-secondary">100–499 ks</th>
                  <th className="px-6 py-4 text-center font-semibold text-brand-secondary">1 000+ ks</th>
                </tr>
              </thead>
              <tbody>
                {tetovacky.map((r, i) => (
                  <tr key={r.format} className={`border-t border-gray-50 ${i % 2 === 1 ? "bg-gray-50/60" : ""}`}>
                    <td className="px-6 py-4 font-medium text-brand-secondary">{r.format}</td>
                    {r.ceny.map((c, j) => (
                      <td key={j} className="px-6 py-4 text-center text-gray-600">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mt-14 mb-8">Samolepky a tiskoviny</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dalsi.map((d) => (
              <div key={d.produkt} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display font-bold text-brand-secondary mb-1">{d.produkt}</h3>
                <p className="font-display font-extrabold text-brand-primary text-xl mb-1">{d.cena}</p>
                <p className="text-gray-400 text-xs mb-3">{d.minimum}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{d.pozn}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 text-sm text-gray-500 bg-brand-light rounded-xl p-4">
            <Info size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
            <p>
              Všechny ceny jsou <strong className="text-brand-secondary">včetně DPH</strong> a platí za jeden kus bez balení.
              U tetovaček nemáme minimální množství — vyrobíme i jeden arch.
            </p>
          </div>

          <a href="/PartySkin_B2B_Cenik.pdf" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-primary hover:underline">
            Stáhnout kompletní ceník (PDF) <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="container-pad grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-extrabold text-brand-secondary mb-5">Co je v ceně</h2>
            <ul className="space-y-3">
              {vCene.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-extrabold text-brand-secondary mb-5">Co se účtuje zvlášť</h2>
            <ul className="space-y-3">
              {zvlast.map((v) => (
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
          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-8">Časté otázky k cenám</h2>
          <div className="space-y-4">
            {faq.map((f) => (
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

      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="bg-gradient-to-br from-brand-primary to-[#593027] rounded-3xl p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">Chcete přesnou cenu?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Napište nám formát, přibližné množství a termín akce. Kalkulaci pošleme do 24 hodin, nezávazně a zdarma.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              Poptat kalkulaci <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
