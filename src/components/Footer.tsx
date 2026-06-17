import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-navy-2 border-t border-brand-blue/15 py-8 px-6 md:px-12 text-center">
      <p className="font-display font-bold text-base gradient-text mb-1">
        {portfolioData.personal.fullName}
      </p>
      <p className="text-muted text-xs">
        © {year} · {portfolioData.personal.designation} · Built with Next.js, Tailwind CSS & Framer Motion ❤️
      </p>
    </footer>
  );
}
