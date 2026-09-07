import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Drobné dárky pro zaměstnance, které se opravdu použijí",
  description:
    "Jak vybrat drobný dárek pro zaměstnance na teambuilding, firemní večírek nebo příchod nováčka, aby neskončil v šuplíku. Co funguje a proč.",
  alternates: { canonical: "/poradna/drobne-darky-pro-zamestnance" },
  openGraph: {
    type: "article",
    title: "Drobné dárky pro zaměstnance, které se opravdu použijí | Make the Moment",
    description: "Jak vybrat drobný dárek pro zaměstnance na teambuilding, firemní večírek nebo příchod nováčka, aby neskončil v šuplíku. Co funguje a proč.",
    url: "/poradna/drobne-darky-pro-zamestnance",
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
  "nadpis": "Drobné dárky pro zaměstnance, které se opravdu použijí",
  "perex": "Hrnek s logem má každý tři. Otázka u firemních dárků není, kolik utratit, ale jestli si toho někdo všimne. Tady je, co u firem funguje a proč.",
  "datum": "7. 9. 2026",
  "ctenaMinut": 4,
  "foto": {
    "src": "/realizace-prebal-a5.jpg",
    "alt": "Arch dočasných tetovaček v papírovém přebalu jako firemní dárek"
  },
  "telo": [
    {
      "typ": "h2",
      "text": "Proč většina firemních dárků selže"
    },
    {
      "typ": "p",
      "text": "Klasické reklamní předměty řeší špatný problém. Snaží se být užitečné, a tím se dostávají do konkurence s věcmi, které zaměstnanec už má. Hrnek, propiska, powerbanka, blok. Nic z toho mu nechybí."
    },
    {
      "typ": "p",
      "text": "Dárek, který funguje, nemusí být užitečný. Musí být buď zábavný, nebo osobní. To jsou dvě věci, které se v kanceláři nedají koupit."
    },
    {
      "typ": "h2",
      "text": "Kdy dává drobný dárek smysl"
    },
    {
      "typ": "ul",
      "polozky": [
        "Teambuilding a firemní akce, kde je potřeba prolomit ledy hned na začátku",
        "Vánoční večírek a oslavy výročí firmy",
        "Onboarding, uvítací balíček pro nováčka v první den",
        "Rodinné dny, kde jsou s zaměstnanci i děti",
        "Poděkování po náročném projektu, kde peněžní odměna není na místě"
      ]
    },
    {
      "typ": "h2",
      "text": "Co funguje na akcích"
    },
    {
      "typ": "p",
      "text": "Na teambuildingu potřebujete něco, co lidi udělají společně. Dočasné tetovačky s firemním motivem fungují proto, že se nalepují navzájem. Za pět minut máte třicet lidí, kteří se smějí a mají stejný symbol na ruce."
    },
    {
      "typ": "p",
      "text": "Na fotkách z akce je to pak vidět, a to je vedlejší efekt, který se hodí do náboru i na sociální sítě."
    },
    {
      "typ": "h2",
      "text": "Co funguje na uvítání"
    },
    {
      "typ": "p",
      "text": "Uvítací balíček pro nováčka je jediná chvíle, kdy má firemní předmět opravdu emoční váhu. Arch tetovaček v přebalu na míru vypadá jako dárek, ne jako inventář, a stojí zlomek toho co mikina."
    },
    {
      "typ": "p",
      "text": "Když má firma maskota nebo výrazný vizuální prvek, funguje to ještě líp. Nováček si vezme arch domů dětem a vy máte značku doma u zaměstnance."
    },
    {
      "typ": "h2",
      "text": "Co funguje na rodinný den"
    },
    {
      "typ": "p",
      "text": "Tady je odpověď jednoduchá: cokoli pro děti. Rodič si vezme cokoli, co potěší dítě, a vezme si to i tehdy, když by pro sebe nechtěl nic."
    },
    {
      "typ": "p",
      "text": "Tetovačky pro děti jsou certifikované a bezpečné, drží tři až sedm dní a smyjí se olejem. Rodiče se na to ptají, tak to mějte připravené v odpovědi."
    },
    {
      "typ": "h2",
      "text": "Kolik to stojí"
    },
    {
      "typ": "p",
      "text": "Pro představu: padesát zaměstnanců, formát A6 s firemním motivem, vychází zhruba na 25 až 33 Kč za kus, tedy 1 250 až 1 650 Kč včetně DPH za celý tým. S papírovým přebalem na míru připočtěte 7 až 10 Kč na kus."
    },
    {
      "typ": "p",
      "text": "U tetovaček nemáme minimální množství, takže se vyplatí i malý tým nebo jednorázová akce."
    },
    {
      "typ": "h2",
      "text": "Na co si dát pozor"
    },
    {
      "typ": "ul",
      "polozky": [
        "Nedávejte na dárek rok, ať se dá použít i příště",
        "Motiv volte tak, aby ho člověk chtěl mít na sobě, ne jen logo přes celý arch",
        "Počítejte s výrobou 5 až 20 pracovních dní podle rozsahu, u vánočních akcí zadávejte v listopadu",
        "Zeptejte se HR, jestli firma nemá pravidla pro dary zaměstnancům"
      ]
    },
    {
      "typ": "tip",
      "text": "Napište nám, kolik je vás a na jakou příležitost. Navrhneme motiv, pošleme vizualizaci na reálném produktu a kalkulaci do 24 hodin."
    }
  ],
  "dalsi": [
    {
      "href": "/tetovacky-na-firemni-event",
      "label": "Tetovačky na firemní event"
    },
    {
      "href": "/poradna/kolik-stoji-reklamni-tetovacky",
      "label": "Kolik stojí reklamní tetovačky"
    },
    {
      "href": "/produkty",
      "label": "Co všechno vyrábíme"
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
  "headline": "Drobné dárky pro zaměstnance, které se opravdu použijí",
  "description": "Jak vybrat drobný dárek pro zaměstnance na teambuilding, firemní večírek nebo příchod nováčka, aby neskončil v šuplíku. Co funguje a proč.",
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
  "image": "https://www.makethemoment.cz/realizace-prebal-a5.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.makethemoment.cz/poradna/drobne-darky-pro-zamestnance"
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
      "name": "Drobné dárky pro zaměstnance, které se opravdu použijí",
      "item": "https://www.makethemoment.cz/poradna/drobne-darky-pro-zamestnance"
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
