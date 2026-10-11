import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-[#07080e] text-[#f8fafc]">
      <Navbar />
      <main className="pt-24">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

