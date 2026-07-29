import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "../contexts/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-[#1a1a24] bg-[#030305]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-mono text-sm tracking-widest text-white flex items-center gap-1">
              <span className="text-cyan">{"<"}</span>
              <span>Juan</span>
              <span className="text-cyan">{"/>"}</span>
            </div>
            <p className="text-[#8a8a93] text-sm mt-2 max-w-md">
              {t("footer.built")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/juanfuks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 grid place-items-center border border-[#1a1a24] text-[#8a8a93] hover:border-cyan hover:text-cyan transition-all"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-de-sousa-fucks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 grid place-items-center border border-[#1a1a24] text-[#8a8a93] hover:border-cyan hover:text-cyan transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:juanfuks@hotmail.com"
                aria-label="Email"
                className="w-9 h-9 grid place-items-center border border-[#1a1a24] text-[#8a8a93] hover:border-cyan hover:text-cyan transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
            <div className="font-mono text-[11px] text-[#8a8a93] uppercase tracking-widest">
              © {year} · Juan de Sousa Fucks. {t("footer.rights")}
            </div>
          </div>
        </div>

        {/* Console line */}
        <div className="mt-6 pt-6 border-t border-[#1a1a24] flex items-center justify-between gap-4 font-mono text-[10px] text-[#8a8a93] uppercase tracking-widest">
          <span><span className="text-green-neon">●</span> system: online</span>
          <span className="text-cyan">v 1.0.0 // built with React</span>
          <span>São Paulo · BR</span>
        </div>
      </div>
    </footer>
  );
}
