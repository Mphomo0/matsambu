import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { projects, type Service } from "@/lib/content";

type ServiceProjectsProps = {
  service: Service;
};

export function ServiceProjects({ service }: ServiceProjectsProps) {
  const related = projects
    .filter((p) => p.services.includes(service.slug))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="bg-concrete-100 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title={`Projects delivered with this service.`}
              description={`A snapshot of recent builds where we provided ${service.title.toLowerCase()}.`}
            />
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <LinkButton href="/projects" variant="outline">
              View all projects
              <ArrowRightIcon className="h-4 w-4" />
            </LinkButton>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((project) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent transition-opacity duration-300 group-hover:from-navy-900/95" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-400">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-steel-200">{project.location}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
