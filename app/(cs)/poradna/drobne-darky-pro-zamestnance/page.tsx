import type { Metadata } from "next";
import ClanekLayout, { type Clanek } from "@/components/ClanekLayout";

export const metadata: Metadata = {
  title: "Drobné dárky pro zaměstnance, které se opravdu použijí",
  description:
    "Srovnání šesti typů drobných dárků pro zaměstnance včetně cen, kolik to vyjde na tým od 20 do 500 lidí a jak se dárky v roce 2026 daní.",
  alternates: { canonical: "/poradna/drobne-darky-pro-zamestnance" },
  openGraph: {
    type: "article",
    title: "Drobné dárky pro zaměstnance, které se opravdu použijí | Make the Moment",
    description: "Srovnání šesti typů drobných dárků pro zaměstnance včetně cen, kolik to vyjde na tým od 20 do 500 lidí a jak se dárky v roce 2026 daní.",
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
  "datum": "14. 10. 2026",
  "ctenaMinut": 7,
  "foto": {
    "src": "/realizace-prebal-a5.jpg",
    "alt": "Arch dočasných tetovaček v papírovém přebalu jako firemní dárek"
  },
  "telo": [
      {
          "typ": "p",
          "text": "Rozpočet na drobný dárek pro zaměstnance bývá někde mezi 100 a 500 Kč na hlavu. V té částce se dá udělat něco, co lidi potěší, i něco, co skončí v šuplíku. Rozdíl nedělá cena, ale to, jestli si tu věc člověk dobrovolně vezme domů."
      },
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
          "text": "Srovnání typů drobných dárků"
      },
      {
          "typ": "p",
          "text": "Níž je poctivé srovnání toho, co se v téhle cenové hladině běžně dává. Vyrábíme jen jednu z těch kategorií, takže u ostatních nemáme důvod cokoli krášlit."
      },
      {
          "typ": "h3",
          "text": "Hrnky, lahve a termosky, 150 až 400 Kč"
      },
      {
          "typ": "p",
          "text": "Nejčastější volba a zároveň nejčastější zklamání. Fungují jedině tehdy, když je to kus, který by si člověk koupil sám, tedy kvalitní lahev známé značky s diskrétním logem. Levný hrnek s logem přes celou plochu má doma každý tři a používá nula."
      },
      {
          "typ": "h3",
          "text": "Textil, trička a mikiny, 250 až 900 Kč"
      },
      {
          "typ": "p",
          "text": "Nosí se, pokud je design dobrý a logo malé. Problém je velikostní sortiment: objednáváte naslepo, část kusů sedne špatně a zůstane vám sklad. Na padesátičlenný tým počítejte, že deset kusů nepadne."
      },
      {
          "typ": "h3",
          "text": "Poukázky a kredity, od 200 Kč"
      },
      {
          "typ": "p",
          "text": "Nejjistější z hlediska spokojenosti a nejhorší z hlediska zapamatování. Poukázka je skoro peníze, takže ji nikdo nebere jako gesto. Má smysl jako odměna, ne jako dárek na akci."
      },
      {
          "typ": "h3",
          "text": "Sladkosti a drobné potraviny, 80 až 300 Kč"
      },
      {
          "typ": "p",
          "text": "Spolehlivé, levné, bez rizika. Zároveň za týden po nich není památky a nefungují tam, kde řešíte alergie nebo stravovací omezení."
      },
      {
          "typ": "h3",
          "text": "Dočasné tetovačky s firemním motivem, 14 až 33 Kč za kus"
      },
      {
          "typ": "p",
          "text": "Tohle děláme my, tak to řekneme na rovinu včetně limitů. Nejsou to univerzální dárky: na formální firmu nebo na starší tým se nehodí a jako samostatný vánoční dárek působí levně. Fungují na akcích, protože se nalepují navzájem a prolomí ledy rychleji než jakýkoli program. Jsou nejlevnější z celého seznamu a dají se zabalit tak, aby vypadaly jako dárek."
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
              "Rodinné dny, kde jsou se zaměstnanci i děti",
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
          "text": "Kolik to stojí podle velikosti týmu"
      },
      {
          "typ": "p",
          "text": "Pro představu konkrétní čísla u formátu A6 s firemním motivem, bez balení:"
      },
      {
          "typ": "ul",
          "polozky": [
              "Tým 20 lidí: 25 až 33 Kč za kus, tedy zhruba 500 až 660 Kč celkem",
              "Tým 50 lidí: 25 až 33 Kč za kus, tedy zhruba 1 250 až 1 650 Kč celkem",
              "Tým 100 lidí: 19 až 25 Kč za kus, tedy zhruba 1 900 až 2 500 Kč celkem",
              "Tým 500 lidí: 17 až 22 Kč za kus, tedy zhruba 8 500 až 11 000 Kč celkem",
              "Papírový přebal na míru s potiskem na rub: plus 7 až 10 Kč na kus"
          ]
      },
      {
          "typ": "p",
          "text": "U tetovaček nemáme minimální množství, takže se vyplatí i malý tým nebo jednorázová akce. Všechny ceny jsou konečné za kus."
      },
      {
          "typ": "h2",
          "text": "Jak se dárky pro zaměstnance daní"
      },
      {
          "typ": "p",
          "text": "Tohle je otázka, která přijde od účetní dřív nebo později, tak ať ji nemusíte hledat jinde. Od roku 2024 jsou nepeněžní benefity u zaměstnance osvobozené jen do ročního limitu a limity se každý rok mění podle průměrné mzdy."
      },
      {
          "typ": "p",
          "text": "Pro rok 2026 je limit pro volnočasová nepeněžní plnění 24 483,50 Kč ročně na zaměstnance, tedy polovina průměrné mzdy, a pro zdravotní nepeněžní plnění 48 967 Kč ročně. Limity se posuzují zvlášť u každého zaměstnance a každého zaměstnavatele a plnění pro rodinné příslušníky se počítá do limitu zaměstnance."
      },
      {
          "typ": "p",
          "text": "Běžný věcný dárek typu reklamního předmětu do těchto kategorií nespadá a posuzuje se samostatně, proto se u konkrétní akce vyplatí dát si to potvrdit od účetní nebo daňového poradce. U částek, o kterých je tenhle článek, tedy do několika set korun na osobu, to v praxi bývá bez problému, ale rozhodnutí je na vaší účetní, ne na dodavateli."
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
              "Zeptejte se HR, jestli firma nemá pravidla pro dary zaměstnancům",
              "U textilu objednejte velikostní sortiment s rezervou, u tetovaček stačí jeden arch na osobu plus deset procent"
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
    },
    {
      "href": "/poradna/darkovy-balicek-pro-klienty",
      "label": "Dárkový balíček pro klienty"
    },
    {
      "href": "/poradna/zabava-na-firemni-vecirek",
      "label": "Zábava na firemní večírek"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Drobné dárky pro zaměstnance, které se opravdu použijí",
  "description": "Srovnání šesti typů drobných dárků pro zaměstnance včetně cen, kolik to vyjde na tým od 20 do 500 lidí a jak se dárky v roce 2026 daní.",
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
