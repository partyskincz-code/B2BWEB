"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
  Send,
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
const productTypes = [
  "Dočasné tetovačky",
  "Samolepky na míru",
  "Pohlednice a přání",
  "Kompletní řešení",
  "Nejsem si jistý/á",
];

const segmentTypes = [
  { label: "Firma / Značka", icon: Building2 },
  { label: "Svatba / Oslava", icon: Heart },
  { label: "Festival / Akce", icon: Music },
  { label: "Škola / Děti", icon: GraduationCap },
  { label: "Velkoobchod", icon: Store },
];

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "b2b@partyskin.cz",
    href: "mailto:b2b@partyskin.cz",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 600 000 000",
    href: "tel:+420600000000",
  },
  {
    icon: MapPin,
    label: "Sídlo",
    value: "Praha, Česká republika",
    href: null,
  },
  {
    icon: Clock,
    label: "Pracovní doba",
    value: "Po–Pá: 8:00–17:00",
    href: null,
  },
];

// ─────────────────────────────────────────────────
// Form
// ─────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const toggleProduct = (p: string) => {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-8"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-brand-secondary mb-3">
          Poptávka odeslána!
        </h3>
        <p className="text-gray-500 leading-relaxed max-w-sm">
          Děkujeme za zájem. Ozveme se vám do <strong>24 hodin</strong> s nabídkou
          přímo na míru vaší akce.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-brand-primary text-sm font-medium hover:underline"
        >
          Odeslat další poptávku
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Kontaktní údaje */}
      <div>
        <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
          Kontaktní údaje
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Jméno a příjmení <span className="text-brand-primary">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Jan Novák"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Firma / Organizace
            </label>
            <input
              type="text"
              placeholder="TechCorp s.r.o."
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              E-mail <span className="text-brand-primary">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="jan@firma.cz"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Telefon
            </label>
            <input
              type="tel"
              placeholder="+420 600 000 000"
              className="input-field"
            />
          </div>
        </div>
      </div>

      {/* Typ zákazníka */}
      <div>
        <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
          Kdo jste?
        </h3>
        <div className="flex flex-wrap gap-2">
          {segmentTypes.map((seg) => (
            <button
              key={seg.label}
              type="button"
              onClick={() => setSelectedSegment(seg.label === selectedSegment ? null : seg.label)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                selectedSegment === seg.label
                  ? "border-brand-primary bg-brand-light text-brand-primary"
                  : "border-gray-200 text-gray-600 hover:border-brand-primary/40"
              }`}
            >
              <seg.icon size={16} />
              {seg.label}
            </button>
          ))}
        </div>
      </div>

      {/* Typ produktu */}
      <div>
        <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
          O jaký produkt máte zájem? <span className="text-sm font-normal text-gray-400">(lze vybrat více)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {productTypes.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => toggleProduct(p)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                selectedProducts.includes(p)
                  ? "border-brand-primary bg-brand-light text-brand-primary"
                  : "border-gray-200 text-gray-600 hover:border-brand-primary/40"
              }`}
            >
              {selectedProducts.includes(p) && (
                <CheckCircle2 size={14} className="inline mr-1.5" />
              )}
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Detaily */}
      <div>
        <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
          Detaily objednávky
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Přibližné množství (ks)
            </label>
            <select className="input-field">
              <option value="">Vyberte...</option>
              <option>50–100 ks</option>
              <option>100–500 ks</option>
              <option>500–1 000 ks</option>
              <option>1 000–5 000 ks</option>
              <option>5 000+ ks</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Potřebný termín
            </label>
            <input
              type="date"
              className="input-field"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Popis zakázky / Váš nápad <span className="text-brand-primary">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="Popište nám váší akci, co potřebujete, jaký máte design (nebo napad), termín a cokoli dalšího, co nám pomůže připravit nabídku na míru..."
            className="input-field resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
          Odesláním souhlasíte se zpracováním osobních údajů pro účely vyřízení poptávky.
          Ozveme se do 24 hodin.
        </p>
        <button type="submit" className="btn-primary whitespace-nowrap gap-2">
          <Send size={16} />
          Odeslat poptávku
        </button>
      </div>
    </form>
  );
}

// ─────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────
export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">Kontakt</span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              Poptat výrobu
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Popište nám vaší akci a my se ozveme do 24 hodin s konkrétní nabídkou.
              Bez závazků, bez skrytých poplatků.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <FadeUp className="lg:col-span-2" delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <ContactForm />
              </div>
            </FadeUp>

            {/* Sidebar */}
            <FadeUp delay={0.2} className="space-y-6">
              {/* Contact info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-secondary text-lg mb-5">
                  Kontaktní údaje
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon size={17} className="text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-brand-secondary">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="bg-brand-secondary rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-white text-lg mb-4">
                  Proč si nás zákazníci vybírají
                </h3>
                <div className="space-y-3">
                  {[
                    "Odpovídáme do 24 hodin",
                    "Grafický návrh zdarma",
                    "Certifikované materiály",
                    "Výroba do 5 dní",
                    "Doručení po celé ČR",
                    "98 % zákazníků se vrátí",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-white/75">
                      <CheckCircle2 size={15} className="text-brand-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div className="border-2 border-brand-primary/20 rounded-2xl p-6 bg-brand-light">
                <p className="text-sm text-brand-secondary leading-relaxed">
                  <strong className="text-brand-primary">Tip:</strong> Čím více nám toho
                  sdělíte v prvním emailu, tím přesnější nabídku dostanete. Nebojte se
                  napsat i jen nápad — poradíme.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center">
            <p className="text-gray-400 text-sm mb-6">
              Raději voláte nebo píšete přímo?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420600000000"
                className="btn-outline gap-2"
              >
                <Phone size={18} />
                Zavolat: +420 600 000 000
              </a>
              <a
                href="mailto:b2b@partyskin.cz"
                className="btn-ghost gap-2"
              >
                <Mail size={18} />
                Napsat: b2b@partyskin.cz
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
