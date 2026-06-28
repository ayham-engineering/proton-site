import { createContext, useContext, useState, useMemo, type ReactNode } from "react";

export type Lang = "ar" | "en";

interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggle: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const dir = lang === "ar" ? "rtl" : "ltr";

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")),
      setLang,
    }),
    [lang, dir]
  );

  return (
    <LanguageContext.Provider value={value}>
      <div dir={dir} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/** Pick the right-language string from a bilingual pair. */
export function t<T>(lang: Lang, ar: T, en: T): T {
  return lang === "ar" ? ar : en;
}
