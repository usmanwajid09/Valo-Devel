import Image from "next/image";
import { Mail, MessageCircle, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig, heroBackgrounds } from "@/lib/site";

export function CTASection({
  title = "Ready to Build?",
  subtitle = "Tell us what you're building. You'll have a working milestone in 7 days.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src={heroBackgrounds.cta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/85" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="container relative">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card/60 p-10 text-center md:p-16">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gold/5 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {title.includes("Build") ? (
                <>
                  Ready to <span className="text-gradient-gold">Build?</span>
                </>
              ) : (
                title
              )}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">{subtitle}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg" withArrow>
                Start Your Project
              </Button>
              <Button href={`mailto:${siteConfig.contact.email}`} size="lg" variant="secondary">
                <Mail className="h-4 w-4 text-gold" /> Email Us
              </Button>
              <Button href={siteConfig.contact.whatsappLink} size="lg" variant="secondary">
                <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
              <CalendarCheck className="h-4 w-4 text-gold" />
              Response within 24 hours · Available 24/7
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
