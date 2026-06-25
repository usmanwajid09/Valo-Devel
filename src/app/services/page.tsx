import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { TechRadar } from "@/components/sections/TechRadar";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/services";
import { heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — End-to-End IT Services",
  description:
    "From custom software and AI to cloud, mobile, and product strategy — Valor Devs delivers end-to-end engineering for US & UK businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image={heroBackgrounds.services}
        crumbs={[{ label: "Services" }]}
        title={<>End-to-End <span className="text-gradient-gold">IT Services</span></>}
        subtitle="One accountable team for the entire software lifecycle. We design, build, ship, and scale — bringing AI capability to everything we touch."
      >
        <Button href="/contact" withArrow>Start a Project</Button>
      </PageHero>

      <Section>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Interactive Tech Radar */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Tech Radar"
          title={<>Our production-proven <span className="text-gradient-gold">technology stack</span></>}
          subtitle="We select tools based on security, speed, and standard operational scale. No hype — just what works in production."
        />
        <div className="mt-14">
          <TechRadar />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title={<>Engineered for your <span className="text-gradient-gold">domain</span></>}
          subtitle="We pair technical depth with real context across the sectors we serve."
        />
        <div className="mt-14">
          <IndustriesGrid />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
