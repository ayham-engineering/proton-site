import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useProgress } from "../lib/ProgressContext";
import { useView } from "../lib/ViewContext";
import { CURRICULUM, MODULE_IDS, getModuleTrack } from "../data/curriculum";

const COPY = {
  ar: {
    back: "العودة إلى المنصة",
    objectives: "الأهداف",
    tools: "الأدوات المستخدمة",
    steps: "خطوات الوحدة",
    deliverable: "المُخرج النهائي",
    markDone: "وضع علامة مكتمل",
    markUndone: "إلغاء علامة الإكمال",
    completedBadge: "مكتملة",
    moduleLabel: "وحدة",
  },
  en: {
    back: "Back to platform",
    objectives: "Objectives",
    tools: "Tools used",
    steps: "Module steps",
    deliverable: "Deliverable",
    markDone: "Mark complete",
    markUndone: "Unmark complete",
    completedBadge: "Completed",
    moduleLabel: "Module",
  },
};

export default function ModuleDetail({ moduleId }: { moduleId: string }) {
  const { lang } = useLanguage();
  const { isCompleted, toggleComplete } = useProgress();
  const { goDashboard } = useView();
  const c = COPY[lang];

  const track = getModuleTrack(moduleId);
  const ids = MODULE_IDS[track];
  const index = ids.indexOf(moduleId);
  const copy = CURRICULUM[lang];
  const mod = copy.modules[moduleId];
  const done = isCompleted(moduleId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="px-5 md:px-10 py-10 max-w-3xl mx-auto"
    >
      <button
        onClick={goDashboard}
        className="text-sm text-ink/50 hover:text-accent transition-colors"
      >
        {lang === "ar" ? "→" : "←"} {c.back}
      </button>

      <p className="mt-8 text-xs font-mono text-accent uppercase tracking-wide">
        {copy.tracks[track].label} · {c.moduleLabel} {String(index + 1).padStart(2, "0")} /{" "}
        {String(ids.length).padStart(2, "0")}
      </p>

      <div className="mt-3 flex items-start justify-between gap-4 flex-wrap">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-balance">{mod.title}</h1>
        {done && (
          <span className="shrink-0 text-xs font-medium text-accent border border-accent/50 rounded-full px-3 py-1">
            {c.completedBadge}
          </span>
        )}
      </div>

      <p className="mt-3 text-ink/65 leading-relaxed">{mod.desc}</p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50 mb-3">
            {c.objectives}
          </h2>
          <ul className="space-y-2">
            {mod.detail.objectives.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-ink/80 leading-relaxed">
                <span className="text-accent mt-0.5">＋</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50 mb-3">
            {c.tools}
          </h2>
          <div className="flex flex-wrap gap-2">
            {mod.detail.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded-full border border-line text-ink/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50 mb-3">
            {c.steps}
          </h2>
          <ol className="space-y-3">
            {mod.detail.steps.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                <span className="shrink-0 w-6 h-6 rounded-full bg-ink/[0.06] text-ink/60 text-xs font-mono flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink/50 mb-3">
            {c.deliverable}
          </h2>
          <p className="text-sm text-ink/80 leading-relaxed">{mod.detail.deliverable}</p>
        </section>

        {mod.detail.note && (
          <p className="text-xs text-ink/40 leading-relaxed">{mod.detail.note}</p>
        )}
      </div>

      <button
        onClick={() => toggleComplete(moduleId)}
        className={`mt-10 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition-colors ${
          done
            ? "border border-accent/50 text-accent hover:bg-accent/10"
            : "bg-accent text-white hover:bg-accent/90"
        }`}
      >
        {done ? c.markUndone : c.markDone}
      </button>
    </motion.div>
  );
}
