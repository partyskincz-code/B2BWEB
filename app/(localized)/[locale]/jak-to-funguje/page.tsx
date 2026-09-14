import type { Metadata } from "next";
import Content from "@/app/(cs)/jak-to-funguje/Content";
import { createLocalizedMetadata, isLocalizedLang, localePath, SITE } from "@/lib/localization";
import { notFound } from "next/navigation";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocalizedLang(params.locale)) notFound();
  return createLocalizedMetadata(params.locale, "/jak-to-funguje");
}
export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const inLanguage = params.locale === "sk" ? "sk-SK" : "en-GB";
  const url = `${SITE}${localePath(params.locale, "/jak-to-funguje")}`;
  const faqContent = params.locale === "sk"
    ? [["Aké je minimálne množstvo kusov?", "Dočasné tetovačky nemajú minimálne množstvo, objednať možno aj jeden kus. Pri samolepkách je minimum 100 kusov."], ["Posielate vzorky pred výrobou?", "Áno, na vyžiadanie zasielame fyzické vzorky. Pri štandardných objednávkach poskytujeme digitálnu vizualizáciu zdarma."]]
    : [["What is the minimum order quantity?", "Temporary tattoos have no minimum quantity and even one piece can be ordered. The minimum for stickers is 100 pieces."], ["Do you send samples before production?", "Yes, physical samples are available on request. We provide a free digital visualisation for standard orders."]];
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", url, inLanguage, mainEntity: faqContent.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", inLanguage, itemListElement: [{ "@type": "ListItem", position: 1, name: params.locale === "sk" ? "Domov" : "Home", item: `${SITE}/${params.locale}` }, { "@type": "ListItem", position: 2, name: params.locale === "sk" ? "Ako to funguje" : "How it works", item: url }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} /><Content /></>;
}
