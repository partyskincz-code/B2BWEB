import type { Metadata } from "next";
import Content from "@/app/(cs)/produkty/Content";
import { createLocalizedMetadata, isLocalizedLang, localePath, SITE } from "@/lib/localization";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/produkty");
}

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const inLanguage = params.locale === "sk" ? "sk-SK" : "en-GB";
  const url = `${SITE}${localePath(params.locale, "/produkty")}`;
  const service = { "@context": "https://schema.org", "@type": "Service", name: params.locale === "sk" ? "Výroba promo materiálov na mieru" : "Custom promotional materials production", url, inLanguage, provider: { "@id": `${SITE}/#organizace` } };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", inLanguage, itemListElement: [{ "@type": "ListItem", position: 1, name: params.locale === "sk" ? "Domov" : "Home", item: `${SITE}/${params.locale}` }, { "@type": "ListItem", position: 2, name: params.locale === "sk" ? "Produkty" : "Products", item: url }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><Content /></>;
}
