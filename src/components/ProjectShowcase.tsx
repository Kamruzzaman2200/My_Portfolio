"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="projects" className="relative space-y-10 sm:space-y-12 lg:space-y-16 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-2 h-2 rounded-full bg-[#0E76F1] shadow-[0_0_10px_#0E76F1]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9A8E6A] uppercase">
            Chapter // 02
          </span>
          <div className="h-px bg-[#C2B280]/15 flex-1" />
          <span className="font-kanji text-xl sm:text-2xl 2xl:text-3xl text-[#C2B280]/30 tracking-widest hidden sm:inline">
            匠 · THE CRAFT
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-[#C2B280]">
              Featured Works & Architecture
            </h2>
            <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#7A7568] max-w-2xl 2xl:max-w-3xl font-light leading-relaxed">
              Full-stack platforms, reading systems, and real estate portals built with strict performance benchmarks and modern animation pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#2B2D2F]/90 border border-[#C2B280]/15 backdrop-blur-md self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 sm:px-4 lg:px-5 py-2 rounded-lg text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#0E76F1] text-white shadow-lg shadow-[#0E76F1]/25"
                    : "text-[#9A8E6A] hover:text-white hover:bg-[#C2B280]/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Editorial Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor={
                idx % 2 === 0
                  ? "rgba(14, 118, 241, 0.18)"
                  : "rgba(194, 178, 128, 0.14)"
              }
              className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 2xl:p-12 space-y-6 sm:space-y-8 group h-full rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
            >
              <div className="space-y-5 sm:space-y-6">
                {/* Project Meta Line */}
                <div className="flex items-center justify-between border-b border-[#C2B280]/10 pb-4">
                  <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#0E76F1] font-medium">
                    ARCH // 0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-[#7A7568] tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-normal tracking-tight text-[#C2B280] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl text-[#7A7568] hover:text-white hover:bg-[#C2B280]/10 transition-colors"
                          title="GitHub Source"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl text-[#0E76F1] hover:bg-[#0E76F1]/15 transition-colors"
                          title="Launch Project"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-mono text-[#9A8E6A]">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base lg:text-lg text-[#9A8E6A] leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Key Architectural Points */}
                <ul className="space-y-2.5 text-sm sm:text-base text-[#7A7568] font-light">
                  {project.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0E76F1] mt-2 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tech Pills & Actions */}
              <div className="space-y-5 pt-5 sm:pt-6 border-t border-[#C2B280]/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#1A1C1E] border border-[#C2B280]/10 text-xs sm:text-sm font-mono tracking-wider text-[#9A8E6A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="pt-2">
                    <Magnet padding={40} magnetStrength={2.5}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#0E76F1] text-white text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase shadow-lg shadow-[#0E76F1]/20 hover:bg-[#3D9BFF] hover:shadow-[#0E76F1]/35 transition-all"
                      >
                        <span>Explore Live Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Magnet>
                  </div>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
