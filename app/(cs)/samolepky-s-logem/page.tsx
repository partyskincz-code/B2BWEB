import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Samolepky s logem na zakázku, od 2 Kč za kus",
  description:
    "Samolepky na míru s vaším logem ve dvou provedeních: PVC s tvarovým ořezem za 57 Kč za arch A4 a papír s pravidelným tvarem od 17,90 Kč za arch. Konečné ceny, grafika v ceně, návrh do 24 hodin.",
  alternates: { canonical: "/samolepky-s-logem" },
  openGraph: {
    title: "Samolepky s logem na zakázku | Make the Moment",
    description:
      "Samolepky na míru s vaším logem. PVC s tvarovým ořezem, nebo levnější papír s pravidelným tvarem od 2 Kč za samolepku.",
    url: "/samolepky-s-logem",
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
  tag: "Samolepky",
  h1: "Samolepky s logem na zakázku",
  perex:
    "Samolepka je nejlevnější reklamní předmět, který lidé opravdu používají. Na notebook, na láhev, na helmu. Děláme je ve dvou provedeních: PVC s ořezem přesně po obrysu motivu, nebo levnější papír s pravidelným tvarem od 2 Kč za samolepku. Ceny máme na webu, nabídku dostanete do 24 hodin.",
  produkty: [
    {
      title: "Samolepky s tvarovým řezem",
      text: "Řez přesně podle obrysu motivu, takže kolem loga nezůstane bílý obdélník. Nejčastější volba pro logo, maskota nebo ikonu produktu.",
    },
    {
      title: "Papír s pravidelným tvarem",
      text: "Obdélníčky 80 × 47 mm s rovným ořezem, 12 kusů na archu A4. Kolem motivu zůstává okraj, zato je to nejlevnější varianta a vyrobí se rychleji.",
    },
    {
      title: "Venkovní a odolné",
      text: "UV odolný a voděodolný materiál na láhve, auta, helmy a vše, co chodí ven. Vydrží mytí i déšť, barvy nevyblednou během jedné sezóny.",
    },
  ],
  duvody: [
    "Nejnižší cena za kus ze všech promo materiálů, které děláme",
    "Lidé si je nalepí sami, takže reklama žije dál i po skončení akce",
    "Tvarový řez podle vašeho motivu, nejen kulaté a hranaté tvary",
    "Grafická úprava loga a jedno kolo úprav jsou v ceně zakázky",
    "Dají se objednat zároveň s tetovačkami a tiskovinami v jednom stylu",
    "Výroba 6 až 7 pracovních dní u PVC, 3 až 4 dny u papíru",
  ],
  foto: {
    src: "/realizace-prebal-b2b-a5.jpg",
    alt: "Plnobarevný tisk motivů klienta na archu, ukázka kvality tisku Make the Moment",
  },
  fotoPopis:
    "Ukázka plnobarevného tisku z naší zakázky pro značku got2b. Samolepky tiskneme stejnou technologií, jen na jiný materiál a s tvarovým řezem kolem motivu. Fotky konkrétních samolepkových realizací doplňujeme průběžně.",
  ceny: [
    { format: "PVC s tvarovým ořezem, A4", cena: "57 Kč / arch", pozn: "při 200 arších, 210 × 297 mm, ořez po obrysu motivu" },
    { format: "PVC s tvarovým ořezem, A5", cena: "49,90 Kč / arch", pozn: "voděodolné a UV odolné, cena klesá s nákladem" },
    { format: "Papír, pravidelný tvar A4", cena: "24,90 Kč / arch", pozn: "12 kusů 80 × 47 mm na archu, tedy od 2 Kč za samolepku" },
    { format: "Papír, pravidelný tvar A5", cena: "17,90 Kč / arch", pozn: "6 kusů na archu" },
    { format: "Kompletní řešení pro akci", cena: "individuální", pozn: "samolepky, tetovačky a tiskoviny v jednom stylu" },
  ],
  faq: [
    {
      q: "Kolik stojí samolepky s logem?",
      a: "Záleží na provedení. PVC s tvarovým ořezem stojí 57 Kč za arch A4 nebo 49,90 Kč za A5, papír s pravidelným tvarem 24,90 Kč za arch A4 nebo 17,90 Kč za A5. Na archu A4 je 12 samolepek 80 × 47 mm, vychází to tedy od 2 Kč za kus. Jsou to konečné ceny a platí při 200 arších. Minimální odběrové množství nemáme a cena za arch klesá s rostoucím nákladem. Kalkulaci na váš rozměr a náklad připravíme zdarma do 24 hodin.",
    },
    {
      q: "Jaké je minimální množství?",
      a: "Minimální odběrové množství nemáme, vyrobíme i jediný arch. Příprava výřezových cest ale stojí stejně u deseti i u tisíce archů, takže se cena za arch s rostoucím nákladem výrazně snižuje. U malých sérií proto dává smysl spíš papírová varianta.",
    },
    {
      q: "Umíte samolepky do tvaru loga?",
      a: "Ano, tvarový řez je u nás běžná věc, ne příplatková extra služba. Potřebujeme k tomu motiv ve vektoru nebo v dostatečném rozlišení, abychom konturu mohli vytvořit přesně.",
    },
    {
      q: "Vydrží samolepky venku?",
      a: "Na venkovní použití děláme voděodolný a UV odolný materiál. Vydrží mytí, déšť i slunce. Na láhve do myčky nebo na auto si o tenhle materiál řekněte rovnou v poptávce, abychom ho započítali do ceny.",
    },
    {
      q: "Jaké podklady potřebujete?",
      a: "Nejlépe vektorové PDF, AI nebo EPS. Stačí ale i PNG bez pozadí v dostatečném rozlišení. Základní úpravu loga pro tisk a jedno kolo úprav máte v ceně, takže se nemusíte trápit s přípravou dat sami.",
    },
    {
      q: "Dají se objednat zároveň s tetovačkami?",
      a: "Ano a vychází to líp. Když se samolepky, tetovačky a tiskoviny dělají v jedné zakázce, celá akce drží jeden vizuální styl a ušetříte na dopravě i na grafice.",
    },
  ],
  ctaTitul: "Potřebujete samolepky?",
  ctaText:
    "Napište nám rozměr, přibližný počet kusů a jestli půjdou ven. Do 24 hodin dostanete kalkulaci i grafický návrh.",
  souvisejici: [
    { href: "/cenik", label: "Kompletní ceník" },
    { href: "/tiskoviny-na-miru", label: "Tiskoviny a pohlednice na míru" },
    { href: "/velkoobjemova-vyroba-tetovacek", label: "Velkoobjemová výroba tetovaček" },
    { href: "/poradna/co-dat-na-veletrzni-stanek", label: "Co dát na veletržní stánek" },
    { href: "/poradna/darkovy-balicek-pro-klienty", label: "Dárkový balíček pro klienty" },
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
    { "@type": "ListItem", position: 2, name: "Samolepky", item: "https://www.makethemoment.cz/samolepky-s-logem" },
  ],
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Samolepky s logem na zakázku",
  serviceType: "Zakázková výroba reklamních samolepek",
  provider: { "@id": "https://www.makethemoment.cz/#organizace" },
  description:
    "Samolepky na míru s tvarovým řezem, na voděodolný a UV odolný materiál. Od 100 kusů, grafická úprava loga v ceně.",
  areaServed: [
    { "@type": "Country", name: "Česko" },
    { "@type": "Country", name: "Slovensko" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "CZK",
    price: "17.90",
    description: "Samolepky na míru, konečná cena za jeden arch. Bez minimálního odběrového množství, cena za arch klesá s rostoucím nákladem.",
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
