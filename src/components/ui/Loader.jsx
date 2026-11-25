
"use client";

import { useEffect, useRef, useState } from "react";

export default function RankMantraLoader({ onComplete }) {
  const canvasRef = useRef(null);
  const completeRef = useRef(onComplete);

  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let width = 0;
    let height = 0;
    let startTime = null;
    let animationFrame;
    let completeTimer;
    let fadeTimer;

    const duration = 3500;

    const centerY = () => height / 2 - 15;

    // Create responsive particles
    const createParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];

      // Responsive circle radius
      const isMobile = width < 640;

      const radius = isMobile
        ? Math.min(width * 0.39, height * 0.18, 180)
        : Math.min(width * 0.16, height * 0.22, 180);

      // Particle density
      const particleCount = isMobile ? 1100 : 1400;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 10;

        // Consistent circle thickness
        const variation = (Math.random() - 0.5) * 50;

        const targetRadius = radius + variation;

        const tx =
          width / 2 + Math.cos(angle) * targetRadius;

        const ty =
          centerY() + Math.sin(angle) * targetRadius;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          tx,
          ty,

          angle,
          radius: targetRadius,

          size: isMobile
            ? Math.random() * 1.2 + 0.4
            : Math.random() * 1.5 + 0.5,

          color: Math.random() > 0.08
            ? "#dc2626"
            : "#ffffff",

          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.8 + 0.5,
        });
      }

      // Background floating particles
      const ambientCount = isMobile ? 70 : 180;

      for (let i = 0; i < ambientCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,

          tx: Math.random() * width,
          ty: Math.random() * height,

          size: Math.random() * 1.2 + 0.3,

          color: "#dc2626",

          phase: Math.random() * Math.PI * 2,

          speed: 0,
          ambient: true,
        });
      }
    };

    // Animation
    const animate = (time) => {
      if (!startTime) startTime = time;

      const elapsed = time - startTime;

      const currentProgress = Math.min(
        Math.floor((elapsed / duration) * 100),
        100
      );

      setProgress((previous) =>
        previous === currentProgress
          ? previous
          : currentProgress
      );

      const reveal = Math.min(elapsed / 1600, 1);

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        let x;
        let y;

        if (p.ambient) {
          x =
            p.x +
            Math.sin(time * 0.0005 + p.phase) * 15;

          y =
            p.y +
            Math.cos(time * 0.0005 + p.phase) * 15;
        } else {
          const angle =
            p.angle + Math.sin(time * 0.0005) * 0.015;

          const targetX =
            width / 2 + Math.cos(angle) * p.radius;

          const targetY =
            centerY() + Math.sin(angle) * p.radius;

          const ease = 1 - Math.pow(1 - reveal, 3);

          x = p.x + (targetX - p.x) * ease;

          y = p.y + (targetY - p.y) * ease;

          // Gentle particle movement
          x += Math.cos(time * 0.001 + p.phase) * 1.5;

          y += Math.sin(time * 0.001 + p.phase) * 1.5;
        }

        ctx.globalAlpha = p.ambient
          ? 0.35
          : 0.6 +
            Math.sin(time * 0.002 + p.phase) * 0.3;

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(x, y, p.size, 0, Math.PI * 2);

        ctx.fill();
      });

      ctx.globalAlpha = 1;

      if (currentProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        completeTimer = setTimeout(() => {
          setFinished(true);

          fadeTimer = setTimeout(() => {
            completeRef.current?.();
          }, 700);
        }, 300);
      }
    };

    createParticles();

    window.addEventListener("resize", createParticles);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      clearTimeout(completeTimer);
      clearTimeout(fadeTimer);

      window.removeEventListener("resize", createParticles);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden bg-black
      transition-opacity duration-700
      ${
        finished
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Background Red Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(220,38,38,0.30), transparent 60%)",
        }}
      />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Center Brand Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">

        <div
          className={`w-full max-w-full text-center transition-all duration-1000 ${
            progress > 15
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <h1 className="whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Rank<span className="text-red-600">Mantra</span>
          </h1>

          <p className="mt-3 text-[8px] sm:text-[10px] md:text-[11px] tracking-[3px] sm:tracking-[5px] font-semibold uppercase text-white/50 leading-relaxed">
            Digital Marketing
            <br />
            Agency
          </p>
        </div>

      </div>

      {/* Loading Percentage */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-[10px] sm:text-xs font-bold tracking-[3px] text-white/60 tabular-nums">
        {String(progress).padStart(3, "0")} %
      </div>
    </div>
  );
}
