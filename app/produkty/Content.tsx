"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const UTM_B2C = "?utm_source=makethemoment&utm_medium=referral&utm_campaign=b2c";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function ProduktyPage() {
  const { lang } = useLanguage();

  // ─────────────────────────────────────────────────
  // Data (inside component for language switching)
  // ─────────────────────────────────────────────────
  const categories = [
    {
      id: "tetovacky",
      title:
        lang === "en"
          ? "Custom Temporary Tattoos"
          : lang === "sk"
          ? "Dočasné tetovačky na mieru"
          : "Dočasné tetovačky na míru",
      subtitle:
        lang === "en"
          ? "With your logo, illustration or custom design. Certified and safe for children and adults."
          : lang === "sk"
          ? "S vaším logom, ilustráciou alebo vlastným dizajnom. Certifikované a bezpečné pre deti aj dospelých."
          : "S vaším logem, ilustrací nebo vlastním designem. Certifikované a bezpečné pro děti i dospělé.",
      description:
        lang === "en"
          ? "Create original temporary tattoos for corporate events, festivals, weddings, hen/stag parties and kids' celebrations. We print from just a few pieces, with no minimum order and fast production tailored to your project."
          : lang === "sk"
          ? "Vytvorte originálne dočasné tetovačky pre firemné eventy, festivaly, svadby, rozlúčky aj detské oslavy. Tlačíme už od niekoľkých kusov, bez minimálneho množstva a s rýchlou výrobou na mieru vášmu projektu."
          : "Vytvořte originální dočasné tetovačky pro firemní eventy, festivaly, svatby, rozlučky se svobodou i dětské oslavy. Tiskneme již od několika kusů, bez minimálního množství a s rychlou výrobou na míru vašemu projektu.",
      price:
        lang === "en"
          ? "from €0.16 / pc"
          : lang === "sk"
          ? "od 4 Kč / ks"
          : "od 4 Kč / ks",
      minQty:
        lang === "en"
          ? "No minimum"
          : lang === "sk"
          ? "Bez minimálneho množstva"
          : "Bez minimálního množství",
      deliveryTime:
        lang === "en"
          ? "10–15 business days"
          : lang === "sk"
          ? "10–15 pracovných dní"
          : "10–15 pracovních dní",
      image: "/detske-tetovacky-archy.jpg",
      cta:
        lang === "en"
          ? "Request custom tattoos →"
          : lang === "sk"
          ? "Nezáväzne dopytovať tetovačky →"
          : "Nezávazně poptat tetovačky na míru →",
      features:
        lang === "en"
          ? [
              "Your design, logo or illustration",
              "Sheets A6, A5, A4 or die-cut shape",
              "Full-colour print including white ink",
              "Certified and safe materials",
              "Safe for children from age 3 and adults",
            ]
          : lang === "sk"
          ? [
              "Váš dizajn, logo alebo ilustrácia",
              "Archy A6, A5, A4 alebo tvarový výrez",
              "Plnofarebná tlač vrátane bielej farby",
              "Certifikované a bezpečné materiály",
              "Bezpečné pre deti od 3 rokov aj dospelých",
            ]
          : [
              "Váš design, logo nebo ilustrace",
              "Archy A6, A5, A4 i tvarový výřez",
              "Plnobarevný tisk včetně bílé barvy",
              "Certifikované a bezpečné materiály",
              "Bezpečné pro děti od 3 let i dospělé",
            ],
      useCases:
        lang === "en"
          ? ["Corporate events", "Festivals", "Weddings", "Hen/stag parties", "Kids parties", "Merch"]
          : lang === "sk"
          ? ["Firemné eventy", "Festivaly", "Svadby", "Rozlúčky", "Detské oslavy", "Merch"]
          : ["Firemní eventy", "Festivaly", "Svatby", "Rozlučky", "Dětské oslavy", "Merch"],
    },
    {
      id: "samolepky",
      title:
        lang === "en"
          ? "Custom Stickers"
          : lang === "sk"
          ? "Samolepky na mieru"
          : "Samolepky na míru",
      subtitle:
        lang === "en"
          ? "Custom shape, size, material"
          : lang === "sk"
          ? "Vlastný tvar, veľkosť, materiál"
          : "Vlastní tvar, velikost, materiál",
      description:
        lang === "en"
          ? "Die-cut stickers for branding, packaging and merchandise. Available in various materials, gloss, matte, transparent, waterproof. Production from 100 pcs."
          : lang === "sk"
          ? "Tvarové samolepky pre branding, packaging a merchandise. Dostupné v rôznych materiáloch, lesklé, matné, priehľadné, voděodolné. Výroba od 100 ks."
          : "Tvarové samolepky pro branding, packaging a merchandise. Dostupné v různých materiálech, lesklé, matné, průhledné, voděodolné. Výroba od 100 ks.",
      price:
        lang === "en"
          ? "from €0.16 / pc"
          : lang === "sk"
          ? "od 4 Kč / ks"
          : "od 4 Kč / ks",
      minQty:
        lang === "en"
          ? "Min. 100 pcs"
          : lang === "sk"
          ? "Min. 100 ks"
          : "Min. 100 ks",
      deliveryTime:
        lang === "en"
          ? "10–15 business days"
          : lang === "sk"
          ? "10–15 pracovných dní"
          : "10–15 pracovních dní",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      features:
        lang === "en"
          ? [
              "Custom shape (contour die-cut)",
              "Materials: vinyl, paper, transparent film",
              "Surface: gloss, matte, satin",
              "Waterproof and UV-resistant variants",
              "Print on sheets or individual pieces",
              "Suitable for outdoor and indoor use",
              "Option to add QR code",
              "Custom packaging",
            ]
          : lang === "sk"
          ? [
              "Vlastný tvar (konturový výrez)",
              "Materiály: vinyl, papier, priehľadná fólia",
              "Povrch: lesklý, matný, satén",
              "Voděodolné aj UV odolné varianty",
              "Tlač na archy alebo jednotlivé kusy",
              "Vhodné pre outdoor aj indoor použitie",
              "Možnosť pridania QR kódu",
              "Balenie na mieru",
            ]
          : [
              "Vlastní tvar (konturový výřez)",
              "Materiály: vinyl, papír, průhledná fólie",
              "Povrch: lesklý, matný, satén",
              "Voděodolné i UV odolné varianty",
              "Tisk na archy nebo jednotlivé kusy",
              "Vhodné pro outdoor i indoor použití",
              "Možnost přidání QR kódu",
              "Balení na míru",
            ],
      useCases:
        lang === "en"
          ? ["Packaging", "Branding", "Merch", "Labelling", "Gifts", "E-shops"]
          : lang === "sk"
          ? ["Packaging", "Branding", "Merch", "Labelling", "Darčeky", "E-shopy"]
          : ["Packaging", "Branding", "Merch", "Labelling", "Dárky", "E-shopy"],
    },
    {
      id: "pohlednice",
      title:
        lang === "en"
          ? "Custom Print, Postcards, Invitations, Cards"
          : lang === "sk"
          ? "Tlačoviny na mieru, pohľadnice, pozvánky, vizitky"
          : "Tiskoviny na míru, pohlednice, pozvánky, vizitky",
      subtitle:
        lang === "en"
          ? "Personalised print with your own motif"
          : lang === "sk"
          ? "Personalizovaná tlač s vlastným motívom"
          : "Personalizovaný tisk s vlastním motivem",
      description:
        lang === "en"
          ? "Postcards, greeting cards, invitations, place cards and business cards with your design, for corporate promo, gift campaigns or personalised communication. Professional paper, vivid colours, we print from a single piece."
          : lang === "sk"
          ? "Pohľadnice, priania, pozvánky, menovky aj vizitky s vaším dizajnom, pre firemné promo, darčekové akcie alebo personalizovanú komunikáciu. Profesionálny papier, živé farby, tlačíme už od jedného kusu."
          : "Pohlednice, přání, pozvánky, jmenovky i vizitky s vaším designem, pro firemní promo, dárkové akce nebo personalizovanou komunikaci. Profesionální papír, živé barvy, tiskneme už od jednoho kusu.",
      price:
        lang === "en"
          ? "from €0.48 / pc"
          : lang === "sk"
          ? "od 12 Kč / ks"
          : "od 12 Kč / ks",
      minQty:
        lang === "en"
          ? "Min. 50 pcs"
          : lang === "sk"
          ? "Bez minima"
          : "Bez minima",
      deliveryTime:
        lang === "en"
          ? "10–15 business days"
          : lang === "sk"
          ? "10–15 pracovných dní"
          : "10–15 pracovních dní",
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
      features:
        lang === "en"
          ? [
              "Formats: A6, A5, square (10×10 cm)",
              "Single-sided or double-sided print",
              "Paper 300–400 g/m² coated or recycled",
              "Surface finish: gloss, matte, soft-touch laminate",
              "Personalisation of each card (name, text)",
              "Envelopes included in delivery",
              "Option to add tattoo or sticker to the package",
              "Packaging in sets or individually",
            ]
          : lang === "sk"
          ? [
              "Formáty: A6, A5, štvorcové (10×10 cm)",
              "Jednostranná alebo obojstranná tlač",
              "Papier 300–400 g/m² kriedový alebo recyklovaný",
              "Povrchová úprava: lesklý, matný, soft-touch laminát",
              "Personalizácia každej pohľadnice (meno, text)",
              "Obálky súčasťou dodávky",
              "Možnosť pridania tetovačky alebo samolepky do balíčka",
              "Balenie v sadách alebo jednotlivo",
            ]
          : [
              "Formáty: A6, A5, čtvercové (10×10 cm)",
              "Jednostranný nebo oboustranný tisk",
              "Papír 300–400 g/m² krídový nebo recyklovaný",
              "Povrchová úprava: lesklý, matný, soft-touch laminát",
              "Personalizace každé pohlednice (jméno, text)",
              "Obálky součástí dodávky",
              "Možnost přidání tetovačky nebo samolepky do balíčku",
              "Balení v sadách nebo jednotlivě",
            ],
      useCases:
        lang === "en"
          ? ["Christmas cards", "Invitations", "Promo campaigns", "Gifts", "Corporate gifts", "Weddings"]
          : lang === "sk"
          ? ["Vianočné priania", "Pozvánky", "Promo kampane", "Darčeky", "Firemné darčeky", "Svadby"]
          : ["Vánoční přání", "Pozvánky", "Promo kampaně", "Dárky", "Firemní dárky", "Svatby"],
    },
    {
      id: "kompletni",
      title:
        lang === "en"
          ? "Complete Turnkey Solution"
          : lang === "sk"
          ? "Kompletné riešenie na kľúč"
          : "Kompletní řešení na klíč",
      subtitle:
        lang === "en"
          ? "Packages for corporate events, team buildings, weddings and festivals"
          : lang === "sk"
          ? "Balíčky pre firemné eventy, teambuildingy, svadby a festivaly"
          : "Balíčky pro firemní eventy, teambuildingy, svatby a festivaly",
      description:
        lang === "en"
          ? "Stop juggling multiple suppliers. Get a complete promo package from us, tattoos, stickers and postcards, all with a unified design, delivered on time."
          : lang === "sk"
          ? "Neriešte logistiku s viacerými dodávateľmi. U nás dostanete kompletný promo balíček, tetovačky, samolepky aj pohľadnice, všetko s jednotným dizajnom, v stanovenom termíne."
          : "Neřešte logistiku s více dodavateli. U nás dostanete kompletní promo balíček, tetovačky, samolepky i pohlednice, vše s jednotným designem, ve stanoveném termínu.",
      price:
        lang === "en"
          ? "Individual quote"
          : lang === "sk"
          ? "Individuálna ponuka"
          : "Individuální nabídka",
      minQty:
        lang === "en"
          ? "Based on event scope"
          : lang === "sk"
          ? "Podľa rozsahu akcie"
          : "Dle rozsahu akce",
      deliveryTime:
        lang === "en"
          ? "Based on project scope"
          : lang === "sk"
          ? "Podľa rozsahu projektu"
          : "Dle rozsahu projektu",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      features:
        lang === "en"
          ? [
              "One supplier for everything, no coordination issues",
              "Unified design across all products",
              "Full graphic brief processing from A to Z",
              "Dedicated project manager for your order",
              "Flexible packages based on budget and deadline",
              "Delivery directly to the event venue",
              "Express production for urgent cases",
              "Referral discounts for repeat orders",
            ]
          : lang === "sk"
          ? [
              "Jeden dodávateľ pre všetko, žiadne koordinačné problémy",
              "Jednotný dizajn naprieč všetkými produktmi",
              "Grafické spracovanie briefu od A do Z",
              "Projektový manažér pre vašu zákazku",
              "Flexibilné balíčky podľa rozpočtu a termínu",
              "Doručenie priamo na miesto akcie",
              "Express výroba v urgentných prípadoch",
              "Referenčné zľavy pre opakované zákazky",
            ]
          : [
              "Jeden dodavatel pro vše, žádné koordinační problémy",
              "Jednotný design napříč všemi produkty",
              "Grafické zpracování briefu od A do Z",
              "Projektový manažer pro vaši zakázku",
              "Flexibilní balíčky dle rozpočtu a termínu",
              "Doručení přímo na místo akce",
              "Express výroba v urgentních případech",
              "Referenční slevy pro opakované zakázky",
            ],
      useCases:
        lang === "en"
          ? ["Corporate events", "Team buildings", "Conferences", "Weddings", "Festivals", "Trade fairs"]
          : lang === "sk"
          ? ["Firemné eventy", "Teambuildingy", "Konferencie", "Svadby", "Festivaly", "Veľtrhy"]
          : ["Firemní eventy", "Teambuildingy", "Konference", "Svatby", "Festivaly", "Veletrhy"],
    },
  ];

  const segments: {
    id: string;
    odkaz?: string;
    icon: typeof Building2;
    title: string;
    intro?: string;
    cta?: string;
    extra?: { text: string; label: string; href: string };
    products: string[];
    image: string;
  }[] = [
    {
      id: "firmy",
      odkaz: "/tetovacky-na-firemni-event",
      icon: Building2,
      title:
        lang === "en"
          ? "Companies & brands"
          : lang === "sk"
          ? "Firmy a značky"
          : "Firmy a značky",
      intro:
        lang === "en"
          ? "Want people to take your brand home with them? Tell us what you're planning, a conference, a trade fair, a team building day or a product launch, and we'll suggest what makes sense. No minimum order, even for a small event."
          : lang === "sk"
          ? "Chcete, aby si ľudia vašu značku odniesli domov? Povedzte nám, čo chystáte, konferenciu, veľtrh, teambuilding alebo uvedenie produktu, a my navrhneme, čo dáva zmysel. Bez minimálneho odberu, aj na malú akciu."
          : "Chcete, aby si lidi vaši značku odnesli domů? Řekněte nám, co chystáte, konferenci, veletrh, teambuilding nebo uvedení produktu, a my navrhneme, co dává smysl. Bez minimálního odběru, i na malý event.",
      cta:
        lang === "en" ? "Let's talk it through" : lang === "sk" ? "Poďme to prebrať" : "Pojďme to probrat",
      products:
        lang === "en"
          ? [
              "Logo tattoos, the fastest way onto people's skin",
              "Packaging stickers, let the parcel speak before it's opened",
              "Postcards for clients, a thank-you that arrives by post",
            ]
          : lang === "sk"
          ? [
              "Tetovačky s logom, najrýchlejšia cesta ľuďom na kožu",
              "Samolepky na packaging, nech balíček niečo povie ešte pred otvorením",
              "Pohľadnice a priania pre klientov, poďakovanie, ktoré príde poštou",
            ]
          : [
              "Tetovačky s logem, nejrychlejší cesta lidem na kůži",
              "Samolepky na packaging, ať balíček něco řekne ještě před otevřením",
              "Pohlednice a přání pro klienty, poděkování, které přijde poštou",
            ],
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    },
    {
      id: "svatby",
      icon: Heart,
      title:
        lang === "en"
          ? "Weddings & celebrations"
          : lang === "sk"
          ? "Svadby a oslavy"
          : "Svatby a oslavy",
      intro:
        lang === "en"
          ? "A wedding, a party, a baby shower or a hen do? Tattoos for guests (kids love them most), name cards, postcards and stickers for decorations, all in one style, with your names on them."
          : lang === "sk"
          ? "Svadba, oslava, baby shower alebo rozlúčka? Tetovačky pre hostí (deti ich milujú najviac), menovky, pohľadnice aj samolepky na dekorácie, všetko v jednom štýle a s menami."
          : "Svatba, oslava, baby shower nebo rozlučka? Tetovačky pro hosty (děti je milují nejvíc), jmenovky, pohlednice i samolepky na dekorace, všechno v jednom stylu a se jmény.",
      cta:
        lang === "en"
          ? "Request a custom solution"
          : lang === "sk"
          ? "Dopytovať riešenie na mieru"
          : "Poptat řešení na míru",
      extra: {
        text:
          lang === "en"
            ? "Want ready-made tattoos with no waiting?"
            : lang === "sk"
            ? "Chcete hotové tetovačky hneď a bez čakania?"
            : "Chcete hotové tetovačky hned a bez čekání?",
        label:
          lang === "en"
            ? "Visit our shop partyskin.cz"
            : lang === "sk"
            ? "Pozrite e-shop partyskin.cz"
            : "Mrkněte na e-shop partyskin.cz",
        href:
          lang === "sk"
            ? `https://www.partyskin.sk${UTM_B2C}`
            : `https://www.partyskin.cz/docasne-svatebni-tetovani/${UTM_B2C}`,
      },
      products:
        lang === "en"
          ? [
              "Tattoos for guests, with your motif, date or initials",
              "Postcards and name cards, matched to your invitations",
              "Stickers for decorations, bottles, gifts, welcome bags",
            ]
          : lang === "sk"
          ? [
              "Tetovačky pre hostí, s vaším motívom, dátumom alebo iniciálami",
              "Pohľadnice a menovky, zladené so svadobným oznámením",
              "Samolepky na dekorácie, na fľaše, darčeky, welcome bag",
            ]
          : [
              "Tetovačky pro hosty, s vaším motivem, datem nebo iniciálami",
              "Pohlednice a jmenovky, sladěné se svatebním oznámením",
              "Samolepky na dekorace, na lahve, dárky, welcome bag",
            ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    },
    {
      id: "festivaly",
      odkaz: "/tetovacky-na-festival",
      icon: Music,
      title:
        lang === "en"
          ? "Festivals & events"
          : lang === "sk"
          ? "Festivaly a akcie"
          : "Festivaly a akce",
      products:
        lang === "en"
          ? ["Festival merch tattoos", "Branding stickers", "Postcards for fans"]
          : lang === "sk"
          ? ["Festival merch tetovačky", "Brandingové samolepky", "Pohľadnice pre fanúšikov"]
          : ["Festival merch tetovačky", "Brandingové samolepky", "Pohlednice pro fanoušky"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    },
    {
      id: "skoly",
      odkaz: "/tetovacky-pro-skoly",
      icon: GraduationCap,
      title:
        lang === "en"
          ? "Schools & children"
          : lang === "sk"
          ? "Školy a deti"
          : "Školy a děti",
      extra: {
        text:
          lang === "en"
            ? "Just a few sheets for one class?"
            : lang === "sk"
            ? "Len pár archov pre jednu triedu?"
            : "Jen pár archů pro jednu třídu?",
        label:
          lang === "en"
            ? "Buy children's tattoos in the e-shop"
            : lang === "sk"
            ? "Kúpte detské tetovačky v e-shope"
            : "Kupte dětské tetovačky v e-shopu",
        href:
          lang === "sk"
            ? `https://www.partyskin.sk${UTM_B2C}`
            : `https://www.partyskin.cz/docasne-tetovani-pro-deti/${UTM_B2C}`,
      },
      products:
        lang === "en"
          ? ["Certified children's tattoos", "Stickers for rewards", "Postcards from trips"]
          : lang === "sk"
          ? ["Detské certifikované tetovačky", "Samolepky pre odmeny", "Pohľadnice z výletov"]
          : ["Dětské certifikované tetovačky", "Samolepky pro odměny", "Pohlednice z výletů"],
      image: "https://images.unsplash.com/photo-1594708767771-a5d9e239b7f9?w=600&q=80",
    },
    {
      id: "obchody",
      icon: Store,
      title:
        lang === "en"
          ? "Wholesale"
          : lang === "sk"
          ? "Veľkoobchod"
          : "Velkoobchod",
      products:
        lang === "en"
          ? ["Standard collections for resale", "Seasonal editions", "Private label production"]
          : lang === "sk"
          ? ["Štandardné kolekcie na predaj", "Sezónne edície", "Private label výroba"]
          : ["Standardní kolekce k prodeji", "Sezónní edice", "Private label výroba"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">
              {lang === "en" ? "Our offer" : lang === "sk" ? "Naša ponuka" : "Naše nabídka"}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              {lang === "en"
                ? "Products & offer"
                : lang === "sk"
                ? "Produkty a ponuka"
                : "Produkty a nabídka"}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {lang === "en"
                ? "We're not just tattoos. Your partner for complete promo and branding materials. Everything custom, under one roof."
                : lang === "sk"
                ? "Nie sme len tetovačky. Váš partner pre kompletné promo a brandingové materiály. Všetko na mieru, pod jednou strechou."
                : "Nejsme jen tetovačky. Jsme váš partner pro kompletní promo a brandingové materiály. Vše na míru, vše pod jednou střechou."}
            </p>
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-all"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Products */}
      {categories.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-pad ${catIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-pad">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                catIndex % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <FadeUp delay={0.1} className={catIndex % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeUp>

              {/* Content */}
              <FadeUp delay={0.2} className={catIndex % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-2">
                  {cat.title}
                </h2>
                <p className="text-brand-primary font-medium mb-4">{cat.subtitle}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{cat.description}</p>

                {/* Pricing & info */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {lang === "en" ? "Price from" : lang === "sk" ? "Cena od" : "Cena od"}
                    </p>
                    <p className="font-bold text-brand-secondary">{cat.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {lang === "en"
                        ? "Minimum quantity"
                        : lang === "sk"
                        ? "Minimálne množstvo"
                        : "Minimální množství"}
                    </p>
                    <p className="font-bold text-brand-secondary">{cat.minQty}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      {lang === "en" ? "Production" : lang === "sk" ? "Výroba" : "Výroba"}
                    </p>
                    <p className="font-bold text-brand-secondary">{cat.deliveryTime}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {cat.features.slice(0, 5).map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Use cases */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {cat.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                    >
                      {uc}
                    </span>
                  ))}
                </div>

                <Link href="/kontakt" className="btn-primary gap-2">
                  {cat.cta
                    ? cat.cta
                    : lang === "en"
                    ? "Request this product"
                    : lang === "sk"
                    ? "Dopytovať tento produkt"
                    : `Poptat ${cat.title.toLowerCase()}`}
                  <ArrowRight size={16} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Table & B2C Links */}
      <section className="section-pad bg-brand-light" id="cenik">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <span className="tag mb-4">
              {lang === "en"
                ? "Indicative price list · temporary tattoos"
                : lang === "sk"
                ? "Orientačný cenník · dočasné tetovačky"
                : "Orientační ceník · dočasné tetovačky"}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-3">
              {lang === "en"
                ? "Indicative prices for temporary tattoos"
                : lang === "sk"
                ? "Orientačné ceny dočasných tetovačiek"
                : "Orientační ceny dočasných tetováček"}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {lang === "en"
                ? "The final price depends on format, quantity and packaging. The table below is indicative, we will always prepare an exact calculation for you individually, free of charge and without obligation."
                : lang === "sk"
                ? "Konečná cena závisí od formátu, množstva a balenia. Tabuľka nižšie je orientačná, presnú kalkuláciu vám pripravíme vždy individuálne, zdarma a bez záväzkov."
                : "Konečná cena závisí na formátu, množství a balení. Tabulka níže je orientační, přesnou kalkulaci vám připravíme vždy individuálně, zdarma a bez závazků."}
            </p>
          </FadeUp>

          <FadeUp delay={0.1} className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-semibold text-brand-secondary">
                    {lang === "en" ? "Format" : lang === "sk" ? "Formát" : "Formát"}
                  </th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">1–5 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">6–19 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">20–49 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">50–99 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">100–499 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">500–999 ks</th>
                  <th className="px-3 py-4 font-semibold text-brand-secondary text-center whitespace-nowrap">1 000+ ks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    format:
                      lang === "en"
                        ? "A7 (smallest)"
                        : lang === "sk"
                        ? "A7 (najmenší)"
                        : "A7 (nejmenší)",
                    prices: ["35 Kč", "27 Kč", "22 Kč", "18 Kč", "15 Kč", "13 Kč", "11 Kč"],
                  },
                  { format: "A6", prices: ["55 Kč", "45 Kč", "35 Kč", "29 Kč", "25 Kč", "22 Kč", "19 Kč"] },
                  { format: "A5", prices: ["95 Kč", "75 Kč", "59 Kč", "45 Kč", "39 Kč", "35 Kč", "29 Kč"] },
                  {
                    format:
                      lang === "en"
                        ? "A4 (largest)"
                        : lang === "sk"
                        ? "A4 (najväčší)"
                        : "A4 (největší)",
                    prices: ["179 Kč", "149 Kč", "89 Kč", "95 Kč", "79 Kč", "69 Kč", "59 Kč"],
                  },
                ].map((row, i) => (
                  <tr key={row.format} className={`border-b border-gray-50 last:border-0 ${i % 2 === 1 ? "bg-gray-50/60" : ""}`}>
                    <td className="px-3 py-4 font-medium text-brand-secondary whitespace-nowrap">{row.format}</td>
                    {row.prices.map((price, j) => (
                      <td key={j} className="px-3 py-4 text-center text-gray-600 whitespace-nowrap">{price}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeUp>

          <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 px-1">
            <p className="text-sm text-gray-400">
              {lang === "en" ? (
                <>
                  Prices are <strong className="text-gray-500">VAT inclusive</strong>, per piece, excluding packaging.
                  Packaging, reverse printing and express production are charged separately.
                </>
              ) : lang === "sk" ? (
                <>
                  Ceny sú <strong className="text-gray-500">vrátane DPH</strong>, za 1 ks, bez balenia.
                  Balenie, tlač na rub a express výroba sa účtujú zvlášť.
                </>
              ) : (
                <>
                  Ceny jsou <strong className="text-gray-500">včetně DPH</strong>, za 1 ks, bez balení.
                  Balení, tisk na rub a express výroba se účtují zvlášť.
                </>
              )}
            </p>
            <a
              href="/PartySkin_B2B_Cenik.pdf"
              className="text-sm font-semibold text-brand-primary flex items-center gap-1.5 hover:gap-2.5 transition-all whitespace-nowrap shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "en"
                ? "Download full price list (PDF)"
                : lang === "sk"
                ? "Stiahnuť plný cenník (PDF)"
                : "Stáhnout plný ceník (PDF)"}{" "}
              <ArrowRight size={14} />
            </a>
          </FadeUp>

          {/* B2C eshop links */}
          <FadeUp delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">
                {lang === "en"
                  ? "Also for private customers"
                  : lang === "sk"
                  ? "Aj pre súkromných zákazníkov"
                  : "Také pro soukromé zákazníky"}
              </p>
              <h3 className="text-xl font-display font-bold text-brand-secondary mb-3">
                {lang === "en"
                  ? "Planning a party, not a campaign?"
                  : lang === "sk"
                  ? "Chystáte oslavu, nie kampaň?"
                  : "Chystáte oslavu, ne kampaň?"}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6 max-w-2xl">
                {lang === "en"
                  ? "For a wedding, a kids' party or a hen do you don't need a quote at all. Pick a ready-made design in our e-shop or upload your own photo, order straight away, even a single sheet, and it's with you in 2–3 days."
                  : lang === "sk"
                  ? "Na svadbu, detskú párty alebo rozlúčku nemusíte nič dopytovať. V našom e-shope si vyberiete z hotových motívov alebo nahráte vlastnú fotku, objednáte hneď, pokojne jediný arch, a do 2–3 dní to máte doma."
                  : "Na svatbu, dětskou párty nebo rozlučku nemusíte nic poptávat. V našem e-shopu si vyberete z hotových motivů nebo nahrajete vlastní fotku, objednáte hned, klidně jediný arch, a do 2–3 dnů to máte doma."}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={`https://www.partyskin.cz${UTM_B2C}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  {lang === "en"
                    ? "partyskin.cz, Czech e-shop"
                    : lang === "sk"
                    ? "partyskin.cz, český e-shop"
                    : "partyskin.cz, český e-shop"}{" "}
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`https://www.partyskin.sk${UTM_B2C}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  {lang === "en"
                    ? "partyskin.sk, Slovak e-shop"
                    : lang === "sk"
                    ? "partyskin.sk, slovenský e-shop"
                    : "partyskin.sk, slovenský e-shop"}{" "}
                  <ArrowRight size={16} />
                </a>
              </div>
              </div>

              <a
                href={`https://www.partyskin.cz${UTM_B2C}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src="/eshop-nahled.jpg"
                  alt="Náhled e-shopu partyskin.cz s kategoriemi tetovaček"
                  width={1120}
                  height={682}
                  className="w-full h-auto"
                />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Segments section */}
      <section className="section-pad bg-brand-secondary">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag bg-white/10 text-white border border-white/20 mb-4">
              {lang === "en" ? "Who it's for" : lang === "sk" ? "Pre koho" : "Pro koho"}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 mb-4">
              {lang === "en"
                ? "Solutions for every segment"
                : lang === "sk"
                ? "Riešenia pre každý segment"
                : "Řešení pro každý segment"}
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              {lang === "en"
                ? "Every customer group has different needs. We know how to meet them."
                : lang === "sk"
                ? "Každá skupina zákazníkov má iné potreby. Vieme ich splniť."
                : "Každá skupina zákazníků má jiné potřeby. Umíme je splnit."}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((seg, i) => (
              <FadeUp key={seg.id} delay={i * 0.08}>
                <div id={seg.id} className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                      <seg.icon size={20} className="text-brand-primary" />
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">{seg.title}</h3>
                  </div>
                  {seg.intro && (
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{seg.intro}</p>
                  )}
                  <ul className="space-y-2 mb-5">
                    {seg.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-white/60 text-sm">
                        <ChevronRight size={14} className="text-brand-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={seg.odkaz ?? "/kontakt"}
                    className="text-sm font-semibold text-brand-primary hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {seg.cta ??
                      (lang === "en"
                        ? "Request a solution"
                        : lang === "sk"
                        ? "Dopytovať riešenie"
                        : "Poptat řešení")}{" "}
                    <ArrowRight size={14} />
                  </Link>
                  {seg.extra && (
                    <p className="mt-4 pt-4 border-t border-white/10 text-white/50 text-sm leading-relaxed">
                      {seg.extra.text}{" "}
                      <a
                        href={seg.extra.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-primary hover:text-white transition-colors"
                      >
                        {seg.extra.label} →
                      </a>
                    </p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-pad text-center">
          <FadeUp>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mb-4">
              {lang === "en"
                ? "Didn't find what you were looking for?"
                : lang === "sk"
                ? "Nenašli ste, čo hľadáte?"
                : "Nenašli jste, co hledáte?"}
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              {lang === "en"
                ? "Contact us and we will find a custom solution together. We are happy to advise."
                : lang === "sk"
                ? "Kontaktujte nás a spoločne vymyslíme riešenie na mieru. Radi poradíme."
                : "Kontaktujte nás a společně vymyslíme řešení na míru. Rádi poradíme."}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/kontakt" className="btn-primary">
                {lang === "en" ? "Write to us" : lang === "sk" ? "Napíšte nám" : "Napište nám"}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/jak-to-funguje" className="btn-outline">
                {lang === "en"
                  ? "How does it work?"
                  : lang === "sk"
                  ? "Ako to funguje?"
                  : "Jak to funguje?"}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
