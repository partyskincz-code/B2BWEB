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


const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Reference klientů PartySkin B2B",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Review",
        "reviewBody": "Spolupráce byla od začátku do konce naprosto profesionální – trpělivost při zapracování připomínek, ochota i rychlá komunikace. Spolehlivého partnera pro zakázková dočasná tetování můžeme s čistým svědomím doporučit.",
        "author": {
          "@type": "Person",
          "name": "Mgr. Alena Dolinová"
        },
        "itemReviewed": {
          "@id": "https://www.makethemoment.cz/#organizace"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Gepard Express, SE"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Review",
        "reviewBody": "Realizace byla velmi rychlá a tetovačky dorazily už nastříhané – to nám při krátkém termínu výrazně usnadnilo práci. Krásné syté barvy, kvalitní pigment, skvělá aplikace. Rádi si objednáme znovu.",
        "author": {
          "@type": "Person",
          "name": "Mgr. Alena Ryšavá, MBA"
        },
        "itemReviewed": {
          "@id": "https://www.makethemoment.cz/#organizace"
        },
        "publisher": {
          "@type": "Organization",
          "name": "HK Mladí Draci Šumperk"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Review",
        "reviewBody": "V neuvěřitelně krátkém čase nám báječné ženy z PartySkin.cz připravily a dodaly dočasné tetovačky s obrázky našich stálých obyvatel, které jsou opravdu krásné a skvěle drží!",
        "author": {
          "@type": "Person",
          "name": "Záchranná stanice Vydra Třeboň"
        },
        "itemReviewed": {
          "@id": "https://www.makethemoment.cz/#organizace"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ekocentrum Vydra"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Review",
        "reviewBody": "Jsme moc spokojení, rádi využijeme vašich služeb znovu.",
        "author": {
          "@type": "Person",
          "name": "Mgr. Anna Lazorová"
        },
        "itemReviewed": {
          "@id": "https://www.makethemoment.cz/#organizace"
        },
        "publisher": {
          "@type": "Organization",
          "name": "NaZemi"
        }
      }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Content />
    </>
  );
}
