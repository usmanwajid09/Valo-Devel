"use client";

import { useState } from "react";
import { Play, Pause, Terminal, Cpu, ShieldCheck, Zap, Layers } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const demos = [
  {
    id: "circle",
    title: "Circle Compiler & VS Code Walkthrough",
    description: "Watch the Circle compiler compile systems code to WebAssembly in under 10ms with instant autocomplete and diagnostic syntax checking.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-coding-on-a-laptop-computer-40742-large.mp4",
    logs: [
      "[Circle CLI] Initializing build environment...",
      "[Circle CLI] Scanning target files in main.cl",
      "[Circle CLI] Parser completed in 2.1ms (1,402 AST nodes)",
      "[Circle CLI] Code generator targeting WebAssembly (wasm32)...",
      "[Circle CLI] Linker completed in 1.4ms",
      "[Circle CLI] Build Success: main.wasm created (Size: 42.1 KB)",
      "[Circle CLI] Execution time: 8.2ms",
    ],
    stats: { speed: "<10ms", language: "Rust/WASM", license: "MIT" },
  },
  {
    id: "weave",
    title: "Weave AI Router Cost Gateway Demo",
    description: "See the Weave proxy analyze query complexity and dynamically route inputs to mini models, saving 40% on API costs while keeping response times under 8ms.",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-with-flashing-led-lights-42998-large.mp4",
    logs: [
      "[Weave Gateway] Proxy server active on port 8080",
      "[Weave Gateway] Intercepting request (Prompt size: 1.2k tokens)",
      "[Weave Gateway] Complexity analyzer score: 12/100 (Simple)",
      "[Weave Gateway] Routing to: gpt-4o-mini (Est. cost: $0.00018)",
      "[Weave Gateway] Response received in 140ms",
      "[Weave Gateway] Saved $0.00282 compared to GPT-4o base",
      "[Weave Gateway] Router middleware latency: 6.4ms",
    ],
    stats: { speed: "<8ms", savings: "40%", volume: "2.8M prompts" },
  },
];

export function VideoDemosSection() {
  const [activeDemo, setActiveDemo] = useState(demos[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative overflow-hidden py-24 border-t border-gold/10 bg-surface/30">
      <div className="absolute inset-0 bg-radial-fade opacity-30" aria-hidden="true" />
      <div className="container relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow inline-flex items-center gap-1.5 bg-gold/5 px-3 py-1 rounded-full border border-gold/20 text-xs text-gold font-semibold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" /> Cinematic Demos
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl leading-tight">
              Watch Our Products <br />
              <span className="text-gradient-gold">Run In Real-Time.</span>
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Explore the raw performance, compiler execution, and cost optimization routing that we engineer into our proprietary systems.
            </p>
          </div>
        </Reveal>

        {/* Layout */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          
          {/* Left Side: Cinematic Video Player */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-background shadow-2xl group">
              <div className="aspect-[16/9] w-full relative">
                {/* Looping video element */}
                <video
                  key={activeDemo.id}
                  src={activeDemo.videoUrl}
                  autoPlay={isPlaying}
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-60 transition-opacity duration-300"
                />
                
                {/* Control overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" aria-hidden="true" />
                
                {/* Interactive Player Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-background hover:scale-105 active:scale-95 transition-all shadow-md"
                      aria-label={isPlaying ? "Pause Demo" : "Play Demo"}
                    >
                      {isPlaying ? <Pause className="h-4.5 w-4.5 fill-background" /> : <Play className="h-4.5 w-4.5 fill-background translate-x-0.5" />}
                    </button>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Demo Video Player</h4>
                      <p className="text-[10px] text-muted">Playing: {activeDemo.title}</p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-gold bg-gold/5 border border-gold/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    <Cpu className="h-3 w-3" /> Live Loop
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Tab selectors & Live Logs Console */}
          <div className="flex flex-col justify-between gap-6">
            
            {/* Tabs selection */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted/60">
                Select Walkthrough Demo
              </span>
              <div className="grid gap-3">
                {demos.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setActiveDemo(d);
                      setIsPlaying(true);
                    }}
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                      activeDemo.id === d.id
                        ? "border-gold/45 bg-gold/5"
                        : "border-gold/10 bg-card/45 hover:border-gold/25"
                    }`}
                  >
                    <h3 className={`text-sm font-bold transition-colors ${activeDemo.id === d.id ? "text-gold" : "text-white"}`}>
                      {d.title}
                    </h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">
                      {d.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated terminal showing corresponding logs */}
            <div className="rounded-2xl border border-gold/20 bg-background/80 p-5 font-mono text-[10px] leading-relaxed text-gold shadow-inner relative">
              <div className="absolute top-4 right-4 flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-1.5 border-b border-gold/15 pb-2 text-white font-bold mb-3">
                <Terminal className="h-3.5 w-3.5 text-gold" /> System Telemetry Log
              </div>
              <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                {activeDemo.logs.map((log, i) => (
                  <div key={i} className={log.includes("Success") || log.includes("Saved") ? "text-emerald-400" : ""}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
