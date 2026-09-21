"use client";

import React, { createContext, useContext } from "react";

export type Lang = "cs" | "en" | "sk";

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  t: (k) => k,
});

export function LanguageProvider({
  children,
  translations,
  lang,
}: {
  children: React.ReactNode;
  translations: Record<Lang, Record<string, string>>;
  lang: Lang;
}) {
  const t = (key: string): string =>
    translations[lang]?.[key] ?? translations["cs"]?.[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
