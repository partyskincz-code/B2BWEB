import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import Drobecky from "@/components/Drobecky";
import FloatingStars from "@/components/FloatingStars";

export const metadata: Metadata = {
  title: "Ceník reklamních tetovaček, samolepek a tiskovin",
  description:
    "Kolik stojí reklamní tetovačky s logem? Orientační cenová pásma od 8 Kč za kus u velkých nákladů, formáty A4 až A7, samolepky od 3 Kč, tiskoviny od 8 Kč. Ceny včetně DPH, přesnou kalkulaci připravíme na míru.",
  alternates: { canonical: "/cenik" },
  openGraph: {
    title: "Ceník reklamních tetovaček, samolepek a tiskovin | Make the Moment",
    description:
      "Orientační cenová pásma tetovaček s logem podle formátu a množství, včetně DPH. Samolepky od 3 Kč, tiskoviny od 8 Kč za kus.",
    url: "/cenik",
    images: [
      {
        url: "/og-make-the-moment.jpg",
        width: 1200,
        height: 630,
        alt: "Make the Moment, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};

const hladiny = ["1 až 19 ks", "20 až 99 ks", "100 až 499 ks", "500 až 999 ks", "1 000+ ks"];

const tetovacky = [
  { format: "A4 (největší)", ceny: ["129 až 169 Kč", "75 až 89 Kč", "65 až 79 Kč", "55 až 69 Kč", "45 až 59 Kč"] },
  { format: "A5", ceny: ["65 až 89 Kč", "39 až 55 Kč", "32 až 39 Kč", "28 až 35 Kč", "22 až 29 Kč"] },
  { format: "A6", ceny: ["39 až 52 Kč", "25 až 33 Kč", "19 až 25 Kč", "17 až 22 Kč", "14 až 19 Kč"] },
  { format: "A7 (nejmenší)", ceny: ["24 až 33 Kč", "15 až 21 Kč", "12 až 15 Kč", "10 až 13 Kč", "8 až 11 Kč"] },
];

const baleni = [
  { typ: "Bez balení", priplatek: "základní cena", pozn: "Volné archy." },
  { typ: "S papírovým přebalem", priplatek: "+7 až 10 Kč / ks", pozn: "Přebal na míru, možnost tisku návodu na rub. Cena podle formátu a nákladu." },
  { typ: "S celofánem", priplatek: "+2 Kč / ks", pozn: "Zatavený celofánový sáček." },
  { typ: "Papír + celofán", priplatek: "+9 až 12 Kč / ks", pozn: "Kombinace obojího, nejlepší jako dárek." },
];

const dalsi = [
  { produkt: "Samolepky na míru", cena: "3 až 6 Kč / ks", minimum: "od 100 ks", pozn: "Tvarový řez, voděodolné a UV odolné materiály." },
  { produkt: "Tiskoviny, pohlednice, pozvánky, vizitky", cena: "8 až 15 Kč / ks", minimum: "od 1 ks", pozn: "Profesionální papír, plnobarevný tisk." },
  { produkt: "Kompletní řešení pro akci", cena: "individuální", minimum: "dle rozsahu", pozn: "Balíček tetovaček, samolepek a tiskovin v jednom stylu." },
];

const vCene = [
  "Základní úprava vašeho loga nebo motivu pro tisk",
  "Digitální vizualizace na reálném produktu před výrobou",
  "Jedno kolo úprav návrhu",
  "Plnobarevný tisk včetně bílé barvy",
  "Kontrola kvality před expedicí",
];

const zvlast = [
  "Balení, papírový přebal +7 až 10 Kč/ks, celofán +2 Kč/ks, kombinace +9 až 12 Kč/ks",
  "Tisk na rubovou stranu (text, logo, věnování, QR kód), +10 % z ceny zakázky",
  "Kusový ořez archu, 50 Kč / ks A4",
  "Grafické zpracování nad rámec základní úpravy, 500 Kč / hod",
  "Doprava po ČR, 99 Kč",
];

const faq = [
  {
    q: "Kolik stojí 1 000 tetovaček s logem?",
    a: "U formátu A6 se 1 000 kusů pohybuje mezi 14 a 19 Kč za kus, tedy zhruba 14 000 až 19 000 Kč včetně DPH. Menší formát A7 vychází na 8 až 11 Kč za kus, větší A5 na 22 až 29 Kč. Přesnou cenu stanovíme podle grafiky, balení a termínu.",
  },
  {
    q: "Je grafika v ceně?",
    a: "Ano. Zpracování vašeho loga nebo motivu, vizualizace na reálném produktu i jedno kolo úprav jsou zahrnuté v ceně zakázky.",
  },
  {
    q: "Jsou ceny s DPH, nebo bez?",
    a: "Uvedená pásma jsou včetně DPH a platí za jeden kus bez balení. Jsou orientační, závaznou cenu dostanete v nabídce na míru.",
  },
  {
    q: "Platí se záloha?",
    a: "U nových zákazníků požadujeme zálohu 50 % před zahájením výroby. U opakovaných objednávek fakturujeme po dodání.",
  },
  {
    q: "Jak se dá cena snížit?",
    a: "Největší vliv má množství, mezi náklady 100 kusů a 1 000 kusů je rozdíl zhruba třetina ceny za kus. Druhý nejsilnější faktor je formát: A7 vyjde na třetinu ceny A5. Pomůže i standardní balení místo přebalu na míru a jednodušší grafika.",
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
    { "@type": "Offer", name: "Dočasné tetovačky A7", priceCurrency: "CZK", price: "8", description: "Orientační cena za kus od, při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A6", priceCurrency: "CZK", price: "14", description: "Orientační cena za kus od, při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A5", priceCurrency: "CZK", price: "22", description: "Orientační cena za kus od, při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Dočasné tetovačky A4", priceCurrency: "CZK", price: "45", description: "Orientační cena za kus od, při nákladu od 1 000 ks, včetně DPH." },
    { "@type": "Offer", name: "Samolepky na míru", priceCurrency: "CZK", price: "3", description: "Orientační cena za kus od, minimum 100 ks, včetně DPH." },
    { "@type": "Offer", name: "Tiskoviny na míru", priceCurrency: "CZK", price: "8", description: "Orientační cena za kus od, tiskneme už od jednoho kusu, včetně DPH." },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cenikSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-28 pb-14 bg-brand-light relative overflow-hidden">
        <FloatingStars variant="light" density={0.5} />
        <div className="container-pad max-w-3xl">
          <Drobecky nazev="Ceník" />
          <span className="tag mb-4">Ceník</span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
            Kolik stojí reklamní tetovačky a promo materiály
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Každou zakázku počítáme na míru. Cena závisí na formátu archu, počtu kusů, náročnosti grafiky
            a způsobu balení, proto níže uvádíme orientační cenová pásma. Konkrétní cenu pro váš projekt
            připravíme zdarma do 24 hodin od poptávky.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-2">Dočasné tetovačky</h2>
          <p className="text-gray-500 mb-8">Orientační pásma za jeden kus podle formátu a velikosti nákladu. Konečnou cenu stanovíme podle konkrétního zadání.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold text-brand-secondary whitespace-nowrap">Formát</th>
                  {hladiny.map((h) => (
                    <th key={h} className="px-4 py-4 text-center font-semibold text-brand-secondary whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tetovacky.map((r, i) => (
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

          <h2 className="text-3xl font-display font-extrabold text-brand-secondary mt-14 mb-3">Balení</h2>
          <p className="text-gray-500 mb-8">Příplatek za kus k základní ceně tetovaček.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {baleni.map((b) => (
              <div key={b.typ} className="flex items-start justify-between gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div>
                  <p className="font-display font-bold text-brand-secondary">{b.typ}</p>
                  <p className="text-gray-500 text-sm mt-1">{b.pozn}</p>
                </div>
                <p className="font-display font-bold text-brand-primary whitespace-nowrap">{b.priplatek}</p>
              </div>
            ))}
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
              U tetovaček nemáme minimální množství, vyrobíme i jeden arch. Pro objednávky nad 5 000 ks připravíme kalkulaci na míru.
            </p>
          </div>

          <a href="/MakeTheMoment_B2B_Cenik.pdf" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
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
          <div className="bg-gradient-to-br from-brand-primary to-[#593027] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
            <FloatingStars variant="warm" />
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
