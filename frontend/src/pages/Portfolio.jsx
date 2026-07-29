import React from "react";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function Portfolio() {
  return (
    <div className="relative grain bg-void min-h-screen text-white" data-testid="portfolio-root">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
