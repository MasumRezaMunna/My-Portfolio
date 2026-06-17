"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

const cards = [
  {
    icon: "💻",
    title: "What I Do",
    text: portfolioData.about.workPreferences,
  },
  {
    icon: "🎮",
    title: "Hobbies & Interests",
    text: portfolioData.about.hobbies,
  },
  {
    icon: "🎯",
    title: "Current Goal",
    text: "Pursuing my BSc in Software Engineering at Daffodil International University while building real-world projects.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel number="01" label="About Me" />
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-12">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-muted text-[15px] leading-relaxed">
              <p>{portfolioData.about.programmingJourney}</p>
              <p>{portfolioData.about.workPreferences}</p>
              <p>{portfolioData.about.hobbies}</p>
            </div>
          </FadeIn>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <FadeIn key={card.title} delay={0.15 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.015, borderColor: "rgba(79,142,247,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h3 className="font-display font-semibold text-sm text-white mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-muted text-[13px] leading-relaxed">{card.text}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
