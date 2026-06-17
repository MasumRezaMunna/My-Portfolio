"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import FadeIn from "./FadeIn";

const contactItems = [
  { icon: "✉️", label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
  { icon: "📞", label: "Phone", value: `+880 ${portfolioData.personal.phone}`, href: `tel:+880${portfolioData.personal.phone}` },
  { icon: "💬", label: "WhatsApp", value: `+880 ${portfolioData.personal.whatsapp}`, href: portfolioData.social.whatsapp },
];

const socialLinks = [
  { label: "GitHub", href: portfolioData.social.github },
  { label: "LinkedIn", href: portfolioData.social.linkedin },
  { label: "Facebook", href: portfolioData.social.facebook },
  { label: "WhatsApp", href: portfolioData.social.whatsapp },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel number="05" label="Contact" />
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-base max-w-xl mb-12">
            I&apos;m currently open to freelance projects and full-time opportunities. Whether you have a question, a project idea, or just want to say hello — feel free to reach out!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <FadeIn key={item.label} delay={0.1 + i * 0.1}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.012, borderColor: "rgba(79,142,247,0.5)" }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 cursor-pointer no-underline"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-cyan/10 border border-brand-blue/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono-custom text-[10px] text-muted uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>

          {/* Social links */}
          <FadeIn delay={0.25}>
            <div>
              <p className="font-mono-custom text-xs text-muted tracking-widest uppercase mb-5">
                {"// Connect on social media"}
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, borderColor: "rgba(79,142,247,0.6)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-blue/20 text-muted hover:text-brand-blue hover:bg-brand-blue/6 text-sm font-medium transition-colors duration-200"
                  >
                    {s.label} ↗
                  </motion.a>
                ))}
              </div>

              {/* CTA email box */}
              <div className="mt-10 glass-card rounded-2xl p-6">
                <p className="font-mono-custom text-xs text-brand-cyan mb-2 tracking-widest uppercase">
                  {"// Preferred contact"}
                </p>
                <p className="font-display font-bold text-xl text-white mb-1">
                  Drop me an email
                </p>
                <p className="text-muted text-sm mb-4">
                  I typically respond within 24 hours.
                </p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-brand hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-glow"
                >
                  ✉️ {portfolioData.personal.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
