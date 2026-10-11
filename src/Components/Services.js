"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  MonitorSmartphone,
  Search,
  Zap,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Modern Frontend Development",
    accent: "from-indigo-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/40",
    description:
      "Crafting scalable, clean-code web applications using React.js, Next.js, TypeScript, and modern Tailwind CSS tailored to your product vision.",
    features: [
      "Next.js App Router Architecture",
      "Modular Component Libraries",
      "Interactive GSAP Motion & Micro-interactions",
      "State Management & API Integration",
    ],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Responsive Web Engineering",
    accent: "from-purple-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-purple-500/40",
    description:
      "Delivering fluid, device-agnostic user experiences that render flawlessly across smartphones, tablets, laptops, and ultra-wide desktops.",
    features: [
      "Mobile-First Responsive Layouts",
      "Cross-Browser Compatibility",
      "Fluid Typography & Adaptive Spacing",
      "Touch & Gesture Optimized UI",
    ],
  },
  {
    number: "03",
    icon: Search,
    title: "Technical SEO & Growth Strategy",
    accent: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "group-hover:border-cyan-500/40",
    description:
      "Elevating organic search rankings, site discoverability, and indexing with advanced technical SEO practices, structured data, and keyword targeting.",
    features: [
      "Comprehensive Technical Audits",
      "Schema.org Structured Data",
      "On-Page Keyword & Meta Optimization",
      "Google Search Console & GA4 Setup",
    ],
  },
  {
    number: "04",
    icon: Zap,
    title: "Speed & Performance Optimization",
    accent: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/40",
    description:
      "Boosting page load speed, optimizing Core Web Vitals, reducing bundle sizes, and minimizing rendering latency for maximum conversion.",
    features: [
      "Core Web Vitals Scoring (90+ Lighthouse)",
      "Asset & Image Compression",
      "Code Splitting & Lazy Hydration",
      "Zero Layout Shift (CLS) Optimization",
    ],
  },
];

export default function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".service-card-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={servicesRef}
      id="services"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32 border-t border-white/[0.07]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-600/[0.06] blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="services-header-anim mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              <Sparkles size={13} />
              <span>What I Offer</span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solutions crafted to{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                elevate your brand.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            High-standard engineering meets strategic digital growth to deliver products
            that look exceptional and perform effortlessly.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className={`service-card-anim group relative rounded-3xl border border-white/10 bg-[#0c101e]/80 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:p-9 ${service.borderGlow}`}
              >
                {/* Top Row */}
                <div className="mb-6 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} border border-white/10 shadow-inner`}>
                    <Icon size={24} className="text-indigo-300 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="font-mono text-sm font-semibold text-slate-500">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-200 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Deliverables:
                  </p>
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
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