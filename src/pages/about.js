import About from "@/Components/About";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Services from "@/Components/Services";
import Footer from "@/Components/Footer";
import React from "react";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[#07080e] text-[#f8fafc]">
      <Navbar />
      <main className="pt-24">
        <About />
        <Experience />
        <Skills />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

