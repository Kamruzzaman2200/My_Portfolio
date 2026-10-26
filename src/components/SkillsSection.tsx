"use client";

import { SKILL_CATEGORIES } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import { Terminal, Database, Brain, Wrench } from "lucide-react";

const CATEGORY_ICONS = [
  <Terminal key="code" className="w-4 h-4 text-[#e0231c]" />,
  <Database key="db" className="w-4 h-4 text-[#ff5a3c]" />,
  <Brain key="ai" className="w-4 h-4 text-[#c9a24a]" />,
  <Wrench key="tool" className="w-4 h-4 text-[#aab4ad]" />,
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative space-y-10 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] shadow-[0_0_8px_#e0231c]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#aab4ad] uppercase">
            Chapter // 03
          </span>
          <div className="h-px bg-white/10 flex-1" />
          <span className="font-kanji text-xl text-white/30 tracking-widest hidden sm:inline">
            技 · ARSENAL
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#dfe7e0]">
            Technical Discipline & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-[#78837c] max-w-xl font-light leading-relaxed">
            Frontend architectures, backend microservices, database design, and machine learning models honed across production deployments.
          </p>
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <SpotlightCard
            key={cat.title}
            spotlightColor="rgba(224, 35, 28, 0.12)"
            className="p-6 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2.5">
                {CATEGORY_ICONS[idx % CATEGORY_ICONS.length]}
                <h3 className="font-normal text-sm tracking-wide text-[#dfe7e0]">
                  {cat.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#78837c]">
                0{idx + 1}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-2.5 py-1.5 rounded bg-[#05070a] border border-white/5 hover:border-[#e0231c]/40 hover:bg-[#e0231c]/5 transition-all text-[11px] font-mono text-[#aab4ad] flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#e0231c]/60" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
