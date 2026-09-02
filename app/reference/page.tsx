import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Reference a realizace",
  description:
    "Reálné zakázky pro got2b, MOREAU AGRI, NaZemi nebo Ekocentrum Vydra. Fotky hotových tetovaček, přebalů a tiskovin na míru.",
  alternates: {
    canonical: "/reference",
  },
  openGraph: {
    title: "Reference a realizace | PartySkin B2B",
    description:
      "Reálné zakázky pro got2b, MOREAU AGRI, NaZemi nebo Ekocentrum Vydra. Fotky hotových tetovaček, přebalů a tiskovin na míru.",
    url: "/reference",
    images: [
      {
        url: "/og-partyskin-b2b.jpg",
        width: 1200,
        height: 630,
        alt: "PartySkin B2B — dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
};


const referenceBreadcrumb = {
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
      "name": "Reference",
      "item": "https://www.makethemoment.cz/reference"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referenceBreadcrumb) }}
      />
      <Content />
    </>
  );
}
