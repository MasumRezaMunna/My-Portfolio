"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

type Project = (typeof portfolioData.projects)[0];

function ProjectCard({
  project,
  onClick,
  delay,
}: {
  project: Project;
  onClick: () => void;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ y: -6, borderColor: "rgba(79,142,247,0.5)" }}
        transition={{ duration: 0.25 }}
        className="glass-card rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col"
        onClick={onClick}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-navy-3">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-2/70 to-transparent" />
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono-custom text-[10px] text-brand-cyan bg-brand-cyan/8 border border-brand-cyan/20 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="font-display font-bold text-lg text-white mb-2">
            {project.name}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="flex-1 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:opacity-90 transition-opacity"
            >
              View Details →
            </button>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-xl text-sm font-medium text-muted border border-brand-blue/25 hover:border-brand-blue hover:text-brand-blue transition-all"
            >
              Live ↗
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="bg-navy-2 border border-brand-blue/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 border border-brand-blue/15 text-muted hover:text-white hover:bg-white/10 transition-all flex items-center justify-center text-lg z-10"
          >
            ✕
          </button>

          {/* Image */}
          <div className="relative h-52 bg-navy-3 rounded-t-2xl overflow-hidden">
            <Image src={project.image} alt={project.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-2/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-7">
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              {project.name}
            </h2>

            {/* Techs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-custom text-xs text-brand-cyan bg-brand-cyan/8 border border-brand-cyan/20 px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Sections */}
            {[
              { title: "Overview", content: project.fullDescription },
              { title: "Challenges", content: project.challenges },
              { title: "Future Improvements", content: project.improvements },
            ].map((s) => (
              <div key={s.title} className="mb-5">
                <h4 className="font-mono-custom text-xs text-brand-cyan uppercase tracking-widest mb-2">
                  {s.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">{s.content}</p>
              </div>
            ))}

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-brand hover:opacity-90 transition-opacity"
              >
                Live Demo ↗
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white border border-brand-blue/30 hover:border-brand-blue hover:text-brand-blue transition-all"
              >
                GitHub (Client)
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel number="04" label="Projects" />
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-12">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      <div className="mt-24 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
    </section>
  );
}
