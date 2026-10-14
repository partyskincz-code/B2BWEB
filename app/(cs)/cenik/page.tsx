import type { Metadata } from "next";
import { languageAlternates } from "@/lib/localization";
import CenikView from "./CenikView";
import { cenikCs } from "./data";

export const metadata: Metadata = {
  title: "Ceník reklamních tetovaček, samolepek a tiskovin",
  description:
    "Kolik stojí reklamní tetovačky s logem? Orientační pásma podle formátu a množství, od 9 Kč za kus, samolepky od 3 Kč. Ceny jsou konečné.",
  alternates: { canonical: "/cenik", languages: languageAlternates("/cenik") },
  openGraph: {
    title: "Ceník reklamních tetovaček, samolepek a tiskovin | Make the Moment",
    description:
      "Orientační cenová pásma tetovaček s logem podle formátu a množství, ceny jsou konečné. Samolepky od 3 Kč, tiskoviny od 8 Kč za kus.",
    url: "/cenik",
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

const faq = cenikCs.faq;

const SITE = "https://www.makethemoment.cz";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domů", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Ceník", item: `${SITE}/cenik` },
  ],
};

const cenikSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Ceník promo materiálů na míru",
  provider: { "@id": `${SITE}/#organizace` },
  itemListElement: [
    { "@type": "Offer", name: "Dočasné tetovačky A7", priceCurrency: "CZK", price: "9", description: "Orientační cena za kus od, při nákladu od 501 ks, konečná cena." },
    { "@type": "Offer", name: "Dočasné tetovačky A6", priceCurrency: "CZK", price: "14", description: "Orientační cena za kus od, při nákladu od 1 000 ks, konečná cena." },
    { "@type": "Offer", name: "Dočasné tetovačky A5", priceCurrency: "CZK", price: "22", description: "Orientační cena za kus od, při nákladu od 1 000 ks, konečná cena." },
    { "@type": "Offer", name: "Dočasné tetovačky A4", priceCurrency: "CZK", price: "45", description: "Orientační cena za kus od, při nákladu od 1 000 ks, konečná cena." },
    { "@type": "Offer", name: "Samolepky na míru", priceCurrency: "CZK", price: "3", description: "Orientační cena za kus od, minimum 100 ks, konečná cena." },
    { "@type": "Offer", name: "Tiskoviny na míru", priceCurrency: "CZK", price: "8", description: "Orientační cena za kus od, tiskneme už od jednoho kusu, konečná cena." },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cenikSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CenikView d={cenikCs} />
    </>
  );
}
