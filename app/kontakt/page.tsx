"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
  Send,
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
export default function KontaktPage() {
  const { t, lang } = useLanguage();

  // ─── Data arrays (inside component to access lang) ───
  const productTypes = [
    lang === "en" ? "Temporary tattoos" : "Dočasné tetovačky",
    lang === "en" ? "Stickers" : lang === "sk" ? "Samolepky" : "Samolepky",
    lang === "en" ? "Postcards" : lang === "sk" ? "Pohľadnice" : "Pohlednice",
    lang === "en"
      ? "Complete solution"
      : lang === "sk"
      ? "Kompletné riešenie"
      : "Kompletní řešení",
  ];

  const segmentTypes = [
    {
      label: lang === "en" ? "Company" : lang === "sk" ? "Firma" : "Firma",
      icon: Building2,
    },
    {
      label: lang === "en" ? "Event" : lang === "sk" ? "Event" : "Event",
      icon: Music,
    },
    {
      label: lang === "en" ? "Wedding" : lang === "sk" ? "Svadba" : "Svatba",
      icon: Heart,
    },
    {
      label: lang === "en" ? "Festival" : lang === "sk" ? "Festival" : "Festival",
      icon: Music,
    },
    {
      label: lang === "en" ? "School" : lang === "sk" ? "Škola" : "Škola",
      icon: GraduationCap,
    },
    {
      label: lang === "en" ? "Other" : lang === "sk" ? "Iné" : "Jiné",
      icon: Store,
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "objednavky@partyskin.cz",
      href: "mailto:objednavky@partyskin.cz",
    },
    {
      icon: MapPin,
      label:
        lang === "en"
          ? "Headquarters"
          : lang === "sk"
          ? "Sídlo"
          : "Sídlo",
      value:
        lang === "en"
          ? "Prague, Czech Republic"
          : lang === "sk"
          ? "Praha, Česká republika"
          : "Praha, Česká republika",
      href: null,
    },
    {
      icon: Clock,
      label:
        lang === "en"
          ? "Business hours"
          : lang === "sk"
          ? "Pracovná doba"
          : "Pracovní doba",
      value:
        lang === "en"
          ? "Mon–Fri: 9:00–17:00"
          : lang === "sk"
          ? "Po–Pia: 9:00–17:00"
          : "Po–Pá: 9:00–17:00",
      href: null,
    },
  ];

  const whyUsItems =
    lang === "en"
      ? [
          "No minimum order quantity",
          "Czech brand with a personal approach",
          "Artwork check before production",
          "Certified and safe materials",
          "Full-colour print including white ink",
          "Fast production and delivery times",
        ]
      : lang === "sk"
      ? [
          "Bez minimálneho množstva objednávky",
          "Česká značka s osobným prístupom",
          "Kontrola podkladov pred výrobou",
          "Certifikované a bezpečné materiály",
          "Plnofarebná tlač vrátane bielej farby",
          "Rýchle termíny výroby a doručenia",
        ]
      : [
          "Bez minimálního množství objednávky",
          "Česká značka s osobním přístupem",
          "Kontrola podkladů před výrobou",
          "Certifikované a bezpečné materiály",
          "Plnobarevný tisk včetně bílé barvy",
          "Rychlé termíny výroby a dodání",
        ];

  // ─── Inline form component (defined inside page to access lang) ───
  function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

    const toggleProduct = (p: string) => {
      setSelectedProducts((prev) =>
        prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
      );
    };

    const errorText =
      lang === "en"
        ? "The inquiry could not be sent. Please write to us directly at objednavky@partyskin.cz."
        : lang === "sk"
        ? "Dopyt sa nepodarilo odoslať. Napíšte nám prosím priamo na objednavky@partyskin.cz."
        : "Poptávku se nepodařilo odeslat. Napište nám prosím přímo na objednavky@partyskin.cz.";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      setError(null);
      setSending(true);
      try {
        if (!accessKey) throw new Error("Missing NEXT_PUBLIC_WEB3FORMS_KEY");

        const data = new FormData(form);
        data.append("access_key", accessKey);
        data.append("from_name", "makethemoment.cz");
        data.append(
          "subject",
          `Nová poptávka z webu — ${selectedSegment ?? "neuvedeno"}` +
            (selectedProducts.length ? `, ${selectedProducts.join(", ")}` : "")
        );
        data.append("Segment", selectedSegment ?? "neuvedeno");
        data.append(
          "Produkty",
          selectedProducts.length ? selectedProducts.join(", ") : "neuvedeno"
        );
        data.append("Jazyk webu", lang);

        const email = data.get("email");
        if (typeof email === "string" && email) data.append("replyto", email);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        const json = await res.json().catch(() => null);
        if (!res.ok || !json?.success) throw new Error("Web3Forms rejected the submission");

        form.reset();
        setSelectedProducts([]);
        setSelectedSegment(null);
        setSubmitted(true);
      } catch (err) {
        console.error("Contact form submit failed:", err);
        setError(errorText);
      } finally {
        setSending(false);
      }
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
            {lang === "en"
              ? "Inquiry sent!"
              : lang === "sk"
              ? "Dopyt odoslaný!"
              : "Poptávka odeslána!"}
          </h3>
          <p className="text-gray-500 leading-relaxed max-w-sm">
            {lang === "en" ? (
              <>
                Thank you for your interest. We will get back to you within{" "}
                <strong>24 hours</strong> with a custom offer for your event.
              </>
            ) : lang === "sk" ? (
              <>
                Ďakujeme za záujem. Ozveme sa vám do{" "}
                <strong>24 hodín</strong> s ponukou priamo na mieru vašej akcie.
              </>
            ) : (
              <>
                Děkujeme za zájem. Ozveme se vám do{" "}
                <strong>24 hodin</strong> s nabídkou přímo na míru vaší akce.
              </>
            )}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-brand-primary text-sm font-medium hover:underline"
          >
            {lang === "en"
              ? "Send another inquiry"
              : lang === "sk"
              ? "Odoslať ďalší dopyt"
              : "Odeslat další poptávku"}
          </button>
        </motion.div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* honeypot — hidden from users, filled only by bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        {/* Contact details */}
        <div>
          <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
            {lang === "en"
              ? "Contact details"
              : lang === "sk"
              ? "Kontaktné údaje"
              : "Kontaktní údaje"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Full name"
                  : lang === "sk"
                  ? "Meno a priezvisko"
                  : "Jméno a příjmení"}{" "}
                <span className="text-brand-primary">*</span>
              </label>
              <input
                type="text"
                name="Jméno a příjmení"
                required
                placeholder={
                  lang === "en"
                    ? "John Smith"
                    : lang === "sk"
                    ? "Ján Novák"
                    : "Jan Novák"
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Company name"
                  : lang === "sk"
                  ? "Názov firmy"
                  : "Název firmy"}
              </label>
              <input
                type="text"
                name="Firma"
                placeholder={
                  lang === "en"
                    ? "TechCorp Ltd."
                    : lang === "sk"
                    ? "TechCorp s.r.o."
                    : "TechCorp s.r.o."
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Email address"
                  : lang === "sk"
                  ? "E-mailová adresa"
                  : "E-mailová adresa"}{" "}
                <span className="text-brand-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={
                  lang === "en"
                    ? "john@company.com"
                    : lang === "sk"
                    ? "jan@firma.sk"
                    : "jan@firma.cz"
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Phone"
                  : lang === "sk"
                  ? "Telefón"
                  : "Telefon"}
              </label>
              <input
                type="tel"
                name="Telefon"
                placeholder="+420 600 000 000"
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Segment */}
        <div>
          <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
            {lang === "en"
              ? "I am a..."
              : lang === "sk"
              ? "Som..."
              : "Jsem..."}
          </h3>
          <div className="flex flex-wrap gap-2">
            {segmentTypes.map((seg) => (
              <button
                key={seg.label}
                type="button"
                onClick={() =>
                  setSelectedSegment(
                    seg.label === selectedSegment ? null : seg.label
                  )
                }
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

        {/* Products */}
        <div>
          <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
            {lang === "en"
              ? "Which products are you interested in?"
              : lang === "sk"
              ? "O aký produkt máte záujem?"
              : "O jaký produkt máte zájem?"}{" "}
            <span className="text-sm font-normal text-gray-400">
              {lang === "en"
                ? "(multiple allowed)"
                : lang === "sk"
                ? "(možno vybrať viac)"
                : "(lze vybrat více)"}
            </span>
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

        {/* Order details */}
        <div>
          <h3 className="font-display font-bold text-brand-secondary text-lg mb-4">
            {lang === "en"
              ? "Order details"
              : lang === "sk"
              ? "Detaily objednávky"
              : "Detaily objednávky"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Estimated quantity"
                  : lang === "sk"
                  ? "Odhadované množstvo"
                  : "Odhadované množství"}
              </label>
              <select name="Množství" className="input-field">
                <option value="">
                  {lang === "en" ? "Select..." : "Vyberte..."}
                </option>
                <option>1–10 {lang === "en" ? "pcs" : "ks"}</option>
                <option>10–50 {lang === "en" ? "pcs" : "ks"}</option>
                <option>50–100 {lang === "en" ? "pcs" : "ks"}</option>
                <option>100–500 {lang === "en" ? "pcs" : "ks"}</option>
                <option>500–1 000 {lang === "en" ? "pcs" : "ks"}</option>
                <option>1 000–5 000 {lang === "en" ? "pcs" : "ks"}</option>
                <option>5 000+ {lang === "en" ? "pcs" : "ks"}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {lang === "en"
                  ? "Event date"
                  : lang === "sk"
                  ? "Termín akcie"
                  : "Termín akce"}
              </label>
              <input
                type="date"
                name="Termín akce"
                className="input-field"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {lang === "en"
                ? "Project description"
                : lang === "sk"
                ? "Popis zámeru"
                : "Popis záměru"}{" "}
              <span className="text-brand-primary">*</span>
            </label>
            <textarea
              name="Popis záměru"
              required
              rows={5}
              placeholder={
                lang === "en"
                  ? "Describe your event and we'll get back to you within 24 hours with a custom quote."
                  : lang === "sk"
                  ? "Opíšte nám vašu akciu a ozveme sa do 24 hodín s ponukou na mieru."
                  : "Popište nám vaší akci..."
              }
              className="input-field resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
            {lang === "en"
              ? "By submitting you agree to the processing of personal data for inquiry purposes. "
              : lang === "sk"
              ? "Odoslaním súhlasíte so spracovaním osobných údajov na účely vybavenia dopytu. "
              : "Odesláním souhlasíte se zpracováním osobních údajů pro účely vyřízení poptávky. "}
            {lang === "en"
              ? "We'll respond within 24 hours."
              : lang === "sk"
              ? "Ozveme sa do 24 hodín."
              : "Ozveme se do 24 hodin."}
          </p>
          <button
            type="submit"
            disabled={sending}
            className="btn-primary whitespace-nowrap gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {sending
              ? lang === "en"
                ? "Sending…"
                : lang === "sk"
                ? "Odosielam…"
                : "Odesílám…"
              : lang === "en"
              ? "Send inquiry"
              : lang === "sk"
              ? "Odoslať dopyt"
              : "Odeslat poptávku"}
          </button>
        </div>

        {error && (
          <p
            role="alert"
            className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
          >
            {error}
          </p>
        )}
      </form>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">
              {lang === "en" ? "Get in touch" : lang === "sk" ? "Napíšte nám" : "Napište nám"}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              {lang === "en"
                ? "Get your no-obligation quote"
                : lang === "sk"
                ? "Nechajte si pripraviť nezáväznú ponuku"
                : "Nechte si připravit nezávaznou nabídku"}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              {lang === "en"
                ? "Send us your logo, artwork or just a rough idea. We'll prepare a format recommendation, quote and production timeline. We usually reply the same working day."
                : lang === "sk"
                ? "Pošlite nám logo, grafiku alebo len stručnú predstavu. Pripravíme odporúčanie formátu, kalkuláciu aj termín výroby. Odpovedáme spravidla ešte ten istý pracovný deň."
                : "Pošlete nám logo, grafiku nebo jen stručnou představu. Připravíme doporučení formátu, kalkulaci i termín výroby. Odpovídáme zpravidla ještě tentýž pracovní den."}
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
                <div className="mb-6">
                  <span className="tag mb-2">
                    {lang === "en"
                      ? "Contact"
                      : lang === "sk"
                      ? "Kontakt"
                      : "Kontakt"}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-brand-secondary mt-2">
                    {lang === "en"
                      ? "Request a quote"
                      : lang === "sk"
                      ? "Dopytujte výrobu"
                      : "Poptejte výrobu"}
                  </h2>
                </div>
                <ContactForm />
              </div>

              <div className="mt-6 bg-brand-light border border-brand-primary/20 rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-secondary text-base mb-2">
                  {lang === "en"
                    ? "Ordering just a few pieces for yourself?"
                    : lang === "sk"
                    ? "Objednávate len pár kusov pre seba?"
                    : "Objednáváte jen pár kusů pro sebe?"}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {lang === "en"
                    ? "You don't have to wait for a quote. Pick a ready-made design or upload your own photo or logo in our consumer e-shop and order straight away."
                    : lang === "sk"
                    ? "Nemusíte čakať na ponuku. Vyberte si hotový motív alebo nahrajte vlastnú fotku či logo v našom e-shope a objednajte ihneď."
                    : "Nemusíte čekat na nabídku. Vyberte si hotový motiv nebo nahrajte vlastní fotku či logo v našem e-shopu a objednejte hned."}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <a
                    href={
                      lang === "sk"
                        ? `https://www.partyskin.sk${UTM_B2C}`
                        : `https://www.partyskin.cz${UTM_B2C}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline"
                  >
                    {lang === "en"
                      ? "Ready-made designs →"
                      : lang === "sk"
                      ? "Hotové motívy →"
                      : "Hotové motivy →"}
                  </a>
                  <a
                    href={
                      lang === "sk"
                        ? `https://www.partyskin.sk${UTM_B2C}`
                        : `https://www.partyskin.cz/tetovani-na-miru-z-fotky-a-loga/${UTM_B2C}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:underline"
                  >
                    {lang === "en"
                      ? "Tattoos from your own photo or logo →"
                      : lang === "sk"
                      ? "Tetovačky z vlastnej fotky či loga →"
                      : "Tetovačky z vlastní fotky nebo loga →"}
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Sidebar */}
            <FadeUp delay={0.2} className="space-y-6">
              {/* Team contact card */}
              <div className="rounded-2xl bg-brand-secondary p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-primary/60 bg-brand-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-xl text-brand-primary">J</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-base leading-tight">Jana Budínová</p>
                    <p className="text-white/60 text-xs mt-0.5">PartySkin</p>
                  </div>
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-4">
                  {lang === "en"
                    ? "Our team takes care of every inquiry personally. Don't hesitate to write — even with just a rough idea. We'll get back to you the same day."
                    : lang === "sk"
                    ? "Každý dopyt vybavujeme osobne. Neváhajte napísať — aj keď máte zatiaľ len hrubú predstavu. Ozveme sa ešte ten deň."
                    : "Každou poptávku vyřizujeme osobně. Neváhejte napsat — i s jen hrubou představou. Ozveme se ještě ten den."}
                </p>
                <a
                  href="mailto:objednavky@partyskin.cz"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-primary/90 transition-colors w-full justify-center"
                >
                  <Mail size={15} />
                  objednavky@partyskin.cz
                </a>
              </div>

              {/* Contact info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-display font-bold text-brand-secondary text-lg mb-5">
                  {lang === "en"
                    ? "Contact information"
                    : lang === "sk"
                    ? "Kontaktné údaje"
                    : "Kontaktní údaje"}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon size={17} className="text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-brand-secondary hover:text-brand-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-brand-secondary">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="bg-brand-secondary rounded-2xl p-6 text-white">
                <h3 className="font-display font-bold text-white text-lg mb-4">
                  {lang === "en"
                    ? "Why customers choose us"
                    : lang === "sk"
                    ? "Prečo si nás zákazníci vyberajú"
                    : "Proč si nás zákazníci vybírají"}
                </h3>
                <div className="space-y-3">
                  {whyUsItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-white/75"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-brand-primary flex-shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick note */}
              <div className="border-2 border-brand-primary/20 rounded-2xl p-6 bg-brand-light">
                <p className="text-sm text-brand-secondary leading-relaxed">
                  <strong className="text-brand-primary">
                    {lang === "en" ? "Tip:" : lang === "sk" ? "Tip:" : "Tip:"}
                  </strong>{" "}
                  {lang === "en"
                    ? "The more you tell us in the first message, the more accurate offer you'll get. Don't be afraid to just share an idea — we'll help."
                    : lang === "sk"
                    ? "Čím viac nám poviete v prvom e-maile, tým presnejšiu ponuku dostanete. Nebojte sa napísať len nápad — poradíme."
                    : "Čím více nám toho sdělíte v prvním emailu, tím přesnější nabídku dostanete. Nebojte se napsat i jen nápad — poradíme."}
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
              {lang === "en"
                ? "Prefer to call or write directly?"
                : lang === "sk"
                ? "Radšej voláte alebo píšete priamo?"
                : "Raději voláte nebo píšete přímo?"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:objednavky@partyskin.cz" className="btn-primary gap-2">
                <Mail size={18} />
                objednavky@partyskin.cz
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
