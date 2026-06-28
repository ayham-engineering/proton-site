import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useProgress } from "../lib/ProgressContext";
import { useView } from "../lib/ViewContext";
import { CURRICULUM, getModuleStatus, type ModuleStatus } from "../data/curriculum";

const STATUS_LABEL: Record<ModuleStatus, { ar: string; en: string }> = {
  locked: { ar: "مقفل", en: "Locked" },
  available: { ar: "متاح", en: "Available" },
  completed: { ar: "مكتمل", en: "Completed" },
};

const BUTTON_LABEL: Record<ModuleStatus, { ar: string; en: string }> = {
  locked: { ar: "مقفل", en: "Locked" },
  available: { ar: "ابدأ", en: "Start" },
  completed: { ar: "مراجعة", en: "Review" },
};

export default function ModuleCard({
  moduleId,
  index,
  total,
}: {
  moduleId: string;
  index: number;
  total: number;
}) {
  const { lang } = useLanguage();
  const { completed } = useProgress();
  const { openModule } = useView();
  const mod = CURRICULUM[lang].modules[moduleId];
  const status = getModuleStatus(moduleId, completed);
  const locked = status === "locked";

  return (
    <motion.div
      layout
      data-module-id={moduleId}
      data-module-status={status}
      className={`rounded-xl border p-5 transition-colors ${
        status === "completed"
          ? "border-accent/40 bg-accent/[0.05]"
          : "border-line bg-ink/[0.015]"
      } ${locked ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-mono text-ink/40">
          {lang === "ar" ? "وحدة" : "Module"} {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>
        <span
          className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border ${
            status === "completed"
              ? "border-accent/50 text-accent"
              : status === "available"
                ? "border-line text-ink/60"
                : "border-line text-ink/35"
          }`}
        >
          {STATUS_LABEL[status][lang]}
        </span>
      </div>

      <h4 className="mt-3 text-sm font-semibold leading-snug">{mod.title}</h4>
      <p className="mt-1.5 text-xs text-ink/60 leading-relaxed">{mod.desc}</p>

      <div className="mt-4 flex items-center justify-end">
        <button
          disabled={locked}
          onClick={() => !locked && openModule(moduleId)}
          className={`text-xs font-medium rounded-full px-4 py-1.5 transition-colors ${
            locked
              ? "border border-line text-ink/35 cursor-not-allowed"
              : status === "completed"
                ? "border border-accent/50 text-accent hover:bg-accent/10"
                : "bg-accent text-white hover:bg-accent/90"
          }`}
        >
          {BUTTON_LABEL[status][lang]}
        </button>
      </div>
    </motion.div>
  );
}
