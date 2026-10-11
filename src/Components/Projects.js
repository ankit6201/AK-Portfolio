"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers,
  UtensilsCrossed,
  ShoppingCart,
  CloudSun,
  Gamepad2,
} from "lucide-react";

function GithubIcon({ size = 15, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "01",
    title: "Food Delivery App",
    category: "Web Application",
    type: "webapp",
    highlight: "Real-Time Order Tracking",
    description:
      "A seamless food ordering web application featuring restaurant catalogs, dynamic cart calculations, dietary category filtering, and responsive mobile-first checkout.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "REST API"],
    accentGradient: "from-orange-500/20 via-rose-500/10 to-transparent",
    accentColor: "text-orange-400",
    badgeBg: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    icon: UtensilsCrossed,
    liveLink: "https://github.com/ankit6201",
    githubLink: "https://github.com/ankit6201",
  },
  {
    id: "02",
    title: "Organic Grocery Store",
    category: "E-Commerce",
    type: "ecommerce",
    highlight: "Instant Cart & Filters",
    description:
      "A modern grocery shopping ecosystem designed for ultra-smooth user experience, featuring fast search filtering, category shelves, and optimized checkout flow.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    icon: ShoppingCart,
    liveLink: "https://github.com/ankit6201",
    githubLink: "https://github.com/ankit6201",
  },
  {
    id: "03",
    title: "Weather Intelligence App",
    category: "Web Application",
    type: "webapp",
    highlight: "Live Atmospheric Data",
    description:
      "A precision weather tracking app providing real-time conditions, 7-day forecasts, wind/humidity radar metrics, and geolocation auto-detection.",
    technologies: ["React.js", "Weather API", "Tailwind CSS", "JavaScript"],
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    icon: CloudSun,
    liveLink: "https://github.com/ankit6201",
    githubLink: "https://github.com/ankit6201",
  },
  {
    id: "04",
    title: "Scramble Word Challenge",
    category: "Interactive Experience",
    type: "interactive",
    highlight: "Real-Time Game Loop",
    description:
      "An engaging word scrambling brain puzzle game equipped with countdown timers, combo streak scoring, instant word shuffle, and dynamic visual animations.",
    technologies: ["JavaScript ES6+", "DOM Engine", "CSS3 Motion", "HTML5"],
    accentGradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accentColor: "text-purple-400",
    badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    icon: Gamepad2,
    liveLink: "https://github.com/ankit6201",
    githubLink: "https://github.com/ankit6201",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "webapp", label: "Web Applications" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "interactive", label: "Interactive" },
];

export default function Projects() {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".project-card-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32 border-t border-white/[0.07]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/[0.07] blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="projects-header-anim mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              <Sparkles size={13} />
              <span>Selected Portfolio</span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Crafted with purpose,{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                built to perform.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Each project represents an obsession with pixel precision, fast rendering,
            clean state management, and conversion-focused design.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]"
                  : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.id}
                className="project-card-anim group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:p-8"
              >
                <div>
                  {/* Top Window Bar (Simulated Modern Browser) */}
                  <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#090d18]/90 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                      <span>project-{project.id}</span>
                      <span className="text-slate-600">/</span>
                      <span className="text-indigo-300">{project.type}</span>
                    </div>

                    <span className="rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider border-white/10 text-slate-400">
                      Active
                    </span>
                  </div>

                  {/* Visual Showcase Card */}
                  <div
                    className={`relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${project.accentGradient} p-6 sm:h-56`}
                  >
                    {/* Glowing Center Graphic */}
                    <div className="relative flex flex-col items-center justify-center text-center">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                        <ProjectIcon size={32} className={project.accentColor} />
                      </div>
                      <span className="text-base font-bold text-white sm:text-lg">
                        {project.title}
                      </span>
                      <span className="mt-1 text-xs text-slate-300">
                        {project.highlight}
                      </span>
                    </div>

                    {/* Number Overlay */}
                    <span className="absolute bottom-3 right-4 select-none font-black text-5xl text-white/[0.05] sm:text-6xl">
                      {project.id}
                    </span>
                  </div>

                  {/* Meta Details */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${project.badgeBg}`}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      #{project.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-200">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-indigo-400"
                  >
                    <span>View Project</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    <GithubIcon size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}