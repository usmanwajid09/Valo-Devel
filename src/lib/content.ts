import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Cloud,
  GraduationCap,
  Building2,
  Target,
  Users,
  Gauge,
  Globe,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Case studies                                                              */
/* -------------------------------------------------------------------------- */

export type CaseStudy = {
  slug: string;
  name: string;
  client: string;
  category: "AI & ML" | "Web Apps" | "Mobile" | "Cloud";
  industry: string;
  result: string;
  tech: string[];
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  accent: string; // tailwind gradient classes layered over the image
  image: string; // Unsplash photo URL
};

const IMG = "?auto=format&fit=crop&w=1200&q=72";

export const caseStudies: CaseStudy[] = [
  {
    slug: "healthtrack-ai-triage",
    name: "AI Patient Triage Platform",
    client: "HealthTrack Inc",
    category: "AI & ML",
    industry: "Healthcare",
    result: "Cut triage time by 63% across 12 clinics",
    tech: ["Python", "PyTorch", "FastAPI", "Next.js", "AWS"],
    overview:
      "HealthTrack Inc operates a network of outpatient clinics across Texas and needed to reduce the time nurses spent manually triaging incoming patients.",
    challenge:
      "Nurses spent up to 9 minutes per patient categorizing symptoms by hand, creating bottlenecks during peak hours and inconsistent prioritization across locations.",
    solution:
      "We built an NLP triage assistant trained on de-identified intake notes that suggests a priority level and likely department in real time, with a clinician always in the loop. The model is served behind a monitored API and integrated into their existing intake portal.",
    metrics: [
      { label: "Triage time reduced", value: "63%" },
      { label: "Clinics deployed", value: "12" },
      { label: "Prioritization accuracy", value: "94%" },
      { label: "First milestone", value: "7 days" },
    ],
    accent: "from-rose-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1576091160550-2173dba999ef${IMG}`,
  },
  {
    slug: "finflow-payments-dashboard",
    name: "Real-Time Payments Dashboard",
    client: "FinFlow Technologies",
    category: "Web Apps",
    industry: "Fintech",
    result: "Processed $2.4B in monitored volume with sub-second updates",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets", "Redis"],
    overview:
      "FinFlow Technologies provides payment infrastructure to mid-market merchants and needed a dashboard their customers could trust for live reconciliation.",
    challenge:
      "Their legacy dashboard refreshed every 5 minutes, so merchants couldn't see disputes, failures, or settlements as they happened — driving support tickets and churn.",
    solution:
      "We engineered a real-time dashboard with a WebSocket data layer, Redis-backed caching, and a typed API. Merchants now see transactions, settlements, and alerts update in under a second, with drill-downs and exportable reports.",
    metrics: [
      { label: "Monitored volume", value: "$2.4B" },
      { label: "Update latency", value: "<1s" },
      { label: "Support tickets", value: "-41%" },
      { label: "Uptime", value: "99.98%" },
    ],
    accent: "from-emerald-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71${IMG}`,
  },
  {
    slug: "retailedge-mobile-app",
    name: "Omnichannel Shopping App",
    client: "RetailEdge",
    category: "Mobile",
    industry: "eCommerce",
    result: "4.8★ rating with 120k installs in the first quarter",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Stripe"],
    overview:
      "RetailEdge, a fast-growing US retailer, wanted a single app to unify in-store and online shopping with loyalty built in.",
    challenge:
      "Customers had separate web and loyalty experiences, and the brand had no mobile presence despite most traffic being mobile.",
    solution:
      "We built a cross-platform app with personalized recommendations, in-store mode with barcode scanning, loyalty rewards, and Stripe checkout. We launched on both stores within the agreed timeline.",
    metrics: [
      { label: "App store rating", value: "4.8★" },
      { label: "Installs (Q1)", value: "120k" },
      { label: "Repeat purchase rate", value: "+28%" },
      { label: "Checkout time", value: "-35%" },
    ],
    accent: "from-indigo-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1605902711622-cfb43c4437b5${IMG}`,
  },
  {
    slug: "scholarsync-saas-platform",
    name: "Learning Management SaaS",
    client: "ScholarSync",
    category: "Web Apps",
    industry: "Education",
    result: "Onboarded 80 institutions on a multi-tenant platform",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "AWS"],
    overview:
      "ScholarSync needed a multi-tenant LMS that universities and bootcamps could brand and operate independently.",
    challenge:
      "Their MVP couldn't isolate tenant data or scale, blocking enterprise deals that required SSO and per-institution branding.",
    solution:
      "We re-architected the platform with true multi-tenancy, role-based access, SSO, usage-based billing, and an admin console — unlocking enterprise sales.",
    metrics: [
      { label: "Institutions onboarded", value: "80" },
      { label: "Active learners", value: "210k" },
      { label: "Enterprise deals unblocked", value: "11" },
      { label: "Page load", value: "<1.2s" },
    ],
    accent: "from-sky-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1516534775068-ba3e7458af70${IMG}`,
  },
  {
    slug: "propvault-cloud-migration",
    name: "Cloud Migration & Cost Overhaul",
    client: "PropVault",
    category: "Cloud",
    industry: "Real Estate",
    result: "Cut cloud spend 47% while improving reliability",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    overview:
      "PropVault, a property management platform, was running on costly, manually managed infrastructure with frequent outages.",
    challenge:
      "Deploys were manual and risky, the cloud bill was unpredictable, and outages during peak listing periods hurt their reputation.",
    solution:
      "We codified infrastructure with Terraform, containerized services, set up CI/CD and Kubernetes, and right-sized resources — cutting cost and improving uptime.",
    metrics: [
      { label: "Cloud spend reduced", value: "47%" },
      { label: "Deploy time", value: "-88%" },
      { label: "Uptime", value: "99.95%" },
      { label: "Rollbacks", value: "1-click" },
    ],
    accent: "from-cyan-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1479839672679-a46483c0e7c8${IMG}`,
  },
  {
    slug: "medsupply-rag-assistant",
    name: "Internal Knowledge AI Assistant",
    client: "MedSupply Co",
    category: "AI & ML",
    industry: "Healthcare",
    result: "Answered 70% of internal queries without human help",
    tech: ["LangChain", "Claude API", "Pinecone", "Next.js", "Vercel"],
    overview:
      "MedSupply Co's operations team wasted hours searching policy and product documents scattered across systems.",
    challenge:
      "Critical answers were buried in thousands of PDFs and wiki pages, so staff defaulted to asking colleagues, creating delays and inconsistency.",
    solution:
      "We built a RAG assistant grounded in their document corpus with citations, access controls, and guardrails. Staff now get sourced answers instantly.",
    metrics: [
      { label: "Queries self-served", value: "70%" },
      { label: "Avg. answer time", value: "8s" },
      { label: "Documents indexed", value: "14k" },
      { label: "Answer accuracy", value: "92%" },
    ],
    accent: "from-amber-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1485827404703-89b55fcc595e${IMG}`,
  },
  {
    slug: "logiflow-ops-portal",
    name: "Logistics Operations Portal",
    client: "LogiFlow",
    category: "Web Apps",
    industry: "SaaS",
    result: "Replaced 6 spreadsheets with one live operations hub",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Mapbox", "Redis"],
    overview:
      "LogiFlow coordinated deliveries across spreadsheets and email, with no single source of truth.",
    challenge:
      "Dispatchers juggled six spreadsheets, leading to double-booked drivers and missed SLAs.",
    solution:
      "We delivered a real-time operations portal with route mapping, driver assignment, and SLA tracking — consolidating everything into one tool.",
    metrics: [
      { label: "Spreadsheets retired", value: "6" },
      { label: "On-time deliveries", value: "+22%" },
      { label: "Dispatch errors", value: "-58%" },
      { label: "Adoption", value: "100%" },
    ],
    accent: "from-teal-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${IMG}`,
  },
  {
    slug: "ventureos-mvp",
    name: "Fintech MVP in 6 Weeks",
    client: "VentureOS",
    category: "Mobile",
    industry: "Fintech",
    result: "Raised a seed round on the delivered MVP",
    tech: ["React Native", "Supabase", "Stripe", "PostHog", "Vercel"],
    overview:
      "VentureOS needed a credible, testable MVP to validate a new SMB lending product and pitch investors.",
    challenge:
      "The founders had a strong thesis but no product, and a tight window before their fundraise.",
    solution:
      "We ran a discovery workshop, scoped the riskiest assumptions, and shipped a polished MVP with onboarding, KYC, and a lending flow — instrumented for learning.",
    metrics: [
      { label: "Time to MVP", value: "6 wks" },
      { label: "Beta users", value: "1.5k" },
      { label: "Outcome", value: "Seed raised" },
      { label: "Crash-free sessions", value: "99.7%" },
    ],
    accent: "from-violet-500/40 to-gold/20",
    image: `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c${IMG}`,
  },
];

export const caseStudyFilters = ["All", "AI & ML", "Web Apps", "Mobile", "Cloud"] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                              */
/* -------------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Valor Devs shipped a working milestone in the first week and never slowed down. It felt like having a senior team that actually cared about our outcomes.",
    name: "Sarah Whitfield",
    role: "VP of Engineering",
    company: "FinFlow Technologies",
  },
  {
    quote:
      "The AI triage tool they built is now part of our daily operations. They understood the clinical constraints and kept a human in the loop from day one.",
    name: "Dr. Marcus Lane",
    role: "Chief Medical Officer",
    company: "HealthTrack Inc",
  },
  {
    quote:
      "We needed an MVP fast for our raise. Valor Devs ran the discovery, scoped it ruthlessly, and delivered something investors took seriously.",
    name: "Priya Raman",
    role: "Co-Founder & CEO",
    company: "VentureOS",
  },
];

/* -------------------------------------------------------------------------- */
/*  Industries                                                                */
/* -------------------------------------------------------------------------- */

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  { slug: "healthcare", icon: HeartPulse, title: "Healthcare", description: "HIPAA-aware platforms, clinical tools, and AI that keeps a human in the loop." },
  { slug: "fintech", icon: Landmark, title: "Fintech", description: "Secure payments, real-time dashboards, and compliant financial products." },
  { slug: "ecommerce", icon: ShoppingCart, title: "eCommerce & Retail", description: "Omnichannel storefronts, mobile apps, and conversion-focused experiences." },
  { slug: "saas", icon: Cloud, title: "SaaS", description: "Multi-tenant platforms, billing, and the infrastructure to scale them." },
  { slug: "education", icon: GraduationCap, title: "Education", description: "Learning platforms, content tools, and analytics for better outcomes." },
  { slug: "real-estate", icon: Building2, title: "Real Estate", description: "Property platforms, portals, and operations tools that cut busywork." },
];

/* -------------------------------------------------------------------------- */
/*  Team                                                                      */
/* -------------------------------------------------------------------------- */

export type TeamMember = {
  name: string;
  role: string;
  title: string;
  bio: string;
  skills: string[];
  image: string;
  bgImage: string;
};

export const team: TeamMember[] = [
  {
    name: "Muhammad Iqbal Shahid",
    role: "CEO",
    title: "CEO",
    bio: "Drives the strategic vision, business operations, and executive leadership of Valor Devs, ensuring client success and US/international compliance.",
    skills: ["Executive Leadership", "Product Strategy", "IT Consulting", "Business Operations", "US Compliance"],
    image: "/images/team/iqbal-shahid.jpg",
    bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&h=240&q=80",
  },
  {
    name: "Usman Wajid",
    role: "Project Manager & Senior Developer",
    title: "Project Manager & Senior Developer",
    bio: "Leads project execution and software development, bridging client requirements with robust, modern technology solutions.",
    skills: ["Project Management", "Full-Stack Development", "Agile Leadership", "Technical Scoping", "Software Engineering"],
    image: "/images/team/usman-wajid.jpg",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=240&q=80",
  },
  {
    name: "Fahad Bilal",
    role: "AI Engineer",
    title: "AI Engineer",
    bio: "Develops smart AI solutions, Next.js applications, and custom models to integrate intelligence into everything we build.",
    skills: ["AI/ML Integrations", "Next.js", "React", "Node.js", "TypeScript", "System Design"],
    image: "/images/team/fahad-bilal.jpeg",
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=240&q=80",
  },
  {
    name: "Ahmad Masood",
    role: "Junior Web Developer",
    title: "Junior Web Developer",
    bio: "Builds responsive, clean web interfaces, supports core development tasks, and ensures visual fidelity.",
    skills: ["HTML5/CSS3", "JavaScript", "TypeScript", "React", "Git"],
    image: "/images/team/ahmad-masood.jpeg",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=240&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/*  Why Valor Devs / differentiators                                          */
/* -------------------------------------------------------------------------- */

export const differentiators: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Globe, title: "US LLC Registered", description: "Operating under Global Vital Spark LLC in Austin, TX — full US compliance for contracts, invoicing, and payments." },
  { icon: BrainCircuit, title: "AI-Native Team", description: "We build with AI in our own workflow, so we ship faster and bring AI capability to every engagement." },
  { icon: Gauge, title: "7-Day First Milestone", description: "You'll see real, working output within the first week — not a status update." },
  { icon: Users, title: "Dedicated Specialist per Domain", description: "A focused specialist owns each domain — engineering, AI, design, and cloud — no generalist guesswork." },
];

/* -------------------------------------------------------------------------- */
/*  Mission & values                                                          */
/* -------------------------------------------------------------------------- */

export const values: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Target, title: "Outcomes Over Output", description: "We measure success by your results, not hours billed." },
  { icon: Gauge, title: "Velocity With Discipline", description: "We move fast, but never skip testing, security, or craft." },
  { icon: Users, title: "True Partnership", description: "Your mission is our mission — transparent, responsive, invested." },
  { icon: Globe, title: "Built for Trust", description: "US-registered, clear contracts, and communication you can rely on." },
];

/* -------------------------------------------------------------------------- */
/*  Process — 7-day onboarding                                                */
/* -------------------------------------------------------------------------- */

export const processDays: { day: string; title: string; we: string; you: string }[] = [
  { day: "Day 1", title: "Discovery Call", we: "We run a deep-dive call to understand your goals, users, and constraints.", you: "A shared project brief and a clear statement of the problem we're solving." },
  { day: "Day 2", title: "Scope & Proposal", we: "We define scope, milestones, and a fixed plan with transparent pricing.", you: "A written proposal, timeline, and contract ready to sign." },
  { day: "Day 3", title: "Design & Architecture", we: "We design the experience and choose the architecture and stack.", you: "Wireframes or prototypes and a technical architecture overview." },
  { day: "Day 4", title: "Environment Setup", we: "We set up repos, CI/CD, environments, and project tooling.", you: "Access to the codebase, project board, and communication channels." },
  { day: "Day 5", title: "Build Begins", we: "We start building the highest-value slice of the product.", you: "Daily progress visibility and your first preview link." },
  { day: "Day 6", title: "First Review", we: "We demo the early build and gather your feedback.", you: "A working preview to click through and shape." },
  { day: "Day 7", title: "First Milestone", we: "We deliver the first working milestone and plan the next sprint.", you: "Tangible, working software — your 7-day milestone, guaranteed." },
];

export const processTools = ["Figma", "GitHub", "Stripe", "Loom", "DocuSign", "Slack", "WhatsApp"];

/* -------------------------------------------------------------------------- */
/*  Insights / blog                                                           */
/* -------------------------------------------------------------------------- */

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "rag-systems-that-actually-work",
    image: `https://images.unsplash.com/photo-1677442135703-1787eea5ce01${IMG}`,
    title: "Building RAG Systems That Actually Work in Production",
    category: "Generative AI",
    excerpt:
      "Most RAG demos look magical and fall apart in production. Here's how we ground LLMs so they answer correctly, cite sources, and stay within budget.",
    date: "2026-05-28",
    readTime: "8 min read",
    body: [
      "Retrieval-augmented generation is the default pattern for grounding large language models in private data. The demo is easy; the production system is not. The gap is mostly about retrieval quality, evaluation, and guardrails.",
      "Start with the data. The single biggest lever on answer quality is how you chunk and index documents. Semantic chunking that respects document structure consistently beats naive fixed-size splitting.",
      "Next, evaluate ruthlessly. Build a test set of real questions with known answers and measure retrieval precision and answer accuracy on every change. Without evaluation you are tuning blind.",
      "Finally, add guardrails: citations so users can verify, refusal behavior when context is missing, and cost controls so a single query can't run away. Done right, RAG becomes a system you can trust.",
    ],
  },
  {
    slug: "why-7-day-milestones",
    image: `https://images.unsplash.com/photo-1488229297570-58520851e868${IMG}`,
    title: "Why We Guarantee a Working Milestone in 7 Days",
    category: "Product Strategy",
    excerpt:
      "Long discovery phases hide risk. We compress the first loop to a week so you see real software fast — and we earn trust by shipping, not promising.",
    date: "2026-05-14",
    readTime: "5 min read",
    body: [
      "Software projects fail slowly. Months pass in meetings and documents before anyone sees working software, and by then the budget and trust are spent.",
      "We invert this. Within seven days, we deliver a real, working slice of the product. It forces clarity, surfaces risk early, and gives you something concrete to react to.",
      "This isn't about cutting corners — it's about sequencing. We design and architect first, then build the highest-value slice, then iterate. The seven-day milestone is the forcing function that keeps everyone honest.",
    ],
  },
  {
    slug: "ai-native-engineering",
    image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6${IMG}`,
    title: "What 'AI-Native' Actually Means for an Engineering Team",
    category: "Engineering",
    excerpt:
      "AI-native isn't a marketing label. It's a way of working that changes how fast and how well a small team can ship. Here's what it looks like day to day.",
    date: "2026-04-30",
    readTime: "6 min read",
    body: [
      "Every agency now claims to be AI-native. For us it means something specific: AI is woven into how we build, not just what we sell.",
      "We use AI for code generation, test scaffolding, code review, and research — which is how a focused team of specialists ships at the pace of a much larger one.",
      "It also means we bring genuine AI capability to client work: LLM features, RAG, agents, and ML, built by people who use these tools every day rather than reading about them.",
    ],
  },
  {
    slug: "choosing-react-native-vs-flutter",
    image: `https://images.unsplash.com/photo-1551650975-87deedd944c3${IMG}`,
    title: "React Native vs. Flutter: How We Choose in 2026",
    category: "Mobile",
    excerpt:
      "Both are excellent. The right choice depends on your team, your timeline, and where your product is headed. Here's our decision framework.",
    date: "2026-04-12",
    readTime: "7 min read",
    body: [
      "The React Native vs. Flutter debate is mostly tribal. In practice, both ship great cross-platform apps, and the decision should be made on context, not preference.",
      "We lean React Native when the team already lives in the JavaScript and TypeScript ecosystem, or when web and mobile share logic. The talent pool and library ecosystem are deep.",
      "We lean Flutter when pixel-perfect custom UI and consistent performance across platforms are the priority, or when there's no existing JS investment to leverage.",
      "Either way, the architecture matters more than the framework. We invest in clean state management, offline support, and testing regardless of the choice.",
    ],
  },
  {
    slug: "cloud-cost-optimization-playbook",
    image: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31${IMG}`,
    title: "A Practical Cloud Cost Optimization Playbook",
    category: "Cloud & DevOps",
    excerpt:
      "Cloud bills creep up quietly. These are the highest-leverage moves we make to cut spend without sacrificing reliability.",
    date: "2026-03-25",
    readTime: "9 min read",
    body: [
      "Cloud waste is rarely one big mistake — it's a hundred small defaults left unchanged. The fix is systematic, not heroic.",
      "Start with visibility: tag everything and attribute cost to teams and features. You can't optimize what you can't see.",
      "Then right-size: most workloads are over-provisioned. Match instance types to real usage, adopt autoscaling, and move steady workloads to savings plans.",
      "Finally, automate: idle environments should shut down on a schedule, and infrastructure should be codified so cost-aware defaults are baked in from the start.",
    ],
  },
  {
    slug: "design-systems-for-small-teams",
    image: `https://images.unsplash.com/photo-1618788372246-79faff0c3742${IMG}`,
    title: "Design Systems for Small Teams (Without the Overhead)",
    category: "UI/UX Design",
    excerpt:
      "You don't need a 12-person design org to have a design system. Here's a lightweight approach that keeps products consistent as they grow.",
    date: "2026-03-08",
    readTime: "6 min read",
    body: [
      "Design systems have a reputation for being heavyweight. For a small team, that reputation is a trap — a lightweight system pays for itself almost immediately.",
      "Start with tokens: colors, spacing, and typography defined once and reused everywhere. This alone eliminates most visual drift.",
      "Then build a small set of well-made components and document their states. You don't need every component on day one — just the ones you use constantly.",
      "Treat it as a living thing. The system should grow with the product, not freeze it. The goal is speed and consistency, not bureaucracy.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Careers                                                                   */
/* -------------------------------------------------------------------------- */

export type Role = {
  title: string;
  type: string;
  location: string;
  description: string;
  skills: string[];
};

export const roles: Role[] = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote",
    location: "US / UK hours",
    description: "Own products end to end with React, Next.js, and Node. Ship weekly, work directly with clients, and set the engineering bar.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "AI / ML Engineer",
    type: "Full-time · Remote",
    location: "US / UK hours",
    description: "Build LLM features, RAG systems, and ML models that reach production. Comfortable across Python, LangChain, and modern model APIs.",
    skills: ["Python", "PyTorch", "LangChain", "RAG", "OpenAI / Claude APIs"],
  },
  {
    title: "Product Designer (UI/UX)",
    type: "Contract · Remote",
    location: "US / UK hours",
    description: "Design experiences from research to high-fidelity prototypes. Own design systems and partner closely with engineering.",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    title: "Cloud & DevOps Engineer",
    type: "Full-time · Remote",
    location: "US / UK hours",
    description: "Build and operate infrastructure across AWS, Azure, and GCP. Automate everything with Terraform and CI/CD.",
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Docker"],
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                      */
/* -------------------------------------------------------------------------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: "How fast can you start?",
    a: "Most projects kick off within a few days. We run a discovery call, agree on scope, and deliver your first working milestone within 7 days of starting.",
  },
  {
    q: "How do payments and contracts work?",
    a: "We operate under Global Vital Spark LLC, registered in Austin, TX. We invoice in USD and accept Stripe and Wise, with clear US-compliant contracts.",
  },
  {
    q: "Do you work with US and UK time zones?",
    a: "Yes. We're available 24/7 and overlap working hours with US, UK, and EU clients. You'll always have a responsive point of contact.",
  },
  {
    q: "What is the 7-day milestone guarantee?",
    a: "Within the first week of starting, we deliver a tangible, working piece of your product — not a status report. It's how we prove momentum and earn trust early.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Absolutely. We regularly audit, stabilize, and extend existing codebases, including modernizing legacy systems and improving reliability.",
  },
  {
    q: "How do we communicate during the project?",
    a: "We use Slack and WhatsApp for day-to-day, Loom for async demos, and a shared project board for visibility. You'll always know the status.",
  },
];
