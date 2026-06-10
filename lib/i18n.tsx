"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "cs" | "en" | "sk";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({
  children,
  translations,
}: {
  children: React.ReactNode;
  translations: Record<Lang, Record<string, string>>;
}) {
  const [lang, setLangState] = useState<Lang>("cs");

  useEffect(() => {
    const stored = localStorage.getItem("ps-lang") as Lang | null;
    if (stored && ["cs", "en", "sk"].includes(stored)) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ps-lang", l);
  };

  const t = (key: string): string =>
    translations[lang]?.[key] ?? translations["cs"]?.[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
