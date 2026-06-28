import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import SectionHeading from "./SectionHeading";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const MEMBERS = [
  { name: "Ayham Hamid", photo: "/ayham.jpg", role: { ar: "قائد الفريق", en: "Lead" } },
  { name: "Mohammed Jasim", photo: "/mhmdjassim.jpg", role: { ar: "مختص العتاد", en: "Hardware specialist" } },
  { name: "Muwafaq Salar", photo: "/muwafaq.jpg", role: { ar: "باحث", en: "Researcher" } },
  { name: "Aseel Lubab", photo: "/aseel.jpg", role: { ar: "مبرمجة", en: "Programmer" } },
];

const COPY = {
  ar: {
    kickerSuffix: "الفريق",
    title: "فريق بروتون",
  },
  en: {
    kickerSuffix: "Team",
    title: "The Proton team",
  },
};

export default function Team() {
  const { lang } = useLanguage();
  const c = COPY[lang];

  return (
    <section id="team" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading kicker={<Logo suffix={c.kickerSuffix} />} title={c.title} />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="aspect-square rounded-full border border-line overflow-hidden">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 font-semibold text-sm">{m.name}</p>
              <p className="text-xs text-ink/50">{m.role[lang]}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
