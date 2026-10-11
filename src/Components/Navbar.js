"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navbar-anim", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="navbar-anim fixed left-0 top-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 max-w-7xl rounded-full px-5 sm:px-7 py-3 ${
          scrolled
            ? "glass-panel shadow-[0_10px_35px_rgba(0,0,0,0.6)] border border-white/10 bg-[#090d18]/80"
            : "border border-white/[0.06] bg-[#07080e]/40 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#090d18] text-xs font-black tracking-wider text-white">
              AK
            </div>
          </div>
          <span className="font-semibold tracking-tight">
            ANKIT <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">KUMAR</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1.5 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Status */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Availability pill */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for hire
          </div>

          <Link
            href="/contact"
            className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.55)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#090d18]/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-500/15 text-white border border-indigo-500/30 font-semibold"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-xs font-semibold text-white shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}