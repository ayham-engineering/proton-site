import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import SectionHeading from "./SectionHeading";

const COPY = {
  ar: {
    kicker: "خارطة الطريق",
    title: "ما القادم",
    items: [
      "إنهاء الدفعة الأولى وتوثيق خط الأنابيب الكامل من البيانات إلى النشر",
      "افتتاح التسجيل للدفعة القادمة وتوسيع العتاد",
      "شراكة مع جهة صناعية محلية لمشروع تطبيقي حقيقي",
      "إشراف خرّيجي الدفعة الأولى على إرشاد الدفعة القادمة",
      "توسيع نطاق المنصة لتشمل مزيدًا من المهندسين العراقيين",
    ],
  },
  en: {
    kicker: "Roadmap",
    title: "What's next",
    items: [
      "Complete cohort one and document the full training-to-deployment pipeline",
      "Open enrollment for the next cohort and expand the hardware",
      "Partner with a local industrial entity for a real applied project",
      "Have cohort-one graduates mentor the next cohort",
      "Expand the platform's reach to more Iraqi engineers",
    ],
  },
};

export default function Roadmap() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading kicker={c.kicker} title={c.title} />

        <div className="mt-16 relative">
          <div
            className={`absolute top-2 bottom-2 w-px bg-line ${
              lang === "ar" ? "right-1.5" : "left-1.5"
            }`}
            aria-hidden="true"
          />
          <ol className="space-y-8">
            {c.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: lang === "ar" ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className={`relative flex items-start gap-4 ${lang === "ar" ? "pr-8" : "pl-8"}`}
              >
                <span
                  className={`absolute top-0.5 w-3 h-3 rounded-full bg-accent ${
                    lang === "ar" ? "right-0" : "left-0"
                  }`}
                  aria-hidden="true"
                />
                <p className="text-xs font-mono text-accent shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-ink/80 leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
