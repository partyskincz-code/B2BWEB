import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Jak připravit podklady pro tisk dočasných tetovaček",
  description:
    "Jaký formát souboru dodat, jaké rozlišení, co s bílou barvou a proč se zrcadlí text. Praktický návod pro grafiky i pro firmy bez grafika.",
  alternates: { canonical: "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek" },
  openGraph: {
    type: "article",
    title: "Jak připravit podklady pro tisk dočasných tetovaček | PartySkin B2B",
    description: "Jaký formát souboru dodat, jaké rozlišení, co s bílou barvou a proč se zrcadlí text. Praktický návod pro grafiky i pro firmy bez grafika.",
    url: "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek",
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

const data: Clanek = {
  "nadpis": "Jak připravit podklady pro tisk dočasných tetovaček",
  "perex": "Nejčastější důvod, proč se zakázka zdrží, nejsou termíny výroby, ale podklady. Tady je všechno, co potřebujete vědět, než nám pošlete soubor, a co dělat, když žádný nemáte.",
  "datum": "2. 9. 2026",
  "ctenaMinut": 4,
  "foto": {
    "src": "/realizace-prebal-b2b-a5.jpg",
    "alt": "Vytištěné archy dočasných tetovaček s logem klienta"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Nejlepší je vektor"
    },
    {
      "typ": "p",
      "text": "Ideální podklad je vektorový soubor, .AI, .EPS, .SVG nebo PDF s vektory. Vektor jde zvětšit na jakoukoli velikost bez ztráty kvality, takže z jednoho souboru vyrobíme tetovačku na arch A7 i A4."
    },
    {
      "typ": "p",
      "text": "Když vektor nemáte, přijmeme i JPEG nebo PNG. Podmínka je rozlišení alespoň 300 DPI ve velikosti, ve které se bude tisknout. Fotka z webu o šířce 600 pixelů na arch A5 nestačí, na tisku bude rozmazaná. Pokud kvalita nebude dostačovat, upozorníme vás dřív, než pustíme výrobu."
    },
    {
      "typ": "h2",
      "text": "Bílá barva je u tetovaček zásadní"
    },
    {
      "typ": "p",
      "text": "Dočasné tetovačky se lepí na kůži, která má vlastní barvu. Bez podkladové bílé by světlé odstíny zmizely a barvy by vypadaly špinavě. Tiskneme plnobarevně včetně bílé, takže žlutá zůstane žlutá i na tmavší pokožce."
    },
    {
      "typ": "tip",
      "text": "Když v návrhu potřebujete něco záměrně průhledného, třeba jemný stín nebo efekt tetování „do kůže\", napište nám to. Bílou v těch místech vynecháme."
    },
    {
      "typ": "h2",
      "text": "Text se na tetovačce zrcadlí sám"
    },
    {
      "typ": "p",
      "text": "Tetovačka se přenáší otiskem, takže se motiv na archu tiskne zrcadlově. Tohle za vás uděláme my, vy pošlete grafiku normálně, čitelně. Nezrcadlete ji dopředu, jinak by na kůži skončila obráceně."
    },
    {
      "typ": "h2",
      "text": "Co potřebujeme vědět kromě souboru"
    },
    {
      "typ": "ul",
      "polozky": [
        "Formát archu, A4, A5, A6 nebo A7 (nebo aspoň představu, jak velké mají jednotlivé motivy být)",
        "Počet kusů, i orientačně",
        "Termín akce, ať víme, kolik máme času",
        "Jestli chcete tisk i na rubovou stranu, návod, kontakt nebo QR kód",
        "Jestli má být arch nastříhaný na jednotlivé motivy"
      ]
    },
    {
      "typ": "h2",
      "text": "Nemáte grafika? Nevadí"
    },
    {
      "typ": "p",
      "text": "Zhruba polovina zakázek k nám přijde jako logo v PNG a věta „chtěli bychom něco k tomu našemu eventu\". Náš grafik z toho udělá návrh, rozvrhne motivy na arch a pošle vizualizaci na reálném produktu. Jedno kolo úprav je v ceně."
    },
    {
      "typ": "p",
      "text": "Funguje to i s dětskou kresbou, stačí ji vyfotit na rovném světle nebo naskenovat. U škol a dětských akcí je to nejoblíbenější varianta."
    },
    {
      "typ": "h2",
      "text": "Kontrolní seznam před odesláním"
    },
    {
      "typ": "ul",
      "polozky": [
        "Vektor, nebo rastr v 300 DPI ve finální velikosti",
        "Písma převedená do křivek, nebo font přiložený zvlášť",
        "Barvy v CMYK, pokud je řešíte, jinak si je převedeme sami",
        "Motiv neupravujte zrcadlově",
        "Nechte kolem motivu trochu prostoru, ať se dá vystřihnout"
      ]
    }
  ],
  "dalsi": [
    {
      "href": "/poradna/jaky-format-tetovacek-zvolit",
      "label": "Jaký formát tetovaček zvolit"
    },
    {
      "href": "/poradna/jak-dlouho-vydrzi-docasne-tetovacky",
      "label": "Jak dlouho vydrží dočasné tetovačky"
    },
    {
      "href": "/cenik",
      "label": "Ceník"
    },
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak připravit podklady pro tisk dočasných tetovaček",
  "description": "Jaký formát souboru dodat, jaké rozlišení, co s bílou barvou a proč se zrcadlí text. Praktický návod pro grafiky i pro firmy bez grafika.",
  "datePublished": "2026-09-02",
  "dateModified": "2026-09-02",
  "author": {
    "@type": "Organization",
    "name": "PartySkin B2B",
    "url": "https://www.makethemoment.cz"
  },
  "publisher": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "image": "https://www.makethemoment.cz/realizace-prebal-b2b-a5.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/jak-pripravit-podklady-pro-tisk-tetovacek"
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
      "name": "Jak připravit podklady pro tisk dočasných tetovaček",
      "item": "https://www.makethemoment.cz/poradna/jak-pripravit-podklady-pro-tisk-tetovacek"
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
