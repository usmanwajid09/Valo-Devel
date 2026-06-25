import { services } from "./services";
import { Info, Users, Settings, Code, Layers, Briefcase } from "lucide-react";

export type NavLink = { label: string; href: string; description?: string; icon?: any };

export const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
  description: s.short,
  icon: s.icon,
}));

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about", description: "Who we are and why we exist.", icon: Info },
  { label: "Team", href: "/about#team", description: "Meet our engineering and management team.", icon: Users },
  { label: "Process", href: "/process", description: "Our 7-day onboarding, day by day.", icon: Settings },
  { label: "Project Planner", href: "/planner", description: "Estimate your project budget & team makeup.", icon: Code },
  { label: "Client Space", href: "/client-space", description: "View our real-time sprint board & tools.", icon: Layers },
  { label: "Careers", href: "/careers", description: "Join the Valor Devs team.", icon: Briefcase },
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
