import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLang } from "../../contexts/LangContext";
import { CORE_STACK } from "../../data/skills";

export default function Experience() {
  const { t } = useLang();
  const items = t("experience.items");
  const sideStats = t("experience.side.stats");

  return (
    <section
      id="experience"
      data-testid="experience-section"
      // overflow-x-clip (e não hidden) para o painel lateral sticky funcionar
      className="relative py-24 md:py-32 overflow-x-clip"
    >
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="section-label mb-6">{t("experience.label")}</div>
        <h2
          className="font-heading font-bold uppercase tracking-tighter text-white mb-16"
          style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
          data-testid="experience-title"
        >
          {t("experience.title")}
        </h2>

        <div className="relative">
          {/* Linha da timeline: centro no desktop (lg+), esquerda em telas menores */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px timeline-line lg:-translate-x-1/2" />

          <ol className="space-y-10 lg:space-y-16">
            {items.map((item, i) => {
              const onRight = i % 2 === 1;
              return (
                <li
                  key={item.company}
                  className="relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28 lg:items-start"
                  data-testid={`experience-item-${i}`}
                >
                  <span className="absolute left-4 lg:left-1/2 top-8 w-3 h-3 rounded-full timeline-dot -translate-x-1/2" />

                  <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className={`card-neon p-6 md:p-7 ${onRight ? "lg:col-start-2" : ""}`}
                  >
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan mb-4">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </div>

                    <h3
                      className="font-heading text-xl md:text-2xl font-bold text-white mb-2"
                      data-testid={`experience-role-${i}`}
                    >
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#8a8a93] text-sm mb-5">
                      <div className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-cyan" />
                        <span className="text-white font-medium">{item.company}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-3 text-[#c4c4cb] text-sm md:text-[15px] leading-relaxed">
                      {item.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3"
                          data-testid={`experience-bullet-${i}-${j}`}
                        >
                          <span className="mt-[0.6em] w-1.5 h-1.5 bg-cyan flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>

                  {/* Painel lateral só na experiência principal */}
                  {i === 0 && (
                    <motion.aside
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="mt-4 lg:mt-0 space-y-4 lg:sticky lg:top-24"
                    >
                      <div className="card-neon p-5">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan mb-3">
                          {t("experience.side.stack_title")}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {CORE_STACK.map((tag) => (
                            <span key={tag} className="skill-pill">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="card-neon p-5 grid grid-cols-3 gap-4">
                        {sideStats.map((s) => (
                          <div key={s.label}>
                            <div className="font-heading text-xl lg:text-2xl font-black text-cyan text-glow-cyan">
                              {s.value}
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93] mt-1">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.aside>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
