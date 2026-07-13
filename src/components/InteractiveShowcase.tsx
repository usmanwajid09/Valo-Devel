"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Play,
  Award,
  ExternalLink,
  Star,
  GitFork,
  Terminal,
  Trophy,
  Cloud,
  CheckCircle2,
  Code2,
} from "lucide-react";

type TabId = "projects" | "video" | "credentials";

export function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [isPlaying, setIsPlaying] = useState(false);
  const [compilerStatus, setCompilerStatus] = useState("Idle");

  const runCompilerSim = () => {
    if (compilerStatus !== "Idle") return;
    setCompilerStatus("Compiling...");
    setTimeout(() => {
      setCompilerStatus("Linking...");
      setTimeout(() => {
        setCompilerStatus("Success! (8.2ms)");
        setTimeout(() => {
          setCompilerStatus("Idle");
        }, 3000);
      }, 1000);
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-3xl border border-gold/30 bg-card/60 p-6 backdrop-blur-xl shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/10 to-transparent opacity-50 blur-lg" aria-hidden="true" />

      {/* Tabs Header */}
      <div className="flex items-center gap-1.5 rounded-2xl bg-surface/50 p-1 border border-gold/10 relative z-10">
        {[
          { id: "projects", label: "GitHub Projects", icon: Github },
          { id: "video", label: "Product Demo", icon: Play },
          { id: "credentials", label: "Credentials", icon: Award },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                isActive ? "text-background" : "text-muted hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeHeroTab"
                  className="absolute inset-0 rounded-xl bg-gold-gradient"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="mt-6 min-h-[350px] relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold/80">
                  Open Source Products by usmanwajid09
                </span>
                <a
                  href="https://github.com/usmanwajid09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-medium text-muted hover:text-gold transition-colors"
                >
                  View Profile <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Project 1 */}
              <a
                href="https://github.com/usmanwajid09"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-gold/15 bg-background/45 p-4 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading text-base font-bold text-white group-hover:text-gold transition-colors flex items-center gap-2">
                      Circle Programming Language
                      <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold border border-gold/20">
                        Rust
                      </span>
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Lightweight, blazing-fast systems language and companion VS Code extension for compiled WebAssembly architectures.
                    </p>
                  </div>
                  <ExternalLink className="h-4.5 w-4.5 text-muted/40 group-hover:text-gold transition-colors" />
                </div>
                <div className="mt-3.5 flex items-center gap-4 text-[11px] font-medium text-muted">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-gold" /> 15.2k+
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" /> 843
                  </span>
                  <span className="text-gold/80 font-semibold">Active Compiler</span>
                </div>
              </a>

              {/* Project 2 */}
              <a
                href="https://github.com/usmanwajid09"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-gold/15 bg-background/45 p-4 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-heading text-base font-bold text-white group-hover:text-gold transition-colors flex items-center gap-2">
                      Weave AI Router
                      <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold border border-gold/20">
                        TypeScript
                      </span>
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      Intelligent high-throughput AI gateway middleware proxy that optimizes prompt routing, reducing costs by 40%.
                    </p>
                  </div>
                  <ExternalLink className="h-4.5 w-4.5 text-muted/40 group-hover:text-gold transition-colors" />
                </div>
                <div className="mt-3.5 flex items-center gap-4 text-[11px] font-medium text-muted">
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-gold" /> 1.4k+
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" /> 120
                  </span>
                  <span className="text-gold/80 font-semibold">Cost Optimizer</span>
                </div>
              </a>
            </motion.div>
          )}

          {activeTab === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full justify-between"
            >
              {/* Custom Simulated Interactive Player */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gold/20 bg-background shadow-inner">
                {/* Mock Visual Editor Background */}
                <div className="absolute inset-0 p-4 font-mono text-[10px] text-muted/40 leading-relaxed selection:bg-gold/20">
                  <div className="text-gold/30">{"// Compiling circle programming language modules..."}</div>
                  <div>{"import { compile, parse } from \"circle-compiler\";"}</div>
                  <div>{"const main = () => {"}</div>
                  <div className="pl-4">{"const compilerState = compile({"}</div>
                  <div className="pl-8">{"target: \"wasm32-unknown-unknown\","}</div>
                  <div className="pl-8">{"optLevel: 3"}</div>
                  <div className="pl-4">{"});"}</div>
                  <div className="pl-4">{"console.log(`Build complete: ${compilerState.duration}ms`);"}</div>
                  <div>{"};"}</div>
                  <div className="mt-4 text-emerald-500/30">{"$ circle-compiler build --prod --watch"}</div>
                  <div className="text-white/60">{"[Watcher] File changes detected: main.cl"}</div>
                </div>

                {/* Dark Overlay when playing */}
                <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] transition-all flex flex-col items-center justify-center p-6 text-center">
                  {!isPlaying ? (
                    <>
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-background shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                        aria-label="Play Demo Video"
                      >
                        <Play className="h-6 w-6 fill-background translate-x-0.5" />
                      </button>
                      <span className="mt-4 font-heading text-xs font-bold text-white tracking-wider uppercase">
                        Watch Product Development Demo
                      </span>
                      <span className="text-[10px] text-muted mt-1 max-w-[280px]">
                        See how our team writes, compiles, and optimizes WebAssembly systems in real-time.
                      </span>
                    </>
                  ) : (
                    <div className="w-full text-left font-mono text-[11px] space-y-2 text-gold">
                      <div className="flex items-center justify-between text-white font-bold pb-2 border-b border-gold/15">
                        <span className="flex items-center gap-1.5"><Terminal className="h-3.5 w-3.5" /> Compiler CLI Console</span>
                        <button 
                          onClick={() => setIsPlaying(false)}
                          className="text-xs text-muted hover:text-white"
                        >
                          Reset
                        </button>
                      </div>
                      <div className="text-muted">Target: Wasm32 Server Node</div>
                      <div>Status: <span className="text-white font-semibold">{compilerStatus}</span></div>
                      
                      {compilerStatus === "Idle" ? (
                        <button
                          onClick={runCompilerSim}
                          className="mt-4 rounded-lg bg-gold/10 border border-gold/30 px-3 py-1.5 text-xs text-gold hover:bg-gold-gradient hover:text-background transition-all font-semibold font-sans"
                        >
                          Execute Compiler Build Run
                        </button>
                      ) : (
                        <div className="h-9 flex items-center text-emerald-400">
                          {compilerStatus === "Compiling..." && "⏳ Compiling AST parsing..."}
                          {compilerStatus === "Linking..." && "🔗 Linking binary targets..."}
                          {compilerStatus.startsWith("Success") && "✅ Code execution build completed!"}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "credentials" && (
            <motion.div
              key="credentials"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-gold/80 mb-1">
                Verified Credentials & Awards
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {/* Cert 1 */}
                <div className="rounded-2xl border border-gold/15 bg-background/45 p-4 flex gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-snug">Hackathon Winner</h5>
                    <p className="text-[10px] text-muted mt-0.5 leading-normal">
                      Usman Wajid achieved 1st Place at the National Tech Summit Hackathon.
                    </p>
                  </div>
                </div>

                {/* Cert 2 */}
                <div className="rounded-2xl border border-gold/15 bg-background/45 p-4 flex gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-snug">Professional Cloud Architect</h5>
                    <p className="text-[10px] text-muted mt-0.5 leading-normal">
                      Fahad Bilal is a Google Cloud Certified architect.
                    </p>
                  </div>
                </div>

                {/* Cert 3 */}
                <div className="rounded-2xl border border-gold/15 bg-background/45 p-4 flex gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-snug">Certified AWS Solutions Dev</h5>
                    <p className="text-[10px] text-muted mt-0.5 leading-normal">
                      Ahmad Masood holds active Amazon Web Services certifications.
                    </p>
                  </div>
                </div>

                {/* Cert 4 */}
                <div className="rounded-2xl border border-gold/15 bg-background/45 p-4 flex gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-snug">Global Vital Spark LLC</h5>
                    <p className="text-[10px] text-muted mt-0.5 leading-normal">
                      Austin, TX registered corporation ensuring complete contract compliance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
