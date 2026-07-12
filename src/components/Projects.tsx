"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import FadeIn from "./FadeIn";

type Project = (typeof portfolioData.projects)[0];

const allTechs = ["All", ...Array.from(new Set(portfolioData.projects.flatMap((p) => p.technologies)))];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "challenges", label: "Challenges" },
    { id: "future", label: "Future" },
  ];

  const content: Record<string, string> = {
    overview: project.fullDescription,
    challenges: project.challenges,
    future: project.improvements,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(5,10,24,0.9)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl relative"
        style={{
          background: "rgba(10,18,40,0.95)",
          border: "1px solid rgba(79,142,247,0.25)",
          boxShadow: "0 0 80px rgba(79,142,247,0.15), 0 32px 64px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl glass-card flex items-center justify-center text-muted hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Hero image */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <Image src={project.image} alt={project.name} fill className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,18,40,1) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-5 left-6 right-16">
            <h2 className="font-display font-extrabold text-2xl text-white mb-2">{project.name}</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-custom text-[10px] text-brand-cyan px-2.5 py-0.5 rounded-lg"
                  style={{ background: "rgba(0,255,200,0.1)", border: "1px solid rgba(0,255,200,0.2)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tab selector */}
          <div className="flex gap-1 glass-card rounded-xl p-1 w-fit mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="modal-tab"
                    className="absolute inset-0 rounded-lg bg-brand-blue/20 border border-brand-blue/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="text-muted text-sm leading-relaxed mb-6"
            >
              {content[activeTab]}
            </motion.p>
          </AnimatePresence>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-navy-DEFAULT"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }}
            >
              Live Demo ↗
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white glass-card hover:border-brand-blue/40 transition-all"
            >
              GitHub →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FeaturedCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="gradient-border glass-card rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative h-52 md:h-full min-h-[220px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, transparent 50%, rgba(10,18,40,0.6))" }}
          />
          <span
            className="absolute top-4 left-4 font-mono-custom text-[10px] px-2.5 py-1 rounded-full"
            style={{ background: "rgba(0,255,200,0.15)", border: "1px solid rgba(0,255,200,0.3)", color: "#00FFC8" }}
          >
            ⭐ Featured
          </span>
        </div>
        {/* Content */}
        <div className="p-6 flex flex-col">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-[10px] text-brand-cyan px-2.5 py-0.5 rounded-md"
                style={{ background: "rgba(0,255,200,0.08)", border: "1px solid rgba(0,255,200,0.15)" }}
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white mb-2">{project.name}</h3>
          <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
          <div className="flex gap-3">
            <button
              className="flex-1 py-2.5 rounded-xl text-sm font-bold text-navy-DEFAULT"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }}
              onClick={(e) => { e.stopPropagation(); onClick(); }}
            >
              View Details →
            </button>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2.5 rounded-xl text-sm font-medium glass-card text-muted hover:text-brand-cyan transition-colors"
            >
              Live ↗
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick, delay }: { project: Project; onClick: () => void; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        onClick={onClick}
        className="glass-card rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col"
        style={{ border: "1px solid rgba(79,142,247,0.12)" }}
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(10,18,40,0.8) 0%, transparent 60%)" }}
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-[9px] text-brand-cyan px-2 py-0.5 rounded-md"
                style={{ background: "rgba(0,255,200,0.06)", border: "1px solid rgba(0,255,200,0.15)" }}
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="font-display font-bold text-base text-white mb-2">{project.name}</h3>
          <p className="text-muted text-[13px] leading-relaxed flex-1 mb-4">{project.description}</p>
          <div className="flex gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="flex-1 py-2 rounded-xl text-xs font-bold text-navy-DEFAULT"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #00FFC8)" }}
            >
              Details →
            </button>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-2 rounded-xl text-xs font-medium glass-card text-muted hover:text-brand-cyan transition-colors"
            >
              Live ↗
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const featured = portfolioData.projects[0];
  const rest = portfolioData.projects.slice(1);

  const filtered = filter === "All" ? rest : rest.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects" className="relative z-10 py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-brand-cyan" />
            <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
              04 / Projects
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-14">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </FadeIn>

        {/* Featured project */}
        <FadeIn delay={0.1}>
          <div className="mb-10">
            <FeaturedCard project={featured} onClick={() => setSelected(featured)} />
          </div>
        </FadeIn>

        {/* Filter chips */}
        {rest.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-2 mb-8">
              {allTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`font-mono-custom text-xs px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                    filter === tech
                      ? "text-navy-DEFAULT font-bold"
                      : "glass-card text-muted hover:text-white"
                  }`}
                  style={
                    filter === tech
                      ? { background: "linear-gradient(135deg, #7C3AED, #4F8EF7)" }
                      : {}
                  }
                >
                  {tech}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
                delay={i * 0.1}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <div className="mt-28 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
