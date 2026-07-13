"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  color: string;
}

export function ScrollPhysicsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false, rx: 0, ry: 0 });
  const scrollRef = useRef({ y: 0, velocity: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create Particles
    const particleCount = Math.min(45, Math.floor((canvas.width * canvas.height) / 18000));
    const particles: Particle[] = [];
    const colors = ["rgba(212, 175, 55, ", "rgba(255, 255, 255, ", "rgba(100, 100, 100, "];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius,
        alpha: Math.random() * 0.4 + 0.1,
        targetAlpha: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    particlesRef.current = particles;

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // Track Scroll Speed
    scrollRef.current.lastY = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - scrollRef.current.lastY;
      scrollRef.current.velocity += diff * 0.08;
      scrollRef.current.lastY = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);

    // GSAP Animation Ticker Loop
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Damp scroll velocity back to zero using linear interpolation
      scrollRef.current.velocity *= 0.92;
      const scrollShift = scrollRef.current.velocity;

      // Mouse Lerp
      const mouse = mouseRef.current;
      mouse.rx += (mouse.x - mouse.rx) * 0.1;
      mouse.ry += (mouse.y - mouse.ry) * 0.1;

      // Draw & Update Particles
      const list = particlesRef.current;
      for (let i = 0; i < list.length; i++) {
        const p = list[i];

        // Shift by scroll velocity
        p.y -= scrollShift;

        // Apply constant drift velocity
        p.x += p.vx;
        p.y += p.vy;

        // Bound check wrapping
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse Physics Interaction
        if (mouse.active) {
          const dx = p.x - mouse.rx;
          const dy = p.y - mouse.ry;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            // Repel particles with smooth falloff
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Draw connections between close particles
        for (let j = i + 1; j < list.length; j++) {
          const p2 = list[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxConnectionDist = 100;

          if (dist < maxConnectionDist) {
            const alpha = (1 - dist / maxConnectionDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }
    };

    gsap.ticker.add(tick);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-screen"
    />
  );
}
