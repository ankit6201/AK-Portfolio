"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Download,
  Terminal,
  Zap,
  CheckCircle2,
  Layers,
  Flame,
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(
            [".hero-badge", ".hero-title", ".hero-desc", ".hero-cta", ".hero-stats", ".hero-visual"],
            { clearProps: "all" }
          );
        },
      });

      timeline
        .from(".hero-badge", {
          y: 20,
          opacity: 0.3,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(
          ".hero-title",
          {
            y: 30,
            opacity: 0.3,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          ".hero-desc",
          {
            y: 20,
            opacity: 0.3,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            y: 20,
            opacity: 0.3,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-stats",
          {
            y: 15,
            opacity: 0.3,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-visual",
          {
            scale: 0.9,
            opacity: 0.3,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-10 lg:pt-36"
    >
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/[0.12] blur-[160px]" />
      <div className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-purple-600/[0.09] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 left-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      {/* Main Grid Container */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

        {/* Left Column: Hero Content */}
        <div className="text-center lg:text-left">
          
          {/* Availability Badge */}
          <div className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Available for Freelance & Full-time Roles
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-300">
              2025/2026
            </span>
          </div>

          {/* Heading */}
          <div className="hero-title">
            <h1 className="mb-2 text-3xl font-medium tracking-tight text-slate-400 sm:text-4xl md:text-5xl">
              Hi, I am
            </h1>
            <h2 className="mb-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-white">Ankit</span>{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                Kumar
              </span>
              <span className="text-indigo-400">.</span>
            </h2>

            {/* Dynamic Role Subheading */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl lg:justify-start">
              <span>I specialize in</span>
              <span className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-semibold text-white shadow-inner">
                <TypeAnimation
                  sequence={[
                    "Frontend Development",
                    2200,
                    "Next.js & React.js Development",
                    2200,
                    "High-Rank SEO Strategy",
                    2200,
                    "Interactive Web Design",
                    2200,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="hero-desc mx-auto mb-9 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
            Crafting high-performance, visually stunning web applications with modern
            architecture, clean code, and search-optimized user experiences that turn
            visitors into loyal clients.
          </p>

          {/* CTAs */}
          <div className="hero-cta mb-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/projects"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(99,102,241,0.65)]"
            >
              <span>Explore Projects</span>
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
            >
              <span>Get In Touch</span>
            </Link>

            <a
              href="/Ankit Kumar.pdf"
              download="Ankit-Kumar.pdf"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats mx-auto grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.08] pt-8 lg:mx-0">
            <div className="text-left">
              <div className="text-2xl font-black text-white sm:text-3xl">3+</div>
              <div className="text-xs text-slate-500">Years Learning & Building</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent sm:text-3xl">
                10+
              </div>
              <div className="text-xs text-slate-500">Projects Shipped</div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black text-emerald-400 sm:text-3xl">
                100%
              </div>
              <div className="text-xs text-slate-500">Passion & Delivery</div>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Holographic IDE Visual */}
        <div className="hero-visual flex justify-center lg:justify-end">
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1200}
            gyroscope={true}
            className="w-full max-w-md sm:max-w-lg"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#0c101d]/90 p-5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-7">
              
              {/* Window Header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-sm" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm" />
                  <span className="ml-3 font-mono text-[11px] text-slate-500">
                    developer.config.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 font-mono text-[10px] text-indigo-300">
                  <Terminal size={11} />
                  <span>TypeScript</span>
                </div>
              </div>

              {/* Code Snippet Container */}
              <div className="space-y-2 font-mono text-xs leading-relaxed sm:text-sm">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-400">&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">"Ankit Kumar"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-cyan-300">"Frontend & Next.js Dev"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">skills:</span>{" "}
                  <span className="text-slate-400">[</span>
                  <span className="text-amber-300">"React"</span>,{" "}
                  <span className="text-amber-300">"Next.js"</span>,{" "}
                  <span className="text-amber-300">"Tailwind"</span>,{" "}
                  <span className="text-amber-300">"SEO"</span>
                  <span className="text-slate-400">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">focus:</span>{" "}
                  <span className="text-purple-300">
                    "Ultra-responsive modern UI"
                  </span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">experience:</span>{" "}
                  <span className="text-cyan-400">"Modern Web Apps & SEO"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{" "}
                  <span className="text-emerald-400">"Available for Projects"</span>
                </div>
                <div>
                  <span className="text-slate-400">&#125;;</span>
                </div>
              </div>

              {/* Decorative Tech Pills / Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-5">
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  <Zap size={13} className="text-amber-400" />
                  <span>Fast Performance</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  <Sparkles size={13} className="text-indigo-400" />
                  <span>SEO Ready</span>
                </div>
              </div>

              {/* Floating Glow Corner Accent */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 blur-xl" />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
}
