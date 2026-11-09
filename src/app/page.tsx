"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import KageBackground from "@/components/KageBackground";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import CertificateGallery from "@/components/CertificateGallery";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import ContactSection from "@/components/ContactSection";
import AnimatedSection from "@/components/AnimatedSection";
import BlurText from "@/components/react-bits/BlurText";
import ShinyText from "@/components/react-bits/ShinyText";
import Magnet from "@/components/react-bits/Magnet";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Download, Mail, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "01 Craft" },
    { href: "#skills", label: "02 Arsenal" },
    { href: "#certificates", label: "03 Credentials" },
    { href: "#experience", label: "04 Chronicle" },
    { href: "#contact", label: "05 Contact" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col text-[#C2B280] overflow-x-hidden selection:bg-[#0E76F1] selection:text-white">
      {/* Three.js Cinematic Background */}
      <KageBackground />

      {/* Editorial Fixed Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-[#1A1C1E]/85 border-b border-[#C2B280]/10 transition-all"
      >
        <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1650px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 h-18 sm:h-20 lg:h-22 flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-3 sm:gap-4 group">
            <div className="hanko-seal w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-sm text-xs sm:text-sm group-hover:scale-105 transition-transform">
              影
            </div>
            <div className="flex flex-col leading-tight gap-0.5">
              <span className="text-xs sm:text-sm lg:text-base font-mono tracking-[0.22em] text-[#C2B280] uppercase font-medium">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-xs font-mono tracking-[0.3em] text-[#7A7568] uppercase">
                DHAKA 23.81° N // 90.41° E
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links + Resume */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            <nav className="flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-mono tracking-[0.2em] uppercase text-[#9A8E6A]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors py-1 relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0E76F1] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <Magnet padding={30} magnetStrength={3}>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Md_Kamruzzaman_CV.pdf"
                className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 rounded-lg bg-[#0E76F1] text-white text-xs sm:text-sm font-mono tracking-wider uppercase shadow-lg shadow-[#0E76F1]/25 hover:bg-[#3D9BFF] hover:shadow-[#0E76F1]/40 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </Magnet>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Md_Kamruzzaman_CV.pdf"
              className="inline-flex sm:hidden items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0E76F1] text-white text-[11px] font-mono uppercase shadow-md shadow-[#0E76F1]/25"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#2B2D2F]/80 border border-[#C2B280]/15 text-[#C2B280] hover:text-white hover:border-[#0E76F1]/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-[#C2B280]/10 bg-[#1A1C1E]/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-mono tracking-[0.2em] uppercase text-[#9A8E6A] hover:text-[#0E76F1] py-2 border-b border-[#C2B280]/5 transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  ))}
                </nav>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Md_Kamruzzaman_CV.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0E76F1] text-white text-xs font-mono tracking-wider uppercase shadow-lg shadow-[#0E76F1]/25 hover:bg-[#3D9BFF] transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Curriculum Vitae</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content Chapters */}
      <main className="flex-1 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1650px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 py-10 sm:py-16 lg:py-24 2xl:py-28 space-y-24 sm:space-y-32 lg:space-y-40 2xl:space-y-48">
        {/* Chapter 01 // 序章 · THRESHOLD (Hero Section) */}
        <section className="relative pt-4 sm:pt-8 lg:pt-12 2xl:pt-16 space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Vertical Japanese Title hung on right edge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="hidden xl:block absolute right-0 top-6 2xl:top-10 font-kanji text-7xl 2xl:text-8xl text-white/[0.06] pointer-events-none select-none tracking-[0.4em] [writing-mode:vertical-rl]"
          >
            影 · 宵闇
          </motion.div>

          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-12 lg:gap-14 xl:gap-20 2xl:gap-24">
            {/* Left Narrative Column */}
            <AnimatedSection direction="left" className="flex-1 space-y-6 sm:space-y-8 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0E76F1] shadow-[0_0_12px_#0E76F1]" />
                <span className="text-xs sm:text-sm font-mono tracking-[0.26em] text-[#9A8E6A] uppercase">
                  Chapter // 01 · 序章 · Threshold
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light tracking-tight text-white leading-[1.05]">
                  <BlurText
                    text={PERSONAL_INFO.name}
                    delay={60}
                    animateBy="words"
                    className="font-normal text-white justify-center lg:justify-start"
                  />
                </h1>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-mono">
                  <span className="text-[#0E76F1] tracking-wider uppercase font-medium">
                    Frontend Developer & Machine Learning
                  </span>
                  <span className="text-white/20 hidden sm:inline">•</span>
                  <span className="text-[#9A8E6A] whitespace-nowrap">
                    Dhaka, Bangladesh
                  </span>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl text-[#9A8E6A] font-light leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Action Buttons & Socials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
              >
                <Magnet padding={40} magnetStrength={2}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl bg-[#0E76F1] text-white text-xs sm:text-sm lg:text-base font-mono tracking-widest uppercase shadow-xl shadow-[#0E76F1]/25 hover:bg-[#3D9BFF] hover:shadow-[#0E76F1]/40 transition-all group cursor-pointer"
                  >
                    <span>Inspect Works</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnet>

                <Magnet padding={40} magnetStrength={2}>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Md_Kamruzzaman_CV.pdf"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl border border-[#C2B280]/20 text-[#C2B280] text-xs sm:text-sm lg:text-base font-mono tracking-widest uppercase hover:bg-[#C2B280]/10 hover:border-[#C2B280]/40 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </Magnet>

                <div className="flex items-center gap-2 sm:gap-2.5 pl-1 sm:pl-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 lg:p-4 rounded-xl border border-[#C2B280]/15 text-[#9A8E6A] hover:text-white hover:border-[#C2B280]/40 hover:bg-[#2B2D2F]/50 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 lg:p-4 rounded-xl border border-[#C2B280]/15 text-[#9A8E6A] hover:text-[#0E76F1] hover:border-[#0E76F1]/40 hover:bg-[#2B2D2F]/50 transition-all"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 sm:p-3.5 lg:p-4 rounded-xl border border-[#C2B280]/15 text-[#9A8E6A] hover:text-[#0E76F1] hover:border-[#0E76F1]/40 hover:bg-[#2B2D2F]/50 transition-all"
                    title="Email"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right Editorial Portrait Plate (Properly Scaled for PC, Laptop, Tablet, Mobile) */}
            <AnimatedSection direction="right" delay={0.3} className="relative shrink-0 w-full sm:w-auto flex justify-center">
              <div className="relative w-72 h-88 sm:w-80 sm:h-[420px] md:w-92 md:h-[480px] lg:w-[380px] lg:h-[490px] xl:w-[440px] xl:h-[560px] 2xl:w-[490px] 2xl:h-[620px] rounded-3xl overflow-hidden border border-[#C2B280]/20 bg-[#2B2D2F] p-3 sm:p-3.5 lg:p-4 shadow-2xl hover:border-[#0E76F1]/50 transition-colors">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 368px, (max-width: 1280px) 380px, (max-width: 1536px) 440px, 490px"
                    priority
                  />
                </div>

                {/* Hanko Stamp & Tag */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-[#1A1C1E]/90 backdrop-blur-md border border-[#C2B280]/15 pointer-events-none">
                  <div className="flex items-center gap-2.5">
                    <div className="hanko-seal w-7 h-7 sm:w-8 sm:h-8 text-[11px] sm:text-xs rounded-xs">
                      印
                    </div>
                    <span className="text-xs sm:text-sm font-mono tracking-wider text-[#C2B280] uppercase">
                      BUBT CSE · 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0E76F1] animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-mono text-[#0E76F1] tracking-widest uppercase font-medium">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Key Metrics Ruled Band — Generously Scaled */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C2B280]/15 border border-[#C2B280]/15 rounded-2xl overflow-hidden shadow-xl">
              {PERSONAL_INFO.stats.map((st, i) => (
                <motion.div
                  key={st.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 sm:p-7 md:p-8 lg:p-10 2xl:p-12 bg-[#2B2D2F]/90 backdrop-blur-md space-y-1.5 sm:space-y-2 hover:bg-[#2B2D2F] transition-colors"
                >
                  <div className="text-[10px] sm:text-xs lg:text-sm font-mono text-[#7A7568] uppercase tracking-widest">
                    STAT // 0{i + 1}
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light text-[#C2B280] tracking-tight font-mono">
                    {st.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-[#9A8E6A] font-light">
                    {st.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Chapter 02: Featured Projects */}
        <AnimatedSection>
          <ProjectShowcase />
        </AnimatedSection>

        {/* Chapter 03: Skills & Capabilities */}
        <AnimatedSection direction="up" delay={0.1}>
          <SkillsSection />
        </AnimatedSection>

        {/* Chapter 04: Verified Accreditations & Lightbox */}
        <AnimatedSection direction="scale">
          <CertificateGallery />
        </AnimatedSection>

        {/* Chapter 05: Experience & Academic Pathways */}
        <AnimatedSection>
          <ExperienceEducationSection />
        </AnimatedSection>

        {/* Chapter 06: Contact & Direct Transmission */}
        <AnimatedSection direction="up" delay={0.1}>
          <ContactSection />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <AnimatedSection>
        <footer className="relative border-t border-[#C2B280]/15 py-14 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 bg-[#1A1C1E]/95 backdrop-blur-xl">
          <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1650px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 sm:gap-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="hanko-seal w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm rounded-xs">
                  影
                </div>
                <span className="text-sm sm:text-base lg:text-lg font-mono tracking-[0.25em] text-[#C2B280] uppercase">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#7A7568] font-light max-w-md">
                Frontend Developer & Machine Learning engineer crafting high-performance, resilient digital experiences.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono text-[#7A7568]">
              <span className="text-[#9A8E6A] font-medium">
                <ShinyText text="ALL SYSTEMS NOMINAL // 2026" speed={4} />
              </span>
              <span>COORDINATES: 23.8103° N, 90.4125° E</span>
              <span className="text-[11px] sm:text-xs text-[#C2B280]/40">
                MIT REFERENCE ARCHITECTURE · KAGE REMIX
              </span>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}
