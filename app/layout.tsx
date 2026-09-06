import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { translations } from "@/lib/translations";

const SITE = "https://www.makethemoment.cz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Make the Moment, Promo materiály na míru pro firmy a eventy",
    template: "%s | Make the Moment",
  },
  description:
    "Dočasné tetovačky, samolepky a pohlednice na míru pro firmy, eventy, svatby a festivaly. Certifikovaná výroba, vlastní design, výroba 5 až 20 pracovních dní. Poptejte zdarma.",
  applicationName: "Make the Moment",
  authors: [{ name: "Make the Moment" }],
  creator: "Make the Moment",
  publisher: "Make the Moment",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE,
    siteName: "Make the Moment",
    title: "Make the Moment, Váš brand na kůži. Doslova.",
    description:
      "Kompletní promo materiály na jednom místě. Dočasné tetovačky, samolepky, pohlednice, vše na míru pro váš event nebo značku.",
    images: [
      {
        url: "/og-make-the-moment.jpg",
        width: 1200,
        height: 630,
        alt: "Make the Moment, dočasné tetovačky a promo materiály na míru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make the Moment, Váš brand na kůži. Doslova.",
    description:
      "Dočasné tetovačky, samolepky a tiskoviny na míru pro firmy a eventy.",
    images: ["/og-make-the-moment.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}/#organizace`,
  name: "Make the Moment",
  alternateName: "PartySkin",
  description:
    "Výroba dočasných tetovaček, samolepek a tiskovin na míru pro firmy, agentury a eventy.",
  url: SITE,
  logo: `${SITE}/logo-mtm.png`,
  image: `${SITE}/realizace-prebal-b2b-a5.jpg`,
  telephone: "+420724874274",
  email: "objednavky@partyskin.cz",
  priceRange: "$$",
  currenciesAccepted: "CZK",
  paymentAccepted: "Bankovní převod, platební karta",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Riegrova 570",
    addressLocality: "Třeboň",
    postalCode: "37901",
    addressCountry: "CZ",
  },
  areaServed: [
    { "@type": "Country", name: "Česko" },
    { "@type": "Country", name: "Slovensko" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.partyskin.cz",
    "https://www.partyskin.sk",
    "https://www.instagram.com/partyskin.cz/",
    "https://www.facebook.com/partyskincz/",
    "https://www.linkedin.com/company/partyskin",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#web`,
  url: SITE,
  name: "Make the Moment",
  inLanguage: "cs-CZ",
  publisher: { "@id": `${SITE}/#organizace` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LanguageProvider translations={translations}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
