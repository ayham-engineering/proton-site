import { useLanguage } from "../lib/LanguageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-ink/40">
        <p>
          {lang === "ar"
            ? "© ٢٠٢٦ بروتون. كل الحقوق محفوظة."
            : "© 2026 Proton. All rights reserved."}
        </p>
        <SocialLinks />
        <p>
          {lang === "ar" ? "بُنيت في العراق." : "Built in Iraq."}
        </p>
      </div>
    </footer>
  );
}
