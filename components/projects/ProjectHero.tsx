import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { projects, type Project } from "@/lib/content";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const position = index >= 0 ? `${index + 1} of ${projects.length}` : null;

  return (
    <section className="relative isolate -mt-20 overflow-hidden pt-20">
      <div className="relative h-[58vh] min-h-[440px] w-full sm:h-[72vh] sm:min-h-[520px] lg:h-[80vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/55 to-navy-900/30" />
        <div className="absolute inset-0 concrete-texture opacity-30" />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 pb-12 sm:pb-16">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-white/30">/</li>
                <li>
                  <Link
                    href="/projects"
                    className="transition-colors hover:text-accent-400"
                  >
                    Projects
                  </Link>
                </li>
                <li aria-hidden className="text-white/30">/</li>
                <li className="text-accent-400" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                {project.category} · {project.year}
              </span>
              {position && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                  {position} projects
                </span>
              )}
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base text-steel-200 sm:text-lg">
              {project.location}
            </p>
            <Link
              href="/projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-accent-400"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-accent-500/60">
                <ArrowRightIcon className="h-3.5 w-3.5 -rotate-180" />
              </span>
              View all projects
            </Link>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
