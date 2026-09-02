import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Jak probíhá zakázka — od poptávky po dodání",
  description:
    "Pět kroků od poptávky k dodání. Odpověď do 24 hodin, grafický návrh do 24 hodin od briefu, výroba 5–20 pracovních dní. Časté otázky a záruky.",
  alternates: {
    canonical: "/jak-to-funguje",
  },
  openGraph: {
    title: "Jak probíhá zakázka — od poptávky po dodání | PartySkin B2B",
    description:
      "Pět kroků od poptávky k dodání. Odpověď do 24 hodin, grafický návrh do 24 hodin od briefu, výroba 5–20 pracovních dní. Časté otázky a záruky.",
    url: "/jak-to-funguje",
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


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jaký je minimální počet kusů?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dočasné tetovačky nemají žádné minimální množství — objednat lze i 1 kus. U pohlednic je minimum 50 ks, u samolepek 100 ks. Pro kompletní balíčky se minimum stanovuje individuálně."
      }
    },
    {
      "@type": "Question",
      "name": "Dodáváte vzorky před výrobou?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano, na vyžádání zasíláme fyzické vzorky za náklady na výrobu a dopravu. U standardních objednávek poskytujeme digitální vizualizaci zdarma."
      }
    },
    {
      "@type": "Question",
      "name": "Jak mám připravit podklady pro tisk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideálně dodejte soubory ve vektorovém formátu (.AI, .EPS, .SVG) nebo PDF ve vysokém rozlišení (min. 300 DPI). Přijímáme i JPEG a PNG — upozorníme vás, pokud by kvalita nestačila pro tisk."
      }
    },
    {
      "@type": "Question",
      "name": "Jsou materiály bezpečné pro děti?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Naše tetovačky odpovídají normě EN 71 a jsou certifikovány pro použití dětmi od 3 let. Samolepky i tiskoviny jsou vyrobeny z materiálů bez škodlivých látek."
      }
    },
    {
      "@type": "Question",
      "name": "Jak dlouho vydrží dočasné tetovačky na kůži?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardně 3–7 dní v závislosti na místě těla, aktivitě a péči o pokožku. Dodáváme instrukce pro nanesení i prodloužení výdrže."
      }
    },
    {
      "@type": "Question",
      "name": "Mohu objednávat opakovaně se slevou?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Pro pravidelné zákazníky nabízíme množstevní i referenční slevy a prioritní kapacity ve výrobě. Detaily domluvíme individuálně."
      }
    },
    {
      "@type": "Question",
      "name": "Jak probíhá platba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Přijímáme platbu převodem na základě faktury nebo online platbu kartou. U nových zákazníků požadujeme zálohu 50 % před zahájením výroby."
      }
    },
    {
      "@type": "Question",
      "name": "Co se stane, pokud nejsem s výsledkem spokojený?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pokud produkt neodpovídá schválenému návrhu, zakázku nahradíme nebo vrátíme platbu. Reklamace řešíme do 5 pracovních dní."
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
      "name": "Jak to funguje",
      "item": "https://www.makethemoment.cz/jak-to-funguje"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Content />
    </>
  );
}
