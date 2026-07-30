import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Particles from "../Particles";
import { useLang } from "../../contexts/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [typed, setTyped] = useState("");
  const fullRole = t("hero.role");

  useEffect(() => {
    let i = 0;
    setTyped(fullRole.slice(0, 0));
    const interval = setInterval(() => {
      i += 1;
      setTyped(fullRole.slice(0, i));
      if (i >= fullRole.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [fullRole]);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-grid-fade"
    >
      <Particles />
      {/* Decorative blurs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-magenta/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left content */}
          <div className="col-span-12 lg:col-span-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-green-neon border border-[#1a1a24] bg-[#0c0c10]/70 backdrop-blur-md px-4 py-2 mb-8"
              data-testid="hero-status"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-neon opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-neon" />
              </span>
              {t("hero.status")}
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-sm md:text-base text-cyan mb-4"
            >
              {t("hero.greeting")}
            </motion.p>

            {/* Name with glitch */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              data-testid="hero-name"
              aria-label="Juan Fucks"
              className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
            >
              <span className="glitch block" data-text="Juan">
                Juan
              </span>
              <span className="block text-cyan text-glow-cyan glitch" data-text="Fucks.">
                Fucks.
              </span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 font-mono text-base md:text-lg text-text-dim"
            >
              <span className="text-cyan">{">"}</span>{" "}
              <span data-testid="hero-role" className="text-white">{typed}</span>
              <span className="terminal-cursor" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-[#8a8a93]"
              data-testid="hero-tagline"
            >
              {t("hero.tagline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="btn-neon"
              >
                <Mail size={16} />
                {t("hero.cta_primary")}
              </a>
              <a
                href="#projects"
                data-testid="hero-cta-secondary"
                className="btn-ghost"
              >
                {t("hero.cta_secondary")}
                <ArrowDown size={14} className="rotate-[-45deg]" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex items-center gap-6"
            >
              <a
                href="https://github.com/DevFucks/portfolio-JuanFucks"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-github"
                className="text-[#8a8a93] hover:text-cyan transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/juan-fucks-1a8062123/?skipRedirect=true&enhance=null"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-linkedin"
                className="text-[#8a8a93] hover:text-cyan transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:juanfuks@hotmail.com"
                data-testid="hero-email"
                className="text-[#8a8a93] hover:text-cyan transition-colors flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>
          </div>

          {/* Right panel: terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block col-span-4"
          >
            <div className="card-neon p-6 font-mono text-xs leading-relaxed">
              <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[#1a1a24]">
                <span className="w-3 h-3 rounded-full bg-magenta/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-neon/80" />
                <span className="ml-auto text-[10px] text-[#8a8a93]">juan@portfolio:~</span>
              </div>
              <div className="space-y-1.5 text-[#8a8a93]">
                <div><span className="text-green-neon">$</span> whoami</div>
                <div className="text-white">juan_de_sousa_fucks</div>
                <div><span className="text-green-neon">$</span> cat role.txt</div>
                <div className="text-cyan">Frontend / Full Stack Developer</div>
                <div><span className="text-green-neon">$</span> location</div>
                <div className="text-white">São Paulo · 🇧🇷</div>
                <div><span className="text-green-neon">$</span> stack --primary</div>
                <div className="text-white flex flex-wrap gap-1">
                  <span className="text-cyan">React</span>·
                  <span className="text-cyan">Next</span>·
                  <span className="text-cyan">RN</span>·
                  <span className="text-cyan">TS</span>·
                  <span className="text-cyan">Laravel</span>
                </div>
                <div><span className="text-green-neon">$</span> status</div>
                <div className="text-green-neon">● open_to_work</div>
                <div className="pt-2"><span className="text-green-neon">$</span> <span className="terminal-cursor" /></div>
              </div>
            </div>

            {/* Floating coords */}
            <div className="mt-6 flex justify-between font-mono text-[10px] text-[#8a8a93]">
              <span>LAT -23.55</span>
              <span>LON -46.63</span>
              <span className="text-cyan">SYS·OK</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#8a8a93] hover:text-cyan transition-colors"
          data-testid="scroll-indicator"
        >
          <span>{t("hero.scroll")}</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
