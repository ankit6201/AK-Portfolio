"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Search,
  Sparkles,
  Layers,
  Cpu,
  Palette,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const processItems = [
  {
    number: "01",
    tag: "DISCOVERY & STRATEGY",
    title: "Understanding the Core Problem",
    description:
      "Every standout product starts with thorough research. I analyze user behavior, target audience expectations, and business goals before writing a single line of code.",
    points: ["Requirement Analysis", "User Journey Mapping", "Tech Stack Architecture"],
  },
  {
    number: "02",
    tag: "DESIGN & PROTOTYPING",
    title: "Crafting Intuitive Interfaces",
    description:
      "I prioritize clean visual hierarchy, balanced typography, and responsive layouts that look stunning on any screen — from 4K monitors to mobile devices.",
    points: ["Design Systems", "Micro-Interactions", "Responsive Breakpoints"],
  },
  {
    number: "03",
    tag: "ENGINEERING & SPEED",
    title: "Building for Scale & Performance",
    description:
      "Transforming interfaces into production-ready web apps with clean component structure, optimal state management, and strict Core Web Vitals standards.",
    points: ["Next.js & React 19", "Technical SEO & Schema", "Sub-second Page Loads"],
  },
];

const pillars = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Component-driven architectures built with React, Next.js, and modern Tailwind CSS.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    accent: "from-indigo-500/20 to-purple-500/10",
    border: "group-hover:border-indigo-500/40",
  },
  {
    icon: Search,
    title: "Technical SEO & Growth",
    description: "Search engine optimization strategies that elevate rankings, speed, and indexing.",
    tags: ["Technical SEO", "Schema Markup", "Core Web Vitals", "GA4"],
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "group-hover:border-cyan-500/40",
  },
  {
    icon: Palette,
    title: "Creative Interaction",
    description: "Engaging micro-animations, GSAP motion, and fluid Lenis scrolling.",
    tags: ["GSAP Animations", "UI/UX Design", "Responsive Layouts"],
    accent: "from-purple-500/20 to-pink-500/10",
    border: "group-hover:border-purple-500/40",
  },
];

export default function About() {
  const aboutRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-card-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-600/[0.06] blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Pill & Header */}
        <div className="about-header-anim mb-16 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles size={13} />
            <span>About Ankit Kumar</span>
          </div>

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Merging aesthetic precision with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              engineering excellence.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I am a Frontend Developer and SEO specialist based in India. I craft digital
            experiences where intuitive design, lightning-fast performance, and measurable
            business results converge. From building complex web apps to optimizing for
            search engines, I create websites that leave a lasting impression.
          </p>
        </div>

        {/* Process Roadmap Box */}
        <div className="about-card-anim mb-24 rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 sm:p-10 backdrop-blur-xl shadow-xl">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Methodology
              </p>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                How I Bring Ideas to Life
              </h3>
            </div>

            {/* Step navigation tabs */}
            <div className="flex gap-2">
              {processItems.map((item, index) => (
                <button
                  key={item.number}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                      : "bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <span>Step {item.number}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-block rounded-md bg-indigo-500/20 px-2.5 py-1 text-[11px] font-bold tracking-wider text-indigo-300">
                {processItems[activeStep].tag}
              </span>
              <h4 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {processItems[activeStep].title}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                {processItems[activeStep].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {processItems[activeStep].points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-slate-300"
                  >
                    <CheckCircle size={13} className="text-emerald-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Step Display */}
            <div className="flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-black p-6 text-center">
              <div>
                <span className="text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent sm:text-6xl">
                  {processItems[activeStep].number}
                </span>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                  Phased Progression
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Competencies Grid */}
        <div>
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Core Technical Pillars
            </h3>
            <span className="text-xs text-slate-400">Continuous Mastery</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`group relative rounded-3xl border border-white/10 bg-[#0c101e]/70 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${pillar.border}`}
                >
                  <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${pillar.accent} p-3.5 text-white shadow-inner`}>
                    <Icon size={26} className="text-indigo-300 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-200">
                    {pillar.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 transition-colors group-hover:border-indigo-500/30 group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}