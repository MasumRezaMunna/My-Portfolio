import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Masum Reza Munna | MERN Stack Developer",
  description:
    "Portfolio of MD Masum Reza Munna — MERN Stack Developer passionate about building responsive and scalable web applications.",
  keywords: ["MERN Stack", "React", "Next.js", "Node.js", "MongoDB", "Web Developer", "Bangladesh"],
  authors: [{ name: "MD Masum Reza Munna" }],
  openGraph: {
    title: "MD Masum Reza Munna | MERN Stack Developer",
    description: "Portfolio of MD Masum Reza Munna — MERN Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy text-[#F0F4FF] font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
