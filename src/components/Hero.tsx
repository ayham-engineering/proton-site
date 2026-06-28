import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import { useView } from "../lib/ViewContext";

const COPY = {
  ar: {
    kicker: "أول مبادرة عراقية للذكاء الاصطناعي الصناعي",
    title1: "نبني الخبرة",
    title2: "بدل أن نستوردها",
    body:
      "بروتون تؤهّل مهندسين عراقيين على الذكاء الاصطناعي الصناعي — التعلم المعزز، التعلم بالتقليد، والروبوت — على ذراع روبوتية حقيقية. بدل إرسال مهندسينا للخارج أو استيراد خبرة أجنبية، نبني القدرة محليًا.",
    cta1: "افتح المنصة",
    cta2: "تواصل معنا",
    stat1: "ذراع روبوتية واحدة",
    stat1sub: "تدريب عملي حقيقي",
    stat2: "ثلاث مراحل",
    stat2sub: "تدريب، تأهيل، تطوير",
    stat3: "كوادر محلية",
    stat3sub: "بدل الاستيراد",
  },
  en: {
    kicker: "Iraq's first industrial-AI cohort",
    title1: "We build the expertise",
    title2: "instead of importing it",
    body:
      "Proton trains Iraqi engineers in industrial AI — reinforcement learning, imitation learning, and robotics — on a real robot arm. Instead of sending engineers abroad or importing foreign labor, we build local capability.",
    cta1: "Open the platform",
    cta2: "Get in touch",
    stat1: "One robot arm",
    stat1sub: "Real hands-on training",
    stat2: "Three stages",
    stat2sub: "Training, Qualifying, Developing",
    stat3: "Local talent",
    stat3sub: "Not imported labor",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const { goDashboard } = useView();
  const c = COPY[lang];

  return (
    <section className="relative overflow-hidden pt-20 pb-16">
      {/*
        Background video placeholder: once footage is ready, drop in
        <video className="w-full h-full object-cover opacity-[0.18]" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/media/arm-loop.mp4" type="video/mp4" />
        </video>
        Omitted for now since an empty src would trigger a spurious network request.
      */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,107,0,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,107,0,0.06), transparent 45%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase tracking-[0.2em] text-xs md:text-sm text-accent font-medium mb-6"
        >
          {c.kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-balance font-bold leading-[1.05] text-4xl sm:text-5xl md:text-7xl max-w-4xl"
        >
          {c.title1}
          <br />
          <span className="text-ink/40">{c.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-ink/75"
        >
          {c.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={goDashboard}
            className="inline-flex items-center justify-center rounded-full bg-accent text-white font-semibold px-7 py-3 text-sm hover:bg-accent/90 transition-colors"
          >
            {c.cta1}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3 text-sm hover:border-accent hover:text-accent transition-colors"
          >
            {c.cta2}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl border-t border-line pt-8"
        >
          {[c.stat1, c.stat2, c.stat3].map((label, i) => (
            <div key={i}>
              <p className="text-lg font-semibold">{label}</p>
              <p className="text-sm text-ink/50 mt-1">
                {[c.stat1sub, c.stat2sub, c.stat3sub][i]}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
