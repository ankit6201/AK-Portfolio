"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, Sparkles, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "March 2026 — Present",
    role: "SEO Specialist Intern",
    company: "InsightFul Technology",
    type: "Internship",
    isCurrent: true,
    description:
      "Executed technical and on-page search engine optimization campaigns. Conducted in-depth keyword analysis, structured schema injection, and search engine performance audits.",
    achievements: [
      "Optimized Core Web Vitals to elevate lighthouse page speed ratings",
      "Analyzed crawl stats and index coverage in Google Search Console",
      "Implemented keyword clustering and structured data rich snippets",
    ],
    technologies: [
      "Technical SEO",
      "Google Search Console",
      "GA4",
      "Schema.org",
      "Keyword Research",
    ],
  },
  {
    period: "March 2025 — December 2025",
    role: "Junior React developer",
    company: "wooshelf",
    type: "Internship",
    isCurrent: false,
    description:
      "Architecting and optimizing modern full-stack client interfaces with Next.js App Router, React Server Components, responsive Tailwind CSS layouts, and dynamic REST API integrations.",
    achievements: [
      "Engineered responsive components reducing render layout shifts",
      "Integrated REST APIs with structured caching and error boundaries",
      "Collaborated on UX iterations with clean Git version control",
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "REST APIs", "Git"],
  },
  
  {
  period: "Earlier",
  role: "MERN Stack Developer Intern",
  company: "MERN Stack Development",
  type: "Internship",
  isCurrent: false,
  description:
    "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Built RESTful APIs, implemented backend functionality, integrated frontend components with backend services, and managed database operations.",
  achievements: [
    "Developed responsive and reusable React.js components for dynamic user interfaces",
    "Created RESTful APIs using Node.js and Express.js for application functionality",
    "Integrated MongoDB for data storage and implemented CRUD operations",
    "Implemented user authentication and handled API integration between frontend and backend",
    "Followed modular coding practices and debugged application issues"
  ],
  technologies: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript ES6+",
    "REST APIs",
    "HTML5",
    "CSS3"
  ],
},
];

export default function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".exp-card-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, experienceRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32 border-t border-white/[0.07]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-5%] top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/[0.07] blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="exp-header-anim mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              <Sparkles size={13} />
              <span>Career Roadmap</span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional journey &{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                experience.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Hands-on internship and project roles focused on building responsive web apps
            and optimizing search engine visibility.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500/40 before:to-transparent sm:before:left-7">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card-anim relative flex items-start gap-6 sm:gap-10"
            >
              {/* Timeline Indicator Node */}
              <div className="relative mt-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-400 bg-[#07080e] shadow-[0_0_15px_rgba(99,102,241,0.6)] sm:h-9 sm:w-9">
                <span className={`h-2.5 w-2.5 rounded-full ${exp.isCurrent ? "bg-emerald-400 animate-ping" : "bg-indigo-400"}`} />
              </div>

              {/* Experience Card */}
              <div className="group relative flex-1 rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:p-8">
                {/* Header Row */}
                <div className="flex flex-col justify-between gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-200 sm:text-2xl">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-indigo-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-slate-300">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-400 sm:text-sm"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
