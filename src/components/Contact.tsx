"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";

const contactItems = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
    color: "#4F8EF7",
    copyable: true,
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: `+880 ${portfolioData.personal.phone}`,
    href: `tel:+880${portfolioData.personal.phone}`,
    color: "#00FFC8",
    copyable: false,
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: `+880 ${portfolioData.personal.whatsapp}`,
    href: portfolioData.social.whatsapp,
    color: "#7C3AED",
    copyable: false,
  },
];

const socialLinks = [
  { label: "GitHub", href: portfolioData.social.github, icon: <FaGithub className="w-4 h-4" />, color: "#4F8EF7" },
  { label: "LinkedIn", href: portfolioData.social.linkedin, icon: <FaLinkedin className="w-4 h-4" />, color: "#00FFC8" },
  { label: "Facebook", href: portfolioData.social.facebook, icon: <FaFacebook className="w-4 h-4" />, color: "#7C3AED" },
  { label: "WhatsApp", href: portfolioData.social.whatsapp, icon: <FaWhatsapp className="w-4 h-4" />, color: "#00FFC8" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="relative z-10 py-28 px-6 md:px-12 overflow-hidden">
      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(79,142,247,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-brand-cyan" />
            <span className="font-mono-custom text-xs text-brand-cyan tracking-widest uppercase">
              05 / Contact
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-base max-w-xl mb-14">
            I&apos;m currently open to freelance projects and full-time opportunities. Have a question or want to collaborate? Let&apos;s talk!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact cards */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 cursor-pointer group"
                  onClick={() => item.copyable ? handleCopy(item.value) : window.open(item.href)}
                  style={{ border: `1px solid ${item.color}22` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.color + "55";
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${item.color}22`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = item.color + "22";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono-custom text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm truncate">{item.value}</p>
                  </div>
                  {item.copyable && (
                    <span className="font-mono-custom text-[10px] text-muted group-hover:text-brand-cyan transition-colors flex-shrink-0">
                      {copied ? "✓ Copied!" : "Copy"}
                    </span>
                  )}
                </motion.div>
              </FadeIn>
            ))}

            {/* Social icons */}
            <FadeIn delay={0.4}>
              <div className="glass-card rounded-2xl p-5">
                <p className="font-mono-custom text-[10px] text-muted uppercase tracking-widest mb-4">
                  {"// Social Media"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-muted hover:text-white transition-colors glass-card"
                    >
                      <span>{s.icon}</span>
                      <span className="text-xs">{s.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: CTA Card */}
          <FadeIn delay={0.2}>
            <div>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="gradient-border rounded-2xl overflow-hidden h-full"
              >
                <div
                  className="h-full p-8 sm:p-10 flex flex-col justify-between"
                  style={{ background: "rgba(10,18,40,0.8)" }}
                >
                  <div>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="mb-6 inline-block text-brand-cyan"
                    >
                      <MessageCircle className="w-12 h-12" />
                    </motion.div>
                    <h3 className="font-display font-extrabold text-3xl text-white mb-3">
                      Drop me an email
                    </h3>
                    <p className="text-muted text-base mb-2">
                      I typically respond within 24 hours. Let&apos;s build something amazing together.
                    </p>
                    <p className="font-mono-custom text-xs text-muted tracking-widest">
                      {"// Preferred: Email or LinkedIn"}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href={`mailto:${portfolioData.personal.email}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm text-navy-DEFAULT relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #4F8EF7, #00FFC8)",
                        boxShadow: "0 0 30px rgba(79,142,247,0.3)",
                      }}
                    >
                      <Mail className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Send Email</span>
                      <span className="absolute inset-0 shimmer-btn opacity-60" />
                    </motion.a>

                    <motion.a
                      href={portfolioData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-white glass-card hover:border-brand-violet/40 hover:text-brand-cyan transition-all"
                    >
                      <FaLinkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </motion.a>
                  </div>

                  {/* Email display */}
                  <div className="mt-4 glass-card rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                    <span className="font-mono-custom text-sm text-brand-cyan truncate">
                      {portfolioData.personal.email}
                    </span>
                    <button
                      onClick={() => handleCopy(portfolioData.personal.email)}
                      className="font-mono-custom text-[11px] text-muted hover:text-brand-cyan transition-colors flex-shrink-0 px-2 py-1 rounded-lg hover:bg-brand-blue/10"
                    >
                      {copied ? "✓ Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
