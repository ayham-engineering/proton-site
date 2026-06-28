import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";
import SectionHeading from "./SectionHeading";

const COPY = {
  ar: {
    kicker: "تواصل",
    title: "اهتمامك بالموضوع يهمّنا",
    body: "سواء كنت مهندسًا تريد الانضمام، أو شريكًا صناعيًا، أو جهة داعمة — تواصل معنا.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    role: "أنا...",
    roles: ["مهندس / متدرب محتمل", "شريك صناعي", "جهة داعمة", "أخرى"],
    message: "رسالتك",
    submit: "إرسال",
    success: "تم استلام رسالتك. سنعود إليك قريبًا.",
  },
  en: {
    kicker: "Contact",
    title: "We'd like to hear from you",
    body: "Whether you're an engineer who wants to join, an industry partner, or a supporter — get in touch.",
    name: "Full name",
    email: "Email",
    role: "I am a...",
    roles: ["Prospective engineer / trainee", "Industry partner", "Supporter", "Other"],
    message: "Your message",
    submit: "Send",
    success: "Thanks — we've received your message and will be in touch.",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const c = COPY[lang];
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <SectionHeading kicker={c.kicker} title={c.title} body={c.body} />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm text-ink/60 mb-2">{c.name}</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-ink/60 mb-2">{c.email}</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-ink/60 mb-2">{c.role}</label>
            <select className="w-full bg-canvas border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors">
              {c.roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-ink/60 mb-2">{c.message}</label>
            <textarea
              rows={4}
              className="w-full bg-transparent border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-accent text-white font-semibold px-8 py-3 text-sm hover:bg-accent/90 transition-colors"
          >
            {c.submit}
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-accent"
            >
              {c.success}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
