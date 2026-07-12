import { portfolioData } from "@/data/portfolio";

const socialLinks = [
  { label: "GitHub", href: portfolioData.social.github },
  { label: "LinkedIn", href: portfolioData.social.linkedin },
  { label: "Facebook", href: portfolioData.social.facebook },
  { label: "WhatsApp", href: portfolioData.social.whatsapp },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative z-10 py-12 px-6 md:px-12 text-center"
      style={{
        background: "linear-gradient(to top, rgba(5,10,24,1), rgba(10,18,40,0.6))",
        borderTop: "1px solid rgba(79,142,247,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-6">
          <span className="font-display font-extrabold text-2xl gradient-text-violet">
            {"<Munna />"}
          </span>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-custom text-xs text-muted hover:text-brand-cyan transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent mb-6" />

        {/* Copyright */}
        <p className="text-muted text-xs leading-relaxed">
          © {year} · <span className="text-white/60">{portfolioData.personal.fullName}</span> ·{" "}
          <span className="text-brand-cyan/60">{portfolioData.personal.designation}</span>
        </p>
        <p className="text-muted/50 text-[11px] mt-1.5">
          Built with Next.js · Tailwind CSS · Framer Motion ❤️
        </p>
      </div>
    </footer>
  );
}
