import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StorySection } from "@/components/about/StorySection";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { TeamSection } from "@/components/about/TeamSection";
import { CtaBand } from "@/components/layout/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Matsambu Projects — nearly two decades of building across Gauteng with safety, quality and on-time delivery at the core.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A construction company built on craft and accountability."
        description="Matsambu Projects is a Johannesburg-based team delivering buildings, full general contracting, and rib-and-block floor systems across South Africa. Founded in 2007, family-led, and still run by the people on the tools."
      />
      <StorySection />
      <ValuesGrid />
      <TeamSection />
      <CtaBand
        title="Have a project in mind?"
        description="Whether it's a single home or a 200-unit development, we'd love to hear about it."
        primaryLabel="Get in touch"
        secondaryLabel="See our services"
        secondaryHref="/services"
      />
    </>
  );
}
