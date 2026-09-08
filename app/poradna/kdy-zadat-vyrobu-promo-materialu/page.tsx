import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Kdy zadat výrobu promo materiálů před akcí",
  description:
    "Časová osa od poptávky po dodání promo materiálů. Kolik dní zabere grafika, tisk a doprava, kde se termíny lámou a co dělat, když akce hoří.",
  alternates: { canonical: "/poradna/kdy-zadat-vyrobu-promo-materialu" },
  openGraph: {
    type: "article",
    title: "Kdy zadat výrobu promo materiálů před akcí | Make the Moment",
    description: "Časová osa od poptávky po dodání promo materiálů. Kolik dní zabere grafika, tisk a doprava, kde se termíny lámou a co dělat, když akce hoří.",
    url: "/poradna/kdy-zadat-vyrobu-promo-materialu",
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
  "nadpis": "Kdy zadat výrobu promo materiálů před akcí",
  "perex": "Nejčastější důvod, proč se promo nestihne, není tiskárna. Je to týden, který se ztratí čekáním na schválení návrhu. Tady je reálná časová osa, ať víte, kdy se ozvat.",
  "datum": "8. 9. 2026",
  "ctenaMinut": 4,
  "foto": {
    "src": "/nanaseni-tetovacky.jpg",
    "alt": "Nanášení dočasné tetovačky s firemním logem na ruku"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Reálná časová osa"
    },
    {
      "typ": "ul",
      "polozky": [
        "Den 0: pošlete poptávku, logo a počet kusů",
        "Do 24 hodin: dostanete kalkulaci a doporučení formátu",
        "Den 1 až 2: připravíme grafický návrh a vizualizaci na produktu",
        "Den 2 až 5: vaše schvalování a případné jedno kolo úprav",
        "Den 5 až 20: výroba, podle formátu, balení a náročnosti",
        "Plus 1 až 2 dny: doprava po ČR"
      ]
    },
    {
      "typ": "p",
      "text": "Když to sečtete, od poptávky k balíku na stole je to zhruba dva až čtyři týdny. Proto je bezpečné minimum tři týdny a pohodlný termín měsíc."
    },
    {
      "typ": "h2",
      "text": "Kde se termíny lámou"
    },
    {
      "typ": "p",
      "text": "Ne v tiskárně. Nejčastěji se ztrácí čas na dvou místech."
    },
    {
      "typ": "ul",
      "polozky": [
        "Schvalování návrhu. Návrh čeká v e-mailu, protože ho má odsouhlasit někdo, kdo je na dovolené. Řekněte nám dopředu, kdo schvaluje.",
        "Podklady. Když logo existuje jen jako obrázek stažený z vlastního webu, dá se s tím pracovat, ale chvíli to zdrží. Vektor to zkrátí o den."
      ]
    },
    {
      "typ": "h2",
      "text": "Sezónní špičky"
    },
    {
      "typ": "p",
      "text": "Jsou tři období, kdy je v tiskárnách plno a termíny se natahují."
    },
    {
      "typ": "ul",
      "polozky": [
        "Listopad a prosinec: vánoční dárky a firemní večírky",
        "Únor až květen: veletržní sezóna",
        "Červen a červenec: festivaly a letní eventy"
      ]
    },
    {
      "typ": "p",
      "text": "V těchto měsících počítejte s měsícem a půl místo měsíce."
    },
    {
      "typ": "h2",
      "text": "Když akce hoří"
    },
    {
      "typ": "p",
      "text": "Spěchající zakázky umíme, ale řekněte to hned v první zprávě, ne až po týdnu. Nejrychlejší varianta je jednoduchý motiv, malý formát, bez balení a s podklady ve vektoru. Za těch podmínek se dá stihnout i týden."
    },
    {
      "typ": "p",
      "text": "Co spěch nezvládne: složitá grafika s mnoha úpravami, papírový přebal na míru a velké formáty ve velkých nákladech."
    },
    {
      "typ": "h2",
      "text": "Praktický tip na opakované akce"
    },
    {
      "typ": "p",
      "text": "Když víte, že akci budete opakovat, nechte z motivu vypustit rok a název konkrétního ročníku. Zbytek archů pak použijete i příště a ušetříte celý proces i peníze za druhý tisk."
    },
    {
      "typ": "tip",
      "text": "Máte datum akce? Napište nám ho a my vám hned řekneme, jestli se to stihne, a co pro to bude potřeba. Odpovídáme do 24 hodin."
    }
  ],
  "dalsi": [
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
    },
    {
      "href": "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
      "label": "Jak připravit podklady"
    },
    {
      "href": "/poradna/kolik-stoji-reklamni-tetovacky",
      "label": "Kolik to stojí"
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
  "headline": "Kdy zadat výrobu promo materiálů před akcí",
  "description": "Časová osa od poptávky po dodání promo materiálů. Kolik dní zabere grafika, tisk a doprava, kde se termíny lámou a co dělat, když akce hoří.",
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
  "image": "https://www.makethemoment.cz/nanaseni-tetovacky.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/kdy-zadat-vyrobu-promo-materialu"
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
      "name": "Kdy zadat výrobu promo materiálů před akcí",
      "item": "https://www.makethemoment.cz/poradna/kdy-zadat-vyrobu-promo-materialu"
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
