import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky s logem na firemní event",
  description:
    "Dočasné tetovačky s logem na konferenci, teambuilding nebo firemní oslavu. Bez minimálního množství, grafika do 24 hodin, výroba 5–20 pracovních dní.",
  alternates: { canonical: "/tetovacky-na-firemni-event" },
  openGraph: {
    title: "Tetovačky s logem na firemní event | PartySkin B2B",
    description: "Dočasné tetovačky s logem na konferenci, teambuilding nebo firemní oslavu. Bez minimálního množství, grafika do 24 hodin, výroba 5–20 pracovních dní.",
    url: "/tetovacky-na-firemni-event",
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

const data: Prilezitost = {
  "tag": "Firemní eventy",
  "h1": "Dočasné tetovačky s logem na firemní event",
  "perex": "Konference, teambuilding, uvedení produktu nebo firemní oslava, tetovačky s vaším logem si lidé nalepí sami a odnesou si značku domů na kůži. Vyrobíme je od jednoho archu, s grafikou do 24 hodin od briefu.",
  "produkty": [
    {
      "title": "Tetovačky s logem",
      "text": "Vaše logo, maskot nebo motiv kampaně na archu A4 až A7. Plnobarevný tisk včetně bílé barvy, certifikované materiály."
    },
    {
      "title": "Samolepky na merch a packaging",
      "text": "Tvarové samolepky na notebooky, dárkové balíčky nebo produkty. Voděodolné a UV odolné."
    },
    {
      "title": "Kompletní balíček pro stánek",
      "text": "Tetovačky, samolepky a tiskoviny v jednom stylu, zabalené po sériích tak, jak je budete na místě rozdávat."
    }
  ],
  "duvody": [
    "Bez minimálního množství, vyrobíme i jeden arch pro malou akci",
    "Grafický návrh do 24 hodin od briefu, jedno kolo úprav zdarma",
    "Výroba 5–20 pracovních dní podle velikosti a složitosti projektu",
    "Certifikované materiály podle normy EN 71, bezpečné i pro děti od 3 let",
    "Doručení na adresu firmy nebo rovnou na místo konání akce"
  ],
  "foto": {
    "src": "/realizace-prebal-b2b-a5.jpg",
    "alt": "Dočasné tetovačky s logem klienta na archu A5"
  },
  "fotoPopis": "Zakázka pro značku got2b, arch A5 s duhovými motivy, plný branding a vlastní přebal s návodem. Přesně tohle si návštěvníci akce odnesou domů a nalepí si to sami.",
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
      "q": "Kolik kusů se vyplatí objednat na firemní akci?",
      "a": "Řiďte se počtem návštěvníků, počítejte zhruba jeden arch na osobu, u dětských akcí spíš dva. Minimum nemáme, ale od 500 kusů výš klesá cena za kus výrazně."
    },
    {
      "q": "Jak dlouho dopředu mám objednat?",
      "a": "Počítejte s 24 hodinami na grafiku, jedním až dvěma dny na schválení a 5–20 pracovními dny na výrobu podle velikosti a složitosti projektu. U akce za dva měsíce je čas dostatečný, u akce za dva týdny se ozvěte, zkusíme expresní výrobu."
    },
    {
      "q": "Můžete dodat zásilku rovnou na místo akce?",
      "a": "Ano. Doručujeme na adresu firmy i na místo konání, stačí adresu a termín uvést v poptávce."
    }
  ],
  "ctaTitul": "Chystáte firemní akci?",
  "ctaText": "Napište nám, co plánujete. Do 24 hodin dostanete kalkulaci, doporučení formátu i termín výroby.",
  "souvisejici": [
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh a konferenci"
    },
    {
      "href": "/tetovacky-na-festival",
      "label": "Tetovačky na festival"
    },
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
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
      "name": "Kolik kusů se vyplatí objednat na firemní akci?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Řiďte se počtem návštěvníků, počítejte zhruba jeden arch na osobu, u dětských akcí spíš dva. Minimum nemáme, ale od 500 kusů výš klesá cena za kus výrazně."
      }
    },
    {
      "@type": "Question",
      "name": "Jak dlouho dopředu mám objednat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Počítejte s 24 hodinami na grafiku, jedním až dvěma dny na schválení a 5–20 pracovními dny na výrobu podle velikosti a složitosti projektu. U akce za dva měsíce je čas dostatečný, u akce za dva týdny se ozvěte, zkusíme expresní výrobu."
      }
    },
    {
      "@type": "Question",
      "name": "Můžete dodat zásilku rovnou na místo akce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Doručujeme na adresu firmy i na místo konání, stačí adresu a termín uvést v poptávce."
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
      "name": "Firemní eventy",
      "item": "https://www.makethemoment.cz/tetovacky-na-firemni-event"
    }
  ]
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dočasné tetovačky s logem na firemní event",
  "serviceType": "Výroba promo materiálů na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "description": "Dočasné tetovačky s logem na konferenci, teambuilding nebo firemní oslavu. Bez minimálního množství, grafika do 24 hodin, výroba 5–20 pracovních dní.",
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
