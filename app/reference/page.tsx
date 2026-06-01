"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, Filter } from "lucide-react";

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
const filters = ["Vše", "Tetovačky", "Samolepky", "Pohlednice", "Kompletní řešení"];
const segmentFilters = ["Firmy", "Svatby", "Festivaly", "Školy", "Velkoobchod"];

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
    title: "Festival Rock for People",
    client: "Stage Factory",
    type: "Tetovačky",
    segment: "Festivaly",
    desc: "5 000 ks tetováček s festivalovým logem pro návštěvníky.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    title: "Svatba Novákových",
    client: "Soukromý zákazník",
    type: "Kompletní řešení",
    segment: "Svatby",
    desc: "Personalizované tetovačky + pohlednice pro 150 hostů.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    title: "TechCorp Teambuilding",
    client: "TechCorp s.r.o.",
    type: "Tetovačky",
    segment: "Firmy",
    desc: "Firemní tetovačky s logem pro 300 zaměstnanců.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    title: "Mixit — letní edice",
    client: "Mixit",
    type: "Samolepky",
    segment: "Firmy",
    desc: "10 000 ks tvarových samolepek na sezónní packaging.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
    title: "Vánoční přání Sephora",
    client: "Sephora CZ",
    type: "Pohlednice",
    segment: "Firmy",
    desc: "Personalizované pohlednice pro věrnostní zákazníky.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1594708767771-a5d9e239b7f9?w=600&q=80",
    title: "Škola v přírodě — ZŠ Vinohrady",
    client: "ZŠ Vinohrady Praha",
    type: "Tetovačky",
    segment: "Školy",
    desc: "Bezpečné dětské tetovačky s motivy přírody pro školu v přírodě.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    title: "Narozeninová party",
    client: "Soukromý zákazník",
    type: "Kompletní řešení",
    segment: "Svatby",
    desc: "Kompletní sada — tetovačky, samolepky a pozvánky.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    title: "HračkyPlus — velkoobchod",
    client: "HračkyPlus s.r.o.",
    type: "Tetovačky",
    segment: "Velkoobchod",
    desc: "Pravidelné dodávky dětských tetováček do sítě prodejen.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    title: "PR kampaň Seznam.cz",
    client: "Seznam.cz",
    type: "Samolepky",
    segment: "Firmy",
    desc: "Brandingové samolepky pro PR kampaň s dosah 50 000 ks.",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Dětský festival Pohádková",
    client: "Pohádková s.r.o.",
    type: "Tetovačky",
    segment: "Festivaly",
    desc: "Pohádkové motivy pro dětský festival — 3 000 ks.",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&q=80",
    title: "Valentýnská edice",
    client: "Knihkupectví Luxor",
    type: "Pohlednice",
    segment: "Firmy",
    desc: "Valentýnské pohlednice pro zákazníky v síti prodejen.",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    title: "Konference Future of AI",
    client: "AI Society CZ",
    type: "Kompletní řešení",
    segment: "Firmy",
    desc: "Tetovačky + samolepky + jmenovky pro 800 účastníků konference.",
  },
];

const testimonials = [
  {
    text: "PartySkin nám zachránil festival — dodali 5 000 tetováček za 4 dny a kvalita byla skvělá. Příště jinak nejdeme.",
    author: "Tomáš Veselý",
    role: "Production Manager, Stage Factory",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    text: "Objednali jsme tetovačky pro firemní teambuilding poprvé. Celý proces byl překvapivě jednoduchý a výsledek překonal očekávání.",
    author: "Martina Procházková",
    role: "HR Manager, TechCorp s.r.o.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&q=80",
  },
  {
    text: "Samolepky na packaging jsou luxusní. Zákazníci se ptají, kde je bereme. Teď objednáváme každý kvartál.",
    author: "Radek Mixa",
    role: "Founder, Mixit",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

const stats = [
  { value: "500+", label: "Spokojených zákazníků" },
  { value: "98%", label: "Zákazníků se vrátí" },
  { value: "1M+", label: "Vyrobených kusů" },
  { value: "5 ★", label: "Průměrné hodnocení" },
];

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function ReferencePage() {
  const [activeFilter, setActiveFilter] = useState("Vše");
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    const typeMatch = activeFilter === "Vše" || item.type === activeFilter;
    const segmentMatch = !activeSegment || item.segment === activeSegment;
    return typeMatch && segmentMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">Reference</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              Naše práce mluví za nás
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Přes 500 spokojených zákazníků od firem přes festivaly až po soukromé akce.
              Prohlédněte si ukázky realizací.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.07}>
                <div className="text-center">
                  <p className="text-4xl font-display font-extrabold text-brand-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          {/* Filters */}
          <FadeUp className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Filter size={16} />
                <span>Filtrovat:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeFilter === f
                        ? "bg-brand-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-brand-light hover:text-brand-primary"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {segmentFilters.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSegment(activeSegment === s ? null : s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      activeSegment === s
                        ? "border-brand-primary bg-brand-light text-brand-primary"
                        : "border-gray-200 text-gray-500 hover:border-brand-primary/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <FadeUp key={item.id} delay={i * 0.05}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="tag text-xs">{item.type}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-600">
                        {item.segment}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-brand-secondary text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-2">{item.client}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Pro tuto kombinaci filtrů nejsou zatím záznamy.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-12">
            <span className="tag mb-4">Hodnocení</span>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              Zákazníci o nás
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-secondary text-sm">{t.author}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
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
              Chcete být naší další referencí?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
              Poptejte nás a přidejte se k přes 500 spokojených zákazníkům.
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Poptat výrobu
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
