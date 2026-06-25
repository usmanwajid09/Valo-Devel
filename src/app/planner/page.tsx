import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { ProjectPlanner } from "@/components/ProjectPlanner";
import { heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interactive Project Planner — Estimate Budget & Team",
  description:
    "Build your team composition, select your custom features, and estimate your project's cost and timeline in 60 seconds with our interactive calculator.",
};

export default function PlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Interactive Estimation"
        image={heroBackgrounds.about}
        crumbs={[{ label: "Project Planner" }]}
        title={<>Configure your team & <span className="text-gradient-gold">estimate scope</span></>}
        subtitle="Create your custom project parameters using our dynamic scoping calculator. Select services, features, and security levels to see a real-time estimate of cost, timeline, and team headcount."
      />

      <Section>
        <div className="container-tight">
          <ProjectPlanner />
        </div>
      </Section>
    </>
  );
}
