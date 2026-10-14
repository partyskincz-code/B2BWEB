import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky na festival, závod a sportovní akci",
  description:
    "Dočasné tetovačky na festival, běžecký závod a sportovní akci. Výdrž 3 až 7 dní, odolné potu i vodě. Realizace pro trailový závod Li.t.r. kolem Lipna.",
  alternates: { canonical: "/tetovacky-na-festival" },
  openGraph: {
    title: "Tetovačky na festival, závod a sportovní akci | Make the Moment",
    description: "Dočasné tetovačky na festival, běžecký závod a sportovní akci. Výdrž 3 až 7 dní, odolné potu i vodě. Realizace pro trailový závod Li.t.r. kolem Lipna.",
    url: "/tetovacky-na-festival",
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
  "tag": "Festivaly, závody a venkovní akce",
  "h1": "Tetovačky na festival, závod a sportovní akci",
  "perex": "Na festivalu i na závodě funguje to, co si člověk nalepí a nosí celý víkend. Dočasné tetovačky vydrží 3 až 7 dní, snesou pot, déšť i cíl po sto kilometrech, a na fotkách z akce jde vaše značka dál sama.",
  "pripad": {
    "stitek": "Spolupráce",
    "styl": { "pozadi": "#212A34", "akcent": "#8E58FF", "text": "#F2EBE9" },
    "znacka": { "hlavni": "Li.t.r.", "pod": "Lipno.trail.run." },
    "klient": "Lipno.trail.run",
    "klientUrl": "https://www.lipnotrailrun.cz",
    "h2": "Obrys Lipna na předloktí běžce, který ho právě oběhl",
    "text": [
      "Li.t.r. je víkendový trailový festival kolem Lipna: 111 kilometrů, 2 500 metrů převýšení, trasa rozdělená na deset úseků a kus cesty vedoucí přes Rakousko. První ročník jsme podpořili jako partner a dodali jsme tetovačky s logem závodu.",
      "Motiv pro sólo běžce, tedy ty, kdo jdou celých sto jedenáct kilometrů v kuse, nebyl jen logo. Byl to obrys Lipna, tvar té samé trasy, kterou měli za sebou, s názvem závodu uvnitř. Tetovačka tím přestala být reklamním předmětem a stala se odznakem, že jsi to dal.",
      "A právě proto tenhle formát doporučujeme pořadatelům závodů. Tetovačka není drahá položka v rozpočtu akce, ale je to jedna z mála věcí, které si účastník sám nalepí na ruku a vyfotí se s ní. Značka závodu pak chodí po Lipensku na lidech ještě několik dní po doběhu.",
      "Podporujeme i menší akce. Jednou z nich je Běh pro Kleofáše, amatérský běžecký závod ve prospěch Hospicové péče sv. Kleofáše, který se běží už třináctým rokem."
    ],
    "cisla": [
      { "hodnota": "1 000+", "popis": "dodaných tetovaček s logem závodu" },
      { "hodnota": "111 km", "popis": "trasa kolem Lipna, jejíž obrys nesl motiv pro sólo běžce" },
      { "hodnota": "2 500 m", "popis": "převýšení, které měli nositelé motivu za sebou" }
    ],
    "fotky": [
      {
        "src": "/realizace-litr-motiv.jpg",
        "alt": "Dočasná tetovačka s obrysem Lipna a názvem závodu Li.t.r. na předloktí běžkyně"
      },
      {
        "src": "/realizace-litr-aplikace.jpg",
        "alt": "Nalepení dočasné tetovačky na předloktí a sejmutí přenosového papíru přímo v zázemí závodu",
        "pomer": "aspect-[4/3]"
      }
    ],
    "fotoPopis": "Nalepení přímo v zázemí závodu. Dvacet vteřin a je to na ruce."
  },
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
      "text": "Pozvánky, vstupenkové doplňky a pohlednice s vlastním potiskem, v jednom vizuálním stylu."
    }
  ],
  "duvody": [
    "Výdrž 3 až 7 dní podle místa na těle a péče o pokožku",
    "Voděodolné materiály, tetovačku nesmyje déšť ani pot",
    "Balení po sériích podle toho, jak budete rozdávat",
    "Certifikované materiály, bezpečné i pro dětské zóny",
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
      "cena": "9 Kč",
      "pozn": "od 501 ks"
    },
    {
      "format": "A6",
      "cena": "14 až 19 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A5",
      "cena": "22 až 29 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A4 (největší)",
      "cena": "45 až 59 Kč",
      "pozn": "od 1 000 ks"
    }
  ],
  "faq": [
    {
      "q": "Kolik kusů se hodí na festival?",
      "a": "Podle návštěvnosti a počtu dní. U jednodenní akce pro tisíc lidí obvykle stačí 700 až 1 000 archů, u vícedenního festivalu se počítá spíš s poloviční až plnou návštěvností každý den."
    },
    {
      "q": "Vydrží tetovačka celý festival?",
      "a": "Standardně 3 až 7 dní podle místa na těle, aktivity a péče o pokožku. Na paži nebo lýtku vydrží déle než na rukou. Ke každé zakázce dodáváme instrukce, jak výdrž prodloužit."
    },
    {
      "q": "Zvládnete velký objem během sezóny?",
      "a": "Ano, ale v květnu až srpnu je kapacita napjatá. Objednávejte ideálně dva měsíce dopředu, výroba trvá 5 až 20 pracovních dní podle velikosti a složitosti projektu."
    }
  ],
  "ctaTitul": "Chystáte festival nebo venkovní akci?",
  "ctaText": "Řekněte nám počet návštěvníků a termín, připravíme kalkulaci a doporučíme formát i objem.",
  "souvisejici": [
    {
      "href": "/tetovacky-na-veletrh",
      "label": "Tetovačky na veletrh"
    },
    {
      "href": "/poradna/jak-dlouho-vydrzi-docasne-tetovacky",
      "label": "Jak dlouho tetovačky vydrží"
    },
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát zvolit"
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
        "text": "Podle návštěvnosti a počtu dní. U jednodenní akce pro tisíc lidí obvykle stačí 700 až 1 000 archů, u vícedenního festivalu se počítá spíš s poloviční až plnou návštěvností každý den."
      }
    },
    {
      "@type": "Question",
      "name": "Vydrží tetovačka celý festival?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standardně 3 až 7 dní podle místa na těle, aktivity a péče o pokožku. Na paži nebo lýtku vydrží déle než na rukou. Ke každé zakázce dodáváme instrukce, jak výdrž prodloužit."
      }
    },
    {
      "@type": "Question",
      "name": "Zvládnete velký objem během sezóny?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano, ale v květnu až srpnu je kapacita napjatá. Objednávejte ideálně dva měsíce dopředu, výroba trvá 5 až 20 pracovních dní podle velikosti a složitosti projektu."
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
  "description": "Dočasné tetovačky na festival ve velkých objemech, výdrž 3 až 7 dní, voděodolné. Samolepky, tiskoviny a balení po sériích pro rozdávání u stánku.",
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
