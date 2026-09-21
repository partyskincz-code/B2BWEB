import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit",
  description:
    "Dočasné tetovačky vydrží běžně 3 až 7 dní. Co výdrž ovlivňuje, kam je nalepit, jak je sundat a jestli jsou bezpečné pro děti.",
  alternates: { canonical: "/poradna/jak-dlouho-vydrzi-docasne-tetovacky" },
  openGraph: {
    type: "article",
    title: "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit | Make the Moment",
    description: "Dočasné tetovačky vydrží běžně 3 až 7 dní. Co výdrž ovlivňuje, kam je nalepit, jak je sundat a jestli jsou bezpečné pro děti.",
    url: "/poradna/jak-dlouho-vydrzi-docasne-tetovacky",
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
  "nadpis": "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit",
  "perex": "Nejčastější otázka, kterou dostáváme od firem před akcí. Odpověď je 3 až 7 dní, ale rozptyl je velký a dá se s ním pracovat.",
  "datum": "2. 9. 2026",
  "ctenaMinut": 5,
  "foto": {
    "src": "/realizace-detske-prebal-a6.jpg",
    "alt": "Dětské dočasné tetovačky ve formátu A6"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Co výdrž ovlivňuje nejvíc"
    },
    {
      "typ": "ul",
      "polozky": [
        "Místo na těle: nejdéle vydrží na paži, lýtku a rameni, nejkratší dobu na rukou a prstech",
        "Tření o oblečení: pod rukávem se tetovačka odře rychleji než na předloktí",
        "Voda a mýdlo: sprchování výdrž zkracuje, koupání v bazénu ještě víc",
        "Krémy a oleje: mastná pokožka tetovačku uvolňuje",
        "Pocení a sport: na letním festivalu počítejte spíš se spodní hranicí"
      ]
    },
    {
      "typ": "h2",
      "text": "Jak nalepit, aby držela"
    },
    {
      "typ": "p",
      "text": "Kůže musí být čistá a odmaštěná, ideálně otřít mokrým ubrouskem a nechat uschnout. Žádný krém ani opalovací mléko těsně předtím. Tetovačku přiložte, přitiskněte mokrým hadříkem a nechte deset až patnáct vteřin působit, teprve pak papír opatrně sloupněte."
    },
    {
      "typ": "tip",
      "text": "Nejčastější chyba je netrpělivost, když se papír strhne po pěti vteřinách, motiv se přenese jen zčásti. Deset vteřin je minimum, dvacet je jistota."
    },
    {
      "typ": "h2",
      "text": "Jak výdrž prodloužit"
    },
    {
      "typ": "ul",
      "polozky": [
        "Lepit na místo, kde se kůže neohýbá a netře o oblečení",
        "Po nalepení nechat pár minut zaschnout, nezakrývat rukávem",
        "Při sprchování na tetovačku nepouštět přímý proud vody a nemydlit ji",
        "Nepoužívat na to místo krém ani olej",
        "Na delší akci lidem raději dát arch s víc motivy, ať si můžou přelepit"
      ]
    },
    {
      "typ": "h2",
      "text": "Jak tetovačku sundat"
    },
    {
      "typ": "p",
      "text": "Vodou a mýdlem, u odolnějších motivů dětským olejem, odličovacím mlékem nebo obyčejným krémem, nechte chvíli působit a setřete. Nedrhněte hrubě, kůže to nemá ráda a není to potřeba."
    },
    {
      "typ": "h2",
      "text": "Bezpečnost, hlavně u dětí"
    },
    {
      "typ": "p",
      "text": "Naše tetovačky jsou certifikované pro použití dětmi od tří let. Materiály neobsahují škodlivé látky. Přesto platí obecné pravidlo, které říkáme i školám: nelepit na podrážděnou nebo poraněnou kůži a u dětí s citlivou pokožkou vyzkoušet nejdřív malý motiv."
    },
    {
      "typ": "h2",
      "text": "Co říct lidem na akci"
    },
    {
      "typ": "p",
      "text": "Když rozdáváte tetovačky na eventu, vyplatí se mít návod přímo na přebalu, lidé se pak neptají a výsledek vypadá líp. Tisk na rubovou stranu archu nebo na přebal děláme běžně, je to malý náklad s velkým efektem."
    }
  ],
  "dalsi": [
    {
      "href": "/poradna/drobne-darky-pro-zamestnance",
      "label": "Drobné dárky pro zaměstnance"
    },
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát tetovaček zvolit"
    },
    {
      "href": "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
      "label": "Jak připravit podklady pro tisk"
    },
    {
      "href": "/tetovacky-na-festival",
      "label": "Tetovačky na festival"
    },
    {
      "href": "/tetovacky-pro-skoly",
      "label": "Tetovačky pro školy"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit",
  "description": "Dočasné tetovačky vydrží běžně 3 až 7 dní. Co výdrž ovlivňuje, kam je nalepit, jak je sundat a jestli jsou bezpečné pro děti.",
  "datePublished": "2026-09-02",
  "dateModified": "2026-09-02",
  "author": {
    "@type": "Organization",
    "name": "Make the Moment",
    "url": "https://www.makethemoment.cz"
  },
  "publisher": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "image": "https://www.makethemoment.cz/realizace-detske-prebal-a6.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/jak-dlouho-vydrzi-docasne-tetovacky"
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
      "name": "Jak dlouho vydrží dočasné tetovačky a jak výdrž prodloužit",
      "item": "https://www.makethemoment.cz/poradna/jak-dlouho-vydrzi-docasne-tetovacky"
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
