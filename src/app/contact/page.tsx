import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock, PhoneCall, FileSignature, Rocket } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { siteConfig, heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Let's Build Something Great",
  description:
    "Get in touch with Valor Devs. WhatsApp, email, or the form — we respond within 24 hours. Based in Austin, TX, available 24/7.",
};

const nextSteps = [
  { icon: PhoneCall, title: "1. Discovery Call", text: "We'll set up a call within 24 hours to understand your goals and scope." },
  { icon: FileSignature, title: "2. Proposal & Plan", text: "You'll get a clear proposal with milestones, timeline, and transparent pricing." },
  { icon: Rocket, title: "3. We Start Building", text: "Sign off, and we deliver your first working milestone within 7 days." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        image={heroBackgrounds.contact}
        crumbs={[{ label: "Contact" }]}
        title={<>Let's build something <span className="text-gradient-gold">great</span></>}
        subtitle="Tell us about your project. Whether you have a detailed spec or just an idea, we'll help you map the fastest path to shipped software."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Contact panel */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gold/30 bg-gold/10 p-6 transition-colors hover:bg-gold/15"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-background">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-heading text-base font-semibold text-white">WhatsApp us</div>
                  <div className="text-sm text-muted">{siteConfig.contact.whatsapp}</div>
                </div>
              </a>

              <ContactRow icon={Mail} label="Email" value={siteConfig.contact.email} href={`mailto:${siteConfig.contact.email}`} />
              <ContactRow icon={MapPin} label="Office" value={siteConfig.address.full} />
              <ContactRow icon={Clock} label="Availability" value="24/7 · Response within 24 hours" />

              {/* Map placeholder */}
              <div className="relative mt-2 h-44 overflow-hidden rounded-2xl border border-gold bg-gradient-to-br from-surface to-card">
                <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted">
                  <MapPin className="h-7 w-7 text-gold" />
                  <span className="font-heading text-sm font-semibold text-white">Austin, Texas 🇺🇸</span>
                  <span className="text-xs">78731, United States</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What happens next */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="What Happens Next"
          title={<>Three steps to <span className="text-gradient-gold">getting started</span></>}
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.title} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-background">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-gold">answered</span></>}
        />
        <div className="mt-12">
          <FAQ />
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-gold bg-card/50 p-6 transition-colors hover:border-gold/60">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
