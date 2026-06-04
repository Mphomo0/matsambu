import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessBand } from "@/components/home/ProcessBand";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBand } from "@/components/layout/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <StatsBar />
      <FeaturedProjects />
      <ProcessBand />
      <Testimonials />
      <CtaBand />
    </>
  );
}
