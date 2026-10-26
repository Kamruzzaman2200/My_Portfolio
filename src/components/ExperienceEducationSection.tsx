"use client";

import { EDUCATION, EXPERIENCES } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import { GraduationCap, Briefcase, Trophy, GitPullRequest } from "lucide-react";

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="relative space-y-10 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] shadow-[0_0_8px_#e0231c]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#aab4ad] uppercase">
            Chapter // 05
          </span>
          <div className="h-px bg-white/10 flex-1" />
          <span className="font-kanji text-xl text-white/30 tracking-widest hidden sm:inline">
            歴 · CHRONICLE
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#dfe7e0]">
            Milestones & Trajectory
          </h2>
          <p className="text-xs sm:text-sm text-[#78837c] max-w-xl font-light leading-relaxed">
            University academic studies in computer science, enterprise freelance contracts, and commercial operations.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Experience Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#e0231c] uppercase border-b border-white/5 pb-2">
            <Briefcase className="w-4 h-4" />
            <span>Practice & Enterprise</span>
          </div>

          <div className="space-y-5">
            {EXPERIENCES.map((exp, idx) => (
              <SpotlightCard
                key={exp.role + exp.company}
                spotlightColor="rgba(224, 35, 28, 0.12)"
                className="p-6 sm:p-7 space-y-4"
              >
                <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#78837c] block mb-1">
                      CHRONO // 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-normal text-[#dfe7e0]">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-[#e0231c] mt-0.5">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#05070a] border border-white/5 text-[10px] font-mono text-[#aab4ad]">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-[#aab4ad] font-light leading-relaxed">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="inline-block w-1 h-1 rounded-full bg-[#e0231c] mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>

          {/* Activities Card */}
          <SpotlightCard
            spotlightColor="rgba(255, 90, 60, 0.12)"
            className="p-6 space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff5a3c] uppercase border-b border-white/5 pb-2">
              <Trophy className="w-4 h-4" />
              <span>Competitions & Open Source</span>
            </div>
            <div className="space-y-3 text-xs text-[#aab4ad] font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Trophy className="w-4 h-4 text-[#c9a24a] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#dfe7e0] font-normal">BUBT AI Conquest 2025 (BAIC 2025):</strong> National-level competitive AI contest participant at senior division organized by AI Community BUBT.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <GitPullRequest className="w-4 h-4 text-[#ff5a3c] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#dfe7e0] font-normal">Hacktoberfest Contributor:</strong> Regular open-source contributor and maintainer of global developer community repositories.
                </span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Education Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-[#aab4ad] uppercase border-b border-white/5 pb-2">
            <GraduationCap className="w-4 h-4 text-[#e0231c]" />
            <span>Academic Foundations</span>
          </div>

          <div className="space-y-5">
            {EDUCATION.map((edu, idx) => (
              <SpotlightCard
                key={edu.degree}
                spotlightColor="rgba(224, 35, 28, 0.1)"
                className="p-6 sm:p-7 space-y-4"
              >
                <div className="flex items-start justify-between gap-3 border-b border-white/5 pb-3">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#78837c] block mb-1">
                      ACAD // 0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-normal text-[#dfe7e0]">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-mono text-[#aab4ad] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#05070a] border border-white/5 text-[10px] font-mono text-[#aab4ad]">
                    {edu.period}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded bg-[#e0231c]/10 border border-[#e0231c]/20 text-[#e0231c] text-xs font-mono">
                  {edu.grade}
                </div>

                <p className="text-xs text-[#78837c] font-light leading-relaxed">
                  {edu.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
