import type { Metadata } from "next";
import Content from "@/app/(cs)/kontakt/Content";
import { createLocalizedMetadata, isLocalizedLang, localePath, SITE } from "@/lib/localization";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/kontakt");
}
export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const inLanguage = params.locale === "sk" ? "sk-SK" : "en-GB";
  const url = `${SITE}${localePath(params.locale, "/kontakt")}`;
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", inLanguage, itemListElement: [{ "@type": "ListItem", position: 1, name: params.locale === "sk" ? "Domov" : "Home", item: `${SITE}/${params.locale}` }, { "@type": "ListItem", position: 2, name: params.locale === "sk" ? "Kontakt" : "Contact", item: url }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><Content /></>;
}
