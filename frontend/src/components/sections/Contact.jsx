import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Phone, Check } from "lucide-react";
import { useLang } from "../../contexts/LangContext";

const EMAIL = "juanfuks@hotmail.com";
const PHONE = "+5513991117406";
const PHONE_DISPLAY = "(13) 99111-7406";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);

  const subject = encodeURIComponent("Oportunidade Dev — Portfolio");
  const body = encodeURIComponent(
    "Olá Juan, gostaria de conversar sobre uma oportunidade...\n\n"
  );
  const mailtoHref = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // noop
    }
  };

  // Terminal simulation on view
  useEffect(() => {
    const lines = [
      { prompt: "$", text: "./run-contact.sh" },
      { prompt: ">", text: "Initializing handshake...", color: "cyan" },
      { prompt: ">", text: "Resolving endpoint juanfuks@hotmail.com", color: "dim" },
      { prompt: ">", text: "Connection established ●", color: "green" },
      { prompt: "$", text: "Ready for new opportunity." },
    ];
    let idx = 0;
    setTerminalLines([]);
    const interval = setInterval(() => {
      if (idx >= lines.length) {
        clearInterval(interval);
        return;
      }
      const next = lines[idx];
      idx += 1;
      setTerminalLines((prev) => [...prev, next]);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-40 overflow-hidden bg-grid-fade"
    >
      <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full bg-magenta/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <div className="section-label justify-center mb-8 inline-flex">
            {t("contact.label")}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-heading font-black uppercase tracking-tighter text-white max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.02 }}
            data-testid="contact-title"
          >
            <span className="glitch" data-text={t("contact.title")}>
              {t("contact.title")}
            </span>
          </motion.h2>

          <p className="mt-6 text-[#8a8a93] text-base md:text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="card-neon mt-14 max-w-3xl mx-auto p-6 md:p-8 font-mono text-sm md:text-base"
        >
          <div className="flex items-center gap-1.5 mb-5 pb-4 border-b border-[#1a1a24]">
            <span className="w-3 h-3 rounded-full bg-magenta/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-neon/80" />
            <span className="ml-auto text-[10px] text-[#8a8a93]">contact.sh — juan@portfolio</span>
          </div>

          <div className="space-y-1.5 min-h-[160px]">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2"
              >
                <span className={line.prompt === "$" ? "text-green-neon" : "text-cyan"}>
                  {line.prompt}
                </span>
                <span
                  className={
                    line.color === "cyan"
                      ? "text-cyan"
                      : line.color === "green"
                      ? "text-green-neon"
                      : line.color === "dim"
                      ? "text-[#8a8a93]"
                      : "text-white"
                  }
                >
                  {line.text}
                </span>
              </motion.div>
            ))}
            {terminalLines.length < 5 && (
              <div className="flex gap-2">
                <span className="text-cyan">●</span>
                <span className="terminal-cursor" />
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={mailtoHref}
              data-testid="contact-cta"
              className="btn-neon flex-1 justify-center"
            >
              <Mail size={16} />
              {t("contact.cta")}
            </a>
            <button
              data-testid="copy-email-button"
              onClick={handleCopy}
              className="btn-ghost justify-center"
              aria-label="Copy email"
            >
              {copied ? <Check size={14} className="text-green-neon" /> : <Copy size={14} />}
              {copied ? t("contact.copied") : EMAIL}
            </button>
          </div>
        </motion.div>

        {/* Direct contacts */}
        <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href={`tel:${PHONE}`}
            data-testid="contact-phone"
            className="card-neon p-4 flex items-center gap-3 hover:text-cyan"
          >
            <Phone size={18} className="text-cyan" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                Phone
              </div>
              <div className="text-white font-medium text-sm">{PHONE_DISPLAY}</div>
            </div>
          </a>
          <a
            href="https://github.com/DevFucks/portfolio-JuanFucks"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-github"
            className="card-neon p-4 flex items-center gap-3"
          >
            <Github size={18} className="text-cyan" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                GitHub
              </div>
              <div className="text-white font-medium text-sm">@juanfuks</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/juan-fucks-1a8062123/?skipRedirect=true&enhance=null"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin"
            className="card-neon p-4 flex items-center gap-3"
          >
            <Linkedin size={18} className="text-cyan" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#8a8a93]">
                LinkedIn
              </div>
              <div className="text-white font-medium text-sm">Juan de Sousa Fucks</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
