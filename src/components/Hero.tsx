"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Clock } from "lucide-react";
import { heroBackgrounds } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";
import { ParticleField } from "@/components/ParticleField";
import { InteractiveShowcase } from "@/components/InteractiveShowcase";
import { siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

const rotatingServices = [
  "Custom Software",
  "AI & Machine Learning",
  "Generative & Agentic AI",
  "Mobile Apps",
  "Cloud & DevOps",
  "Product MVPs",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Backgrounds */}
      <Image
        src={heroBackgrounds.cta}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" aria-hidden="true" />
      <ParticleField className="absolute inset-0" />

      <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              {siteConfig.subTagline}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build.
            <br />
            We <span className="text-gradient-gold">Deliver.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg text-muted"
          >
            An AI-native software engineering partner for US & UK businesses. We build{" "}
            <span className="font-medium text-gold">
              <Typewriter words={rotatingServices} />
            </span>{" "}
            — with a working milestone in your first 7 days.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg" withArrow>
              Start a Project
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              View Services
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Austin, TX · US LLC
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" /> Available 24/7
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> 7-Day Milestone Guarantee
            </span>
          </motion.div>
        </div>

        {/* Showcase Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <InteractiveShowcase />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
