"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Bot,
  Smartphone,
  Cloud,
  PenTool,
  ShieldCheck,
  Rocket,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Users,
  DollarSign,
  Info,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

// Types
type ProjectType = {
  id: string;
  title: string;
  icon: any;
  baseCost: number;
  baseDurationWeeks: number;
  team: string[];
  features: string[];
};

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "web",
    title: "Custom Software & Web Apps",
    icon: Code2,
    baseCost: 5200,
    baseDurationWeeks: 6,
    team: ["1x Full-Stack Engineer", "0.5x UI/UX Designer"],
    features: ["User Authentication & Roles", "Stripe Billing & Subscriptions", "Interactive Charts/Dashboards", "External API Integrations", "Admin Management Panel", "Real-Time Notifications"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    baseCost: 7800,
    baseDurationWeeks: 8,
    team: ["1x AI & ML Engineer", "0.5x Full-Stack Engineer"],
    features: ["Custom Model Training", "Computer Vision / Image Detection", "Natural Language Processing (NLP)", "Predictive Analytics Models", "Data Ingestion & ML Pipelines", "FastAPI Service Wrapper"],
  },
  {
    id: "gen-ai",
    title: "Generative AI & Agentic AI",
    icon: Bot,
    baseCost: 6400,
    baseDurationWeeks: 6,
    team: ["1x AI & ML Engineer", "0.5x Full-Stack Engineer", "0.25x DevOps Engineer"],
    features: ["LLM Integration (GPT/Claude)", "RAG System (Vector DB)", "Autonomous AI Agents", "n8n/Zapier Workflow Automation", "AI Chatbot / Support Assistant", "Guardrails & Hallucination Audits"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    baseCost: 5800,
    baseDurationWeeks: 8,
    team: ["1x Mobile Developer", "0.5x UI/UX Designer"],
    features: ["Cross-Platform (iOS & Android)", "Offline Mode & Local Storage", "Push Notification Campaigns", "App Store & Google Play Launch", "Camera & Location Integrations", "In-App Purchases"],
  },
  {
    id: "devops",
    title: "Cloud & DevOps Operations",
    icon: Cloud,
    baseCost: 4200,
    baseDurationWeeks: 4,
    team: ["1x Cloud & DevOps Engineer"],
    features: ["AWS/GCP Setup & Audit", "Terraform Infrastructure as Code", "Docker & Kubernetes setup", "GitHub Actions CI/CD Pipelines", "Monitoring & Alerts Setup", "Cloud Cost Optimization Plan"],
  },
  {
    id: "design",
    title: "UI/UX Design & Prototyping",
    icon: PenTool,
    baseCost: 2800,
    baseDurationWeeks: 4,
    team: ["1x UI/UX Designer"],
    features: ["Interactive Figma Prototypes", "Custom Design System & Tokens", "In-Depth User Research & Audits", "Information Architecture Maps", "Development Handoff Assets", "Micro-interaction Mockups"],
  },
  {
    id: "qa",
    title: "QA, Automation & Testing",
    icon: ShieldCheck,
    baseCost: 2500,
    baseDurationWeeks: 4,
    team: ["1x QA & Test Engineer"],
    features: ["End-to-End Playwright Suite", "Jest & Cypress Component Tests", "API Testing (Postman/Newman)", "Load & Stress Performance Tests", "Manual Regression Checklists", "CI/CD Integration Hooks"],
  },
  {
    id: "mvp",
    title: "Product Strategy & Rapid MVP",
    icon: Rocket,
    baseCost: 3400,
    baseDurationWeeks: 4,
    team: ["1x Full-Stack Engineer", "0.5x UI/UX Designer"],
    features: ["Discovery Scoping Workshop", "Ruthless Feature Prioritization", "Interactive Figma Layouts", "Functional Phase 1 Web App", "User Analytics Integration", "Ready-to-Pitch Mockup Demo"],
  },
];

const COMPLIANCE_OPTIONS = [
  { id: "none", title: "Standard Security", description: "SSL, encrypted DB, standard firewall", costMultiplier: 1.0, addedTeam: [] },
  { id: "soc2", title: "SOC2 / GDPR Ready", description: "Audit trail logs, automated backups, IAM roles", costMultiplier: 1.15, addedTeam: ["0.25x Cloud & DevOps Engineer"] },
  { id: "hipaa", title: "HIPAA Compliant", description: "For Healthcare apps. Fully encrypted, BAA ready", costMultiplier: 1.25, addedTeam: ["0.25x Cloud & DevOps Engineer", "0.25x QA & Test Engineer"] },
];

const TIMELINE_OPTIONS = [
  { id: "standard", title: "Standard Schedule", label: "Recommended pacing", costMultiplier: 1.0, durationMultiplier: 1.0, headcountMultiplier: 1.0 },
  { id: "fast", title: "Accelerated (Sprint)", label: "Double team speed (adds +20%)", costMultiplier: 1.2, durationMultiplier: 0.7, headcountMultiplier: 1.5 },
];

export function ProjectPlanner() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCompliance, setSelectedCompliance] = useState<string>("none");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  // Contact Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentProjectType = useMemo(() => {
    return PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  }, [selectedType]);

  // Handle project type change (reset features)
  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId);
    setSelectedFeatures([]);
  };

  // Toggle Features
  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  // Calculations
  const calculations = useMemo(() => {
    const compliance = COMPLIANCE_OPTIONS.find((c) => c.id === selectedCompliance) || COMPLIANCE_OPTIONS[0];
    const timeline = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[0];

    // Base Math
    const baseCost = currentProjectType.baseCost;
    const baseWeeks = currentProjectType.baseDurationWeeks;

    // Feature addition cost ($600 per extra feature after the first 2)
    const featureExtraCount = Math.max(0, selectedFeatures.length - 2);
    const featureCostAddition = featureExtraCount * 600;

    // Apply multipliers
    const rawCost = (baseCost + featureCostAddition) * compliance.costMultiplier * timeline.costMultiplier;
    const rawWeeks = baseWeeks * timeline.durationMultiplier;

    // Estimated range
    const minCost = Math.round(rawCost * 0.9);
    const maxCost = Math.round(rawCost * 1.1);
    const minWeeks = Math.max(3, Math.round(rawWeeks));
    const maxWeeks = Math.round(rawWeeks * 1.25);

    // Build Team Layout
    let finalTeam = [...currentProjectType.team];
    compliance.addedTeam.forEach((t) => {
      // Simple merge or push logic
      finalTeam.push(t);
    });

    if (timeline.headcountMultiplier > 1) {
      finalTeam = finalTeam.map((member) => {
        // e.g. "1x Full-Stack Engineer" -> double
        const parts = member.split("x ");
        const headcount = parseFloat(parts[0]) * timeline.headcountMultiplier;
        return `${headcount}x ${parts[1]}`;
      });
    }

    return {
      costRange: `$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}`,
      weeksRange: `${minWeeks} - ${maxWeeks} weeks`,
      team: finalTeam,
    };
  }, [currentProjectType, selectedFeatures, selectedCompliance, selectedTimeline]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);

    const data = {
      name,
      email,
      projectType: currentProjectType.title,
      features: selectedFeatures,
      security: COMPLIANCE_OPTIONS.find((c) => c.id === selectedCompliance)?.title,
      timeline: TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline)?.title,
      estimatedCost: calculations.costRange,
      estimatedTimeline: calculations.weeksRange,
      notes,
    };

    try {
      // Simulate API submit
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      {/* Left side: Steps Wizard */}
      <div className="card-surface p-6 md:p-8">
        {/* Step Indicator */}
        <div className="mb-8 flex items-center justify-between border-b border-gold/15 pb-5">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <span
                key={s}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  s === step ? "bg-gold-gradient w-12" : s < step ? "bg-gold/45" : "bg-card border border-gold/25"
                }`}
              />
            ))}
          </div>
          <span className="font-heading text-xs font-semibold text-gold uppercase tracking-wider">
            Step {step} of 4
          </span>
        </div>

        {/* Wizard Content */}
        <div className="min-h-[320px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Select Project Type</h3>
                  <p className="mt-1 text-sm text-muted">What is the primary focus of your application?</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {PROJECT_TYPES.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => handleTypeChange(type.id)}
                        className={`flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-gold bg-gold/5 shadow-[0_0_15px_rgba(201,168,76,0.15)] text-white"
                            : "border-gold/20 bg-card/40 text-muted hover:border-gold/50 hover:bg-card/75 hover:text-white"
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                            isSelected ? "border-gold bg-gold-gradient text-background" : "border-gold/20 bg-card text-gold"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <h4 className="font-heading text-sm font-semibold">{type.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed opacity-85">
                            From {type.baseDurationWeeks} weeks execution
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Choose Key Features</h3>
                  <p className="mt-1 text-sm text-muted">Select the building blocks you need us to engineer.</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {currentProjectType.features.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature);
                    return (
                      <button
                        key={feature}
                        onClick={() => toggleFeature(feature)}
                        className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-gold bg-gold/5 text-white"
                            : "border-gold/20 bg-card/40 text-muted hover:border-gold/45 hover:text-white"
                        }`}
                      >
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isSelected ? "border-gold bg-gold-gradient text-background" : "border-gold/25"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3" />}
                        </span>
                        <span className="text-sm font-medium">{feature}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-gold/15 bg-card/25 p-4 flex gap-3 text-xs text-muted">
                  <Info className="h-4.5 w-4.5 shrink-0 text-gold" />
                  <p className="leading-relaxed">
                    Estimates include 2 initial key features. Adding more features increases engineering capacity and shifts estimated sprint cost.
                  </p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Compliance & Security Level</h3>
                  <p className="mt-1 text-sm text-muted">What are your governance or regulatory requirements?</p>
                </div>

                <div className="space-y-3">
                  {COMPLIANCE_OPTIONS.map((opt) => {
                    const isSelected = selectedCompliance === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedCompliance(opt.id)}
                        className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-gold bg-gold/5 text-white"
                            : "border-gold/20 bg-card/40 text-muted hover:border-gold/45 hover:text-white"
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isSelected ? "border-gold bg-gold text-background" : "border-gold/25"
                          }`}
                        >
                          {isSelected && <span className="h-2 w-2 rounded-full bg-background" />}
                        </span>
                        <div>
                          <h4 className="font-heading text-sm font-semibold">{opt.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed opacity-85">{opt.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {!isSubmitted ? (
                  <>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">Timeline & Delivery Target</h3>
                      <p className="mt-1 text-sm text-muted">Select how fast your product needs to hit production.</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {TIMELINE_OPTIONS.map((opt) => {
                        const isSelected = selectedTimeline === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setSelectedTimeline(opt.id)}
                            className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all duration-300 ${
                              isSelected
                                ? "border-gold bg-gold/5 text-white"
                                : "border-gold/20 bg-card/40 text-muted hover:border-gold/45 hover:text-white"
                            }`}
                          >
                            <span className="font-heading text-sm font-semibold">{opt.title}</span>
                            <span className="text-xs opacity-80">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <form onSubmit={handleSubmit} className="border-t border-gold/15 pt-5 space-y-4">
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-white">Receive Your Structured Scope</h4>
                        <p className="text-xs text-muted mt-0.5">Submit your details to request a kickoff call pre-loaded with these configurations.</p>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="rounded-xl border border-gold/25 bg-background px-4 py-2.5 text-sm text-white placeholder-muted focus:border-gold focus:outline-none"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="rounded-xl border border-gold/25 bg-background px-4 py-2.5 text-sm text-white placeholder-muted focus:border-gold focus:outline-none"
                        />
                      </div>
                      <textarea
                        placeholder="Additional notes about your project (optional)"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full rounded-xl border border-gold/25 bg-background px-4 py-2.5 text-sm text-white placeholder-muted focus:border-gold focus:outline-none resize-none"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-xl bg-gold-gradient py-3 font-heading text-sm font-semibold text-background transition-transform duration-150 hover:scale-[1.01] disabled:opacity-50"
                      >
                        {isSubmitting ? "Generating Scope..." : "Request Scope & Timelines"}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 border border-gold text-gold mb-6 animate-pulse">
                      <Check className="h-8 w-8" />
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">Scope Logged Successfully!</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      Thanks {name}. We've received your planner configuration ({currentProjectType.title}). A Valor Devs specialist will review it and reach out to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {!isSubmitted && (
          <div className="mt-8 flex justify-between border-t border-gold/15 pt-5">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-white disabled:pointer-events-none disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => Math.min(4, s + 1))}
                className="flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/45 hover:border-gold hover:bg-gold/15 px-5 py-2 text-sm font-semibold text-gold transition-all duration-300"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        )}
      </div>

      {/* Right side: Dynamic Estimate Summary */}
      <div className="h-fit rounded-2xl border border-gold bg-card/45 p-6 md:p-8 lg:sticky lg:top-24">
        <h3 className="font-heading text-lg font-bold text-white">Live Spec Summary</h3>
        <p className="text-xs text-muted mt-0.5">Calculated using Valor Devs operational models</p>

        <div className="mt-6 space-y-6">
          {/* Cost Estimate */}
          <div className="flex gap-4 items-start">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold bg-gold/5 text-gold">
              <DollarSign className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">Estimated Budget</div>
              <div className="mt-1 font-heading text-2xl font-bold text-gradient-gold">
                {calculations.costRange}
              </div>
              <div className="text-[0.65rem] text-muted leading-relaxed mt-0.5">
                Calculated based on standard contractor market rates with AI efficiencies.
              </div>
            </div>
          </div>

          {/* Timeline Estimate */}
          <div className="flex gap-4 items-start border-t border-gold/15 pt-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold bg-gold/5 text-gold">
              <Calendar className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">Estimated Timeline</div>
              <div className="mt-1 font-heading text-lg font-bold text-white">
                {calculations.weeksRange}
              </div>
              <div className="text-[0.65rem] text-muted leading-relaxed mt-0.5">
                From kickoff to production handoff, assuming weekly deliverables.
              </div>
            </div>
          </div>

          {/* Team Composition */}
          <div className="flex gap-4 items-start border-t border-gold/15 pt-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold bg-gold/5 text-gold">
              <Users className="h-5 w-5" />
            </span>
            <div className="w-full">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">Allocated Team</div>
              <ul className="mt-3 space-y-2.5">
                {calculations.team.map((member, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Selected Features list */}
          {selectedFeatures.length > 0 && (
            <div className="border-t border-gold/15 pt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5">Selected Features</div>
              <div className="flex flex-wrap gap-1">
                {selectedFeatures.map((f) => (
                  <span key={f} className="rounded-md border border-gold/20 bg-card px-2.5 py-1 text-[0.65rem] font-medium text-muted">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick SLA info */}
          <div className="border-t border-gold/15 pt-5 flex items-center gap-2.5 text-xs text-muted">
            <Clock className="h-4.5 w-4.5 text-gold shrink-0" />
            <span>Includes 24/7 client response SLAs & 7-Day Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
