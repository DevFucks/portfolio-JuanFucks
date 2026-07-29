import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGS } from "../i18n/translations";

const LangContext = createContext({
  lang: "pt",
  setLang: () => {},
  t: () => "",
  langs: LANGS,
});

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("portfolio.lang");
      if (saved && translations[saved]) return saved;
      const browser = (window.navigator.language || "pt").slice(0, 2).toLowerCase();
      if (translations[browser]) return browser;
    }
    return "pt";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio.lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang] || translations.pt;
    return (path) => {
      const parts = path.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object" && p in cur) cur = cur[p];
        else return path;
      }
      return cur;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, langs: LANGS }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
