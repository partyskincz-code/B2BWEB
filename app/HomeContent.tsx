"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Star,
  ChevronRight,
  Building2,
  Heart,
  Music,
  GraduationCap,
  Store,
  Gift,
  Infinity,
  RefreshCw,
  Clock,
  Eye,
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

export default function HomePage() {
  const { t, lang } = useLanguage();

  const products = [
    {
      id: "tetovacky",
      title: lang === "cs" ? "Dočasné tetovačky" : lang === "en" ? "Temporary Tattoos" : "Dočasné tetovačky",
      subtitle: lang === "cs" ? "Nalepovací, transfer" : lang === "en" ? "Stick-on transfer" : "Nalepovací, transfer",
      description: lang === "cs"
        ? "Váš logo, motiv nebo design na kůži zákazníků. Certifikovaná výroba, bezpečné pro děti i dospělé."
        : lang === "en"
        ? "Your logo, motif or design on customers' skin. Certified production, safe for children and adults."
        : "Váš logo, motív alebo dizajn na koži zákazníkov. Certifikovaná výroba, bezpečné pre deti aj dospelých.",
      price: lang === "en" ? "from €0.30 / pc" : "od 8 Kč / ks",
      minQty: t("usp.3.title"),
      image: "/detske-tetovacky-archy.jpg",
      href: "/produkty#tetovacky",
    },
    {
      id: "samolepky",
      title: lang === "cs" ? "Samolepky na míru" : lang === "en" ? "Custom Stickers" : "Samolepky na mieru",
      subtitle: lang === "cs" ? "Vlastní tvar & materiál" : lang === "en" ? "Custom shape & material" : "Vlastný tvar & materiál",
      description: lang === "cs"
        ? "Tvarové samolepky pro branding, packaging a merch. Voděodolné, UV odolné materiály."
        : lang === "en"
        ? "Die-cut stickers for branding, packaging and merch. Waterproof, UV-resistant materials."
        : "Tvarové samolepky pre branding, packaging a merch. Vodoodolné, UV odolné materiály.",
      price: lang === "en" ? "from €0.15 / pc" : "od 4 Kč / ks",
      minQty: t("usp.3.title"),
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
      href: "/produkty#samolepky",
    },
    {
      id: "pohlednice",
      title: lang === "cs" ? "Tiskoviny na míru" : lang === "en" ? "Custom Print" : "Tlačoviny na mieru",
      subtitle: lang === "cs" ? "Pohlednice, pozvánky, vizitky" : lang === "en" ? "Postcards, invitations, cards" : "Pohľadnice, pozvánky, vizitky",
      description: lang === "cs"
        ? "Pohlednice, přání, pozvánky i vizitky s vlastním potiskem nebo podle našeho návrhu. Tiskneme už od jednoho kusu."
        : lang === "en"
        ? "Postcards, greeting cards, invitations and business cards with your own artwork or based on our design. We print from a single piece."
        : "Pohľadnice, priania, pozvánky aj vizitky s vlastným potiskom alebo podľa nášho návrhu. Tlačíme už od jedného kusu.",
      price: lang === "en" ? "from €0.45 / pc" : "od 12 Kč / ks",
      minQty: t("usp.3.title"),
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80",
      href: "/produkty#pohlednice",
    },
    {
      id: "kompletni",
      title: lang === "cs" ? "Kompletní řešení" : lang === "en" ? "Complete Solution" : "Kompletné riešenie",
      subtitle: lang === "cs" ? "Na klíč pro váš event" : lang === "en" ? "Turnkey for your event" : "Na kľúč pre váš event",
      description: lang === "cs"
        ? "Balíčky pro firemní eventy, teambuildingy, svatby nebo festivaly. Jeden dodavatel, vše vyřešeno."
        : lang === "en"
        ? "Packages for corporate events, team buildings, weddings or festivals. One supplier, everything sorted."
        : "Balíčky pre firemné eventy, teambuildingy, svadby alebo festivaly. Jeden dodávateľ, všetko vyriešené.",
      price: lang === "en" ? "Individual price" : "Individuální cena",
      minQty: lang === "cs" ? "Dle rozsahu" : lang === "en" ? "By scope" : "Podľa rozsahu",
      image: "/svatebni-tetovaci-koutek.jpg",
      href: "/produkty#kompletni",
    },
  ];

  const usps = [
    { icon: Package, title: t("usp.1.title"), desc: t("usp.1.desc") },
    { icon: Gift, title: t("usp.2.title"), desc: t("usp.2.desc") },
    { icon: Infinity, title: t("usp.3.title"), desc: t("usp.3.desc") },
    { icon: RefreshCw, title: t("usp.4.title"), desc: t("usp.4.desc") },
    { icon: Clock, title: t("usp.5.title"), desc: t("usp.5.desc") },
  ];

  const segments = [
    {
      icon: Building2,
      title: lang === "cs" ? "Firmy a značky" : lang === "en" ? "Companies & brands" : "Firmy a značky",
      desc: lang === "cs"
        ? "Firemní merch, promo kampaně, veletrhy a konference. Váš brand přesně tam, kde ho zákazníci uvidí."
        : lang === "en"
        ? "Corporate merch, promo campaigns, trade fairs and conferences. Your brand exactly where customers see it."
        : "Firemný merch, promo kampane, veľtrhy a konferencie. Váš brand presne tam, kde ho zákazníci uvidia.",
      cta: lang === "en" ? "Explore" : lang === "sk" ? "Preskúmať" : "Prozkoumat",
      href: "/tetovacky-na-firemni-event",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: lang === "cs" ? "Svatby a oslavy" : lang === "en" ? "Weddings & celebrations" : "Svadby a oslavy",
      desc: lang === "cs"
        ? "Personalizované tetovačky pro hosty, samolepky na přání, tematické doplňky pro nezapomenutelný den."
        : lang === "en"
        ? "Personalised tattoos for guests, custom stickers, themed accessories for an unforgettable day."
        : "Personalizované tetovačky pre hostí, samolepky na prianie, tematické doplnky pre nezabudnuteľný deň.",
      cta: lang === "en" ? "Shop now" : lang === "sk" ? "Nakúpiť online" : "Nakoupit online",
      href:
        lang === "sk"
          ? `https://www.partyskin.sk${UTM_B2C}`
          : `https://www.partyskin.cz/docasne-svatebni-tetovani/${UTM_B2C}`,
      external: true,
      color: "bg-pink-50",
      iconColor: "text-brand-primary",
    },
    {
      icon: Music,
      title: lang === "cs" ? "Festivaly a akce" : lang === "en" ? "Festivals & events" : "Festivaly a akcie",
      desc: lang === "cs"
        ? "Merch pro promotéry, brandingové materiály, tetovačky jako zábava pro návštěvníky."
        : lang === "en"
        ? "Merch for promoters, branding materials, tattoos as entertainment for visitors."
        : "Merch pre promotorov, brandingové materiály, tetovačky ako zábava pre návštevníkov.",
      cta: lang === "en" ? "Explore" : lang === "sk" ? "Preskúmať" : "Prozkoumat",
      href: "/tetovacky-na-festival",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: GraduationCap,
      title: lang === "cs" ? "Školy a děti" : lang === "en" ? "Schools & children" : "Školy a deti",
      desc: lang === "cs"
        ? "Bezpečné certifikované tetovačky pro školy v přírodě, dětské slavnosti a párty."
        : lang === "en"
        ? "Safe certified tattoos for outdoor schools, children's celebrations and parties."
        : "Bezpečné certifikované tetovačky pre školy v prírode, detské slávnosti a párty.",
      cta: lang === "en" ? "Explore" : lang === "sk" ? "Preskúmať" : "Prozkoumat",
      href: "/tetovacky-pro-skoly",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Store,
      title: lang === "cs" ? "Velkoobchod" : lang === "en" ? "Wholesale" : "Veľkoobchod",
      desc: lang === "cs"
        ? "Pravidelné dodávky pro maloobchodní řetězce, e-shopy a prodejny hraček."
        : lang === "en"
        ? "Regular deliveries for retail chains, e-shops and toy stores."
        : "Pravidelné dodávky pre maloobchodné reťazce, e-shopy a predajne hračiek.",
      cta: lang === "en" ? "Explore" : lang === "sk" ? "Preskúmať" : "Prozkoumat",
      href: "/produkty#obchody",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const testimonials = [
    {
      text: "Spolupráce byla od začátku do konce naprosto profesionální – trpělivost při zapracování připomínek, ochota i rychlá komunikace. Spolehlivého partnera pro zakázková dočasná tetování můžeme s čistým svědomím doporučit.",
      author: "Mgr. Alena Dolinová",
      org: "Gepard Express, SE",
      orgFull: "Gepard Express / Úzkokolejka Jindřichův Hradec",
      website: "",
      logo: "",
      initials: "GE",
      rating: 5,
    },
    {
      text: "Realizace byla velmi rychlá a tetovačky dorazily už nastříhané – to nám při krátkém termínu výrazně usnadnilo práci. Krásné syté barvy, kvalitní pigment, skvělá aplikace. Rádi si objednáme znovu.",
      author: "Mgr. Alena Ryšavá, MBA",
      org: "HK Mladí Draci Šumperk",
      orgFull: "HK Mladí Draci Šumperk",
      website: "",
      logo: "",
      initials: "HK",
      rating: 5,
    },
    {
      text: "V neuvěřitelně krátkém čase nám báječné ženy z PartySkin.cz připravily a dodaly dočasné tetovačky s obrázky našich stálých obyvatel, které jsou opravdu krásné a skvěle drží! Dělají tak radost malým návštěvníkům naší Expozice zvířat s příběhem, kteří se nákupem téhle drobnosti rozhodnou podpořit péči o živočichy v naší záchranné stanici. Děkujeme týmu PartySkin.cz za super spolupráci a podporu!",
      author: lang === "en" ? "Záchranná stanice Vydra Třeboň" : "Záchranná stanice Vydra Třeboň",
      org: "Ekocentrum Vydra",
      orgFull: "Záchranná stanice Vydra, Třeboň",
      website: "https://www.ekocentrumvydra.cz",
      logo: "",
      initials: "EV",
      rating: 5,
    },
    {
      text: "Jsme moc spokojení, rádi využijeme vašich služeb znovu.",
      author: "Mgr. Anna Lazorová",
      org: "NaZemi",
      orgFull: "NaZemi",
      website: "https://nazemi.cz",
      logo: "/logo-nazemi.jpg",
      initials: "NZ",
      rating: 5,
    },
  ];

  const eventTypes = lang === "en"
    ? ["Corporate event", "Team building", "Festival", "Trade fair", "Conference", "Wedding", "Brand launch", "Children's party", "Sports event"]
    : lang === "sk"
    ? ["Firemný event", "Teambuilding", "Festival", "Veľtrh", "Konferencia", "Svadba", "Brand launch", "Detská párty", "Športová akcia"]
    : ["Firemní event", "Teambuilding", "Festival", "Veletrh", "Konference", "Svatba", "Brand launch", "Dětská party", "Sportovní akce"];

  const clientLogos = [
    { name: "Gepard Express", url: "" },
    { name: "HK Mladí Draci Šumperk", url: "" },
    { name: "Záchranná stanice Vydra", url: "https://www.ekocentrumvydra.cz" },
    { name: "NaZemi", url: "https://nazemi.cz" },
    { name: "MOREAU AGRI", url: "https://www.moreauagri.cz" },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-light">
        {/* Subtle dot texture on light background */}
        <div className="absolute inset-0 dot-pattern opacity-40" />

        {/* Right-side photo */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] pointer-events-none">
          <Image
            src="/hero.jpg"
            alt="Lidé na firemním eventu s dočasnými tetovačkami"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Blend left edge into brand-light */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/55 lg:via-brand-light/20 to-transparent" />
          {/* Subtle warm tint */}
          <div className="absolute inset-0 bg-brand-primary/10" />
        </div>

        {/* Stamp, bottom right of photo */}
        <div className="absolute bottom-20 right-6 sm:right-14 opacity-80 rotate-[-6deg] select-none pointer-events-none hidden sm:block">
          <div className="border-[3px] border-brand-primary rounded-xl px-4 py-2 text-center bg-white/10 backdrop-blur-sm">
            <Image
              src="/logo-partyskin.png"
              alt="PartySkin"
              width={391}
              height={238}
              className="h-10 w-auto mx-auto opacity-90"
            />
            <p className="text-brand-secondary/70 text-[9px] font-semibold tracking-[0.2em] uppercase mt-1">temporary tattoos</p>
          </div>
        </div>

        {/* Left-side content */}
        <div className="relative z-10 container-pad w-full pt-28 pb-20">
          <div className="max-w-xl lg:max-w-[46%]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-brand-primary font-semibold text-sm uppercase tracking-widest mb-5"
            >
              PartySkin B2B
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-display font-extrabold text-brand-secondary leading-[1.05] mb-6 text-balance"
            >
              {t("hero.h1a")}{" "}
              <span className="text-brand-primary">{t("hero.h1b")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-brand-secondary/65 mb-10 leading-relaxed"
            >
              {t("hero.sub")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/kontakt" className="btn-primary text-base px-8 py-4 gap-2">
                {t("hero.cta.primary")}
                <ArrowRight size={18} />
              </Link>
              <Link href="/produkty" className="btn-outline text-base px-8 py-4">
                {t("hero.cta.secondary")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mt-12"
            >
              {[t("hero.badge.1"), t("hero.badge.2"), t("hero.badge.3")].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-brand-secondary/60 text-sm">
                  <CheckCircle2 size={15} className="text-brand-primary shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-brand-secondary/30 text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-secondary/30 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ═══ USP ═══ */}
      <section className="py-20 bg-brand-secondary overflow-hidden relative">
        {/* subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px"}} />
        <div className="container-pad relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {usps.map((usp, i) => (
              <FadeUp key={usp.title} delay={i * 0.1}>
                <div className="group flex flex-col gap-5 p-8 lg:p-10 bg-brand-secondary hover:bg-brand-primary transition-colors duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <usp.icon size={26} className="text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-white text-lg leading-tight">{usp.title}</h3>
                    <p className="text-white/60 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">{usp.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STORYTELLING ═══ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.1}>
              <span className="tag mb-4">{t("story.tag")}</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
                {t("story.h2a")}{" "}
                <span className="text-brand-primary">{t("story.h2b")}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("story.p1")}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {eventTypes.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 rounded-full bg-brand-light text-brand-secondary text-xs font-semibold border border-brand-primary/15"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="space-y-3">
                {[t("story.check.1"), t("story.check.2"), t("story.check.3"), t("story.check.4")].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/realizace-prebal-b2b-a5.jpg"
                    alt="Dočasné tetovačky s logem klienta v brandovaném přebalu A5"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ VÝHODY ═══ */}
      <section className="py-16 bg-brand-light">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mb-3">
              {t("vyhody.h2")}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("vyhody.sub")}</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Gift, titleKey: "vyhody.1.title", descKey: "vyhody.1.desc", ctaKey: "vyhody.1.cta" },
              { icon: Infinity, titleKey: "vyhody.2.title", descKey: "vyhody.2.desc", ctaKey: "vyhody.2.cta" },
              { icon: Eye, titleKey: "vyhody.3.title", descKey: "vyhody.3.desc", ctaKey: "vyhody.3.cta" },
            ].map((card, i) => (
              <FadeUp key={card.titleKey} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-brand-primary/10 h-full flex flex-col card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-5">
                    <card.icon size={26} className="text-brand-primary" />
                  </div>
                  <h3 className="font-display font-bold text-brand-secondary text-xl mb-3">{t(card.titleKey)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{t(card.descKey)}</p>
                  <Link href="/kontakt" className="text-sm font-semibold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                    {t(card.ctaKey)} <ArrowRight size={15} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUKTY GRID ═══ */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">{t("products.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {t("products.h2")}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("products.sub")}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <FadeUp key={product.id} delay={i * 0.1}>
                <Link href={product.href} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <Image src={product.image} alt={product.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.subtitle}</p>
                      <h3 className="font-display font-bold text-brand-secondary text-lg mb-2">{product.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-brand-primary font-bold text-base">{product.price}</p>
                          <p className="text-gray-400 text-xs">{product.minQty}</p>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-200">
                          <ChevronRight size={18} className="text-brand-primary group-hover:text-white transition-colors" />
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
              {t("products.cta")}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SEGMENTY ═══ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">{t("segments.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {t("segments.h2")}
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">{t("segments.sub")}</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {segments.map((seg, i) => {
              const cardInner = (
                <div className={`${seg.color} rounded-2xl p-7 card-hover h-full flex flex-col`}>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                    <seg.icon size={24} className={seg.iconColor} />
                  </div>
                  <h3 className="font-display font-bold text-brand-secondary text-xl mb-2">{seg.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{seg.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-brand-primary gap-1 group-hover:gap-2 transition-all">
                    {seg.cta}
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
              return (
                <FadeUp key={seg.title} delay={i * 0.08}>
                  {seg.external ? (
                    <a href={seg.href} target="_blank" rel="noopener noreferrer" className="group block">
                      {cardInner}
                    </a>
                  ) : (
                    <Link href={seg.href} className="group block">
                      {cardInner}
                    </Link>
                  )}
                </FadeUp>
              );
            })}
          </div>

          {/* B2C e-shop banner */}
          <FadeUp className="mt-8">
            <div className="rounded-2xl bg-gradient-to-r from-brand-light to-pink-50 border border-brand-primary/15 overflow-hidden flex flex-col sm:flex-row items-stretch">
              {/* Image */}
              <div className="relative w-full sm:w-52 h-40 sm:h-auto flex-shrink-0">
                <Image
                  src="/eshop-nahled.jpg"
                  alt="Tetovačky pro každou oslavu"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Text + CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 flex-1">
                <div>
                  <p className="font-display font-bold text-brand-secondary text-lg leading-snug mb-2">
                    {lang === "en"
                      ? "Tattoos for every celebration"
                      : lang === "sk"
                      ? "Tetovačky pre každú oslavu"
                      : "Tetovačky pro každou oslavu"}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    {lang === "en"
                      ? "Small quantities, quick ordering and hundreds of ready-made designs. Pick your favourite directly in our e-shop."
                      : lang === "sk"
                      ? "Malé množstvo, rýchle objednanie a stovky hotových motívov. Vyberte si svoje obľúbené priamo v našom e-shope."
                      : "Malé množství, rychlé objednání a stovky hotových motivů. Vyberte si své oblíbené přímo v našem e-shopu."}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={lang === "sk" ? "https://www.partyskin.sk" : "https://www.partyskin.cz"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap"
                  >
                    {lang === "en"
                      ? "Choose your tattoos"
                      : lang === "sk"
                      ? "Vybrať si tetovačky"
                      : "Vybrat si tetovačky"}
                    <ArrowRight size={15} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ PROCES ═══ */}
      <section className="section-pad bg-brand-secondary relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl" />

        <div className="relative z-10 container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag bg-white/10 text-white border border-white/20 mb-4">{t("process.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 mb-4">{t("process.h2")}</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">{t("process.sub")}</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent" />
            {(["1", "2", "3"] as const).map((num, i) => (
              <FadeUp key={num} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex flex-col items-center justify-center mx-auto mb-6">
                    <span className="text-xs text-brand-primary/60 font-semibold tracking-widest uppercase">{t("process.step")}</span>
                    <span className="text-3xl font-display font-extrabold text-brand-primary leading-none">0{num}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3">{t(`process.${num}.title`)}</h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto">{t(`process.${num}.desc`)}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-12">
            <Link href="/jak-to-funguje" className="btn-primary">
              {t("process.cta")}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-pad bg-brand-light/40">
        <div className="container-pad">
          <FadeUp className="text-center mb-14">
            <span className="tag mb-4">{t("testimonials.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {t("testimonials.h2")}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((testimonial, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-brand-primary/20 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                  <div className="p-7 flex flex-col flex-1">
                    {/* logo + stars */}
                    <div className="flex items-center gap-4 mb-5">
                      {testimonial.logo ? (
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-white flex items-center justify-center">
                          <Image src={testimonial.logo} alt={testimonial.org} width={48} height={48} className="object-contain" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-display font-extrabold text-sm">{testimonial.initials}</span>
                        </div>
                      )}
                      <div>
                        <p className="font-display font-bold text-brand-secondary text-sm leading-tight">{testimonial.org}</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <Star key={j} size={13} className="fill-brand-gold text-brand-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* quote */}
                    <div className="relative flex-1 mb-5">
                      <span className="absolute -top-2 -left-1 text-5xl font-display text-brand-primary/20 leading-none select-none">&ldquo;</span>
                      <p className="text-gray-700 text-sm leading-relaxed pl-5 italic">{testimonial.text}</p>
                    </div>
                    {/* author */}
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-brand-secondary text-sm">{testimonial.author}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{testimonial.orgFull}</p>
                      </div>
                      {testimonial.website && (
                        <a
                          href={testimonial.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-primary text-xs hover:underline flex-shrink-0 ml-3"
                        >
                          {testimonial.website.replace("https://www.", "").replace("https://", "")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="border-t border-gray-100 pt-10">
              <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
                {lang === "en" ? "Trusted by" : lang === "sk" ? "Dôverujú nám" : "Důvěřují nám"}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {clientLogos.map((logo) =>
                  logo.url ? (
                    <a
                      key={logo.name}
                      href={logo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-400 font-semibold text-sm hover:border-brand-primary/30 hover:text-brand-primary transition-all duration-200"
                    >
                      {logo.name}
                    </a>
                  ) : (
                    <div
                      key={logo.name}
                      className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 text-gray-400 font-semibold text-sm"
                    >
                      {logo.name}
                    </div>
                  )
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ GALERIE ═══ */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <span className="tag mb-4">{t("gallery.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mt-3 mb-4">
              {t("gallery.h2")}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { url: "/realizace-prebal-b2b-a5.jpg", alt: "got2b brandované tetovačky A5" },
              { url: "/realizace-detske-prebal-a6.jpg", alt: "Dětské tetovačky A6 kolekce" },
              { url: "/realizace-prebal-a5.jpg", alt: "Velikonoční edice A5" },
              { url: "/realizace-papirovy-prebal.jpg", alt: "Tetovačky s jednorožci" },
              { url: "/realizace-prebal-b2b-a5-zadni.jpg", alt: "got2b obal zadní strana" },
              { url: "/svatebni-tetovaci-koutek.jpg", alt: "Svatební tetovací koutek se zrcadlem a archy tetovaček" },
              { url: "/realizace-detske-prebal-a6.jpg", alt: "Dětské tetovačky balení" },
              { url: "/nanaseni-tetovacky.jpg", alt: "Nanášení dočasné tetovačky na zápěstí" },
            ].map((img, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                  <Image src={img.url} alt={img.alt} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-all duration-300" />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-10">
            <Link href="/reference" className="btn-ghost">
              {t("gallery.cta")}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ PODPORUJEME ═══ */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container-pad">
          <FadeUp className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
            <div className="flex-shrink-0 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                {lang === "en" ? "We support" : lang === "sk" ? "Podporujeme" : "Podporujeme"}
              </p>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block flex-shrink-0" />
            <a
              href="https://www.amalthea.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-gray-100 hover:border-brand-primary/30 bg-gray-50 hover:bg-brand-light/30 transition-all px-6 py-4 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-display font-extrabold text-lg">a</span>
              </div>
              <div>
                <p className="font-display font-bold text-brand-secondary text-base group-hover:text-brand-primary transition-colors">
                  Amalthea z.s.
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {lang === "en"
                    ? "Supporting children and families in need"
                    : lang === "sk"
                    ? "Podpora detí a rodín v núdzi"
                    : "Pomoc dětem a rodinám, které to potřebují"}
                </p>
              </div>
              <span className="ml-auto text-gray-300 group-hover:text-brand-primary transition-colors text-lg">→</span>
            </a>
            <a
              href="https://www.anidef.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-gray-100 hover:border-brand-primary/30 bg-gray-50 hover:bg-brand-light/30 transition-all px-6 py-4 w-full sm:w-auto"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-display font-extrabold text-lg">A</span>
              </div>
              <div>
                <p className="font-display font-bold text-brand-secondary text-base group-hover:text-brand-primary transition-colors">
                  AniDef, z.s.
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {lang === "en"
                    ? "Shelter for abandoned animals in Žim"
                    : lang === "sk"
                    ? "Útulok pre opustené zvieratá v Žime"
                    : "Útulek pro opuštěná zvířata v Žimu"}
                </p>
              </div>
              <span className="ml-auto text-gray-300 group-hover:text-brand-primary transition-colors text-lg">→</span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="bg-gradient-to-br from-brand-primary to-[#593027] rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-20 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 leading-tight">{t("cta.h2")}</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">{t("cta.p")}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {[t("cta.badge.1"), t("cta.badge.2"), t("cta.badge.3")].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle2 size={16} className="text-white/60 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/20">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/40">
                    <Image src="/jana-budinova.jpg" alt="Jana Budínová, PartySkin" fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {lang === "en"
                        ? "I handle every inquiry personally, from the first email to delivery."
                        : lang === "sk"
                        ? "Každý dopyt vybavujem osobne, od prvého e-mailu po doručenie."
                        : "Každou poptávku vyřizuji osobně, od prvního e-mailu po dodání."}
                    </p>
                    <p className="text-white font-display font-bold text-sm mt-1">Jana Budínová</p>
                    <p className="text-white/60 text-xs">PartySkin</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-auto lg:min-w-[340px] bg-white rounded-2xl p-6 shadow-2xl">
                <QuickContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-12 bg-brand-secondary">
        <div className="container-pad">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {(["1", "2", "3", "4"] as const).map((num, i) => (
              <FadeUp key={num} delay={i * 0.08}>
                <div className="text-center">
                  <p className="text-4xl font-display font-extrabold text-brand-primary mb-1">{t(`stats.${num}.value`)}</p>
                  <p className="text-white/50 text-sm">{t(`stats.${num}.label`)}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function QuickContactForm() {
  const { t } = useLanguage();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(t("form.success"));
      }}
      className="flex flex-col gap-3"
    >
      <p className="font-display font-bold text-brand-secondary text-lg mb-1">{t("form.title")}</p>
      <input type="text" placeholder={t("form.name")} required className="input-field text-sm" />
      <input type="email" placeholder={t("form.email")} required className="input-field text-sm" />
      <input type="tel" placeholder={t("form.phone")} className="input-field text-sm" />
      <textarea placeholder={t("form.message")} rows={3} className="input-field text-sm resize-none" />
      <button type="submit" className="btn-primary w-full mt-1">
        {t("form.submit")}
        <ArrowRight size={16} className="ml-2" />
      </button>
      <p className="text-gray-400 text-xs text-center">{t("form.note")}</p>
    </form>
  );
}
