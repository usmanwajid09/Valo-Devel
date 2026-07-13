"use client";

import React, { useState } from "react";
import { MapPin, Briefcase, Zap, Heart, Globe, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/ui/Badge";
import { CTASection } from "@/components/CTASection";
import { roles } from "@/lib/content";
import { heroBackgrounds } from "@/lib/site";
import { ApplyModal } from "@/components/ApplyModal";

const culture = [
  { icon: Zap, title: "AI-Native by Default", text: "We build with the best tools available — including AI — so you do your best work, faster." },
  { icon: Globe, title: "Remote-First", text: "Work from anywhere on US/UK hours. We care about output, not seat time." },
  { icon: TrendingUp, title: "Senior, Flat, Fast", text: "No bureaucracy. You own real work and ship it directly to clients." },
  { icon: Heart, title: "Craft & Trust", text: "We sweat the details and treat each other — and our clients — with respect." },
];

export function CareersClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        image={heroBackgrounds.careers}
        crumbs={[{ label: "Careers" }]}
        title={<>Join the <span className="text-gradient-gold">Valor Devs</span> team</>}
        subtitle="We're a small team of specialists doing the best work of our careers. If you build with courage and care, we'd love to hear from you."
      >
        <Button href="#roles" withArrow>See open roles</Button>
      </PageHero>

      {/* Culture */}
      <Section>
        <SectionHeading
          eyebrow="Our Culture"
          title={<>How we <span className="text-gradient-gold">work together</span></>}
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem key={c.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Open roles */}
      <Section id="roles" className="bg-surface/40">
        <SectionHeading
          eyebrow="Open Roles"
          title={<>Where you <span className="text-gradient-gold">come in</span></>}
          subtitle="Don't see a perfect fit? We're always glad to meet exceptional people — reach out anyway."
        />
        <Stagger className="mx-auto mt-14 grid max-w-4xl gap-5">
          {roles.map((role) => (
            <StaggerItem key={role.title}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-gold bg-card/50 p-7 transition-all duration-300 hover:border-gold/60 hover:bg-card md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{role.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-gold" /> {role.type}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> {role.location}</span>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{role.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <TechChip key={s}>{s}</TechChip>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => handleApplyClick(role.title)}
                  variant="secondary"
                  className="shrink-0"
                >
                  Apply now
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection title="Want to build with us?" subtitle="Send your work, your GitHub, or just a note about what you want to build next." />

      {/* Job Application Modal */}
      <ApplyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        roleTitle={selectedRole} 
      />
    </>
  );
}
