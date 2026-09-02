import type { Metadata } from "next";
import PrilezitostPage, { type Prilezitost } from "@/components/PrilezitostPage";

export const metadata: Metadata = {
  title: "Promo materiály na veletrh a konferenci",
  description:
    "Dárek u stánku, který si lidé odnesou. Tetovačky s logem, samolepky, vizitky a pozvánky na veletrh nebo konferenci. Kalkulace do 24 hodin.",
  alternates: { canonical: "/tetovacky-na-veletrh" },
  openGraph: {
    title: "Promo materiály na veletrh a konferenci | PartySkin B2B",
    description: "Dárek u stánku, který si lidé odnesou. Tetovačky s logem, samolepky, vizitky a pozvánky na veletrh nebo konferenci. Kalkulace do 24 hodin.",
    url: "/tetovacky-na-veletrh",
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

const data: Prilezitost = {
  "tag": "Veletrhy a konference",
  "h1": "Promo materiály na veletrh a konferenci",
  "perex": "U stánku rozhoduje, jestli si návštěvník něco odnese a jestli si to nechá. Propiska skončí v šuplíku — tetovačka s vaším logem se nalepí a chodí po veletrhu za vás.",
  "produkty": [
    {
      "title": "Tetovačky s logem",
      "text": "Malé formáty A6 a A7 se nejlépe rozdávají a nejvíc se lepí. Vyrobíme i variantu s QR kódem na váš web."
    },
    {
      "title": "Vizitky a pozvánky",
      "text": "Tiskoviny ve stejném vizuálním stylu jako zbytek stánku — pozvánky na after party, vizitky obchodníků, jmenovky."
    },
    {
      "title": "Samolepky na notebook",
      "text": "Formát, který lidé opravdu používají. Vaše logo pak jezdí po konferencích samo."
    }
  ],
  "duvody": [
    "Malé formáty A6 a A7 se rozdávají nejsnáz a nejvíc se použijí",
    "Jeden dodavatel na tetovačky, samolepky i tiskoviny — jeden vizuální styl",
    "Kalkulace do 24 hodin, grafický návrh do 24 hodin od briefu",
    "Vyrobíme i malou sérii na jednorázový veletrh",
    "Doručení na adresu nebo rovnou do areálu výstaviště"
  ],
  "foto": {
    "src": "/realizace-papirovy-prebal.jpg",
    "alt": "Papírový přebal s tetovačkami na míru"
  },
  "fotoPopis": "Přebal na míru z tetovačky udělá dárek, ne leták. Návštěvník si ho strčí do kapsy a doma ho otevře — tam teprve vaše značka zabere.",
  "ceny": [
    {
      "format": "A7 (nejmenší)",
      "cena": "11 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "A6",
      "cena": "19 Kč",
      "pozn": "od 1 000 ks"
    },
    {
      "format": "Vizitky a pozvánky",
      "cena": "12 Kč",
      "pozn": "od 50 ks"
    },
    {
      "format": "Samolepky",
      "cena": "4 Kč",
      "pozn": "od 100 ks"
    }
  ],
  "faq": [
    {
      "q": "Jaký formát se u stánku osvědčí nejvíc?",
      "a": "A6 a A7. Vejdou se do kapsy, dají se rozdávat jednou rukou a lidé si je opravdu nalepí. Velké archy A4 fungují spíš jako dárek pro klíčové klienty."
    },
    {
      "q": "Můžeme mít na tetovačce QR kód?",
      "a": "Ano. Tiskneme plnobarevně včetně bílé, takže QR kód je čitelný. Doporučujeme ho umístit na přebal, ne na samotnou tetovačku."
    },
    {
      "q": "Zvládnete i malou sérii na jeden veletrh?",
      "a": "Ano. Minimální množství nemáme, u tetovaček vyrobíme i jeden arch. U tiskovin je minimum 50 kusů."
    }
  ],
  "ctaTitul": "Chystáte stánek na veletrh?",
  "ctaText": "Napište nám termín a odhad návštěvnosti. Doporučíme formát, spočítáme cenu a stihneme to.",
  "souvisejici": [
    {
      "href": "/tetovacky-na-firemni-event",
      "label": "Tetovačky na firemní event"
    },
    {
      "href": "/produkty",
      "label": "Ceník a produkty"
    },
    {
      "href": "/jak-to-funguje",
      "label": "Jak probíhá zakázka"
    },
    {
      "href": "/kontakt",
      "label": "Nezávazná poptávka"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Jaký formát se u stánku osvědčí nejvíc?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A6 a A7. Vejdou se do kapsy, dají se rozdávat jednou rukou a lidé si je opravdu nalepí. Velké archy A4 fungují spíš jako dárek pro klíčové klienty."
      }
    },
    {
      "@type": "Question",
      "name": "Můžeme mít na tetovačce QR kód?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Tiskneme plnobarevně včetně bílé, takže QR kód je čitelný. Doporučujeme ho umístit na přebal, ne na samotnou tetovačku."
      }
    },
    {
      "@type": "Question",
      "name": "Zvládnete i malou sérii na jeden veletrh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ano. Minimální množství nemáme, u tetovaček vyrobíme i jeden arch. U tiskovin je minimum 50 kusů."
      }
    }
  ]
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
      "name": "Veletrhy a konference",
      "item": "https://www.makethemoment.cz/tetovacky-na-veletrh"
    }
  ]
};

const sluzbaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Promo materiály na veletrh a konferenci",
  "serviceType": "Výroba promo materiálů na míru",
  "provider": {
    "@id": "https://www.makethemoment.cz/#organizace"
  },
  "description": "Dárek u stánku, který si lidé odnesou. Tetovačky s logem, samolepky, vizitky a pozvánky na veletrh nebo konferenci. Kalkulace do 24 hodin.",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Česko"
    },
    {
      "@type": "Country",
      "name": "Slovensko"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sluzbaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrilezitostPage data={data} />
    </>
  );
}
