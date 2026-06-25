"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cpu, HardDrive, CpuIcon, Layers, Settings, HelpCircle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type TechItem = {
  name: string;
  category: "frontend" | "backend" | "ai" | "cloud";
  icon: any;
  why: string;
  usage: string;
};

const TECH_ITEMS: TechItem[] = [
  // Frontend
  { name: "Next.js", category: "frontend", icon: Layers, why: "Server-side rendering, static exports, and hybrid compilation for high Core Web Vitals.", usage: "Our default structure for high-performance SaaS platforms." },
  { name: "React", category: "frontend", icon: Code, why: "Declarative component patterns that maximize UI reuse and team sprint speed.", usage: "Rich dashboard UIs, control portals, and SaaS dashboards." },
  { name: "TypeScript", category: "frontend", icon: CheckCircle, why: "Strict compile-time type checking to capture interface bugs before production.", usage: "Applied across 100% of our codebases for robust handoffs." },
  { name: "Tailwind CSS", category: "frontend", icon: Layers, why: "Utility-first CSS framework allowing rapid aesthetic iteration and clean tokens.", usage: "Fully responsive components (320px to 1920px+)." },

  // Backend
  { name: "Node.js", category: "backend", icon: Database, why: "Asynchronous, event-driven runtime ideal for real-time WebSockets and fast API routing.", usage: "Microservices, backend APIs, and real-time reconciliation systems." },
  { name: "FastAPI", category: "backend", icon: Settings, why: "High performance Python framework used to wrap and serve ML models with auto docs.", usage: "The bridge between our AI pipelines and frontend applications." },
  { name: "PostgreSQL", category: "backend", icon: HardDrive, why: "Industrial-grade relational database with robust ACID compliance and vector storage (pgvector).", usage: "Structured user data, financial logs, and transactional storage." },
  { name: "MongoDB", category: "backend", icon: Database, why: "Flexible document-based storage for rapid product schema prototyping and JSON payloads.", usage: "Content management, user activity logs, and unstructured caching." },

  // AI & ML
  { name: "LangChain & LlamaIndex", category: "ai", icon: Cpu, why: "Advanced orchestration libraries for connecting LLMs to custom vector memory.", usage: "Retrieval-Augmented Generation (RAG) and Multi-Agent structures." },
  { name: "PyTorch & TensorFlow", category: "ai", icon: CpuIcon, why: "Leading tensor computation engines for training custom models and fine-tuning weights.", usage: "Image classification, patient triage models, and predictive models." },
  { name: "OpenAI & Claude APIs", category: "ai", icon: Cpu, why: "State-of-the-art foundation models leveraged for advanced reasoning, summary, and translation.", usage: "Core reasoning layers for customer support chatbots and agents." },
  { name: "n8n & Zapier", category: "ai", icon: Settings, why: "Workflow automation tools to wire systems together with low-maintenance overhead.", usage: "Lead enrichment, operational triggers, and cross-platform alerts." },

  // Cloud & DevOps
  { name: "AWS & GCP", category: "cloud", icon: HardDrive, why: "Secure, reliable, global cloud infrastructure with deep SOC2 and HIPAA compliance options.", usage: "Database hosting, container registries, and serverless compute." },
  { name: "Terraform", category: "cloud", icon: Settings, why: "Infrastructure as Code (IaC) ensuring environments are reproducible and tracked in Git.", usage: "Spinning up staging and production environments identically." },
  { name: "Kubernetes & Docker", category: "cloud", icon: Layers, why: "Containerization and orchestration to ensure applications run identically across developer systems and scale in production.", usage: "Handling high-volume traffic spikes and microservice isolation." },
  { name: "GitHub Actions", category: "cloud", icon: Code, why: "Automated test runner and deployment pipelines (CI/CD) for risk-free daily releases.", usage: "Building, linting, testing, and deploying on every git push." },
];

export function TechRadar() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "backend" | "ai" | "cloud">("all");

  const filteredItems = TECH_ITEMS.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  const categories = [
    { id: "all" as const, label: "All Stack" },
    { id: "frontend" as const, label: "Frontend" },
    { id: "backend" as const, label: "Backend & DB" },
    { id: "ai" as const, label: "AI & ML" },
    { id: "cloud" as const, label: "Cloud & DevOps" },
  ];

  return (
    <div className="space-y-10" id="tech-radar">
      {/* Category selector */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border",
              activeCategory === cat.id
                ? "bg-gold text-background border-gold shadow-[0_0_12px_rgba(201,168,76,0.2)]"
                : "bg-card border-gold/15 text-muted hover:border-gold/45 hover:text-white"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of tech */}
      <motion.div
        layout
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={item.name}
                className="flex flex-col h-full rounded-2xl border border-gold bg-card/45 p-6 hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold bg-gold/10 text-gold">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <h4 className="font-heading text-base font-bold text-white">
                    {item.name}
                  </h4>
                </div>
                <div className="mt-5 space-y-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-wider text-gold">Why We Choose It</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.why}</p>
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-wider text-muted">Primary Use Case</div>
                    <p className="mt-1 text-xs leading-relaxed text-white/80">{item.usage}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
