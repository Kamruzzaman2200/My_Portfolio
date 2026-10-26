"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section id="certificates" className="relative space-y-10 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] shadow-[0_0_8px_#e0231c]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#aab4ad] uppercase">
            Chapter // 04
          </span>
          <div className="h-px bg-white/10 flex-1" />
          <span className="font-kanji text-xl text-white/30 tracking-widest hidden sm:inline">
            証 · ACCREDITATIONS
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#dfe7e0]">
              Verified Credentials & Honors
            </h2>
            <p className="text-xs sm:text-sm text-[#78837c] max-w-xl font-light leading-relaxed">
              Formal certifications verified by Stanford Online, DeepLearning.AI, Meta, IBM, and HackerRank.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-[#0a0e12]/90 border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase transition-all ${
                  selectedCategory === cat
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

      {/* Museum Gallery Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <SpotlightCard
            key={cert.id}
            spotlightColor="rgba(224, 35, 28, 0.16)"
            className="flex flex-col justify-between p-6 space-y-4 group cursor-pointer"
            onClick={() => setActiveCertificate(cert)}
          >
            <div className="space-y-4">
              {/* Document Image Plate */}
              <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-black/60 border border-white/10">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#e0231c] text-white text-[10px] font-mono uppercase tracking-wider shadow-lg">
                    <Eye className="w-3 h-3" />
                    <span>View Document</span>
                  </span>
                </div>
              </div>

              {/* Meta & Title */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#78837c] uppercase">
                  <span>{cert.category}</span>
                  <span>{cert.issueDate}</span>
                </div>
                <h3 className="font-normal text-base text-[#dfe7e0] line-clamp-2 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#aab4ad] flex items-center gap-1.5 font-light">
                  <Award className="w-3.5 h-3.5 text-[#e0231c]" />
                  <span>{cert.issuer}</span>
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-[#e0231c] flex items-center gap-1.5 group-hover:underline">
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Certificate</span>
              </span>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg text-[#78837c] hover:text-[#dfe7e0] hover:bg-white/5 transition-colors"
                  title="Verify with issuer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </SpotlightCard>
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
