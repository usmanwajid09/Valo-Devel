import { services } from "./services";

export type NavLink = { label: string; href: string; description?: string };

export const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
  description: s.short,
}));

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about", description: "Who we are and why we exist." },
  { label: "Team", href: "/about#team", description: "Meet the four specialists." },
  { label: "Process", href: "/process", description: "Our 7-day onboarding, day by day." },
  { label: "Project Planner", href: "/planner", description: "Estimate your project budget & team makeup." },
  { label: "Client Space", href: "/client-space", description: "View our real-time sprint board & tools." },
  { label: "Careers", href: "/careers", description: "Join the Valor Devs team." },
];

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Planner", href: "/planner" },
  { label: "Client Space", href: "/client-space" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];
