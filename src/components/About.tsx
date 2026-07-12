"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import FadeIn from "./FadeIn";

const tabs = [
  { id: "journey", label: "My Journey", icon: "🚀" },
  { id: "work", label: "What I Do", icon: "💻" },
  { id: "hobbies", label: "Hobbies", icon: "🎮" },
];

const tabContent: Record<string, string> = {
  journey: portfolioData.about.programmingJourney,
  work: portfolioData.about.workPreferences,
  hobbies: portfolioData.about.hobbies,
};

const stats = [
  { value: "3+", label: "Projects Built", icon: "🏗️" },
  { value: "8+", label: "Technologies", icon: "⚡" },
  { value: "2025", label: "Year Started", icon: "📅" },
];

const codeLines = [
  { token: "const", rest: " developer = {" },
  { token: "  name:", rest: ' "Masum Reza Munna",' },
  { token: "  stack:", rest: ' ["React", "Node", "MongoDB"],' },
  { token: "  passion:", rest: ' "Building the web",' },
  { token: "  status:", rest: ' "Available 🟢",' },
  { token: "}", rest: "" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("journey");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative z-10 py-28 px-6 md:px-12">
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-brand-cyan" />
            <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
              01 / About Me
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-14">
            Who <span className="gradient-text-violet">I Am</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT: Tabs */}
          <div>
            {/* Tab buttons */}
            <FadeIn delay={0.1}>
              <div className="flex gap-2 mb-6 glass-card rounded-2xl p-1.5 w-fit">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="tab-bg"
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(0,255,200,0.1))",
                          border: "1px solid rgba(79,142,247,0.3)",
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{tab.icon}</span>
                    <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Tab content */}
            <FadeIn delay={0.15}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl p-6 min-h-[160px]"
                >
                  <p className="text-muted text-[15px] leading-relaxed">{tabContent[activeTab]}</p>
                </motion.div>
              </AnimatePresence>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.25}>
              <div ref={ref} className="grid grid-cols-3 gap-3 mt-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="glass-card rounded-2xl p-4 text-center"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="font-display font-extrabold text-xl gradient-text">{stat.value}</div>
                    <div className="font-mono-custom text-[10px] text-muted mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Terminal Card */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="gradient-border rounded-2xl overflow-hidden"
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-5 py-3.5"
                style={{ background: "rgba(10,18,40,0.9)", borderBottom: "1px solid rgba(79,142,247,0.15)" }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono-custom text-[11px] text-muted">developer.js</span>
              </div>

              {/* Code body */}
              <div
                className="p-6 font-mono-custom text-[13px] leading-loose"
                style={{ background: "rgba(5,10,24,0.95)" }}
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="flex gap-3"
                  >
                    <span className="text-muted/40 select-none w-4 text-right text-xs">{i + 1}</span>
                    <span>
                      <span style={{ color: "#7C3AED" }}>{line.token}</span>
                      <span style={{ color: line.rest.includes('"') ? "#00FFC8" : "#f0f4ff" }}>
                        {line.rest}
                      </span>
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-brand-cyan ml-7 mt-1 align-middle"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      <div className="mt-28 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
