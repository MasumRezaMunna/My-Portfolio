"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function Education() {
  const { ref: lineRef, inView: lineInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="education" className="relative z-10 py-28 px-6 md:px-12">
      {/* bg orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(79,142,247,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-brand-cyan" />
            <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
              03 / Education
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-16">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-blue/10" />
          <motion.div
            className="absolute left-6 top-0 w-px"
            style={{
              background: "linear-gradient(180deg, #4F8EF7, #00FFC8)",
              transformOrigin: "top",
              originY: 0,
            }}
            initial={{ scaleY: 0, height: "100%" }}
            animate={lineInView ? { scaleY: 1, height: "100%" } : {}}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          />

          {portfolioData.education.map((edu, i) => (
            <FadeIn key={edu.school} delay={i * 0.15 + 0.2}>
              <div className="relative flex gap-8 mb-10 pl-16">
                {/* Node */}
                <motion.div
                  className="absolute left-0 top-5 w-12 h-12 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={lineInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  {/* Glow ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse, rgba(79,142,247,0.3) 0%, transparent 70%)",
                      animation: "pulse-dot 3s ease-in-out infinite",
                    }}
                  />
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(0,255,200,0.1))",
                      border: "1px solid rgba(79,142,247,0.4)",
                      boxShadow: "0 0 20px rgba(79,142,247,0.25)",
                    }}
                  >
                    🎓
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="gradient-border flex-1 glass-card rounded-2xl p-6 sm:p-8"
                >
                  {/* Year badge */}
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="font-display font-semibold text-base gradient-text mb-0.5">
                        {edu.field}
                      </p>
                      <p className="text-brand-blue font-medium text-sm">{edu.school}</p>
                    </div>
                    <span
                      className="font-mono-custom text-xs px-3 py-1.5 rounded-xl whitespace-nowrap"
                      style={{
                        background: "rgba(0,255,200,0.08)",
                        border: "1px solid rgba(0,255,200,0.2)",
                        color: "#00FFC8",
                      }}
                    >
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">{edu.details}</p>

                  {/* Tags */}
                  {('tags' in edu) && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {((edu as any).tags as string[]).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-custom text-[10px] text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-3 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* GPA */}
                  {('gpa' in edu) && (
                    <div className="mt-5 inline-flex">
                      <span
                        className="font-mono-custom text-xs font-semibold px-4 py-1.5 rounded-xl whitespace-nowrap flex items-center gap-2"
                        style={{
                          background: "linear-gradient(135deg, rgba(79,142,247,0.1), rgba(0,255,200,0.05))",
                          border: "1px solid rgba(79,142,247,0.3)",
                          color: "#4F8EF7"
                        }}
                      >
                        🎯 {(edu as any).gpa}
                      </span>
                    </div>
                  )}
                </motion.div>
              </div>
            </FadeIn>
          ))}

          {/* Future node */}
          <FadeIn delay={0.4}>
            <div className="relative pl-16 flex gap-8">
              <div className="absolute left-0 top-3 w-12 h-12 flex items-center justify-center">
                <div
                  className="w-5 h-5 rounded-full border-2 border-dashed border-brand-blue/30"
                  style={{ animation: "spin-slow 8s linear infinite" }}
                />
              </div>
              <p className="font-mono-custom text-xs text-muted tracking-widest py-3">
                {"// Continuously learning & growing..."}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mt-28 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
