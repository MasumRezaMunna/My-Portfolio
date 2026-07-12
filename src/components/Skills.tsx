"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import FadeIn from "./FadeIn";

interface SkillData {
  name: string;
  level: number;
  icon: string;
}

const frontendWithIcons: SkillData[] = [
  { name: "React.js", level: 90, icon: "⚛️" },
  { name: "Next.js", level: 80, icon: "▲" },
  { name: "JavaScript", level: 85, icon: "𝗝𝗦" },
  { name: "Tailwind CSS", level: 88, icon: "🎨" },
];

const backendWithIcons: SkillData[] = [
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Express.js", level: 78, icon: "🚂" },
  { name: "MongoDB", level: 82, icon: "🍃" },
  { name: "JWT Auth", level: 75, icon: "🔐" },
];

const allTools = [
  ...portfolioData.skills.tools,
  ...portfolioData.skills.tools, // duplicate for infinite scroll
];

function SkillCard({ skill, delay }: { skill: SkillData; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ scale: 1.05, y: -4 }}
        transition={{ duration: 0.2 }}
        className="glass-card rounded-2xl p-6 flex flex-col items-center gap-4 group cursor-default"
        style={{ border: "1px solid rgba(79,142,247,0.15)" }}
      >
        <div 
          className="w-16 h-16 flex items-center justify-center text-3xl rounded-xl"
          style={{ 
            background: "linear-gradient(135deg, rgba(79,142,247,0.1), rgba(0,255,200,0.05))",
            border: "1px solid rgba(79,142,247,0.2)"
          }}
        >
          {skill.icon}
        </div>
        <p className="font-display font-bold text-base text-white text-center tracking-wide">{skill.name}</p>
      </motion.div>
    </FadeIn>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend">("frontend");
  const currentSkills = activeCategory === "frontend" ? frontendWithIcons : backendWithIcons;

  return (
    <section id="skills" className="relative z-10 py-28 px-6 md:px-12">
      {/* bg orb */}
      <div
        className="absolute top-1/2 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,255,200,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-brand-cyan" />
            <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
              02 / Skills
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-14">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </FadeIn>

        {/* Category toggle */}
        <FadeIn delay={0.1}>
          <div className="flex gap-3 mb-10 flex-wrap">
            {(["frontend", "backend"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-navy-DEFAULT font-bold"
                    : "glass-card text-muted hover:text-white"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }
                    : {}
                }
              >
                {cat === "frontend" ? "⚛️ Frontend" : "⚙️ Backend"}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Radial skill cards */}
        <FadeIn delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {currentSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
            ))}
          </div>
        </FadeIn>

        {/* Tools Marquee */}
        <FadeIn delay={0.25}>
          <div className="mb-5">
            <p className="font-mono-custom text-xs text-muted tracking-widest uppercase mb-4">
              {"// Tools & Technologies"}
            </p>
            <div className="relative overflow-hidden rounded-2xl glass-card py-4">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(90deg, rgba(5,10,24,0.9), transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(-90deg, rgba(5,10,24,0.9), transparent)" }} />

              {/* Row 1 */}
              <div className="flex mb-3">
                <div className="marquee-track">
                  {allTools.map((tool, i) => (
                    <span
                      key={i}
                      className="font-mono-custom text-[11px] text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-4 py-2 rounded-xl whitespace-nowrap"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 2 — reverse */}
              <div className="flex">
                <div className="marquee-track-reverse">
                  {[...allTools].reverse().map((tool, i) => (
                    <span
                      key={i}
                      className="font-mono-custom text-[11px] text-brand-cyan bg-brand-cyan/8 border border-brand-cyan/15 px-4 py-2 rounded-xl whitespace-nowrap"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="mt-28 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
