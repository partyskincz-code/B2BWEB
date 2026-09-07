import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Co dát na veletržní stánek, aby si to lidi vzali",
  description:
    "Většina letáků skončí v koši do dvou hodin. Co na veletržním stánku funguje, kolik kusů objednat a jak poznat, že předmět stojí za to.",
  alternates: { canonical: "/poradna/co-dat-na-veletrzni-stanek" },
  openGraph: {
    type: "article",
    title: "Co dát na veletržní stánek, aby si to lidi vzali | Make the Moment",
    description: "Většina letáků skončí v koši do dvou hodin. Co na veletržním stánku funguje, kolik kusů objednat a jak poznat, že předmět stojí za to.",
    url: "/poradna/co-dat-na-veletrzni-stanek",
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

const data: Clanek = {
  "nadpis": "Co dát na veletržní stánek, aby si to lidi vzali",
  "perex": "Návštěvník veletrhu projde za den padesát stánků a odnese si z nich tašku, kterou večer na hotelu vysype. Otázka není, co rozdat, ale co z toho přežije cestu domů.",
  "datum": "7. 9. 2026",
  "ctenaMinut": 5,
  "foto": {
    "src": "/hero.jpg",
    "alt": "Lidé na akci s dočasnými tetovačkami"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Proč letáky nefungují"
    },
    {
      "typ": "p",
      "text": "Leták je jednosměrná zpráva. Návštěvník si ho vezme ze zdvořilosti, protože ho podáváte, a vyhodí ho, jakmile má plné ruce. Nemá důvod si ho nechat, protože všechno, co je na něm, najde na webu."
    },
    {
      "typ": "p",
      "text": "Předmět, který funguje, má jednu ze dvou vlastností: buď se používá, nebo se ukazuje. Propiska se používá, ale nikdo si u ní nevybaví, odkud je. Tetovačka se ukazuje, a to i po akci."
    },
    {
      "typ": "h2",
      "text": "Co na stánku funguje"
    },
    {
      "typ": "ul",
      "polozky": [
        "Něco, co se dá vyzkoušet na místě. Návštěvník u vás stráví minutu navíc a vy máte důvod začít mluvit.",
        "Něco, co se vejde do kapsy. Velké věci lidé odkládají do tašky a z tašky pak do koše.",
        "Něco, co si člověk vezme domů dětem. To je ta nejspolehlivější cesta, jak se předmět dostane z veletrhu ven.",
        "Něco, co vypadá jako dárek, ne jako reklama. Přebal na míru dělá překvapivě velký rozdíl."
      ]
    },
    {
      "typ": "h2",
      "text": "Proč tetovačky"
    },
    {
      "typ": "p",
      "text": "Dočasná tetovačka splňuje všechno výše. Nalepí se za deset vteřin přímo u stánku, vydrží tři až sedm dní a po celou tu dobu se pohybuje po veletrhu i po kanceláři s vaším logem na předloktí."
    },
    {
      "typ": "p",
      "text": "A funguje i doma. Rodič donese arch dítěti, dítě si ho nalepí a vy máte značku na místě, kam se reklama běžně nedostane."
    },
    {
      "typ": "h2",
      "text": "Kolik kusů objednat"
    },
    {
      "typ": "p",
      "text": "Řiďte se počtem návštěvníků, ne počtem kontaktů. Na běžném oborovém veletrhu projde kolem stánku několikanásobně víc lidí, než kolik jich s vámi bude mluvit."
    },
    {
      "typ": "ul",
      "polozky": [
        "Malý stánek na oborové akci: 300 až 500 kusů",
        "Střední stánek na velkém veletrhu: 1 000 až 2 000 kusů",
        "Veletrh pro veřejnost s dětmi: počítejte spíš dva archy na rodinu"
      ]
    },
    {
      "typ": "p",
      "text": "Od tisíce kusů výš klesá cena za kus výrazně, takže rozdíl mezi 700 a 1 000 kusy je v celkové ceně menší, než byste čekali."
    },
    {
      "typ": "h2",
      "text": "Jaký formát"
    },
    {
      "typ": "p",
      "text": "Na stánek doporučujeme A6 nebo A7. Malý arch se dá podat jednou rukou, vejde se do kapsy u saka a nezmačká se v tašce mezi letáky. A4 u stánku spíš překáží."
    },
    {
      "typ": "p",
      "text": "Osvědčený poměr: A6 nebo A7 pro běžné návštěvníky a pár kusů A5 v přebalu schovaných pod pultem pro důležité schůzky."
    },
    {
      "typ": "h2",
      "text": "Na co nezapomenout"
    },
    {
      "typ": "ul",
      "polozky": [
        "Objednávejte s předstihem, výroba trvá 5 až 20 pracovních dní podle rozsahu",
        "Nechte si vytisknout návod na rubovou stranu přebalu, ušetří to vysvětlování u stánku",
        "Vezměte s sebou vlhčené ubrousky, aplikace je pak rychlejší",
        "Připravte si jednu ukázku nalepenou na sobě, prodává to samo"
      ]
    },
    {
      "typ": "tip",
      "text": "Řekněte nám, jaký veletrh chystáte a kolik čekáte návštěvníků. Doporučíme formát i náklad a pošleme kalkulaci do 24 hodin."
    }
  ],
  "dalsi": [
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh"
    },
    {
      "href": "/poradna/kolik-stoji-reklamni-tetovacky",
      "label": "Kolik stojí reklamní tetovačky"
    },
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát zvolit"
    },
    {
      "href": "/kontakt",
      "label": "Nezávazná poptávka"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Co dát na veletržní stánek, aby si to lidi vzali",
  "description": "Většina letáků skončí v koši do dvou hodin. Co na veletržním stánku funguje, kolik kusů objednat a jak poznat, že předmět stojí za to.",
  "datePublished": "2026-09-07",
  "dateModified": "2026-09-07",
  "author": {
    "@type": "Organization",
    "name": "Make the Moment",
    "url": "https://www.makethemoment.cz"
  },
  "publisher": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "image": "https://www.makethemoment.cz/hero.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/co-dat-na-veletrzni-stanek"
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
      "name": "Co dát na veletržní stánek, aby si to lidi vzali",
      "item": "https://www.makethemoment.cz/poradna/co-dat-na-veletrzni-stanek"
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
