"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Cloud, Code2, ShieldCheck, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
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

const certificatesList = [
  {
    title: "OptimusAutomate Machine Learning Internship",
    issuer: "OptimusAutomate",
    desc: "Verification of successfully completing the Machine Learning Internship Program with verified dedication and assignments.",
    image: "/certificates/cert1.png",
  },
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic",
    desc: "Certification of completion for AWS Bedrock integration patterns, custom prompt engineering, and serverless foundation models.",
    image: "/certificates/cert2.png",
  },
  {
    title: "AI Fluency: Frameworks & Foundations",
    issuer: "Anthropic",
    desc: "Verified framework proficiency covering LLM agent topologies, contextual windows management, and prompt routing parameters.",
    image: "/certificates/cert3.png",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    desc: "Core capabilities certification covering model orchestration, system parameters, and general application integration strategies.",
    image: "/certificates/cert4.png",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    desc: "Advanced credentials for building custom MCP servers, schema management, and context window orchestration pathways.",
    image: "/certificates/cert5.png",
  },
];

export function CredentialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const handleNext = () => {
    setSelectedCertIndex((prev) => (prev + 1) % certificatesList.length);
  };

  const handlePrev = () => {
    setSelectedCertIndex((prev) => (prev - 1 + certificatesList.length) % certificatesList.length);
  };

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
                <div 
                  onClick={() => {
                    if (cred.holder === "Usman Wajid") {
                      setIsModalOpen(true);
                      setSelectedCertIndex(0);
                    }
                  }}
                  className={`relative flex h-full flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 backdrop-blur-md transition-all duration-300 ${
                    cred.holder === "Usman Wajid" ? "cursor-pointer hover:border-gold/40 hover:scale-[1.02]" : "hover:scale-[1.02]"
                  } hover:shadow-lg ${cred.color}`}
                >
                  
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
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${cred.checkBg}`}>
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">
                        Verified Credential
                      </span>
                    </div>

                    {cred.holder === "Usman Wajid" && (
                      <span className="text-[10px] text-gold font-bold hover:underline">
                        View certs →
                      </span>
                    )}
                  </div>

                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Action Button */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 bg-gold/5 text-xs text-gold font-semibold uppercase tracking-wider hover:bg-gold/15 hover:border-gold/45 active:scale-95 transition-all shadow-md"
            >
              <Trophy className="h-4 w-4" /> View Verified Certificates
            </button>
          </div>
        </Reveal>

        {/* Interactive Overlay Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl transition-all duration-300">
            <div className="relative w-full max-w-5xl rounded-3xl border border-gold/30 bg-card p-6 shadow-2xl md:p-8">
              
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-background/50 text-muted hover:text-white transition-colors"
                aria-label="Close Gallery"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title Header */}
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                  {certificatesList[selectedCertIndex].issuer} Certified
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {certificatesList[selectedCertIndex].title}
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed max-w-2xl">
                  {certificatesList[selectedCertIndex].desc}
                </p>
              </div>

              {/* Slider Layout */}
              <div className="grid gap-6 md:grid-cols-[1fr_320px] items-center">
                
                {/* Left Side: Big Certificate Image Display */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gold/20 bg-background flex items-center justify-center p-2 group shadow-inner">
                  <div className="relative w-full h-full">
                    <Image
                      src={certificatesList[selectedCertIndex].image}
                      alt={certificatesList[selectedCertIndex].title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                  
                  {/* Image Overlay Navigation Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border border-gold/20 text-white hover:bg-gold hover:text-background transition-all shadow-md"
                    aria-label="Previous Certificate"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border border-gold/20 text-white hover:bg-gold hover:text-background transition-all shadow-md"
                    aria-label="Next Certificate"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Right Side: Navigation Thumbnails Selection List */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted/60">
                    Verify Other Credentials ({selectedCertIndex + 1}/{certificatesList.length})
                  </span>
                  
                  <div className="flex flex-col gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                    {certificatesList.map((cert, index) => (
                      <button
                        key={cert.title}
                        onClick={() => setSelectedCertIndex(index)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all duration-300 ${
                          selectedCertIndex === index
                            ? "border-gold/50 bg-gold/5 text-gold font-bold"
                            : "border-gold/15 bg-background/40 text-muted hover:border-gold/30 hover:text-white"
                        }`}
                      >
                        <div className="font-semibold line-clamp-1">{cert.title}</div>
                        <div className="text-[10px] opacity-70 mt-0.5">{cert.issuer}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
