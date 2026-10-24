import type { CenikData } from "@/app/(cs)/cenik/CenikView";

/**
 * Eurové ceny jsou přepočtené z korunového ceníku kurzem ČNB 24,355 Kč za euro
 * ze 14. 10. 2026 a zaokrouhlené nahoru na 0,05 eura.
 * Při změně korunového ceníku nebo při výraznějším pohybu kurzu je potřeba
 * přepočítat i tahle pásma, jinak se obě verze rozejdou.
 */
export const KURZ = { hodnota: "24,355", datum: "14. 10. 2026" };

const hladinySk = ["1 až 19 ks", "20 až 99 ks", "100 až 499 ks", "500 až 999 ks", "1 000+ ks"];
const hladinyEn = ["1 to 19 pcs", "20 to 99 pcs", "100 to 499 pcs", "500 to 999 pcs", "1,000+ pcs"];

const cenyA4 = ["5,30 až 6,95 €", "3,10 až 3,70 €", "2,70 až 3,25 €", "2,30 až 2,85 €", "1,85 až 2,45 €"];
const cenyA5 = ["2,70 až 3,70 €", "1,65 až 2,30 €", "1,35 až 1,65 €", "1,15 až 1,45 €", "0,95 až 1,20 €"];
const cenyA6 = ["1,65 až 2,15 €", "1,05 až 1,40 €", "0,80 až 1,05 €", "0,70 až 0,95 €", "0,60 až 0,80 €"];
const cenyA7 = ["1,00 až 1,40 €", "0,65 až 0,90 €", "0,45 až 0,50 €", "0,40 až 0,45 €", "0,40 €"];
const en = (a: string[]) => a.map((x) => x.replace(" až ", " to "));

export const cenikSk: CenikData = {
  tag: "Cenník",
  h1: "Koľko stoja reklamné tetovačky a promo materiály",
  perex:
    "Každú zákazku počítame na mieru. Cena závisí od formátu archu, počtu kusov, náročnosti grafiky a spôsobu balenia, preto nižšie uvádzame orientačné cenové pásma. Konkrétnu cenu pre váš projekt pripravíme zadarmo do 24 hodín od dopytu.",
  tetovackyTitul: "Dočasné tetovačky",
  tetovackyPerex: "Orientačné pásma za jeden kus podľa formátu a veľkosti nákladu. Konečnú cenu stanovíme podľa konkrétneho zadania.",
  sloupecFormat: "Formát",
  hladiny: hladinySk,
  tetovacky: [
    { format: "A4 (najväčší)", ceny: cenyA4 },
    { format: "A5", ceny: cenyA5 },
    { format: "A6", ceny: cenyA6 },
    { format: "A7 (najmenší)", ceny: cenyA7 },
  ],
  poznamkaA7:
    "Ceny v tabuľke platia za celý hárok daného formátu. Kusové tetovačky, teda jednotlivé motívy vyseknuté z hárku a pripravené na rozdávanie, začínajú na 0,15 € za kus; cena závisí od veľkosti motívu a nákladu a spočítame ju do 24 hodín.",
  baleniTitul: "Balenie",
  baleniPerex: "Príplatok za kus k základnej cene tetovačiek.",
  baleni: [
    { typ: "Bez balenia", priplatek: "základná cena", pozn: "Voľné archy." },
    { typ: "S papierovým prebalom", priplatek: "+0,30 až 0,45 € / ks", pozn: "Prebal na mieru, možnosť tlače návodu na rub. Cena podľa formátu a nákladu." },
    { typ: "S celofánom", priplatek: "+0,10 € / ks", pozn: "Zatavené celofánové vrecko." },
    { typ: "Papier a celofán", priplatek: "+0,40 až 0,50 € / ks", pozn: "Kombinácia oboch, najlepšie ako darček." },
  ],
  provedeniTitul: "Prevedenie a špeciálne úpravy",
  provedeniPerex: "Čo sa dá s archom urobiť nad rámec bežnej plnofarebnej tlače. Cenu pri týchto úpravách počítame podľa konkrétneho zadania, pretože sa líši podľa motívu aj nákladu.",
  provedeni: [
    { typ: "Plnofarebná tlač vrátane bielej", priplatek: "v cene", pozn: "Biela podtlačová vrstva drží farby verné aj na tmavšej pokožke. Bez nej sú biele plochy priehľadné." },
    { typ: "Metalické zlaté a strieborné", priplatek: "individuálne", pozn: "Metalický efekt pre svadby, festivaly aj firemné kampane. Robíme ho bežne." },
    { typ: "Tvarový výsek do obrysu motívu", priplatek: "individuálne", pozn: "Rez presne podľa kontúry loga alebo ilustrácie, takže motívy dodáme po jednom kuse a nikto nič nestriha." },
    { typ: "Formáty väčšie než A4", priplatek: "individuálne", pozn: "Veľké motívy cez rameno alebo chrbát. Rozmer aj cenu dohodneme podľa zadania." },
    { typ: "Tlač na rubovú stranu", priplatek: "+10 %", pozn: "Návod, logo, venovanie alebo QR kód na rub archu. Príplatok z ceny zákazky." },
    { typ: "Expresná výroba", priplatek: "príplatok podľa termínu", pozn: "Keď akcia nepočká. Napíšte termín a potvrdíme, či ho stihneme a za koľko." },
  ],
  dalsiTitul: "Samolepky a tlačoviny",
  dalsi: [
    { produkt: "Samolepky, PVC s tvarovým orezom", cena: "2,05 € / hárok A5", minimum: "od 100 hárkov", pozn: "Rez kopíruje presný obrys motívu, odolná plastová fólia, vodeodolná a UV stála. Vyberte si ju, keď má samolepka vyzerať prémiovo a vydržať na fľaši, notebooku alebo helme. Výroba 4 až 5 pracovných dní od odsúhlasenia podkladov." },
    { produkt: "Samolepky, papier s pravidelným tvarom", cena: "1,05 € / hárok A4", minimum: "A5 za 0,75 €, od 100 hárkov", pozn: "Rovný rez na obdĺžničky 80 × 47 mm, 12 kusov na hárku A4 a 6 na A5, teda od 0,09 € za samolepku. Vyberte si ju, keď ide hlavne o počet kusov a cenu a neprekáža vám okraj okolo motívu. Výroba 3 až 4 pracovné dni." },
    { produkt: "Tlačoviny, pohľadnice, pozvánky, vizitky", cena: "0,35 až 0,65 € / ks", minimum: "od 1 ks", pozn: "Profesionálny papier, plnofarebná tlač." },
    { produkt: "Kompletné riešenie pre akciu", cena: "individuálne", minimum: "podľa rozsahu", pozn: "Balík tetovačiek, samolepiek a tlačovín v jednom štýle." },
  ],
  infoBox: {
    pred: "Všetky ceny sú",
    zvyraznene: "konečné",
    po: " a platia za jeden kus bez balenia, pri samolepkách za jeden hárok. Pri tetovačkách nemáme minimálne množstvo, vyrobíme aj jeden arch. Pri objednávkach nad 5 000 ks pripravíme kalkuláciu na mieru.",
  },
  odkazyPod: [
    { href: "/velkoobjemova-vyroba-tetovacek", label: "Ceny veľkých sérií tetovačiek" },
    { href: "/samolepky-s-logem", label: "Samolepky s logom podrobne" },
    { href: "/tiskoviny-na-miru", label: "Tlačoviny, pohľadnice a vizitky" },
  ],
  pdfLabel: "Stiahnuť kompletný cenník (PDF, v Kč)",
  vCeneTitul: "Čo je v cene",
  vCene: [
    "Základná úprava vášho loga alebo motívu pre tlač",
    "Digitálna vizualizácia na reálnom produkte pred výrobou",
    "Jedno kolo úprav návrhu",
    "Plnofarebná tlač vrátane bielej farby",
    "Kontrola kvality pred expedíciou",
    "Vzorka zadarmo pred zadaním väčšej zákazky",
  ],
  zvlastTitul: "Čo sa účtuje zvlášť",
  zvlast: [
    "Balenie, papierový prebal +0,30 až 0,45 €/ks, celofán +0,10 €/ks, kombinácia +0,40 až 0,50 €/ks",
    "Tlač na rubovú stranu (text, logo, venovanie, QR kód), +10 % z ceny zákazky",
    "Kusový orez archu, 2,10 € / ks A4",
    "Tvarový výsek do obrysu motívu, cena podľa zadania",
    "Metalické prevedenie a formáty nad A4, cena podľa zadania",
    "Expresná výroba, príplatok podľa požadovaného termínu",
    "Grafické spracovanie nad rámec základnej úpravy, 20,55 € / hod",
    "Doprava na Slovensko, 4,10 €",
  ],
  faqTitul: "Časté otázky k cenám",
  faq: [
    { q: "Koľko stojí 1 000 tetovačiek s logom?", a: "Pri formáte A6 sa 1 000 kusov pohybuje medzi 0,60 a 0,80 € za kus, teda zhruba 600 až 800 €. Menší formát A7 vychádza na 0,40 € za kus, väčší A5 na 0,95 až 1,20 €. Presnú cenu stanovíme podľa grafiky, balenia a termínu." },
    { q: "V akej mene fakturujete na Slovensko?", a: "Slovenským zákazníkom fakturujeme v eurách. Ceny na tejto stránke sú prepočítané z korunového cenníka kurzom Českej národnej banky a sú orientačné, záväznú cenu v eurách dostanete v ponuke na mieru." },
    { q: "Je grafika v cene?", a: "Áno. Spracovanie vášho loga alebo motívu, vizualizácia na reálnom produkte aj jedno kolo úprav sú zahrnuté v cene zákazky." },
    { q: "Sú uvedené ceny konečné?", a: "Áno. Uvedené pásma sú konečné ceny za jeden kus bez balenia, nič sa k nim už nepripočítava. Sú orientačné, záväznú cenu dostanete v ponuke na mieru." },
    { q: "Platí sa záloha?", a: "U nových zákazníkov požadujeme zálohu 50 % pred začatím výroby. Pri opakovaných objednávkach fakturujeme po dodaní." },
    { q: "Robíte tetovačky v zlatej a striebornej?", a: "Áno, metalické zlaté aj strieborné prevedenie robíme bežne. Hodí sa na svadby, festivaly aj firemné kampane. Cenu počítame podľa motívu a nákladu." },
    { q: "Viete vyseknúť tetovačku do tvaru loga?", a: "Áno. Tvarový výsek vedie rez presne po obryse motívu, takže dostanete jednotlivé kusy pripravené na rozdávanie. Je to niečo iné než kusový orez archu, cenu stanovíme podľa tvaru a počtu kusov." },
    { q: "Aké veľké tetovačky zvládnete?", a: "Bežný sortiment je A4 až A7, ale vieme aj väčšie motívy, napríklad cez rameno alebo chrbát. Rozmer a cenu dohodneme podľa konkrétneho zadania." },
    { q: "Dostanem vzorku vopred?", a: "Áno. Pred zadaním väčšej zákazky vám pošleme vzorku zadarmo, aby ste si overili kvalitu tlače, farby aj veľkosť motívu na koži." },
    { q: "Dá sa výroba urýchliť?", a: "Štandardný termín je 5 až 20 pracovných dní podľa rozsahu. Keď akcia nepočká, napíšte nám dátum a potvrdíme, či ho stihneme a za aký príplatok." },
    { q: "Máte niečo pre stálych zákazníkov?", a: "Áno. Agentúram a firmám, ktoré u nás objednávajú opakovane, ponúkame zvýhodnené ceny a prednostné zaradenie do výroby." },
    { q: "Ako sa dá cena znížiť?", a: "Najväčší vplyv má množstvo, medzi nákladom 100 kusov a 1 000 kusov je rozdiel zhruba tretina ceny za kus. Druhý najsilnejší faktor je formát: A7 vyjde na tretinu ceny A5. Pomôže aj štandardné balenie namiesto prebalu na mieru a jednoduchšia grafika." },
  ],
  dalNadpis: "Než sa rozhodnete",
  dalOdkazy: [
    { href: "/sk/produkty", label: "Produkty a ponuka" },
    { href: "/sk/jak-to-funguje", label: "Ako prebieha zákazka" },
    { href: "/sk/reference", label: "Referencie a galéria" },
    { href: "/sk/kontakt", label: "Nezáväzný dopyt" },
  ],
  ctaTitul: "Chcete presnú cenu?",
  ctaText: "Napíšte nám formát, približné množstvo a termín akcie. Kalkuláciu pošleme do 24 hodín, nezáväzne a zadarmo.",
  ctaTlacitko: "Vyžiadať kalkuláciu",
  kontaktHref: "/sk/kontakt",
};

export const cenikEn: CenikData = {
  tag: "Price list",
  h1: "What custom promotional tattoos and print materials cost",
  perex:
    "Every order is quoted individually. The price depends on sheet format, quantity, artwork complexity and packaging, so the bands below are indicative. We prepare a specific quote for your project free of charge within 24 hours of your enquiry.",
  tetovackyTitul: "Temporary tattoos",
  tetovackyPerex: "Indicative price per piece by format and run size. The final price is set against your actual brief.",
  sloupecFormat: "Format",
  hladiny: hladinyEn,
  tetovacky: [
    { format: "A4 (largest)", ceny: en(cenyA4) },
    { format: "A5", ceny: en(cenyA5) },
    { format: "A6", ceny: en(cenyA6) },
    { format: "A7 (smallest)", ceny: en(cenyA7) },
  ],
  poznamkaA7:
    "The prices in the table are per full sheet of the given format. Single tattoos, individual motifs die cut from the sheet and ready to hand out, start at 0,15 € per piece; the price depends on the size of the motif and the quantity and we calculate it within 24 hours.",
  baleniTitul: "Packaging",
  baleniPerex: "Surcharge per piece on top of the base tattoo price.",
  baleni: [
    { typ: "No packaging", priplatek: "base price", pozn: "Loose sheets." },
    { typ: "Paper sleeve", priplatek: "+0,30 to 0,45 € / pc", pozn: "Custom sleeve, instructions can be printed on the back. Price depends on format and run size." },
    { typ: "Cellophane", priplatek: "+0,10 € / pc", pozn: "Sealed cellophane bag." },
    { typ: "Paper and cellophane", priplatek: "+0,40 to 0,50 € / pc", pozn: "Both combined, the best option as a gift." },
  ],
  provedeniTitul: "Finishes and special options",
  provedeniPerex: "What we can do with a sheet beyond standard full colour printing. These options are quoted against your specific brief, because the price varies with the artwork and the run size.",
  provedeni: [
    { typ: "Full colour printing including white", priplatek: "included", pozn: "The white underlayer keeps colours true even on darker skin. Without it, white areas print transparent." },
    { typ: "Metallic gold and silver", priplatek: "individual", pozn: "A metallic finish for weddings, festivals and brand campaigns. We produce these regularly." },
    { typ: "Die cut to the outline of the motif", priplatek: "individual", pozn: "The cut follows the contour of your logo or illustration, so the motifs arrive as single pieces ready to hand out." },
    { typ: "Formats larger than A4", priplatek: "individual", pozn: "Large motifs across an arm or a back. Dimensions and price agreed against your brief." },
    { typ: "Printing on the reverse", priplatek: "+10 %", pozn: "Instructions, logo, dedication or a QR code on the back of the sheet. Surcharge on the order value." },
    { typ: "Rush production", priplatek: "surcharge by deadline", pozn: "When the event will not wait. Send us the date and we will confirm whether we can make it and at what cost." },
  ],
  dalsiTitul: "Stickers and print materials",
  dalsi: [
    { produkt: "Stickers, PVC die cut to shape", cena: "2,05 € / A5 sheet", minimum: "from 100 sheets", pozn: "The cut follows the exact outline of the motif on durable plastic film, waterproof and UV stable. Choose this when the sticker has to look premium and survive on a bottle, a laptop or a helmet. Production 4 to 5 working days from artwork approval." },
    { produkt: "Stickers, paper in a regular shape", cena: "1,05 € / A4 sheet", minimum: "A5 at 0,75 €, from 100 sheets", pozn: "Straight cut into 80 × 47 mm rectangles, 12 pieces per A4 sheet and 6 per A5, so from 0,09 € per sticker. Choose this when quantity and price matter most and a margin around the motif is fine. Production 3 to 4 working days." },
    { produkt: "Print materials, postcards, invitations, business cards", cena: "0,35 to 0,65 € / pc", minimum: "from 1 pc", pozn: "Professional paper stock, full colour printing." },
    { produkt: "Complete solution for an event", cena: "individual", minimum: "by scope", pozn: "Tattoos, stickers and print materials in one consistent style." },
  ],
  infoBox: {
    pred: "All prices are",
    zvyraznene: "final",
    po: " and apply per piece without packaging, per sheet for stickers. There is no minimum quantity on tattoos, we will produce a single sheet. For orders above 5,000 pieces we prepare an individual calculation.",
  },
  odkazyPod: [
    { href: "/velkoobjemova-vyroba-tetovacek", label: "High volume tattoo production" },
    { href: "/samolepky-s-logem", label: "Custom stickers in detail" },
    { href: "/tiskoviny-na-miru", label: "Postcards, invitations and cards" },
  ],
  pdfLabel: "Download the full price list (PDF, in CZK)",
  vCeneTitul: "What is included",
  vCene: [
    "Basic preparation of your logo or artwork for print",
    "Digital visualisation on the real product before production",
    "One round of design revisions",
    "Full colour printing including white ink",
    "Quality check before dispatch",
    "A free sample before you commit to a larger order",
  ],
  zvlastTitul: "Charged separately",
  zvlast: [
    "Packaging: paper sleeve +0,30 to 0,45 €/pc, cellophane +0,10 €/pc, both +0,40 to 0,50 €/pc",
    "Printing on the reverse side (text, logo, dedication, QR code), +10 % of the order value",
    "Cutting the sheet into individual pieces, 2,10 € per A4 sheet",
    "Die cutting to the outline of the motif, quoted individually",
    "Metallic finishes and formats above A4, quoted individually",
    "Rush production, surcharge depending on the deadline",
    "Design work beyond the basic preparation, 20,55 € per hour",
    "Shipping within Czechia and Slovakia, 4,10 €",
  ],
  faqTitul: "Pricing FAQ",
  faq: [
    { q: "What does an order of 1,000 logo tattoos cost?", a: "In the A6 format, 1,000 pieces fall between 0,60 and 0,80 € per piece, roughly 600 to 800 €. The smaller A7 works out at 0,40 € per piece, the larger A5 at 0,95 to 1,20 €. The exact price depends on artwork, packaging and deadline." },
    { q: "Which currency do you invoice in?", a: "We invoice in euros outside Czechia. The prices on this page are converted from our Czech koruna price list at the Czech National Bank rate and are indicative, the binding price in euros comes with your quote." },
    { q: "Is the design work included?", a: "Yes. Preparing your logo or artwork, the visualisation on the real product and one round of revisions are all included in the order price." },
    { q: "Are the listed prices final?", a: "Yes. The bands are final prices per piece without packaging, nothing is added on top. They are indicative, the binding price comes with your individual quote." },
    { q: "Do you require a deposit?", a: "For new customers we ask for a 50 % deposit before production starts. For repeat orders we invoice after delivery." },
    { q: "Do you make metallic gold and silver tattoos?", a: "Yes, metallic gold and silver are part of our regular range. They work well for weddings, festivals and brand campaigns where the artwork should feel more special than standard full colour print. Priced by artwork and run size." },
    { q: "Can you die cut a tattoo to the shape of a logo?", a: "Yes. Die cutting follows the exact contour of the motif, so you receive individual pieces ready to hand out and nobody has to cut anything. This is different from simply cutting a sheet into rectangles, and it is quoted by shape and quantity." },
    { q: "How large can the tattoos be?", a: "Our standard range is A4 down to A7, but we can produce larger motifs, for example across an arm or a back. Dimensions and price are agreed against your brief." },
    { q: "Can I get a sample first?", a: "Yes. Before you commit to a larger order we send a free sample so you can check print quality, colours and how the motif sits on skin." },
    { q: "Can production be sped up?", a: "The standard lead time is 5 to 20 business days depending on scope. If your event will not wait, send us the date and we will confirm whether we can meet it and at what surcharge." },
    { q: "Do you offer anything for repeat customers?", a: "Yes. Agencies and companies that order from us regularly get preferential pricing and priority scheduling in production." },
    { q: "How can the price be reduced?", a: "Quantity has the biggest effect, the difference between a run of 100 and a run of 1,000 is roughly a third of the price per piece. Format is the second strongest factor: A7 costs about a third of A5. Standard packaging instead of a custom sleeve and simpler artwork help too." },
  ],
  dalNadpis: "Before you decide",
  dalOdkazy: [
    { href: "/en/produkty", label: "Products and offer" },
    { href: "/en/jak-to-funguje", label: "How an order works" },
    { href: "/en/reference", label: "References and gallery" },
    { href: "/en/kontakt", label: "Request a quote" },
  ],
  ctaTitul: "Want an exact price?",
  ctaText: "Send us the format, approximate quantity and your event date. You will have a quote within 24 hours, free and with no obligation.",
  ctaTlacitko: "Request a quote",
  kontaktHref: "/en/kontakt",
};
