import type { Metadata } from "next";
import Content from "@/app/(cs)/reference/Content";
import { createLocalizedMetadata, isLocalizedLang, localePath, SITE } from "@/lib/localization";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/reference");
}
export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const inLanguage = params.locale === "sk" ? "sk-SK" : "en-GB";
  const url = `${SITE}${localePath(params.locale, "/reference")}`;
  const list = { "@context": "https://schema.org", "@type": "ItemList", name: params.locale === "sk" ? "Referencie klientov Make the Moment" : "Make the Moment client references", url, inLanguage, itemListElement: ["Gepard Express, SE", "HK Mladí Draci Šumperk", "Ekocentrum Vydra", "NaZemi"].map((name, index) => ({ "@type": "ListItem", position: index + 1, name })) };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", inLanguage, itemListElement: [{ "@type": "ListItem", position: 1, name: params.locale === "sk" ? "Domov" : "Home", item: `${SITE}/${params.locale}` }, { "@type": "ListItem", position: 2, name: params.locale === "sk" ? "Referencie" : "References", item: url }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(list) }} /><Content /></>;
}
