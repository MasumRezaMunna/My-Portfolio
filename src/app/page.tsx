import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";
import ParticleBackground from "@/components/ParticleBackground";
import Cursor from "@/components/Cursor";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#050A18" }}>
      <LoadingScreen />
      <Cursor />
      <GridBackground />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
