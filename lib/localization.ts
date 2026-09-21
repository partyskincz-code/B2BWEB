import type { Metadata } from "next";
import type { Lang } from "./i18n";

export const SITE = "https://www.makethemoment.cz";
export const localizedLocales = ["sk", "en"] as const;
export type LocalizedLang = (typeof localizedLocales)[number];

export const isLocalizedLang = (value: string): value is LocalizedLang =>
  localizedLocales.includes(value as LocalizedLang);

export function localePath(lang: Lang, path: string) {
  return lang === "cs" ? path : `/${lang}${path === "/" ? "" : path}`;
}

export function languageAlternates(path: string) {
  return {
    cs: `${SITE}${path}`,
    sk: `${SITE}${localePath("sk", path)}`,
    en: `${SITE}${localePath("en", path)}`,
    "x-default": `${SITE}${path}`,
  };
}

const pageMetadata = {
  "/": {
    cs: ["Reklamní tetovačky na míru pro firmy a eventy | Make the Moment", "Dočasné tetovačky s vaším logem, samolepky a tiskoviny na míru pro firmy, agentury a eventy. Bez minimálního množství, nabídka do 24 hodin."],
    sk: ["Reklamné tetovačky na mieru pre firmy a eventy | Make the Moment", "Dočasné tetovačky s vaším logom, samolepky a tlačoviny na mieru pre firmy, agentúry a eventy. Bez minimálneho množstva, ponuka do 24 hodín."],
    en: ["Custom promotional tattoos for companies and events | Make the Moment", "Temporary tattoos with your logo, custom stickers and print materials for companies, agencies and events. No minimum quantity, quote within 24 hours."],
  },
  "/produkty": {
    cs: ["Tetovačky, samolepky a tiskoviny na míru, ceník", "Dočasné tetovačky od 8 Kč, samolepky od 3 Kč, tiskoviny od 8 Kč za kus. Orientační pásma, formáty A4 až A7, certifikované materiály, ceník ke stažení."],
    sk: ["Tetovačky, samolepky a tlačoviny na mieru, cenník", "Dočasné tetovačky od 8 Kč, samolepky od 3 Kč a tlačoviny od 8 Kč za kus. Formáty A4 až A7, certifikované materiály a cenník na stiahnutie."],
    en: ["Custom tattoos, stickers and print materials, price list", "Temporary tattoos from CZK 8, stickers from CZK 3 and print materials from CZK 8 per piece. A4 to A7 formats, certified materials and downloadable price list."],
  },
  "/jak-to-funguje": {
    cs: ["Jak probíhá zakázka, od poptávky po dodání", "Pět kroků od poptávky k dodání. Odpověď do 24 hodin, grafický návrh do 24 hodin od briefu, výroba 5 až 20 pracovních dní. Časté otázky a záruky."],
    sk: ["Ako prebieha zákazka, od dopytu po dodanie", "Päť krokov od dopytu po dodanie. Odpoveď do 24 hodín, grafický návrh do 24 hodín od zadania a výroba 5 až 20 pracovných dní."],
    en: ["How an order works, from inquiry to delivery", "Five steps from inquiry to delivery. Response within 24 hours, design within 24 hours of the brief and production in 5 to 20 business days."],
  },
  "/reference": {
    cs: ["Reference: tetovačky s logem pro firmy", "Reálné zakázky pro got2b, MOREAU AGRI, NaZemi nebo Ekocentrum Vydra. Fotky hotových tetovaček, přebalů a tiskovin na míru."],
    sk: ["Referencie: tetovačky s logom pre firmy", "Reálne zákazky pre got2b, MOREAU AGRI, NaZemi či Ekocentrum Vydra. Fotografie hotových tetovačiek, obalov a tlačovín na mieru."],
    en: ["References: logo tattoos for companies", "Real projects for got2b, MOREAU AGRI, NaZemi and Ekocentrum Vydra. Photos of finished custom tattoos, packaging and print materials."],
  },
  "/kontakt": {
    cs: ["Nezávazná poptávka tetovaček s logem", "Pošlete logo, grafiku nebo jen nápad. Do 24 hodin dostanete kalkulaci, doporučení formátu i termín výroby. Bez minimálního množství."],
    sk: ["Nezáväzný dopyt na tetovačky s logom", "Pošlite logo, grafiku alebo len nápad. Do 24 hodín dostanete kalkuláciu, odporúčanie formátu aj termín výroby. Bez minimálneho množstva."],
    en: ["Request a free quote for custom logo tattoos", "Send us your logo, artwork or just an idea. Within 24 hours you will receive a quote, format recommendation and production date. No minimum quantity."],
  },
} satisfies Record<string, Record<Lang, [string, string]>>;

export type LocalizedPagePath = keyof typeof pageMetadata;

export function createLocalizedMetadata(lang: Lang, path: LocalizedPagePath): Metadata {
  const [title, description] = pageMetadata[path][lang];
  const url = localePath(lang, path);
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: { title, description, url, locale: lang === "cs" ? "cs_CZ" : lang === "sk" ? "sk_SK" : "en_GB" },
  };
}
