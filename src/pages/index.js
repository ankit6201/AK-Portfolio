import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Services from "@/Components/Services";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07080e] text-[#f8fafc] selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        {/* <About />
        <Projects />
        <Skills />
        <Experience />
        <Services />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

