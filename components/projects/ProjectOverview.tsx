import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/Icons";
import type { Project } from "@/lib/content";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  const [firstGallery, ...restGallery] = project.gallery;
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                <span className="h-px w-8 bg-accent-500" />
                The project
              </span>
              <h2 className="mt-4 text-balance text-3xl font-bold text-navy-900 sm:text-4xl">
                Scope of work
              </h2>
              <p className="mt-6 text-pretty text-base leading-relaxed text-steel-600 sm:text-lg">
                {project.overview}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              {firstGallery && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
                  <Image
                    src={firstGallery}
                    alt={`${project.title} — construction in progress`}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
          </div>
        </div>

        {project.highlights.length > 0 && (
          <Reveal className="mt-16 sm:mt-20">
            <div className="rounded-3xl bg-navy-900 p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                <span className="h-px w-8 bg-accent-500" />
                Key features
              </span>
              <h3 className="mt-4 max-w-2xl text-balance text-2xl font-bold text-white sm:text-3xl">
                What we delivered.
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-steel-200 sm:text-base"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {restGallery.length > 0 && (
          <Reveal className="mt-16 sm:mt-20">
            <div className="grid gap-4 sm:grid-cols-2">
              {restGallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — image ${i + 2}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
