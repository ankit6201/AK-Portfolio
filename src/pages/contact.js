import Navbar from "@/Components/Navbar";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-[#07080e] text-[#f8fafc]">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

