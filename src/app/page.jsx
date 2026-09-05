import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Publications from "@/components/publications";
import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Publications />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
