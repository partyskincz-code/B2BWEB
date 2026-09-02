import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Jaký formát tetovaček zvolit, A4, A5, A6 nebo A7",
  description:
    "Srovnání formátů archů dočasných tetovaček podle použití a ceny. Co se vyplatí na veletrh, co na festival a co jako dárek pro klienty.",
  alternates: { canonical: "/poradna/jaky-format-tetovacek-zvolit" },
  openGraph: {
    type: "article",
    title: "Jaký formát tetovaček zvolit, A4, A5, A6 nebo A7 | PartySkin B2B",
    description: "Srovnání formátů archů dočasných tetovaček podle použití a ceny. Co se vyplatí na veletrh, co na festival a co jako dárek pro klienty.",
    url: "/poradna/jaky-format-tetovacek-zvolit",
    images: [
      {
        url: "/og-partyskin-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "PartySkin B2B, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};

const data: Clanek = {
  "nadpis": "Jaký formát tetovaček zvolit: A4, A5, A6 nebo A7",
  "perex": "Formát archu rozhoduje o ceně víc než cokoli jiného, mezi A7 a A4 je pětinásobný rozdíl. Tady je, co se kde vyplatí a proč největší arch není vždycky nejlepší volba.",
  "datum": "2. 9. 2026",
  "ctenaMinut": 4,
  "foto": {
    "src": "/realizace-prebal-a5.jpg",
    "alt": "Arch dočasných tetovaček ve formátu A5 v přebalu"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Rychlé srovnání"
    },
    {
      "typ": "ul",
      "polozky": [
        "A7, nejmenší, od 11 Kč/ks při velkém nákladu. Jeden až tři menší motivy. Ideální na rozdávání ve velkém.",
        "A6, od 19 Kč/ks. Nejčastější volba u firemních akcí, vejde se do kapsy i do obálky.",
        "A5, od 29 Kč/ks. Prostor pro sadu motivů, funguje jako dárek.",
        "A4, od 59 Kč/ks. Velká sada nebo jeden výrazný motiv, hodí se jako pozornost pro klíčové klienty."
      ]
    },
    {
      "typ": "h2",
      "text": "Na veletrh a konferenci: A6 nebo A7"
    },
    {
      "typ": "p",
      "text": "U stánku rozhoduje, jestli si návštěvník věc vezme a jestli si ji nechá. Malý arch se dá podat jednou rukou, vejde se do kapsy u saka a nezmačká se v tašce s letáky. A4 u stánku spíš překáží."
    },
    {
      "typ": "p",
      "text": "Praktický poměr, který nám vychází u klientů: A7 nebo A6 pro běžné návštěvníky, pár kusů A5 nebo A4 schovaných pod pultem pro důležité schůzky."
    },
    {
      "typ": "h2",
      "text": "Na festival: A6, ale hodně"
    },
    {
      "typ": "p",
      "text": "Na festivalu je hlavní objem a rychlost rozdávání. A6 je dost velké na to, aby na něm byly tři až čtyři motivy, ze kterých si člověk vybere, a zároveň dost levné na tisícové náklady."
    },
    {
      "typ": "h2",
      "text": "Pro školy a dětské akce: A6 nebo A5"
    },
    {
      "typ": "p",
      "text": "Děti chtějí vybírat. Arch s víc motivy funguje líp než jeden velký obrázek, dítě si vybere a zbytek si nechá na příště. A5 s přebalem navíc vypadá jako dárek, ne jako reklama."
    },
    {
      "typ": "h2",
      "text": "Jako firemní dárek: A5 a A4"
    },
    {
      "typ": "p",
      "text": "Když má být tetovačka součástí dárkového balíčku nebo pozornosti pro klienta, dává smysl jít nahoru. Velký arch v přebalu na míru působí jako produkt, ne jako propagační předmět."
    },
    {
      "typ": "h2",
      "text": "Kolik motivů se na arch vejde"
    },
    {
      "typ": "p",
      "text": "Záleží na velikosti jednotlivých motivů, ale orientačně: na A7 jeden až tři menší, na A6 tři až šest, na A5 šest až deset, na A4 klidně patnáct. Čím víc motivů, tím menší každý z nich, a pod zhruba dva centimetry začínají detaily v tisku mizet."
    },
    {
      "typ": "tip",
      "text": "Nevíte, co zvolit? Pošlete nám motiv a počet lidí na akci. Doporučíme formát a spočítáme obě varianty, ať vidíte rozdíl v ceně."
    }
  ],
  "dalsi": [
    {
      "href": "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
      "label": "Jak připravit podklady pro tisk"
    },
    {
      "href": "/poradna/jak-dlouho-vydrzi-docasne-tetovacky",
      "label": "Jak dlouho vydrží dočasné tetovačky"
    },
    {
      "href": "/cenik",
      "label": "Ceník"
    },
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jaký formát tetovaček zvolit: A4, A5, A6 nebo A7",
  "description": "Srovnání formátů archů dočasných tetovaček podle použití a ceny. Co se vyplatí na veletrh, co na festival a co jako dárek pro klienty.",
  "datePublished": "2026-09-02",
  "dateModified": "2026-09-02",
  "author": {
    "@type": "Organization",
    "name": "PartySkin B2B",
    "url": "https://www.makethemoment.cz"
  },
  "publisher": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "image": "https://www.makethemoment.cz/realizace-prebal-a5.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/jaky-format-tetovacek-zvolit"
  },
  "inLanguage": "cs-CZ"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Domů",
      "item": "https://www.makethemoment.cz/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Poradna",
      "item": "https://www.makethemoment.cz/poradna"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Jaký formát tetovaček zvolit: A4, A5, A6 nebo A7",
      "item": "https://www.makethemoment.cz/poradna/jaky-format-tetovacek-zvolit"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ClanekLayout data={data} />
    </>
  );
}
