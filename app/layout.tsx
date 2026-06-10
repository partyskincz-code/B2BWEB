import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export const metadata: Metadata = {
  title: {
    default: "PartySkin B2B — Promo materiály na míru pro firmy a eventy",
    template: "%s | PartySkin B2B",
  },
  description:
    "Dočasné tetovačky, samolepky a pohlednice na míru pro firmy, eventy, svatby a festivaly. Certifikovaná výroba, vlastní design, dodání do 5 dní. Poptejte zdarma.",
  keywords: [
    "dočasné tetovačky na míru",
    "reklamní tetovačky firmy",
    "samolepky na míru",
    "pohlednice na míru",
    "promo materiály eventy",
    "firemní merch",
    "tetovačky svatba",
    "B2B tetovačky",
  ],
  authors: [{ name: "PartySkin s.r.o." }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://b2b.partyskin.cz",
    siteName: "PartySkin B2B",
    title: "PartySkin B2B — Váš brand na kůži. Doslova.",
    description:
      "Kompletní promo materiály na jednom místě. Dočasné tetovačky, samolepky, pohlednice — vše na míru pro váš event nebo značku.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "PartySkin B2B",
      description: "Výroba dočasných tetováček, samolepek a pohlednic na míru pro firmy a eventy",
      url: "https://b2b.partyskin.cz",
      telephone: "+420600000000",
      email: "partyskincz@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Praha",
        addressCountry: "CZ",
      },
      priceRange: "CZK",
    }),
  },
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
