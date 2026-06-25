"use client";

import { useEffect, useRef } from "react";

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    // Mouse coordinates (normalized between -1 and 1)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // 3D Grid Parameters
    const rows = 24;
    const cols = 24;
    const spacing = 45; // Spacing in 3D units
    const perspective = 400; // Perspective projection distance
    const cameraDepth = 650; // Camera distance from origin

    // Rotate angle parameters
    let angleX = -0.65; // Base inclination
    let angleY = 0.45;  // Base rotation
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Rotate a 3D point (x, y, z) on Y and X axes
    const rotateAndProject = (x: number, y: number, z: number) => {
      // 1. Rotate Y-axis (Y-rotation)
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      let x1 = x * cosY - z * sinY;
      let z1 = x * sinY + z * cosY;

      // 2. Rotate X-axis (Pitch/Elevation)
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      let y2 = y * cosX - z1 * sinX;
      let z2 = y * sinX + z1 * cosX;

      // 3. Offset depth by camera distance
      const depth = z2 + cameraDepth;

      // 4. Perspective Projection Math
      const scale = perspective / depth;
      const screenX = width / 2 + x1 * scale;
      const screenY = height / 2.2 + y2 * scale; // Shift center slightly up

      return { x: screenX, y: screenY, depth, visible: depth > 100 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      time += reduce ? 0.002 : 0.015;

      // Smooth mouse camera interpolation (damping)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Dynamically adjust angles based on mouse tracking
      angleY = 0.45 + mouse.x * 0.4;
      angleX = -0.65 + mouse.y * 0.25;

      // 2D grid array storing projected screen positions
      const screenGrid: { x: number; y: number; depth: number; visible: boolean }[][] = [];

      // 1. Calculate and Project all Grid coordinates
      for (let r = 0; r < rows; r++) {
        screenGrid[r] = [];
        for (let c = 0; c < cols; c++) {
          // Center the grid around (0, 0, 0) in 3D space
          const gridX = (c - cols / 2) * spacing;
          const gridZ = (r - rows / 2) * spacing;

          // Organic double-sinusoidal wave heights (z-depth displacement)
          // Generates a floating mesh sheet
          const distFromCenter = Math.hypot(gridX, gridZ) * 0.006;
          const gridY = 
            Math.sin(gridX * 0.012 + time) * Math.cos(gridZ * 0.012 + time) * 35 * Math.exp(-distFromCenter) +
            Math.sin(time * 0.5 + distFromCenter * 5) * 12;

          screenGrid[r][c] = rotateAndProject(gridX, gridY, gridZ);
        }
      }

      // 2. Draw connections (lines) between grid cells
      ctx.lineWidth = 0.8;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const curr = screenGrid[r][c];
          if (!curr.visible) continue;

          // Connect to right neighbor
          if (c < cols - 1) {
            const right = screenGrid[r][c + 1];
            if (right.visible) {
              const opacity = Math.min(0.24, (550 / (curr.depth + right.depth)) * 0.15);
              ctx.beginPath();
              ctx.moveTo(curr.x, curr.y);
              ctx.lineTo(right.x, right.y);
              ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
              ctx.stroke();
            }
          }

          // Connect to bottom neighbor
          if (r < rows - 1) {
            const bottom = screenGrid[r + 1][c];
            if (bottom.visible) {
              const opacity = Math.min(0.24, (550 / (curr.depth + bottom.depth)) * 0.15);
              ctx.beginPath();
              ctx.moveTo(curr.x, curr.y);
              ctx.lineTo(bottom.x, bottom.y);
              ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw particles (dots) on intersections
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pt = screenGrid[r][c];
          if (!pt.visible) continue;

          // Calculate particle size and glow based on depth
          const size = Math.max(0.6, (perspective / pt.depth) * 1.8);
          const opacity = Math.min(0.85, (perspective / pt.depth) * 0.6);

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232, 201, 109, ${opacity})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      // Normalize mouse positions between -1 and 1
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
