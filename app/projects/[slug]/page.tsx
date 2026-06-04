import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { CtaBand } from "@/components/layout/CtaBand";
import { projects, siteConfig } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <ProjectHero project={project} />
      <ProjectNav current={project} />
      <ProjectMeta project={project} />
      <ProjectOverview project={project} />
      <RelatedProjects current={project} />
      <CtaBand
        title="Have a project like this in mind?"
        description="Tell us the brief and we'll come back with a fixed-price proposal — usually within five business days."
        primaryLabel="Start a conversation"
        secondaryLabel="See more work"
        secondaryHref="/projects"
      />
    </>
  );
}
