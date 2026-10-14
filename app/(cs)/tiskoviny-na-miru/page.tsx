import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tiskoviny na míru: pohlednice, pozvánky a vizitky od 1 kusu",
  description:
    "Pohlednice, pozvánky, vizitky a kartičky s vaším potiskem. Profesionální papír, plnobarevný tisk, 8 až 15 Kč za kus už od jednoho kusu. Grafika v ceně.",
  alternates: { canonical: "/tiskoviny-na-miru" },
  openGraph: {
    title: "Tiskoviny na míru: pohlednice, pozvánky a vizitky | Make the Moment",
    description:
      "Pohlednice, pozvánky, vizitky a kartičky s vaším potiskem. Profesionální papír, plnobarevný tisk, 8 až 15 Kč za kus už od jednoho kusu.",
    url: "/tiskoviny-na-miru",
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
  tag: "Tiskoviny",
  h1: "Tiskoviny na míru: pohlednice, pozvánky a vizitky",
  perex:
    "Malé tiskoviny jsou to, co lidem po akci zůstane v tašce a doma na lince. Tiskneme pohlednice, pozvánky, vizitky a kartičky s poděkováním na kvalitní papír, plnobarevně, a to i v jednom jediném kuse. Nemusíte tedy objednávat tisíc kusů jen proto, že to tiskárna vyžaduje.",
  produkty: [
    {
      title: "Pohlednice a přání",
      text: "S vlastním potiskem nebo podle vašeho návrhu. Pro děkovné karty ke klientům, vánoční přání nebo jako doplněk k balíčku.",
    },
    {
      title: "Pozvánky a vstupenky",
      text: "Na firemní akci, konferenci nebo večírek. Plnobarevný tisk z obou stran, na rub se vejde program, mapa nebo QR kód.",
    },
    {
      title: "Vizitky a kartičky",
      text: "Vizitky, kartičky s poděkováním do balíčku, slevové kupony, jmenovky k místu. Od jednoho kusu po tisíce.",
    },
  ],
  duvody: [
    "Vyrábíme od jednoho kusu, takže si můžete nechat vytisknout i jedinou zkušební kartu",
    "Profesionální papír a plnobarevný tisk z obou stran",
    "Základní grafická úprava a jedno kolo úprav jsou v ceně",
    "Ladí s tetovačkami a samolepkami, když se objednají v jedné zakázce",
    "Vhodné jako doplněk k dárkovému balíčku nebo k zásilce z e-shopu",
    "Výroba 5 až 20 pracovních dní, u malých nákladů bývá rychlejší",
  ],
  foto: {
    src: "/realizace-prebal-b2b-a5-zadni.jpg",
    alt: "Plnobarevně potištěná kartička z rubové strany s textem a ilustracemi, ukázka tiskoviny Make the Moment",
  },
  fotoPopis:
    "Rubová strana potištěné karty z naší zakázky: plnobarevný tisk, čitelný text a ilustrace na jedné ploše. Stejně tiskneme pohlednice, pozvánky i kartičky s poděkováním.",
  ceny: [
    { format: "Pohlednice a přání", cena: "8 až 15 Kč / ks", pozn: "od 1 ks" },
    { format: "Pozvánky a vstupenky", cena: "8 až 15 Kč / ks", pozn: "od 1 ks, tisk z obou stran" },
    { format: "Vizitky a kartičky", cena: "8 až 15 Kč / ks", pozn: "od 1 ks" },
    { format: "Větší náklady", cena: "individuální", pozn: "od 500 ks cena klesá" },
  ],
  faq: [
    {
      q: "Opravdu vyrobíte i jeden kus?",
      a: "Ano. U tiskovin nemáme minimální množství. Dává to smysl, když si chcete nejdřív osahat papír a barvy, než objednáte celý náklad, nebo když potřebujete jedinou kartu k dárku.",
    },
    {
      q: "Kolik stojí pohlednice na míru?",
      a: "Mezi 8 a 15 Kč za kus podle formátu, papíru a toho, jestli se tiskne z jedné nebo z obou stran. Je to konečná cena za kus. U nákladů nad 500 kusů cena klesá, kalkulaci připravíme do 24 hodin.",
    },
    {
      q: "Děláte jmenovky ke stolu?",
      a: "Jmenovky nevyrábíme. Pokud potřebujete označit místa u stolu, dá se to vyřešit potištěnou kartičkou, kterou do našeho sortimentu tiskovin spadá.",
    },
    {
      q: "Můžu poslat vlastní návrh?",
      a: "Ano, a je to nejrychlejší cesta. Pošlete tiskové PDF a my ho jen zkontrolujeme. Pokud máte jen nápad a logo, návrh připravíme my a jedno kolo úprav je v ceně.",
    },
    {
      q: "Jaký papír používáte?",
      a: "Profesionální tiskový papír vhodný pro plnobarevný tisk. Konkrétní gramáž a povrch doladíme podle toho, jestli jde o pohlednici, vizitku nebo kartičku do balíčku. Vzorek pošleme na vyžádání.",
    },
    {
      q: "Dají se tiskoviny objednat s tetovačkami?",
      a: "Ano a doporučujeme to. Balíček, kde tetovačky, samolepky i kartička drží jeden styl, působí úplně jinak než tři různé věci od tří dodavatelů. Navíc ušetříte na dopravě a na grafice.",
    },
  ],
  ctaTitul: "Potřebujete tiskoviny?",
  ctaText:
    "Napište nám formát, počet kusů a jestli máte hotový návrh. Do 24 hodin dostanete kalkulaci i grafický návrh.",
  souvisejici: [
    { href: "/cenik", label: "Kompletní ceník" },
    { href: "/samolepky-s-logem", label: "Samolepky s logem na zakázku" },
    { href: "/poradna/darkovy-balicek-pro-klienty", label: "Dárkový balíček pro klienty" },
    { href: "/poradna/co-dat-na-veletrzni-stanek", label: "Co dát na veletržní stánek" },
    { href: "/poradna/kolik-stoji-reklamni-predmety-na-konferenci", label: "Kolik stojí promo na konferenci" },
    { href: "/kontakt", label: "Nezávazná poptávka" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: data.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: "https://www.makethemoment.cz/" },
    { "@type": "ListItem", position: 2, name: "Tiskoviny", item: "https://www.makethemoment.cz/tiskoviny-na-miru" },
  ],
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tiskoviny na míru, pohlednice, pozvánky a vizitky",
  serviceType: "Zakázkový tisk tiskovin",
  provider: { "@id": "https://www.makethemoment.cz/#organizace" },
  description:
    "Pohlednice, pozvánky, vstupenky, vizitky a kartičky s vlastním potiskem. Profesionální papír, plnobarevný tisk, výroba od jednoho kusu.",
  areaServed: [
    { "@type": "Country", name: "Česko" },
    { "@type": "Country", name: "Slovensko" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "CZK",
    price: "8",
    description: "Tiskoviny od 1 kusu, konečná cena za kus.",
  },
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
