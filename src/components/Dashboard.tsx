import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useProgress } from "../lib/ProgressContext";
import { CURRICULUM, MODULE_IDS, TRACK_ORDER } from "../data/curriculum";
import ModuleCard from "./ModuleCard";

const COPY = {
  ar: {
    kicker: "المنصة",
    title: "أهلًا بك في بروتون",
    body: "اختر مسارًا وابدأ. كل مسار يتكوّن من وحدات متسلسلة، من الأساسيات إلى مشاريع صناعية حقيقية.",
  },
  en: {
    kicker: "Platform",
    title: "Welcome to Proton",
    body: "Pick a track and start. Each track is a sequence of modules, from foundations to real industry projects.",
  },
};

export default function Dashboard() {
  const { lang } = useLanguage();
  const { completed } = useProgress();
  const c = COPY[lang];
  const copy = CURRICULUM[lang];

  const totalModules = TRACK_ORDER.reduce((n, t) => n + MODULE_IDS[t].length, 0);
  const totalDone = completed.size;

  return (
    <div className="px-5 md:px-10 py-10 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="uppercase tracking-[0.2em] text-xs text-accent font-medium mb-3">
          {c.kicker}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-balance">{c.title}</h1>
        <p className="mt-3 max-w-xl text-ink/65 leading-relaxed">{c.body}</p>
        <p className="mt-4 text-sm text-ink/40">
          {totalDone} / {totalModules} {lang === "ar" ? "وحدة مكتملة" : "modules completed"}
        </p>
      </motion.div>

      <div className="mt-12 space-y-14">
        {TRACK_ORDER.map((track, ti) => {
          const ids = MODULE_IDS[track];
          const doneCount = ids.filter((id) => completed.has(id)).length;

          return (
            <motion.section
              key={track}
              id={`track-${track}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: ti * 0.08 }}
              className="scroll-mt-20"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs font-mono text-accent">
                    {String(ti + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl font-bold mt-1">{copy.tracks[track].label}</h2>
                  <p className="mt-1.5 text-sm text-ink/60 max-w-md">{copy.tracks[track].desc}</p>
                </div>
                <p className="text-sm text-ink/40 font-mono">
                  {doneCount}/{ids.length}
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ids.map((id, i) => (
                  <ModuleCard key={id} moduleId={id} index={i} total={ids.length} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
