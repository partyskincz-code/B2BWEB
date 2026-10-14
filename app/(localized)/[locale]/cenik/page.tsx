import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CenikView from "@/app/(cs)/cenik/CenikView";
import { createLocalizedMetadata, isLocalizedLang, localePath, SITE } from "@/lib/localization";
import { cenikSk, cenikEn } from "./data";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/cenik");
}

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const sk = params.locale === "sk";
  const d = sk ? cenikSk : cenikEn;
  const inLanguage = sk ? "sk-SK" : "en-GB";
  const url = `${SITE}${localePath(params.locale, "/cenik")}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: d.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    inLanguage,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: sk ? "Domov" : "Home", item: `${SITE}/${params.locale}` },
      { "@type": "ListItem", position: 2, name: d.tag, item: url },
    ],
  };

  const cenikSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: sk ? "Cenník promo materiálov na mieru" : "Price list for custom promotional materials",
    url,
    inLanguage,
    provider: { "@id": `${SITE}/#organizace` },
    itemListElement: [
      { "@type": "Offer", name: sk ? "Dočasné tetovačky A7" : "Temporary tattoos A7", priceCurrency: "EUR", price: "0.40", description: sk ? "Orientačná cena za kus od, pri náklade od 501 ks, konečná cena." : "Indicative price per piece from, for runs of 501 pieces and up, final price." },
      { "@type": "Offer", name: sk ? "Dočasné tetovačky A6" : "Temporary tattoos A6", priceCurrency: "EUR", price: "0.60", description: sk ? "Orientačná cena za kus od, pri náklade od 1 000 ks, konečná cena." : "Indicative price per piece from, for runs of 1,000 pieces and up, final price." },
      { "@type": "Offer", name: sk ? "Dočasné tetovačky A5" : "Temporary tattoos A5", priceCurrency: "EUR", price: "0.95", description: sk ? "Orientačná cena za kus od, pri náklade od 1 000 ks, konečná cena." : "Indicative price per piece from, for runs of 1,000 pieces and up, final price." },
      { "@type": "Offer", name: sk ? "Dočasné tetovačky A4" : "Temporary tattoos A4", priceCurrency: "EUR", price: "1.85", description: sk ? "Orientačná cena za kus od, pri náklade od 1 000 ks, konečná cena." : "Indicative price per piece from, for runs of 1,000 pieces and up, final price." },
      { "@type": "Offer", name: sk ? "Samolepky na mieru" : "Custom stickers", priceCurrency: "EUR", price: "0.15", description: sk ? "Orientačná cena za kus od, minimum 100 ks, konečná cena." : "Indicative price per piece from, minimum 100 pieces, final price." },
      { "@type": "Offer", name: sk ? "Tlačoviny a pohľadnice" : "Print materials and postcards", priceCurrency: "EUR", price: "0.35", description: sk ? "Orientačná cena za kus od, od 1 ks, konečná cena." : "Indicative price per piece from, from 1 piece, final price." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cenikSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CenikView d={d} />
    </>
  );
}
