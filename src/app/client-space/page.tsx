"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import {
  KanbanSquare,
  Activity,
  MessageSquare,
  FileLock2,
  CheckCircle2,
  ExternalLink,
  Lock,
  Download,
  AlertCircle,
  FileCheck,
  Check,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { heroBackgrounds } from "@/lib/site";
import { cn } from "@/lib/utils";

// Mock Data
const SPRINT_TASKS = [
  { id: "VAL-101", title: "Design Figma High-Fi Wireframes", status: "Done", priority: "High", assignee: "UI/UX Designer", column: "Completed" },
  { id: "VAL-102", title: "Setup Next.js Boilerplate & CI/CD Pipeline", status: "Done", priority: "High", assignee: "Full-Stack Engineer", column: "Completed" },
  { id: "VAL-103", title: "Integrate Stripe Payment & Billing Portal", status: "In Progress", priority: "High", assignee: "Full-Stack Engineer", column: "In Progress" },
  { id: "VAL-104", title: "Build Vector Embedding Pipeline (RAG)", status: "In Progress", priority: "Medium", assignee: "AI & ML Engineer", column: "In Progress" },
  { id: "VAL-105", title: "Provision AWS RDS & Elasticache (Redis)", status: "Review", priority: "Medium", assignee: "Cloud & DevOps Engineer", column: "QA & Review" },
  { id: "VAL-106", title: "Configure Auto-Scaling & EKS Cluster", status: "Backlog", priority: "Low", assignee: "Cloud & DevOps Engineer", column: "Backlog" },
  { id: "VAL-107", title: "Implement Playwright E2E Auth Tests", status: "Backlog", priority: "Low", assignee: "QA & Test Engineer", column: "Backlog" },
];

const DEPLOYMENTS = [
  { id: "dep_9a8c7b6", branch: "main", commit: "feat: add stripe webhook events", status: "Ready", time: "10 mins ago", url: "https://valor-stripe-hook-preview.valordevs.app" },
  { id: "dep_f5e4d3c", branch: "main", commit: "feat: configure rag pipeline embeddings", status: "Ready", time: "2 hours ago", url: "https://valor-rag-search-preview.valordevs.app" },
  { id: "dep_2b1a0z9", branch: "design-tokens", commit: "style: custom shadows & gold gradient updates", status: "Ready", time: "1 day ago", url: "https://valor-design-system-preview.valordevs.app" },
];

const SLACK_MESSAGES = [
  {
    sender: "Alex (Full-Stack)",
    avatar: "A",
    time: "9:24 AM",
    channel: "#project-sprint-updates",
    message: "Morning team! I have successfully integrated the Stripe Billing API. Deployed the webhook events. The preview build is ready at: https://valor-stripe-hook-preview.valordevs.app\n\nI recorded a Loom video explaining the workflow. Let me know what you think!",
    loom: "Loom Walkthrough: Stripe Checkout Workflow (3:42)"
  },
  {
    sender: "Elena (UI/UX)",
    avatar: "E",
    time: "Yesterday, 3:15 PM",
    channel: "#project-design",
    message: "Hey! Added the interactive shadows and dark-theme gold highlights. You can check the preview deployment directly. I've synced the files with Storybook.",
    loom: "Figma Link: High-Fidelity Specs v1.1"
  },
  {
    sender: "Farhan (AI/ML)",
    avatar: "F",
    time: "Yesterday, 11:05 AM",
    channel: "#project-ai-rag",
    message: "Completed indexing the product document corpus (14k PDFs) using semantic chunking. Precision is currently at 94% on our evaluation dataset. Let's run a feedback session tomorrow.",
    loom: "RAG Evaluation Metrics Dashboard"
  }
];

const DOCUMENTS = [
  { name: "Mutual NDA (Non-Disclosure Agreement)", size: "142 KB", desc: "Pre-signed standard unilateral/bilateral NDA to protect intellectual property.", type: "NDA" },
  { name: "Master Services Agreement (MSA)", size: "386 KB", desc: "General terms covering payment rails, warranty, liability, and Austin TX arbitration rules.", type: "MSA" },
  { name: "Statement of Work Template (SOW)", size: "215 KB", desc: "Defines deliverables, weekly sprint schedules, and milestone payments.", type: "SOW" },
];

export default function ClientSpacePage() {
  const [activeTab, setActiveTab] = useState<"sprint" | "deploys" | "slack" | "vault">("sprint");
  const [boardTasks, setBoardTasks] = useState(SPRINT_TASKS);

  const moveTask = (taskId: string, newColumn: string) => {
    setBoardTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: newColumn } : t))
    );
  };

  const columns = ["Backlog", "In Progress", "QA & Review", "Completed"];

  return (
    <>
      <PageHero
        eyebrow="Operations Simulator"
        image={heroBackgrounds.portfolio}
        crumbs={[{ label: "Client Space" }]}
        title={<>Experience how we <span className="text-gradient-gold">deliver projects</span></>}
        subtitle="Step inside a live simulation of a Valor Devs client environment. Monitor active sprints, click preview builds, read developer updates, and view standard legal agreements."
      />

      <Section>
        <div className="container">
          {/* Dashboard Frame */}
          <div className="rounded-3xl border border-gold/30 bg-card/45 shadow-card overflow-hidden">
            {/* Top Toolbar */}
            <div className="flex flex-col border-b border-gold/15 bg-surface/80 px-6 py-4 md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-heading text-sm font-semibold text-white tracking-wide">
                  VALOR DEVS PORTAL · DEMO_SPACE
                </span>
              </div>
              <div className="flex flex-wrap gap-1 rounded-xl bg-background/60 p-1 border border-gold/10">
                {[
                  { id: "sprint", label: "Sprint Board", icon: KanbanSquare },
                  { id: "deploys", label: "Live Deploys", icon: Activity },
                  { id: "slack", label: "Slack Comms", icon: MessageSquare },
                  { id: "vault", label: "Agreements Vault", icon: FileLock2 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all",
                        isActive
                          ? "bg-gold text-background shadow-sm"
                          : "text-muted hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 min-h-[460px]">
              {/* Sprint Board */}
              {activeTab === "sprint" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white">Active Sprint (Week 2)</h3>
                      <p className="text-xs text-muted mt-0.5">Click a task's status indicator to transition its column status.</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4 mt-6">
                    {columns.map((col) => {
                      const colTasks = boardTasks.filter((t) => t.column === col);
                      return (
                        <div key={col} className="rounded-xl bg-background/40 p-4 border border-gold/5 flex flex-col h-fit">
                          <div className="flex items-center justify-between mb-4 border-b border-gold/10 pb-2">
                            <span className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                              {col}
                            </span>
                            <span className="rounded-md bg-gold/10 px-2 py-0.5 text-[0.65rem] font-bold text-gold">
                              {colTasks.length}
                            </span>
                          </div>

                          <div className="space-y-3 min-h-[150px]">
                            {colTasks.map((task) => (
                              <div key={task.id} className="rounded-lg border border-gold/10 bg-card p-3.5 shadow-sm hover:border-gold/25 transition-all">
                                <div className="flex justify-between items-center gap-2">
                                  <span className="text-[0.65rem] font-mono text-gold-light font-bold">
                                    {task.id}
                                  </span>
                                  <span className={cn(
                                    "px-1.5 py-0.5 rounded text-[0.6rem] font-extrabold uppercase",
                                    task.priority === "High" ? "bg-rose-500/10 text-rose-400" : "bg-blue-500/10 text-blue-400"
                                  )}>
                                    {task.priority}
                                  </span>
                                </div>
                                <h4 className="mt-2 text-xs font-semibold text-white leading-normal">
                                  {task.title}
                                </h4>
                                <div className="mt-3 flex items-center justify-between gap-2 border-t border-gold/5 pt-2.5">
                                  <span className="text-[0.65rem] text-muted">
                                    {task.assignee}
                                  </span>
                                  <select
                                    value={task.column}
                                    onChange={(e) => moveTask(task.id, e.target.value)}
                                    className="bg-background border border-gold/20 text-[0.65rem] rounded px-1.5 py-0.5 text-muted focus:outline-none focus:border-gold cursor-pointer"
                                  >
                                    {columns.map((c) => (
                                      <option key={c} value={c}>{c}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Live Deploys */}
              {activeTab === "deploys" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">CI/CD Pipeline & Deployments</h3>
                    <p className="text-xs text-muted mt-0.5">Real-time preview links compiled directly from GitHub commits.</p>
                  </div>

                  <div className="space-y-3.5">
                    {DEPLOYMENTS.map((dep) => (
                      <div key={dep.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-gold/15 bg-card/30 p-4 hover:border-gold/30 transition-all">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/25">
                            <GitBranch className="h-4 w-4" />
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold text-white font-mono bg-background px-2 py-0.5 rounded border border-gold/10">
                                {dep.id}
                              </span>
                              <span className="text-xs text-gold font-medium">
                                branch: {dep.branch}
                              </span>
                              <span className="flex items-center gap-1.5 text-[0.65rem] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                                <CheckCircle2 className="h-3 w-3" /> Ready
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-white font-medium">{dep.commit}</p>
                            <span className="text-[0.65rem] text-muted">Deployed {dep.time}</span>
                          </div>
                        </div>
                        <a
                          href={dep.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-background hover:bg-gold-light px-4 py-2 text-xs font-bold shadow-sm transition-all md:w-auto"
                        >
                          Visit Preview <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Slack Comms */}
              {activeTab === "slack" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">Daily Communication Logs</h3>
                    <p className="text-xs text-muted mt-0.5">Asynchronous updates delivered daily on dedicated project channels.</p>
                  </div>

                  <div className="space-y-4">
                    {SLACK_MESSAGES.map((msg, i) => (
                      <div key={i} className="rounded-xl border border-gold/10 bg-card/30 p-5">
                        <div className="flex items-center justify-between border-b border-gold/5 pb-2.5 mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold font-heading text-sm font-semibold border border-gold/30">
                              {msg.avatar}
                            </span>
                            <div>
                              <span className="text-xs font-bold text-white">{msg.sender}</span>
                              <span className="ml-2 text-[0.65rem] text-muted">{msg.time}</span>
                            </div>
                          </div>
                          <span className="font-mono text-[0.65rem] text-gold-light bg-gold/5 border border-gold/10 px-2 py-0.5 rounded">
                            {msg.channel}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-muted whitespace-pre-line">
                          {msg.message}
                        </p>
                        <div className="mt-4 flex items-center gap-2 rounded-lg bg-background p-2.5 border border-gold/10 text-xs font-semibold text-gold">
                          <Check className="h-3.5 w-3.5 shrink-0" />
                          <span>{msg.loom}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Agreements Vault */}
              {activeTab === "vault" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">US Compliance Agreements Vault</h3>
                    <p className="text-xs text-muted mt-0.5">View and review our standardized contracts to speed up engagement setup.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {DOCUMENTS.map((doc) => (
                      <div key={doc.name} className="rounded-xl border border-gold/15 bg-card/45 p-5 flex flex-col justify-between hover:border-gold/30 transition-all">
                        <div>
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 border border-gold/25 text-gold mb-4">
                            <FileCheck className="h-5 w-5" />
                          </span>
                          <h4 className="font-heading text-sm font-semibold text-white leading-snug">
                            {doc.name}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-muted">
                            {doc.desc}
                          </p>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-gold/10 pt-4">
                          <span className="text-[0.65rem] text-muted font-semibold">{doc.size}</span>
                          <button className="flex items-center gap-1 text-[0.65rem] font-bold text-gold hover:underline">
                            <Lock className="h-3 w-3" /> Sample PDF
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 flex gap-3 text-xs text-muted">
                    <AlertCircle className="h-5 w-5 shrink-0 text-rose-400" />
                    <p className="leading-relaxed">
                      All contracts governed under **Global Vital Spark LLC** registration laws in Austin, TX. Custom NDA submissions accepted during project setup phase.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
