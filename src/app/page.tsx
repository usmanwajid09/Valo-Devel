import Link from "next/link";
import { ArrowRight, Search, Hammer, Rocket } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ImpactBand } from "@/components/sections/ImpactBand";
import { heroBackgrounds } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { services } from "@/lib/services";
import { caseStudies, testimonials, articles, differentiators } from "@/lib/content";

const steps = [
  { icon: Search, title: "Discovery", description: "We map your goals, users, and constraints into a clear, costed scope." },
  { icon: Hammer, title: "Build", description: "Weekly sprints with working software you can click through every step." },
  { icon: Rocket, title: "Deliver", description: "We ship, hand over, and keep improving — with support that doesn't vanish." },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* Our Expertise */}
      <Section>
        <SectionHeading
          eyebrow="Our Expertise"
          title={<>End-to-end engineering, <span className="text-gradient-gold">one accountable team</span></>}
          subtitle="Eight focused services covering the full lifecycle — from strategy and design to AI, cloud, and production software."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center">
          <Button href="/services" variant="secondary" withArrow>
            Explore all services
          </Button>
        </Reveal>
      </Section>

      <StatsStrip />

      {/* How We Work */}
      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title={<>From idea to shipped — <span className="text-gradient-gold">in three moves</span></>}
          subtitle="A simple, transparent process designed to deliver value fast and de-risk every decision."
        />
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative h-full rounded-2xl border border-gold bg-card/50 p-8">
                  <span className="absolute right-6 top-6 font-heading text-5xl font-bold text-white/5">
                    0{i + 1}
                  </span>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/process" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline">
            See our full 7-day process <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Section>

      {/* Case studies preview */}
      <Section className="bg-surface/40">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Case Studies"
            title={<>Proven results, <span className="text-gradient-gold">real projects</span></>}
            subtitle="A sample of the outcomes we've delivered across AI, web, mobile, and cloud."
            className="max-w-2xl"
          />
          <Reveal>
            <Button href="/portfolio" variant="secondary" withArrow className="shrink-0">
              View all work
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title={<>Domain expertise across <span className="text-gradient-gold">six sectors</span></>}
          subtitle="We bring context, not just code — with patterns proven in the industries we serve."
        />
        <div className="mt-14">
          <IndustriesGrid />
        </div>
      </Section>

      {/* Global impact band */}
      <ImpactBand
        image={heroBackgrounds.impact}
        eyebrow="Our Global Impact"
        titleLead="Building software for ambitious teams across the"
        titleAccent="US, UK & EU."
        subtitle="From Austin, Texas, we partner with founders and enterprises worldwide — shipping AI, web, mobile, and cloud products with a 7-day first milestone and 24/7 availability."
        cta={{ label: "Start your project", href: "/contact" }}
      />

      {/* Client logos */}
      <Section className="py-12">
        <Reveal className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Built with the tools and platforms trusted by leading teams
          </p>
        </Reveal>
        <div className="mt-8">
          <LogoStrip />
        </div>
      </Section>

      {/* Why Valor Devs */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Why Valor Devs"
          title={<>The Valor Devs <span className="text-gradient-gold">difference</span></>}
          subtitle="What sets us apart from offshore shops and bloated agencies alike."
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <StaggerItem key={d.title} className="h-full">
                <SpotlightCard className="h-full p-7 bg-card/50">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{d.description}</p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What our clients <span className="text-gradient-gold">say</span></>}
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="h-full">
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Insights */}
      <Section className="bg-surface/40">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title={<>Ideas worth <span className="text-gradient-gold">building on</span></>}
            subtitle="Practical writing on AI, software, and how we deliver."
            className="max-w-2xl"
          />
          <Reveal>
            <Button href="/insights" variant="secondary" withArrow className="shrink-0">
              Read all insights
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <StaggerItem key={article.slug} className="h-full">
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
