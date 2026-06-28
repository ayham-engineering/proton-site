import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  body,
  align = "start",
}: {
  kicker: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  align?: "start" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="uppercase tracking-[0.2em] text-xs text-accent font-medium mb-4">{kicker}</p>
      <h2 className="text-balance text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {body && <p className="mt-5 text-ink/70 leading-relaxed">{body}</p>}
    </motion.div>
  );
}
