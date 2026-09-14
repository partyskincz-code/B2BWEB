import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky na firemní večírek a vánoční párty",
  description:
    "Zábava na firemní večírek, která nic nestojí navíc a nikdo ji neorganizuje. Tetovačky s vaším logem nebo hláškou od 8 Kč za kus, bez minimálního množství.",
  alternates: { canonical: "/tetovacky-na-firemni-vecirek" },
  openGraph: {
    title: "Tetovačky na firemní večírek a vánoční párty | Make the Moment",
    description: "Zábava na firemní večírek, která nic nestojí navíc a nikdo ji neorganizuje. Tetovačky s vaším logem nebo hláškou od 8 Kč za kus, bez minimálního množství.",
    url: "/tetovacky-na-firemni-vecirek",
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

const data: Prilezitost = {
  "tag": "Firemní večírky",
  "h1": "Tetovačky na firemní večírek a vánoční párty",
  "perex": "Večírek stojí a padá s tím, jestli se lidé uvolní. Tetovačky s firemní hláškou nebo logem to zvládnou dřív než první přípitek: každý si vybere motiv, nalepí ho kolegovi a najednou spolu mluví i lidé ze dvou různých pater. Vyrobíme je od jednoho archu.",
  "produkty": [
    {
      "title": "Tetovačky s hláškou nebo logem",
      "text": "Firemní hláška, přezdívka týmu, maskot nebo prostě logo. Arch A4 až A7, plnobarevný tisk včetně bílé, certifikované materiály."
    },
    {
      "title": "Tetovací koutek",
      "text": "Archy nastříhané na jednotlivé motivy, mističku s vodou a houbičku si připravíte sami. Zabere metr stolu a obsluhuje se sám."
    },
    {
      "title": "Tetovačky jako dárek u talíře",
      "text": "Jeden arch v papírovém přebalu s poděkováním na rubu, položený na místo u stolu. Levnější než dárkový koš a lidé to opravdu použijí."
    }
  ],
  "duvody": [
    "Zábava, kterou nemusí nikdo moderovat ani organizovat",
    "Vydrží 2 až 5 dní, takže se o večírku mluví i v pondělí v kanceláři",
    "Bez minimálního množství, vyrobíme i jeden arch na zkoušku",
    "Fotky z večírku vypadají úplně jinak než každý rok",
    "Sundá se olejem nebo odlakovačem, žádné drhnutí"
  ],
  "foto": {
    "src": "/realizace-papirovy-prebal.jpg",
    "alt": "Arch dočasných tetovaček v papírovém přebalu s potiskem jako dárek na firemní večírek"
  },
  "fotoPopis": "Arch v papírovém přebalu, na jehož rub se dá vytisknout poděkování, návod nebo QR kód na fotogalerii z večírku. Takhle připravená tetovačka funguje jako drobný dárek u talíře.",
  "ceny": [
    {
      "format": "A7 (nejmenší)",
      "cena": "12 až 15 Kč",
      "pozn": "od 100 ks"
    },
    {
      "format": "A6",
      "cena": "19 až 25 Kč",
      "pozn": "od 100 ks"
    },
    {
      "format": "A5",
      "cena": "32 až 39 Kč",
      "pozn": "od 100 ks"
    },
    {
      "format": "Papírový přebal",
      "cena": "+7 až 10 Kč",
      "pozn": "za kus, s potiskem na rub"
    }
  ],
  "faq": [
    {
      "q": "Kdy objednat, když je večírek v prosinci?",
      "a": "Ideálně v říjnu, nejpozději v první polovině listopadu. Grafiku máte do 24 hodin, výroba trvá 5 až 20 pracovních dní a před Vánoci jsou tiskárny plné. Když to hoří, ozvěte se a zkusíme expresní výrobu."
    },
    {
      "q": "Kolik archů objednat na večírek?",
      "a": "Počítejte jeden arch na osobu plus deset procent rezervy. Když necháte motiv bez roku a bez názvu konkrétního ročníku, zbytek použijete i příští rok."
    },
    {
      "q": "Co se dá na tetovačky dát kromě loga?",
      "a": "Nejlíp fungují věci, kterým rozumí jen váš tým: hláška z porady, přezdívka oddělení, maskot, vtipná ikona projektu. Logo tam být může, ale samotné logo si lidé na ruku nalepí méně ochotně než něco, co je pobaví."
    },
    {
      "q": "Je to bezpečné, když se pije alkohol?",
      "a": "Ano. Materiály jsou certifikované a stejné, jaké se používají pro tetovačky pro děti od 3 let. Nalepení trvá dvacet vteřin a zvládne ho i ten, kdo už má něco vypito."
    }
  ],
  "ctaTitul": "Chystáte večírek?",
  "ctaText": "Napište nám termín, přibližný počet lidí a jestli máte nápad na motiv. Do 24 hodin dostanete kalkulaci i grafický návrh.",
  "souvisejici": [
    {
      "href": "/poradna/zabava-na-firemni-vecirek",
      "label": "Zábava na firemní večírek, co funguje"
    },
    {
      "href": "/tetovacky-na-firemni-event",
      "label": "Tetovačky na firemní event"
    },
    {
      "href": "/poradna/drobne-darky-pro-zamestnance",
      "label": "Drobné dárky pro zaměstnance"
    },
    {
      "href": "/poradna/kdy-zadat-vyrobu-promo-materialu",
      "label": "Kdy zadat výrobu před akcí"
    },
    {
      "href": "/cenik",
      "label": "Ceník tetovaček"
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
      "name": "Kdy objednat, když je večírek v prosinci?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideálně v říjnu, nejpozději v první polovině listopadu. Grafiku máte do 24 hodin, výroba trvá 5 až 20 pracovních dní a před Vánoci jsou tiskárny plné. Když to hoří, ozvěte se a zkusíme expresní výrobu."
      }
    },
    {
      "@type": "Question",
      "name": "Kolik archů objednat na večírek?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Počítejte jeden arch na osobu plus deset procent rezervy. Když necháte motiv bez roku a bez názvu konkrétního ročníku, zbytek použijete i příští rok."
      }
    },
    {
      "@type": "Question",
      "name": "Co se dá na tetovačky dát kromě loga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nejlíp fungují věci, kterým rozumí jen váš tým: hláška z porady, přezdívka oddělení, maskot, vtipná ikona projektu. Logo tam být může, ale samotné logo si lidé na ruku nalepí méně ochotně než něco, co je pobaví."
      }
    },
    {
      "@type": "Question",
      "name": "Je to bezpečné, když se pije alkohol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Materiály jsou certifikované a stejné, jaké se používají pro tetovačky pro děti od 3 let. Nalepení trvá dvacet vteřin a zvládne ho i ten, kdo už má něco vypito."
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
      "name": "Firemní večírky",
      "item": "https://www.makethemoment.cz/tetovacky-na-firemni-vecirek"
    }
  ]
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dočasné tetovačky na firemní večírek a vánoční párty",
  "serviceType": "Výroba promo materiálů na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "description": "Tetovačky s firemní hláškou nebo logem na firemní večírek a vánoční párty. Bez minimálního množství, grafika do 24 hodin.",
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
