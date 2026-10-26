"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import Magnet from "@/components/react-bits/Magnet";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const CATEGORIES = ["All", "Full-Stack", "Frontend", "Web App"] as const;

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative space-y-10 scroll-mt-28">
      {/* Kage Chapter Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] shadow-[0_0_8px_#e0231c]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#aab4ad] uppercase">
            Chapter // 02
          </span>
          <div className="h-px bg-white/10 flex-1" />
          <span className="font-kanji text-xl text-white/30 tracking-widest hidden sm:inline">
            匠 · THE CRAFT
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#dfe7e0]">
              Featured Works & Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#78837c] max-w-xl font-light leading-relaxed">
              Full-stack platforms, reading systems, and real estate portals built with strict performance benchmarks and modern animation pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-[#0a0e12]/90 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-[#e0231c] text-white shadow-lg shadow-[#e0231c]/25"
                    : "text-[#aab4ad] hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Editorial Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProjects.map((project, idx) => (
          <SpotlightCard
            key={project.title}
            spotlightColor={
              idx % 2 === 0
                ? "rgba(224, 35, 28, 0.16)"
                : "rgba(255, 90, 60, 0.14)"
            }
            className="flex flex-col justify-between p-7 sm:p-8 space-y-6 group"
          >
            <div className="space-y-5">
              {/* Project Meta Line */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#e0231c]">
                  ARCH // 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono text-[#78837c] tracking-widest uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-normal tracking-tight text-[#dfe7e0] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#78837c] hover:text-white hover:bg-white/5 transition-colors"
                        title="GitHub Source"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-[#e0231c] hover:bg-[#e0231c]/10 transition-colors"
                        title="Launch Project"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-xs font-mono text-[#aab4ad]">
                  {project.subtitle}
                </p>
              </div>

              {/* Summary */}
              <p className="text-xs text-[#aab4ad] leading-relaxed font-light">
                {project.description}
              </p>

              {/* Key Architectural Points */}
              <ul className="space-y-2 text-xs text-[#78837c] font-light">
                {project.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-[#e0231c] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Pills & Actions */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#05070a] border border-white/5 text-[10px] font-mono tracking-wider text-[#aab4ad]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <div className="pt-1">
                  <Magnet padding={40} magnetStrength={2.5}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e0231c] text-white text-xs font-mono tracking-wider uppercase shadow-lg shadow-[#e0231c]/20 hover:bg-[#ff4d36] transition-colors"
                    >
                      <span>Explore Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Magnet>
                </div>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
