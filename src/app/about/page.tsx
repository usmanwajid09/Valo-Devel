import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Building2, FileCheck, Clock } from "lucide-react";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/cards/TeamCard";
import { CTASection } from "@/components/CTASection";
import { team, values } from "@/lib/content";
import { siteConfig, heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Serious Tech. Serious Results.",
  description:
    "Valor Devs is an AI-native engineering team operating under Global Vital Spark LLC in Austin, TX — built for trust, speed, and real outcomes.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Valor Devs"
        image={heroBackgrounds.about}
        crumbs={[{ label: "About" }]}
        title={<>Serious Tech. <span className="text-gradient-gold">Serious Results.</span></>}
        subtitle="We're a focused team of specialists who treat your project like our mission — combining AI-native speed with the trust of a US-registered company."
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>A team built to <span className="text-gradient-gold">build</span></>}
              subtitle="Valor Devs was founded on a simple frustration: software partners that overpromise, move slowly, and hide behind process. We do the opposite."
              className="max-w-none mb-0"
            />
            <Reveal>
              <div className="space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  We pair a small, senior team of specialists with an AI-native way of working. That combination lets us ship at the pace of a much larger firm — without the overhead, the layers, or the surprises.
                </p>
                <p>
                  Every engagement starts with a clear scope and a 7-day milestone. You see real, working software in your first week — not a slide deck. From there, we iterate in tight loops with full transparency.
                </p>
                <p>
                  We operate under {siteConfig.legalEntity}, registered in {siteConfig.address.city}, {siteConfig.address.state}, so US and UK clients get the contracts, invoicing, and accountability they expect.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative group overflow-hidden rounded-2xl border border-gold bg-card shadow-lg hover:shadow-gold transition-all duration-300">
              <div className="aspect-[4/3] w-full relative">
                {/* Visual Unsplash Team Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80)` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Mission & Values"
          title={<>What we <span className="text-gradient-gold">stand for</span></>}
          subtitle="Our mission is to be the most trusted engineering partner our clients have ever worked with."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <StaggerItem key={v.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Legal credibility / Trust Center */}
      <Section id="trust-center" className="scroll-mt-20">
        <Reveal className="overflow-hidden rounded-3xl border border-gold/30 bg-card/60 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
            <div>
              <span className="eyebrow mb-5">Trust & Compliance</span>
              <h2 className="text-2xl font-bold md:text-4xl">
                Global Vital Spark LLC <br />
                <span className="text-gradient-gold">Trust Center</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                Valor Devs operates under Global Vital Spark LLC, legally registered in Austin, TX. We provide our clients with standard US contracts, liability insurance, and intellectual property assurances so you can build with confidence.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  { icon: FileCheck, text: "US-compliant contracts & MSAs" },
                  { icon: Building2, text: "Registered in Austin, TX 78731 🇺🇸" },
                  { icon: ShieldCheck, text: "USD invoicing via Stripe & Wise" },
                  { icon: Clock, text: "Available 24/7 across time zones" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-xl border border-gold/25 bg-gold/5 px-4 py-3 text-xs text-white">
                      <Icon className="h-4 w-4 shrink-0 text-gold" />
                      {item.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/15 bg-background/45 p-6 hover:border-gold/30 transition-colors">
                <div className="font-heading text-base font-semibold text-white">1. Intellectual Property (IP)</div>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  We assign 100% of all code, assets, and design ownership to you immediately upon payment clearance, structured clearly under our standard Master Services Agreement (MSA).
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-background/45 p-6 hover:border-gold/30 transition-colors">
                <div className="font-heading text-base font-semibold text-white">2. NDAs & Confidentiality</div>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  Before a single conversation or code access begins, we sign a standard bilateral NDA. Your company secrets, architecture models, and databases stay strictly private.
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-background/45 p-6 hover:border-gold/30 transition-colors">
                <div className="font-heading text-base font-semibold text-white">3. 7-Day Guarantee Escrow</div>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  We invoice in milestone stages. Your first sprint begins with a 7-Day First Milestone Guarantee. If you're not satisfied with the week's output, you get a 100% refund.
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-background/45 p-6 hover:border-gold/30 transition-colors">
                <div className="font-heading text-base font-semibold text-white">4. Governing US Law</div>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  All legal disputes, SOW contracts, and payment transactions are governed by the state and federal laws of Texas, USA. You have complete legal protection.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Why Austin */}
      <Section className="bg-surface/40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-5">Why Austin, TX</span>
            <h2 className="text-2xl font-bold md:text-3xl">
              Headquartered in a <span className="text-gradient-gold">global tech hub</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Austin is one of the fastest-growing technology centers in the world — home to the headquarters and major campuses of Dell, Oracle, Tesla, and a thriving startup ecosystem. Basing our company here keeps us close to the standards, talent, and pace of the US tech industry.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative group overflow-hidden rounded-2xl border border-gold bg-card shadow-lg hover:shadow-gold transition-all duration-300">
              <div className="aspect-[16/9] w-full relative">
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                  alt="Austin skyline and tech hub"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-black/20" aria-hidden="true" />
                
                {/* Overlaying Glassmorphic logos */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2.5">
                  {["Dell", "Oracle", "Tesla HQ"].map((co) => (
                    <div 
                      key={co} 
                      className="flex-1 text-center py-2.5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md font-heading text-xs font-semibold text-white/90 hover:border-gold/50 hover:bg-black/60 transition-all duration-300"
                    >
                      {co}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" className="scroll-mt-20">
        <SectionHeading
          eyebrow="Our Team"
          title={<>Meet our <span className="text-gradient-gold">leadership</span></>}
          subtitle="A senior team of specialists built for trust, speed, and real execution outcomes."
        />

        <div className="mt-16 w-full max-w-6xl mx-auto">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            {team.map((member) => (
              <StaggerItem key={member.name} className="w-full">
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Global reach */}
      <ImpactBand
        image={heroBackgrounds.impact}
        eyebrow="Global Reach"
        titleLead="Available 24/7 to clients"
        titleAccent="worldwide."
        subtitle="We work alongside US, UK, and EU clients across every time zone. Whether you're in Austin, London, or Berlin, you'll always have a responsive partner and clear communication."
        cta={{ label: "Work with us", href: "/contact" }}
      />

      <CTASection />
    </>
  );
}
