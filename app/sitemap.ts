import type { MetadataRoute } from "next";

const SITE = "https://www.makethemoment.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/produkty`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/cenik`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/jak-to-funguje`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/reference`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/tetovacky-na-firemni-event`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-na-veletrh`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-na-festival`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tetovacky-pro-skoly`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
