"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { translationsData } from "./translationsData";

export const LANGUAGES = {
  en: "en",
  pt: "pt",
};

type languageOptions = "en" | "pt";

type LanguageProviderProps = {
  children: ReactNode;
};

const localStorageKeys = {
  preferredLanguage: "preferredLanguage",
};

const LanguageContext = createContext({
  language: "pt",
  t: translationsData.pt,
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(LANGUAGES.pt);

  const t = translationsData[language];

  const changeLanguage = (lang: languageOptions) => {
    setLanguage(lang);

    localStorage.setItem(localStorageKeys.preferredLanguage, lang);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      localStorageKeys.preferredLanguage
    );

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
