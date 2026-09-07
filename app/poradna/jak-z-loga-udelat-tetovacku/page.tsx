import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Jak z firemního loga udělat tetovačku, kterou si lidi nalepí",
  description:
    "Logo přenesené na kůži jedna k jedné většinou nefunguje. Jak ho zjednodušit, jakou velikost zvolit a proč tenké linky na kůži mizí.",
  alternates: { canonical: "/poradna/jak-z-loga-udelat-tetovacku" },
  openGraph: {
    type: "article",
    title: "Jak z firemního loga udělat tetovačku, kterou si lidi nalepí | Make the Moment",
    description: "Logo přenesené na kůži jedna k jedné většinou nefunguje. Jak ho zjednodušit, jakou velikost zvolit a proč tenké linky na kůži mizí.",
    url: "/poradna/jak-z-loga-udelat-tetovacku",
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
  "nadpis": "Jak z firemního loga udělat tetovačku, kterou si lidi nalepí",
  "perex": "Logo je navržené pro papír a obrazovku, ne pro kůži. Tohle je rozdíl, který rozhoduje o tom, jestli si tetovačku někdo nalepí, nebo ji nechá ležet na stole.",
  "datum": "7. 9. 2026",
  "ctenaMinut": 4,
  "foto": {
    "src": "/realizace-papirovy-prebal.jpg",
    "alt": "Papírový přebal s archem tetovaček na míru"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Logo samo o sobě nestačí"
    },
    {
      "typ": "p",
      "text": "Nejčastější zadání, které dostáváme, zní: dejte nám tam naše logo. Výsledek pak vypadá jako nálepka z veletrhu a nikdo si ho nedá na ruku."
    },
    {
      "typ": "p",
      "text": "Lidé si na sebe lepí věci, které něco říkají o nich, ne o vás. Nejlepší firemní tetovačky proto logo obsahují, ale nestojí na něm. Stojí na motivu, hlášce nebo symbolu, ke kterému se člověk chce hlásit."
    },
    {
      "typ": "h2",
      "text": "Co na kůži funguje"
    },
    {
      "typ": "ul",
      "polozky": [
        "Výrazný symbol z vašeho loga, ne celý logotyp s názvem a claimem",
        "Krátká hláška, kterou lidé z vašeho oboru poznají",
        "Maskot nebo ilustrace, pokud je má firma",
        "Motiv spojený s konkrétní akcí, například datum konference nebo název projektu"
      ]
    },
    {
      "typ": "p",
      "text": "Osvědčený postup: udělejte arch, na kterém je několik motivů a mezi nimi jeden s logem. Člověk si vybere, co se mu líbí, a logo si vezme jako bonus."
    },
    {
      "typ": "h2",
      "text": "Technická omezení, která je dobré znát předem"
    },
    {
      "typ": "ul",
      "polozky": [
        "Tenké linky pod zhruba půl milimetru se při aplikaci na kůži ztrácejí",
        "Text menší než čtyři milimetry na výšku je po nalepení nečitelný",
        "Přechody a jemné stíny fungují hůř než plné plochy",
        "Bílá barva se tiskne zvlášť, což je dobře, protože na tmavší kůži je bez ní logo neviditelné",
        "Velmi světlé odstíny na světlé kůži zaniknou, přidejte obrys nebo tmavší variantu"
      ]
    },
    {
      "typ": "h2",
      "text": "Jaká velikost motivu"
    },
    {
      "typ": "p",
      "text": "Pod dva centimetry začínají detaily mizet. Ideální jednotlivý motiv má tři až šest centimetrů, to je velikost, která je vidět na fotce a zároveň se vejde na předloktí i na ruku."
    },
    {
      "typ": "p",
      "text": "Když má logo horizontální formát s dlouhým názvem, zvažte svislou variantu nebo použijte jen značku bez textu."
    },
    {
      "typ": "h2",
      "text": "Co nám poslat"
    },
    {
      "typ": "ul",
      "polozky": [
        "Logo ve vektoru, ideálně AI, EPS, PDF nebo SVG",
        "Když vektor nemáte, PNG s průhledným pozadím v co největším rozlišení",
        "Firemní barvy, nejlépe v CMYK nebo aspoň HEX",
        "Informaci, na jakou akci to je a kdo to bude nosit"
      ]
    },
    {
      "typ": "p",
      "text": "Základní úpravu loga pro tisk máte v ceně. Když vektor nemáte vůbec, dokážeme logo překreslit, to už se účtuje jako grafické zpracování za 500 Kč na hodinu."
    },
    {
      "typ": "h2",
      "text": "Než se začne vyrábět"
    },
    {
      "typ": "p",
      "text": "Ke každé zakázce posíláme digitální vizualizaci na reálném produktu, takže vidíte, jak to bude vypadat na kůži, ne jen na bílém pozadí. Jedno kolo úprav je v ceně."
    },
    {
      "typ": "tip",
      "text": "Pošlete logo v čemkoli, co máte. Řekneme vám rovnou, jestli je na tisk použitelné, a když ne, co s tím."
    }
  ],
  "dalsi": [
    {
      "href": "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
      "label": "Jak připravit podklady pro tisk"
    },
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát zvolit"
    },
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
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
  "headline": "Jak z firemního loga udělat tetovačku, kterou si lidi nalepí",
  "description": "Logo přenesené na kůži jedna k jedné většinou nefunguje. Jak ho zjednodušit, jakou velikost zvolit a proč tenké linky na kůži mizí.",
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
  "image": "https://www.makethemoment.cz/realizace-papirovy-prebal.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/jak-z-loga-udelat-tetovacku"
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
      "name": "Jak z firemního loga udělat tetovačku, kterou si lidi nalepí",
      "item": "https://www.makethemoment.cz/poradna/jak-z-loga-udelat-tetovacku"
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
