import React, { useEffect, useState } from "react";
import { useLang } from "../contexts/LangContext";
import { ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const { lang, setLang, t, langs } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#030305]/80 border-b border-[#1a1a24]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#home"
          data-testid="header-logo"
          className="font-mono text-sm tracking-widest text-white hover:text-cyan transition-colors flex items-center gap-2"
        >
          <span className="text-cyan">{"<"}</span>
          <span>Juan</span>
          <span className="text-cyan">{"/>"}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              data-testid={`nav-${item.key}`}
              className="font-mono text-xs uppercase tracking-[0.18em] text-[#8a8a93] hover:text-cyan transition-colors relative group"
            >
              <span className="text-cyan/60 mr-1">/</span>
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-cyan scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button
              data-testid="language-toggle"
              onClick={() => setOpen((o) => !o)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              className="font-mono text-xs uppercase tracking-widest text-white border border-[#1a1a24] hover:border-cyan hover:text-cyan transition-all px-3 py-2 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              {langs.find((l) => l.code === lang)?.label}
              <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
              <div
                data-testid="language-dropdown"
                className="absolute right-0 mt-2 min-w-[120px] bg-[#0c0c10] border border-[#1a1a24] backdrop-blur-xl"
              >
                {langs.map((l) => (
                  <button
                    key={l.code}
                    data-testid={`language-option-${l.code}`}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                      l.code === lang
                        ? "text-cyan bg-cyan/5"
                        : "text-[#8a8a93] hover:text-cyan hover:bg-cyan/5"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden font-mono text-white border border-[#1a1a24] px-3 py-2 hover:border-cyan hover:text-cyan transition-all"
            onClick={() => setMobileOpen((m) => !m)}
            aria-label="Toggle navigation"
          >
            <span className="block w-4 h-px bg-current" />
            <span className="block w-4 h-px bg-current mt-1" />
            <span className="block w-4 h-px bg-current mt-1" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          data-testid="mobile-nav"
          className="md:hidden bg-[#030305]/95 backdrop-blur-xl border-t border-[#1a1a24]"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                data-testid={`mobile-nav-${item.key}`}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-[#8a8a93] hover:text-cyan"
              >
                <span className="text-cyan/60 mr-2">/</span>
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
