"use client";
import React, { createContext, useContext, useState } from 'react';
import { thaiTranslates } from "@/src/i18n/th";
import { engTranslates } from "@/src/i18n/en";

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"TH" | "EN">("TH");
  
  const translations = { TH: thaiTranslates, EN: engTranslates };
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);