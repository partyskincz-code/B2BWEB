import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/obchodni-podminky", "/ochrana-osobnich-udaju"],
      },
    ],
    sitemap: "https://www.makethemoment.cz/sitemap.xml",
    host: "https://www.makethemoment.cz",
  };
}
