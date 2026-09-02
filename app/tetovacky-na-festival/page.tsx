import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky a promo materiály na festival",
  description:
    "Dočasné tetovačky na festival ve velkých objemech, výdrž 3–7 dní, voděodolné. Samolepky, tiskoviny a balení po sériích pro rozdávání u stánku.",
  alternates: { canonical: "/tetovacky-na-festival" },
  openGraph: {
    title: "Tetovačky a promo materiály na festival | PartySkin B2B",
    description: "Dočasné tetovačky na festival ve velkých objemech, výdrž 3–7 dní, voděodolné. Samolepky, tiskoviny a balení po sériích pro rozdávání u stánku.",
    url: "/tetovacky-na-festival",
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

const data: Prilezitost = {
  "tag": "Festivaly a venkovní akce",
  "h1": "Tetovačky a promo materiály na festival",
  "perex": "Na festivalu funguje to, co si člověk nalepí a nosí celý víkend. Dočasné tetovačky vydrží 3–7 dní, snesou pot i vodu a na fotkách z akce jde vaše značka dál sama.",
  "produkty": [
    {
      "title": "Tetovačky ve velkých objemech",
      "text": "Archy s motivy kapel, ročníku festivalu nebo partnerů. Od tisíců kusů, s balením po sériích pro snadné rozdávání."
    },
    {
      "title": "Brandingové samolepky",
      "text": "Na lahve, stany, kufry a notebooky. Voděodolné a UV odolné, vydrží venkovní provoz."
    },
    {
      "title": "Tiskoviny na stánek",
      "text": "Pozvánky, vstupenkové doplňky, jmenovky a pohlednice v jednom vizuálním stylu."
    }
  ],
  "duvody": [
    "Výdrž 3–7 dní podle místa na těle a péče o pokožku",
    "Voděodolné materiály, tetovačku nesmyje déšť ani pot",
    "Balení po sériích podle toho, jak budete rozdávat",
    "Certifikované materiály EN 71, bezpečné i pro dětské zóny",
    "Doručení přímo do areálu festivalu"
  ],
  "foto": {
    "src": "/realizace-prebal-b2b-a5-zadni.jpg",
    "alt": "Potištěný přebal tetovaček s návodem k použití"
  },
  "fotoPopis": "Ke každé zakázce vyrobíme i přebal s návodem, takže návštěvník ví, co s tetovačkou dělat, a nemusí se nikoho ptát. U velkých objemů je to rozdíl mezi rozdanou a vyhozenou tetovačkou.",
  "ceny": [
    {
      "format": "A7 (nejmenší)",
      "cena": "11 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A6",
      "cena": "19 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A5",
      "cena": "29 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A4 (největší)",
      "cena": "59 Kč",
      "pozn": "od 1 000 ks"
    }
  ],
  "faq": [
    {
      "q": "Kolik kusů se hodí na festival?",
      "a": "Podle návštěvnosti a počtu dní. U jednodenní akce pro tisíc lidí obvykle stačí 700–1 000 archů, u vícedenního festivalu se počítá spíš s poloviční až plnou návštěvností každý den."
    },
    {
      "q": "Vydrží tetovačka celý festival?",
      "a": "Standardně 3–7 dní podle místa na těle, aktivity a péče o pokožku. Na paži nebo lýtku vydrží déle než na rukou. Ke každé zakázce dodáváme instrukce, jak výdrž prodloužit."
    },
    {
      "q": "Zvládnete velký objem během sezóny?",
      "a": "Ano, ale v květnu až srpnu je kapacita napjatá. Objednávejte ideálně měsíc dopředu, výroba trvá 5–20 pracovních dní."
    }
  ],
  "ctaTitul": "Chystáte festival nebo venkovní akci?",
  "ctaText": "Řekněte nám počet návštěvníků a termín, připravíme kalkulaci a doporučíme formát i objem.",
  "souvisejici": [
    {
      "href": "/tetovacky-na-firemni-event",
      "label": "Tetovačky na firemní event"
    },
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh"
    },
    {
      "href": "/produkty",
      "label": "Ceník a produkty"
    },
    {
      "href": "/reference",
      "label": "Reference"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kolik kusů se hodí na festival?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podle návštěvnosti a počtu dní. U jednodenní akce pro tisíc lidí obvykle stačí 700–1 000 archů, u vícedenního festivalu se počítá spíš s poloviční až plnou návštěvností každý den."
      }
    },
    {
      "@type": "Question",
      "name": "Vydrží tetovačka celý festival?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardně 3–7 dní podle místa na těle, aktivity a péče o pokožku. Na paži nebo lýtku vydrží déle než na rukou. Ke každé zakázce dodáváme instrukce, jak výdrž prodloužit."
      }
    },
    {
      "@type": "Question",
      "name": "Zvládnete velký objem během sezóny?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano, ale v květnu až srpnu je kapacita napjatá. Objednávejte ideálně měsíc dopředu, výroba trvá 5–20 pracovních dní."
      }
    }
  ]
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
      "name": "Festivaly a venkovní akce",
      "item": "https://www.makethemoment.cz/tetovacky-na-festival"
    }
  ]
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tetovačky a promo materiály na festival",
  "serviceType": "Výroba promo materiálů na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "description": "Dočasné tetovačky na festival ve velkých objemech, výdrž 3–7 dní, voděodolné. Samolepky, tiskoviny a balení po sériích pro rozdávání u stánku.",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Česko"
    },
    {
      "@type": "Country",
      "name": "Slovensko"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sluzbaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrilezitostPage data={data} />
    </>
  );
}
