"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
// Data
// ─────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Poptávka a konzultace",
    duration: "Den 1",
    description:
      "Vyplňte online formulář nebo nám napište email. Sdělte nám typ produktu, přibližné množství a termín akce. Není potřeba mít hotový design — poradíme si i s nápadem na papíru.",
    details: [
      "Formulář vyplníte za 2 minuty",
      "Odpovídáme do 24 hodin (obvykle dříve)",
      "Bezplatná konzultace přes telefon nebo video hovor",
      "Pomůžeme s výběrem produktu i formátu",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    numColor: "text-blue-200",
  },
  {
    num: "02",
    icon: Palette,
    title: "Grafický návrh",
    duration: "Den 2–3",
    description:
      "Náš grafik zpracuje váš design nebo brief a připraví vizualizaci pro schválení. Zahrnuje jedno kolo revizí zdarma. Pracujeme s vašimi soubory nebo navrhujeme od základu.",
    details: [
      "Grafické zpracování do 24 hodin od briefu",
      "Vizualizace na reálném produktu",
      "1 kolo revizí zdarma v ceně",
      "Přijímáme AI, Illustrator, Photoshop, PDF",
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    color: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    numColor: "text-purple-200",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Schválení a platba",
    duration: "Den 3–4",
    description:
      "Vizualizaci schválíte online — jedním klikem. Po schválení vystavíme fakturu nebo přijmeme zálohu. Výroba se spouští okamžitě po potvrzení platby.",
    details: [
      "Schválení online — žádné tištěné formuláře",
      "Platba převodem nebo kartou",
      "Faktura do 1 pracovního dne",
      "Výroba startuje ihned po platbě",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    color: "from-green-500/10 to-green-600/5",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    numColor: "text-green-200",
  },
  {
    num: "04",
    icon: Package,
    title: "Výroba",
    duration: "Den 3–6",
    description:
      "Výroba probíhá v certifikovaném závodě. Průběžně vás informujeme o stavu zakázky. Kontrola kvality před každou expedicí.",
    details: [
      "Certifikovaná výroba — EU normy",
      "Průběžný update o stavu výroby",
      "100% kontrola kvality před expedicí",
      "Balení dle vašich požadavků",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    color: "from-orange-500/10 to-orange-600/5",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    numColor: "text-orange-200",
  },
  {
    num: "05",
    icon: Truck,
    title: "Dodání",
    duration: "Den 5–7",
    description:
      "Zásilku doručíme přímo k vám nebo na místo akce. Standartní doprava PPL nebo DPD, pro větší zásilky spedice. Tracking číslo dostanete automaticky.",
    details: [
      "Doručení PPL, DPD nebo spedicí",
      "Tracking číslo zasílám emailem",
      "Doručení na adresu nebo na místo akce",
      "Express dodání možné za příplatek",
    ],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
    color: "from-brand-primary/10 to-brand-accent/5",
    iconBg: "bg-brand-light",
    iconColor: "text-brand-primary",
    numColor: "text-brand-primary/20",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Dodací termín",
    desc: "Garantujeme termín dohodnutý při objednávce. Nestíháme? Oznámíme to v předstihu a nabídneme řešení.",
  },
  {
    icon: Shield,
    title: "Kvalita nebo výměna",
    desc: "Pokud produkt neodpovídá schválenému vzoru, nahradíme celou zakázku zdarma.",
  },
  {
    icon: RefreshCw,
    title: "Bezplatné revize",
    desc: "Jedno kolo revizí grafiky je vždy v ceně. Každá změna designu se počítá zvlášť.",
  },
  {
    icon: FileText,
    title: "Transparentní cena",
    desc: "Žádné skryté poplatky. Cena v nabídce je konečná, pokud nezměníte zadání.",
  },
  {
    icon: Zap,
    title: "Express výroba",
    desc: "Potřebujete do 48 hodin? Nabízíme express výrobu za příplatek — dostupnost ověřujeme individuálně.",
  },
];

const faqs = [
  {
    q: "Jaký je minimální počet kusů?",
    a: "Dočasné tetovačky nemají žádné minimální množství — objednat lze i 1 kus. U pohlednic je minimum 50 ks, u samolepek 100 ks. Pro kompletní balíčky se minimum stanovuje individuálně.",
  },
  {
    q: "Dodáváte vzorky před výrobou?",
    a: "Ano, na vyžádání zasíláme fyzické vzorky (za náklady na výrobu a dopravu). U standardních objednávek poskytujeme digitální vizualizaci zdarma.",
  },
  {
    q: "Jak mám připravit podklady pro tisk?",
    a: "Ideálně dodejte soubory ve vektorovém formátu (.AI, .EPS, .SVG) nebo PDF ve vysokém rozlišení (min. 300 DPI). Přijímáme i JPEG/PNG — upozorníme vás, pokud by kvalita nestačila pro tisk.",
  },
  {
    q: "Jsou materiály bezpečné pro děti?",
    a: "Ano. Naše tetovačky odpovídají normě EN 71 a jsou certifikovány pro použití dětmi od 3 let. Samolepky i pohlednice jsou vyrobeny z materiálů bez škodlivých látek.",
  },
  {
    q: "Jak dlouho vydrží dočasné tetovačky na kůži?",
    a: "Standardně 3–7 dní v závislosti na místě těla, aktivitě a péči o pokožku. Dodáváme instrukce pro nanesení i prodloužení výdrže.",
  },
  {
    q: "Mohu objednávat opakovaně se slevou?",
    a: "Ano. Pro pravidelné zákazníky nabízíme referenční slevy a prioritní kapacity ve výrobě. Detaily domluvíme individuálně.",
  },
  {
    q: "Jak probíhá platba?",
    a: "Přijímáme platbu převodem na základě faktury nebo online platbu kartou. U nových zákazníků požadujeme zálohu 50 % před zahájením výroby.",
  },
  {
    q: "Co se stane, pokud nejsem s výsledkem spokojený?",
    a: "Náš zákazníci jsou naši partneři. Pokud produkt neodpovídá schválenému návrhu, zakázku nahradíme nebo vrátíme platbu. Reklamace řešíme do 5 pracovních dní.",
  },
];

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
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">Proces</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              Jak to funguje
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Od prvního emailu po doručení na vaší akci — víte přesně, co se kdy děje.
              Žádné překvapení, žádné čekání.
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
              Celý proces v číslech
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "24 h", label: "Odpověď na poptávku" },
              { value: "48 h", label: "Grafický návrh" },
              { value: "3–5 dní", label: "Standardní výroba" },
              { value: "1–2 dny", label: "Doprava" },
            ].map((stat, i) => (
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
            <span className="tag mb-4">Záruky</span>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Na čem si zakládáme
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
              Časté otázky
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Nenašli odpověď? Napište nám — ozveme se do 24 hodin.
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
              Připraveni začít?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
              Poptejte nás ještě dnes a do týdne máte produkty v ruce.
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Odeslat poptávku
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
