import {
  Code2,
  BrainCircuit,
  Bot,
  Smartphone,
  Cloud,
  PenTool,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  valueProp: string;
  /** "What we do" sub-services */
  capabilities: { title: string; description: string }[];
  techStack: string[];
  /** "Who it's for" personas */
  personas: { title: string; description: string }[];
  /** Per-service delivery process */
  process: { step: string; title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: Code2,
    title: "Custom Software Development",
    short: "Web apps, enterprise platforms, SaaS, portals, and dashboards built to scale.",
    valueProp:
      "Production-grade software engineered around your business — not forced into someone else's template.",
    capabilities: [
      { title: "Web Applications", description: "Fast, accessible apps with React & Next.js front-ends and typed APIs." },
      { title: "SaaS Platforms", description: "Multi-tenant architecture, billing, role-based access, and admin tooling." },
      { title: "Enterprise Systems", description: "Internal platforms, ERPs, and workflow tools that replace spreadsheets." },
      { title: "Portals & Dashboards", description: "Customer and ops dashboards with real-time data and clear UX." },
      { title: "API Engineering", description: "REST and GraphQL APIs, integrations, and third-party data pipelines." },
      { title: "Modernization", description: "Re-platforming legacy systems without breaking the business." },
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
    personas: [
      { title: "Funded Startups", description: "You need a robust v1 that won't be thrown away after product-market fit." },
      { title: "Scaling SaaS", description: "Your current build can't keep up with feature velocity or load." },
      { title: "Enterprises", description: "You're replacing brittle internal tools with a system people actually use." },
    ],
    process: [
      { step: "01", title: "Discovery", description: "We map requirements, users, and constraints into a clear scope." },
      { step: "02", title: "Architecture", description: "We choose the stack, data model, and infrastructure for your scale." },
      { step: "03", title: "Build", description: "Iterative sprints with working software shipped every week." },
      { step: "04", title: "Harden", description: "Testing, performance tuning, and security before launch." },
      { step: "05", title: "Deliver & Support", description: "Deploy, hand over, and provide ongoing maintenance." },
    ],
  },
  {
    slug: "ai-machine-learning",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    short: "Model training, computer vision, NLP, and predictive analytics that drive decisions.",
    valueProp:
      "Turn your data into models that forecast, classify, and automate — measured against real business outcomes.",
    capabilities: [
      { title: "Model Training & Fine-tuning", description: "Custom models trained on your domain data for accuracy that matters." },
      { title: "Computer Vision", description: "Detection, classification, OCR, and quality inspection pipelines." },
      { title: "Natural Language Processing", description: "Classification, entity extraction, sentiment, and summarization." },
      { title: "Predictive Analytics", description: "Forecasting demand, churn, and risk with explainable models." },
      { title: "ML Pipelines", description: "Reproducible training, evaluation, and deployment workflows." },
      { title: "MLOps", description: "Monitoring, drift detection, and retraining in production." },
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "MLflow", "FastAPI"],
    personas: [
      { title: "Data-Rich Teams", description: "You're sitting on data that should be predicting outcomes, not just reporting them." },
      { title: "Operations Leaders", description: "You want to automate inspection, forecasting, or triage at scale." },
      { title: "Product Teams", description: "You need an intelligent feature that genuinely differentiates the product." },
    ],
    process: [
      { step: "01", title: "Data Audit", description: "We assess data quality, volume, and feasibility before promising results." },
      { step: "02", title: "Baseline", description: "We build a baseline model to validate the approach quickly." },
      { step: "03", title: "Iterate", description: "Feature engineering and tuning to hit target metrics." },
      { step: "04", title: "Deploy", description: "Serve the model behind a stable, monitored API." },
      { step: "05", title: "Monitor", description: "Track performance and retrain as the world changes." },
    ],
  },
  {
    slug: "generative-ai-agentic-ai",
    icon: Bot,
    title: "Generative AI & Agentic AI",
    short: "LLM integration, RAG systems, AI agents, and workflow automation.",
    valueProp:
      "Ship AI features that are grounded, safe, and actually useful — from chatbots to autonomous agents.",
    capabilities: [
      { title: "LLM Integration", description: "GPT-4, Claude, and Gemini wired into your product and workflows." },
      { title: "RAG Systems", description: "Retrieval-augmented generation grounded in your own knowledge base." },
      { title: "AI Agents", description: "Goal-driven agents that use tools, call APIs, and complete tasks." },
      { title: "AI Chatbots", description: "Support and sales assistants that know your business." },
      { title: "Workflow Automation", description: "Connect systems and automate ops with n8n and Zapier." },
      { title: "Evaluation & Guardrails", description: "Testing, prompt management, and safety rails for reliability." },
    ],
    techStack: ["LangChain", "LlamaIndex", "OpenAI API", "Claude API", "Pinecone", "n8n", "Zapier", "Vercel AI SDK"],
    personas: [
      { title: "Support-Heavy Companies", description: "You want to deflect tickets with an assistant that answers correctly." },
      { title: "Knowledge Businesses", description: "Your team needs instant answers from scattered internal documents." },
      { title: "Automation Seekers", description: "You have repetitive, multi-step processes ready to be delegated to agents." },
    ],
    process: [
      { step: "01", title: "Use-Case Scoping", description: "We pick a use case where AI is reliable and high-value." },
      { step: "02", title: "Knowledge & Tools", description: "We index your data and define the tools the agent can use." },
      { step: "03", title: "Prototype", description: "A working assistant you can test against real questions." },
      { step: "04", title: "Evaluate", description: "Measure accuracy, add guardrails, and reduce hallucination." },
      { step: "05", title: "Launch", description: "Deploy with monitoring, feedback loops, and cost controls." },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    short: "Cross-platform iOS & Android apps from MVP to production-grade.",
    valueProp:
      "One codebase, two stores, native feel — mobile apps your users keep on the home screen.",
    capabilities: [
      { title: "Cross-Platform Apps", description: "iOS and Android from a single React Native or Flutter codebase." },
      { title: "MVP Development", description: "Get a polished, testable app into users' hands fast." },
      { title: "App Modernization", description: "Rebuild or refactor aging apps for performance and maintainability." },
      { title: "Offline & Sync", description: "Local-first data with reliable sync for real-world conditions." },
      { title: "Push & Notifications", description: "Engagement flows, deep links, and re-engagement campaigns." },
      { title: "Store Launch", description: "App Store and Play Store submission, review, and release." },
    ],
    techStack: ["React Native", "Flutter", "Expo", "TypeScript", "Firebase", "Supabase", "Swift", "Kotlin"],
    personas: [
      { title: "Founders", description: "You need a mobile MVP that looks investor-ready, not prototype-rough." },
      { title: "Web-First Businesses", description: "Your customers are asking for an app and you want it done once, well." },
      { title: "Field Operations", description: "You need apps that work offline and sync when connectivity returns." },
    ],
    process: [
      { step: "01", title: "Define", description: "Scope core flows and target platforms for the first release." },
      { step: "02", title: "Design", description: "Native-feeling UI and prototypes validated before build." },
      { step: "03", title: "Build", description: "Weekly builds you can install and test on real devices." },
      { step: "04", title: "Test", description: "QA across devices, OS versions, and edge cases." },
      { step: "05", title: "Release", description: "Store submission, launch, and post-launch iteration." },
    ],
  },
  {
    slug: "cloud-devops",
    icon: Cloud,
    title: "Cloud & DevOps",
    short: "AWS, Azure, GCP setup and migration, CI/CD, containers, and cost optimization.",
    valueProp:
      "Infrastructure that ships faster, scales cleanly, and doesn't surprise you on the monthly bill.",
    capabilities: [
      { title: "Cloud Setup & Migration", description: "Architect and migrate to AWS, Azure, or GCP with zero-drama cutovers." },
      { title: "CI/CD Pipelines", description: "Automated build, test, and deploy so releases are routine, not risky." },
      { title: "Containers & Orchestration", description: "Docker and Kubernetes done right, sized to your team." },
      { title: "Infrastructure as Code", description: "Reproducible environments with Terraform and GitHub Actions." },
      { title: "Cost Optimization", description: "Right-size resources and cut waste without losing reliability." },
      { title: "Managed Infrastructure", description: "Monitoring, alerting, and on-call so you can focus on product." },
    ],
    techStack: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Grafana"],
    personas: [
      { title: "Scaling Startups", description: "Your deploys are manual and your cloud bill is a mystery." },
      { title: "Engineering Teams", description: "You want CI/CD and IaC but lack the time to set it up properly." },
      { title: "Migrating Enterprises", description: "You're moving off on-prem or legacy cloud and need it done safely." },
    ],
    process: [
      { step: "01", title: "Assess", description: "Review current infra, costs, and reliability gaps." },
      { step: "02", title: "Plan", description: "Design the target architecture and migration path." },
      { step: "03", title: "Automate", description: "Codify infrastructure and build CI/CD pipelines." },
      { step: "04", title: "Migrate", description: "Cut over in safe, reversible stages." },
      { step: "05", title: "Operate", description: "Monitoring, alerting, and continuous cost tuning." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: PenTool,
    title: "UI/UX Design & Prototyping",
    short: "Product design, Figma prototypes, design systems, and user research.",
    valueProp:
      "Design that's beautiful and usable — validated with real users before a line of code is written.",
    capabilities: [
      { title: "Product Design", description: "End-to-end design of flows, screens, and interactions." },
      { title: "Figma Prototypes", description: "Clickable prototypes to test and align before development." },
      { title: "Design Systems", description: "Reusable component libraries and tokens for consistency at scale." },
      { title: "User Research", description: "Interviews, usability testing, and insights that shape decisions." },
      { title: "Wireframing", description: "Low-fidelity structure that gets the model right early." },
      { title: "Interaction Design", description: "Motion and micro-interactions that make products feel alive." },
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "FigJam", "Maze", "Lottie", "Storybook"],
    personas: [
      { title: "Pre-Build Founders", description: "You want to validate the experience before investing in engineering." },
      { title: "Growing Products", description: "Your UI has drifted and you need a coherent design system." },
      { title: "Teams Without Design", description: "You have engineers but need a designer to own the experience." },
    ],
    process: [
      { step: "01", title: "Research", description: "Understand users, goals, and the competitive landscape." },
      { step: "02", title: "Wireframe", description: "Structure flows and validate the information architecture." },
      { step: "03", title: "Design", description: "High-fidelity UI grounded in a scalable system." },
      { step: "04", title: "Prototype", description: "Interactive prototypes tested with real users." },
      { step: "05", title: "Handoff", description: "Developer-ready specs, tokens, and assets." },
    ],
  },
  {
    slug: "qa-testing",
    icon: ShieldCheck,
    title: "QA & Testing",
    short: "Manual, automated, performance, and API testing for software you can trust.",
    valueProp:
      "Catch defects before your users do — with test coverage that grows with the product.",
    capabilities: [
      { title: "Manual Testing", description: "Exploratory and regression testing across critical user journeys." },
      { title: "Test Automation", description: "End-to-end and integration suites that run on every commit." },
      { title: "Performance Testing", description: "Load and stress testing to find limits before production does." },
      { title: "API Testing", description: "Contract, integration, and edge-case coverage for your APIs." },
      { title: "Mobile & Cross-Browser", description: "Coverage across devices, browsers, and OS versions." },
      { title: "QA Strategy", description: "A test plan and quality gates that fit your release cadence." },
    ],
    techStack: ["Playwright", "Cypress", "Selenium", "Jest", "k6", "Postman", "Appium"],
    personas: [
      { title: "Shipping Teams", description: "Releases are stressful and bugs keep reaching production." },
      { title: "Scaling Products", description: "Manual testing no longer covers a growing surface area." },
      { title: "Regulated Industries", description: "You need documented, repeatable quality assurance." },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review current coverage, tooling, and risk areas." },
      { step: "02", title: "Plan", description: "Define a test strategy and prioritize high-risk flows." },
      { step: "03", title: "Automate", description: "Build maintainable suites integrated into CI." },
      { step: "04", title: "Execute", description: "Run, triage, and report with clear severity." },
      { step: "05", title: "Sustain", description: "Keep tests green and coverage growing over time." },
    ],
  },
  {
    slug: "product-strategy-mvp",
    icon: Rocket,
    title: "Product Strategy & MVP",
    short: "Discovery workshops, roadmap planning, and rapid MVP development.",
    valueProp:
      "Go from idea to a validated MVP — with a roadmap that de-risks every dollar you invest.",
    capabilities: [
      { title: "Discovery Workshops", description: "Align on problem, users, and success metrics in days, not months." },
      { title: "Design Thinking", description: "Structured ideation to find the highest-leverage solution." },
      { title: "Roadmap Planning", description: "A prioritized, phased plan tied to outcomes and budget." },
      { title: "Rapid MVP Development", description: "Build the smallest thing that proves the value." },
      { title: "Agile Delivery", description: "Short cycles with visible progress and tight feedback loops." },
      { title: "PMF Validation", description: "Instrument and measure to learn what to build next." },
    ],
    techStack: ["Next.js", "Supabase", "Stripe", "PostHog", "Vercel", "Linear", "Figma"],
    personas: [
      { title: "First-Time Founders", description: "You have an idea and need a partner to make it real and fundable." },
      { title: "Corporate Innovation", description: "You need to validate a new bet without a full product team." },
      { title: "Bootstrappers", description: "Every dollar counts and you need to build only what proves value." },
    ],
    process: [
      { step: "01", title: "Discover", description: "Workshop the problem, users, and riskiest assumptions." },
      { step: "02", title: "Define", description: "Scope an MVP that tests the core hypothesis." },
      { step: "03", title: "Design", description: "Prototype and validate the experience early." },
      { step: "04", title: "Build", description: "Ship the MVP in fast, measurable increments." },
      { step: "05", title: "Learn", description: "Measure, iterate, and plan the next phase." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
