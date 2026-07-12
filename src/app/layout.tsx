import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Masum Reza Munna | MERN Stack Developer",
  description:
    "Portfolio of MD Masum Reza Munna — MERN Stack Developer passionate about building responsive and scalable web applications with React, Node.js, and MongoDB.",
  keywords: [
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Bangladesh",
    "Full Stack Developer",
    "Software Engineer",
    "Masum Reza Munna",
  ],
  authors: [{ name: "MD Masum Reza Munna" }],
  openGraph: {
    title: "MD Masum Reza Munna | MERN Stack Developer",
    description:
      "Portfolio of MD Masum Reza Munna — MERN Stack Developer building scalable web apps.",
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
      <body
        className="text-[#F0F4FF] antialiased overflow-x-hidden"
        style={{ background: "#050A18", fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
