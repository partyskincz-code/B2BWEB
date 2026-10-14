import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Velkoobjemová výroba dočasných tetovaček pro firmy a agentury",
  description:
    "Výroba tisíců až desetitisíců dočasných tetovaček s vaším motivem. A7 od 9 Kč za kus, bílá barva, potisk rubu a balení na míru. Konkrétní ceny bez poptávky.",
  alternates: { canonical: "/velkoobjemova-vyroba-tetovacek" },
  openGraph: {
    title: "Velkoobjemová výroba dočasných tetovaček | Make the Moment",
    description:
      "Výroba tisíců až desetitisíců dočasných tetovaček s vaším motivem. A7 od 9 Kč za kus, bílá barva, potisk rubu a balení na míru.",
    url: "/velkoobjemova-vyroba-tetovacek",
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
  tag: "Velkoobjemová výroba",
  h1: "Velkoobjemová výroba dočasných tetovaček",
  perex:
    "Když potřebujete tisíce kusů do kampaně, na festival nebo k produktu, rozhoduje cena za kus a to, jestli dodavatel stihne termín. Vyrábíme od jednoho archu po desetitisíce kusů a na rozdíl od většiny výrobců máme konkrétní ceny rovnou na webu, takže si rozpočet spočítáte dřív, než nám napíšete.",
  produkty: [
    {
      title: "Archy i jednotlivé motivy",
      text: "Arch A4 až A7, nebo jednotlivé motivy nastříhané na kusy. U velkých sérií se nejčastěji volí A7, protože vyjde nejlevněji a dobře se rozdává.",
    },
    {
      title: "Plnobarevný tisk včetně bílé",
      text: "Bílá podtisková vrstva drží barvy věrné i na tmavší pokožce. Bez ní jsou bílé plochy průhledné a motiv mění odstín.",
    },
    {
      title: "Potisk rubu a balení",
      text: "Na rub archu se vejde návod, logo, QR kód nebo soutěžní mechanika. Balit umíme do papírového přebalu, do celofánu, nebo obojí.",
    },
  ],
  duvody: [
    "Konkrétní ceny za kus máte na webu, nemusíte čekat na nabídku, abyste věděli, jestli se vejdete do rozpočtu",
    "Žádná minimální hodnota zakázky, pásma plynule navazují od jednoho archu po desetitisíce kusů",
    "Jeden dodavatel na tetovačky, samolepky i tiskoviny, takže celá akce vypadá jednotně",
    "Grafický návrh a jedno kolo úprav jsou v ceně, vizualizaci na reálném produktu vidíte před výrobou",
    "Certifikované materiály bezpečné pro děti, k dispozici je certifikát zdravotní nezávadnosti",
    "Výroba 5 až 20 pracovních dní podle objemu a složitosti, termín potvrdíme při objednávce",
  ],
  foto: {
    src: "/realizace-prebal-b2b-a5.jpg",
    alt: "Arch dočasných tetovaček s brandingem klienta v papírovém přebalu z velkoobjemové zakázky",
  },
  fotoPopis:
    "Zakázka pro značku got2b: arch plnobarevných motivů v papírovém přebalu s logem na přední straně a návodem k použití na rubu. Přesně takhle vypadá velká série, když se vyrábí jako produkt, ne jako letáček.",
  ceny: [
    { format: "A7, 1 000 ks", cena: "9 Kč / ks", pozn: "zhruba 9 000 Kč za zakázku" },
    { format: "A6, 1 000 ks", cena: "14 až 19 Kč / ks", pozn: "zhruba 14 000 až 19 000 Kč" },
    { format: "A5, 1 000 ks", cena: "22 až 29 Kč / ks", pozn: "zhruba 22 000 až 29 000 Kč" },
    { format: "A4, 1 000 ks", cena: "45 až 59 Kč / ks", pozn: "zhruba 45 000 až 59 000 Kč" },
    { format: "5 000 ks a více", cena: "kalkulace na míru", pozn: "cena klesá pod uvedená pásma" },
    { format: "Potisk rubu", cena: "+10 %", pozn: "z ceny zakázky" },
  ],
  faq: [
    {
      q: "Jaké je u vás minimální množství?",
      a: "Žádné. Vyrobíme i jeden arch. Velkoobjemová pásma začínají prakticky od 500 kusů, kdy cena za kus klesá nejvýrazněji, ale nic vás nenutí objednat víc, než potřebujete.",
    },
    {
      q: "Kolik stojí 10 000 tetovaček?",
      a: "U formátu A7 vychází 1 000 kusů na 9 Kč za kus a u větších objemů jdeme pod to. Pro 5 000 kusů a víc připravujeme kalkulaci na míru, protože se mění i způsob tisku a balení. Napište nám objem a formát a cenu dostanete do 24 hodin.",
    },
    {
      q: "Jak dlouho trvá výroba velké série?",
      a: "Běžně 5 až 20 pracovních dní podle objemu, formátu a toho, jestli se balí. Konkrétní termín potvrdíme v nabídce, ne až po objednávce. Na kampaň s pevným datem si rezervujte alespoň měsíc.",
    },
    {
      q: "Umíte tisknout bílou barvu?",
      a: "Ano, plnobarevný tisk včetně bílé podtiskové vrstvy. Je potřeba u motivů, které mají bílé prvky nebo mají držet přesný odstín. Bez bílé jsou bílé plochy průhledné a prosvítá přes ně kůže.",
    },
    {
      q: "Co potřebujete od nás za podklady?",
      a: "Nejlépe vektorové PDF nebo PNG bez pozadí v dostatečném rozlišení. Základní úpravu loga nebo motivu pro tisk děláme zdarma, včetně jednoho kola úprav. Pokud máte jen logo v nízkém rozlišení, překreslíme ho.",
    },
    {
      q: "Dá se na rub archu něco vytisknout?",
      a: "Ano. Nejčastěji návod k použití, logo, věnování nebo QR kód na web či soutěž. Účtuje se 10 % z ceny zakázky a u velkých sérií se to vyplatí, protože arch pak funguje i jako reklamní nosič.",
    },
    {
      q: "Jsou materiály bezpečné?",
      a: "Ano, materiály jsou certifikované a bezpečné pro děti. Certifikát zdravotní nezávadnosti vám pošleme k zakázce. Tetovačky se nedoporučují na poraněnou nebo podrážděnou pokožku.",
    },
  ],
  ctaTitul: "Potřebujete velkou sérii?",
  ctaText:
    "Napište nám formát, přibližný počet kusů a termín akce. Do 24 hodin dostanete závaznou cenu i potvrzený termín výroby.",
  souvisejici: [
    { href: "/cenik", label: "Kompletní ceník všech formátů" },
    { href: "/poradna/kolik-stoji-reklamni-tetovacky", label: "Kolik stojí reklamní tetovačky" },
    { href: "/poradna/jaky-format-tetovacek-zvolit", label: "Jaký formát tetovaček zvolit" },
    { href: "/poradna/jak-pripravit-podklady-pro-tisk-tetovacek", label: "Jak připravit podklady pro tisk" },
    { href: "/poradna/kdy-zadat-vyrobu-promo-materialu", label: "Kdy zadat výrobu před akcí" },
    { href: "/tetovacky-na-festival", label: "Tetovačky na festival" },
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Velkoobjemová výroba",
      item: "https://www.makethemoment.cz/velkoobjemova-vyroba-tetovacek",
    },
  ],
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Velkoobjemová výroba dočasných tetovaček",
  serviceType: "Zakázková výroba promo materiálů",
  provider: { "@id": "https://www.makethemoment.cz/#organizace" },
  description:
    "Výroba dočasných tetovaček s vlastním motivem od jednoho archu po desetitisíce kusů. Plnobarevný tisk včetně bílé, potisk rubu, balení na míru, bez minimální hodnoty zakázky.",
  areaServed: [
    { "@type": "Country", name: "Česko" },
    { "@type": "Country", name: "Slovensko" },
  ],
  offers: {
    "@type": "Offer",
    priceCurrency: "CZK",
    price: "9",
    description: "Formát A7 od 1 000 kusů, konečná cena za kus.",
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
