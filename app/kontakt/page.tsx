import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Nezávazná poptávka",
  description:
    "Pošlete logo, grafiku nebo jen nápad. Do 24 hodin dostanete kalkulaci, doporučení formátu i termín výroby. Bez minimálního množství.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Nezávazná poptávka | PartySkin B2B",
    description:
      "Pošlete logo, grafiku nebo jen nápad. Do 24 hodin dostanete kalkulaci, doporučení formátu i termín výroby. Bez minimálního množství.",
    url: "/kontakt",
    images: [
      {
        url: "/og-partyskin-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "PartySkin B2B, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};


const kontaktBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Domů",
      "item": "https://www.makethemoment.cz/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kontakt",
      "item": "https://www.makethemoment.cz/kontakt"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kontaktBreadcrumb) }}
      />
      <Content />
    </>
  );
}
