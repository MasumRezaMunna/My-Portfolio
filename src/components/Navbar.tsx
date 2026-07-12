"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);

      // Active section
      const sections = ["hero", "about", "skills", "education", "projects", "contact"];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-0"
            : "py-2"
        }`}
      >
        <div className={`max-w-6xl mx-auto px-6 md:px-12 transition-all duration-500 ${
          scrolled ? "pt-3 pb-3" : "pt-4 pb-4"
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass-card-bright rounded-2xl px-6 py-3 shadow-card"
              : "px-0"
          }`}>
            {/* Logo */}
            <a
              href="#hero"
              className="font-display font-extrabold text-xl tracking-tight relative group"
            >
              <span className="gradient-text-violet relative">
                {"<Munna />"}
              </span>
              <span
                className="absolute inset-0 gradient-text-violet opacity-0 group-hover:opacity-100"
                style={{ animation: "glitch 0.4s ease-in-out", animationPlayState: "paused" }}
              />
            </a>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 block ${
                        isActive
                          ? "text-brand-cyan font-bold"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-cyan"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-navy-DEFAULT relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }}
            >
              <span className="relative z-10 flex items-center gap-2 text-navy-DEFAULT font-bold">
                ⬇ Download CV
              </span>
              <span className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #4F8EF7, #00FFC8)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #4F8EF7, #00FFC8)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded"
                style={{ background: "linear-gradient(90deg, #4F8EF7, #00FFC8)" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed top-20 left-4 right-4 z-40 glass-card-bright rounded-2xl shadow-card border border-brand-blue/20 px-6 py-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between py-3 text-base text-muted hover:text-white border-b border-brand-blue/10 last:border-0 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-brand-cyan text-xs">→</span>
              </motion.a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center py-3 rounded-xl text-sm font-bold text-navy-DEFAULT"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }}
            >
              ⬇ Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
