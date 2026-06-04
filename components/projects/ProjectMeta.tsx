import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { services, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

type ProjectMetaProps = {
  project: Project;
};

const categoryLabels: Record<Project["category"], string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  const items: { label: string; value: string }[] = [
    { label: "Sector", value: categoryLabels[project.category] },
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
  ];
  if (project.client) items.push({ label: "Client", value: project.client });
  if (project.size) items.push({ label: "Size", value: project.size });
  if (project.duration)
    items.push({ label: "Programme", value: project.duration });

  const linkedServices = project.services
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section className="border-y border-steel-200/60 bg-white py-10 sm:py-12">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-500">
                  {item.label}
                </dt>
                <dd className="text-base font-semibold text-navy-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
          {linkedServices.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-steel-200/60 pt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-steel-500">
                Services
              </span>
              {linkedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-900",
                    "transition-colors hover:bg-navy-900 hover:text-white",
                  )}
                >
                  <span className="h-1 w-1 rounded-full bg-accent-500 transition-colors group-hover:bg-accent-400" />
                  {service.title}
                  <ArrowRightIcon className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
