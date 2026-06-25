import Link from "next/link";
import { Linkedin, Github, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { industries } from "@/lib/content";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Project Planner", href: "/planner" },
  { label: "Client Space", href: "/client-space" },
  { label: "Trust Center", href: "/about#trust-center" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.6 7.3c-1.9 0-3.4 1.2-4 3.2-1-1.5-1.7-3.3-2.1-4.8H9.9v5.8c0 1.2-.9 2.1-2.1 2.1s-2.2-1-2.2-2.2V5.7H2.9v5.6c0 2.7 2.2 4.9 4.9 4.9s4.8-2.2 4.8-4.9v-1c.4.8.9 1.6 1.5 2.3l-1.3 6.1h2.7l.9-4.4c.8.5 1.7.8 2.7.8 2.5 0 4.5-2 4.5-4.7s-2-4.6-4.6-4.6Zm0 6.6c-.8 0-1.6-.3-2.2-.8l.2-.8v-.1c.2-.8.7-2.2 2-2.2 1 0 1.8.8 1.8 1.9s-.8 2-1.8 2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.slogan} An AI-native software engineering partner for US & UK businesses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.upwork} label="Upwork">
                <UpworkIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Services */}
          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Company + Industries */}
          <FooterCol title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-5 space-y-3.5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {industries.slice(0, 4).map((i) => (
                <Link key={i.slug} href="/industries" className="rounded-md border border-gold bg-gold/5 px-2 py-1 text-muted transition-colors hover:text-white">
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-7 text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. A {siteConfig.legalEntity} Company · {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold/5 px-3 py-1.5 font-medium text-gold/90">
            Registered in the USA 🇺🇸
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted transition-colors hover:text-gold">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-gold/5 text-muted transition-colors hover:border-gold/60 hover:text-gold"
    >
      {children}
    </a>
  );
}
