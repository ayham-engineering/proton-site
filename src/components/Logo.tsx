import { useLanguage } from "../lib/LanguageContext";

export default function Logo({
  suffix,
  className = "",
}: {
  suffix?: string;
  className?: string;
}) {
  const { lang } = useLanguage();

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Proton"
        className="h-5 w-auto dark:invert-0 invert"
        draggable={false}
      />
      {suffix && (
        <>
          <span className="w-px h-[1em] bg-accent/70" aria-hidden="true" />
          <span
            className={`font-normal text-ink/70 text-[0.65em] uppercase ${
              lang === "ar" ? "tracking-normal" : "tracking-[0.3em]"
            }`}
          >
            {suffix}
          </span>
        </>
      )}
    </span>
  );
}
