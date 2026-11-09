"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATES, Certificate } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import CertificateModal from "@/components/CertificateModal";
import { ExternalLink, Eye, Award } from "lucide-react";

const CATEGORIES = [
  "All",
  "AI & ML",
  "Frontend & React",
  "Full-Stack & CS",
  "Professional",
] as const;

export default function CertificateGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const filteredCertificates =
    selectedCategory === "All"
      ? CERTIFICATES
      : CERTIFICATES.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="certificates" className="relative space-y-10 sm:space-y-12 lg:space-y-16 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-2 h-2 rounded-full bg-[#0E76F1] shadow-[0_0_10px_#0E76F1]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9A8E6A] uppercase">
            Chapter // 04
          </span>
          <div className="h-px bg-[#C2B280]/15 flex-1" />
          <span className="font-kanji text-xl sm:text-2xl 2xl:text-3xl text-[#C2B280]/30 tracking-widest hidden sm:inline">
            証 · ACCREDITATIONS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-[#C2B280]">
              Verified Credentials & Honors
            </h2>
            <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#7A7568] max-w-2xl 2xl:max-w-3xl font-light leading-relaxed">
              Formal certifications verified by Stanford Online, DeepLearning.AI, Meta, IBM, and HackerRank.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#2B2D2F]/90 border border-[#C2B280]/15 backdrop-blur-md self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 lg:px-5 py-2 rounded-lg text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
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

      {/* Museum Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 2xl:gap-10">
        {filteredCertificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(14, 118, 241, 0.18)"
              className="flex flex-col justify-between p-5 sm:p-6 lg:p-7 2xl:p-8 space-y-4 sm:space-y-5 group cursor-pointer h-full rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
              onClick={() => setActiveCertificate(cert)}
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Document Image Plate */}
                <div className="relative w-full aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden bg-black/60 border border-[#C2B280]/15">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0E76F1] text-white text-xs sm:text-sm font-mono uppercase tracking-wider shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>View Document</span>
                    </span>
                  </div>
                </div>

                {/* Meta & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#7A7568] uppercase">
                    <span>{cert.category}</span>
                    <span>{cert.issueDate}</span>
                  </div>
                  <h3 className="font-normal text-base sm:text-lg lg:text-xl text-[#C2B280] line-clamp-2 group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-[#9A8E6A] flex items-center gap-2 font-light">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E76F1] shrink-0" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-[#C2B280]/10 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-xs sm:text-sm font-mono text-[#0E76F1] flex items-center gap-1.5 group-hover:underline">
                  <Eye className="w-4 h-4" />
                  <span>Inspect Certificate</span>
                </span>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg text-[#7A7568] hover:text-[#C2B280] hover:bg-[#C2B280]/10 transition-colors"
                    title="Verify with issuer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
}
