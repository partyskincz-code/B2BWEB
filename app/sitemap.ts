import type { MetadataRoute } from "next";

const SITE = "https://www.makethemoment.cz";

/**
 * `lastModified` je datum poslední skutečné změny obsahu, ne čas buildu.
 * Kdyby se bralo z buildu, sitemapa by po každém nasazení tvrdila,
 * že se změnily všechny stránky, a vyhledávače by ji přestaly brát vážně.
 * Při obsahové úpravě stránky se tady ručně přepíše datum.
 */
const D = {
  home: "2026-09-06",
  produkty: "2026-09-09",
  cenik: "2026-09-09",
  jakToFunguje: "2026-09-04",
  reference: "2026-09-08",
  prilezitosti: "2026-09-09",
  poradna: "2026-09-09",
  kontakt: "2026-09-08",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified: D.home, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/produkty`, lastModified: D.produkty, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/cenik`, lastModified: D.cenik, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/jak-to-funguje`, lastModified: D.jakToFunguje, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/reference`, lastModified: D.reference, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tetovacky-na-firemni-event`, lastModified: D.prilezitosti, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-na-veletrh`, lastModified: D.prilezitosti, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-na-festival`, lastModified: D.prilezitosti, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-pro-skoly`, lastModified: D.prilezitosti, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/poradna`, lastModified: D.poradna, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/poradna/jak-pripravit-podklady-pro-tisk-tetovacek`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/poradna/jaky-format-tetovacek-zvolit`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/poradna/jak-dlouho-vydrzi-docasne-tetovacky`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/poradna/kolik-stoji-reklamni-tetovacky`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/poradna/co-dat-na-veletrzni-stanek`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/poradna/drobne-darky-pro-zamestnance`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/poradna/jak-z-loga-udelat-tetovacku`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/poradna/kolik-stoji-reklamni-predmety-na-konferenci`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/poradna/darkovy-balicek-pro-klienty`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/poradna/kdy-zadat-vyrobu-promo-materialu`, lastModified: D.poradna, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE}/kontakt`, lastModified: D.kontakt, changeFrequency: "yearly", priority: 0.9 },
  ];
}
