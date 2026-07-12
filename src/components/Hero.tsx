"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { portfolioData } from "@/data/portfolio";

// Social SVG icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialLinks = [
  { icon: GithubIcon, href: portfolioData.social.github, label: "GitHub", color: "#4F8EF7" },
  { icon: LinkedinIcon, href: portfolioData.social.linkedin, label: "LinkedIn", color: "#00FFC8" },
  { icon: FacebookIcon, href: portfolioData.social.facebook, label: "Facebook", color: "#7C3AED" },
  { icon: WhatsappIcon, href: portfolioData.social.whatsapp, label: "WhatsApp", color: "#00FFC8" },
];

const orbitBadges = [
  { label: "React", emoji: "⚛️", className: "orbit-badge-1" },
  { label: "Node", emoji: "🟢", className: "orbit-badge-2" },
  { label: "Next", emoji: "▲", className: "orbit-badge-1", style: { animationDelay: "-6s" } },
  { label: "Mongo", emoji: "🍃", className: "orbit-badge-2", style: { animationDelay: "-9s" } },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Magnetic Button Hook
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return { ref, onMove, onLeave };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const magPrimary = useMagnetic(0.3);
  const magSecondary = useMagnetic(0.3);

  useEffect(() => {
    // 3D tilt on photo
    const el = photoRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(600px) rotateY(${dx * 12}deg) rotateX(${-dy * 12}deg) scale(1.02)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".hero-parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    };
    initGSAP();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div
        className="orb w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
          filter: "blur(60px)",
          position: "absolute",
        }}
      />
      <div
        className="orb w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "-5%",
          filter: "blur(60px)",
          position: "absolute",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center hero-parallax">
          {/* LEFT — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-brand-cyan" />
              <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
                Hello World 👋
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.0] mb-4"
            >
              <span className="text-white">MD Masum</span>
              <br />
              <span className="gradient-text-violet">Reza Munna</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="font-mono-custom text-lg sm:text-xl text-brand-cyan mb-5 flex items-center gap-2 h-8"
            >
              <span className="text-muted">{"// "}</span>
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "React.js Engineer",
                  2000,
                  "Full-Stack Builder",
                  2000,
                  "UI Craftsman",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-brand-cyan"
              />
              <span className="inline-block w-0.5 h-5 bg-brand-cyan cursor-blink ml-0.5" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted text-base leading-relaxed max-w-lg mb-8"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a
                ref={magPrimary.ref}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={magPrimary.onMove}
                onMouseLeave={magPrimary.onLeave}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7 0%, #00FFC8 100%)",
                  color: "#050A18",
                  transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease",
                  boxShadow: "0 0 30px rgba(79,142,247,0.3)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2"><Download className="w-4 h-4" /> View Resume</span>
                <span className="absolute inset-0 shimmer-btn opacity-60" />
              </a>
              <a
                ref={magSecondary.ref}
                href="#projects"
                onMouseMove={magSecondary.onMove}
                onMouseLeave={magSecondary.onLeave}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white border border-brand-blue/30 hover:border-brand-cyan/60 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all duration-200"
              >
                View Projects →
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted transition-all duration-200 group"
                  style={{"--hover-color": color} as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = color;
                    (e.currentTarget as HTMLElement).style.borderColor = color + "55";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${color}33`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div
              ref={photoRef}
              className="relative w-72 h-72 sm:w-[340px] sm:h-[340px]"
              style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d" }}
            >
              {/* Orbit badges */}
              {orbitBadges.map((badge, i) => (
                <div
                  key={i}
                  className={badge.className}
                  style={badge.style}
                >
                  <div className="glass-card-bright rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 whitespace-nowrap shadow-card">
                    <span className="text-sm">{badge.emoji}</span>
                    <span className="font-mono-custom text-[10px] text-brand-cyan font-medium">
                      {badge.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Spinning rings */}
              <div
                className="absolute inset-[-32px] rounded-full spin-ring opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, #4F8EF7, #00FFC8, #7C3AED, #4F8EF7)",
                }}
              />
              <div
                className="absolute inset-[-16px] rounded-full spin-ring-reverse opacity-15"
                style={{
                  background: "conic-gradient(from 180deg, #00FFC8, #7C3AED, #4F8EF7, #00FFC8)",
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-40"
                style={{ background: "radial-gradient(ellipse, #4F8EF7 0%, #7C3AED 50%, transparent 70%)" }}
              />

              {/* Photo */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-[3px] border-brand-blue/30" style={{ boxShadow: "0 0 40px rgba(79,142,247,0.2)" }}>
                <Image
                  src={portfolioData.personal.heroPhoto}
                  alt={portfolioData.personal.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-left-10 glass-card-bright rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-glow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-cyan pulse-dot" />
                <span className="font-mono-custom text-[11px] text-brand-cyan font-medium">
                  Open to opportunities
                </span>
              </motion.div>

              {/* Stack badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-0 -right-4 sm:-right-8 glass-card-bright rounded-2xl px-4 py-2.5 text-center shadow-card"
              >
                <p className="font-mono-custom text-[9px] text-muted uppercase tracking-widest mb-0.5">
                  Stack
                </p>
                <p className="font-display font-extrabold text-base gradient-text">MERN</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono-custom text-[9px] text-muted tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-brand-blue/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
