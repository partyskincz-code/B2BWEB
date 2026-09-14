import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isLocalizedLang, localizedLocales, SITE } from "@/lib/localization";

export const dynamicParams = false;

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  applicationName: "Make the Moment",
  authors: [{ name: "Make the Moment" }],
  creator: "Make the Moment",
  publisher: "Make the Moment",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", siteName: "Make the Moment", images: [{ url: "/og-make-the-moment.jpg", width: 1200, height: 630, alt: "Make the Moment" }] },
};

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocalizedLang(params.locale)) notFound();
  const languageCode = params.locale === "sk" ? "sk-SK" : "en-GB";
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "LocalBusiness", "@id": `${SITE}/#organizace`,
    name: "Make the Moment", alternateName: "PartySkin", url: SITE, logo: `${SITE}/logo-mtm.png`,
    image: `${SITE}/realizace-prebal-b2b-a5.jpg`, telephone: "+420724874274", email: "objednavky@partyskin.cz",
    address: { "@type": "PostalAddress", streetAddress: "Riegrova 570", addressLocality: "Třeboň", postalCode: "37901", addressCountry: "CZ" },
    inLanguage: languageCode,
  };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE}/#web`, url: `${SITE}/${params.locale}`, name: "Make the Moment", inLanguage: languageCode, publisher: { "@id": `${SITE}/#organizace` } };
  return (
    <html lang={params.locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <LanguageProvider lang={params.locale} translations={translations}>
          <Navigation /><main>{children}</main><Footer />
        </LanguageProvider>
        <Analytics /><SpeedInsights />
      </body>
    </html>
  );
}
