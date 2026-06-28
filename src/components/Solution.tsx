import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import SectionHeading from "./SectionHeading";

const COPY = {
  ar: {
    kicker: "الحل",
    title: "منصة + ذراع روبوتية + مسار تدريبي واضح",
    body:
      "بروتون تجمع منصة تعليمية، ذراعًا روبوتية حقيقية، وخط أنابيب بيانات-تدريب-نشر متكامل — لتدريب مهندسين عراقيين عمليًا على نفس الأدوات التي تُستخدم في أحدث مشاريع الروبوت الصناعية حول العالم.",
    steps: [
      {
        title: "جمع البيانات",
        body: "تسجيل عرض توضيحي للمهام عبر التحكم اليدوي بالذراع، وبناء مجموعة بيانات نظيفة وموسومة.",
      },
      {
        title: "التدريب",
        body: "تدريب سياسات تعلّم بالتقليد (ACT) وتعلّم معزز على البيانات المجمّعة، مع تتبع تجريبي كامل.",
      },
      {
        title: "النشر",
        body: "نشر السياسة المدرّبة على الذراع الحقيقية، وقياس الأداء، والتكرار حتى الوصول لسلوك موثوق.",
      },
    ],
  },
  en: {
    kicker: "The solution",
    title: "A platform, a real arm, and a visual pipeline",
    body:
      "Proton combines a learning platform, a real robot arm, and a complete data-to-deployment pipeline — training Iraqi engineers hands-on with the same tools used in cutting-edge industrial robotics work worldwide.",
    steps: [
      {
        title: "Data collection",
        body: "Teleoperated task demonstrations on the arm, building a clean, labeled dataset.",
      },
      {
        title: "Training",
        body: "Training imitation-learning (ACT) and reinforcement-learning policies on the collected data, with full experiment tracking.",
      },
      {
        title: "Deployment",
        body: "Deploying the trained policy to the real arm, measuring performance, and iterating until behavior is reliable.",
      },
    ],
  },
};

export default function Solution() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section id="solution" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading kicker={c.kicker} title={c.title} body={c.body} />

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {c.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="bg-canvas p-8 relative group"
            >
              <span className="text-5xl font-bold text-ink/10 group-hover:text-accent/30 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">{step.body}</p>

              {i < c.steps.length - 1 && (
                <div
                  className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
                    lang === "ar" ? "-left-3" : "-right-3"
                  } w-6 h-6 items-center justify-center text-accent`}
                  aria-hidden="true"
                >
                  {lang === "ar" ? "←" : "→"}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
