"use client";

import { useState } from "react";
import { MessageSquare, Clock, Video, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { processDays, processTools } from "@/lib/content";
import { heroBackgrounds } from "@/lib/site";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const commsStandards = [
  { icon: Clock, title: "24-Hour Response", text: "We reply to every message within 24 hours — usually much faster." },
  { icon: MessageSquare, title: "Always-On Channels", text: "Slack and WhatsApp for day-to-day, so you're never left guessing." },
  { icon: Video, title: "Async Demos", text: "Loom walkthroughs of progress you can watch on your schedule." },
  { icon: FileText, title: "Full Transparency", text: "A shared project board and previews you can access any time." },
];

export default function ProcessPage() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentDay = processDays[selectedDayIndex];

  return (
    <>
      <PageHero
        eyebrow="Process"
        image={heroBackgrounds.process}
        crumbs={[{ label: "Process" }]}
        title={<>From kickoff to your first milestone <span className="text-gradient-gold">in 7 days</span></>}
        subtitle="No long discovery phases or vanishing teams. Click through our interactive timeline to see exactly what we do and what you receive each day."
      >
        <Button href="/contact" withArrow>Start Your Project</Button>
      </PageHero>

      {/* Interactive 7-day timeline slider */}
      <Section>
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Onboarding Timeline"
            title={<>Week One: <span className="text-gradient-gold">Day-by-Day Breakdown</span></>}
            subtitle="Select a day below to examine deliverables and execution schedules."
          />

          {/* Timeline Tab buttons */}
          <div className="relative mt-12 flex justify-between gap-1 overflow-x-auto border-b border-gold/15 pb-4 scrollbar-thin">
            {processDays.map((d, index) => {
              const isActive = selectedDayIndex === index;
              return (
                <button
                  key={d.day}
                  onClick={() => setSelectedDayIndex(index)}
                  className={cn(
                    "relative flex min-w-[100px] flex-1 flex-col items-center py-3 text-center transition-all",
                    isActive ? "text-gold font-bold" : "text-muted hover:text-white"
                  )}
                >
                  <span className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg font-heading text-xs border transition-all mb-2",
                    isActive ? "bg-gold text-background border-gold" : "bg-card border-gold/15"
                  )}>
                    D{index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-wider whitespace-nowrap">{d.day}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeDayBar"
                      className="absolute bottom-[-17px] left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Day Showcase Panel */}
          <div className="mt-10 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDayIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid gap-6 md:grid-cols-[1.2fr_1.8fr]"
              >
                {/* Day Header Card */}
                <div className="rounded-2xl border border-gold bg-card/45 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.65rem] font-bold text-gold uppercase tracking-widest bg-gold/5 border border-gold/15 px-2.5 py-1 rounded-md">
                      Onboarding {currentDay.day}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mt-4">
                      {currentDay.title}
                    </h3>
                  </div>
                  <div className="mt-8 flex items-center justify-between text-xs text-muted">
                    <span>Active Sprint Partner</span>
                    <span className="flex items-center gap-1 text-gold">
                      Next Step <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Day Details cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gold/15 bg-card/25 p-6 hover:border-gold/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-wider text-gold-light border-b border-gold/10 pb-2 mb-3">
                        What We Do
                      </div>
                      <p className="text-sm leading-relaxed text-muted">
                        {currentDay.we}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>Dedicated Specialist Action</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gold/15 bg-card/25 p-6 hover:border-gold/30 transition-all flex flex-col justify-between">
                    <div>
                      <div className="text-[0.65rem] font-bold uppercase tracking-wider text-gold-light border-b border-gold/10 pb-2 mb-3">
                        What You Receive
                      </div>
                      <p className="text-sm leading-relaxed text-muted">
                        {currentDay.you}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Guaranteed Deliverable</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* Tools */}
      <Section className="bg-surface/40">
        <SectionHeading
          eyebrow="Our Toolkit"
          title={<>The tools we <span className="text-gradient-gold">work with</span></>}
          subtitle="Best-in-class tools for design, delivery, contracts, and communication."
        />
        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {processTools.map((tool) => (
            <span key={tool} className="rounded-xl border border-gold bg-card/60 px-6 py-3 font-heading text-sm font-medium text-white transition-all hover:border-gold/50 hover:bg-gold/5">
              {tool}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Communication standards */}
      <Section>
        <SectionHeading
          eyebrow="Communication Standards"
          title={<>You'll never be <span className="text-gradient-gold">left in the dark</span></>}
        />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commsStandards.map((c) => {
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

      <CTASection title="Ready to start the clock?" subtitle="Kick off today and see your first working milestone within 7 days — guaranteed." />
    </>
  );
}
