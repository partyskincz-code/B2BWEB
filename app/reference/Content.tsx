"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

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

export default function ReferencePage() {
  const { lang } = useLanguage();

  const reference = [
    {
      text: "Spolupráce byla od začátku do konce naprosto profesionální – trpělivost při zapracování připomínek, ochota i rychlá komunikace. Spolehlivého partnera pro zakázková dočasná tetování můžeme s čistým svědomím doporučit.",
      author: "Mgr. Alena Dolinová",
      org: "Gepard Express, SE",
      orgFull: "Gepard Express / Úzkokolejka Jindřichův Hradec",
      website: "",
      initials: "GE",
    },
    {
      text: "Realizace byla velmi rychlá a tetovačky dorazily už nastříhané – to nám při krátkém termínu výrazně usnadnilo práci. Krásné syté barvy, kvalitní pigment, skvělá aplikace. Rádi si objednáme znovu.",
      author: "Mgr. Alena Ryšavá, MBA",
      org: "HK Mladí Draci Šumperk",
      orgFull: "HK Mladí Draci Šumperk",
      website: "https://www.hkmdsumperk.cz",
      initials: "HK",
    },
    {
      text: "V neuvěřitelně krátkém čase nám báječné ženy z PartySkin.cz připravily a dodaly dočasné tetovačky s obrázky našich stálých obyvatel, které jsou opravdu krásné a skvěle drží! Dělají tak radost malým návštěvníkům naší Expozice zvířat s příběhem. Děkujeme týmu PartySkin.cz za super spolupráci a podporu!",
      author: "Záchranná stanice Vydra Třeboň",
      org: "Ekocentrum Vydra",
      orgFull: "Záchranná stanice Vydra, Třeboň",
      website: "https://www.ekocentrumvydra.cz",
      initials: "EV",
    },
    {
      text: "Jsme moc spokojení, rádi využijeme vašich služeb znovu.",
      author: "Mgr. Anna Lazorová",
      org: "NaZemi",
      orgFull: "NaZemi",
      website: "https://nazemi.cz",
      initials: "NZ",
    },
  ];

  const klienti = [
    { name: "got2b", url: "" },
    { name: "MOREAU AGRI", url: "https://www.moreauagri.cz" },
    { name: "Gepard Express", url: "" },
    { name: "HK Mladí Draci Šumperk", url: "https://www.hkmdsumperk.cz" },
    { name: "Záchranná stanice Vydra", url: "https://www.ekocentrumvydra.cz" },
    { name: "NaZemi", url: "https://nazemi.cz" },
  ];

  const photos = [
    {
      src: "/realizace-prebal-b2b-a5.jpg",
      title:
        lang === "en"
          ? "got2b, Branded tattoo sheet A5"
          : lang === "sk"
          ? "got2b, Brandované tetovačky A5"
          : "got2b, Brandované tetovačky A5",
      desc:
        lang === "en"
          ? "Custom A5 sheet with rainbow motifs and full got2b branding. Full-colour print including white ink."
          : lang === "sk"
          ? "Zákazkový A5 arch s dúhovými motívmi a plným brandingom got2b. Plnofarebná tlač vrátane bielej."
          : "Zakázková A5 tetovačka s duhovou tematikou a plným brandingem got2b. Plnobarevný tisk včetně bílé barvy.",
    },
    {
      src: "/realizace-prebal-b2b-a5-zadni.jpg",
      title:
        lang === "en"
          ? "got2b, Custom packaging, back"
          : lang === "sk"
          ? "got2b, Obal na mieru, zadná strana"
          : "got2b, Zakázkový obal, zadní strana",
      desc:
        lang === "en"
          ? "Back of the branded packaging with instructions and brand story printed directly on the cover."
          : lang === "sk"
          ? "Zadná strana brandovaného obalu, návod a brand story priamo na obale."
          : "Zadní strana brandovaného obalu, návod na použití a brand story přímo na přebalu.",
    },
    {
      src: "/realizace-detske-prebal-a6.jpg",
      title:
        lang === "en"
          ? "Children's tattoos A6, wholesale collection"
          : lang === "sk"
          ? "Detské tetovačky A6, veľkoobchodná kolekcia"
          : "Dětské tetovačky A6, velkoobchodní kolekce",
      desc:
        lang === "en"
          ? "Series of A6 children's tattoo sheets in themed designs, space, animals, nature. Cellophane + paper cover."
          : lang === "sk"
          ? "Séria A6 detských archov v tematických dizajnoch, vesmír, zvieratká, príroda. Celofán + papierový prebal."
          : "Série A6 dětských archů v tematických designech, vesmír, zvířátka, příroda. Celofán + papírový přebal.",
    },
    {
      src: "/realizace-prebal-a5.jpg",
      title:
        lang === "en"
          ? "Easter edition A5, seasonal tattoos"
          : lang === "sk"
          ? "Veľkonočná edícia A5, sezónne tetovačky"
          : "Velikonoční edice A5, sezónní tetovačky",
      desc:
        lang === "en"
          ? "Easter-themed A5 sheet with bunny, chick and flower motifs. Kraft paper cover + cellophane."
          : lang === "sk"
          ? "Veľkonočný A5 arch s motívmi zajačika, kuriatka a kvetín. Kraft papier + celofán."
          : "Velikonoční A5 arch s motivy zajíčka, kuřátka a květin. Přebal z kraftového papíru + celofánové balení.",
    },
    {
      src: "/svatebni-tetovaci-koutek.jpg",
      title:
        lang === "en"
          ? "Wedding, Tattoo corner for guests"
          : lang === "sk"
          ? "Svadba, Tetovací kútik pre hostí"
          : "Svatba, Tetovací koutek pro hosty",
      desc:
        lang === "en"
          ? "A complete tattoo corner for a wedding: sheets of motifs, monogram stickers and printed instructions. Guests apply the tattoos themselves."
          : lang === "sk"
          ? "Kompletný tetovací kútik na svadbu: archy s motívmi, samolepky s monogramom a tlačený návod. Hostia si tetovačky nanášajú sami."
          : "Kompletní tetovací koutek na svatbu: archy s motivy, samolepky s monogramem a tištěný návod. Hosté si tetovačky nanášejí sami.",
    },
    {
      src: "/realizace-papirovy-prebal.jpg",
      title:
        lang === "en"
          ? "Unicorn tattoos, paper + cellophane packaging"
          : lang === "sk"
          ? "Jednorožcové tetovačky, papier + celofán"
          : "Tetovačky s jednorožci, papírový + celofánový obal",
      desc:
        lang === "en"
          ? "Children's tattoo sheet with unicorn motifs in a combination of paper cover and sealed cellophane bag."
          : lang === "sk"
          ? "Detský arch s motívmi jednorožcov, papierový prebal a zatavené celofánové vrecko."
          : "Dětský arch s motivy jednorožců v kombinaci papírový přebal + zatavený celofánový sáček.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container-pad">
          <FadeUp className="max-w-2xl">
            <span className="tag mb-4">
              {lang === "en" ? "Portfolio" : lang === "sk" ? "Portfólio" : "Portfolio"}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-brand-secondary mt-3 mb-5 leading-tight">
              {lang === "en"
                ? "Our work"
                : lang === "sk"
                ? "Naše realizácie"
                : "Naše realizace"}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              {lang === "en"
                ? "A selection of products and packaging we have produced. More inspiration on our Instagram."
                : lang === "sk"
                ? "Výber produktov a obalov, ktoré sme vyrobili. Viac inšpirácie na našom Instagrame."
                : "Výběr produktů a obalů, které jsme vyrobili. Více inspirace na našem Instagramu."}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Photo grid */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <FadeUp key={photo.src} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-secondary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-brand-secondary text-base mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{photo.desc}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Reference klientů */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <FadeUp className="text-center mb-12">
            <span className="tag mb-4">
              {lang === "en" ? "What clients say" : lang === "sk" ? "Čo hovoria klienti" : "Co říkají klienti"}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-secondary mt-3 mb-3">
              {lang === "en"
                ? "References from real orders"
                : lang === "sk"
                ? "Referencie z reálnych zákaziek"
                : "Reference z reálných zakázek"}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {lang === "en"
                ? "Original wording of our clients, in Czech."
                : lang === "sk"
                ? "Pôvodné znenie od našich klientov, v češtine."
                : "Původní znění od našich klientů."}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {reference.map((r, i) => (
              <FadeUp key={r.org} delay={i * 0.06}>
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="h-full flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-brand-primary/30 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
                >
                  <blockquote className="text-gray-600 leading-relaxed mb-6 flex-1">&bdquo;{r.text}&ldquo;</blockquote>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className="w-11 h-11 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-brand-primary text-sm">{r.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-bold text-brand-secondary text-sm">{r.author}</p>
                      {r.website ? (
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 text-xs hover:text-brand-primary transition-colors"
                        >
                          {r.orgFull} →
                        </a>
                      ) : (
                        <p className="text-gray-400 text-xs">{r.orgFull}</p>
                      )}
                    </div>
                  </figcaption>
                </motion.figure>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 text-center">
              {lang === "en" ? "Some of our clients" : lang === "sk" ? "Niektorí z našich klientov" : "Někteří z našich klientů"}
            </p>
            <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <motion.div
                className="flex items-center gap-x-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
              >
                {[...klienti, ...klienti].map((k, i) =>
                  k.url ? (
                    <a
                      key={`${k.name}-${i}`}
                      href={k.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-lg text-gray-300 hover:text-brand-primary transition-colors flex-shrink-0"
                    >
                      {k.name}
                    </a>
                  ) : (
                    <span key={`${k.name}-${i}`} className="font-display font-bold text-lg text-gray-300 flex-shrink-0">
                      {k.name}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Social & Web preview */}
      <section className="section-pad bg-gray-50">
        <div className="container-pad">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl font-display font-extrabold text-brand-secondary mb-3">
              {lang === "en"
                ? "Follow us & visit our e-shop"
                : lang === "sk"
                ? "Sledujte nás a navštívte e-shop"
                : "Sledujte nás a navštivte e-shop"}
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              {lang === "en"
                ? "See more inspiration on Instagram or browse ready-made designs on our e-shop."
                : lang === "sk"
                ? "Viac inšpirácie nájdete na Instagrame alebo hotové motívy na našom e-shope."
                : "Více inspirace najdete na Instagramu nebo hotové motivy v našem e-shopu."}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Instagram card */}
            <FadeUp delay={0.05}>
              <a
                href="https://www.instagram.com/partyskin.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white card-hover"
              >
                <div className="relative h-64 grid grid-cols-3 grid-rows-2 gap-0.5 bg-white">
                  {[
                    "/realizace-prebal-b2b-a5.jpg",
                    "/realizace-detske-prebal-a6.jpg",
                    "/realizace-prebal-a5.jpg",
                    "/realizace-papirovy-prebal.jpg",
                    "/svatebni-tetovaci-koutek.jpg",
                    "/nanaseni-tetovacky.jpg",
                  ].map((src, i) => (
                    <div key={i} className="relative overflow-hidden">
                      <Image
                        src={src}
                        alt="Realizace PartySkin, dočasné tetovačky a přebaly na míru"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-brand-secondary text-base mb-1">@partyskin.cz</p>
                  <p className="text-gray-500 text-sm mb-3">
                    {lang === "en"
                      ? "Inspiration, behind the scenes and finished pieces."
                      : lang === "sk"
                      ? "Inšpirácia, zákulisie a hotové realizácie."
                      : "Inspirace, zákulisí a hotové realizace."}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ee2a7b] group-hover:underline">
                    {lang === "en" ? "View profile →" : lang === "sk" ? "Zobraziť profil →" : "Zobrazit profil →"}
                  </span>
                </div>
              </a>
            </FadeUp>

            {/* E-shop card */}
            <FadeUp delay={0.1}>
              <a
                href={lang === "sk" ? "https://www.partyskin.sk" : "https://www.partyskin.cz"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white card-hover"
              >
                <div className="relative h-64 bg-gradient-to-br from-brand-primary to-[#593027] flex items-center justify-center overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
                  <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-white/5" />
                  <Image
                    src="/logo-partyskin-white.png"
                    alt="PartySkin"
                    width={391}
                    height={238}
                    className="relative h-24 w-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-brand-secondary text-base mb-1">
                    {lang === "sk" ? "partyskin.sk" : "partyskin.cz"}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {lang === "en"
                      ? "Hundreds of ready-made designs. Order from 1 piece, quick delivery."
                      : lang === "sk"
                      ? "Stovky hotových motívov. Objednajte od 1 kusu, rýchle doručenie."
                      : "Stovky hotových motivů. Objednejte od 1 kusu, rychlé doručení."}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary group-hover:underline">
                    {lang === "en" ? "Visit e-shop →" : lang === "sk" ? "Navštíviť e-shop →" : "Navštívit e-shop →"}
                  </span>
                </div>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-pad text-center">
          <FadeUp>
            <h2 className="text-4xl font-display font-extrabold text-brand-secondary mb-4">
              {lang === "en"
                ? "Want to create something together?"
                : lang === "sk"
                ? "Chcete niečo vytvoriť spolu?"
                : "Chcete vytvořit něco společně?"}
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
              {lang === "en"
                ? "Send us your idea or logo and we'll prepare a quote and recommendation."
                : lang === "sk"
                ? "Pošlite nám váš nápad alebo logo a pripravíme ponuku a odporúčanie."
                : "Pošlete nám váš nápad nebo logo a připravíme nabídku a doporučení formátu."}
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              {lang === "en"
                ? "Get a quote"
                : lang === "sk"
                ? "Dopytujte výrobu"
                : "Nezávazně poptat"}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
