"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Check,
  Copy,
  Send,
  CheckCircle2,
} from "lucide-react";

function GithubIcon({ size = 14, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 14, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "ankitkumar45870@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-box-anim",
        { y: 30, opacity: 0.4 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10 lg:py-32 border-t border-white/[0.07]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[170px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="contact-header-anim mb-16 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles size={13} />
            <span>Let's Collaborate</span>
          </div>

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              extraordinary together.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Have an open role, an exciting project proposal, or just want to discuss tech?
            Drop a message and I'll respond within 24 hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Info Column */}
          <div className="contact-box-anim space-y-6">
            {/* Quick Email Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 sm:p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex rounded-2xl bg-indigo-500/10 p-3 text-indigo-400">
                <Mail size={22} />
              </div>

              <h3 className="text-lg font-bold text-white">Direct Email</h3>
              <p className="mt-1 text-xs text-slate-400">
                Fastest way to reach me directly
              </p>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <span className="font-mono text-xs text-slate-300 truncate max-w-[200px] sm:max-w-none">
                  {emailAddress}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-600 hover:border-indigo-500"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Socials Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 sm:p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-400">
                <MapPin size={22} />
              </div>

              <h3 className="text-lg font-bold text-white">Location & Timezone</h3>
              <p className="mt-1 text-xs text-slate-400">
                Based in India · Open to Remote worldwide (IST / UTC+5:30)
              </p>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.08] pt-5">
                <a
                  href="https://www.linkedin.com/in/ankit-kumar-727831255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-indigo-500 hover:text-white"
                >
                  <LinkedinIcon size={14} className="text-indigo-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://github.com/ankit6201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-indigo-500 hover:text-white"
                >
                  <GithubIcon size={14} className="text-slate-300" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-box-anim rounded-3xl border border-white/10 bg-[#0c101e]/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="mt-3 max-w-sm text-sm text-slate-400">
                  Thank you for reaching out. I have received your message and will get
                  back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-indigo-500 focus:bg-white/[0.05]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-indigo-500 focus:bg-white/[0.05]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next.js Web Application / Freelance inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-indigo-500 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-400">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, goals, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-indigo-500 focus:bg-white/[0.05]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
