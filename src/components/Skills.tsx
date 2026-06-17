"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
}

function SkillBar({ name, level, delay }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-xs text-muted mb-1.5">
        <span className="font-medium text-white/80">{name}</span>
        <span className="font-mono-custom text-brand-cyan">{level}%</span>
      </div>
      <div className="h-1 bg-brand-blue/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel number="02" label="Skills" />
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-12">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center text-lg">
                  ⚛️
                </div>
                <h3 className="font-display font-semibold text-white">Frontend</h3>
              </div>
              {portfolioData.skills.frontend.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={0.1 + i * 0.1} />
              ))}
            </div>
          </FadeIn>

          {/* Backend */}
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-lg">
                  ⚙️
                </div>
                <h3 className="font-display font-semibold text-white">Backend</h3>
              </div>
              {portfolioData.skills.backend.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={0.1 + i * 0.1} />
              ))}
            </div>
          </FadeIn>

          {/* Tools */}
          <FadeIn delay={0.3}>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-lg">
                  🛠️
                </div>
                <h3 className="font-display font-semibold text-white">Tools & Other</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {portfolioData.skills.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(79,142,247,0.18)" }}
                    className="text-[11px] font-mono-custom text-brand-blue bg-brand-blue/10 border border-brand-blue/25 px-3 py-1.5 rounded-md cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
