import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Dárkový balíček pro klienty, co do něj dát",
  description:
    "Jak složit firemní dárkový balíček, který se nevyhodí. Co do něj patří, kolik stojí, kdy ho poslat a čeho se vyvarovat, s rozpočty od 150 do 800 Kč.",
  alternates: { canonical: "/poradna/darkovy-balicek-pro-klienty" },
  openGraph: {
    type: "article",
    title: "Dárkový balíček pro klienty, co do něj dát | Make the Moment",
    description: "Jak složit firemní dárkový balíček, který se nevyhodí. Co do něj patří, kolik stojí, kdy ho poslat a čeho se vyvarovat, s rozpočty od 150 do 800 Kč.",
    url: "/poradna/darkovy-balicek-pro-klienty",
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
  "nadpis": "Dárkový balíček pro klienty, co do něj dát",
  "perex": "Dárkový balíček pro klienty je jedna z posledních příležitostí, kdy vám někdo dobrovolně dá pozornost. Většina firem ji promarní tím, že do krabice nasype předměty s logem.",
  "datum": "8. 9. 2026",
  "ctenaMinut": 5,
  "foto": {
    "src": "/realizace-papirovy-prebal.jpg",
    "alt": "Papírový přebal s potiskem jako součást firemního dárkového balíčku"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Základní pravidlo"
    },
    {
      "typ": "p",
      "text": "Balíček má vypadat jako dárek, ne jako vzorkovnice reklamních předmětů. To znamená málo věcí, dobrá kvalita a logo s mírou. Jedna věc s vaším logem stačí, ostatní může být neutrální."
    },
    {
      "typ": "p",
      "text": "Druhé pravidlo: musí to jít otevřít u stolu a nezpůsobit chaos. Žádné polystyrenové kuličky."
    },
    {
      "typ": "h2",
      "text": "Co do balíčku patří"
    },
    {
      "typ": "ul",
      "polozky": [
        "Něco k jídlu nebo pití. Káva od lokální pražírny, čaj, med, čokoláda. Vždycky projde.",
        "Něco osobního. Ručně psaná kartička od konkrétního člověka, ne od firmy.",
        "Něco hravého. Tetovačky s vaším motivem nebo hláškou. Klient je většinou dá dětem a zapamatuje si to.",
        "Něco praktického, ale nenudného. Kvalitní zápisník ano, propiska s logem ne."
      ]
    },
    {
      "typ": "h2",
      "text": "Rozpočty, které fungují"
    },
    {
      "typ": "p",
      "text": "Ceny jsou konečné včetně DPH, bez krabice a dopravy."
    },
    {
      "typ": "ul",
      "polozky": [
        "150 až 250 Kč: káva nebo čokoláda, tetovačky A6 s vaším motivem, kartička",
        "300 až 500 Kč: k tomu kvalitní zápisník nebo lokální produkt",
        "600 až 800 Kč: k tomu něco, co se vybírá podle konkrétního klienta"
      ]
    },
    {
      "typ": "p",
      "text": "Tetovačky do balíčku vyjdou při odběru od sta kusů na 19 až 25 Kč za kus u formátu A6. S papírovým přebalem, na jehož rub se dá vytisknout poděkování nebo QR kód, připočtěte 7 až 10 Kč."
    },
    {
      "typ": "h2",
      "text": "Kdy balíček poslat"
    },
    {
      "typ": "p",
      "text": "Prosinec je nejhorší volba, protože se ztratíte mezi třiceti dalšími. Zkuste to jinak."
    },
    {
      "typ": "ul",
      "polozky": [
        "Po dokončení zakázky. Nejsilnější moment, klient má čerstvý dobrý zážitek.",
        "K výročí spolupráce. Ukazuje, že si datum pamatujete.",
        "V lednu nebo únoru. Nikdo nic neposílá a vy vyčníváte.",
        "Bez důvodu, prostě protože jste na klienta mysleli. Tohle si lidé pamatují nejdéle."
      ]
    },
    {
      "typ": "h2",
      "text": "Čeho se vyvarovat"
    },
    {
      "typ": "ul",
      "polozky": [
        "Alkohol. Nevíte, kdo ho nepije a proč.",
        "Oblečení. Velikosti neuhádnete.",
        "Cokoli s velkým logem na nejviditelnějším místě.",
        "Předtištěné blahopřání s podpisem firmy. Působí to jako hromadný e-mail.",
        "Věci, které se musí někam vracet nebo registrovat."
      ]
    },
    {
      "typ": "h2",
      "text": "Praktická poznámka k počtům"
    },
    {
      "typ": "p",
      "text": "U tetovaček nemáme minimální množství, takže si můžete nechat vyrobit deset kusů na zkoušku a podívat se, jak balíček vypadá, než objednáte dvě stě. To u většiny reklamních předmětů nejde."
    },
    {
      "typ": "tip",
      "text": "Pošlete nám logo a počet klientů. Do 24 hodin dostanete návrh, jak by mohla vypadat část balíčku s vaším motivem, včetně ceny a termínu."
    }
  ],
  "dalsi": [
    {
      "href": "/poradna/drobne-darky-pro-zamestnance",
      "label": "Drobné dárky pro zaměstnance"
    },
    {
      "href": "/cenik",
      "label": "Kompletní ceník"
    },
    {
      "href": "/produkty",
      "label": "Co všechno umíme"
    },
    {
      "href": "/kontakt",
      "label": "Nezávazná poptávka"
    },
    {
      "href": "/poradna/zabava-na-firemni-vecirek",
      "label": "Zábava na firemní večírek"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dárkový balíček pro klienty, co do něj dát",
  "description": "Jak složit firemní dárkový balíček, který se nevyhodí. Co do něj patří, kolik stojí, kdy ho poslat a čeho se vyvarovat, s rozpočty od 150 do 800 Kč.",
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
  "image": "https://www.makethemoment.cz/realizace-papirovy-prebal.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/darkovy-balicek-pro-klienty"
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
      "name": "Dárkový balíček pro klienty, co do něj dát",
      "item": "https://www.makethemoment.cz/poradna/darkovy-balicek-pro-klienty"
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
