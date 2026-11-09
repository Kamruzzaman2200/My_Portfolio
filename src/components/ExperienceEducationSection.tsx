"use client";

import { motion } from "framer-motion";
import { EDUCATION, EXPERIENCES } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import { GraduationCap, Briefcase, Trophy, GitPullRequest } from "lucide-react";

export default function ExperienceEducationSection() {
  return (
    <section id="experience" className="relative space-y-10 sm:space-y-12 lg:space-y-16 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-2 h-2 rounded-full bg-[#0E76F1] shadow-[0_0_10px_#0E76F1]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9A8E6A] uppercase">
            Chapter // 05
          </span>
          <div className="h-px bg-[#C2B280]/15 flex-1" />
          <span className="font-kanji text-xl sm:text-2xl 2xl:text-3xl text-[#C2B280]/30 tracking-widest hidden sm:inline">
            歴 · CHRONICLE
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-[#C2B280]">
            Milestones & Trajectory
          </h2>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#7A7568] max-w-2xl 2xl:max-w-3xl font-light leading-relaxed">
            University academic studies in computer science, enterprise freelance contracts, and commercial operations.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 2xl:gap-12">
        {/* Experience Column */}
        <div className="space-y-6 sm:space-y-7">
          <div className="flex items-center gap-3 text-sm sm:text-base font-mono tracking-widest text-[#0E76F1] uppercase border-b border-[#C2B280]/10 pb-3">
            <Briefcase className="w-5 h-5" />
            <span>Practice & Enterprise</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(14, 118, 241, 0.14)"
                  className="p-6 sm:p-8 lg:p-9 space-y-5 rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#C2B280]/10 pb-4">
                    <div>
                      <span className="text-xs font-mono tracking-widest text-[#7A7568] block mb-1">
                        CHRONO // 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#C2B280]">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-[#0E76F1] mt-1">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#1A1C1E] border border-[#C2B280]/10 text-xs font-mono text-[#9A8E6A]">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-sm sm:text-base text-[#9A8E6A] font-light leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0E76F1] mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Activities Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SpotlightCard
              spotlightColor="rgba(194, 178, 128, 0.14)"
              className="p-6 sm:p-8 lg:p-9 space-y-5 rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
            >
              <div className="flex items-center gap-3 text-sm sm:text-base font-mono tracking-widest text-[#C2B280] uppercase border-b border-[#C2B280]/10 pb-3">
                <Trophy className="w-5 h-5" />
                <span>Competitions & Open Source</span>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#9A8E6A] font-light leading-relaxed">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-[#C2B280] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#C2B280] font-normal">BUBT AI Conquest 2025 (BAIC 2025):</strong> National-level competitive AI contest participant at senior division organized by AI Community BUBT.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <GitPullRequest className="w-5 h-5 text-[#0E76F1] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#C2B280] font-normal">Hacktoberfest Contributor:</strong> Regular open-source contributor and maintainer of global developer community repositories.
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Education Column */}
        <div className="space-y-6 sm:space-y-7">
          <div className="flex items-center gap-3 text-sm sm:text-base font-mono tracking-widest text-[#9A8E6A] uppercase border-b border-[#C2B280]/10 pb-3">
            <GraduationCap className="w-5 h-5 text-[#0E76F1]" />
            <span>Academic Foundations</span>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(14, 118, 241, 0.12)"
                  className="p-6 sm:p-8 lg:p-9 space-y-5 rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#C2B280]/10 pb-4">
                    <div>
                      <span className="text-xs font-mono tracking-widest text-[#7A7568] block mb-1">
                        ACAD // 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#C2B280]">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-[#9A8E6A] mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#1A1C1E] border border-[#C2B280]/10 text-xs font-mono text-[#9A8E6A]">
                      {edu.period}
                    </span>
                  </div>

                  <div className="inline-block px-3.5 py-1.5 rounded-lg bg-[#0E76F1]/10 border border-[#0E76F1]/20 text-[#0E76F1] text-xs sm:text-sm font-mono">
                    {edu.grade}
                  </div>

                  <p className="text-sm sm:text-base text-[#7A7568] font-light leading-relaxed">
                    {edu.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
