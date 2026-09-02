"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import {
  ArrowRight,
  MessageSquare,
  Palette,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  RefreshCw,
  FileText,
} from "lucide-react";

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
// FAQ Item
// ─────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-brand-secondary pr-4">{q}</span>
        {open ? (
          <ChevronUp size={20} className="text-brand-primary flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function JakToFunguePage() {
  const { t, lang } = useLanguage();

  // ─── Data arrays (inside component to access lang) ───────────────────────
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title:
        lang === "en"
          ? "Inquiry & consultation"
          : lang === "sk"
          ? "Dopyt a konzultácia"
          : "Poptávka a konzultace",
      duration:
        lang === "en" ? "Day 1" : lang === "sk" ? "Deň 1" : "Den 1",
      description:
        lang === "en"
          ? "Fill in the online form or send us an email. Tell us the product type, approximate quantity and event date. No finished design needed — we can work from a sketch on paper."
          : lang === "sk"
          ? "Vyplňte online formulár alebo nám napíšte email. Povedzte nám typ produktu, približné množstvo a termín akcie. Nepotrebujete hotový dizajn — poradíme si aj s nápadom na papieri."
          : "Vyplňte online formulář nebo nám napište email. Sdělte nám typ produktu, přibližné množství a termín akce. Není potřeba mít hotový design — poradíme si i s nápadem na papíru.",
      details:
        lang === "en"
          ? [
              "Form takes 2 minutes to complete",
              "We reply within 24 hours (usually sooner)",
              "Free consultation by phone or video call",
              "We help you choose the right product and format",
            ]
          : lang === "sk"
          ? [
              "Formulár vyplníte za 2 minúty",
              "Odpovedáme do 24 hodín (zvyčajne skôr)",
              "Bezplatná konzultácia cez telefón alebo videohovor",
              "Pomôžeme s výberom produktu aj formátu",
            ]
          : [
              "Formulář vyplníte za 2 minuty",
              "Odpovídáme do 24 hodin (obvykle dříve)",
              "Bezplatná konzultace přes telefon nebo video hovor",
              "Pomůžeme s výběrem produktu i formátu",
            ],
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      color: "from-blue-500/10 to-blue-600/5",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      numColor: "text-blue-200",
    },
    {
      num: "02",
      icon: Palette,
      title:
        lang === "en"
          ? "Graphic design"
          : lang === "sk"
          ? "Grafický návrh"
          : "Grafický návrh",
      duration:
        lang === "en"
          ? "Day 2–3"
          : lang === "sk"
          ? "Deň 2–3"
          : "Den 2–3",
      description:
        lang === "en"
          ? "Our designer processes your design or brief and prepares a visualisation for approval. Includes one round of revisions for free. We work with your files or design from scratch."
          : lang === "sk"
          ? "Náš grafik spracuje váš dizajn alebo brief a pripraví vizualizáciu na schválenie. Zahŕňa jedno kolo revízií zdarma. Pracujeme s vašimi súbormi alebo navrhujeme od základu."
          : "Náš grafik zpracuje váš design nebo brief a připraví vizualizaci pro schválení. Zahrnuje jedno kolo revizí zdarma. Pracujeme s vašimi soubory nebo navrhujeme od základu.",
      details:
        lang === "en"
          ? [
              "Graphic processing within 24 hours of briefing",
              "Visualisation on the real product",
              "1 free revision round included",
              "We accept AI, Illustrator, Photoshop, PDF",
            ]
          : lang === "sk"
          ? [
              "Grafické spracovanie do 24 hodín od briefu",
              "Vizualizácia na reálnom produkte",
              "1 kolo revízií zdarma v cene",
              "Prijímame AI, Illustrator, Photoshop, PDF",
            ]
          : [
              "Grafické zpracování do 24 hodin od briefu",
              "Vizualizace na reálném produktu",
              "1 kolo revizí zdarma v ceně",
              "Přijímáme AI, Illustrator, Photoshop, PDF",
            ],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      color: "from-purple-500/10 to-purple-600/5",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      numColor: "text-purple-200",
    },
    {
      num: "03",
      icon: CheckCircle2,
      title:
        lang === "en"
          ? "Approval & payment"
          : lang === "sk"
          ? "Schválenie a platba"
          : "Schválení a platba",
      duration:
        lang === "en"
          ? "Day 3–4"
          : lang === "sk"
          ? "Deň 3–4"
          : "Den 3–4",
      description:
        lang === "en"
          ? "Approve the visualisation online — one click. After approval we issue an invoice or accept a deposit. Production starts immediately after payment confirmation."
          : lang === "sk"
          ? "Vizualizáciu schválite online — jedným kliknutím. Po schválení vystavíme faktúru alebo prijmeme zálohu. Výroba sa spúšťa okamžite po potvrdení platby."
          : "Vizualizaci schválíte online — jedním klikem. Po schválení vystavíme fakturu nebo přijmeme zálohu. Výroba se spouští okamžitě po potvrzení platby.",
      details:
        lang === "en"
          ? [
              "Online approval — no printed forms",
              "Payment by bank transfer or card",
              "Invoice within 1 business day",
              "Production starts immediately after payment",
            ]
          : lang === "sk"
          ? [
              "Schválenie online — žiadne tlačené formuláre",
              "Platba prevodom alebo kartou",
              "Faktúra do 1 pracovného dňa",
              "Výroba štartuje ihneď po platbe",
            ]
          : [
              "Schválení online — žádné tištěné formuláře",
              "Platba převodem nebo kartou",
              "Faktura do 1 pracovního dne",
              "Výroba startuje ihned po platbě",
            ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      color: "from-green-500/10 to-green-600/5",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      numColor: "text-green-200",
    },
    {
      num: "04",
      icon: Package,
      title:
        lang === "en"
          ? "Production"
          : lang === "sk"
          ? "Výroba"
          : "Výroba",
      duration:
        lang === "en"
          ? "Day 3–6"
          : lang === "sk"
          ? "Deň 3–6"
          : "Den 3–6",
      description:
        lang === "en"
          ? "Production takes place in a certified facility. We keep you updated on order status throughout. Quality check before every dispatch."
          : lang === "sk"
          ? "Výroba prebieha v certifikovanom závode. Priebežne vás informujeme o stave zákazky. Kontrola kvality pred každou expedíciou."
          : "Výroba probíhá v certifikovaném závodě. Průběžně vás informujeme o stavu zakázky. Kontrola kvality před každou expedicí.",
      details:
        lang === "en"
          ? [
              "Certified production — EU standards",
              "Ongoing production status updates",
              "100% quality control before dispatch",
              "Packaging according to your requirements",
            ]
          : lang === "sk"
          ? [
              "Certifikovaná výroba — EU normy",
              "Priebežný update o stave výroby",
              "100% kontrola kvality pred expedíciou",
              "Balenie podľa vašich požiadaviek",
            ]
          : [
              "Certifikovaná výroba — EU normy",
              "Průběžný update o stavu výroby",
              "100% kontrola kvality před expedicí",
              "Balení dle vašich požadavků",
            ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      color: "from-orange-500/10 to-orange-600/5",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      numColor: "text-orange-200",
    },
    {
      num: "05",
      icon: Truck,
      title:
        lang === "en"
          ? "Delivery"
          : lang === "sk"
          ? "Doručenie"
          : "Dodání",
      duration:
        lang === "en"
          ? "Day 5–7"
          : lang === "sk"
          ? "Deň 5–7"
          : "Den 5–7",
      description:
        lang === "en"
          ? "We deliver directly to you or to the event venue. Standard shipping via PPL or DPD, freight forwarding for larger shipments. Tracking number sent automatically."
          : lang === "sk"
          ? "Zásilku doručíme priamo k vám alebo na miesto akcie. Štandardná doprava PPL alebo DPD, pre väčšie zásilky spedícia. Tracking číslo dostanete automaticky."
          : "Zásilku doručíme přímo k vám nebo na místo akce. Standartní doprava PPL nebo DPD, pro větší zásilky spedice. Tracking číslo dostanete automaticky.",
      details:
        lang === "en"
          ? [
              "Delivery via PPL, DPD or freight forwarder",
              "Tracking number sent by email",
              "Delivery to address or event venue",
              "Express delivery available for a surcharge",
            ]
          : lang === "sk"
          ? [
              "Doručenie PPL, DPD alebo spedíciou",
              "Tracking číslo zasielam emailom",
              "Doručenie na adresu alebo na miesto akcie",
              "Express doručenie možné za príplatok",
            ]
          : [
              "Doručení PPL, DPD nebo spedicí",
              "Tracking číslo zasílám emailem",
              "Doručení na adresu nebo na místo akce",
              "Express dodání možné za příplatek",
            ],
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
      color: "from-brand-primary/10 to-brand-accent/5",
      iconBg: "bg-brand-light",
      iconColor: "text-brand-primary",
      numColor: "text-brand-primary/20",
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      title:
        lang === "en"
          ? "Delivery deadline"
          : lang === "sk"
          ? "Dodací termín"
          : "Dodací termín",
      desc:
        lang === "en"
          ? "We guarantee the deadline agreed at the time of order. Running late? We'll let you know in advance and offer a solution."
          : lang === "sk"
          ? "Garantujeme termín dohodnutý pri objednávke. Nestíhame? Oznámime to vopred a ponúkneme riešenie."
          : "Garantujeme termín dohodnutý při objednávce. Nestíháme? Oznámíme to v předstihu a nabídneme řešení.",
    },
    {
      icon: Shield,
      title:
        lang === "en"
          ? "Quality or replacement"
          : lang === "sk"
          ? "Kvalita alebo výmena"
          : "Kvalita nebo výměna",
      desc:
        lang === "en"
          ? "If the product does not match the approved sample, we will replace the entire order free of charge."
          : lang === "sk"
          ? "Ak produkt nezodpovedá schválenému vzoru, nahradíme celú zákazku zdarma."
          : "Pokud produkt neodpovídá schválenému vzoru, nahradíme celou zakázku zdarma.",
    },
    {
      icon: RefreshCw,
      title:
        lang === "en"
          ? "Free revisions"
          : lang === "sk"
          ? "Bezplatné revízie"
          : "Bezplatné revize",
      desc:
        lang === "en"
          ? "One round of graphic revisions is always included in the price. Each subsequent design change is charged separately."
          : lang === "sk"
          ? "Jedno kolo revízií grafiky je vždy v cene. Každá ďalšia zmena dizajnu sa počíta zvlášť."
          : "Jedno kolo revizí grafiky je vždy v ceně. Každá změna designu se počítá zvlášť.",
    },
    {
      icon: FileText,
      title:
        lang === "en"
          ? "Transparent pricing"
          : lang === "sk"
          ? "Transparentná cena"
          : "Transparentní cena",
      desc:
        lang === "en"
          ? "No hidden fees. The price in the quote is final, unless you change the brief."
          : lang === "sk"
          ? "Žiadne skryté poplatky. Cena v ponuke je konečná, pokiaľ nezmeníte zadanie."
          : "Žádné skryté poplatky. Cena v nabídce je konečná, pokud nezměníte zadání.",
    },
    {
      icon: Zap,
      title:
        lang === "en"
          ? "Express production"
          : lang === "sk"
          ? "Express výroba"
          : "Express výroba",
      desc:
        lang === "en"
          ? "Need it within 48 hours? We offer express production for a surcharge — availability confirmed individually."
          : lang === "sk"
          ? "Potrebujete do 48 hodín? Ponúkame express výrobu za príplatok — dostupnosť overujeme individuálne."
          : "Potřebujete do 48 hodin? Nabízíme express výrobu za příplatek — dostupnost ověřujeme individuálně.",
    },
  ];

  const faqs = [
    {
      q:
        lang === "en"
          ? "What is the minimum order quantity?"
          : lang === "sk"
          ? "Aké je minimálne množstvo kusov?"
          : "Jaký je minimální počet kusů?",
      a:
        lang === "en"
          ? "Temporary tattoos have no minimum quantity — even 1 piece can be ordered. For postcards the minimum is 50 pcs, for stickers 100 pcs. For complete packages the minimum is set individually. If you only need a few pieces for yourself, you don't have to wait for a quote — order directly in our consumer e-shop partyskin.cz."
          : lang === "sk"
          ? "Dočasné tetovačky nemajú žiadne minimálne množstvo — objednať možno aj 1 kus. Pri pohľadniciach je minimum 50 ks, pri samolepkách 100 ks. Pre kompletné balíčky sa minimum stanovuje individuálne. Ak potrebujete len pár kusov pre seba, nemusíte čakať na ponuku — nakúpite rovno v našom e-shope partyskin.sk."
          : "Dočasné tetovačky nemají žádné minimální množství — objednat lze i 1 kus. U pohlednic je minimum 50 ks, u samolepek 100 ks. Pro kompletní balíčky se minimum stanovuje individuálně. Pokud potřebujete jen pár kusů pro sebe, nemusíte čekat na nabídku — nakoupíte rovnou v našem e-shopu partyskin.cz.",
    },
    {
      q:
        lang === "en"
          ? "Do you send samples before production?"
          : lang === "sk"
          ? "Posielate vzorky pred výrobou?"
          : "Dodáváte vzorky před výrobou?",
      a:
        lang === "en"
          ? "Yes, physical samples are available on request (at the cost of production and shipping). For standard orders we provide a free digital visualisation."
          : lang === "sk"
          ? "Áno, na vyžiadanie zasielame fyzické vzorky (za náklady na výrobu a dopravu). Pri štandardných objednávkach poskytujeme digitálnu vizualizáciu zdarma."
          : "Ano, na vyžádání zasíláme fyzické vzorky (za náklady na výrobu a dopravu). U standardních objednávek poskytujeme digitální vizualizaci zdarma.",
    },
    {
      q:
        lang === "en"
          ? "How should I prepare files for printing?"
          : lang === "sk"
          ? "Ako mám pripraviť podklady pre tlač?"
          : "Jak mám připravit podklady pro tisk?",
      a:
        lang === "en"
          ? "Ideally supply vector files (.AI, .EPS, .SVG) or high-resolution PDF (min. 300 DPI). We also accept JPEG/PNG — we will let you know if the quality is insufficient for printing."
          : lang === "sk"
          ? "Ideálne dodajte súbory vo vektorovom formáte (.AI, .EPS, .SVG) alebo PDF vo vysokom rozlíšení (min. 300 DPI). Prijímame aj JPEG/PNG — upozorníme vás, ak by kvalita nestačila pre tlač."
          : "Ideálně dodejte soubory ve vektorovém formátu (.AI, .EPS, .SVG) nebo PDF ve vysokém rozlišení (min. 300 DPI). Přijímáme i JPEG/PNG — upozorníme vás, pokud by kvalita nestačila pro tisk.",
    },
    {
      q:
        lang === "en"
          ? "Are the materials safe for children?"
          : lang === "sk"
          ? "Sú materiály bezpečné pre deti?"
          : "Jsou materiály bezpečné pro děti?",
      a:
        lang === "en"
          ? "Yes. Our tattoos comply with EN 71 and are certified for use by children aged 3 and over. Stickers and postcards are made from materials free of harmful substances."
          : lang === "sk"
          ? "Áno. Naše tetovačky zodpovedajú norme EN 71 a sú certifikované na použitie deťmi od 3 rokov. Samolepky aj pohľadnice sú vyrobené z materiálov bez škodlivých látok."
          : "Ano. Naše tetovačky odpovídají normě EN 71 a jsou certifikovány pro použití dětmi od 3 let. Samolepky i pohlednice jsou vyrobeny z materiálů bez škodlivých látek.",
    },
    {
      q:
        lang === "en"
          ? "How long do temporary tattoos last on skin?"
          : lang === "sk"
          ? "Ako dlho vydržia dočasné tetovačky na koži?"
          : "Jak dlouho vydrží dočasné tetovačky na kůži?",
      a:
        lang === "en"
          ? "Typically 3–7 days depending on body location, activity and skincare routine. We include instructions for application and prolonging wear."
          : lang === "sk"
          ? "Štandardne 3–7 dní v závislosti od miesta tela, aktivity a starostlivosti o pokožku. Dodávame inštrukcie pre nanesenie aj predĺženie výdrže."
          : "Standardně 3–7 dní v závislosti na místě těla, aktivitě a péči o pokožku. Dodáváme instrukce pro nanesení i prodloužení výdrže.",
    },
    {
      q:
        lang === "en"
          ? "Can I order repeatedly with a discount?"
          : lang === "sk"
          ? "Môžem opakovane objednávať so zľavou?"
          : "Mohu objednávat opakovaně se slevou?",
      a:
        lang === "en"
          ? "Yes. We offer referral discounts and priority production capacity for regular customers. Details are arranged individually."
          : lang === "sk"
          ? "Áno. Pre pravidelných zákazníkov ponúkame referenčné zľavy a prioritné kapacity vo výrobe. Detaily domluvíme individuálne."
          : "Ano. Pro pravidelné zákazníky nabízíme referenční slevy a prioritní kapacity ve výrobě. Detaily domluvíme individuálně.",
    },
    {
      q:
        lang === "en"
          ? "How does payment work?"
          : lang === "sk"
          ? "Ako prebieha platba?"
          : "Jak probíhá platba?",
      a:
        lang === "en"
          ? "We accept bank transfer by invoice or online card payment. For new customers we require a 50% deposit before production begins."
          : lang === "sk"
          ? "Prijímame platbu prevodom na základe faktúry alebo online platbu kartou. U nových zákazníkov požadujeme zálohu 50 % pred zahájením výroby."
          : "Přijímáme platbu převodem na základě faktury nebo online platbu kartou. U nových zákazníků požadujeme zálohu 50 % před zahájením výroby.",
    },
    {
      q:
        lang === "en"
          ? "What happens if I am not satisfied with the result?"
          : lang === "sk"
          ? "Čo sa stane, ak nie som spokojný s výsledkom?"
          : "Co se stane, pokud nejsem s výsledkem spokojený?",
      a:
        lang === "en"
          ? "Our customers are our partners. If the product does not match the approved design, we will replace the order or refund the payment. Complaints are resolved within 5 business days."
          : lang === "sk"
          ? "Naši zákazníci sú naši partneri. Ak produkt nezodpovedá schválenému návrhu, zákazku nahradíme alebo vrátime platbu. Reklamácie riešime do 5 pracovných dní."
          : "Náš zákazníci jsou naši partneři. Pokud produkt neodpovídá schválenému návrhu, zakázku nahradíme nebo vrátíme platbu. Reklamace řešíme do 5 pracovních dní.",
    },
  ];

  // ─── Timeline stats ───────────────────────────────────────────────────────
  const timelineStats = [
    {
      value: "24 h",
      label:
        lang === "en"
          ? "Response to inquiry"
          : lang === "sk"
          ? "Odpoveď na dopyt"
          : "Odpověď na poptávku",
    },
    {
      value: "48 h",
      label:
        lang === "en"
          ? "Graphic design"
          : lang === "sk"
          ? "Grafický návrh"
          : "Grafický návrh",
    },
    {
      value: lang === "en" ? "3–5 days" : lang === "sk" ? "3–5 dní" : "3–5 dní",
      label:
        lang === "en"
          ? "Standard production"
          : lang === "sk"
          ? "Štandardná výroba"
          : "Standardní výroba",
    },
    {
      value: lang === "en" ? "1–2 days" : lang === "sk" ? "1–2 dni" : "1–2 dny",
      label:
        lang === "en"
          ? "Shipping"
          : lang === "sk"
          ? "Doprava"
          : "Doprava",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">
              {lang === "en" ? "Process" : lang === "sk" ? "Proces" : "Proces"}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              {lang === "en"
                ? "How it works"
                : lang === "sk"
                ? "Ako to funguje"
                : "Jak to funguje"}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              {lang === "en"
                ? "From first contact to delivery. Simple process, fast production, no stress."
                : lang === "sk"
                ? "Od prvého kontaktu po doručenie. Jednoduchý proces, rýchla výroba, žiadny stres."
                : "Od prvního emailu po doručení na vaší akci — víte přesně, co se kdy děje. Žádné překvapení, žádné čekání."}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={0.1}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${step.color} p-1`}>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                        <step.icon size={22} className={step.iconColor} />
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        {step.duration}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-3">
                      <span className={`text-6xl font-display font-extrabold ${step.numColor} leading-none`}>
                        {step.num}
                      </span>
                      <h2 className="text-3xl font-display font-extrabold text-brand-secondary">
                        {step.title}
                      </h2>
                    </div>

                    <p className="text-gray-500 leading-relaxed mb-6">{step.description}</p>

                    <div className="space-y-2.5">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="section-pad bg-brand-secondary">
        <div className="container-pad">
          <FadeUp className="text-center mb-12">
            <h2 className="text-4xl font-display font-extrabold text-white mb-4">
              {lang === "en"
                ? "The whole process in numbers"
                : lang === "sk"
                ? "Celý proces v číslach"
                : "Celý proces v číslech"}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timelineStats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08}>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-3xl font-display font-extrabold text-brand-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <FadeUp className="text-center mb-12">
            <span className="tag mb-4">
              {lang === "en"
                ? "Guarantees"
                : lang === "sk"
                ? "Garancie"
                : "Záruky"}
            </span>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {lang === "en"
                ? "What we stand for"
                : lang === "sk"
                ? "Na čom si zakladáme"
                : "Na čem si zakládáme"}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <FadeUp key={g.title} delay={i * 0.08}>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-primary/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                    <g.icon size={20} className="text-brand-primary" />
                  </div>
                  <h3 className="font-display font-bold text-brand-secondary text-lg mb-2">{g.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-12">
            <span className="tag mb-4">FAQ</span>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {lang === "en"
                ? "FAQ"
                : lang === "sk"
                ? "Časté otázky"
                : "Časté otázky"}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {lang === "en"
                ? "Didn't find the answer? Write to us — we reply within 24 hours."
                : lang === "sk"
                ? "Nenašli ste odpoveď? Napíšte nám — ozveme sa do 24 hodín."
                : "Nenašli odpověď? Napište nám — ozveme se do 24 hodin."}
            </p>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FadeUp key={faq.q}>
                <FAQItem q={faq.q} a={faq.a} />
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
                ? "Ready to get started?"
                : lang === "sk"
                ? "Pripravení začať?"
                : "Připraveni začít?"}
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
              {lang === "en"
                ? "Get a quote today and have your products in hand within a week."
                : lang === "sk"
                ? "Dopytujte nás ešte dnes a do týždňa máte produkty v rukách."
                : "Poptejte nás ještě dnes a do týdne máte produkty v ruce."}
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              {lang === "en"
                ? "Get a quote"
                : lang === "sk"
                ? "Dopytovať výrobu"
                : "Odeslat poptávku"}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
