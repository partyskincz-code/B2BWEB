"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "cs", label: "CS" },
  { code: "en", label: "EN" },
  { code: "sk", label: "SK" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/produkty", label: t("nav.products") },
    { href: "/cenik", label: lang === "en" ? "Price list" : lang === "sk" ? "Cenník" : "Ceník" },
    { href: "/jak-to-funguje", label: t("nav.how") },
    { href: "/reference", label: t("nav.references") },
    { href: "/kontakt", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isLight = scrolled || pathname !== "/";

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
          <Link href="/" className="flex items-center gap-2.5" aria-label="PartySkin B2B">
            <Image
              src="/logo-partyskin.png"
              alt="PartySkin"
              width={391}
              height={238}
              priority
              className="h-9 md:h-11 w-auto transition-opacity duration-300"
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
                    : "text-gray-600 hover:text-brand-primary hover:bg-brand-light"
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
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    lang === code
                      ? "bg-brand-primary text-white"
                      : "text-gray-500 hover:text-brand-primary hover:bg-brand-light"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link href="/kontakt" className="btn-primary text-sm px-5 py-2.5">
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Otevřít menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-pad py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-brand-primary bg-brand-light"
                    : "text-gray-700 hover:text-brand-primary hover:bg-brand-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-medium">Jazyk:</span>
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === code
                      ? "bg-brand-primary text-white"
                      : "text-gray-500 hover:text-brand-primary hover:bg-brand-light border border-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link href="/kontakt" className="btn-primary text-sm mt-2">
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
