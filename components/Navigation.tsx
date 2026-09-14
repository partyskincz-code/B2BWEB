"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const pathname = usePathname();
  const { lang, t } = useLanguage();
  const localizedPath = (path: string) => lang === "cs" ? path : `/${lang}${path === "/" ? "" : path}`;
  const switchPath = (code: Lang) => {
    const pathWithoutLocale = pathname.replace(/^\/(sk|en)(?=\/|$)/, "") || "/";
    const isLocalized = ["/", "/produkty", "/jak-to-funguje", "/reference", "/kontakt"].includes(pathWithoutLocale);
    const target = isLocalized ? pathWithoutLocale : "/";
    return code === "cs" ? target : `/${code}${target === "/" ? "" : target}`;
  };

  const navLinks = [
    { href: localizedPath("/produkty"), label: t("nav.products") },
    { href: "/cenik", label: lang === "en" ? "Price list" : lang === "sk" ? "Cenník" : "Ceník" },
    { href: localizedPath("/jak-to-funguje"), label: t("nav.how") },
    { href: localizedPath("/reference"), label: t("nav.references") },
    { href: "/poradna", label: lang === "en" ? "Guides" : lang === "sk" ? "Poradňa" : "Poradna" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/" || pathname === "/sk" || pathname === "/en";
  const isLight = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-pad">
        <nav className="flex items-center justify-between h-16 md:h-20">
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
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300 ${
              "bg-brand-light text-brand-primary"
            }`}>
              B2B
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-brand-primary bg-brand-light"
                    : "text-gray-700 hover:text-white hover:bg-brand-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className={`flex items-center rounded-lg overflow-hidden border transition-colors duration-300 ${
              "border-gray-200"
            }`}>
              {LANGS.map(({ code, label }) => (
                <Link
                  key={code}
                  href={switchPath(code)}
                  hrefLang={code}
                  onClick={() => trackEvent("language_changed", { from: lang, to: code, path: pathname })}
                  className={`px-2.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    lang === code
                      ? "bg-brand-primary text-white"
                      : "text-gray-700 hover:text-white hover:bg-brand-secondary"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href={localizedPath("/kontakt")} onClick={() => trackEvent("cta_clicked", { location: "navigation", lang })} className="btn-primary text-sm px-5 py-2.5">
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-brand-secondary bg-white/80 backdrop-blur-sm hover:text-white hover:bg-brand-secondary shadow-sm"
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
        <div id="mobile-navigation" className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-pad py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-brand-primary bg-brand-light"
                    : "text-gray-700 hover:text-white hover:bg-brand-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-medium">Jazyk:</span>
              {LANGS.map(({ code, label }) => (
                <Link
                  key={code}
                  href={switchPath(code)}
                  hrefLang={code}
                  onClick={() => trackEvent("language_changed", { from: lang, to: code, path: pathname })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === code
                      ? "bg-brand-primary text-white"
                      : "text-gray-700 hover:text-white hover:bg-brand-secondary border border-gray-200"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href={localizedPath("/kontakt")} className="btn-primary text-sm mt-2">
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
