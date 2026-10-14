"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Snowflake } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

const LANGS: { code: Lang; label: string }[] = [
  { code: "cs", label: "CS" },
  { code: "en", label: "EN" },
  { code: "sk", label: "SK" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [oznameni, setOznameni] = useState(true);
  const pathname = usePathname();
  const { lang, t } = useLanguage();
  const localizedPath = (path: string) => lang === "cs" ? path : `/${lang}${path === "/" ? "" : path}`;
  const switchPath = (code: Lang) => {
    const pathWithoutLocale = pathname.replace(/^\/(sk|en)(?=\/|$)/, "") || "/";
    const isLocalized = ["/", "/produkty", "/cenik", "/jak-to-funguje", "/reference", "/kontakt"].includes(pathWithoutLocale);
    const target = isLocalized ? pathWithoutLocale : "/";
    return code === "cs" ? target : `/${code}${target === "/" ? "" : target}`;
  };

  const navLinks = [
    { href: localizedPath("/produkty"), label: t("nav.products") },
    { href: localizedPath("/cenik"), label: lang === "en" ? "Price list" : lang === "sk" ? "Cenník" : "Ceník" },
    { href: localizedPath("/jak-to-funguje"), label: t("nav.how") },
    { href: localizedPath("/reference"), label: t("nav.references") },
    { href: "/poradna", label: lang === "en" ? "Guides" : lang === "sk" ? "Poradňa" : "Poradna" },
  ];

  // Zavřený pruh si pamatujeme, ať ho návštěvník nemusí zavírat na každé stránce.
  useEffect(() => {
    try {
      if (window.localStorage.getItem("mtm-oznameni-vanoce") === "zavreno") setOznameni(false);
    } catch {
      /* soukromý režim nebo zablokované úložiště, pruh prostě zůstane */
    }
  }, []);

  const zavritOznameni = () => {
    setOznameni(false);
    try {
      window.localStorage.setItem("mtm-oznameni-vanoce", "zavreno");
    } catch {
      /* nevadí, zavře se aspoň pro tuhle návštěvu */
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/" || pathname === "/sk" || pathname === "/en";
  const isLight = true; // facelift: hlavička má vždy krémové pozadí, přes fotku byl text nečitelný

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-[#F2EBE9] border-b border-brand-secondary/15"
          : "bg-transparent"
      }`}
    >
      {oznameni && (
        <div className="bg-brand-secondary text-brand-light">
          <div className="container-pad relative">
            <Link
              href="/tetovacky-na-firemni-vecirek"
              className="group flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 pr-8 text-center"
            >
              <Snowflake size={15} className="text-brand-light/70 flex-shrink-0" aria-hidden="true" />
              <span className="text-[13px] font-medium">
                {lang === "en"
                  ? "Christmas parties are planned now"
                  : lang === "sk"
                  ? "Vianočné večierky sa plánujú teraz"
                  : "Vánoční večírky se plánují teď"}
              </span>
              <span className="text-[13px] text-brand-light/60">
                {lang === "en"
                  ? "Book December production by mid November"
                  : lang === "sk"
                  ? "Výrobu na december zadávajte do polovice novembra"
                  : "Výrobu na prosinec zadávejte do poloviny listopadu"}
              </span>
              <span className="text-[13px] border-b border-brand-light/40 group-hover:border-brand-light transition-colors">
                {lang === "en" ? "Tattoos for your party" : lang === "sk" ? "Tetovačky na večierok" : "Tetovačky na večírek"}
              </span>
            </Link>
            <button
              onClick={zavritOznameni}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 p-1.5 text-brand-light/50 hover:text-brand-light transition-colors"
              aria-label={lang === "en" ? "Close the notice" : lang === "sk" ? "Zavrieť oznámenie" : "Zavřít oznámení"}
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      <div className="container-pad">
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href={localizedPath("/")} className="flex items-center gap-2.5" aria-label="Make the Moment">
            <Image
              src="/logo-mtm.png"
              alt="Make the Moment"
              width={918}
              height={336}
              priority
              className="h-7 md:h-9 w-auto transition-opacity duration-300"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-primary">B2B</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 border-b pb-0.5 ${
                  pathname === link.href
                    ? "text-brand-primary border-brand-primary"
                    : "text-[#3F4A55] border-transparent hover:text-brand-primary hover:border-brand-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {LANGS.map(({ code, label }) => (
                <Link
                  key={code}
                  href={switchPath(code)}
                  hrefLang={code}
                  onClick={() => trackEvent("language_changed", { from: lang, to: code, path: pathname })}
                  className={`text-[11px] font-medium tracking-[0.12em] transition-colors duration-200 ${
                    lang === code
                      ? "text-brand-primary"
                      : "text-[#3F4A55]/60 hover:text-brand-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href={localizedPath("/kontakt")} onClick={() => trackEvent("cta_clicked", { location: "navigation", lang })} className="btn-primary !px-6 !py-3 !min-h-0">
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors text-brand-secondary hover:text-brand-primary"
            aria-label="Otevřít menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden bg-[#F2EBE9] border-t border-brand-secondary/15">
          <div className="container-pad py-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3.5 text-lg font-display font-bold border-b border-brand-secondary/10 transition-colors ${
                  pathname === link.href ? "text-brand-primary" : "text-brand-secondary hover:text-brand-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-brand-secondary/15">
              <span className="tag">Jazyk</span>
              {LANGS.map(({ code, label }) => (
                <Link
                  key={code}
                  href={switchPath(code)}
                  hrefLang={code}
                  onClick={() => trackEvent("language_changed", { from: lang, to: code, path: pathname })}
                  className={`text-xs font-medium tracking-[0.12em] transition-colors ${
                    lang === code ? "text-brand-primary" : "text-[#3F4A55]/60 hover:text-brand-primary"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href={localizedPath("/kontakt")} className="btn-primary mt-5 w-full">
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
