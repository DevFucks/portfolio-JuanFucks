import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGS } from "../i18n/translations";

const STORAGE_KEY = "portfolio.lang";

const LangContext = createContext({
  lang: "pt",
  setLang: () => {},
  t: () => "",
  langs: LANGS,
});

// localStorage pode lançar erro (aba anônima, cookies bloqueados) — nunca quebrar o render por isso
const readSaved = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = readSaved();
      if (saved && translations[saved]) return saved;
      const browser = (window.navigator.language || "pt").slice(0, 2).toLowerCase();
      if (translations[browser]) return browser;
    }
    return "pt";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // noop
    }
    const dict = translations[lang] || translations.pt;
    // Mantém <html lang>, título e descrição coerentes com o idioma ativo
    document.documentElement.lang = LANGS.find((l) => l.code === lang)?.htmlLang || "pt-BR";
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dict.meta.description);
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
