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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070a]/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0e12] border border-white/10 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-widest text-[#e0231c] uppercase">
                {certificate.category}
              </span>
              <span className="text-xs text-[#78837c] font-mono">
                {certificate.issueDate}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#dfe7e0]">
              {certificate.title}
            </h3>
            <p className="text-xs text-[#aab4ad] flex items-center gap-1.5 font-light">
              <Award className="w-4 h-4 text-[#e0231c]" />
              <span>Conferred by {certificate.issuer}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#78837c] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden border border-white/10 bg-black/80">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>

        {/* Credential Details & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
          <div className="text-xs text-[#78837c] font-mono">
            {certificate.credentialId ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e0231c]" />
                Credential ID: <span className="text-[#dfe7e0]">{certificate.credentialId}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#e0231c]" />
                Verified Certificate of Achievement
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-xs font-mono uppercase tracking-wider text-[#dfe7e0] hover:bg-white/5 transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#e0231c] text-white text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#e0231c]/20 hover:bg-[#ff4d36] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
