import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky a samolepky pro školy a dětské akce",
  description:
    "Certifikované dočasné tetovačky pro školy, dětské dny a tábory. Norma EN 71, bezpečné pro děti od 3 let. Bez minimálního množství.",
  alternates: { canonical: "/tetovacky-pro-skoly" },
  openGraph: {
    title: "Tetovačky a samolepky pro školy a dětské akce | PartySkin B2B",
    description: "Certifikované dočasné tetovačky pro školy, dětské dny a tábory. Norma EN 71, bezpečné pro děti od 3 let. Bez minimálního množství.",
    url: "/tetovacky-pro-skoly",
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
  "tag": "Školy a dětské akce",
  "h1": "Tetovačky a samolepky pro školy a dětské akce",
  "perex": "Dětský den, příměstský tábor, sportovní den nebo odměna za vysvědčení. Naše tetovačky odpovídají normě EN 71 a jsou certifikované pro děti od tří let, a děti je milují víc než jakoukoli jinou odměnu.",
  "produkty": [
    {
      "title": "Certifikované dětské tetovačky",
      "text": "Maskot školy, logo tábora nebo motivy podle tématu akce. Norma EN 71, bezpečné pro děti od 3 let."
    },
    {
      "title": "Samolepky na odměny",
      "text": "Do žákovské knížky, na tabulku pokroku nebo jako odměna za splněný úkol. Tvarové, v libovolném motivu."
    },
    {
      "title": "Pohlednice a jmenovky",
      "text": "Jmenovky na tábor, pozvánky na besídku nebo pohlednice z výletu, které děti pošlou domů."
    }
  ],
  "duvody": [
    "Certifikace podle normy EN 71, bezpečné pro děti od 3 let",
    "Bez minimálního množství, vyrobíme i pro jednu třídu",
    "Tetovačka se sundá vodou a mýdlem nebo dětským olejem",
    "Motivy navrhneme podle tématu akce, i z dětské kresby",
    "Výdrž 3–7 dní, takže odměna vydrží až do víkendu"
  ],
  "foto": {
    "src": "/detske-tetovacky-archy.jpg",
    "alt": "Dětské dočasné tetovačky v balení, motivy vesmíru, zvířátek a moře"
  },
  "fotoPopis": "Dětský formát A6 v přebalu, malá věc, kterou si dítě odnese domů a ukáže rodičům. U školních akcí to funguje líp než diplom.",
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
      "format": "Samolepky",
      "cena": "4 Kč",
      "pozn": "od 100 ks"
    }
  ],
  "faq": [
    {
      "q": "Jsou tetovačky bezpečné pro malé děti?",
      "a": "Ano. Odpovídají normě EN 71 a jsou certifikované pro použití dětmi od 3 let. Materiály neobsahují škodlivé látky."
    },
    {
      "q": "Jak se tetovačka sundá?",
      "a": "Vodou a mýdlem, u odolnějších motivů dětským olejem nebo krémem. Nedře se ani nešmíruje."
    },
    {
      "q": "Můžeme použít kresbu od dětí?",
      "a": "Ano a je to náš oblíbený typ zakázky. Stačí kresbu vyfotit nebo naskenovat, grafik ji připraví pro tisk a pošleme vizualizaci ke schválení."
    }
  ],
  "ctaTitul": "Chystáte akci pro děti?",
  "ctaText": "Napište nám počet dětí a téma akce. Připravíme návrh i kalkulaci do 24 hodin.",
  "souvisejici": [
    {
      "href": "/produkty",
      "label": "Ceník a produkty"
    },
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
    },
    {
      "href": "/tetovacky-na-firemni-event",
      "label": "Tetovačky na firemní event"
    },
    {
      "href": "/kontakt",
      "label": "Nezávazná poptávka"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jsou tetovačky bezpečné pro malé děti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Odpovídají normě EN 71 a jsou certifikované pro použití dětmi od 3 let. Materiály neobsahují škodlivé látky."
      }
    },
    {
      "@type": "Question",
      "name": "Jak se tetovačka sundá?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vodou a mýdlem, u odolnějších motivů dětským olejem nebo krémem. Nedře se ani nešmíruje."
      }
    },
    {
      "@type": "Question",
      "name": "Můžeme použít kresbu od dětí?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano a je to náš oblíbený typ zakázky. Stačí kresbu vyfotit nebo naskenovat, grafik ji připraví pro tisk a pošleme vizualizaci ke schválení."
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
      "name": "Školy a dětské akce",
      "item": "https://www.makethemoment.cz/tetovacky-pro-skoly"
    }
  ]
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tetovačky a samolepky pro školy a dětské akce",
  "serviceType": "Výroba promo materiálů na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "description": "Certifikované dočasné tetovačky pro školy, dětské dny a tábory. Norma EN 71, bezpečné pro děti od 3 let. Bez minimálního množství.",
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
