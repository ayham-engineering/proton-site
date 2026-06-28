import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import SectionHeading from "./SectionHeading";

const STAGES = {
  ar: [
    {
      key: "training",
      label: "تدريب",
      sub: "الأساسيات",
      summary: "بناء أساس متين في التعلم الآلي والتعلم المعزز والتعلم بالتقليد.",
      skills: [
        "أساسيات التعلم الآلي والشبكات العصبية",
        "مبادئ التعلم المعزز (RL)",
        "مقدمة في التعلم بالتقليد (Imitation Learning)",
        "أدوات بايثون وبيئات المحاكاة",
      ],
      pipeline: ["نظرية", "تمارين محاكاة", "مشاريع صغيرة"],
    },
    {
      key: "qualifying",
      label: "تأهيل",
      sub: "التأهيل العملي",
      summary: "شهادة عملية كاملة عبر خط الأنابيب الحقيقي: من البيانات إلى النشر.",
      skills: [
        "جمع بيانات عرض توضيحي على الذراع الحقيقية",
        "تدريب سياسة ACT للتعلم بالتقليد",
        "تقييم ونشر السياسة على الروبوت",
        "تشخيص الأخطاء وتحسين الأداء الفعلي",
      ],
      pipeline: ["جمع البيانات", "التدريب", "النشر على الذراع", "تقييم"],
    },
    {
      key: "developing",
      label: "تطوير",
      sub: "مشاريع متقدمة",
      summary: "مشاريع متقدمة لخدمة الصناعة العراقية، وتوجيه الدفعة القادمة من المتدربين.",
      skills: [
        "مشاريع روبوت موجهة لاحتياجات صناعية محلية",
        "تصميم خطوط أنابيب تدريب متقدمة",
        "إرشاد ومتابعة المتدربين الجدد",
        "نشر حلول AI صناعية حقيقية",
      ],
      pipeline: ["مشروع صناعي", "إرشاد", "نشر مستمر"],
    },
  ],
  en: [
    {
      key: "training",
      label: "Training",
      sub: "Foundations",
      summary: "Building a solid foundation in machine learning, RL, and imitation learning.",
      skills: [
        "ML and neural network fundamentals",
        "Reinforcement learning principles",
        "Introduction to imitation learning",
        "Python tooling and simulation environments",
      ],
      pipeline: ["Theory", "Simulated exercises", "Small projects"],
    },
    {
      key: "qualifying",
      label: "Qualifying",
      sub: "Hands-on certification",
      summary: "A full hands-on certification across the real pipeline: data to deployment.",
      skills: [
        "Demonstration data collection on the real arm",
        "Training an ACT imitation-learning policy",
        "Evaluating and deploying the policy on the robot",
        "Debugging and improving real-world performance",
      ],
      pipeline: ["Data collection", "Training", "Deploy to arm", "Evaluation"],
    },
    {
      key: "developing",
      label: "Developing",
      sub: "Advanced projects",
      summary: "Advanced projects for Iraqi industry, mentoring the next cohort of trainees.",
      skills: [
        "Robotics projects aimed at local industry needs",
        "Designing advanced training pipelines",
        "Mentoring and supporting new trainees",
        "Deploying real industrial AI solutions",
      ],
      pipeline: ["Industry project", "Mentorship", "Continuous deployment"],
    },
  ],
};

export default function Journey() {
  const { lang } = useLanguage();
  const stages = STAGES[lang];
  const [active, setActive] = useState(0);

  const heading = lang === "ar" ? "المسار" : "The journey";
  const title =
    lang === "ar" ? "ثلاث مراحل، من المتدرّب إلى الموجّه" : "Three stages, from trainee to mentor";
  const body =
    lang === "ar"
      ? "كل مرحلة تبني على ما قبلها. اضغط على أي مرحلة لاستكشاف المهارات المكتسبة وخط الأنابيب الخاص بها."
      : "Each stage builds on the last. Click any stage to explore the skills gained and its pipeline.";

  return (
    <section id="journey" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading kicker={heading} title={title} body={body} />

        <div className="mt-16 flex flex-col md:flex-row gap-3 md:gap-4">
          {stages.map((stage, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={stage.key}
                onClick={() => setActive(i)}
                layout
                className={`relative text-left rtl:text-right rounded-2xl border p-6 md:p-8 flex-1 transition-colors ${
                  isActive
                    ? "border-accent bg-accent/[0.06]"
                    : "border-line bg-ink/[0.02] hover:border-ink/30"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs font-mono tracking-widest ${
                      isActive ? "text-accent" : "text-ink/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="w-2 h-2 rounded-full bg-accent"
                    />
                  )}
                </div>
                <h3 className={`mt-4 text-2xl font-bold ${isActive ? "text-accent" : ""}`}>
                  {stage.label}
                </h3>
                <p className="text-sm text-ink/50 mt-1">{stage.sub}</p>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 text-sm text-ink/75 leading-relaxed">{stage.summary}</p>

                      <ul className="mt-5 space-y-2">
                        {stage.skills.map((skill) => (
                          <li key={skill} className="flex gap-2 text-sm text-ink/70">
                            <span className="text-accent mt-0.5">＋</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {stage.pipeline.map((step, si) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent bg-accent/[0.08]">
                              {step}
                            </span>
                            {si < stage.pipeline.length - 1 && (
                              <span className="text-ink/30 text-xs">
                                {lang === "ar" ? "←" : "→"}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
