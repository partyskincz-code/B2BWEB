import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Tetovačky pro muzea, hrady a turistická místa",
  description:
    "Suvenýr, který si děti opravdu odnesou. Tetovačky s motivy vaší památky od 9 Kč za kus, do prodeje i jako dárek ke vstupence. Tvarový výsek i metalické provedení.",
  alternates: { canonical: "/tetovacky-pro-muzea-a-pamatky" },
  openGraph: {
    title: "Tetovačky pro muzea, hrady a turistická místa | Make the Moment",
    description:
      "Suvenýr, který si děti opravdu odnesou. Tetovačky s motivy vaší památky od 9 Kč za kus, do prodeje i jako dárek ke vstupence.",
    url: "/tetovacky-pro-muzea-a-pamatky",
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
  tag: "Muzea a památky",
  h1: "Tetovačky pro muzea, hrady a turistická místa",
  perex:
    "Suvenýr do stovky je nejtěžší položka v každém muzejním obchodě. Magnetka se koupí jednou, pohlednice skončí v šuplíku, a cokoli levnějšího vypadá lacině. Tetovačka s motivem vaší památky stojí pár korun, dítě si ji nalepí ještě na nádvoří a chodí s vaším drakem nebo rytířem celý víkend.",
  produkty: [
    {
      title: "Motivy vaší památky",
      text: "Erb, věž, drak z pověsti, exponát, maskot prohlídky. Z fotky nebo kresby uděláme motiv, který na kůži funguje, a pošleme vizualizaci před výrobou.",
    },
    {
      title: "Sady více motivů",
      text: "Jeden arch s několika motivy ze sbírky nebo z areálu. Děti je sbírají a rodiče se vracejí pro další, což u jediného motivu nefunguje.",
    },
    {
      title: "Balení do prodeje",
      text: "Papírový přebal s názvem památky a návodem na rubu. Vypadá to jako produkt v regálu, ne jako volný arch za pokladnou.",
    },
  ],
  duvody: [
    "Nákupní cena od 9 Kč za kus dává prostor pro běžnou obchodní marži",
    "Nezabere místo ve skladu ani v prodejně, arch je plochý",
    "Nemá záruční ani reklamační problémy jako keramika nebo sklo",
    "Funguje i jako dárek ke vstupence nebo odměna v dětské stezce",
    "Materiály jsou certifikované a bezpečné pro děti",
    "Tvarový výsek i metalické zlaté a stříbrné provedení pro slavnostnější edice",
  ],
  foto: {
    src: "/detske-tetovacky-archy.jpg",
    alt: "Archy dětských dočasných tetovaček v papírovém přebalu připravené k prodeji",
  },
  fotoPopis:
    "Takhle vypadá arch připravený do prodeje: motivy na archu, papírový přebal s názvem a návodem na rubu, zatavené v celofánu. Pro muzejní obchod je to hotová produktová položka, ne polotovar.",
  ceny: [
    { format: "A7, 500 ks", cena: "9 Kč / ks", pozn: "nejčastější volba do prodeje" },
    { format: "A6, 500 ks", cena: "17 až 22 Kč / ks", pozn: "více motivů na archu" },
    { format: "A5, 500 ks", cena: "28 až 35 Kč / ks", pozn: "velké motivy, sběratelské edice" },
    { format: "Papírový přebal", cena: "+7 až 10 Kč", pozn: "za kus, s potiskem na rub" },
    { format: "Metalické provedení", cena: "individuální", pozn: "zlatá a stříbrná" },
  ],
  faq: [
    {
      q: "Kolik kusů má smysl objednat do prodeje?",
      a: "Začněte na 500 kusech jednoho motivu. Je to objem, kde cena za kus klesne na rozumnou úroveň a zároveň se vám neuleží sklad na tři sezóny. Když se motiv prodává, doobjednáte.",
    },
    {
      q: "Za kolik se to dá prodávat?",
      a: "V muzejních obchodech se arch běžně prodává mezi 49 a 99 Kč podle formátu a balení. Při nákupní ceně od 9 Kč za kus vám zůstává marže srovnatelná s pohlednicemi, jen se to prodává líp.",
    },
    {
      q: "Uděláte motiv z historické předlohy?",
      a: "Ano. Z fotografie exponátu, z grafiky z průvodce nebo z kresby uděláme motiv připravený pro tisk. Potřebujeme k tomu podklad v rozumném rozlišení a potvrzení, že ho smíte použít.",
    },
    {
      q: "Hodí se to i pro dětskou stezku?",
      a: "Hodí, a je to jedno z nejčastějších použití. Tetovačka jako odměna na konci trasy stojí méně než jakákoli jiná cena a dítě ji má na sobě na fotkách z celého výletu.",
    },
    {
      q: "Jak dlouho trvá výroba?",
      a: "Běžně 5 až 20 pracovních dní podle objemu a balení. Na hlavní sezónu zadávejte nejpozději v březnu, na vánoční provoz v říjnu.",
    },
    {
      q: "Pošlete vzorek?",
      a: "Ano, před větší zakázkou posíláme vzorek zdarma. U prodejního zboží to dává smysl, chcete vidět barvy i to, jak arch vypadá v balení.",
    },
  ],
  ctaTitul: "Chystáte novou sezónu?",
  ctaText:
    "Napište nám, co máte za motivy a jaký objem zvažujete. Do 24 hodin dostanete kalkulaci i grafický návrh, vzorek pošleme zdarma.",
  souvisejici: [
    { href: "/velkoobjemova-vyroba-tetovacek", label: "Velkoobjemová výroba tetovaček" },
    { href: "/cenik", label: "Kompletní ceník" },
    { href: "/tetovacky-pro-skoly", label: "Tetovačky pro školy" },
    { href: "/poradna/jaky-format-tetovacek-zvolit", label: "Jaký formát tetovaček zvolit" },
    { href: "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek", label: "Jak připravit podklady pro tisk" },
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
    { "@type": "ListItem", position: 2, name: "Muzea a památky", item: "https://www.makethemoment.cz/tetovacky-pro-muzea-a-pamatky" },
  ],
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dočasné tetovačky pro muzea, hrady a turistická místa",
  serviceType: "Výroba suvenýrů a promo materiálů na míru",
  provider: { "@id": "https://www.makethemoment.cz/#organizace" },
  description:
    "Tetovačky s motivy památky do muzejního obchodu, jako dárek ke vstupence nebo odměnu v dětské stezce. Od 9 Kč za kus, tvarový výsek i metalické provedení, vzorek zdarma.",
  areaServed: [
    { "@type": "Country", name: "Česko" },
    { "@type": "Country", name: "Slovensko" },
  ],
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
