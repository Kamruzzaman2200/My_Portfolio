"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import { Terminal, Database, Brain, Wrench } from "lucide-react";

const CATEGORY_ICONS = [
  <Terminal key="code" className="w-5 h-5 text-[#0E76F1]" />,
  <Database key="db" className="w-5 h-5 text-[#3D9BFF]" />,
  <Brain key="ai" className="w-5 h-5 text-[#C2B280]" />,
  <Wrench key="tool" className="w-5 h-5 text-[#9A8E6A]" />,
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative space-y-10 sm:space-y-12 lg:space-y-16 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-2 h-2 rounded-full bg-[#0E76F1] shadow-[0_0_10px_#0E76F1]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9A8E6A] uppercase">
            Chapter // 03
          </span>
          <div className="h-px bg-[#C2B280]/15 flex-1" />
          <span className="font-kanji text-xl sm:text-2xl 2xl:text-3xl text-[#C2B280]/30 tracking-widest hidden sm:inline">
            技 · ARSENAL
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-[#C2B280]">
            Technical Discipline & Capabilities
          </h2>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#7A7568] max-w-2xl 2xl:max-w-3xl font-light leading-relaxed">
            Frontend architectures, backend microservices, database design, and machine learning models honed across production deployments.
          </p>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 2xl:gap-10">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(14, 118, 241, 0.14)"
              className="p-6 sm:p-7 lg:p-8 2xl:p-9 space-y-5 sm:space-y-6 h-full rounded-2xl sm:rounded-3xl border border-[#C2B280]/15 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#C2B280]/10 pb-4">
                  <div className="flex items-center gap-3">
                    {CATEGORY_ICONS[idx % CATEGORY_ICONS.length]}
                    <h3 className="font-normal text-base sm:text-lg lg:text-xl tracking-wide text-[#C2B280]">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#7A7568]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[#1A1C1E] border border-[#C2B280]/10 hover:border-[#0E76F1]/50 hover:bg-[#0E76F1]/10 transition-all text-xs sm:text-sm font-mono text-[#9A8E6A] hover:text-[#C2B280] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E76F1]/70" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
