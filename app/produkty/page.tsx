"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
} from "lucide-react";
import type { Metadata } from "next";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────
const categories = [
  {
    id: "tetovacky",
    tag: "Core produkt",
    title: "Dočasné tetovačky na míru",
    subtitle: "Nalepovací (transfer) — certifikované, bezpečné pro děti i dospělé",
    description:
      "Nejoblíbenější promo produkt pro eventy, firmy i soukromé akce. Nalepovací dočasné tetovačky s vaším logem, motivem nebo designem. Vlastní formát, plnobarevný tisk, bez minimálního množství.",
    price: "od 4 Kč / ks",
    minQty: "Bez minima",
    deliveryTime: "3–5 pracovních dní",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80",
    features: [
      "Vlastní design nebo logo zákazníka",
      "Formáty A6, A5, A4 nebo tvarový výřez",
      "Plnobarevný tisk + bílý tisk dostupný",
      "Certifikace EU — bezpečné materiály",
      "Vhodné pro děti od 3 let i pro dospělé",
      "Výdrž na kůži 3–7 dní",
      "Snadné nanesení i odstranění",
      "Balení dle přání (individuální, sáčkované, v krabičce)",
    ],
    useCases: ["Firemní eventy", "Festivaly", "Svatby", "Rozlučky", "Dětské oslavy", "Merch"],
    tagColor: "bg-brand-light text-brand-primary",
  },
  {
    id: "samolepky",
    tag: "Populární",
    title: "Samolepky na míru",
    subtitle: "Vlastní tvar, velikost, materiál",
    description:
      "Tvarové samolepky pro branding, packaging a merchandise. Dostupné v různých materiálech — lesklé, matné, průhledné, voděodolné. Výroba od 100 ks.",
    price: "od 4 Kč / ks",
    minQty: "Min. 100 ks",
    deliveryTime: "3–7 pracovních dní",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    features: [
      "Vlastní tvar (konturový výřez)",
      "Materiály: vinyl, papír, průhledná fólie",
      "Povrch: lesklý, matný, satén",
      "Voděodolné i UV odolné varianty",
      "Tisk na archy nebo jednotlivé kusy",
      "Vhodné pro outdoor i indoor použití",
      "Možnost přidání QR kódu",
      "Balení na míru",
    ],
    useCases: ["Packaging", "Branding", "Merch", "Labelling", "Dárky", "E-shopy"],
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    id: "pohlednice",
    tag: "Nové",
    title: "Pohlednice a přání na míru",
    subtitle: "Personalizovaný tisk s vlastním motivem",
    description:
      "Pohlednice a přání s vaším designem pro firemní promo, dárkové akce nebo personalizovanou komunikaci. Profesionální papír, živé barvy, výroba od 50 ks.",
    price: "od 12 Kč / ks",
    minQty: "Min. 50 ks",
    deliveryTime: "4–6 pracovních dní",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
    features: [
      "Formáty: A6, A5, čtvercové (10×10 cm)",
      "Jednostranný nebo oboustranný tisk",
      "Papír 300–400 g/m² krídový nebo recyklovaný",
      "Povrchová úprava: lesklý, matný, soft-touch laminát",
      "Personalizace každé pohlednice (jméno, text)",
      "Obálky součástí dodávky",
      "Možnost přidání tetovačky nebo samolepky do balíčku",
      "Balení v sadách nebo jednotlivě",
    ],
    useCases: ["Vánoční přání", "Pozvánky", "Promo kampaně", "Dárky", "Firemní dárky", "Svatby"],
    tagColor: "bg-green-50 text-green-600",
  },
  {
    id: "kompletni",
    tag: "Doporučujeme",
    title: "Kompletní řešení na klíč",
    subtitle: "Balíčky pro firemní eventy, teambuildingy, svatby a festivaly",
    description:
      "Neřešte logistiku s více dodavateli. U nás dostanete kompletní promo balíček — tetovačky, samolepky i pohlednice — vše s jednotným designem, ve stanoveném termínu.",
    price: "Individuální nabídka",
    minQty: "Dle rozsahu akce",
    deliveryTime: "Dle rozsahu projektu",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    features: [
      "Jeden dodavatel pro vše — žádné koordinační problémy",
      "Jednotný design napříč všemi produkty",
      "Grafické zpracování briefu od A do Z",
      "Projektový manažer pro vaši zakázku",
      "Flexibilní balíčky dle rozpočtu a termínu",
      "Doručení přímo na místo akce",
      "Express výroba v urgentních případech",
      "Referenční slevy pro opakované zakázky",
    ],
    useCases: ["Firemní eventy", "Teambuildingy", "Konference", "Svatby", "Festivaly", "Veletrhy"],
    tagColor: "bg-orange-50 text-orange-600",
  },
];

const segments = [
  {
    id: "firmy",
    icon: Building2,
    title: "Firmy a značky",
    products: ["Tetovačky s logem", "Samolepky na packaging", "Pohlednice pro B2B klienty"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
  },
  {
    id: "svatby",
    icon: Heart,
    title: "Svatby a oslavy",
    products: ["Tetovačky pro hosty", "Pohlednice a jmenovky", "Samolepky na dekorace"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: "festivaly",
    icon: Music,
    title: "Festivaly a akce",
    products: ["Festival merch tetovačky", "Brandingové samolepky", "Pohlednice pro fanoušky"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: "skoly",
    icon: GraduationCap,
    title: "Školy a děti",
    products: ["Dětské certifikované tetovačky", "Samolepky pro odměny", "Pohlednice z výletů"],
    image: "https://images.unsplash.com/photo-1594708767771-a5d9e239b7f9?w=600&q=80",
  },
  {
    id: "obchody",
    icon: Store,
    title: "Velkoobchod",
    products: ["Standardní kolekce k prodeji", "Sezónní edice", "Private label výroba"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
  },
];

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function ProduktyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">Naše nabídka</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              Produkty a nabídka
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Nejsme jen tetovačky. Jsme váš partner pro kompletní promo a brandingové materiály.
              Vše na míru, vše pod jednou střechou.
            </p>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-all"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Products */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-pad ${catIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-pad">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                catIndex % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <FadeUp delay={0.1} className={catIndex % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className={`tag text-xs ${cat.tagColor}`}>{cat.tag}</span>
                  </div>
                </div>
              </FadeUp>

              {/* Content */}
              <FadeUp delay={0.2} className={catIndex % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className={`tag text-xs ${cat.tagColor}`}>{cat.tag}</span>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-2">
                  {cat.title}
                </h2>
                <p className="text-brand-primary font-medium mb-4">{cat.subtitle}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.description}</p>

                {/* Pricing & info */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Cena od</p>
                    <p className="font-bold text-brand-secondary">{cat.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Minimální množství</p>
                    <p className="font-bold text-brand-secondary">{cat.minQty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Výroba</p>
                    <p className="font-bold text-brand-secondary">{cat.deliveryTime}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {cat.features.slice(0, 5).map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Use cases */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {cat.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                    >
                      {uc}
                    </span>
                  ))}
                </div>

                <Link href="/kontakt" className="btn-primary gap-2">
                  Poptat {cat.title.toLowerCase()}
                  <ArrowRight size={16} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Table & B2C Links */}
      <section className="section-pad bg-brand-light" id="cenik">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <span className="tag mb-4">Orientační ceník · dočasné tetovačky</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-3">
              Orientační ceny dočasných tetováček
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Konečná cena závisí na formátu, množství a balení. Tabulka níže je orientační —
              přesnou kalkulaci vám připravíme vždy individuálně, zdarma a bez závazků.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-brand-secondary">Formát</th>
                  <th className="px-6 py-4 font-semibold text-brand-secondary text-center">1–5 ks</th>
                  <th className="px-6 py-4 font-semibold text-brand-secondary text-center">20–49 ks</th>
                  <th className="px-6 py-4 font-semibold text-brand-secondary text-center">100–499 ks</th>
                  <th className="px-6 py-4 font-semibold text-brand-secondary text-center">1 000+ ks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { format: "A7 (nejmenší)", prices: ["35 Kč", "22 Kč", "15 Kč", "11 Kč"] },
                  { format: "A6", prices: ["55 Kč", "35 Kč", "25 Kč", "19 Kč"] },
                  { format: "A5", prices: ["95 Kč", "59 Kč", "39 Kč", "29 Kč"] },
                  { format: "A4 (největší)", prices: ["179 Kč", "119 Kč", "79 Kč", "59 Kč"] },
                ].map((row, i) => (
                  <tr key={row.format} className={`border-b border-gray-50 last:border-0 ${i % 2 === 1 ? "bg-gray-50/60" : ""}`}>
                    <td className="px-6 py-4 font-medium text-brand-secondary">{row.format}</td>
                    {row.prices.map((price, j) => (
                      <td key={j} className="px-6 py-4 text-center text-gray-600">{price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>

          <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 px-1">
            <p className="text-sm text-gray-400">
              Ceny jsou <strong className="text-gray-500">včetně DPH</strong>, za 1 ks, bez balení.
              Balení, tisk na rub a express výroba se účtují zvlášť.
            </p>
            <a
              href="/PartySkin_B2B_Cenik.pdf"
              className="text-sm font-semibold text-brand-primary flex items-center gap-1.5 hover:gap-2.5 transition-all whitespace-nowrap shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stáhnout plný ceník (PDF) <ArrowRight size={14} />
            </a>
          </FadeUp>

          {/* B2C eshop links */}
          <FadeUp delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">
                Také pro soukromé zákazníky
              </p>
              <h3 className="text-xl font-display font-bold text-brand-secondary mb-3">
                Hledáte hotové dočasné tetovačky bez zakázkové výroby?
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">
                PartySkin provozuje také spotřebitelské e-shopy pro soukromé zákazníky v Česku a na Slovensku.
                Vyberte si z hotových motivů nebo nechte vyrobit vlastní design — objednejte ihned,
                bez minimálního množství, s doručením do 2–3 pracovních dnů.{" "}
                <a
                  href="https://www.partyskin.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-medium hover:underline"
                >
                  Dočasné tetovačky na míru
                </a>{" "}
                jsou dostupné také přes náš{" "}
                <a
                  href="https://www.partyskin.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary font-medium hover:underline"
                >
                  slovenský e-shop s dočasnými tetovačkami
                </a>.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.partyskin.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  partyskin.cz — český e-shop <ArrowRight size={16} />
                </a>
                <a
                  href="https://www.partyskin.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  partyskin.sk — slovenský e-shop <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Segments section */}
      <section className="section-pad bg-brand-secondary">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag bg-white/10 text-white border border-white/20 mb-4">
              Pro koho
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 mb-4">
              Řešení pro každý segment
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Každá skupina zákazníků má jiné potřeby. Umíme je splnit.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((seg, i) => (
              <FadeUp key={seg.id} delay={i * 0.08}>
                <div id={seg.id} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                      <seg.icon size={20} className="text-brand-primary" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">{seg.title}</h3>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {seg.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-white/60 text-sm">
                        <ChevronRight size={14} className="text-brand-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="text-sm font-semibold text-brand-primary hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Poptat řešení <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-pad text-center">
          <FadeUp>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mb-4">
              Nenašli jste, co hledáte?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Kontaktujte nás a společně vymyslíme řešení na míru. Rádi poradíme.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/kontakt" className="btn-primary">
                Napište nám
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/jak-to-funguje" className="btn-outline">
                Jak to funguje?
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
