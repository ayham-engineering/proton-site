import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useLanguage } from "../lib/LanguageContext";
import { useTheme } from "../lib/ThemeContext";
import SectionHeading from "./SectionHeading";

const COPY = {
  ar: {
    kicker: "المشكلة",
    title: "فجوة مهارات حقيقية، وكلفة باهظة لتجاوزها",
    body: "الذكاء الاصطناعي الصناعي والروبوت يتطوران بسرعة عالميًا، لكن الكوادر العراقية المؤهّلة محدودة جدًا. استطلاع أجريناه يؤكد ذلك بالأرقام.",
    surveyNote: "بناءً على استطلاع أجريناه، حزيران ٢٠٢٦.",
    familiarityTitle: "مدى الإلمام بالذكاء الاصطناعي والأتمتة (من ١ إلى ٥)",
    familiarityCaption: "أغلب المشاركين يقيّمون مستواهم بـ ٣ أو أقل.",
    gapTitle: "أكبر فجوة في القطاع الصناعي",
    featuresTitle: "الميزات الأكثر طلبًا في منصة تدريبية (%)",
    interestTitle: "مدى الاهتمام بالانضمام لمنصة كهذه (من ١ إلى ٥)",
    interestCaption: "٦٤٪ من المشاركين يقيّمون اهتمامهم بـ ٤ أو ٥.",
    shareLabel: "النسبة",
    gapCategories: [
      "عدم وجود تدريب عملي محلي",
      "ضعف التوجه الصناعي / فرص قليلة",
      "الاعتماد على العمالة الأجنبية",
      "نقص معدات الأتمتة",
    ],
    featureCategories: [
      "تدريب عملي على روبوتات حقيقية",
      "مشاريع تطبيقية على الصناعة العراقية",
      "إرشاد من خبراء",
      "مجتمع وشبكة تواصل",
      "شهادات معتمدة",
      "محتوى باللغة العربية",
    ],
  },
  en: {
    kicker: "The problem",
    title: "A real skills gap, and an expensive way around it",
    body: "Industrial AI and robotics are advancing fast worldwide, but qualified Iraqi talent is scarce. A survey we ran confirms it with numbers.",
    surveyNote: "Based on a survey we conducted, June 2026.",
    familiarityTitle: "Familiarity with AI/automation (1–5 scale)",
    familiarityCaption: "Most respondents rate themselves 3 or below.",
    gapTitle: "Biggest gap in the industrial sector",
    featuresTitle: "Most-wanted platform features (%)",
    interestTitle: "Interest in joining a platform like this (1–5 scale)",
    interestCaption: "64% of respondents rate their interest 4 or 5.",
    shareLabel: "Share",
    gapCategories: [
      "No local hands-on training",
      "Weak industrial focus / few opportunities",
      "Reliance on foreign labor",
      "Lack of automation equipment",
    ],
    featureCategories: [
      "Hands-on training on real robots",
      "Applied Iraqi-industry projects",
      "Expert mentorship",
      "Community/network",
      "Certificates",
      "Arabic content",
    ],
  },
};

const FAMILIARITY = [10.4, 20.9, 50.7, 14.9, 3.0]; // 1..5, % of respondents
const INTEREST = [3.0, 3.0, 29.9, 22.4, 41.8]; // 1..5, % of respondents
const GAP_VALUES = [28.4, 25.4, 22.4, 17.9];
const FEATURE_VALUES = [76.1, 50.7, 43.3, 26.9, 25.4, 16.4];

export default function Problem() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const c = COPY[lang];

  const ink = theme === "dark" ? "#FAFAFA" : "#121212";
  const gridStroke = theme === "dark" ? "#FFFFFF1A" : "#0000001A";
  const tooltipBg = theme === "dark" ? "#1A1A1A" : "#FFFFFF";
  const tooltipBorder = theme === "dark" ? "#FFFFFF22" : "#00000022";
  const COLORS = [
    "#FF6B00",
    theme === "dark" ? "#7a7a72" : "#b5b5ad",
    theme === "dark" ? "#5a5a52" : "#c8c8c2",
    theme === "dark" ? "#3a3a36" : "#d8d8d2",
  ];

  const familiarityData = FAMILIARITY.map((value, i) => ({ name: String(i + 1), value }));
  const interestData = INTEREST.map((value, i) => ({ name: String(i + 1), value }));
  const gapData = c.gapCategories.map((name, i) => ({ name, value: GAP_VALUES[i] }));
  const featureData = c.featureCategories.map((name, i) => ({ name, value: FEATURE_VALUES[i] }));

  const axisTick = { fill: ink, opacity: 0.65, fontSize: 11 };
  const tooltipStyle = {
    contentStyle: { background: tooltipBg, border: `1px solid ${tooltipBorder}`, borderRadius: 8 },
    labelStyle: { color: ink },
  };

  return (
    <section id="problem" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading kicker={c.kicker} title={c.title} body={c.body} />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border border-line rounded-2xl p-6 md:p-8 bg-ink/[0.02]"
          >
            <p className="text-sm text-ink/70 mb-1">{c.familiarityTitle}</p>
            <div className="h-56 mt-4" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={familiarityData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="name" tick={axisTick} axisLine={{ stroke: gridStroke }} tickLine={false} />
                  <YAxis tick={axisTick} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip
                    {...tooltipStyle}
                    formatter={(v) => [`${v}%`, c.shareLabel] as [string, string]}
                  />
                  <Bar dataKey="value" fill="#FF6B00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-ink/50 mt-3">{c.familiarityCaption}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="border border-line rounded-2xl p-6 md:p-8 bg-ink/[0.02]"
          >
            <p className="text-sm text-ink/70 mb-1">{c.gapTitle}</p>
            <div className="h-56 mt-4 flex items-center" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gapData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={2}
                  >
                    {gapData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip {...tooltipStyle} formatter={(v, name) => [`${v}%`, name] as [string, string]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2 text-xs text-ink/60">
              {gapData.map((d, i) => (
                <li key={d.name} className="flex items-center gap-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: COLORS[i] }}
                  />
                  {d.name} — {d.value}%
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="border border-line rounded-2xl p-6 md:p-8 bg-ink/[0.02] md:col-span-2"
          >
            <p className="text-sm text-ink/70 mb-1">{c.featuresTitle}</p>
            <div className="h-72 mt-4" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={featureData}
                  layout="vertical"
                  margin={{ top: 8, right: 24, left: 8, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} horizontal={false} />
                  <XAxis type="number" tick={axisTick} axisLine={false} tickLine={false} unit="%" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ ...axisTick, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={220}
                  />
                  <Tooltip
                    {...tooltipStyle}
                    formatter={(v) => [`${v}%`, c.shareLabel] as [string, string]}
                  />
                  <Bar dataKey="value" fill="#FF6B00" radius={[0, 4, 4, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="border border-line rounded-2xl p-6 md:p-8 bg-ink/[0.02] md:col-span-2"
          >
            <p className="text-sm text-ink/70 mb-1">{c.interestTitle}</p>
            <div className="h-56 mt-4" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={interestData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                  <XAxis dataKey="name" tick={axisTick} axisLine={{ stroke: gridStroke }} tickLine={false} />
                  <YAxis tick={axisTick} axisLine={false} tickLine={false} unit="%" />
                  <Tooltip
                    {...tooltipStyle}
                    formatter={(v) => [`${v}%`, c.shareLabel] as [string, string]}
                  />
                  <Bar dataKey="value" fill="#FF6B00" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-ink/50 mt-3">{c.interestCaption}</p>
          </motion.div>
        </div>

        <p className="text-xs text-ink/40 mt-6">{c.surveyNote}</p>
      </div>
    </section>
  );
}
