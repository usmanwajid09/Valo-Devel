import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TechChip } from "@/components/ui/Badge";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { services, getService } from "@/lib/services";
import { caseStudies } from "@/lib/content";
import { heroBackgrounds } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: { title: service.title, description: service.short },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = caseStudies.slice(0, 2);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        image={heroBackgrounds.services}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        title={
          <span className="flex flex-col gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-background">
              <Icon className="h-7 w-7" />
            </span>
            <span>{service.title}</span>
          </span>
        }
        subtitle={service.valueProp}
      >
        <Button href="/contact" withArrow>Discuss your project</Button>
      </PageHero>

      {/* What we do */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="What We Do"
          title={<>Capabilities that <span className="text-gradient-gold">ship</span></>}
          subtitle={service.short}
          className="max-w-2xl"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((cap) => (
            <StaggerItem key={cap.title} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-6">
                <Check className="mb-4 h-5 w-5 text-gold" />
                <h3 className="font-heading text-base font-semibold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Tech stack */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Tech Stack"
          title={<>Tools we <span className="text-gradient-gold">trust</span></>}
          subtitle="Battle-tested technologies chosen for reliability, performance, and longevity."
        />
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {service.techStack.map((tech) => (
            <span key={tech} className="rounded-xl border border-gold bg-card/60 px-5 py-3 font-heading text-sm font-medium text-white">
              {tech}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Who it's for */}
      <Section>
        <SectionHeading
          eyebrow="Who It's For"
          title={<>Built for teams <span className="text-gradient-gold">like yours</span></>}
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {service.personas.map((persona, i) => (
            <StaggerItem key={persona.title} className="h-full">
              <div className="h-full rounded-2xl border border-gold bg-card/50 p-7">
                <span className="font-heading text-4xl font-bold text-white/10">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-white">{persona.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{persona.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Process */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Our Process"
          title={<>How we deliver <span className="text-gradient-gold">{service.title.toLowerCase()}</span></>}
        />
        <div className="mx-auto mt-12 max-w-3xl">
          {service.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold bg-gold/10 font-heading text-sm font-bold text-gold">
                    {step.step}
                  </span>
                  {i < service.process.length - 1 && <span className="mt-1 w-px flex-1 bg-gold/20" />}
                </div>
                <div className="pb-2 pt-1.5">
                  <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related case studies */}
      <Section>
        <SectionHeading
          eyebrow="Related Work"
          title={<>Outcomes we've <span className="text-gradient-gold">delivered</span></>}
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {related.map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Other services */}
        <Reveal className="mt-16">
          <h3 className="mb-5 font-heading text-lg font-semibold text-white">Explore other services</h3>
          <div className="flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-gold bg-card/50 px-5 py-2.5 text-sm text-white transition-colors hover:border-gold/60 hover:bg-card"
              >
                {s.title}
                <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <CTASection title="Let's build it together" subtitle={`Ready to start your ${service.title.toLowerCase()} project? You'll have a working milestone in 7 days.`} />
    </>
  );
}
