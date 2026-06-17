"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel number="03" label="Education" />
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-12">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {portfolioData.education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.008 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 items-start"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-cyan/10 border border-brand-blue/20 flex items-center justify-center text-3xl">
                  🎓
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-brand-blue font-medium text-sm mb-1">{edu.school}</p>
                  <p className="font-mono-custom text-xs text-brand-cyan mb-3">{edu.year}</p>
                  <p className="text-muted text-sm leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
