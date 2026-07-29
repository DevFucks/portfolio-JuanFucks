import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";
import { useLang } from "../../contexts/LangContext";

export default function Experience() {
  const { t } = useLang();
  const highlights = t("experience.highlights");

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="section-label mb-6">{t("experience.label")}</div>
        <h2
          className="font-heading font-bold uppercase tracking-tighter text-white mb-16"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
          data-testid="experience-title"
        >
          {t("experience.title")}
        </h2>

        <div className="relative">
          {/* Timeline center line (desktop) / left line (mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2" />

          {/* Single experience entry */}
          <div className="relative pl-14 md:pl-0">
            <span className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full timeline-dot md:-translate-x-1/2" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:w-1/2 md:pr-16 md:text-right md:ml-0"
            >
              <div className="card-neon p-7 md:text-left md:ml-auto">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan mb-4">
                  <Calendar size={12} />
                  <span>{t("experience.period")}</span>
                  <span className="ml-2 px-2 py-0.5 bg-green-neon/10 border border-green-neon/30 text-green-neon">
                    {t("experience.now")}
                  </span>
                </div>

                <h3
                  className="font-heading text-2xl md:text-3xl font-bold text-white mb-1"
                  data-testid="experience-role"
                >
                  {t("experience.role")}
                </h3>
                <div className="flex items-center gap-3 text-[#8a8a93] text-sm mb-5">
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-cyan" />
                    <span className="text-white font-medium">{t("experience.company")}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{t("experience.location")}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-[#c4c4cb] text-sm md:text-base leading-relaxed">
                  {highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex gap-3"
                      data-testid={`experience-bullet-${i}`}
                    >
                      <Sparkles size={14} className="text-cyan flex-shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right-side decorative cards (desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:block absolute right-0 top-12 w-[44%] space-y-4"
            >
              <div className="card-neon p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan mb-2">
                  Tech Stack ativo
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "React Native", "TypeScript", "Laravel", "WebSockets", "MySQL", "Redis"].map((tag) => (
                    <span key={tag} className="skill-pill">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="card-neon p-5 grid grid-cols-3 gap-4">
                <div>
                  <div className="font-heading text-2xl font-black text-cyan text-glow-cyan">7+</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                    Plataformas
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-black text-cyan text-glow-cyan">RT</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                    Real-time
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-black text-cyan text-glow-cyan">FS</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                    Full Stack
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
