"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Search,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    number: "01",
    title: "Frontend Engineering",
    icon: Code2,
    level: "Advanced",
    description:
      "Crafting performant, pixel-perfect user interfaces with modern React paradigms, server-side rendering, and responsive design systems.",
    accent: "from-indigo-500/20 to-purple-500/10",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "GSAP Animations",
      "Responsive Layouts",
    ],
  },
  {
    number: "02",
    title: "Backend & API Integration",
    icon: Database,
    level: "Proficient",
    description:
      "Developing secure RESTful endpoints, database schemas, and seamless data exchange pipelines for scalable web applications.",
    accent: "from-purple-500/20 to-pink-500/10",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
      "Mongoose",
      "CRUD Architecture",
    ],
  },
  {
    number: "03",
    title: "Technical SEO & Web Growth",
    icon: Search,
    level: "Specialist",
    description:
      "Structuring websites for top search engine visibility, schema validation, metadata optimization, and optimal Core Web Vitals.",
    accent: "from-cyan-500/20 to-blue-500/10",
    technologies: [
      "Technical SEO",
      "On-Page Optimization",
      "Off-Page Strategy",
      "Google Search Console",
      "Google Analytics (GA4)",
      "Core Web Vitals",
      "Keyword Research",
    ],
  },
  {
    number: "04",
    title: "Tooling & Workflow",
    icon: Wrench,
    level: "Proficient",
    description:
      "Utilizing modern developer environments, version control, automated deployment pipelines, and collaborative workflows.",
    accent: "from-emerald-500/20 to-teal-500/10",
    technologies: [
      "Git & GitHub",
      "VS Code",
      "Postman API",
      "Vercel Deployment",
      "NPM Ecosystem",
      "Chrome DevTools",
      "Lighthouse Auditing",
    ],
  },
];

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".skill-row-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32 border-t border-white/[0.07]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-600/[0.06] blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="skills-header-anim mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              <Sparkles size={13} />
              <span>Technical Skills</span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tools & technologies I{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                work with.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Continuous exploration and hands-on production experience across modern web
            technologies, backend runtimes, and digital visibility strategies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.number}
                className="skill-row-anim group relative rounded-3xl border border-white/10 bg-[#0c101e]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] sm:p-8"
              >
                {/* Header Row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.accent} border border-white/10 text-white shadow-inner`}>
                      <Icon size={20} className="text-indigo-300 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-indigo-400">
                        {skill.number}
                      </span>
                      <h3 className="text-lg font-bold text-white sm:text-xl">
                        {skill.title}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300">
                    {skill.level}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {skill.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}