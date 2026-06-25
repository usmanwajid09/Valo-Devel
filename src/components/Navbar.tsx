"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { serviceLinks, companyLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site";

const topLevel = [
  { label: "Services", dropdown: "services" as const },
  { label: "Company", dropdown: "company" as const },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "company" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-gold/15 py-2.5" : "border-b border-transparent py-4",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="container flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {topLevel.map((item) =>
            "href" in item && item.href ? (
              <NavItem key={item.label} href={item.href} active={pathname.startsWith(item.href)}>
                {item.label}
              </NavItem>
            ) : (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.dropdown!)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-white",
                    openMenu === item.dropdown && "text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      openMenu === item.dropdown && "rotate-180",
                    )}
                  />
                </button>
              </div>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-gold bg-gold/5 px-4 py-2 text-sm text-white transition-colors hover:bg-gold/10 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4 text-gold" />
            24/7
          </a>
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            Start a Project
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-gold/5 text-white lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="container pt-3">
              <div className="glass overflow-hidden rounded-2xl border border-gold/20 p-2 shadow-card">
                {openMenu === "services" ? (
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((link) => (
                      <MegaLink key={link.href} {...link} />
                    ))}
                    <Link
                      href="/services"
                      className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-xl bg-gold/10 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/15"
                    >
                      View all services <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-1">
                    {companyLinks.map((link) => (
                      <MegaLink key={link.href} {...link} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto border-l border-gold/20 bg-surface px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-gold/5 text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                <MobileGroup title="Services" links={serviceLinks} />
                <MobileGroup title="Company" links={companyLinks} />
                {[
                  { label: "Industries", href: "/industries" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Insights", href: "/insights" },
                  { label: "Contact", href: "/contact" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <Button href="/contact" className="w-full" withArrow>
                  Start a Project
                </Button>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold/5 py-3 text-sm text-white"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  WhatsApp · {siteConfig.contact.whatsapp}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active ? "text-white" : "text-muted hover:text-white",
      )}
    >
      {children}
      <span
        className={cn(
          "absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100",
          active && "scale-x-100",
        )}
      />
    </Link>
  );
}

function MegaLink({ label, href, description }: { label: string; href: string; description?: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
    >
      <div className="text-sm font-medium text-white transition-colors group-hover:text-gold">{label}</div>
      {description && <div className="mt-0.5 text-xs leading-relaxed text-muted">{description}</div>}
    </Link>
  );
}

function MobileGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/5"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 text-gold transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-0.5 pb-2 pl-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-4 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
