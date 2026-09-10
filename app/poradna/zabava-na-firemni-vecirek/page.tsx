import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Zábava na firemní večírek, která opravdu funguje",
  description:
    "Co na firemním večírku funguje a co ne. Bez moderátora, bez povinných her a bez rozpočtu na kapelu. Tipy z desítek firemních akcí a co objednat do kdy.",
  alternates: { canonical: "/poradna/zabava-na-firemni-vecirek" },
  openGraph: {
    type: "article",
    title: "Zábava na firemní večírek, která opravdu funguje | Make the Moment",
    description: "Co na firemním večírku funguje a co ne. Bez moderátora, bez povinných her a bez rozpočtu na kapelu. Tipy z desítek firemních akcí a co objednat do kdy.",
    url: "/poradna/zabava-na-firemni-vecirek",
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
  "nadpis": "Zábava na firemní večírek, která opravdu funguje",
  "perex": "Nejhorší věta na firemním večírku je: a teď se všichni postavte, budeme hrát hru. Zábava, která funguje, je ta, do které se člověk může zapojit sám a kdykoli z ní odejít.",
  "datum": "10. 9. 2026",
  "ctenaMinut": 6,
  "foto": {
    "src": "/realizace-papirovy-prebal.jpg",
    "alt": "Tetovačky s firemním motivem připravené jako zábava na firemní večírek"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Proč většina programů selže"
    },
    {
      "typ": "p",
      "text": "Protože nutí lidi vystoupit před ostatní. Na večírku je vždycky někdo, kdo se těší, a někdo, kdo přišel, protože musel. Povinná hra ty druhé nezachrání, jen je zažene ke stolu s vínem."
    },
    {
      "typ": "p",
      "text": "Funguje pravý opak: něco, co si člověk vezme sám, kdy chce, a bez publika. Zapojí se dobrovolně a rozhovor se rozjede jako vedlejší efekt."
    },
    {
      "typ": "h2",
      "text": "Co na večírcích funguje"
    },
    {
      "typ": "ul",
      "polozky": [
        "Něco, co se dá dělat vsedě u stolu. Kvíz na papíře, hádání fotek z dětství, tipovačka.",
        "Něco, co si člověk nalepí nebo obleče. Tetovačky s firemní hláškou, odznaky, hloupé brýle na fotokoutek.",
        "Fotokoutek s rekvizitami. Nemusí to být pronajatá budka, stačí stěna, pár doplňků a někdo s telefonem.",
        "Jídlo, které se sdílí. Prkna a mísy uprostřed stolu rozproudí konverzaci líp než talířový servis.",
        "Krátká, dobrovolná soutěž s jasným koncem. Deset minut, ne hodina."
      ]
    },
    {
      "typ": "h2",
      "text": "Co nefunguje"
    },
    {
      "typ": "ul",
      "polozky": [
        "Povinné seznamovací hry. Dospělí lidé, kteří spolu pracují pět let, se seznamovat nepotřebují.",
        "Dlouhé projevy vedení. Tři minuty ano, dvacet ne.",
        "Karaoke jako hlavní program. Jako doplněk skvělé, jako osa večera to rozdělí sál na dva tábory.",
        "Cokoliv, co vyžaduje mikrofon a moderátora, pokud nemáte opravdu dobrého moderátora.",
        "Program natlačený do doby, kdy lidé chtějí jíst."
      ]
    },
    {
      "typ": "h2",
      "text": "Tetovačky jako program bez organizace"
    },
    {
      "typ": "p",
      "text": "Tohle je věc, kterou u firemních večírků vidíme fungovat opakovaně. Na stůl se položí archy tetovaček s firemními motivy, k tomu miska s vodou a houbička. Nikdo nic neoznamuje."
    },
    {
      "typ": "p",
      "text": "Během půl hodiny se u stolu tvoří fronta, lidé si je lepí navzájem, což znamená, že se dotýkají a smějí, a vzniká přesně ta atmosféra, kvůli které se večírek pořádá. Fotky z akce pak vypadají jinak než každý rok."
    },
    {
      "typ": "p",
      "text": "Nejlíp fungují motivy, kterým rozumí jen váš tým. Hláška z porady, přezdívka oddělení, maskot projektu. Samotné logo si člověk na ruku nalepí méně ochotně než něco, co ho pobaví."
    },
    {
      "typ": "h2",
      "text": "Kolik to stojí"
    },
    {
      "typ": "p",
      "text": "Ceny jsou konečné včetně DPH, za jeden arch."
    },
    {
      "typ": "ul",
      "polozky": [
        "A7, nejmenší formát: přibližně 12 až 15 Kč za kus při odběru od sta kusů",
        "A6: přibližně 19 až 25 Kč za kus",
        "A5: přibližně 32 až 39 Kč za kus",
        "Papírový přebal s potiskem na rub: +7 až 10 Kč za kus"
      ]
    },
    {
      "typ": "p",
      "text": "Pro srovnání: kapela na večírek stojí desítky tisíc, moderátor jednotky tisíc za hodinu. Tetovačky pro sto lidí vyjdou na dva až tři tisíce a fungují celý večer."
    },
    {
      "typ": "h2",
      "text": "Časový plán pro prosincový večírek"
    },
    {
      "typ": "ul",
      "polozky": [
        "Září až říjen: termín, místo a rozpočet",
        "Říjen: zadat výrobu tetovaček a tiskovin, tiskárny ještě nejsou plné",
        "Listopad: pozvánky, potvrzení účasti, finální počty",
        "Začátek prosince: rozdělení rolí na místě, kdo co přinese"
      ]
    },
    {
      "typ": "p",
      "text": "Kdo zadává výrobu v půlce prosince, platí za expres a stejně riskuje. Víc o termínech píšeme v článku o tom, kdy zadat výrobu promo materiálů."
    },
    {
      "typ": "h2",
      "text": "Drobnost u talíře"
    },
    {
      "typ": "p",
      "text": "Když chcete z tetovačky udělat dárek a ne jen zábavu, dejte jeden arch do papírového přebalu a položte ho na místo u stolu. Na rub přebalu se dá vytisknout poděkování za rok, návod nebo QR kód na fotogalerii. Vyjde to na 20 až 35 Kč na osobu podle formátu."
    },
    {
      "typ": "tip",
      "text": "Napište nám termín večírku a přibližný počet lidí. Do 24 hodin dostanete kalkulaci i první grafický návrh motivu, zdarma a nezávazně."
    }
  ],
  "dalsi": [
    {
      "href": "/tetovacky-na-firemni-vecirek",
      "label": "Tetovačky na firemní večírek"
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
      "label": "Kompletní ceník"
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
  "headline": "Zábava na firemní večírek, která opravdu funguje",
  "description": "Co na firemním večírku funguje a co ne. Bez moderátora, bez povinných her a bez rozpočtu na kapelu. Tipy z desítek firemních akcí a co objednat do kdy.",
  "datePublished": "2026-09-10",
  "dateModified": "2026-09-10",
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
    "@id": "https://www.makethemoment.cz/poradna/zabava-na-firemni-vecirek"
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
      "name": "Zábava na firemní večírek, která opravdu funguje",
      "item": "https://www.makethemoment.cz/poradna/zabava-na-firemni-vecirek"
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
