"use client";

import Image from "next/image";
import KageBackground from "@/components/KageBackground";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import CertificateGallery from "@/components/CertificateGallery";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import ContactSection from "@/components/ContactSection";
import BlurText from "@/components/react-bits/BlurText";
import ShinyText from "@/components/react-bits/ShinyText";
import DecryptedText from "@/components/react-bits/DecryptedText";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import Magnet from "@/components/react-bits/Magnet";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col text-[#dfe7e0] overflow-x-hidden selection:bg-[#e0231c] selection:text-white">
      {/* Three.js Kage Cinematic Night Walk Background */}
      <KageBackground />

      {/* Editorial Fixed Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#05070a]/80 border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="hanko-seal w-8 h-8 rounded-sm text-xs group-hover:scale-105 transition-transform">
              影
            </div>
            <div className="flex flex-col leading-none gap-1">
              <span className="text-xs font-mono tracking-[0.22em] text-[#dfe7e0] uppercase font-medium">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#78837c] uppercase">
                DHAKA 23.81° N // 90.41° E
              </span>
            </div>
          </a>

          {/* Navigation Links + Resume */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-mono tracking-[0.2em] uppercase text-[#aab4ad]">
              <a href="#projects" className="hover:text-white transition-colors">
                01 Craft
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                02 Arsenal
              </a>
              <a href="#certificates" className="hover:text-white transition-colors">
                03 Credentials
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                04 Chronicle
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                05 Contact
              </a>
            </nav>

            <Magnet padding={30} magnetStrength={3}>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Md_Kamruzzaman_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e0231c] text-white text-xs font-mono tracking-wider uppercase shadow-lg shadow-[#e0231c]/25 hover:bg-[#ff4d36] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </Magnet>
          </div>
        </div>
      </header>

      {/* Main Content Chapters */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-32">
        {/* Chapter 01 // 序章 · THRESHOLD (Hero Section) */}
        <section className="relative pt-6 sm:pt-14 space-y-12">
          {/* Vertical Japanese Title hung on right edge */}
          <div className="hidden xl:block absolute right-0 top-12 font-kanji text-6xl text-white/[0.08] pointer-events-none select-none tracking-[0.4em] [writing-mode:vertical-rl]">
            影 · 宵闇
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
            {/* Left Narrative Column */}
            <div className="flex-1 space-y-6 max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#e0231c] shadow-[0_0_10px_#e0231c]" />
                <span className="text-[10px] font-mono tracking-[0.26em] text-[#aab4ad] uppercase">
                  Chapter // 01 · 序章 · Threshold
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
                  <BlurText
                    text={PERSONAL_INFO.name}
                    delay={60}
                    animateBy="words"
                    className="font-normal text-white"
                  />
                </h1>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm font-mono">
                  <span className="text-[#e0231c] tracking-wider uppercase font-medium">
                    Frontend Developer & Machine Learning
                  </span>
                  <span className="text-white/20 hidden sm:inline">•</span>
                  <span className="text-[#aab4ad] whitespace-nowrap">
                    Dhaka, Bangladesh
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#b4bfb7] font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Action Buttons & Socials */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Magnet padding={40} magnetStrength={2}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e0231c] text-white text-xs font-mono tracking-widest uppercase shadow-xl shadow-[#e0231c]/25 hover:bg-[#ff4d36] transition-all group"
                  >
                    <span>Inspect Works</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnet>

                <Magnet padding={40} magnetStrength={2}>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Md_Kamruzzaman_CV.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-[#dfe7e0] text-xs font-mono tracking-widest uppercase hover:bg-white/10 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </a>
                </Magnet>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 text-[#aab4ad] hover:text-white hover:border-white/30 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 text-[#aab4ad] hover:text-[#e0231c] hover:border-[#e0231c]/40 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 rounded-lg border border-white/10 text-[#aab4ad] hover:text-[#e0231c] hover:border-[#e0231c]/40 transition-all"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Editorial Portrait Plate (Full Natural Color) */}
            <div className="relative shrink-0 w-full sm:w-auto flex justify-center">
              <div className="relative w-64 h-76 sm:w-76 sm:h-96 rounded-2xl overflow-hidden border border-white/15 bg-[#0a0e12] p-2.5 shadow-2xl hover:border-[#e0231c]/50 transition-colors">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 256px, 304px"
                    priority
                  />
                </div>

                {/* Hanko Stamp & Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-2 rounded-lg bg-[#05070a]/85 backdrop-blur-md border border-white/10 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="hanko-seal w-6 h-6 text-[10px] rounded-xs">
                      印
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-[#dfe7e0] uppercase">
                      BUBT CSE · 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[9px] font-mono text-success tracking-widest uppercase">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Ruled Band */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {PERSONAL_INFO.stats.map((st, i) => (
              <div
                key={st.label}
                className="p-6 bg-[#0a0e12]/90 backdrop-blur-md space-y-1"
              >
                <div className="text-[10px] font-mono text-[#78837c] uppercase tracking-widest">
                  STAT // 0{i + 1}
                </div>
                <div className="text-3xl font-light text-[#dfe7e0] tracking-tight font-mono">
                  {st.value}
                </div>
                <div className="text-xs text-[#aab4ad] font-light">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chapter 02: Featured Projects */}
        <ProjectShowcase />

        {/* Chapter 03: Skills & Capabilities */}
        <SkillsSection />

        {/* Chapter 04: Verified Accreditations & Lightbox */}
        <CertificateGallery />

        {/* Chapter 05: Experience & Academic Pathways */}
        <ExperienceEducationSection />

        {/* Chapter 06: Contact & Direct Transmission */}
        <ContactSection />
      </main>

      {/* Kage Manifesto Footer */}
      <footer className="relative border-t border-white/10 py-16 px-4 sm:px-8 bg-[#05070a]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="hanko-seal w-7 h-7 text-xs rounded-xs">
                影
              </div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#dfe7e0] uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#78837c] font-light max-w-md leading-relaxed">
              Designed in the Kage Kyoto temple night study philosophy. Built with Next.js 16, Three.js WebGL procedural environmental rendering, and Lenis inertia physics.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-1.5 text-xs font-mono text-[#78837c]">
            <span className="text-[#aab4ad]">
              <ShinyText text="ALL SYSTEMS NOMINAL // 2026" speed={4} />
            </span>
            <span>COORDINATES: 23.8103° N, 90.4125° E</span>
            <span className="text-[10px] text-white/30">
              MIT REFERENCE ARCHITECTURE · KAGE REMIX
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
