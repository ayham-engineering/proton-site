import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useView } from "../lib/ViewContext";
import { useProgress } from "../lib/ProgressContext";
import { CURRICULUM, MODULE_IDS, TRACK_ORDER, getModuleTrack } from "../data/curriculum";

export default function Sidebar({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  const { view, goDashboard } = useView();
  const { completed } = useProgress();
  const copy = CURRICULUM[lang];

  const activeTrack = view.name === "module" ? getModuleTrack(view.moduleId) : null;

  return (
    <aside className={`border-line ${className}`}>
      <p className="hidden md:block px-5 pt-6 text-xs uppercase tracking-[0.2em] text-ink/40 font-medium">
        {lang === "ar" ? "المسارات" : "Tracks"}
      </p>

      <div className="flex md:flex-col gap-5 md:gap-7 overflow-x-auto md:overflow-visible px-5 py-4 md:py-6">
        {TRACK_ORDER.map((track) => {
          const ids = MODULE_IDS[track];
          const doneCount = ids.filter((id) => completed.has(id)).length;
          const pct = Math.round((doneCount / ids.length) * 100);
          const isActive = activeTrack === track;

          return (
            <a
              key={track}
              href={`#track-${track}`}
              onClick={() => goDashboard()}
              className="block group shrink-0 w-44 md:w-auto"
            >
              <div className="flex items-center justify-between gap-3">
                <p
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-accent" : "text-ink group-hover:text-accent"
                  }`}
                >
                  {copy.tracks[track].label}
                </p>
                <p className="text-xs text-ink/40 font-mono">
                  {doneCount}/{ids.length}
                </p>
              </div>

              <div className="mt-2.5 h-1 rounded-full bg-ink/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={false}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
