import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Languages, MapPin, Sparkles } from "lucide-react";
import { useLang } from "../../contexts/LangContext";
import useReveal from "../../hooks/useReveal";

export default function About() {
  const { t } = useLang();
  const ref = useReveal();

  const stats = t("about.stats");

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />

      <div ref={ref} className="reveal max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="section-label mb-6" data-testid="about-label">
          {t("about.label")}
        </div>

        <h2
          className="font-heading font-bold uppercase tracking-tighter text-white mb-12 max-w-4xl"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
          data-testid="about-title"
        >
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {/* Photo panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 lg:col-span-4"
          >
            <div className="relative card-neon aspect-[3/4] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                alt="Juan de Sousa Fucks"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                <span>ID·001</span>
                <span className="text-green-neon">● ONLINE</span>
              </div>
              {/* Corner accents */}
              <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-cyan" />
              <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-cyan" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-cyan" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-cyan" />
            </div>
          </motion.div>

          {/* Text + stats panel */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-6">
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#c4c4cb]">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p className="text-white border-l-2 border-cyan pl-4">
                {t("about.p3")}
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {Object.entries(stats).map(([key, s]) => (
                <div
                  key={key}
                  data-testid={`about-stat-${key}`}
                  className="card-neon p-4 group"
                >
                  <div className="font-heading text-3xl font-black text-cyan text-glow-cyan">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Education & languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="card-neon p-5">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={16} className="text-cyan" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    {t("about.edu_title")}
                  </h3>
                </div>
                <div className="text-white font-medium">{t("about.edu_degree")}</div>
                <div className="text-[#8a8a93] text-sm mt-1">
                  {t("about.edu_school")}
                </div>
              </div>

              <div className="card-neon p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Languages size={16} className="text-cyan" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                    {t("about.langs_title")}
                  </h3>
                </div>
                <div className="space-y-1">
                  {t("about.langs").map((l, i) => (
                    <div key={i} className="text-white text-sm font-mono">
                      <span className="text-cyan mr-2">→</span>
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
