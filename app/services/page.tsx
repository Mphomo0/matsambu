import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { CtaBand } from "@/components/layout/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Building construction, general building contracting, and rib-and-block supply and installation — delivered by one accountable team at Matsambu Projects.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need under one roof."
        description="From foundations to final finishes — and every trade, supplier and inspection in between — we take ownership of the whole programme so you don't have to."
      />
      <section className="pb-4 pt-20 sm:pt-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we offer"
              title="Three core services, fully integrated."
              description="Most clients start with one of these — many end up using all three."
            />
          </Reveal>
        </Container>
      </section>
      {services.map((service, i) => (
        <ServiceDetail key={service.slug} service={service} index={i} />
      ))}
      <ProcessTimeline />
      <CtaBand
        title="Not sure which service you need?"
        description="Tell us about your project in plain language. We'll suggest the right service — or a combination — over a 30-minute call."
        primaryLabel="Book a call"
        secondaryLabel="See our projects"
        secondaryHref="/projects"
      />
    </>
  );
}
