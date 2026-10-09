import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../../contexts/LangContext";
import { MARQUEE_WORDS, SKILL_GROUPS } from "../../data/skills";

export default function Skills() {
  const { t } = useLang();

  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal/40"
    >
      {/* Marquee background (decorativo) */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-30"
      >
        <div className="marquee">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className="font-heading font-black text-outline-cyan whitespace-nowrap mx-8"
              style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 1 }}
            >
              {w} ·
            </span>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-12 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-20"
      >
        <div className="marquee marquee-reverse marquee-slow">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className="font-heading font-black text-outline whitespace-nowrap mx-8"
              style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 1 }}
            >
              {w} ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="section-label mb-6">{t("skills.label")}</div>
        <h2
          className="font-heading font-bold uppercase tracking-tighter text-white mb-4"
          style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
          data-testid="skills-title"
        >
          {t("skills.title")}
        </h2>
        <p className="max-w-2xl text-[#8a8a93] text-base md:text-lg mb-14">
          {t("skills.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.keyCat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              data-testid={`skills-group-${group.keyCat}`}
              className="card-neon p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
                  {t(`skills.categories.${group.keyCat}`)}
                </h3>
                <span className="font-mono text-[10px] text-[#8a8a93]">
                  {String(idx + 1).padStart(2, "0")} / {String(SKILL_GROUPS.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="skill-pill"
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
