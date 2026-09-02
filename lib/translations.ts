import type { Lang } from "./i18n";

const cs: Record<string, string> = {
  // Nav
  "nav.home": "Domů",
  "nav.products": "Produkty",
  "nav.how": "Jak to funguje",
  "nav.references": "Reference",
  "nav.contact": "Kontakt",
  "nav.cta": "Poptat výrobu",

  // Hero
  "hero.h1a": "Tetovačky na míru.",
  "hero.h1b": "A promo, co k nim sedí.",
  "hero.sub": "Dočasné tetovačky s vaším logem nebo motivem, a k nim samolepky, pohlednice a kompletní promo řešení pro firmy, agentury a eventy. Od několika kusů až po velké kampaně.",
  "hero.cta.primary": "Nezávazně poptat",
  "hero.cta.secondary": "Prohlédnout produkty",
  "hero.badge.1": "Bez minimálního množství objednávky",
  "hero.badge.2": "Certifikované a bezpečné materiály",
  "hero.badge.3": "Osobní přístup ke každé zakázce",
  "hero.scroll": "Scrollujte",

  // USPs
  "usp.1.title": "Navrhujeme v ČR",
  "usp.1.desc": "Každý projekt řídíme osobně z Česka, od briefu až po dodání. Certifikované materiály bezpečné pro děti i dospělé.",
  "usp.2.title": "Vzorky zdarma",
  "usp.2.desc": "Před objednávkou si vyzkoušejte kvalitu. Vzorky posíláme zdarma, bez závazků.",
  "usp.3.title": "Bez minimálního množství",
  "usp.3.desc": "Objednejte 1 nebo 10 000 kusů. Žádné minimální množství, žádné podmínky.",
  "usp.4.title": "Doobjednávka kdykoliv",
  "usp.4.desc": "Váš design máme uložený, doobjednejte jakékoliv množství bez závazků. Žádné minimální množství, žádné podmínky.",
  "usp.5.title": "Výroba 10–15 dní",
  "usp.5.desc": "Standardní lead time od schválení grafiky po dodání je 10–15 pracovních dní. Spěcháte? Zeptejte se nás.",

  // Storytelling
  "story.tag": "Kompletní B2B řešení",
  "story.h2a": "Jeden dodavatel.",
  "story.h2b": "Celý event vyřešen.",
  "story.p1": "Ať plánujete firemní večírek pro 50 lidí nebo festival pro 10 000, PartySkin pokryje veškeré promo materiály od A do Z. Grafika, výroba, balení, dodání. Jeden kontakt. Vše pod kontrolou.",
  "story.check.1": "Cenová nabídka do 24 hodin",
  "story.check.2": "Grafický návrh do 48 hodin",
  "story.check.3": "Dodání po celé Evropě, výroba 10–15 pracovních dní",
  "story.check.4": "Jeden kontakt po celou dobu projektu",
  "story.stat": "akcí úspěšně zásobeno materiálem",

  // Výhody
  "vyhody.h2": "Vyzkoušejte. Objednejte. Doobjednejte.",
  "vyhody.sub": "Tři svobody, které u jiných dodavatelů nenajdete.",
  "vyhody.1.title": "Vzorky zdarma",
  "vyhody.1.desc": "Nejste si jistí kvalitou? Pošleme vám vzorky předtím, než cokoliv objednáte. Zdarma, bez podmínek. Chceme, abyste se rozhodli s jistotou.",
  "vyhody.1.cta": "Požádat o vzorky",
  "vyhody.2.title": "Bez minimálního množství",
  "vyhody.2.desc": "Potřebujete 10 tetováček pro malou rodinnou oslavu, nebo 5 000 pro festival? Oboje zvládneme. Žádné umělé limity, žádné \"musíte vzít aspoň X kusů.\"",
  "vyhody.2.cta": "Zjistit cenu",
  "vyhody.3.title": "Doobjednávka kdykoliv",
  "vyhody.3.desc": "Váš design máme uložený, doobjednejte jakékoliv množství bez závazků. Výroba startuje okamžitě, žádné minimální množství, žádné podmínky.",
  "vyhody.3.cta": "Doobjednat",

  // Produkty sekce
  "products.tag": "Naše nabídka",
  "products.h2": "Kompletní promo materiály",
  "products.sub": "Tetovačky umíme nejlíp. K nim přidáme samolepky, pohlednice i kompletní řešení pro celou akci.",
  "products.cta": "Zobrazit celou nabídku",

  // Segmenty
  "segments.tag": "Pro koho pracujeme",
  "segments.h2": "Od firemního eventu po dětskou oslavu",
  "segments.sub": "Máme zkušenosti s každým typem akce. Víme, co funguje.",

  // Jak to funguje
  "process.tag": "Proces",
  "process.h2": "Od nápadu k výrobě za 5 dní",
  "process.sub": "Tři jednoduché kroky. Žádná byrokracie, žádné čekání.",
  "process.cta": "Zjistit více o procesu",
  "process.step": "Krok",
  "process.1.title": "Pošlete poptávku",
  "process.1.desc": "Vyplňte formulář nebo nám napište email. Potřebujeme jen typ produktu, množství a termín.",
  "process.2.title": "Návrh do 24 hodin",
  "process.2.desc": "Náš grafik připraví vizualizaci nebo zpracuje váš design. Schvalujete online, jednoduše.",
  "process.3.title": "Výroba & dodání",
  "process.3.desc": "Spustíme výrobu a doručíme přímo k vám. Standardně do 5–7 pracovních dní od schválení.",

  // Reference
  "testimonials.tag": "Reference",
  "testimonials.h2": "Co říkají naši zákazníci",

  // Galerie
  "gallery.tag": "Naše práce",
  "gallery.h2": "Ukázky realizací",
  "gallery.cta": "Zobrazit celou galerii",

  // CTA sekce
  "cta.h2": "Připraveni začít?",
  "cta.p": "Popište nám vaší akci a my se ozveme do 24 hodin s nabídkou přímo na míru. Bez závazků, bez skrytých poplatků.",
  "cta.badge.1": "Rychlá odpověď",
  "cta.badge.2": "Bezplatný návrh",
  "cta.badge.3": "Flexibilní množství",

  // Kontaktní formulář
  "form.title": "Poptejte zdarma",
  "form.name": "Jméno a firma",
  "form.email": "E-mail",
  "form.phone": "Telefon",
  "form.message": "Popište váš záměr... (typ produktu, počet ks, termín)",
  "form.submit": "Odeslat poptávku",
  "form.note": "Ozveme se do 24 hodin. Žádný spam.",
  "form.success": "Děkujeme! Ozveme se vám do 24 hodin.",

  // Stats
  "stats.1.value": "500+",
  "stats.1.label": "Spokojených klientů",
  "stats.2.value": "50 000+",
  "stats.2.label": "Tetováček ročně",
  "stats.3.value": "5 dní",
  "stats.3.label": "Průměrná výroba",
  "stats.4.value": "100%",
  "stats.4.label": "EU certifikace",

  // Footer
  "footer.tagline": "Kompletní promo materiály na míru pro firmy, eventy a akce.",
  "footer.products": "Produkty",
  "footer.company": "Společnost",
  "footer.contact": "Kontakt",
  "footer.copyright": "PartySkin B2B. Všechna práva vyhrazena.",

  // Produkty page
  "page.products.tag": "Naše nabídka",
  "page.products.h1": "Produkty a nabídka",
  "page.products.sub": "Nejsme jen tetovačky. Jsme váš partner pro kompletní promo a brandingové materiály. Vše na míru, vše pod jednou střechou.",

  // Jak to funguje page
  "page.how.tag": "Proces",
  "page.how.h1": "Jak to funguje",
  "page.how.sub": "Od prvního kontaktu po doručení. Jednoduchý proces, rychlá výroba, žádný stres.",

  // Reference page
  "page.ref.tag": "Portfolio",
  "page.ref.h1": "Reference a realizace",
  "page.ref.sub": "Stovky spokojených klientů. Tisíce vyrobených kusů. Podívejte se na výběr z naší práce.",

  // Kontakt page
  "page.contact.tag": "Kontakt",
  "page.contact.h1": "Pojďme spolupracovat",
  "page.contact.sub": "Popište nám vaší akci a ozveme se do 24 hodin s nabídkou na míru.",
};

const en: Record<string, string> = {
  // Nav
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.how": "How it works",
  "nav.references": "References",
  "nav.contact": "Contact",
  "nav.cta": "Get a quote",

  // Hero
  "hero.h1a": "Custom temporary tattoos.",
  "hero.h1b": "And the promo to match.",
  "hero.sub": "Temporary tattoos with your logo or artwork, plus stickers, postcards and complete promo solutions for companies, agencies and events. From a few pieces to large campaigns.",
  "hero.cta.primary": "Get a quote",
  "hero.cta.secondary": "View products",
  "hero.badge.1": "No minimum order quantity",
  "hero.badge.2": "Certified & safe materials",
  "hero.badge.3": "Personal approach to every order",
  "hero.scroll": "Scroll",

  // USPs
  "usp.1.title": "Designed in Czechia",
  "usp.1.desc": "Every project is personally managed from Czechia, from brief to delivery. Certified materials safe for the whole family.",
  "usp.2.title": "Free samples",
  "usp.2.desc": "Try the quality before ordering. We send samples for free, no commitment.",
  "usp.3.title": "No minimum order",
  "usp.3.desc": "Order 1 or 10,000 pieces. No minimum quantity, no conditions.",
  "usp.4.title": "Reorder anytime",
  "usp.4.desc": "Your design is saved, reorder any quantity without commitment. No minimum, no conditions.",
  "usp.5.title": "10–15 day turnaround",
  "usp.5.desc": "Standard lead time from artwork approval to delivery is 10–15 working days. In a rush? Ask us.",

  // Storytelling
  "story.tag": "Complete B2B solution",
  "story.h2a": "One supplier.",
  "story.h2b": "The whole event sorted.",
  "story.p1": "Whether you're planning a corporate party for 50 people or a festival for 10,000, PartySkin covers all promo materials from A to Z. Design, production, packaging, delivery. One contact. Everything under control.",
  "story.check.1": "Price quote within 24 hours",
  "story.check.2": "Graphic design within 48 hours",
  "story.check.3": "Delivery across Europe, production in 10–15 business days",
  "story.check.4": "One contact throughout the project",
  "story.stat": "events successfully supplied",

  // Výhody
  "vyhody.h2": "Try. Order. Reorder.",
  "vyhody.sub": "Three freedoms you won't find at other suppliers.",
  "vyhody.1.title": "Free samples",
  "vyhody.1.desc": "Not sure about the quality? We'll send you samples before you order anything. Free, no conditions. We want you to decide with confidence.",
  "vyhody.1.cta": "Request samples",
  "vyhody.2.title": "No minimum order",
  "vyhody.2.desc": "Need 10 tattoos for a small family party, or 5,000 for a festival? We handle both. No artificial limits, no \"you must order at least X pieces.\"",
  "vyhody.2.cta": "Get pricing",
  "vyhody.3.title": "Reorder anytime",
  "vyhody.3.desc": "Your design is saved, reorder any quantity without commitment. Production starts immediately, no minimum quantity, no conditions.",
  "vyhody.3.cta": "Reorder",

  // Produkty sekce
  "products.tag": "Our offer",
  "products.h2": "Complete promo materials",
  "products.sub": "Tattoos are what we do best. Stickers, postcards and complete solutions come with them.",
  "products.cta": "View full range",

  // Segmenty
  "segments.tag": "Who we work with",
  "segments.h2": "From corporate events to children's parties",
  "segments.sub": "We have experience with every type of event. We know what works.",

  // Jak to funguje
  "process.tag": "Process",
  "process.h2": "From idea to production in 5 days",
  "process.sub": "Three simple steps. No bureaucracy, no waiting.",
  "process.cta": "Learn more about the process",
  "process.step": "Step",
  "process.1.title": "Send an inquiry",
  "process.1.desc": "Fill in the form or email us. We just need the product type, quantity and deadline.",
  "process.2.title": "Design within 24 hours",
  "process.2.desc": "Our designer prepares a visualization or processes your design. You approve online, simply.",
  "process.3.title": "Production & delivery",
  "process.3.desc": "We start production and deliver directly to you. Typically 5–7 business days from approval.",

  // Reference
  "testimonials.tag": "References",
  "testimonials.h2": "What our customers say",

  // Galerie
  "gallery.tag": "Our work",
  "gallery.h2": "Project showcase",
  "gallery.cta": "View full gallery",

  // CTA sekce
  "cta.h2": "Ready to start?",
  "cta.p": "Describe your event and we'll get back to you within 24 hours with a custom quote. No commitment, no hidden fees.",
  "cta.badge.1": "Fast response",
  "cta.badge.2": "Free design",
  "cta.badge.3": "Flexible quantity",

  // Kontaktní formulář
  "form.title": "Get a free quote",
  "form.name": "Name and company",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.message": "Describe your project... (product type, quantity, deadline)",
  "form.submit": "Send inquiry",
  "form.note": "We'll respond within 24 hours. No spam.",
  "form.success": "Thank you! We'll get back to you within 24 hours.",

  // Stats
  "stats.1.value": "500+",
  "stats.1.label": "Happy clients",
  "stats.2.value": "50,000+",
  "stats.2.label": "Tattoos per year",
  "stats.3.value": "5 days",
  "stats.3.label": "Average production",
  "stats.4.value": "100%",
  "stats.4.label": "EU certified",

  // Footer
  "footer.tagline": "Custom promo materials for companies, events and occasions.",
  "footer.products": "Products",
  "footer.company": "Company",
  "footer.contact": "Contact",
  "footer.copyright": "PartySkin B2B. All rights reserved.",

  // Produkty page
  "page.products.tag": "Our offer",
  "page.products.h1": "Products & offer",
  "page.products.sub": "We're not just tattoos. We're your partner for complete promo and branding materials. Everything custom, everything under one roof.",

  // Jak to funguje page
  "page.how.tag": "Process",
  "page.how.h1": "How it works",
  "page.how.sub": "From first contact to delivery. Simple process, fast production, no stress.",

  // Reference page
  "page.ref.tag": "Portfolio",
  "page.ref.h1": "References & projects",
  "page.ref.sub": "Hundreds of happy clients. Thousands of pieces produced. Browse a selection of our work.",

  // Kontakt page
  "page.contact.tag": "Contact",
  "page.contact.h1": "Let's work together",
  "page.contact.sub": "Describe your event and we'll get back to you within 24 hours with a custom quote.",
};

const sk: Record<string, string> = {
  // Nav
  "nav.home": "Domov",
  "nav.products": "Produkty",
  "nav.how": "Ako to funguje",
  "nav.references": "Referencie",
  "nav.contact": "Kontakt",
  "nav.cta": "Dopytovať výrobu",

  // Hero
  "hero.h1a": "Tetovačky na mieru.",
  "hero.h1b": "A promo, čo k nim sedí.",
  "hero.sub": "Dočasné tetovačky s vaším logom alebo motívom, a k nim samolepky, pohľadnice a kompletné promo riešenia pre firmy, agentúry a eventy. Od niekoľkých kusov až po veľké kampane.",
  "hero.cta.primary": "Nezáväzne dopytovať",
  "hero.cta.secondary": "Prehliadnuť produkty",
  "hero.badge.1": "Bez minimálneho množstva objednávky",
  "hero.badge.2": "Certifikované a bezpečné materiály",
  "hero.badge.3": "Osobný prístup ku každej zákazke",
  "hero.scroll": "Scrollujte",

  // USPs
  "usp.1.title": "Navrhujeme v ČR",
  "usp.1.desc": "Každý projekt riadime osobne z Česka, od briefu až po dodanie. Certifikované materiály bezpečné pre celú rodinu.",
  "usp.2.title": "Vzorky zdarma",
  "usp.2.desc": "Pred objednávkou si vyskúšajte kvalitu. Vzorky posielame zdarma, bez záväzkov.",
  "usp.3.title": "Bez minimálneho množstva",
  "usp.3.desc": "Objednajte 1 alebo 10 000 kusov. Žiadne minimálne množstvo, žiadne podmienky.",
  "usp.4.title": "Doobjednávka kedykoľvek",
  "usp.4.desc": "Váš dizajn máme uložený, doobjednajte akékoľvek množstvo bez záväzkov. Žiadne minimum, žiadne podmienky.",
  "usp.5.title": "Výroba 10–15 dní",
  "usp.5.desc": "Štandardný lead time od schválenia grafiky po doručenie je 10–15 pracovných dní. Ponáhľate sa? Opýtajte sa nás.",

  // Storytelling
  "story.tag": "Kompletné B2B riešenie",
  "story.h2a": "Jeden dodávateľ.",
  "story.h2b": "Celý event vyriešený.",
  "story.p1": "Či plánujete firemný večierok pre 50 ľudí alebo festival pre 10 000, PartySkin pokryje všetky promo materiály od A po Z. Grafika, výroba, balenie, doručenie. Jeden kontakt. Všetko pod kontrolou.",
  "story.check.1": "Cenová ponuka do 24 hodín",
  "story.check.2": "Grafický návrh do 48 hodín",
  "story.check.3": "Doručenie po celej Európe, výroba 10–15 pracovných dní",
  "story.check.4": "Jeden kontakt počas celého projektu",
  "story.stat": "eventov úspešne zásobených materiálom",

  // Výhody
  "vyhody.h2": "Vyskúšajte. Objednajte. Doobjednajte.",
  "vyhody.sub": "Tri slobody, ktoré u iných dodávateľov nenájdete.",
  "vyhody.1.title": "Vzorky zdarma",
  "vyhody.1.desc": "Nie ste si istí kvalitou? Pošleme vám vzorky predtým, než čokoľvek objednáte. Zdarma, bez podmienok.",
  "vyhody.1.cta": "Požiadať o vzorky",
  "vyhody.2.title": "Bez minimálneho množstva",
  "vyhody.2.desc": "Potrebujete 10 tetovačiek pre malú oslavu alebo 5 000 pre festival? Oboje zvládneme. Žiadne umelé limity.",
  "vyhody.2.cta": "Zistiť cenu",
  "vyhody.3.title": "Doobjednávka kedykoľvek",
  "vyhody.3.desc": "Váš dizajn máme uložený, doobjednajte akékoľvek množstvo bez záväzkov. Výroba štartuje okamžite.",
  "vyhody.3.cta": "Doobjednať",

  // Produkty sekce
  "products.tag": "Naša ponuka",
  "products.h2": "Kompletné promo materiály",
  "products.sub": "Tetovačky vieme najlepšie. K nim pridáme samolepky, pohľadnice aj kompletné riešenie pre celú akciu.",
  "products.cta": "Zobraziť celú ponuku",

  // Segmenty
  "segments.tag": "Pre koho pracujeme",
  "segments.h2": "Od firemného eventu po detskú oslavu",
  "segments.sub": "Máme skúsenosti s každým typom akcie. Vieme, čo funguje.",

  // Jak to funguje
  "process.tag": "Proces",
  "process.h2": "Od nápadu k výrobe za 5 dní",
  "process.sub": "Tri jednoduché kroky. Žiadna byrokracia, žiadne čakanie.",
  "process.cta": "Zistiť viac o procese",
  "process.step": "Krok",
  "process.1.title": "Pošlite dopyt",
  "process.1.desc": "Vyplňte formulár alebo nám napíšte email. Potrebujeme len typ produktu, množstvo a termín.",
  "process.2.title": "Návrh do 24 hodín",
  "process.2.desc": "Náš grafik pripraví vizualizáciu alebo spracuje váš dizajn. Schvaľujete online, jednoducho.",
  "process.3.title": "Výroba & doručenie",
  "process.3.desc": "Spustíme výrobu a doručíme priamo k vám. Štandardne do 5–7 pracovných dní od schválenia.",

  // Reference
  "testimonials.tag": "Referencie",
  "testimonials.h2": "Čo hovoria naši zákazníci",

  // Galerie
  "gallery.tag": "Naša práca",
  "gallery.h2": "Ukážky realizácií",
  "gallery.cta": "Zobraziť celú galériu",

  // CTA sekce
  "cta.h2": "Pripravení začať?",
  "cta.p": "Opíšte nám vašu akciu a ozveme sa do 24 hodín s ponukou priamo na mieru. Bez záväzkov, bez skrytých poplatkov.",
  "cta.badge.1": "Rýchla odpoveď",
  "cta.badge.2": "Bezplatný návrh",
  "cta.badge.3": "Flexibilné množstvo",

  // Kontaktní formulář
  "form.title": "Dopytujte zdarma",
  "form.name": "Meno a firma",
  "form.email": "E-mail",
  "form.phone": "Telefón",
  "form.message": "Opíšte váš zámer... (typ produktu, počet ks, termín)",
  "form.submit": "Odoslať dopyt",
  "form.note": "Ozveme sa do 24 hodín. Žiadny spam.",
  "form.success": "Ďakujeme! Ozveme sa vám do 24 hodín.",

  // Stats
  "stats.1.value": "500+",
  "stats.1.label": "Spokojných klientov",
  "stats.2.value": "50 000+",
  "stats.2.label": "Tetovačiek ročne",
  "stats.3.value": "5 dní",
  "stats.3.label": "Priemerná výroba",
  "stats.4.value": "100%",
  "stats.4.label": "EU certifikácia",

  // Footer
  "footer.tagline": "Kompletné promo materiály na mieru pre firmy, eventy a akcie.",
  "footer.products": "Produkty",
  "footer.company": "Spoločnosť",
  "footer.contact": "Kontakt",
  "footer.copyright": "PartySkin B2B. Všetky práva vyhradené.",

  // Produkty page
  "page.products.tag": "Naša ponuka",
  "page.products.h1": "Produkty a ponuka",
  "page.products.sub": "Nie sme len tetovačky. Sme váš partner pre kompletné promo a brandingové materiály. Všetko na mieru, všetko pod jednou strechou.",

  // Jak to funguje page
  "page.how.tag": "Proces",
  "page.how.h1": "Ako to funguje",
  "page.how.sub": "Od prvého kontaktu po doručenie. Jednoduchý proces, rýchla výroba, žiadny stres.",

  // Reference page
  "page.ref.tag": "Portfólio",
  "page.ref.h1": "Referencie a realizácie",
  "page.ref.sub": "Stovky spokojných klientov. Tisíce vyrobených kusov. Pozrite si výber z našej práce.",

  // Kontakt page
  "page.contact.tag": "Kontakt",
  "page.contact.h1": "Poďme spolupracovať",
  "page.contact.sub": "Opíšte nám vašu akciu a ozveme sa do 24 hodín s ponukou na mieru.",
};

export const translations: Record<Lang, Record<string, string>> = { cs, en, sk };
