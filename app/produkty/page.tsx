import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Tetovačky, samolepky a tiskoviny na míru — ceník",
  description:
    "Dočasné tetovačky od 8 Kč, samolepky od 4 Kč, tiskoviny od 12 Kč za kus. Formáty A4 až A7, certifikované materiály, ceník ke stažení.",
  alternates: {
    canonical: "/produkty",
  },
  openGraph: {
    title: "Tetovačky, samolepky a tiskoviny na míru — ceník | PartySkin B2B",
    description:
      "Dočasné tetovačky od 8 Kč, samolepky od 4 Kč, tiskoviny od 12 Kč za kus. Formáty A4 až A7, certifikované materiály, ceník ke stažení.",
    url: "/produkty",
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


const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Výroba promo materiálů na míru",
  "serviceType": "Dočasné tetovačky, samolepky a tiskoviny na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Česko"
    },
    {
      "@type": "Country",
      "name": "Slovensko"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Promo materiály na míru",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Dočasné tetovačky na míru",
        "priceCurrency": "CZK",
        "price": "8",
        "description": "Tetovačky s logem nebo vlastním motivem, bez minimálního množství."
      },
      {
        "@type": "Offer",
        "name": "Samolepky na míru",
        "priceCurrency": "CZK",
        "price": "4",
        "description": "Tvarové samolepky pro branding, packaging a merch."
      },
      {
        "@type": "Offer",
        "name": "Tiskoviny na míru",
        "priceCurrency": "CZK",
        "price": "12",
        "description": "Pohlednice, přání, pozvánky, jmenovky a vizitky s vaším motivem."
      }
    ]
  }
};

const breadcrumbSchema = {
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
      "name": "Produkty",
      "item": "https://www.makethemoment.cz/produkty"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sluzbaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Content />
    </>
  );
}
