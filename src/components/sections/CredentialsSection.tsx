"use client";

import { Trophy, Cloud, Code2, ShieldCheck, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const credentials = [
  {
    icon: Trophy,
    badge: "1st Place Award",
    title: "National Hackathon Champion",
    holder: "Usman Wajid",
    description: "Led the winning software team at the National Tech Summit, designing a high-performance system routing real-time crisis assets under pressure.",
    color: "from-amber-500/10 to-amber-500/5 border-amber-500/20 text-amber-500",
    checkBg: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Cloud,
    badge: "Professional Certification",
    title: "Google Cloud Certified Architect",
    holder: "Fahad Bilal",
    description: "Certified Professional Cloud Architect, specializing in microservices clustering, security boundaries, and high-throughput data processing systems.",
    color: "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-500",
    checkBg: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Code2,
    badge: "Technical Vetting",
    title: "AWS Certified Cloud Developer",
    holder: "Ahmad Masood",
    description: "Amazon Web Services Certified developer, designing secure, serverless cloud deployments with integrated database auto-scaling pipelines.",
    color: "from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-500",
    checkBg: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: ShieldCheck,
    badge: "Legal Compliance",
    title: "Austin, TX Registered LLC",
    holder: "Global Vital Spark LLC",
    description: "Legally registered US corporation in Austin, Texas. Provides contract enforcement, professional liability coverage, and native USD business billing.",
    color: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-500",
    checkBg: "bg-cyan-500/10 text-cyan-500",
  },
];

export function CredentialsSection() {
  return (
    <section className="relative overflow-hidden py-24 border-t border-gold/10">
      <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-10" aria-hidden="true" />
      <div className="container relative">
        
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow inline-flex items-center gap-1.5 bg-gold/5 px-3 py-1 rounded-full border border-gold/20 text-xs text-gold font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" /> Trust & Authority
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl leading-tight">
              Certified Standards. <br />
              <span className="text-gradient-gold">Award-Winning Engineering.</span>
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              We don't deal in developer templates or generic generalist output. Our team features certified specialists with verified tech honors and structured US corporate security.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid */}
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred) => {
            const Icon = cred.icon;
            return (
              <StaggerItem key={cred.title} className="h-full">
                <div className={`relative flex h-full flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${cred.color}`}>
                  
                  {/* Top section */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">
                        {cred.badge}
                      </span>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <h3 className="mt-6 font-heading text-lg font-bold text-white leading-snug">
                      {cred.title}
                    </h3>
                    
                    <div className="mt-1 text-xs font-semibold text-gold">
                      {cred.holder}
                    </div>
                    
                    <p className="mt-4 text-xs leading-relaxed text-muted">
                      {cred.description}
                    </p>
                  </div>

                  {/* Bottom section / verified check */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                    <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${cred.checkBg}`}>
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">
                      Verified Credential
                    </span>
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
}
