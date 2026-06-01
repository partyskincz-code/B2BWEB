"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Package,
  Star,
  ChevronRight,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
  Clock,
  Award,
  Gift,
  Infinity,
  RefreshCw,
  MapPin,
} from "lucide-react";

// ─────────────────────────────────────────────────
// Animation helpers
// ─────────────────────────────────────────────────
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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────
const products = [
  {
    id: "tetovacky",
    title: "Dočasné tetovačky",
    subtitle: "Nalepovací — transfer",
    description:
      "Váš logo, motiv nebo design na kůži zákazníků. Certifikovaná výroba, bezpečné pro děti i dospělé.",
    price: "od 8 Kč / ks",
    minQty: "bez minimálního množství",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
    tag: "Bestseller",
    href: "/produkty#tetovacky",
  },
  {
    id: "samolepky",
    title: "Samolepky na míru",
    subtitle: "Vlastní tvar & materiál",
    description:
      "Tvarové samolepky pro branding, packaging a merch. Voděodolné, UV odolné materiály.",
    price: "od 4 Kč / ks",
    minQty: "bez minimálního množství",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    tag: "Populární",
    href: "/produkty#samolepky",
  },
  {
    id: "pohlednice",
    title: "Pohlednice a přání",
    subtitle: "Personalizovaný tisk",
    description:
      "Pohlednice s vlastním motivem pro eventy, dárkové akce nebo firemní promo. Tisk od 50 ks.",
    price: "od 12 Kč / ks",
    minQty: "bez minimálního množství",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    tag: "Nové",
    href: "/produkty#pohlednice",
  },
  {
    id: "kompletni",
    title: "Kompletní řešení",
    subtitle: "Na klíč pro váš event",
    description:
      "Balíčky pro firemní eventy, teambuildingy, svatby nebo festivaly. Jeden dodavatel, vše vyřešeno.",
    price: "Individuální cena",
    minQty: "Dle rozsahu",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    tag: "Oblíbené",
    href: "/produkty#kompletni",
  },
];

const usps = [
  {
    icon: MapPin,
    title: "Česká výroba",
    desc: "Vyrábíme v Čechách. Podporujeme lokální ekonomiku a zaměstnáváme maminky na mateřské.",
  },
  {
    icon: Gift,
    title: "Vzorky zdarma",
    desc: "Před objednávkou si vyzkoušejte kvalitu. Vzorky posíláme zdarma, bez závazků.",
  },
  {
    icon: Infinity,
    title: "Bez minimálního množství",
    desc: "Objednejte 1 nebo 10 000 kusů. Žádné minimální množství, žádné podmínky.",
  },
  {
    icon: RefreshCw,
    title: "Doobjednávka kdykoliv",
    desc: "Došly tetovačky? Doobjednejte klidně 10 kusů za stejnou cenu — bez minimálního množství.",
  },
];

const segments = [
  {
    icon: Building2,
    title: "Firmy a značky",
    desc: "Firemní merch, promo kampaně, veletrhy a konference. Váš brand přesně tam, kde ho zákazníci uvidí.",
    cta: "Prozkoumat",
    href: "/produkty#firmy",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Svatby a oslavy",
    desc: "Personalizované tetovačky pro hosty, samolepky na přání, tematické doplňky pro nezapomenutelný den.",
    cta: "Prozkoumat",
    href: "/produkty#svatby",
    color: "bg-pink-50",
    iconColor: "text-brand-primary",
  },
  {
    icon: Music,
    title: "Festivaly a akce",
    desc: "Merch pro promotéry, brandingové materiály, tetovačky jako zábava pro návštěvníky.",
    cta: "Prozkoumat",
    href: "/produkty#festivaly",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Školy a děti",
    desc: "Bezpečné certifikované tetovačky pro školy v přírodě, dětské slavnosti a párty.",
    cta: "Prozkoumat",
    href: "/produkty#skoly",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Store,
    title: "Velkoobchod",
    desc: "Pravidelné dodávky pro maloobchodní řetězce, e-shopy a prodejny hraček.",
    cta: "Prozkoumat",
    href: "/produkty#obchody",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const steps = [
  {
    num: "01",
    title: "Pošlete poptávku",
    desc: "Vyplňte formulář nebo nám napište email. Potřebujeme jen typ produktu, množství a termín.",
  },
  {
    num: "02",
    title: "Návrh do 24 hodin",
    desc: "Náš grafik připraví vizualizaci nebo zpracuje váš design. Schvalujete online, jednoduše.",
  },
  {
    num: "03",
    title: "Výroba & dodání",
    desc: "Spustíme výrobu a doručíme přímo k vám. Standardně do 5–7 pracovních dní od schválení.",
  },
];

const testimonials = [
  {
    text: "Spolupráce s PartySkin byla naprosto bezproblémová. Tetovačky s naším logem byly hit na firemním teambuildinku.",
    author: "Jan Novák",
    role: "Marketing Manager, TechCorp s.r.o.",
    rating: 5,
  },
  {
    text: "Objednali jsme tetovačky a samolepky pro festival. Kvalita překonala očekávání, dodání přesně včas.",
    author: "Petra Horáčková",
    role: "Event Producer, Stage Factory",
    rating: 5,
  },
  {
    text: "Pro naši svatbu jsme dostali krásné personalizované tetovačky pro hosty. Všichni se bavili a chtěli vědět, kde jsme je sehnali.",
    author: "Lucie Malá",
    role: "Nevěsta, Praha",
    rating: 5,
  },
];

const clientLogos = [
  "TechCorp", "Stage Factory", "Mixit", "Sephora CZ", "Seznam.cz", "Škoda Auto",
];

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
        {/* Background pattern */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Event promo materiály"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <div className="relative z-10 container-pad w-full pt-24 pb-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] mb-6 text-balance"
            >
              Váš brand na kůži.{" "}
              <span className="text-brand-primary">Doslova.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl text-white/75 mb-10 max-w-xl leading-relaxed"
            >
              Kompletní promo materiály na jednom místě — dočasné tetovačky, samolepky
              a pohlednice na míru. Pro firmy, eventy, svatby i festivaly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/kontakt" className="btn-primary text-base px-8 py-4 gap-2">
                Poptat výrobu zdarma
                <ArrowRight size={18} />
              </Link>
              <Link href="/produkty" className="btn-outline border-white text-white hover:bg-white hover:text-brand-secondary text-base px-8 py-4">
                Zobrazit produkty
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
              {["Česká výroba", "Vzorky zdarma", "Možné doobjednat bez minimálního množství"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 size={16} className="text-brand-primary" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scrollujte</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          USP — 4 ikony
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {usps.map((usp, i) => (
              <FadeUp key={usp.title} delay={i * 0.08}>
                <div className="flex flex-col items-start gap-3 p-5 rounded-2xl hover:bg-brand-light transition-colors duration-200">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <usp.icon size={22} className="text-brand-primary" />
                  </div>
                  <h3 className="font-display font-bold text-brand-secondary text-base">
                    {usp.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{usp.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STORYTELLING — kompletní B2B řešení pro eventy
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <FadeUp delay={0.1}>
              <span className="tag mb-4">Kompletní B2B řešení</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
                Jeden dodavatel.{" "}
                <span className="text-brand-primary">Celý event vyřešen.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ať plánujete firemní večírek pro 50 lidí nebo festival pro 10 000 —
                PartySkin pokryje veškeré promo materiály od A do Z. Grafika, výroba,
                balení, dodání. Jeden kontakt. Vše pod kontrolou.
              </p>

              {/* Event type chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Firemní event",
                  "Teambuilding",
                  "Festival",
                  "Veletrh",
                  "Konference",
                  "Svatba",
                  "Brand launch",
                  "Dětská party",
                  "Sportovní akce",
                ].map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 rounded-full bg-brand-light text-brand-secondary text-xs font-semibold border border-brand-primary/15"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  "Cenová nabídka do 24 hodin",
                  "Grafický návrh do 48 hodin",
                  "Dodání po celé Evropě do 10 dní, express po domluvě",
                  "Jeden kontakt po celou dobu projektu",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Image side */}
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                    alt="B2B event promo materiály PartySkin"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <p className="text-3xl font-display font-extrabold text-brand-primary leading-none mb-1">500+</p>
                  <p className="text-xs text-gray-500 font-medium">akcí úspěšně<br/>zásobeno materiálem</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VÝHODY — vzorky, bez minima, doobjednávka
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-brand-light">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mb-3">
              Vyzkoušejte. Objednejte. Doobjednejte.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Tři výhody, které vám dají jistotu od prvního vzorku až po poslední kus.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Vzorky */}
            <FadeUp delay={0.08}>
              <div className="bg-white rounded-2xl p-8 border border-brand-primary/10 h-full flex flex-col card-hover">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5">
                  <Gift size={26} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-bold text-brand-secondary text-xl mb-3">
                  Vzorky zdarma
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  Než se rozhodnete, pošleme vám fyzické vzorky zdarma. Osaháte si materiál, zkontrolujete tisk — a teprve pak objednáte. Žádné překvapení při převzetí.
                </p>
                <Link href="/kontakt" className="text-sm font-semibold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Požádat o vzorky <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>

            {/* Bez minima */}
            <FadeUp delay={0.16}>
              <div className="bg-white rounded-2xl p-8 border border-brand-primary/10 h-full flex flex-col card-hover">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5">
                  <Infinity size={26} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-bold text-brand-secondary text-xl mb-3">
                  Bez minimálního množství
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  10 kusů na rodinnou oslavu nebo 5 000 na festival — oboje zvládneme. Objednáte přesně tolik, kolik potřebujete. Žádné zbytečné zásoby, žádné umělé limity.
                </p>
                <Link href="/kontakt" className="text-sm font-semibold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Zjistit cenu <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>

            {/* Doobjednávka */}
            <FadeUp delay={0.24}>
              <div className="bg-white rounded-2xl p-8 border border-brand-primary/10 h-full flex flex-col card-hover">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5">
                  <RefreshCw size={26} className="text-brand-primary" />
                </div>
                <h3 className="font-display font-bold text-brand-secondary text-xl mb-3">
                  Doobjednávka kdykoliv
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  Tetovačky šly na výbornou? Váš design máme uložený — doobjednejte kdykoliv, třeba jen 5 kusů. Stejná cena, stejná kvalita, výroba startuje okamžitě.
                </p>
                <Link href="/kontakt" className="text-sm font-semibold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                  Doobjednat <ArrowRight size={15} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUKTY grid
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">Naše nabídka</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Kompletní promo materiály
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Nejsme jen tetovačky. Jsme váš partner pro celý brand experience.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <FadeUp key={product.id} delay={i * 0.1}>
                <Link href={product.href} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="tag text-xs">{product.tag}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {product.subtitle}
                      </p>
                      <h3 className="font-display font-bold text-brand-secondary text-lg mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-brand-primary font-bold text-base">{product.price}</p>
                          <p className="text-gray-400 text-xs">{product.minQty}</p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-200">
                          <ChevronRight
                            size={18}
                            className="text-brand-primary group-hover:text-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-10">
            <Link href="/produkty" className="btn-ghost">
              Zobrazit celou nabídku
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          USE-CASES — segmenty
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">Pro koho pracujeme</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Od firemního eventu po dětskou oslavu
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Máme zkušenosti s každým typem akce. Víme, co funguje.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((seg, i) => (
              <FadeUp key={seg.title} delay={i * 0.08}>
                <Link href={seg.href} className="group block">
                  <div
                    className={`${seg.color} rounded-2xl p-7 card-hover h-full flex flex-col`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm`}>
                      <seg.icon size={24} className={seg.iconColor} />
                    </div>
                    <h3 className="font-display font-bold text-brand-secondary text-xl mb-2">
                      {seg.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                      {seg.desc}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-brand-primary gap-1 group-hover:gap-2 transition-all">
                      {seg.cta}
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          JAK TO FUNGUJE — 3 kroky
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-brand-secondary relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />

        <div className="relative z-10 container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag bg-white/10 text-white border border-white/20 mb-4">
              Proces
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 mb-4">
              Od nápadu k výrobě za 5 dní
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Tři jednoduché kroky. Žádná byrokracie, žádné čekání.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />

            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex flex-col items-center justify-center mx-auto mb-6 relative">
                    <span className="text-xs text-brand-primary/60 font-semibold tracking-widest uppercase">
                      Krok
                    </span>
                    <span className="text-3xl font-display font-extrabold text-brand-primary leading-none">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <Link href="/jak-to-funguje" className="btn-primary">
              Zjistit více o procesu
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          REFERENCE / TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">Reference</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Co říkají naši zákazníci
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-brand-secondary text-sm">{t.author}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Client logos */}
          <FadeUp>
            <div className="border-t border-gray-100 pt-10">
              <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
                Důvěřují nám
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {clientLogos.map((logo) => (
                  <div
                    key={logo}
                    className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-400 font-semibold text-sm hover:border-brand-primary/30 hover:text-brand-primary transition-all duration-200"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALERIE TEASER
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <span className="tag mb-4">Naše práce</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Ukázky realizací
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80", alt: "Festival tetovačky" },
              { url: "https://images.unsplash.com/photo-1583195764036-cddc2d23a826?w=400&q=80", alt: "Firemní merch" },
              { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", alt: "Svatební tetovačky" },
              { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80", alt: "Event branding" },
              { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", alt: "Dětská party" },
              { url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&q=80", alt: "Samolepky" },
              { url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400&q=80", alt: "Pohlednice" },
              { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80", alt: "Teambuilding" },
            ].map((img, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-all duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-10">
            <Link href="/reference" className="btn-ghost">
              Zobrazit celou galerii
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Kontaktní formulář inline
      ═══════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="bg-gradient-to-br from-brand-primary to-[#593027] rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-20 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight">
                  Připraveni začít?
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Popište nám vaší akci a my se ozveme do 24 hodin s nabídkou přímo na míru.
                  Bez závazků, bez skrytých poplatků.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {["Rychlá odpověď", "Bezplatný návrh", "Flexibilní množství"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="text-white/60 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-auto lg:min-w-[340px] bg-white rounded-2xl p-6 shadow-2xl">
                <QuickContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-brand-secondary">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Spokojených klientů" },
              { value: "50 000+", label: "Tetováček ročně" },
              { value: "5 dní", label: "Průměrná výroba" },
              { value: "100%", label: "EU certifikace" },
            ].map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-4xl font-display font-extrabold text-brand-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─────────────────────────────────────────────────
// Quick contact form (inline)
// ─────────────────────────────────────────────────
function QuickContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Děkujeme! Ozveme se vám do 24 hodin.");
      }}
      className="flex flex-col gap-3"
    >
      <p className="font-display font-bold text-brand-secondary text-lg mb-1">
        Poptejte zdarma
      </p>
      <input
        type="text"
        placeholder="Jméno a firma"
        required
        className="input-field text-sm"
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        className="input-field text-sm"
      />
      <input
        type="tel"
        placeholder="Telefon"
        className="input-field text-sm"
      />
      <textarea
        placeholder="Popište váš záměr... (typ produktu, počet ks, termín)"
        rows={3}
        className="input-field text-sm resize-none"
      />
      <button type="submit" className="btn-primary w-full mt-1">
        Odeslat poptávku
        <ArrowRight size={16} className="ml-2" />
      </button>
      <p className="text-gray-400 text-xs text-center">
        Ozveme se do 24 hodin. Žádný spam.
      </p>
    </form>
  );
}
