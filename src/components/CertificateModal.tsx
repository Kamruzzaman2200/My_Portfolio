"use client";

import Image from "next/image";
import { Certificate } from "@/data/portfolioData";
import { ExternalLink, X, Award, CheckCircle } from "lucide-react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#1A1C1E]/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#2B2D2F] border border-[#C2B280]/20 shadow-2xl p-6 sm:p-8 lg:p-10 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#C2B280]/10 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#0E76F1] uppercase font-medium">
                {certificate.category}
              </span>
              <span className="text-xs sm:text-sm text-[#7A7568] font-mono">
                {certificate.issueDate}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-tight text-[#C2B280]">
              {certificate.title}
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-[#9A8E6A] flex items-center gap-2 font-light">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E76F1]" />
              <span>Conferred by {certificate.issuer}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-xl text-[#7A7568] hover:text-white hover:bg-[#C2B280]/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C2B280]/15 bg-black/80">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain p-2 sm:p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
            priority
          />
        </div>

        {/* Credential Details & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#C2B280]/10">
          <div className="text-xs sm:text-sm text-[#7A7568] font-mono">
            {certificate.credentialId ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E76F1]" />
                Credential ID: <span className="text-[#C2B280] font-medium">{certificate.credentialId}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#0E76F1]" />
                Verified Certificate of Achievement
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl border border-[#C2B280]/20 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#C2B280] hover:bg-[#C2B280]/10 hover:border-[#C2B280]/40 transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-6 py-2.5 sm:py-3 rounded-xl bg-[#0E76F1] text-white text-xs sm:text-sm font-mono uppercase tracking-wider shadow-lg shadow-[#0E76F1]/20 hover:bg-[#3D9BFF] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
