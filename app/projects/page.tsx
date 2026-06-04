import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CtaBand } from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of recent building, contracting and rib-and-block projects delivered by Matsambu Projects across Gauteng and South Africa.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Built by Matsambu, across Gauteng."
        description="From multi-storey apartments to logistics warehouses — a selection of recent builds. Filter by sector to see how we approach each."
      />
      <ProjectGrid />
      <CtaBand
        title="Want a case study for your sector?"
        description="We'll send you a detailed write-up of a comparable project — including programme, budget band and key challenges we solved."
        primaryLabel="Request a case study"
        secondaryLabel="Start a project"
        secondaryHref="/contact"
      />
    </>
  );
}
