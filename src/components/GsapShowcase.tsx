"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Layers, Cpu, Orbit } from "lucide-react";

export default function GsapShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered floating cards
      gsap.from(".gsap-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Continuous gentle floating animation for badges
      gsap.to(".gsap-floating-badge", {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Orbit className="w-5 h-5 text-secondary animate-spin-slow" />
            GSAP & Timeline Animations
          </h3>
          <p className="text-sm text-base-content/70">
            Powered by GreenSock GSAP 3 & @gsap/react
          </p>
        </div>
        <div className="badge badge-secondary badge-outline font-mono text-xs">
          gsap.timeline()
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="gsap-card p-5 rounded-2xl bg-base-300/40 border border-base-content/10 backdrop-blur-sm space-y-3 hover:border-secondary/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge badge badge-sm badge-secondary">
              Spring Easing
            </span>
          </div>
          <h4 className="font-semibold text-base">Physics-Based Tweens</h4>
          <p className="text-xs text-base-content/70 leading-relaxed">
            Ultra-smooth velocity, elastic physics, and custom Bezier motion curves.
          </p>
        </div>

        <div className="gsap-card p-5 rounded-2xl bg-base-300/40 border border-base-content/10 backdrop-blur-sm space-y-3 hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Layers className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge badge badge-sm badge-primary">
              Orchestration
            </span>
          </div>
          <h4 className="font-semibold text-base">Complex Sequences</h4>
          <p className="text-xs text-base-content/70 leading-relaxed">
            Frame-accurate timeline synchronization paired with Lenis smooth scrolling.
          </p>
        </div>

        <div className="gsap-card p-5 rounded-2xl bg-base-300/40 border border-base-content/10 backdrop-blur-sm space-y-3 hover:border-accent/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge badge badge-sm badge-accent">
              Zero Jank
            </span>
          </div>
          <h4 className="font-semibold text-base">Hardware Accelerated</h4>
          <p className="text-xs text-base-content/70 leading-relaxed">
            High-framerate transform3d pipelines optimized for modern mobile and desktop screens.
          </p>
        </div>
      </div>
    </div>
  );
}
