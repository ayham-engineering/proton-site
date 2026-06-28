import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useTheme } from "../lib/ThemeContext";
import { useView } from "../lib/ViewContext";
import Logo from "./Logo";

const COPY = {
  ar: { dashboard: "المنصة", about: "عن المبادرة" },
  en: { dashboard: "Platform", about: "About" },
};

export default function TopBar() {
  const { lang, toggle } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const { view, goDashboard, goAbout } = useView();
  const c = COPY[lang];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 h-16 backdrop-blur-md bg-canvas/85 border-b border-line"
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between gap-4">
        <button onClick={goDashboard} className="shrink-0">
          <Logo />
        </button>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <button
            onClick={goDashboard}
            className={`transition-colors ${
              view.name !== "about" ? "text-accent font-medium" : "text-ink/60 hover:text-accent"
            }`}
          >
            {c.dashboard}
          </button>
          <button
            onClick={goAbout}
            className={`transition-colors ${
              view.name === "about" ? "text-accent font-medium" : "text-ink/60 hover:text-accent"
            }`}
          >
            {c.about}
          </button>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent transition-colors text-sm"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Dark" : "Light"}
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <button
            onClick={toggle}
            className="text-sm border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
            aria-label="Toggle language"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
