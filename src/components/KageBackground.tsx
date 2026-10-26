"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useLenis } from "lenis/react";

export default function KageBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollOffsetRef = useRef(0);

  // Hook into Lenis scroll events for smooth cinematic camera translation
  useLenis((lenis) => {
    scrollOffsetRef.current = lenis.scroll;
  });

  useEffect(() => {
    if (!mountRef.current || typeof window === "undefined") return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 50);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x05070a, 1);
    mountRef.current.appendChild(renderer.domElement);

    // 3. Vermilion Blood Moon
    const moonGeo = new THREE.CircleGeometry(9.5, 64);
    // Radial gradient glow texture for the moon
    const moonCanvas = document.createElement("canvas");
    moonCanvas.width = 512;
    moonCanvas.height = 512;
    const ctx = moonCanvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
    grad.addColorStop(0, "#ff4d36");
    grad.addColorStop(0.45, "#e0231c");
    grad.addColorStop(0.75, "rgba(224, 35, 28, 0.45)");
    grad.addColorStop(1, "rgba(224, 35, 28, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(256, 256, 256, 0, Math.PI * 2);
    ctx.fill();

    const moonTex = new THREE.CanvasTexture(moonCanvas);
    const moonMat = new THREE.MeshBasicMaterial({
      map: moonTex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.set(16, 12, -35);
    scene.add(moonMesh);

    // Subtle moon outer halo ring
    const haloGeo = new THREE.RingGeometry(9.4, 22, 64);
    const haloCanvas = document.createElement("canvas");
    haloCanvas.width = 512;
    haloCanvas.height = 512;
    const hCtx = haloCanvas.getContext("2d")!;
    const hGrad = hCtx.createRadialGradient(256, 256, 150, 256, 256, 256);
    hGrad.addColorStop(0, "rgba(224, 35, 28, 0.25)");
    hGrad.addColorStop(0.6, "rgba(255, 90, 60, 0.08)");
    hGrad.addColorStop(1, "rgba(5, 7, 10, 0)");
    hCtx.fillStyle = hGrad;
    hCtx.fillRect(0, 0, 512, 512);

    const haloTex = new THREE.CanvasTexture(haloCanvas);
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.set(16, 12, -36);
    scene.add(haloMesh);

    // 4. Drifting Autumn Leaves / Kyoto Temple Embers Particle System
    const particleCount = 220;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const rotations = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      scales[i] = 0.4 + Math.random() * 0.9;

      // Drift left and gently downward
      velocities[i * 3] = -0.015 - Math.random() * 0.025;
      velocities[i * 3 + 1] = -0.012 - Math.random() * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

      rotations[i * 3] = Math.random() * Math.PI;
      rotations[i * 3 + 1] = (Math.random() - 0.5) * 0.03;
      rotations[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle texture (leaf/ember diamond shape)
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d")!;
    pCtx.translate(32, 32);
    pCtx.rotate(Math.PI / 4);
    pCtx.fillStyle = "#ff5a3c";
    pCtx.fillRect(-14, -14, 28, 28);
    // Soft glow outline
    pCtx.strokeStyle = "rgba(224, 35, 28, 0.8)";
    pCtx.lineWidth = 4;
    pCtx.strokeRect(-14, -14, 28, 28);

    const pTex = new THREE.CanvasTexture(pCanvas);
    const pMat = new THREE.PointsMaterial({
      size: 1.6,
      map: pTex,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, pMat);
    scene.add(particles);

    // 5. Subtle ambient starlight / dust particles
    const starCount = 180;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 120;
      starPos[i + 1] = (Math.random() - 0.5) * 100;
      starPos[i + 2] = -40 - Math.random() * 40;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.6,
      color: 0xdfe7e0,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 6. Interactive Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Resize handling
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Scroll-driven camera displacement
      const scrollY = scrollOffsetRef.current;
      const targetCamY = -scrollY * 0.007;
      const targetCamZ = 50 + scrollY * 0.004;

      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.position.x = mouseX * 2.2;
      camera.lookAt(mouseX * 1.5, camera.position.y - 1, 0);

      // Moon subtle breathing
      const pulse = 1 + Math.sin(elapsedTime * 0.8) * 0.03;
      moonMesh.scale.set(pulse, pulse, 1);
      haloMesh.scale.set(pulse, pulse, 1);
      moonMesh.position.y = 12 + Math.cos(elapsedTime * 0.5) * 0.5;
      haloMesh.position.y = moonMesh.position.y;

      // Particle physics: flutter and wrap
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        posArray[i3] += velocities[i3] + Math.sin(elapsedTime * 1.5 + i) * 0.01;
        posArray[i3 + 1] += velocities[i3 + 1];
        posArray[i3 + 2] += velocities[i3 + 2];

        // Wrap around bounds
        if (posArray[i3] < -45) posArray[i3] = 45;
        if (posArray[i3 + 1] < -40) posArray[i3] = 40;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      moonGeo.dispose();
      moonMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      geometry.dispose();
      pMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <>
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="fixed inset-0 -z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Cinematic Vignette */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(130% 100% at 50% 40%, transparent 42%, rgba(2, 4, 7, 0.75) 88%, rgba(2, 4, 7, 0.95) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
