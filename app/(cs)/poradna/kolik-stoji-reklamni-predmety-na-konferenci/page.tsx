import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Kolik stojí reklamní předměty na konferenci",
  description:
    "Reálný rozpočet na promo materiály podle počtu účastníků. Kolik dát na osobu, co se vyplatí a co je vyhozené, s modelovými příklady pro 100 až 1 000 lidí.",
  alternates: { canonical: "/poradna/kolik-stoji-reklamni-predmety-na-konferenci" },
  openGraph: {
    type: "article",
    title: "Kolik stojí reklamní předměty na konferenci | Make the Moment",
    description: "Reálný rozpočet na promo materiály podle počtu účastníků. Kolik dát na osobu, co se vyplatí a co je vyhozené, s modelovými příklady pro 100 až 1 000 lidí.",
    url: "/poradna/kolik-stoji-reklamni-predmety-na-konferenci",
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
  "nadpis": "Kolik stojí reklamní předměty na konferenci",
  "perex": "Rozpočet na promo se dělá nejčastěji odzadu: někdo řekne číslo a vy máte vymyslet, co se do něj vejde. Tady je opačný postup, od počtu lidí ke smysluplné částce.",
  "datum": "8. 9. 2026",
  "ctenaMinut": 5,
  "foto": {
    "src": "/realizace-prebal-b2b-a5.jpg",
    "alt": "Reklamní tetovačky s logem klienta v papírovém přebalu na konferenci"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Kolik na osobu je normální"
    },
    {
      "typ": "p",
      "text": "U firemních konferencí a veletrhů se drobná pozornost pro účastníka běžně vejde do 20 až 80 Kč. Pod dvacet korun je to většinou předmět, který nikdo nepoužije. Nad sto korun už mluvíme o dárku pro vybrané hosty, ne o rozdávání u stánku."
    },
    {
      "typ": "p",
      "text": "Pomůže rozdělit rozpočet na dvě části. Něco levného pro všechny, kdo projdou, a něco lepšího pro lidi, se kterými skutečně mluvíte."
    },
    {
      "typ": "h2",
      "text": "Modelové příklady"
    },
    {
      "typ": "p",
      "text": "Ceny jsou konečné včetně DPH a počítáme s formátem A6, tedy tím, který se u konferencí nejvíc používá."
    },
    {
      "typ": "ul",
      "polozky": [
        "100 účastníků: 19 až 25 Kč za kus, celkem 1 900 až 2 500 Kč",
        "300 účastníků: 19 až 25 Kč za kus, celkem 5 700 až 7 500 Kč",
        "500 účastníků: 17 až 22 Kč za kus, celkem 8 500 až 11 000 Kč",
        "1 000 účastníků: 14 až 19 Kč za kus, celkem 14 000 až 19 000 Kč"
      ]
    },
    {
      "typ": "p",
      "text": "Když chcete z drobnosti udělat dárek, papírový přebal s vaším potiskem přidá 7 až 10 Kč na kus. U tří set lidí to znamená 2 100 až 3 000 Kč navíc."
    },
    {
      "typ": "h2",
      "text": "Co se vyplatí"
    },
    {
      "typ": "ul",
      "polozky": [
        "Věci, které se hned použijí. Tetovačka, káva, voda, něco k jídlu.",
        "Věci, které se nosí. Účastník sám dělá vaši reklamu po celé hale.",
        "Jedna dobrá věc místo tří průměrných. Rozpočet se rozmělní a nikdo si nic nezapamatuje.",
        "Něco, co má vztah k tomu, co děláte. Souvislost si lidé pamatují lépe než logo."
      ]
    },
    {
      "typ": "h2",
      "text": "Co je vyhozené"
    },
    {
      "typ": "ul",
      "polozky": [
        "Propisky a bloky. Každý má doma deset.",
        "Tištěné katalogy. Nikdo je nechce nosit a doma je vyhodí.",
        "USB disky. Vypadají hodnotně, ale nikdo je nepoužije.",
        "Předměty, které se musí sestavit, nastavit nebo vyplnit."
      ]
    },
    {
      "typ": "h2",
      "text": "Kolik toho objednat"
    },
    {
      "typ": "p",
      "text": "Když rozdáváte u stánku, drobnost si vezme zhruba každý pátý až desátý člověk, který kolem projde. Když ji dáváte do konferenčního balíčku, počítejte s jedním kusem na registrovaného účastníka plus deset procent rezervy."
    },
    {
      "typ": "p",
      "text": "Rezerva se hodí. Zbytek se dá použít na příští akci, pokud na motivu není rok ani název konkrétní konference."
    },
    {
      "typ": "h2",
      "text": "Kdy zadat výrobu"
    },
    {
      "typ": "p",
      "text": "Běžná výroba trvá 5 až 20 pracovních dní od schválení návrhu, k tomu připočtěte pár dní na grafiku a vaše schvalování. Tři týdny před akcí je bezpečné minimum, měsíc je pohodlný."
    },
    {
      "typ": "tip",
      "text": "Napište nám počet účastníků a rozpočet, který máte. Do 24 hodin dostanete konkrétní návrh, co se do něj vejde, včetně formátu a termínu. Zdarma a nezávazně."
    }
  ],
  "dalsi": [
    {
      "href": "/cenik",
      "label": "Kompletní ceník"
    },
    {
      "href": "/poradna/co-dat-na-veletrzni-stanek",
      "label": "Co dát na veletržní stánek"
    },
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh a konferenci"
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
  "headline": "Kolik stojí reklamní předměty na konferenci",
  "description": "Reálný rozpočet na promo materiály podle počtu účastníků. Kolik dát na osobu, co se vyplatí a co je vyhozené, s modelovými příklady pro 100 až 1 000 lidí.",
  "datePublished": "2026-09-08",
  "dateModified": "2026-09-08",
  "author": {
    "@type": "Organization",
    "name": "Make the Moment",
    "url": "https://www.makethemoment.cz"
  },
  "publisher": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "image": "https://www.makethemoment.cz/realizace-prebal-b2b-a5.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/kolik-stoji-reklamni-predmety-na-konferenci"
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
      "name": "Kolik stojí reklamní předměty na konferenci",
      "item": "https://www.makethemoment.cz/poradna/kolik-stoji-reklamni-predmety-na-konferenci"
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
