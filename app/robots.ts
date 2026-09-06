import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Právní stránky se záměrně nezakazují: mají v HTML `noindex`,
        // a kdyby je robots.txt blokoval, vyhledávač by ten pokyn nikdy nestáhl
        // a nechal by je v indexu.
      },
    ],
    sitemap: "https://www.makethemoment.cz/sitemap.xml",
    host: "https://www.makethemoment.cz",
  };
}
