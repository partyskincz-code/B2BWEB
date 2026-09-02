import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Drobecky from "@/components/Drobecky";

export const metadata: Metadata = {
  title: "Poradna — jak na dočasné tetovačky a promo materiály",
  description:
    "Praktické návody k dočasným tetovačkám: jak připravit podklady pro tisk, jaký formát archu zvolit a jak dlouho tetovačky vydrží na kůži.",
  alternates: { canonical: "/poradna" },
  openGraph: {
    title: "Poradna | PartySkin B2B",
    description:
      "Jak připravit podklady, jaký formát zvolit a jak dlouho tetovačky vydrží. Návody z praxe.",
    url: "/poradna",
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

const clanky = [
  {
    href: "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
    nadpis: "Jak připravit podklady pro tisk dočasných tetovaček",
    perex: "Jaký formát souboru dodat, proč je bílá barva zásadní a co dělat, když nemáte grafika.",
    foto: "/realizace-prebal-b2b-a5.jpg",
    minut: 4,
  },
  {
    href: "/poradna/jaky-format-tetovacek-zvolit",
    nadpis: "Jaký formát tetovaček zvolit: A4, A5, A6 nebo A7",
    perex: "Mezi nejmenším a největším archem je pětinásobný rozdíl v ceně. Co se kde vyplatí.",
    foto: "/realizace-prebal-a5.jpg",
    minut: 4,
  },
  {
    href: "/poradna/jak-dlouho-vydrzi-docasne-tetovacky",
    nadpis: "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit",
    perex: "Běžně 3 až 7 dní. Co výdrž ovlivňuje, kam tetovačku nalepit a jak ji sundat.",
    foto: "/realizace-detske-prebal-a6.jpg",
    minut: 5,
  },
];

const SITE = "https://www.makethemoment.cz";

const seznamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Poradna PartySkin B2B",
  itemListElement: clanky.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE}${c.href}`,
    name: c.nadpis,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Poradna", item: `${SITE}/poradna` },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seznamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="pt-28 pb-12 bg-brand-light">
        <div className="container-pad max-w-3xl">
          <Drobecky nazev="Poradna" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mb-5 leading-tight">
            Poradna
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Odpovědi na otázky, které dostáváme nejčastěji, než se zakázka rozjede. Bez marketingových frází,
            z praxe od výroby.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clanky.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={c.foto}
                    alt={c.nadpis}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-brand-secondary text-lg mb-2 group-hover:text-brand-primary transition-colors">
                    {c.nadpis}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{c.perex}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                    Číst článek <ArrowRight size={15} />
                  </span>
                  <span className="text-gray-400 text-xs mt-2">čtení na {c.minut} minuty</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
