import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Kolik stojí reklamní tetovačky s logem",
  description:
    "Reálné ceny reklamních tetovaček podle formátu a nákladu, co je v ceně, co se účtuje zvlášť a na čem se dá ušetřit. Orientační pásma včetně DPH.",
  alternates: { canonical: "/poradna/kolik-stoji-reklamni-tetovacky" },
  openGraph: {
    type: "article",
    title: "Kolik stojí reklamní tetovačky s logem | Make the Moment",
    description: "Reálné ceny reklamních tetovaček podle formátu a nákladu, co je v ceně, co se účtuje zvlášť a na čem se dá ušetřit. Orientační pásma včetně DPH.",
    url: "/poradna/kolik-stoji-reklamni-tetovacky",
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
  "nadpis": "Kolik stojí reklamní tetovačky s logem",
  "perex": "Nejčastější otázka, kterou dostáváme. Odpověď zní od osmi korun za kus, ale to samo o sobě nic neříká. Tady je rozpad ceny podle toho, co doopravdy objednáváte.",
  "datum": "7. 9. 2026",
  "ctenaMinut": 5,
  "foto": {
    "src": "/realizace-prebal-b2b-a5.jpg",
    "alt": "Arch reklamních tetovaček s logem klienta v papírovém přebalu"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Cenu určují tři věci"
    },
    {
      "typ": "ul",
      "polozky": [
        "Formát archu. Mezi nejmenším A7 a největším A4 je zhruba pětinásobný rozdíl.",
        "Počet kusů. Mezi stovkou a tisícem kusů klesá cena za kus zhruba na třetinu.",
        "Balení. Volný arch je základní cena, celofán a papírový přebal se připočítávají."
      ]
    },
    {
      "typ": "h2",
      "text": "Orientační pásma za kus"
    },
    {
      "typ": "p",
      "text": "Ceny jsou včetně DPH, za jeden arch bez balení. Uvádíme pásma, protože konečná cena vychází z konkrétního zadání, náročnosti grafiky a termínu."
    },
    {
      "typ": "ul",
      "polozky": [
        "A7, nejmenší: 24 až 33 Kč při pár kusech, 8 až 11 Kč od tisíce kusů",
        "A6: 39 až 52 Kč při pár kusech, 14 až 19 Kč od tisíce kusů",
        "A5: 65 až 89 Kč při pár kusech, 22 až 29 Kč od tisíce kusů",
        "A4, největší: 129 až 169 Kč při pár kusech, 45 až 59 Kč od tisíce kusů"
      ]
    },
    {
      "typ": "h2",
      "text": "Modelový příklad"
    },
    {
      "typ": "p",
      "text": "Konference pro tři sta lidí, formát A6, jeden arch na osobu. Vychází to zhruba na 19 až 25 Kč za kus, tedy 5 700 až 7 500 Kč včetně DPH za celou akci. S papírovým přebalem na míru připočtěte 7 až 10 Kč na kus."
    },
    {
      "typ": "p",
      "text": "Pro srovnání: propiska s potiskem vyjde v podobném nákladu na 15 až 30 Kč a skončí ve šuplíku. Tetovačku si člověk nalepí a chodí s ní."
    },
    {
      "typ": "h2",
      "text": "Co je v ceně"
    },
    {
      "typ": "ul",
      "polozky": [
        "Základní úprava vašeho loga nebo motivu pro tisk",
        "Digitální vizualizace na reálném produktu, uvidíte to dřív, než se vyrábí",
        "Jedno kolo úprav návrhu",
        "Plnobarevný tisk včetně bílé barvy",
        "Kontrola kvality před expedicí"
      ]
    },
    {
      "typ": "h2",
      "text": "Co se účtuje zvlášť"
    },
    {
      "typ": "ul",
      "polozky": [
        "Balení: celofán +2 Kč/ks, papírový přebal +7 až 10 Kč/ks, kombinace +9 až 12 Kč/ks",
        "Tisk na rubovou stranu, například návod nebo QR kód, +10 % z ceny zakázky",
        "Kusový ořez archu, 50 Kč za kus u A4",
        "Grafické zpracování nad rámec základní úpravy, 500 Kč za hodinu",
        "Doprava po ČR, 99 Kč"
      ]
    },
    {
      "typ": "h2",
      "text": "Na čem se dá ušetřit"
    },
    {
      "typ": "p",
      "text": "Největší vliv má množství. Když víte, že akci budete opakovat, vyplatí se objednat na dvakrát najednou, motiv bez roku se dá použít i příští rok."
    },
    {
      "typ": "p",
      "text": "Druhý nejsilnější faktor je formát. Když jde hlavně o to, aby si lidé odnesli logo, A7 nebo A6 udělá stejnou službu jako A4 za třetinu peněz."
    },
    {
      "typ": "p",
      "text": "Třetí je balení. Volné archy stačí, když se rozdávají u stánku. Přebal má smysl tam, kde tetovačka funguje jako dárek."
    },
    {
      "typ": "h2",
      "text": "Minimální množství"
    },
    {
      "typ": "p",
      "text": "U tetovaček žádné nemáme, vyrobíme i jediný arch. U samolepek je minimum sto kusů. To znamená, že si můžete nechat udělat vzorek, než objednáte tisíc kusů na veletrh."
    },
    {
      "typ": "tip",
      "text": "Pošlete nám logo a přibližný počet lidí na akci. Do 24 hodin dostanete kalkulaci na míru včetně doporučení formátu, a to zdarma a nezávazně."
    }
  ],
  "dalsi": [
    {
      "href": "/cenik",
      "label": "Kompletní ceník"
    },
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát zvolit"
    },
    {
      "href": "/poradna/co-dat-na-veletrzni-stanek",
      "label": "Co dát na veletržní stánek"
    },
    {
      "href": "/kontakt",
      "label": "Nezávazná poptávka"
    },
    {
      "href": "/poradna/kolik-stoji-reklamni-predmety-na-konferenci",
      "label": "Rozpočet na konferenci"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kolik stojí reklamní tetovačky s logem",
  "description": "Reálné ceny reklamních tetovaček podle formátu a nákladu, co je v ceně, co se účtuje zvlášť a na čem se dá ušetřit. Orientační pásma včetně DPH.",
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
  "image": "https://www.makethemoment.cz/realizace-prebal-b2b-a5.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/kolik-stoji-reklamni-tetovacky"
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
      "name": "Kolik stojí reklamní tetovačky s logem",
      "item": "https://www.makethemoment.cz/poradna/kolik-stoji-reklamni-tetovacky"
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
