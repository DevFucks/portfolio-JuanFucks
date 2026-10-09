import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { useLang } from "../../contexts/LangContext";
import ProjectCover from "../ProjectCover";
import { PROJECTS, PROJECT_LAYOUTS } from "../../data/projects";

export default function Projects() {
  const { t } = useLang();
  const total = String(PROJECTS.length).padStart(2, "0");

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 overflow-hidden bg-charcoal/40"
    >
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-magenta/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-6">{t("projects.label")}</div>
            <h2
              className="font-heading font-bold uppercase tracking-tighter text-white"
              style={{ fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
              data-testid="projects-title"
            >
              {t("projects.title")}
            </h2>
          </div>
          <p className="max-w-md text-[#8a8a93] text-sm md:text-base">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-5">
          {PROJECTS.map((project, i) => {
            const p = t(`projects.items.${project.key}`);
            const isFeatured = i === 0;
            return (
              <motion.article
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                viewport={{ once: true, amount: 0.15 }}
                className={`${PROJECT_LAYOUTS[i] || "col-span-12 md:col-span-6"} card-neon group relative overflow-hidden flex flex-col`}
                data-testid={`project-card-${project.key}`}
              >
                {/* Barra do card: índice + origem (fora da capa, para não cobrir a arte) */}
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[#1a1a24] font-mono text-[10px] uppercase">
                  <span className="tracking-[0.25em] text-cyan">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                  <span
                    className={`tracking-[0.18em] text-right ${
                      project.kind === "atmo" ? "text-[#8a8a93]" : "text-green-neon"
                    }`}
                  >
                    {t(`projects.kinds.${project.kind}`)}
                  </span>
                </div>

                {/* Capa */}
                <div className={`relative ${isFeatured ? "h-56 md:h-72 lg:h-auto lg:flex-1 lg:min-h-[20rem]" : "h-44"}`}>
                  <ProjectCover projectKey={project.key} className="absolute inset-0" />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan mb-2">
                    {p.category}
                  </div>
                  <h3
                    className={`font-heading font-bold text-white mb-3 ${
                      isFeatured ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className={`text-[#8a8a93] leading-relaxed mb-4 ${isFeatured ? "text-sm md:text-base max-w-2xl" : "text-sm"}`}>
                    {p.description}
                  </p>

                  {p.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-x-8 gap-y-3 mb-5">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className={`font-heading font-black text-cyan text-glow-cyan ${isFeatured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93] mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93] border border-[#1a1a24] px-2 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 flex items-start gap-2 font-mono text-xs text-[#8a8a93]" data-testid="projects-note">
          <Lock size={13} className="text-cyan flex-shrink-0 mt-0.5" />
          {t("projects.note")}
        </p>
      </div>
    </section>
  );
}
