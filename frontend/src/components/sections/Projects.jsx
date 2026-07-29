import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "../../contexts/LangContext";

const COVERS = [
  "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1673347765440-ce248bebc94d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
];

export default function Projects() {
  const { t } = useLang();
  const items = t("projects.items");

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
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
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
          {items.map((p, i) => {
            // Asymmetric layout
            const layouts = [
              "col-span-12 md:col-span-8 row-span-2",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-4",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-6",
              "col-span-12 md:col-span-12",
            ];
            const isFeatured = i === 0;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.15 }}
                className={`${layouts[i]} card-neon group relative overflow-hidden`}
                data-testid={`project-card-${i}`}
              >
                {/* Cover */}
                <div className={`relative overflow-hidden ${isFeatured ? "h-72 md:h-80" : "h-48"}`}>
                  <img
                    src={COVERS[i % COVERS.length]}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/30 to-transparent" />
                  <div className="absolute inset-0 bg-cyan/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                  {/* Corner index */}
                  <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan bg-[#030305]/70 px-2 py-1 border border-cyan/30">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                  <span className="absolute top-4 right-4 w-9 h-9 grid place-items-center bg-[#030305]/80 border border-[#1a1a24] group-hover:border-cyan group-hover:text-cyan transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Content */}
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
                  <p className="text-[#8a8a93] text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93] border border-[#1a1a24] px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
